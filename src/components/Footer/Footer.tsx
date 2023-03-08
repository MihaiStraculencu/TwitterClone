import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[100px] border text-center flex justify-evenly items-center">
      <div className="flex space-x-5">
        <div className="text-center text-black hover:cursor-pointer hover:underline">
          © 2023 Copyright: Twuttur
        </div>
        <div>About</div>
      </div>
    </div>
  );
}
