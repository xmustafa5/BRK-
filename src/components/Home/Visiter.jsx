import React from "react";

export default function Visiter() {
  return (
    <section className="py-10">
      <div className="container flex justify-center border-gray-400 flex-col gap-8 md:flex-row md:h-24 m-auto">
        <div className="border-y border-gray-400 h-full">
          <div className="flex h-full px-2 justify-center border gap-3 items-center">
            <h1 className="Extrabold text-5xl">+180</h1>
            <div className="bg-yellow-120 w-6 h-6 text-yellow-120 flex justify-center items-center p-2 ">
              .
            </div>
            <div>
              <p className="text-[#1C1F35] text-lg light">Certificated</p>
              <p className="text-[#1C1F35] light">Product</p>
            </div>
          </div>
        </div>
        <div className="border-y border-gray-400 h-full">
          <div className="flex h-full px-2 justify-center border   gap-3 items-center">
            <h1 className="Extrabold text-5xl">+50</h1>
            <div className="bg-yellow-120 w-6 h-6 text-yellow-120 flex justify-center items-center p-2 ">
              .
            </div>
            <div>
              <p className="text-[#1C1F35] text-lg light">Provinces</p>
              <p className="text-[#1C1F35] light text-lg">Across All Iraq</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
