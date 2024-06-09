import { useContext } from "react";
import LanguageContext from "../../LanguageContext";
import imgo from "../../assets/img/media/Photo.png";
import LightLabel from "../ui/LightLabel";
import MainHugeTitle from "../ui/MainHugeTitle";

function MediaPage() {
  const data = [
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      titleAr: "مشروع بدور         بغداد         التصميم الداخلي",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      titleAr: "مشروع بدور         بغداد         التصميم الداخلي",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      titleAr: "مشروع بدور         بغداد         التصميم الداخلي",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      titleAr: "مشروع بدور         بغداد         التصميم الداخلي",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      titleAr: "مشروع بدور         بغداد         التصميم الداخلي",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      titleAr: "مشروع بدور         بغداد         التصميم الداخلي",
      img: imgo,
    },
  ];
  const { language, toggleLanguage, ar, en, light, rtl } =
    useContext(LanguageContext);
  return (
    <div className={rtl}>
      <div className="!h-[60vh] home ">
        <div className="container flex justify-center gap-5 items-start flex-col ">
          <LightLabel
            title={ar ? "الاستثمار الصناعي" : "Industrial Investment"}
          />
          <MainHugeTitle title={ar ? "الوسائط" : "Media"} />
        </div>
      </div>
      <div className=" grid grid-cols-2 gap-5 w-[70%] mx-auto py-40">
        {data.map((item, index) => (
          <div className="  flex w-full  bg-[#EEF0F8]" key={index}>
            {index % 4 < 2 ? (
              <div className="flex w-full">
              <div className=" w-1/2 ">
                <img src={imgo} alt="imageo" className="block w-full object-cover"  />
              </div>
                <div className="flex w-1/2  flex-col justify-between p-5">
                  <span className="text-gray-120">{item.date}</span>
                  <h3 className="text-[26px] bold boldAr text-black-120">{ar ? item?.titleAr : item.title}</h3>
                </div>
              </div>
            ) : (
              <div className="w-full flex">
                <div className="flex flex-col w-1/2 justify-between p-5">
                  <span className="text-gray-120">{item.date}</span>
                  <h3 className="text-[26px]  bold boldAr text-black-120">{ar ? item?.titleAr : item.title}</h3>
                </div>
                <div className=" w-1/2 ">

                <img src={imgo} alt="imageo" className="block w-full object-cover" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaPage;
