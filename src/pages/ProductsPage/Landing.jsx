import MainHugeTitle from "../../components/ui/MainHugeTitle";
import MainLabel from "../../components/ui/MainLabel";
import SmallLabelProductsLanding from "../../components/ui/SmallLabelProductsLanding";


export default function Landing({ar}) {
  return (
    <section className="h-[50vh] landing-image relative">
      <div className="GradientColor h-full flex flex-col justify-center items-center">
        <div className="container">
          <MainLabel title={ar? 'الاستثمار الصناعي' :"Industrial Investment"} />
          <MainHugeTitle title={ar? 'PPR منتجات ' :"PPR Products"} />
          <SmallLabelProductsLanding title={ar? 'PPR الرئيسية / المنتجات / منتجات ' : "Home / Products / ppr products"}/>
        </div>
      </div>
    </section>
  );
}
