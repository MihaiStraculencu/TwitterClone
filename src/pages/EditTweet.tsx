import { useParams } from "react-router";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";

export default function EditTweet() {
  const [input, setInput] = useState("");
  const [tweet, setTweet] = useState<any>();
  const tweetId = useParams().tweetId as string;
  const navigate = useNavigate();

  const docRef = doc(db, "tweets", tweetId);

  useEffect(() => {
    getDoc(docRef).then((docSnap) => {
      const tweet = docSnap.data();

      setTweet(tweet as any);
    });
  }, []);

  const onSubmit = (data: any) => {
    const tweetRef = doc(db, "tweets", tweetId);

    updateDoc(tweetRef, {
      body: data.body,
    })
      .then(() => navigate(`/`))
      .catch((err) => console.log(`tweet creation failed with error: ${err}`));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex justify-center">
      <div className="px-4 py-2 border rounded-2xl bg-white flex flex-col justify-between">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-montserrat text-lg break-words resize-none w-[500px]">
            {tweet ? (
              <textarea
                {...register("body", { required: true })}
                onChange={(e: any) => setInput(e.target.value)}
                maxLength={380}
                className="h-[350px] appearance-none bg-transparent border-none w-full text-gray-700 p-5 leading-tight focus:outline-none text-lg verflow-y-scroll no-scrollbar resize-none"
              >
                {tweet.body}
              </textarea>
            ) : null}
          </div>
          <div className="text-gray-600 text-lg text-end flex justify-between">
            <div>
              {errors.body && (
                <span className=" ease-out transition duration-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col space-y-4 px-3 justify-end">
              <div>{input.length}/380</div>
              <button
                className="w-[80px] bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-sm text-slate-100 py-2 px-2 rounded-2xl font-bold"
                type="submit"
              >
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
