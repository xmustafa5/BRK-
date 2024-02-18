import MainHugeTitle from "../ui/MainHugeTitle";
import MainTile from "../ui/MainTile";

export default function Landing() {
  return (
    <section className="h-[60vh] landing-image relative">
      <div className="GradientColor h-full flex flex-col justify-center">
        <div className="container mx-24 ">
          <MainTile title="Industrial Investment" />
          <MainHugeTitle title="About us" />
        </div>
      </div>
    </section>
  );
}
