import React from "react";
import mainImage from "../../assets/img/about/image.png";
import imaging from "../../assets/img/about/imaging.png";
import LightLabel from "../ui/LightLabel";
import Paragraph from "../ui/Paragraph";
import SubTitle from "../ui/SubTitle";
import Button from "../ui/Button";
import SectionTitle from "../ui/Section-title";

export default function About({ includeVision ,ar}) {
  return (
    <section id="about" className="py-10 lg:py-0">
      <div className="container min-h-[85vh] gap-8 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center">
        <div className="flex justify-center items-center lg:w-[50vw]">
          <div className="relative flex lg:mr-24">
            <img
              src={imaging}
              className="w-[300px] md:w-[450px] lg:min-w-[600px]"
              alt="Factory"
            />
            <img
              src={mainImage}
              alt="Factory 2"
              className="hidden lg:block absolute min-w-[200px] -bottom-16 -right-16 border-[16px] border-white"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-center lg:items-start lg:text-start">
          <LightLabel title={ar ? "نبذة عن الشركة" : "Company overview"} />
          <SectionTitle title={ar ? "من نحن" : "About Us"} />
          <Paragraph
            main={false}
            p="Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition."
          />
          <Paragraph
            main={false}
            p={
              ar
                ? "بدأت شركة البركة للاستثمارات الصناعية أعمالها في عام 1995، متخصصة في صناعة الأنابيب البلاستيكية في السوق العراقي، ومنطلقة من حاجة السوق المحلي لصناعة الأنابيب. ورغم التحديات التي واجهتها الشركة من شحة المواد الأولية، والانغلاق على الأسواق الخارجية، لكنها عملت على تجاوز العقبات، فقام المؤسسون بتجميع أول ماكنة باستخدام المواد المتوفرة وقتها. فأثمر العمل عن أول خط لإنتاج الأنابيب البلاستيكية التي خرج بها مصنع الشركة. بجودة تناسب السوق، وسعر يناسب القدرات الشرائية آنذاك. "
                : "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."
            }
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
    </section>
  );
}
