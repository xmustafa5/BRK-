export default function MainLabel({ title }) {
  return (
    <div className="bg-[#041C3780] flex w-fit pr-2 text-sm sm:text-base ">
      <span className="block w-1 bg-yellow-120"></span>
      <p className="regular px-2 py-1 uppercase font bold boldAr text-white">{title}</p>
    </div>
  );
}
