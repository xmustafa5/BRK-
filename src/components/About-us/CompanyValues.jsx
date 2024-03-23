import LightLabel from "../ui/LightLabel";
import SectionTitle from "../ui/Section-title";
import Box from "./Box";

import FactoryImg from "../../assets/about-page/factory.svg";
import SystemImg from "../../assets/about-page/system.svg";
import StrengthImg from "../../assets/about-page/strength.svg";

export default function CompanyValues({ ar }) {
  return (
    <section className="flex justify-center py-10 xl:py-0">
      <div className="container flex flex-col items-center">
        <LightLabel title={ar ? "من نحن" : "About us"} />
        <SectionTitle title={ar ? "قيم الشركة" : "Company values"} />
        <div className="flex flex-col gap-12 my-12 xl:flex-row ">
          <Box title={ar ? "الجودة" : "Factory"} imgPath={FactoryImg} />
          <Box title={ar ? "الابتكار" : "System"} imgPath={SystemImg} />
          <Box title={ar ? "العملاء" : "Strength"} imgPath={StrengthImg} />
          <Box title={ar ? "التميز" : "Plumbing"} imgPath={FactoryImg} />
        </div>
      </div>
    </section>
  );
}
