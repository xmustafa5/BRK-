import { Link } from "react-router-dom";
import { logo, logoText } from "../assets/svg";
import { Emails, Phones } from "../assets/svg/contact";
import { facebook, instagram, linkedin } from "../assets/svg/socialMedia";
import LanguageContext from "../LanguageContext";
import { useContext } from "react";
import  Button from '../components/ui/Button'

const Footer = () => {
  const { language, toggleLanguage, ar, en, light, rtl } =
    useContext(LanguageContext);

  return (
    <footer className={`${ar ? "lightAr" : "light"} ${rtl} h-full w-full bg-blue-120`}>
      <div className="imageBgFooter h-[12vh] w-full md:h-[50vh]"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 h-full w-full  container mx-auto ">
        <div className="flex flex-col items-start gap-7 col-span-1 md:col-span-1">
          <div className="flex gap-3 h-20 p-2 items-center max-w-[200px]">
            {logo} {logoText}
          </div>
          <p className="p-2 text-[16px] text-white">
            {ar
              ? "نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي"
              : "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition."}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center gap-4">
              {Emails}
              <div className="text-white text-md">
                <p>{ar ? "البريد الالكتروني " : "Email"}</p>
                <p className="whitespace-nowrap">contact@brk-iq.com</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              {Phones}
              <div className="text-white text-md">
                <p>{ar ? " اتصل بنا " : "Call us"}</p>
                <p>+964 (771) 333-9999</p>
              </div>
            </div>
          </div>
        </div>

        <nav className="col-span-1 md:col-span-1">
          <h2 className="text-lg font-bold p-4 text-white bg-[#1C2551]">
            {ar ? "الصفحات " : "Pages"}
          </h2>
          <ul className="flex flex-col gap-3 p-4 text-white bg-blue-120">
            <li><Link to="aboutus">{ar ? "من نحن" : "About Us"}</Link></li>
            <li><Link to="/">{ar ? " مشاريعنا" : "Our Project"}</Link></li>
            <li><Link to="products">{ar ? " منتجاتنا" : "Products"}</Link></li>
            <li><Link to="/">{ar ? " وكلائنا" : "Vendors"}</Link></li>
            <li><Link to="contact">{ar ? " تواصل معنا" : "Contact"}</Link></li>
          </ul>
        </nav>

        <nav className="col-span-1 md:col-span-1">
          <h2 className="text-lg font-bold p-4 text-white bg-[#1C2551]">
            {ar ? "من نحن" : "About Us"}
          </h2>
          <ul className="flex flex-col gap-3 p-4 text-white bg-blue-120">
            <li><Link to="/">{ar ? "الملف التعريفي " : "Profile"}</Link></li>
            <li><Link to="/">{ar ? " الرؤية" : "Vision"}</Link></li>
            <li><Link to="/">{ar ? "المهام " : "Mission"}</Link></li>
            <li><Link to="/">{ar ? "الجدول الزمني " : "Timeline"}</Link></li>
            <li><Link to="/">{ar ? " شهادات الجودة" : "ISOs"}</Link></li>
            <li><Link to="/">{ar ? "وظائف " : "Careers"}</Link></li>
          </ul>
        </nav>

        <div className="col-span-1 md:col-span-1">
          <h2 className="text-lg font-bold p-4 text-white bg-[#1C2551]">
            {ar ? "اشتراك " : "Subscribe"}
          </h2>
          <div className="flex flex-col p-4 gap-3 bg-blue-120">
            <input
              type="text"
              className="h-14 bg-blue-120 border border-gray-120 placeholder:outline-none placeholder:text-lg placeholder:px-2"
              placeholder={ar ? "هنا البريد الالكتروني*" : "  Email Here*"}
            />
            <div className="flex justify-start items-center gap-2">
              <div className="relative flex justify-start gap-10 items-center whitespace-nowrap   py-2 rounded-[0px]">
                <Button title={ar ? "ارسل الآن " : "Send Now"} />
                <div className="flex  gap-3">
                  {linkedin}
                  {facebook}
                  {instagram}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 w-full"></div>
      
      <div className="w-full flex justify-center items-center gap-24 p-2">
        <h3 className="text-white">
          {ar ? " جميع الحقوق محفوظة © 2024 BRK Al-Baraka Company " : "Copyrights 2024 © BRK Al-Baraka Company"}
        </h3>
        <div className="hidden md:flex text-[#8388A7] text-md gap-8">
          <p>{ar ? "سياسة الخصوصية " : "Privacy"}</p>
          <p>{ar ? " شروط وقواعد البيع " : "Terms and Conditions of Sale"}</p>
          <p>{ar ? " شروط الاستخدام " : "Website Terms of Use"}</p>
          <p>{ar ? " خارطة الموقع " : "Sitemap"}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
