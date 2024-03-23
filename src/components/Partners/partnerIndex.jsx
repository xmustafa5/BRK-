import React, { useContext } from "react";
import Partners from "./Partners";
import MainPartners from "./main";
import Congrat from "../Globals/Congrat";
import Distributions from "../Globals/Distributors";
import LanguageContext from "../../LanguageContext";
const PartnerIndex = () => {
  const { language, toggleLanguage, ar, en, light, rtl } =
  useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Partners ar={ar}/>
      <MainPartners ar={ar}/>
      <Congrat ar={ar}/>
      <Distributions ar={ar}/>
    </div>
  );
};

export default PartnerIndex;
