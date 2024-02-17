import React from "react";

export default function MainHugeTitle({
  title = "Your Supportive",
  haveSpan = false,
}) {
  return (
    <h1 className="flex Extrabold flex-col gap-3  text-white text-5xl font-semibold tracking-wider">
      {title} {haveSpan ? <span>Partner</span> : null}
    </h1>
  );
}
