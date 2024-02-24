import React from "react";
import MainHugeTitle from "../ui/MainHugeTitle";
import MainLabel from "../ui/MainLabel";

export default function Distributors() {
  return (
    <div className="home relative !h-[70vh]">
      <div className="flex ml-24 w-full items-center">
        <div className="flex gap-5 flex-col">
          <MainLabel title="Industrial Investment" />
          <MainHugeTitle title="Our Distributors" />
        </div>
      </div>
    </div>
  );
}
