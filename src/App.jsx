import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About-us";  
import MediaPage from "./components/Media";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/media" element={<MediaPage />} />
        {/* <Route path="/Products" element={Products} />
        <Route path="/Partners" element={Partners} />
        <Route path="/Distributions" element={Distributions} /> */}
      </Routes>
    </>
  );
}

export default App;
