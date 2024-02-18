export default function DarkLabel({ title }) {
  return (
    <div className="bg-[#cf9e2c] flex w-fit pr-2">
      <span className="block w-1 bg-blue-110"></span>
      <p className="regular pl-1 py-1 uppercase bold text-blue-110">{title}</p>
    </div>
  );
}
