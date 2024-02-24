import Home from "./Home";
import About from "../Globals/About";
import Products from "./Products";
import WhyUs from "./WhyUs";
import Visiter from "./Visiter";
import Partners from "../Globals/Partners";
import Congrat from "../Globals/Congrat";
import Distributors from "../Globals/Distributors";

export default function HomePage() {
  return (
    <>
      <Home />
      <About includeVision={true} />
      <Products />
      <WhyUs />
      <Visiter />
      <Partners />
      <Congrat />
      <Distributors />
    </>
  );
}
