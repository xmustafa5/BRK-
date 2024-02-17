import React from "react";
export default function MainTile({ title }) {
  return (
    <div className="bg-[#041C3780] flex w-fit">
      <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
        |
      </p>

      <p className="text-white text-lg regular pl-1 uppercase bold">{title}</p>
    </div>
  );
}
