import React from "react";
import CertifiPng from "../../assets/img/partners/certificate.png";
const Certificate = () => {
  return (
    <div className="w-full relative flex h-[800px] bg-gray-20">
      <div className="absolute ml-[540px] mt-24 border-[20px] border-gray-300">
        <img width={400} height={400} src={CertifiPng} alt="certificate " />
        <div className="absolute -bottom-5 w-36 cursor-pointer tracking-wide opacity-90 -left-5 h-10 text-center text-lg font-bold flex justify-center items-center bg-[#FABA20]">
          PREVIEW
        </div>
      </div>
      <div className=" w-[800px] bg-[#091242]"></div>
    </div>
  );
};

export default Certificate;
