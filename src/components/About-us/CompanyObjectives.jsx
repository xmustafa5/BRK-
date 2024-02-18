import SectionTitle from "../ui/Section-title";
import MainTitle from "../ui/MainTitle";
import Box from "./Box";

import boatImg from "../../assets/about-page/boat.svg";
import warehouseImg from "../../assets/about-page/warehouse.svg";
import customerImg from "../../assets/about-page/customer.svg";
import exhibitionImg from "../../assets/about-page/exhibition.svg";
import trackImg from "../../assets/about-page/track.svg";

export default function CompanyObjectives() {
  return (
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
  );
}
