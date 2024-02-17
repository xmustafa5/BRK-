import React from "react";

export default function Button({title}) {
  return (
    <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
      {title}
    </button>
  );
}
