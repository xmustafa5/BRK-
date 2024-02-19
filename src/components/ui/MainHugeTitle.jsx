import React from "react";

export default function MainHugeTitle({ title, haveSpan = false }) {
  return (
    <h2 className="flex Extrabold flex-col gap-3 mt-4 text-white font-semibold tracking-wider text-3xl sm:text-6xl md:text-7xl">
      {title} {haveSpan ? <span>Partner</span> : null}
    </h2>
  );
}
