import React from "react";

export default function HugeTitle({ title }) {
  return (
    <h2 className="text-white flex bold flex-col gap-3 text-5xl font-semibold tracking-wider mt-6">
      {title}
    </h2>
  );
}
