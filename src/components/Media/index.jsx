import imgo from "../../assets/img/media/Photo.png";
import LightLabel from "../ui/LightLabel";
import MainHugeTitle from "../ui/MainHugeTitle";

function MediaPage() {
  const data = [
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: imgo,
    },
    {
      date: "2021-07-20",
      title:
        "BRK is now the official distributor of the world's leading brands in Iraq",
      img: imgo,
    },
  ];

  return (
    <>
      <div className="!h-[60vh] home ">
        <div className="container flex justify-center gap-5 items-start flex-col ">
          <LightLabel title="Industrial Investment" />
          <MainHugeTitle title="Media" />
        </div>
      </div>
      <div className="responsive-grid gap-5 w-[70%] mx-auto py-40">
        {data.map((item, index) => (
          <div className="  responsive-grid bg-[#EEF0F8]" key={index}>
            {index % 4 < 2 ? (
              <>
                <img src={imgo} alt="imageo" className="block" />
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
                <img src={imgo} alt="imageo" className="block" />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MediaPage;
