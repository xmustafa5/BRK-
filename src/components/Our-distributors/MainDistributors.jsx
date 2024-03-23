import React from "react";
import Paragraph from "../ui/Paragraph";
import { searchInput } from "../../assets/svg/Distributors";
import SingleDistributors from "./SingleDistributors";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function MainDistributors({ ar }) {
  async function getDistributors() {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/v1/distributors`
    );
    return res.data.content;
  }

  console.log(process.env.REACT_APP_API_URL, "env");
  const { data } = useQuery({
    queryKey: ["get-data-distributors"],
    queryFn: getDistributors,
  });
  return (
    <div className="h-screen w-full bg-gray-20">
      <div className="flex gap-4 w-full justify-center item-center">
        <div className="left  h-screen  pt-2  ">
          <div className="py-3 flex justify-start">
            <Paragraph
              p={
                ar
                  ? "استفد من أطر العمل الرشيقة لتوفير ملخص قوي للاستراتيجية التي تعزز التفكير التعاوني لتعزيز عرض القيمة الشاملة."
                  : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition."
              }
            />
          </div>
          <div class="map-responsive  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3334.576729457257!2d44.353461584804386!3d33.30373478081623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577fb31b354701%3A0x91de64e19c7497d7!2sNASS%20AL%20IRAQ%20HOLDING!5e0!3m2!1sar!2sus!4v1708164647099!5m2!1sar!2sus"
              width="600"
              height="650"
              allowFullScreen=""
              title="BRK"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="p-2 bg-white"
            ></iframe>
          </div>
        </div>
        <div className="right  h-full  pt-16">
          <div className="flex justify-center items-center bg-white gap-4 pl-2 mt-4">
            {searchInput}
            <input
              type="text"
              className="border w-full h-[40px] border-none"
              placeholder="search...."
            />
          </div>
          <div className=" h-screen  overflow-y-scroll  pb-14 scroll">
            {data?.map((item, index) => (
              <SingleDistributors item={item} ar={ar} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
