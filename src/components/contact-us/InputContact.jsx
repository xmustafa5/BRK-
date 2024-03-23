import React from "react";

export default function InputContact({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className=" bg-blue-120 border border-white h-[7vh] w-full placeholder:text-white px-4 text-white"
    />
  );
}
