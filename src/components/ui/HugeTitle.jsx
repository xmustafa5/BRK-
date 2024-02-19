import React from "react";

export default function HugeTitle({ title }) {
  return (
    <h2 className="flex bold flex-col gap-3 text-black-120 text-2xl font-semibold tracking-wider mt-6 sm:text-4xl md:text-5xl">
      {title}
    </h2>
  );
}
