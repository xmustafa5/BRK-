import LightLabel from "../ui/LightLabel";
import SectionTitle from "../ui/Section-title";
import Box from "./Box";

import FactoryImg from "../../assets/about-page/factory.svg";
import SystemImg from "../../assets/about-page/system.svg";
import StrengthImg from "../../assets/about-page/strength.svg";

export default function CompanyValues() {
  return (
    <section className="flex justify-center py-10 xl:py-0">
      <div className="container flex flex-col items-center">
        <LightLabel title="About us" />
        <SectionTitle title="Company values" />
        <div className="flex flex-col gap-12 my-12 xl:flex-row ">
          <Box title="Factory" imgPath={FactoryImg} />
          <Box title="System" imgPath={SystemImg} />
          <Box title="Strength" imgPath={StrengthImg} />
          <Box title="Plumbing" imgPath={FactoryImg} />
        </div>
      </div>
    </section>
  );
}
