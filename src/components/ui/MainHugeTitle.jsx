import React from "react";
import { useContext, useState } from "react";
import LanguageContext from "../../LanguageContext";

export default function MainHugeTitle({ title, haveSpan = false }) {
  const { language, toggleLanguage, ar, en, light, rtl } =
    useContext(LanguageContext);
  return (
    <h2 className="flex Extrabold flex-col gap-3 mt-4 text-white font-semibold tracking-wider text-3xl sm:text-6xl md:text-7xl">
      {title} {haveSpan ? <span>{ar ? "الساند" : "Partner"}</span> : null}
    </h2>
  );
}
