import React from "react";
import { DistributionsFour, DistributionsOne, DistributionsThree, DistributionsTwo } from "../assets/svg/Distributions";

export default function Distributions() {
  return (
    <div id="Distributions" className="flex justify-center items-center flex-col h-[60vh] gap-6">
      <div className="bg-gray-200 flex  ">
        <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
          |
        </p>
        <p className="text-md regular text-black-120 font-medium p-1">
          Distributions
        </p>
      </div>
      <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
        Our Distributions
      </h1>
      <div className="flex  mx-20 flex-wrap gap-4">
        <div className="mt-5 relative min-w-[200px]   flex-1 w-full">
          <div className="flex justify-center gap-10 items-center">
            <div className="flex justify-center items-center flex-col gap-4">
              {DistributionsOne}
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              {DistributionsThree}
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              {DistributionsTwo}
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              {DistributionsFour}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
