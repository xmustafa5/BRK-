import React from "react";
import { ReactComponent as Buffer } from "../../assets/svg/buffer.svg";
const Card = () => {
  return (
    <div className="border-2 rounded-sm border-gray-200 w-80 h-80 mb-10 justify-self-center">
      <div className="w-full mt-28 flex justify-center items-center ">
        <Buffer />
      </div>
      <p className="text-center mt-24 font-bold">Bdoor Baghdad</p>
    </div>
  );
};

export default Card;
