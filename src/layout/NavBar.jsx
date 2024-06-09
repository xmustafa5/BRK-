import { Link } from "react-router-dom";
import { logo, logoText } from "../assets/svg";
import { Emails, Phones } from "../assets/svg/contact";
import { facebook, instagram, linkedin } from "../assets/svg/socialMedia";

import burgerMenuIcon from "../assets/menu.svg";
import { useContext, useState } from "react";
import LanguageContext from "../LanguageContext";

const NavBar = () => {
  const [IsMenuOpened, setIsMenuOpened] = useState(false);
  const { language, toggleLanguage, ar, en, light } =
    useContext(LanguageContext);
  function toggleMenu() {
    setIsMenuOpened((prev) => !prev);
  }

  return (
    <header
      className={`bg-blue-120 ${
        ar && "rtl"
      } h-[80px] flex flex-col justify-center items-center`}
    >
      <div className="container relative flex justify-between  items-center">
        <div className="flex gap-3 w-[200px] sm:w-[300px]">
          {logo} {logoText}
        </div>

        <div className="lg:hidden" onClick={toggleMenu}>
          <img src={burgerMenuIcon} alt="More" />
        </div>

        <div className="hidden justify-center items-center gap-4 lg:flex">
          <div className="flex justify-center items-center gap-4">
            {Emails}
            <div className={`text-white  mediumAr text-md`}>
              <Link href="">
                <p>{ar ? "البريد الالكتروني" : "Email"}</p>
                <p>contact@brk-iq.com</p>
              </Link>
            </div>
          </div>

          <div className={`flex justify-center ${light} items-center gap-4`}>
            {Phones}
            <div className="text-white mediumAr text-md">
              <p>{ar ? "اتصل بنا" : "Call Us"}</p>

              <p>{ar ? "٩٦٤٧٧١٩٩٩٩٣٣+" : "+964 (771) 333-9999"}</p>
            </div>
            <button
              onClick={toggleLanguage}
              className="text-white w-16 h-10 Regular bg-gray-800 rounded-md"
            >
              {ar ? "English" : "العربية"}
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`navbar-bg w-[100%] flex justify-center items-center absolute top-20 min-h-[70px] z-10 ${
          !IsMenuOpened ? "hidden md:flex" : ""
        }`}
      >
        <div
          className={`container h-full flex justify-between items-center gap-4 ${
            IsMenuOpened ? "flex-col" : ""
          }`}
        >
          <ul
            className={`flex gap-4 ${
              IsMenuOpened ? "flex-col right-4 p-4 absolute bg-[#faba20b8]" : ""
            }`}
          >
            <li className="text-white boldAr text-md">
              <Link to="/">{ar ? "الرئيسية" : "Home"}</Link>
            </li>
            <span className="text-white text-opacity-60 hidden md:inline">
              |
            </span>
            <li className="text-white boldAr text-md">
              <Link to="aboutus">{ar ? "من نحن" : "About"}</Link>
            </li>
            <span className="text-white text-opacity-60 hidden md:inline">
              |
            </span>
            <li className="text-white boldAr text-md">
              <Link to="products">{ar ? "المنتجات" : "Products"}</Link>
            </li>
            <span className="text-white text-opacity-60 hidden md:inline">
              |
            </span>
            <li className="text-white boldAr text-md">
              <Link to="partners">{ar ? "الشركاء" : "Partners"}</Link>
            </li>
            <span className="text-white text-opacity-60 hidden md:inline">
              |
            </span>
            <li className="text-white boldAr text-md">
              <Link to="our-distributors">
                {ar ? "الموزعين" : "Distributions"}
              </Link>
            </li>
            <span className="text-white text-opacity-60 hidden md:inline">
              |
            </span>
            <li className="text-white boldAr text-md">
              <Link to="media">{ar ? "الوسائط" : `Media`}</Link>
            </li>
          </ul>
          <div
            className={`flex gap-4 h-full justify-center items-center ${
              ar && "ltr"
            } ${IsMenuOpened ? "absolute left-4" : ""}`}
          >
            <div className="flex gap-4">
              {linkedin}
              {facebook}
              {instagram}
            </div>
            <Link to='contact' >
            <button className="bg-yellow-120 w-full h-full flex justify-center items-center p-3">
              <p className="text-md font-medium ">
                {ar ? "تواصل معنا" : "Contact Us"}
              </p>
            </button>
            </Link>
          
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
