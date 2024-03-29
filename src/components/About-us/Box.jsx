export default function Box({ title, imgPath, p }) {
  return (
    <div className="flex flex-col items-center gap-[22px] w-80 mx-auto">
      <img src={imgPath} alt="Factory" />
      <h3 className="font-bold text-[20px] sm:text-[25px]">{title}</h3>
      {p && <p className="text-center">{p}</p>}
    </div>
  );
}
