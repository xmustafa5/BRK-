import React from "react";

export default function MainTitle({ title }) {
  return (
    <div className="bg-gray-200 flex ">
      <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
        |
      </p>
      <p className="text-md regular text-black-120 font-medium p-1">{title}</p>
    </div>
  );
}
