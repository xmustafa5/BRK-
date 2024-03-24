import React from "react";
import { WhyUsIcons } from "../../assets/svg";
import whuUsImg from "../../assets/img/whyUs/Images.png";
import LightLabel from "../ui/LightLabel";
export default function WhyUs({ ar }) {
  return (
    <section className="h-full">
      <div className="ImageWhyUs h-[60vh]"></div>
      <div className="h-[80vh] relative flex justify-center items-center md:h-[60vh]">
        <div
          className={`bg-white ${
            ar ? "textAr" : "text"
          }  p-6 absolute -top-[200px] flex flex-col justify-center gap-8 md:flex-row`}
        >
          <div className="flex-1 flex justify-center items-start gap-4 flex-col">
            <LightLabel title={ar ? "لماذا نحن" : "Why us"} />
            <h1 className="flex  flex-col gap-3 max-w-[500px]  text-black-120 bold text-3xl font-semibold tracking-wider">
              {ar
                ? "نحن نقدم مجموعة كاملة من حلول الأنابيب والتجهيزات العالمية"
                : "We provide full range global Piping and fittings solution"}
            </h1>
            <p className="max-w-[500px] text-[16px] text-gray-120">
              {ar
                ? "تتخصص شركة البركة للاستثمارات الصناعية في إنتاج الأنابيب البلاستيكية وملحقاتها في شبكات الصرف الصحي وشبكات تأسيس المياه. آخذة على عاتقها تزويد السوق بأكثر المنتجات تميزاً وقوة. "
                : " Leverage agile frameworks to provide a robust synopsis forstrategy foster collaborative thinking to further the overall value proposition."}
            </p>
            <p className="max-w-[500px] text-[16px] text-gray-120">
              {ar
                ? ""
                : "  Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}
            </p>
            <div className="w-full flex justify-center gap-4 flex-col text-2xl items-start">
              <div className="flex font-extrabold  items-center justify-center gap-4 text-md bold">
                {WhyUsIcons}{" "}
                {ar ? "شحنة في الوقت المحدد" : "Consignment On Tim"}
              </div>
              <div className="flex  items-center justify-center gap-4 text-md bold">
                {WhyUsIcons}{" "}
                {ar
                  ? "عروض مرنة تغطي كافة أنحاء العراق"
                  : "Flexible Deals Covers All Iraq"}
              </div>
              <div className="flex  items-center justify-center gap-4 text-md bold">
                {WhyUsIcons}{" "}
                {ar ? "منتجات واسعة النطاق" : "Wide Range Products"}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={whuUsImg} alt="whyUs" className="w-[500px] pr-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
