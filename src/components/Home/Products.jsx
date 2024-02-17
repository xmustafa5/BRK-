import React from "react";
import SingleProduct from "../ui/SingleProduct";
import pru1 from "../../assets/img/Product/pru1.png";
import pru2 from "../../assets/img/Product/pru2.png";
import pru3 from "../../assets/img/Product/pru3.png";
import pru4 from "../../assets/img/Product/pru4.png";
import MainTitle from "../ui/MainTitle";
import HugeTitle from "../ui/HugeTitle";
export default function Products() {
  return (
    <div id="Products" className="GradientColorProducts h-screen flex gap-4  justify-center items-center flex-col ">
      <MainTitle title="Products" />
      <HugeTitle title='Our High-Quality Products'/>
      <div className="flex  mx-20 flex-wrap gap-4">
        <SingleProduct
          img={pru1}
          title={"UPVC Products"}
          script={
            "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
          }
        />
        <SingleProduct
          img={pru2}
          title={"PRO Products"}
          script={
            "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
          }
        />
        <SingleProduct
          img={pru3}
          title={"PPR Products"}
          script={
            "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
          }
        />
        <SingleProduct
          img={pru4}
          title={"Accessories"}
          script={
            "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
          }
        />
      </div>
      <button className="Regular mt-2 bg-blue-120 w-fit px-8 py-2 text-white rounded-[0px]">
            Show All Products
          </button>
    </div>
  );
}
