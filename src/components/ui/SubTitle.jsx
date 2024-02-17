import React from "react";

export default function SubTitle({title}) {
  return (
    <div className="bg-gray-200 flex ">
      <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
        |
      </p>
      <p className=" text-[#666] p-2 Medium text-md regular ">
        {title}
      </p>
    </div>
  );
}
