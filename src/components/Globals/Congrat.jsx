import React from "react";
import congratImage from "../../assets/img/congrat/image 5.png";
import congratIcons from "../../assets/img/congrat/image 1.png";
import Pattern from "../../assets/img/congrat/Pattern.png";
export default function Congrat() {
  return (
    <div className="w-full h-screen flex justify-center items-centerd">
      <div className="w-[40%] text-blue-120 bg-blue-120 relative flex justify-center items-center">
        <img
          src={congratImage}
          alt="congrat"
          className=" absolute z-50 -right-[170px] w-[320px] "
        />
        d
      </div>
      <div className="bg-gray-20 w-[60%] flex justify-center relative items-start pl-[200px] gap-10 flex-col">
        <div className="absolute z-10 w-full h-full  left-0 flex justify-center items-center">
          <img src={Pattern} alt="" className="w-full " />
        </div>
        <div className="h-full z-20 flex flex-col justify-center gap-10">
          <div className="bg-gray-200 flex w-fit  ">
            <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
              |
            </p>
            <p className="text-md regular text-black-120 font-medium p-1">
              ISO Certificates
            </p>
          </div>
          <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
            Company Certificates
          </h1>
          <p className="max-w-[500px] text-[16px] text-gray-120">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
          </p>
          <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
            Explore More
          </button>
          <div className="flex gap-10 justify-center items-center">
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
          </div>
        </div>
      </div>
    </div>
  );
}
