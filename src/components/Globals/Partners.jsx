import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../ui/Section-title";
import LightLabel from "../ui/LightLabel";

export default function Partners() {
  async function getPartner() {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/v1/partners`
    );
    return res.data.content;
  }
  const { data } = useQuery({
    queryKey: ["get-partner"],
    queryFn: getPartner,
  });

  return (
    <section
      id="Partners"
      className="flex my-6 justify-center items-center flex-col h-[50vh] gap-6"
    >
      <LightLabel title="Partners" />
      <SectionTitle title="Our Partners" />
      <div className="w-full h-full flex justify-center items-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide className="flex flex-col">
              <img
                src={item?.logo}
                alt="ded"
                className="w-[200px] flex flex-col  h-[200px] bg-red-400"
              />{" "}
              <p className="text-lg font-medium">{item?.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="Regular mt-2 bg-blue-120 w-fit px-8 py-2 text-white rounded-[0px]">
        Show All Partners
      </button>
    </section>
  );
}
