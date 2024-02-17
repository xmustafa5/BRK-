import React from "react";

export default function HugeTitle({ title }) {
  return (
    <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
      {title}
    </h1>
  );
}