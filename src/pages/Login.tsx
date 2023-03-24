import { useForm } from "react-hook-form";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { signInWithEmailAndPassword } from "firebase/auth";
import cookie from "cookiejs";

export const Login = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();
  const user = useGetCurrentUser();

  useEffect(() => {
    user && navigate("/");
  }, [user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="space-y-8 w-[500px] flex flex-col justify-center items-center">
      <div className=" border rounded-2xl pb-10 bg-white flex flex-col w-full p-6 gap-4">
        <div className="text-lg">Login</div>
        <form
          className="flex flex-col space-y-8  pb-0 text-gray-700"
          onSubmit={handleSubmit((data) => {
            signInWithEmailAndPassword(auth, data.email, data.password)
              .then((credentials) => {
                if (!credentials.user.email) {
                  throw new Error(
                    "No user found after successfully logging in"
                  );
                }

                cookie.set("user", credentials.user.email, 1);

                window.location.reload();
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setAuthError(error.code);

                console.log(errorCode, errorMessage);
              });
          })}
        >
          <div className="flex flex-col">
            <input
              {...register("email", { required: true, minLength: 6 })}
              type="email"
              name="email"
              placeholder="Email"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />

            {errors.email?.type === "required" && (
              <span className="text-red-600 text-sm">Email is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              name="password"
              placeholder="Password"
              className="h-10 focus:outline-none border-b-2 bg-transparent"
            />

            {errors.password?.type === "minLength" && (
              <span className="text-red-600 text-sm">
                Minimum password length is 6 digits
              </span>
            )}
            {errors.password?.type === "required" && (
              <span className="text-red-600 text-sm">Password is required</span>
            )}
          </div>

          <button
            type="submit"
            className="h-10 bg-blue-500 text-white rounded "
          >
            Login
          </button>

          <Link to={"/resetPassword"} className="hover:underline">
            Forgot your password?
          </Link>

          {authError && (
            <span className="text-red-600 text-sm">{authError}</span>
          )}
        </form>
      </div>
    </div>
  );
};
