import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-[100px] border border-slate-400 text-center flex justify-evenly items-center">
      <div className="flex space-x-5">
        <div className="text-center text-slate-300 hover:cursor-pointer hover:underline">
          © 2023 Copyright: Twuttur
        </div>
        <div className="text-slate-300 hover:cursor-pointer hover:underline">
          About
        </div>
      </div>
    </div>
  );
}
