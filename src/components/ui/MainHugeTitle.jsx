import React from "react";

export default function MainHugeTitle({ title, haveSpan = false }) {
  return (
    <h2 className="flex Extrabold flex-col gap-3 mt-4 text-white text-7xl font-semibold tracking-wider">
      {title} {haveSpan ? <span>Partner</span> : null}
    </h2>
  );
}
