import { useContext } from "react";
import LanguageContext from "../../LanguageContext";

export default function SectionTitle({ title}) {
  const { ar } = useContext(LanguageContext);

  return (
    <h2 className={`bold boldAr text-black-120 text-[28px] sm:text-[35px] font-semibold tracking-normal `}>
      {title}
    </h2>
  );
}
