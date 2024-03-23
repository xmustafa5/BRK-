import MainLabel from "../ui/MainLabel";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import MainHugeTitle from "../ui/MainHugeTitle";
import { useContext, useState } from "react";
import LanguageContext from "../../LanguageContext.js";

export default function Home() {
  const { language, toggleLanguage, ar, en, light } =
    useContext(LanguageContext);

  return (
    <section className="home relative">
      <div className="flex container w-full items-center text-center sm:text-left">
        <div className="flex gap-5 flex-col items-center sm:items-start">
          <MainLabel
            title={ar ? "الاستثمار الصناعي" : "Industrial Investment"}
          />
          <MainHugeTitle title="Your Supportive" haveSpan={true} />
          <Paragraph
            main={true}
            p="In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
      arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus,
      enim diam interdum nulla, sed laoreet risus lectus."
          />
          <Button title="About Us" />
        </div>
      </div>
    </section>
  );
}
