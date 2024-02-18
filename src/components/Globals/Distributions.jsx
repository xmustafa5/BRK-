import React from "react";
import {
  DistributionsFour,
  DistributionsOne,
  DistributionsThree,
  DistributionsTwo,
} from "../../assets/svg/Distributions";

import MainTitle from "../ui/MainTitle";
import SectionTitle from "../ui/Section-title";

export default function Distributions() {
  return (
    <div
      id="Distributions"
      className="flex justify-center items-center flex-col h-[60vh] gap-6"
    >
      <div className="bg-gray-200 flex  ">
        <MainTitle title="distributors" />
      </div>
      <SectionTitle title="Our Distributors" />
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
