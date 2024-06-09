import React from "react";
import MainHugeTitle from "../ui/MainHugeTitle";
import MainLabel from "../ui/MainLabel";

export default function Distributors({ar}) {
  return (
    <div className="home relative !h-[70vh]">
      <div className="flex container w-full items-center">
        <div className="flex gap-5 flex-col">
          <MainLabel title={ar? 'الاستثمار الصناعي'  :"Industrial Investment"} />
          <MainHugeTitle title={ar? 'الموزعين' :"Our Distributors"} />
        </div>
      </div>
    </div>
  );
}
