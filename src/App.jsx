import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About-us";
import OurDistributors from "./components/Our-distributors";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/Our-distributors" element={<OurDistributors />} />
        
      </Routes>
    </>
  );
}

export default App;
