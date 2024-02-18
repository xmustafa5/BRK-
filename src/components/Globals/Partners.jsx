import React, { useEffect, useRef, useState } from "react";
import { partnerIcons } from "../../assets/svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Partners() {
  const [visiblePartners, setVisiblePartners] = useState([]);
  const partnersRef = useRef([]);
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

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 <= data.length - 4 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex
    );
  };
  useEffect(() => {
    const currentVisiblePartners = partnersRef.current.slice(
      startIndex,
      startIndex + 4
    );
    setVisiblePartners(currentVisiblePartners);

    currentVisiblePartners.forEach((partner) => {
      partner.classList.add("visible");
    });

    return () => {
      partnersRef.current.forEach((partner) => {
        partner.classList.remove("visible");
      });
    };
  }, [startIndex]);
  return (
    <div
      id="Partners"
      className="flex my-6 justify-center items-center flex-col h-[50vh] gap-6"
    >
      <div className="bg-gray-200 flex">
        <p className="font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
          |
        </p>
        <p className="text-md regular text-black-120 font-medium p-1">
          Partners
        </p>
      </div>
      <h1 className="flex bold flex-col gap-3  text-black-120 text-5xl font-semibold tracking-wider">
        Our Partners
      </h1>
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
    </div>
  );
}
