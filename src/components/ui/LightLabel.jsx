import React from "react";

export default function LightLabel({ title }) {
  return (
    <div className="bg-[#e8e8e880] flex w-fit">
      <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
        |
      </p>
      <p className="text-md regular text-black-120 font-medium py-1 px-2 uppercase">
        {title}
      </p>
    </div>
  );
}
