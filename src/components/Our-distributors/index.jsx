import React, { useContext } from "react";
import Congrat from "../Globals/Congrat";
import Distributors from "./Distributors.jsx";
import MainDistributors from "./MainDistributors.jsx";
import LanguageContext from "../../LanguageContext.js";

export default function OurDistributors() {
  const { language, toggleLanguage, ar, en, light, rtl } =
    useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Distributors ar={ar} />
      <MainDistributors ar={ar} />
      <Congrat ar={ar} />
    </div>
  );
}
