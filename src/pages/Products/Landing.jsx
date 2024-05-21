import MainHugeTitle from "../../components/ui/MainHugeTitle";
import MainLabel from "../../components/ui/MainLabel";

export default function Landing() {
  return (
    <section className="h-[50vh] landing-image relative">
      <div className="GradientColor h-full flex flex-col justify-center items-center">
        <div className="container">
          <MainLabel title="Industrial Investment" />
          <MainHugeTitle title="Products" />
        </div>
      </div>
    </section>
  );
}
