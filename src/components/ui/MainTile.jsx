import React from "react";
export default function MainTile({ title }) {
  return (
    <div className="GradientColor flex ">
      <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
        |
      </p>

      <p className="text-white text-lg regular pl-1 ">{title}</p>
    </div>
  );
}
