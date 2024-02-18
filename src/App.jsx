import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About-us";

import PartnerIndex from "./components/Partners/partnerIndex";

import OurDistributors from "./components/Our-distributors";
import MediaPage from "./components/Media";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/partners" element={<PartnerIndex />} />
        <Route path="/Our-distributors" element={<OurDistributors />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </>
  );
}

export default App;
