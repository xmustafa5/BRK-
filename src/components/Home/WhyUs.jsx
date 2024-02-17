import React from "react";
import { WhyUsIcons } from "../../assets/svg";
import whuUsImg from "../../assets/img/whyUs/Images.png";
export default function WhyUs() {
  return (
    <div className="h-full">
      <div className="ImageWhyUs h-[60vh]"></div>
      <div className="h-[60vh] relative flex justify-center items-center">
        <div className="bg-white text  p-6 absolute  -top-[200px] flex ">
          <div className="w-[50%] flex justify-center items-start gap-4 flex-col">
            <div className="bg-gray-200 w-fit flex  ">
              <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
                |
              </p>
              <p className="text-md  regular text-black-120 font-medium p-1">
                Why us
              </p>
            </div>
            <h1 className="flex  flex-col gap-3 max-w-[500px]  text-black-120 bold text-3xl font-semibold tracking-wider">
              We provide full range global Piping and fittings solution
            </h1>
            <p className="max-w-[500px] text-[16px] text-gray-120">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <p className="max-w-[500px] text-[16px] text-gray-120">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </p>
            <div className="w-full flex justify-center gap-4 flex-col items-start">
              <div className="flex  items-center justify-center gap-4 text-md bold">
                {WhyUsIcons} Consignment On Time
              </div>
              <div className="flex  items-center justify-center gap-4 text-md bold">
                {WhyUsIcons} Flexible Deals Covers All Iraq
              </div>
              <div className="flex  items-center justify-center gap-4 text-md bold">
                {WhyUsIcons} Wide Range Products
              </div>
            </div>
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <img src={whuUsImg} alt="whyUs" className="w-[500px] pr-8" />
          </div>
        </div>
      </div>
    </div>
  );
}
