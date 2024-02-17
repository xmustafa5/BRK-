import MainHugeTitle from "../ui/MainHugeTitle";
import MainTile from "../ui/MainTile";

export default function Landing() {
  return (
    <section className="h-[60vh] flex flex-col justify-center landing-image GradientColor">
      <div className="container mx-24">
        <MainTile title="Industrial Investment" />
        <MainHugeTitle title="About us" />
      </div>
    </section>
  );
}
