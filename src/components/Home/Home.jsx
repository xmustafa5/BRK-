import MainLabel from "../ui/MainLabel";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import MainHugeTitle from "../ui/MainHugeTitle";
export default function Home() {
  return (
    <section className="home relative">
      <div className="flex container w-full items-center text-center sm:text-left">
        <div className="flex gap-5 flex-col items-center sm:items-start">
          <MainLabel title="Industrial Investment" />
          <MainHugeTitle title="Your Supportive" haveSpan={true} />
          <Paragraph
            main={true}
            p="In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
      arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus,
      enim diam interdum nulla, sed laoreet risus lectus."
          />
          <Button title="About Us" />
        </div>
      </div>
    </section>
  );
}
