import React from "react";

export default function Paragraph({ p, main = false }) {
  return (
    <p
      className={`max-w-[500px] text-[16px] leading-6 ${
        main ? "text-white" : "text-gray-120"
      } `}
    >
      {p}
    </p>
  );
}
