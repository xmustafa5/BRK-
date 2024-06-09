import Landing from "./Landing";
import About from "../Globals/About";
import CompanyValues from "./CompanyValues";
import OurVision from "./OurVision";
import CompanyObjectives from "./CompanyObjectives";
import Distributions from "../Globals/Distributors";
import { useContext } from "react";
import LanguageContext from "../../LanguageContext";
export default function AboutPage() {
  const {  ar, rtl } =
    useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Landing ar={ar} />
      <About ar={ar}/>
      <div className="py-8 flex justify-center items-center">
      <CompanyValues ar={ar} />
        
      </div>
      <OurVision ar={ar}/>
      <CompanyObjectives ar={ar} />
      <Distributions ar={ar}/>
    </div>
  );
}
