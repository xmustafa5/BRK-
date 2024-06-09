import React from "react";
import Filters from "./Filters";
import { TiTimes } from "react-icons/ti";

const PopUpFilter = ({ closePopUp }) => {
  return (
    <div className="w-fill">
      <div className="flex justify-between items-center w-ful  p-3 mx-3">
        <h1 className="text-lg font-bold">Filter options</h1>
        <button onClick={closePopUp}>
          <TiTimes />
        </button>
      </div>
      <Filters />
      <button className=" bg-yellow-120 text-lg font-semibold w-full px-8 py-2 mt-7 rounded mx-3 ">
        Apply Filters
      </button>
      <button
        className=" text-yellow-120 border-yellow-120 border text-lg font-semibold w-full px-8 py-2 my-7 rounded mx-3 "
        onClick={closePopUp}
      >
        Cancel
      </button>
    </div>
  );
};

export default PopUpFilter;
