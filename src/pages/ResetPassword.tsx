import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  return (
    <div className="space-y-8 w-[500px] flex flex-col justify-center items-center">
      <div className=" border rounded-2xl pb-10 bg-white flex flex-col w-full p-6 gap-4">
        <div className="text-lg">Login</div>
        <form
          className="flex flex-col space-y-8 w-full h-full text-gray-700"
          onSubmit={handleSubmit((data) => {
            sendPasswordResetEmail(auth, data.email).then(() => {
              setStatus(
                "User created! A password reset email was sent to the new user."
              );
            });

            console.log("user created");
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

          <button type="submit" className="h-10 bg-blue-500 text-white rounded">
            Reset Password
          </button>

          {status ? <div>{`Status: ${status}`}</div> : null}

          {error && <span className="text-red-600 text-sm">{error}</span>}
        </form>
      </div>
    </div>
  );
}
