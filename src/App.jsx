import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About-us";

import PartnerIndex from "./components/Partners/partnerIndex";

import OurDistributors from "./components/Our-distributors";
import MediaPage from "./components/Media";
import ContactUs from "./components/contact-us";
import ProductsPage from "./pages/Products";
import ProductsPageByCatigory from "./pages/ProductsPage";
import SingleProductPage from "./pages/Products/SingleProductPage";
import MobileProductInfo from "./components/ui/MobileProductInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/partners" element={<PartnerIndex />} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/productsByCatigory" element={<ProductsPageByCatigory/>} />

        <Route path="/singleProduct" element={<SingleProductPage/>}/>

        <Route path="/our-distributors" element={<OurDistributors />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
