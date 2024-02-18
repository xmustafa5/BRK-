import SectionTitle from "../ui/Section-title";
import MainTitle from "../ui/MainTitle";
import Paragraph from "../ui/Paragraph";

import workerImg from "../../assets/about-page/Photo.png";
import DarkLabel from "../ui/DarkLabel";

export default function OurVision() {
  return (
    <>
      <div className="bg-gray-20 w-full flex items-center py-10 px:8 md:px-40 relative overflow-hidden min-h-[90vh]">
        <div className="2xl:px-44 flex flex-col gap-5">
          <MainTitle title="About us" />
          <SectionTitle title="After 2003" />
          <Paragraph p="Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition." />
          <Paragraph p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit." />
          <Paragraph p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit" />
          <Paragraph p="Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." />
        </div>
        <div className="absolute -right-4 bottom-0 max-w-[600px]">
          <img src={workerImg} alt="Worker" />
        </div>
      </div>
      <div className="bg-yellow-120 pattern-image flex flex-col gap-8 items-center justify-center min-h-[50vh]">
        <DarkLabel title="our vision" />
        <h2 className="text-5xl bold text-blue-110 leading-[60px] text-center">
          Establishing presence locally, and launch{" "}
          <span className="block">towards markets globalism</span>
        </h2>
      </div>
    </>
  );
}
