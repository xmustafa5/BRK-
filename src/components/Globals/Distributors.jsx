import React, { useRef } from "react";
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
import { BaseUrl } from "../../api/BaseUrl";

export default function Distributions({ ar }) {
  const swiperRef = useRef(null);

  async function getPartner() {
    const res = await axios.get(`${BaseUrl}api/v1/distributors`);
    return res.data.content;
  }

  const { data } = useQuery({
    queryKey: ["get-distributors"],
    queryFn: getPartner,
  });

  return (
    <section id="Distributions " className="py-10">
      <div className="w-full flex justify-center items-center flex-col gap-4">

      <LightLabel title={ar ? "الموزعين" : "Distributions"} />
      <SectionTitle title={ar ? " الموزعين لدينا" : "Our Distributions"} />
      </div>
      <div className="relative mt-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
         
          navigation={false}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} className="flex flex-col">
              <img src={item?.logo} alt={item?.name} className="mx-auto" />
              <p className="text-center MediumAr font-bold mt-3 text-lg text-[#5c5c5c]">{item?.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="absolute top-1/2 z-10 left-6 transform -translate-y-1/2 bg-[#091242] text-white px-[14px] py-4 rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
<path d="M13.5352 6H1.53516M1.53516 6L6.53516 1M1.53516 6L6.53516 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
        <button
          className="absolute top-1/2 z-10 right-6 -rotate-180 transform -translate-y-1/2 bg-[#091242] text-white px-[14px] py-4 rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
                 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
<path d="M13.5352 6H1.53516M1.53516 6L6.53516 1M1.53516 6L6.53516 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-4">

      <button className="Regular MediumAr mt-2 bg-blue-120 w-fit px-8 py-2 text-white rounded-[0px]">
        {ar ? "عرض جميع الموزعين" : "Show All Distributions"}
      </button>
      </div>
    </section>
  );
}
