import SectionTitle from "../ui/Section-title";
import LightLabel from "../ui/LightLabel";
import Box from "./Box";

import boatImg from "../../assets/about-page/boat.svg";
import warehouseImg from "../../assets/about-page/warehouse.svg";
import customerImg from "../../assets/about-page/customer.svg";
import exhibitionImg from "../../assets/about-page/exhibition.svg";
import trackImg from "../../assets/about-page/track.svg";

export default function CompanyObjectives({ ar }) {
  return (
    <div className="bg-[#F4F4F4] flex flex-col justify-center items-center py-20 px:8 md:px-36">
      <LightLabel title={ar ? "من نحن" : "About us"} />
      <SectionTitle title={ar ? "أهداف الشركة" : "Company Objectives"} />
      <div className="flex flex-col flex-wrap justify-center gap-16 items-center my-10 md:my-16 lg:flex-row lg:gap-48">
        <Box
          title={ar ? "تغطية احتياج السوق" : "Sea Transport Services"}
          imgPath={boatImg}
          p={
            ar
              ? "تغطية احتياج السوق العراقي، والانطلاق إلى الأسواق العربية والعالمية."
              : "Following the quality of our service thus having gained trust of our many clients."
          }
        />
        <Box
          title={ar ? "التطوير المستمر" : "Warehousing Services"}
          imgPath={warehouseImg}
          p={
            ar
              ? "التطوير المستمر، وابتكار منتجات تلبي احتياجات المستهلك."
              : "Following the quality of our service thus having gained trust of our many clients."
          }
        />
        <Box
          title={ar? 'المواكبة':"Customer Clearance"}
          imgPath={customerImg}
          p={ar? 'مواكبة احتياجات العملاء وتلبيتها. ' :"Following the quality of our service thus having gained trust of our many clients."}
        />
        <Box
          title={ar? 'الحفاظ على الجودة.'  :"Project & Exhibition"}
          imgPath={exhibitionImg}
          p={ar? 'الحفاظ على الجودة.' :"Following the quality of our service thus having gained trust of our many clients."}
        />
        <Box
          title={ar?  'دعم نمو قطاع الصناعة'  :"Local Shipping Services"}
          imgPath={trackImg}
          p={ar?  'دعم نمو قطاع الصناعة في العراق. '   :"Following the quality of our service thus having gained trust of our many clients."}
        />
      </div>
    </div>
  );
}
