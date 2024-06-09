import React, { useContext, useEffect, useState } from "react";
import Landing from "./Landing";
import LanguageContext from "../../LanguageContext";
import Filters from "../../components/ui/Filters";
import ProductInfo from "../../components/ui/ProductInfo";
import ProductInfoHeadings from "../../components/ui/ProductInfoHeadings";
import PaginationButtons from "../../components/ui/PaginationButtons";
import MobileProductInfo from "../../components/ui/MobileProductInfo";
import ToggleFilterBar from "../../components/ui/ToggleFilterBar";
import PopUpFilter from "../../components/ui/PopUpFilter";
import { Link } from "react-router-dom";

const ProductsPageByCatigory = () => {
  const { ar, rtl } = useContext(LanguageContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [showPopUp , setShowPopUp] = useState(false)
 

function togglePopUp(){
  setShowPopUp(!showPopUp)
}
function closePopUp(){
  setShowPopUp(false)
}
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [])
  return (
    <div className={rtl} >
      <Landing ar={ar} />
      <div className="flex">

       
        {windowWidth >= 1200 ? <Filters /> : '' } 

        <div className="w-full flex flex-col gap-3 lg:px-20 ">
          {windowWidth >= 1200 ? (
            <>
            <ProductInfoHeadings/>
            <Link to='/singleProduct'>
            <ProductInfo/>
            </Link>
            <ProductInfo/>
            <ProductInfo/>
            <ProductInfo/>
            <ProductInfo/>
            <ProductInfo/>
            <ProductInfo/>
            <ProductInfo/>
            <ProductInfo/>

            </>
          )
        :(
          <>
          <ToggleFilterBar togglePopUp={togglePopUp}/>
          {showPopUp && <PopUpFilter closePopUp={closePopUp}/> }
          <MobileProductInfo/>
          <MobileProductInfo/>
          <MobileProductInfo/>
          <MobileProductInfo/>
          <MobileProductInfo/>
          <MobileProductInfo/>
          <MobileProductInfo/>

          </>
        )}
      

        
          <PaginationButtons/>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageByCatigory;
