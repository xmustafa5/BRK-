import img from "../../assets/img/media/Photo.png";
import HugeTitle from "../ui/HugeTitle";
import MainTitle from "../ui/MainTitle";

function MediaPage() {
  const data = [
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: img,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: img,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: img,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: img,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: img,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: img,
    },
  ];

  return (
    <>
      <div className="!h-[60vh] home ">
        <div className="container flex justify-center gap-5 items-start flex-col">
          <MainTitle title="Industrial Investment" />
          <HugeTitle title="Media" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-[70%] mx-auto py-40">
        {data.map((item, index) => (
          <div className=" flex flex-col lg:flex-row bg-[#EEF0F8]" key={index}>
            {index % 4 < 2 ? (
              <>
                <img src={img} alt="image" className="block" />
                <div className="flex flex-col justify-between p-5">
                  <span className="text-gray-120">{item.date}</span>
                  <h3 className="text-[26px] text-black-120">{item.title}</h3>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-between p-5">
                  <span className="text-gray-120">{item.date}</span>
                  <h3 className="text-[26px] text-black-120">{item.title}</h3>
                </div>
                <img src={img} alt="image" className="block" />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MediaPage;
