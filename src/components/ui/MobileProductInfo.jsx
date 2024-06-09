import React, { useContext } from "react";
import { pdf } from "../../assets/svg/Product";
import tubes from "../../assets/img/Product/tubes.png";
import LanguageContext from "../../LanguageContext";

const MobileProductInfo = () => {
  const { ar } = useContext(LanguageContext);

  return (
    <div className="border border-gray-200 grid grid-cols-2 md:text-2xl   p-2 m-3">
      <div className=" border-r-2 ">
        <div className="w-[128px]">
          <img src={tubes} alt="" className="mb-4" />
        </div>
        <p className="w-[140px] md:w-auto md:text-2xl text-[16px] font-bold text-black mb-2">
          Georg Fischer PVC Pipe, 2m long x 32mm OD,2.4mm
          <br />
          Wall Thickness
        </p>
        <div className="flex flex-col ">
          <h4 className="text-[#666] md:text-2xl text-lg">RS Stock No: </h4>
          <h4 className="text-[#087EEF] font-bold mb-1 text-lg md:text-2xl ">437- 4939</h4>
        </div>
        <h4 className="text-[#666] text-lg md:text-2xl">Mfr, Part No: </h4>
        <div>
          <h4 className="pb-10 text-[#666] text-lg md:text-2xl">20014b175</h4>
        </div>
        <span className="flex items-center">
          <span className="text-black font-semibold text-lg md:text-2xl">{ar? ' ملف البيانات':'Datasheet: '}</span>
          {/* <a href="#" target="_blank" className="mx-2">
            {pdf}
          </a> */}
        </span>
      </div>
      <div className="pl-2">
        <span className="flex items-center ">
          <span className="text-[#666] font-semibold">{ar? ' السعر':'Price: '} </span>
          <span className="text-black font-semibold">   $142, 731</span>
        </span>
        <span>Each (In a pack of 9)</span>
        <span className="flex items-center  my-3">
          <span className="text-[#666] font-semibold">{ar? 'العلامة التجارية':'Brand: '}</span>
          <span className="text-black font-semibold"> Georg Fischer</span>
        </span>
        <span className="flex items-center">
          <span className="text-[#666] font-semibold"> {ar? 'الطول':'Length: '}</span>
          <span className="text-black font-semibold"> 2m</span>
        </span>
        <span className="flex items-center my-3">
          <span className="text-[#666] font-semibold"> {ar? 'السمك':'Thickness: '}</span>
          <span className="text-black font-semibold"> 2.4mm</span>
        </span>
        <span className="flex items-center">
          <span className="text-[#666] font-semibold">{ar? 'القطر الخارجي':'Outer Diameter: '}</span>
          <span className="text-black font-semibold"> 32mm</span>
        </span>
        <span className="flex items-center my-3 ">
          <span className="text-[#666] font-semibold">{ar? ' المادة':'Material: '}</span>
          <span className="text-black font-semibold"> PVC-U</span>
        </span>
        <button className=" bg-yellow-120 text-lg font-semibold w-full px-8 py-2 mt-32 ">
          {ar? ' تفاصيل المنتج':'Details '}
        </button>
      </div>
    </div>
  );
};

export default MobileProductInfo;
