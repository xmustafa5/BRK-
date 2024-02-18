import React from "react";
import MainTile from "../ui/MainTile";
import MainHugeTitle from "../ui/MainHugeTitle";
const Partners = () => {
  return (
    <section className="h-[50vh] landing-image relative">
      <div className="GradientColor h-full flex flex-col justify-center items-center">
        <div className="container">
          <MainTile title="Industrial Investment" />
          <MainHugeTitle title="Our Partners" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
