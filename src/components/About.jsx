import React from "react";
import mainImage from "../assets/img/about/image.png";
import imaging from "../assets/img/about/imaging.png";
export default function About() {
  return (
    <div className="flex  h-[85vh]">
      <div className="  relative flex justify-center items-center w-[50vw]">
        <img src={imaging} className="w-[540px]" alt="" />
        <img
          src={mainImage}
          alt=""
          className=" absolute w-[170px]  bottom-7 right-4 border-8 border-white"
        />
      </div>
      <div className="flex justify-center gap-5 items-start flex-col">
        <div className="bg-gray-200 flex ">
          <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
            |
          </p>
          <p className="text-md regular text-black-120 font-medium p-1">
            Company overview
          </p>
        </div>
        <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
          About Us
        </h1>
        <p className="max-w-[500px] text-[16px] text-gray-120">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition.
        </p>
        <p className="max-w-[500px] text-[16px] text-gray-120">
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
        </p>
        <h4 className="text-black-120 bold text-[16px]">Vision</h4>
        <div className="bg-gray-200 flex ">
          <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
            |
          </p>
          <p className=" text-[#666] p-2 Medium text-md regular ">
            Establishing presence locally, and launch towards markets globalism
          </p>
        </div>
        <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
          About Us
        </button>
      </div>
    </div>
  );
}
