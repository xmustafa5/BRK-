import React from "react";
import { facebook, instagram, linkedin } from "../assets/svg/socialMedia";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home relative ">
      <div className="GradientColor w-[100%] absolute top-0 h-[70px] flex justify-between items-center  ">
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
          <span className="text-white text-opacity-60 ">|</span>

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
      <div className="flex ml-24 w-full items-center">
        <div className="flex gap-5 flex-col">
          <div className="GradientColor flex ">
            <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
              |
            </p>
            <p className="text-white text-lg regular pl-1 ">
              Industrial Investment
            </p>
          </div>
          <h1 className="flex Extrabold flex-col gap-3  text-white text-5xl font-semibold tracking-wider">
            Your Supportive <span>Partner</span>
          </h1>
          <p className="max-w-[500px] text-white">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
          <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}
