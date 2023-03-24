import { useForm } from "react-hook-form";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";

export const CreateNewUser = () => {
  const currentUser = useGetCurrentUser();
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      {currentUser && currentUser.isAdmin ? (
        <div className="w-[500px] flex flex-col justify-center items-center">
          <div className="px-4 py-2 border rounded-2xl pb-8 bg-white flex flex-col w-full space-y-5">
            <form
              className="flex flex-col space-y-8 w-full h-full p-6 pb-0 text-gray-700"
              // Normally, the passwords would be hashed server side. Never store passwords in plain text.
              onSubmit={handleSubmit((data) => {
                createUserWithEmailAndPassword(auth, data.email, uuid())
                  .then(() => {
                    sendPasswordResetEmail(auth, data.email);
                    setStatus(
                      "User created! A password reset email was sent to the new user."
                    );
                    console.log("user created");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(error.code);
                    console.log(errorCode, errorMessage);
                  });

                setDoc(doc(db, "users", uuid()), {
                  createdAt: new Date(),
                  email: data.email,
                })
                  .then(() => {
                    console.log("userinfo created");
                  })
                  .catch((err) =>
                    console.log(`tweet creation failed with error: ${err}`)
                  );
              })}
            >
              <div className="text-lg">Create new user</div>
              <div className="flex flex-col">
                <input
                  {...register("email", { required: true, minLength: 6 })}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-10 focus:outline-none border-b-2 bg-transparent"
                />

                {errors.email?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    Email is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="h-10 bg-blue-500 text-white rounded"
              >
                Create new user
              </button>

              {status ? <div>{`Status: ${status}`}</div> : null}

              {error && <span className="text-red-600 text-sm">{error}</span>}
            </form>
            <button className="hover:underline">Reset Password</button>
          </div>
        </div>
      ) : (
        <div>Unauthorized</div>
      )}
    </>
  );
};
