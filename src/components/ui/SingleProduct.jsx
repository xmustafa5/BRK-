import React from "react";

function SingleProduct({ img, script, title }) {
  return (
    // <div className="mt-5 relative min-w-[200px] flex-1 w-full">
    <div className="flex justify-center items-center">
      <div className="w-[280px]">
        <img src={img} alt="product" className="w-full" />

        <div className="  flex flex-col mt-1 ">
          <p className="text-md gap regular relative w-fit text-black-120 font-medium p-1">
            {title}
            <span className=" h-1 text-gray-100 flex justify-center absolute bottom-0 w-full flex-col items-center bg-yellow-120">
              .
            </span>
          </p>
        </div>
        <p className="min-w-[250] w-full text-[#666C89]  ">{script}</p>
      </div>
    </div>
    // </div>
  );
}

export default SingleProduct;
