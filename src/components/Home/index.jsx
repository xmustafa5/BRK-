import Congrat from "../Globals/Congrat";
import Distributions from "../Globals/Distributions";
import Partners from "../Globals/Partners";
import About from "../Globals/About";
import Home from "./Home";
import Products from "./Products";
import Visiter from "./Visiter";
import WhyUs from "./WhyUs";

export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Products />
      <WhyUs />
      <Visiter />
      <Partners />
      <Congrat />
      <Distributions />
    </>
  );
}
