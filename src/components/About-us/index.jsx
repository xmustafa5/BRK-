import Landing from "./Landing";
import About from "../Globals/About";
import CompanyValues from "./CompanyValues";
import OurVision from "./OurVision";
import CompanyObjectives from "./CompanyObjectives";
import Distributions from "../Globals/Distributors";
import { useContext } from "react";
import LanguageContext from "../../LanguageContext";
export default function AboutPage() {
  const { language, toggleLanguage, ar, en, light, rtl } =
    useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Landing ar={ar} />
      <About />
      <CompanyValues />
      <OurVision />
      <CompanyObjectives />
      <Distributions />
    </div>
  );
}
