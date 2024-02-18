import React from "react";
import mainImage from "../../assets/img/about/image.png";
import imaging from "../../assets/img/about/imaging.png";
import MainTitle from "../ui/MainTitle";
import Paragraph from "../ui/Paragraph";
import SubTitle from "../ui/SubTitle";
import Button from "../ui/Button";
import HugeTitle from "../ui/HugeTitle";
import SectionTitle from "../ui/Section-title";

export default function About({ includeVision }) {
  return (
    <div className="flex h-[85vh]" id="about">
      <div className="flex justify-center items-center w-[50vw]">
        <div className="relative">
          <img src={imaging} className="min-w-[540px]" alt="" />
          <img
            src={mainImage}
            alt=""
            className="absolute min-w-[200px] -bottom-16 -right-16 border-[16px] border-white"
          />
        </div>
      </div>
      <div className="flex justify-center gap-5 items-start flex-col">
        <MainTitle title="Company overview" />
        <SectionTitle title="About Us" />
        <Paragraph
          main={false}
          p="Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition."
        />
        <Paragraph
          main={false}
          p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."
        />
        {includeVision ? (
          <>
            <h4 className="text-black-120 bold text-[16px]">Vision</h4>
            <SubTitle title="Establishing presence locally, and launch towards markets globalism" />
            <Button title="About Us" />
          </>
        ) : (
          <Paragraph
            main={false}
            p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."
          />
        )}
      </div>
    </div>
  );
}
