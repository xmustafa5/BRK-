import About from "./components/About";
import Congrat from "./components/Congrat";
import Distributions from "./components/Distributions";
import Home from "./components/Home";
import Partners from "./components/Partners";
import Products from "./components/Products";
import Visiter from "./components/Visiter";
import WhyUs from "./components/WhyUs";
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
