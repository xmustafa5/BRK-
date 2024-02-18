import { Link } from "react-router-dom";
import { logo, logoText } from "../assets/svg";
import { Emails, Phones } from "../assets/svg/contact";
import { facebook, instagram, linkedin } from "../assets/svg/socialMedia";

import burgerMenuIcon from "../assets/menu.svg";

const NavBar = () => {
  return (
    <header className="bg-blue-120 h-[80px] flex flex-col justify-center items-center">
      <div className="container relative flex justify-between items-center">
        <div className="flex gap-3">
          {logo} {logoText}
        </div>
        <div className="lg:hidden">
          <img src={burgerMenuIcon} alt="More" />
        </div>
        <div className="hidden justify-center items-center gap-4 lg:flex">
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
              <p>Call Us </p>
              <p>+964 (771) 333-9999</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar-bg w-[100%] hidden md:flex justify-center absolute top-20 h-[70px] z-10">
        <div className="container h-full flex justify-between items-center gap-4">
          <ul className="flex gap-4">
            <li className="text-white text-lg">
              <a href="#home">Home</a>
            </li>
            <span className="text-white text-opacity-60 ">|</span>
            <li className="text-white text-lg">
              <a href="#about">About</a>
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
          <div className="flex gap-4 h-full justify-center items-center">
            <div className="flex gap-4">
              {linkedin}
              {facebook}
              {instagram}
            </div>
            <div className="bg-yellow-120 w-full h-full flex justify-center items-center p-3">
              <p className="text-md font-medium ">Contact Us</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
