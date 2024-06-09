import React from "react";
import LightLabel from "../ui/LightLabel";
import { clock, contactEmail, contactPhone } from "../../assets/svg/contact";
import Button from "../ui/Button";

export default function StillOnContact({ ar }) {
  return (
    <div className=" flex justify-center items-center md:my-28 md:mt-[200px]  ">
      <div className="bg-blue-120 flex flex-col gap-4 justify-center items-center pt-20">
        <LightLabel title={ar ? "تواصل معنا" : "CONTACT"} />``
        <h1 className="text-white font-bold md:text-4xl text-xl">
          {ar ? `ابق على تواصل معنا` : "Get in touch nwith us"}
        </h1>
        <p className="text-white  w-3/4 text-center md:text-lg text-md mt-3">
          {ar
            ? "استفد من أطر العمل الرشيقة لتوفير ملخص قوي للاستراتيجية التي تعزز التفكير التعاوني لتعزيز القيمة الإجمالية."
            : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value."}
        </p>
        <div className="flex justify-center flex-wrap gap-10 w-full items-center mt-5">
          <div className="gap-4 flex justify-center items-center flex-col text-white text-xs md:text-lg">
            {contactPhone}
            <p>{ar ? "+964 78 000 999 88" : "+964 78 000 999 88"}</p>
          </div>
          <div className="gap-4 flex justify-center items-center flex-col text-white text-xs md:text-lg">
            {contactEmail} <p>Info@brk-iq.com</p>
          </div>
          <div className="flex gap-4 relative w-full justify-center text-center items-center flex-col text-white  text-xs md:text-lg md:w-fit">
            {clock} <p>الاثنين - السبت 9.00 - 18.00 </p>
            <p className="absolute -bottom-6 ">الاحد مغلق</p>
          </div>
        </div>
        <div className="bg-none px-10 py-7 mt-3 flex flex-col  sm:flex-wrap gap-5 input-grid  ">
          <input
            type="text"
            placeholder={ar ? "اسمك " : "Your name"}
            className="border bg-blue-120 sm:px-28 p-4  "
          />
          <input
            type="email"
            placeholder={ar ? "البريد الالكتروني" : "Email"}
            className="border bg-blue-120 p-4 "
          />
          <input
            type="number"
            placeholder={ar ? "رقم الهاتف" : "Phone Number"}
            className="border bg-blue-120 p-4  "
          />
          <input
            type="text"
            placeholder={ar ? "المدينة" : "City"}
            className="border bg-blue-120 p-4  "
          />
          <textarea
            name=""
            id=""
            className="border bg-blue-120 p-4 h-40 "
            placeholder={ar ? "رسالتك" : "Your Message"}
          ></textarea>
        </div>
        <div className="text-center pb-20 font-bold mb-[250px] md:mb-0">
          <Button title={ar ? "ارسال" : "Submit"} />
        </div>
      </div>
    </div>
  );
}
