import React from "react";

export default function Visiter({ ar }) {
  return (
    <section className="py-10">
      <div className="container flex justify-center border-gray-400 flex-col  md:flex-row md:h-24 m-auto">
        <div className="border-y border-gray-400 h-full">
          <div className="flex h-full px-6 justify-center border gap-3 items-center">
            <h1 className="Extrabold text-5xl">+180</h1>
            <div className="bg-yellow-120 w-6 h-6 text-yellow-120 flex justify-center items-center p-2 ">
              .
            </div>
            <div>
              <p className="text-[#1C1F35] text-lg light">
                {ar ? "منتج " : "Certificated"}
              </p>
              <p className="text-[#1C1F35] light">{ar ? "مصنع" : "Product"}</p>
            </div>
          </div>
        </div>
        <div className="border-y border-gray-400 h-full">
          <div className="flex h-full px-6 justify-center border   gap-3 items-center">
            <h1 className="Extrabold text-5xl">+50</h1>
            <div className="bg-yellow-120 w-6 h-6 text-yellow-120 flex justify-center items-center p-2 ">
              .
            </div>
            <div>
              <p className="text-[#1C1F35] text-lg light">
                {ar ? "موزع" : "Provinces"}
              </p>
              <p className="text-[#1C1F35] light text-lg">
                {ar ? "حول العراق" : "Across All Iraq"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
