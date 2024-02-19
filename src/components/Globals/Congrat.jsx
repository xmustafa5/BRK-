import React from "react";
import CertifiPng from "../../assets/img/partners/certificate.png";
import congratIcons from "../../assets/img/congrat/image 1.png";
import Pattern from "../../assets/img/congrat/Pattern.png";

export default function Congrat() {
  return (
    <section className=" relative  flex flex-col md:flex-row bg-black-120 h-[130vh]  md:h-[80vh] ">
      <div className="w-[100%] md:w-[40%] relative ">
        <div className="absolute top-[600px] right-10 mx-auto md:top-20 md:-right-32 z-40 border-[20px]">
          <img
            className="object-cover w-[300px] md:w-[350px]"
            src={CertifiPng}
            alt="certificate"
          />
          <div className="absolute -bottom-5 w-36 cursor-pointer tracking-wide opacity-90 -left-5 h-10 text-center text-lg font-bold flex justify-center items-center bg-[#FABA20]">
            PREVIEW
          </div>
        </div>
      </div>

      <div className="bg-gray-20 w-[100%] md:w-[60%] flex justify-center relative items-start pl-[50px] md:pl-[200px] gap-10 flex-col">
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
          <h1 className="flex bold flex-col gap-3  text-black-120 text-2xl md:text-5xl font-semibold tracking-wider">
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
          <div className="flex gap-4 md:gap-10 justify-center items-center">
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
          </div>
        </div>
      </div>

      {/* <div className="absolute left-36  mt-32 md:ml-[550px]  border-[20px] z-30 border-gray-300">
        <img
          className="object-cover w-[300px] md:w-[350px]" 
          src={CertifiPng}
          alt="certificate "
        />
        <div className="absolute -bottom-5 w-36 cursor-pointer tracking-wide opacity-90 -left-5 h-10 text-center text-lg font-bold flex justify-center items-center bg-[#FABA20]">
          PREVIEW
        </div>
      </div>
      <div className=" w-[600px] md:w-[800px] bg-[#091242]"></div>

      <div className="bg-gray-20  flex justify-center relative items-start pl-[50px] md:pl-[200px] gap-10 flex-col">
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
          <h1 className="flex bold flex-col gap-3  text-black-120 text-2xl md:text-5xl font-semibold tracking-wider">
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
          <div className="flex gap-4 md:gap-10 justify-center items-center">
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
          </div>
        </div>
      </div> */}
    </section>
  );
}
