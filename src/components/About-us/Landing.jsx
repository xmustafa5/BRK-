import MainHugeTitle from "../ui/MainHugeTitle";
import MainLabel from "../ui/MainLabel";

export default function Landing() {
  return (
    <section className="h-[50vh] landing-image relative">
      <div className="GradientColor h-full flex flex-col justify-center items-center">
        <div className="container">
          <MainLabel title="Industrial Investment" />
          <MainHugeTitle title="About us" />
        </div>
      </div>
    </section>
  );
}
