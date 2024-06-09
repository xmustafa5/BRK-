import React, { useContext } from "react";
import SingleProduct from "../ui/SingleProduct";
import pru1 from "../../assets/img/Product/pru1.png";
import pru2 from "../../assets/img/Product/pru2.png";
import pru3 from "../../assets/img/Product/pru3.png";
import pru4 from "../../assets/img/Product/pru4.png";
import LightLabel from "../ui/LightLabel";
import HugeTitle from "../ui/HugeTitle";
import { Link } from "react-router-dom";
import LanguageContext from "../../LanguageContext";
export default function Products() {
  const { ar } = useContext(LanguageContext);

  return (
    <section
      id="products"
      className={`  GradientColorProducts flex justify-center py-10`}
    >
      <div className="container min-h-screen flex gap-4 justify-center items-center flex-col">
        <LightLabel title={ar ? "المنتجات" : "Products"} />
        <HugeTitle
          title={ar ? "منتجاتنا عالية الجودة" : "Our High-Quality Products"}
        />
        <div className="flex flex-wrap justify-center my-8 gap-8">
          <SingleProduct
            img={pru1}
            title={ar ? "UPVC منتجات" : "UPVC Products"}
            script={
              ar
                ? "نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي  نص تجريبي "
                : "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
            }
          />
          <SingleProduct
            img={pru2}
            title={ar ? "PRO منتجات" : "PRO Products"}
            script={
              ar
                ? "نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي  نص تجريبي "
                : "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
            }
          />
          <SingleProduct
            img={pru3}
            title={ar ? "PRR منتجات" : "PRR Products"}
            script={
              ar
                ? "نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي  نص تجريبي "
                : "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
            }
          />

          <SingleProduct
            img={pru4}
            title={ar ? "منتجات صرف صحي" : "Accessories"}
            script={
              ar
                ? "نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي نص تجريبي  نص تجريبي "
                : "Westlake Pipe & Fittings' AquaSpring™ C900 Certa-Lok® RJ PVC Pipe is manufactured to meet the standards of today’s municipal needs for water and wastewater pressure applications."
            }
          />
        </div>
        <Link to="/productsByCatigory">
          <button
            className={`"Regular mediumAr mt-2 bg-blue-120 w-fit px-8 py-2 text-white rounded-[0px]"`}
          >
            {ar ? "عرض جميع المنتجات" : "Show All Products"}
          </button>
        </Link>
      </div>
    </section>
  );
}
