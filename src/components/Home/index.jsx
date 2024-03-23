import Home from "./Home";
import About from "../Globals/About";
import Products from "./Products";
import WhyUs from "./WhyUs";
import Visiter from "./Visiter";
import Partners from "../Globals/Partners";
import Congrat from "../Globals/Congrat";
import Distributors from "../Globals/Distributors";
import LanguageContext from "../../LanguageContext";
import { useContext, useState } from "react";
export default function HomePage() {
  const { language, toggleLanguage, ar, en, light, rtl } =
    useContext(LanguageContext);
  return (
    <div className="rtl">
      <Home ar={ar} />
      <About includeVision={true} ar={ar} />
      <Products />
      <WhyUs />
      <Visiter />
      <Partners />
      <Congrat ar={ar} />
      <Distributors />
    </div>
  );
}
