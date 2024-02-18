import MainTitle from "../ui/MainTitle";
import SectionTitle from "../ui/Section-title";
import Box from "./Box";

import FactoryImg from "../../assets/about-page/factory.svg";
import SystemImg from "../../assets/about-page/system.svg";
import StrengthImg from "../../assets/about-page/strength.svg";

export default function CompanyValues() {
  return (
    <div className="flex flex-col items-center py-20">
      <MainTitle title="About us" />
      <SectionTitle title="Company values" />
      <div className="flex flex-col 2xl:gap-12 my-12 lg:flex-row ">
        <Box title="Factory" imgPath={FactoryImg} />
        <Box title="System" imgPath={SystemImg} />
        <Box title="Strength" imgPath={StrengthImg} />
        <Box title="Plumbing" imgPath={FactoryImg} />
      </div>
    </div>
  );
}
