import Home from "./Home";
import About from "../Globals/About";
import Products from "./Products";
import WhyUs from "./WhyUs";
import Visiter from "./Visiter";
import Partners from "../Globals/Partners";
import Congrat from "../Globals/Congrat";
import Distributors from "../Globals/Distributors";
import LanguageContext from "../../LanguageContext";
import { useContext } from "react";
export default function HomePage() {
  const {  ar, rtl } =
    useContext(LanguageContext);
  return (
    <div className={rtl}>
      <Home ar={ar} />
      <About includeVision={true} ar={ar} />
      <Products ar={ar} />
      <WhyUs ar={ar} />
      <Visiter ar={ar} />
      <Partners ar={ar} />
      <Congrat ar={ar} />
      <Distributors ar={ar} />
    </div>
  );
}
