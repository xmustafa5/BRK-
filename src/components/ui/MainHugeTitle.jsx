import React from "react";
import { useContext } from "react";
import LanguageContext from "../../LanguageContext";

export default function MainHugeTitle({ title, haveSpan = false }) {
  const { ar } = useContext(LanguageContext);
  return (
    <h2
      className={`flex   flex-col gap-3 boldAr bold mt-4 text-white font- tracking-wider text-3xl sm:text-6xl md:text-7xl`}
    >
      {title} {haveSpan ? <span>{ar ? "الساند" : "Partner"}</span> : null}
    </h2>
  );
}
