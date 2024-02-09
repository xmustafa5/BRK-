import React from "react";
import { partnerIcons } from "../assets/svg";

export default function Partners() {
  return (
    <div className="flex justify-center items-center flex-col h-[50vh] gap-6">
      <div className="bg-gray-200 flex  ">
        <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
          |
        </p>
        <p className="text-md regular text-black-120 font-medium p-1">
          Partners
        </p>
      </div>
      <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
        Our Partners
      </h1>
      <div className="flex  mx-20 flex-wrap gap-4">
        <div className="mt-5 relative min-w-[200px]   flex-1 w-full">
          <div className="flex justify-center gap-10 items-center">
            <div className="flex justify-center items-center flex-col gap-4">
              {partnerIcons}
              <p className="text-[20px]">Bdoor Baghdad</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              {partnerIcons}
              <p className="text-[20px]">Bdoor Baghdad</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              {partnerIcons}
              <p className="text-[20px]">Bdoor Baghdad</p>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              {partnerIcons}
              <p className="text-[20px]">Bdoor Baghdad</p>
            </div>
          </div>
        </div>
      </div>
      <button className="Regular mt-2 bg-blue-120 w-fit px-8 py-2 text-white rounded-[0px]">
        Show All Partners
      </button>
    </div>
  );
}
