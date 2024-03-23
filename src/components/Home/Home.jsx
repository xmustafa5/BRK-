import MainLabel from "../ui/MainLabel";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import MainHugeTitle from "../ui/MainHugeTitle";
import { useContext, useState } from "react";
import LanguageContext from "../../LanguageContext.js";

export default function Home({ ar }) {
  return (
    <section className="home relative">
      <div className="flex container w-full items-center text-center sm:text-left">
        <div className="flex gap-5 flex-col items-center sm:items-start">
          <MainLabel
            title={ar ? "الاستثمار الصناعي" : "Industrial Investment"}
          />
          <MainHugeTitle
            title={ar ? "شريكك" : "Your Supportive"}
            haveSpan={true}
          />
          <Paragraph
            main={true}
            p={
              ar
                ? "تضع شركة البركة للاستثمارات الصناعية نصب عينيها النهوض بقطاع الصناعة في العراق، وأن تمضي قدماً نحو أهدافها في التوسع داخل العراق وخارجه."
                : "In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie inarcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus"
            }
          />
          <Button title={ar ? "من نحن" : "About Us"} />
        </div>
      </div>
    </section>
  );
}
