import React from "react";
import { twMerge } from "tailwind-merge";

export default function Paragraph({ p, main = false ,className }) {
  return (
    <p
      className={twMerge(`max-w-[500px] Regular text-[16px] re mediumAr leading-6  ${
        main ? "text-white text-start" : "text-gray-120"
      } `,className)}
    >
      {p}
    </p>
  );
}
