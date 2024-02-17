import React from "react";
import MainTile from "../ui/MainTile";
import MainHugeTitle from "../ui/MainHugeTitle";
const Partners = () => {
  return (
    <section className="h-[60vh] flex flex-col justify-center landing-image GradientColor">
      <div className="container mx-24">
        <MainTile title="Industrial Investment" />
        <MainHugeTitle title="Our Partners" />
      </div>
    </section>
  );
};

export default Partners;
