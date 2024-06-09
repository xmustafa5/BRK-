import React from "react";

export default function Button({title , ar}) {
  return (
    <button className={`mediumAr Medium  bg-yellow-120 w-fit px-8 py-2 rounded-[0px]`}>
      {title}
    </button>
  );
}
