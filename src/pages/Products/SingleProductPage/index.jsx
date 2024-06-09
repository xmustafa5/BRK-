import React from "react";
import tubes from "../../../assets/img/Product/tubes.png";
import tube from "../../../assets/img/Product/tube.png";

const SingleProductPage = () => {
  return (
    <div className="p-20">
      <div className="flex flex-col ">
        <h1 className="w-fit font-semibold">
          Home / Products / PPR Products / <span className="border-b-2 border-gray-120">Georg Fischer PVC Pipe, 2m long x
          32mm OD, 2.4mm Wall Thickness</span>
        </h1>
        <div className="flex justify-between gap-32 mt-10 ">
          <div className="flex flex-col">
            <div className="border-2 border-gray-100">
              <img src={tubes} alt="" />
            </div>
            <div className="flex py-5">
              <img src={tubes} alt="" className="w-10" />
              <img src={tube} alt="" className="w-10"/>
              <img src={tube} alt="" className="w-10" />
              <img src={tube} alt="" className="w-10" />
              <img src={tube} alt="" className="w-10" />
              <img src={tube} alt="" className="w-10" />
              <span class="material-icons text-sm">keyboard_arrow_right</span>
            </div>
          </div>
          <div>
            <h1 className="border-b-2 font-bold border-gray-100">
              Georg Fischer PVC Pipe, 2m long x 32mm OD, 2.4mm Wall Thickness
            </h1>
            <div className="w-3/4">
              <h1 className="my-5 font-bold">Features</h1>
              <ul className="list-disc mx-4 marker:text-amber-500 ">
                <li>Feature text goes here</li>
                <li>Feature text goes here</li>
                <li>Feature text goes here</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Leo a diam sollicitudin tempor id eu nisl nunc. Maecenas sed
                  enim ut sem viverra. Su
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mt-6 mb-3">Additional information</h1>
        <div class="flex flex-col ">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full">
              <div class="overflow-hidden">
                <table class="min-w-full border divide-y-2 ">
                  <tbody>
                    <tr class="bg-gray-100 border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Brand
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Georg Fischer
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Length
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        1.5m
                      </td>
                    </tr>
                    <tr class="bg-gray-100 border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Thickness{" "}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        22mm{" "}
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Outer Diameter
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        23mm{" "}
                      </td>
                    </tr>
                    <tr class="bg-gray-100 border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Brand
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Georg Fischer
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Length
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        1.5m
                      </td>
                    </tr>
                    <tr class="bg-gray-100 border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Thickness{" "}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        22mm{" "}
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Outer Diameter
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        23mm{" "}
                      </td>
                    </tr>
                    <tr class="bg-gray-100 border-b">
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Brand
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Georg Fischer
                      </td>
                    </tr>
                   
                    
              
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
