import { Link } from "react-router-dom";
import { logo, logoText } from "../assets/svg";
import {  Emails, Phones } from "../assets/svg/contact";
import { facebook, instagram, linkedin } from "../assets/svg/socialMedia";

const NavBar = () => {
  return (
    <div className="flex header flex-col ">
      <div className="bg-blue-120 w-full  relative  flex justify-between items-center h-[80px]">
        <div className="flex  gap-3 ml-24 ">
          {logo} {logoText}
        </div>
        <div className="flex justify-center items-center mr-24 gap-4">
          <div className="flex justify-center items-center gap-4">
            {Emails}
            <div className="text-white light text-md">
              <Link href="">

              <p>Email</p>
              <p>contact@brk-iq.com</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center light items-center gap-4">
            {Phones}
            <div className="text-white text-md">
              <p>Email</p>
              <p>contact@brk-iq.com</p>
            </div>
          </div>
        </div>
        <div className="GradientColor w-[100%] absolute top-20 h-[70px] flex justify-between items-center  ">
        <ul className="flex ml-24 justify-center items-center gap-2">
          <li className="text-white text-lg">
            <a href="#home">home</a>
          </li>
          <span className="text-white text-opacity-60 ">|</span>
          <li className="text-white text-lg">
            <a href="#about">about</a>
          </li>
          <span className="text-white text-opacity-60 ">|</span>
          <li className="text-white text-lg">
            <a href="#Products">Products</a>
          </li>
          <span className="text-white text-opacity-60 ">|</span>
          <li className="text-white text-lg">
            <a href="#Partners">Partners</a>
          </li>
          <span className="text-white text-opacity-60 ">|</span>
          <li className="text-white text-lg">
            <a href="#Distributions">Distributions</a>
          </li>
        </ul>
        <div className="flex gap-3 mr-24 h-full justify-center items-center">
          <div className="flex gap-3">
            {linkedin}
            {facebook}
            {instagram}
          </div>
          <div className="bg-yellow-120 w-full h-full flex justify-center items-center p-3">
            <p className="text-md font-medium ">Contact Us</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default NavBar;
