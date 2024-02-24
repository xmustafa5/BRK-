// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

import LightLabel from "../ui/LightLabel";
import SectionTitle from "../ui/Section-title";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Distributions() {
  async function getDistributors() {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/v1/distributors`
    );
    return res.data.content;
  }
  const { data } = useQuery({
    queryKey: ["get-distributors"],
    queryFn: getDistributors,
  });

  return (
    <section
      id="Distributions"
      className="flex justify-center items-center flex-col h-[60vh] gap-6"
    >
      <div className="bg-gray-200 flex  ">
        <LightLabel title="distributors" />
      </div>
      <SectionTitle title="Our Distributors" />

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
            <SwiperSlide className="flex flex-col" key={item.key}>
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
    </section>
  );
}
