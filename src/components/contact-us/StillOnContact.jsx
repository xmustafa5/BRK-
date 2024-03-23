import React from "react";
import MainLabel from "../ui/MainLabel";
import MainHugeTitle from "../ui/MainHugeTitle";
import LightLabel from "../ui/LightLabel";
import {
  Emails,
  Phones,
  clock,
  contactEmail,
  contactPhone,
} from "../../assets/svg/contact";

export default function StillOnContact({ ar }) {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-blue-120 flex flex-col gap-4 justify-center items-center">
        <LightLabel
          title={ar ? "الاستثمار الصناعي" : "Industrial Investment"}
        />
        <MainHugeTitle title={ar ? `ابق على تواصل معنا` : "Our Distributors"} />
        <p>
          {ar
            ? "استفد من أطر العمل الرشيقة لتوفير ملخص قوي للاستراتيجية التي تعزز التفكير التعاوني لتعزيز القيمة الإجمالية."
            : ""}
        </p>
        <div className="flex  justify-around w-full items-center">
          <div className="gap-4 flex justify-center items-center flex-col text-white">
            {contactPhone} <p>+964 78 000 999 88</p>
          </div>
          <div className="gap-4 flex justify-center items-center flex-col text-white">
            {contactEmail} <p>Info@brk-iq.com</p>
          </div>
          <div className="flex gap-4 relative justify-center text-center items-center flex-col text-white">
            {clock} <p>الاثنين - السبت 9.00 - 18.00  </p>
            <p className="absolute -bottom-6 ">الاحد مغلق</p>
          </div>
        </div>
      </div>
    </div>
  );
}
