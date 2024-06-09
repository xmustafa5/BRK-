import React, { useContext } from "react";
import { pdf } from "../../assets/svg/Product";
import tubes from "../../assets/img/Product/tubes.png";
import LanguageContext from "../../LanguageContext";

const ProductInfo = () => {
  const { ar } = useContext(LanguageContext);

  return (
   
      <div className="align-top grid grid-cols-8 border mx-3 ">
        <div className="p-3 flex flex-col justify-between  ">
          <div>
            <img src={tubes} alt="" className="mb-4" />
          </div>
          <span className="flex items-center">
            <span className="text-black font-semibold text-sm">{ar? 'ملف البيانات ' :  'Datasheet:'}</span>
            {/* <a href="#" target="_blank" className="mx-2">
              {pdf}
            </a> */}
          </span>
        </div>
        <div className={`p-3 ${ar? `border-r-0` :`border-r-2` } border-gray-100`}>
          <p className=" text-sm font-bold text-black mb-2">
            Georg Fischer PVC Pipe, 2m long x 32mm OD,2.4mm
              Wall Thickness
          </p>
          <div className="flex flex-col ">
            <h4 className="text-[#666] text-xs">RS Stock No: </h4>
            <h4 className="text-[#087EEF] font-bold mb-1 ">437- 4939</h4>
          </div>
          <h4 className="text-[#666] text-xs">Mfr, Part No: </h4>
          <div>
            <h4 className="pb-10 text-[#666] text-xs ">20014b175</h4>
          </div>
        </div>
        <div className="p-3 border-r-2 border-gray-100 ">
          <div>
            <h4 className="font-medium">$142, 731</h4>
            <h3 className="text-[#666] text-sm">Each (In a pack of 9)</h3>
          </div>
        </div>
        <div className="p-3 font-medium  text-black border-r-2 border-gray-100">
          <h4 className="text-black">Georg Fischer</h4>
        </div>
        <div className="p-3 font-medium border-r-2 border-gray-100">
          <h4>2m</h4>
        </div>
        <div className="p-3 font-medium border-r-2 border-gray-100">
          <h4>2.4mm</h4>
        </div>
        <div className="p-3 font-medium border-r-2 border-gray-100">
          <h4>32mm</h4>
        </div>
        <div className={` ${ar? `border-r-2` :`border-r-0` } border-gray-100 p-3 font-medium`}>
          <h4>PVC-U</h4>
        </div>
      </div>
  
  );
};

export default ProductInfo;