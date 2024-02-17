import About from "./components/Home/About";
import Congrat from "./components/Home/Congrat";
import Distributions from "./components/Home/Distributions";
import Home from "./components/Home/Home";
import Partners from "./components/Home/Partners";
import Products from "./components/Home/Products";
import Visiter from "./components/Home/Visiter";
import WhyUs from "./components/Home/WhyUs";
import { Route, Routes } from "react-router-dom";
function App() {
  return (<>
      <Home />
      <About />
      <Products />
      <WhyUs />
      <Visiter />
      <Partners />
      <Congrat />
      <Distributions />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Products" component={Products} />
        <Route path="/Partners" component={Partners} />
        <Route path="/Distributions" component={Distributions} />
      </Routes>
  </>
  );
}

export default App;
