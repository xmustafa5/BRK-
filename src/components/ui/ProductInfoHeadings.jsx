import React, { useContext } from "react";
import LanguageContext from "../../LanguageContext";

const ProductInfoHeadings = ({ children }) => {
  const { ar} = useContext(LanguageContext);

  return (
    <div className="text-left m-3 font-light    ">
     
        <div className=" border text-gray-400 font-light grid grid-cols-8 items-center ">
          <div className={`p-3 font-normal  ${ar ? `text-right` : `text-left`}`}> {ar? 'تفاصيل المنتج':'Product Details'}</div>
          <div className={`p-3 font-normal ${ar ? `border-r-0` : `border-r-2`} border-gray-100`}>  </div>
          <div className={`p-3 font-normal border-r-2 border-gray-100 ${ar ? `text-right` : `text-left`}`}>{ar? 'السعر':'Price'}</div>
          <div className={`p-3 font-normal border-r-2 border-gray-100 ${ar ? `text-right` : `text-left`}`}> {ar? 'العلامة التجارية':'Brand'} </div>
          <div className={`p-3 font-normal border-r-2 border-gray-100 ${ar ? `text-right` : `text-left`}`}> {ar? 'الطول':'Length'}</div>
          <div className={`p-3 font-normal border-r-2 border-gray-100 ${ar ? `text-right` : `text-left`}`}> {ar? 'السمك':'Thickness'}</div>
          <div className={`p-3 font-normal border-r-2 border-gray-100 ${ar ? `text-right` : `text-left`}`}>  {ar? 'القطر الخارجي':'Outer Diameter'}</div>
          <div className={`p-3 font-normal  border-gray-100  ${ar ? `border-r-2 text-right` : `border-r-0 text-left`} `}> {ar? ' المادة':'Material'}</div>
        </div>
     
      <div>{children}</div>
    </div>
  );
};

export default ProductInfoHeadings;
