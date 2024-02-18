import SectionTitle from "../ui/Section-title";
import LightLabel from "../ui/LightLabel";
import Paragraph from "../ui/Paragraph";

import workerImg from "../../assets/about-page/Photo.png";
import DarkLabel from "../ui/DarkLabel";

export default function OurVision() {
  return (
    <>
      <section className="bg-gray-20 relative overflow-hidden py-10 lg:py-0">
        <div className="container min-h-[90vh] flex gap-8 items-center flex-col lg:ml-16 lg:flex-row ">
          <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-start flex-1">
            <LightLabel title="About us" />
            <SectionTitle title="After 2003" />
            <Paragraph p="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition." />
            <Paragraph p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit." />
            <Paragraph p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit" />
            <Paragraph p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." />
          </div>
          <div className="justify-items-end flex-1">
            <img src={workerImg} alt="Worker" />
          </div>
        </div>
      </section>
      <section className="bg-yellow-120 pattern-image flex flex-col gap-8 items-center justify-center min-h-[50vh]">
        <DarkLabel title="our vision" />
        <h2 className="text-xl bold text-blue-110 text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Establishing presence locally, and launch{" "}
          <span className="block">towards markets globalism</span>
        </h2>
      </section>
    </>
  );
}
