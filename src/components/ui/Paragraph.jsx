import React from "react";

export default function Paragraph({p ,main=false}) {
  console.log(main);
  return (
    <p className={`max-w-[500px] text-[16px] ${main  ? 'text-white' : 'text-gray-120'} `}>
      {p}
    </p>
  );
}
