import About from "../Globals/About";
import SectionTitle from "../ui/Section-title";
import MainTitle from "../ui/MainTitle";
import Box from "./Box";

import FactoryImg from "../../assets/about-page/factory.svg";
import SystemImg from "../../assets/about-page/system.svg";
import StrengthImg from "../../assets/about-page/strength.svg";
import Paragraph from "../ui/Paragraph";

import workerImg from "../../assets/about-page/Photo.png";
import MainTile from "../ui/MainTile";

import boatImg from "../../assets/about-page/boat.svg";
import warehouseImg from "../../assets/about-page/warehouse.svg";
import customerImg from "../../assets/about-page/customer.svg";
import exhibitionImg from "../../assets/about-page/exhibition.svg";
import trackImg from "../../assets/about-page/track.svg";
import Distributions from "../Globals/Distributions";

export default function AboutUs() {
  return (
    <>
      <About />
      <div className="flex flex-col items-center py-20">
        <MainTitle title="Company overview" />
        <SectionTitle title="Company values" />
        <div className="flex flex-col gap-12 my-12 lg:flex-row ">
          <Box title="Factory" imgPath={FactoryImg} />
          <Box title="System" imgPath={SystemImg} />
          <Box title="Strength" imgPath={StrengthImg} />
          <Box title="Plumbing" imgPath={FactoryImg} />
        </div>
      </div>
      <div className="bg-[#F4F4F4] w-full py-10 px:8 md:px-36 relative overflow-hidden">
        <div className="px-40">
          <MainTitle title="About us" />
          <SectionTitle title="After 2003" />
          <Paragraph p="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition." />
          <Paragraph
            p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          />
        </div>
        <div className="absolute -right-4 bottom-0 max-w-[600px]">
          <img src={workerImg} alt="Worker" />
        </div>
      </div>
      <div className="bg-yellow-120 pattern-image flex flex-col gap-8 items-center justify-center py-8">
        <MainTile title="our vision" />
        <h2 className="text-5xl bold text-blue-120  leading-[60px] text-center">
          Establishing presence locally, and launch{" "}
          <span className="block">towards markets globalism</span>
        </h2>
      </div>
      <div className="bg-[#F4F4F4] flex flex-col justify-center items-center py-20 px:8 md:px-36">
        <MainTitle title="About us" />
        <SectionTitle title="Company Objectives" />
        <div className="flex flex-col flex-wrap justify-center items-center my-16 lg:flex-row lg:gap-48">
          <Box
            title="Sea Transport Services"
            imgPath={boatImg}
            p="Following the quality of our service thus having gained trust of our many clients."
          />
          <Box
            title="Warehousing Services"
            imgPath={warehouseImg}
            p="Following the quality of our service thus having gained trust of our many clients."
          />
          <Box
            title="Customer Clearance"
            imgPath={customerImg}
            p="Following the quality of our service thus having gained trust of our many clients."
          />
          <Box
            title="Project & Exhibition"
            imgPath={exhibitionImg}
            p="Following the quality of our service thus having gained trust of our many clients."
          />
          <Box
            title="Local Shipping Services"
            imgPath={trackImg}
            p="Following the quality of our service thus having gained trust of our many clients."
          />
        </div>
      </div>
      <Distributions />
    </>
  );
}
