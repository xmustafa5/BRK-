import React, { useContext } from "react";
import LanguageContext from "../../LanguageContext";

export default function HugeTitle({ title  }) {
  const { ar } = useContext(LanguageContext);
  return (
    <h2 className={`flex bold flex-col boldAr gap-3 text-black-120 text-2xl font-semibold tracking-wider mt-6 sm:text-4xl md:text-5xl`}>
      {title}
    </h2>
  );
}
