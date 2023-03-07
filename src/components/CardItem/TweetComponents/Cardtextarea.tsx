import { getDatabase, ref, set } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../../../../firebase";
import { v4 as uuid } from "uuid";

const Cardtextarea = () => {
  const bodyRef = useRef(null);

  return (
    <div className="w-[510px] py-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDoc(doc(db, "tweets", uuid()), {
            body: bodyRef.current?.value,
          })
            .then(() => console.log("tweet created successfully"))
            .catch((err) =>
              console.log(`tweet creation failed with error: ${err}`)
            );
        }}
      >
        <div className="flex flex-col items-end border-b border-blue-200 py-6 px-2 space-y-2">
          <textarea
            name="body"
            ref={bodyRef}
            maxLength={550}
            className="h-[250px] appearance-none bg-transparent border-none w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none text-lg verflow-y-scroll no-scrollbar resize-none"
            placeholder="What's happening?"
          />
        </div>
        <div className="flex justify-end py-3">
          <button
            className="w-[80px] bg-blue-500 hover:bg-blue-700 hover:border-blue-700 text-sm text-slate-100 py-2 px-2 rounded-2xl font-bold"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
      <div className="flex"></div>
    </div>
  );
};
export default Cardtextarea;
