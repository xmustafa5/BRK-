import React from "react";
import { Bdoor } from "../../assets/svg/Distributors";

export default function SingleDistributors({item}) {
  return (
    <div className="mt-4 bg-white shadow-[0px_20px_30px_0px_rgba(0,0,0,0.10)]">
      <div className="h-full  flex justify-start p-2 item-center gap-6">
        {Bdoor}
        <div className="h-full text-md  flex flex-col justify-center items-start ">
          <p className=" font-medium">{item.name}</p>
          <p className="text-gray-120">{item?.location}</p>
        </div>
      </div>
      <div className="flex border-t mt-3 border-gray-500 justify-center items-start p-2 gap-4">
        <div className="flex text-md justify-center  items-start flex-col">
          <p>
            phone: <span className="text-gray-120 ml-7">{item?.phone}</span>
          </p>
          <p>
            Website: <span className="text-gray-120 ml-4">{item?.website}</span>
          </p>
        </div>
        <div className="max-w-[270px] flex">
          <p>Address: </p>
          <p className="text-gray-120 ml-4 min-w-[10px]">
            {item?.address}
          </p>
        </div>
      </div>
    </div>
  );
}
