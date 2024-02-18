import React from "react";
import MainLabel from "../ui/MainLabel";
import MainHugeTitle from "../ui/MainHugeTitle";
const Partners = () => {
  return (
    <section className="h-[50vh] landing-image relative">
      <div className="GradientColor h-full flex flex-col justify-center items-center">
        <div className="container">
          <MainLabel title="Industrial Investment" />
          <MainHugeTitle title="Our Partners" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
