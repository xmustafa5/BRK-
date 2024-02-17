import MainTile from "../ui/MainTile";

export default function Home() {
  return (
    <div className="home relative ">
  
      <div className="flex ml-24 w-full items-center">
        <div className="flex gap-5 flex-col">
          <div className="GradientColor flex ">
            <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
              |
            </p>
            <MainTile title="Industrial Investment" />
          </div>
          <h1 className="flex Extrabold flex-col gap-3  text-white text-5xl font-semibold tracking-wider">
            Your Supportive <span>Partner</span>
          </h1>
          <p className="max-w-[500px] text-white">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>
          <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}
