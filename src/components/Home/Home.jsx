import MainTile from "../ui/MainTile";
import Paragraph from "../ui/Paragraph";
import MainHugeTitle from "../ui/MainHugeTitle";
import Button from "../ui/Button";
export default function Home() {
  return (
    <div className="home relative ">
      <div className="flex ml-24 w-full items-center">
        <div className="flex gap-5 flex-col">
          <MainTile title="Industrial Investment" />
          <MainHugeTitle />
          <Paragraph 
          main={true}
            p="In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
      arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus,
      enim diam interdum nulla, sed laoreet risus lectus."
          />
          <Button title="About Us" />
        </div>
      </div>
    </div>
  );
}
