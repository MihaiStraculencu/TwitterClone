import { getDatabase, ref, set } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore";
import { useRef, useState } from "react";
import { db } from "../../../../firebase";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

const Cardtextarea = () => {
  const [input, setInput] = useState("");

  const inputHandler = (e: any) => {
    setInput(e.target.value);
  };

  let navigate = useNavigate();
  const redirectClick = () => {
    let path = `/`;
    navigate(path);
  };

  type Input = { body: string };

  const onSubmit: SubmitHandler<Input> = (data) => {
    setDoc(doc(db, "tweets", uuid()), {
      body: data.body,
    })
      .then(() => redirectClick())
      .catch((err) => console.log(`tweet creation failed with error: ${err}`));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  return (
    <div className="w-[510px] py-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-end border-b border-blue-200 py-6 px-2 space-y-2">
          <textarea
            {...register("body", { required: true })}
            onChange={inputHandler}
            maxLength={550}
            className="h-[250px] appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none text-lg verflow-y-scroll no-scrollbar resize-none"
            placeholder="What's happening?"
          />
        </div>
        <div className="text-gray-600 text-lg text-end flex  justify-between">
          <div>
            {errors.body && (
              <span className=" ease-out transition duration-500">
                This field is required
              </span>
            )}
          </div>
          <div>{input.length}/550</div>
        </div>

        <div className="flex justify-end py-3">
          <button
            className="w-[80px] bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-sm text-slate-100 py-2 px-2 rounded-2xl font-bold cursor-pointer"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );

  let lenght: number;
};
export default Cardtextarea;
