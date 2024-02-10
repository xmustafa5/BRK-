import { logo, logoText } from "../assets/svg";
import { Emails, Phones } from "../assets/svg/contact";

const Footer = () => {
  return (
    <div className="h-full bg-blue-120  flex justify-center items-center flex-col w-full">
      <div className="imageBgFooter w-full h-[50vh]">image</div>
      <div className="flex flex-col h-full  items-center gap-4 w-full ">
        <div className="flex justify-center h-full items-start w-full  ">
          <div className="w-[14vw] h-full ">
            <div className="text-[#1C2551] bg-[#1C2551] h-20">.</div>
            <div className="bg-blue-120 w-full h-full">.</div>
          </div>
          <div className="flex flex-col h-full w-[25vw] bg-blue-120 justify-center items-start ">
            <div className="flex gap-3 h-20 p-2 justify-start items-center  w-full h-">
              {logo} {logoText}
            </div>
            <p className="max-w-[] p-2 bg-[#] text-[16px] text-white">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <div className="flex flex-col justify-center items-center mr-24 gap-4">
              <div className="flex justify-center items-center gap-4">
                {Emails}
                <div className="text-white light text-md">
                  <p>Email</p>
                  <p className=" whitespace-nowrap">contact@brk-iq.com</p>
                </div>
              </div>
              <div className="flex justify-center light items-center gap-4">
                {Phones}
                <div className="text-white text-md">
                  <p>Email</p>
                  <p>contact@brk-iq.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1D2551] h-full  flex-col w-[13vw] flex justify-center items-start ">
            <h2 className="text-lg font-bold p-4 Regular text-white h-20 flex justify-start items-center bg-[#1C2551]">
              pages
            </h2>
            <div className="flex flex-col w-full h-full  p-4 text-white gap-3 bg-blue-120 justify-center items-start">
              <p>About Us</p>
              <p>About Us</p>
              <p>About Us</p>
              <p>About Us</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="bg-[#1D2551] h-full flex-col w-[13vw] flex justify-center items-start ">
            <h2 className="text-lg font-bold p-4 Regular text-white h-20 flex justify-start items-center bg-[#1C2551]">
              About Us
            </h2>
            <div className="flex flex-col w-full h-full  p-4 text-white gap-3 bg-blue-120 justify-center items-start">
              <p>About Us</p>
              <p>About Us</p>
              <p>About Us</p>
              <p>About Us</p>
              <p>About Us</p>
            </div>
          </div>

          <div className="bg-[#1D2551] h-full w-[19vw] flex justify-center flex-col items-start ">
            <h2 className="text-lg font-bold p-4 Regular h-20 bg-[#1C2551] flex flex-col items-center justify-center text-white">
              Subscribe
            </h2>
            <div className="flex flex-col p-4 gap-3 bg-blue-120 w-full">
              <input
                type="text"
                className="h-14 bg-blue-120 border border-gray-120 placeholder:outline-none placeholder:text-lg placeholder:pl-2"
                placeholder="Email Here*"
              />
              <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
                Send Now
              </button>
            </div>
          </div>
          <div className="w-[15vw] h-full ">
            <div className="text-[#1C2551] bg-[#1C2551] h-20">.</div>
            <div className="bg-blue-120 w-full h-full">.</div>
          </div>
        </div>
        <div className="border-t border-gray-400 w-full flex justify-center item-center gap-10 p-2">
          <h3 className="text-white">
            Copyrights 2024 © BRK Al-Baraka Company
          </h3>
          <div className="flex text-[#8388A7] text-md">
            <p>Privacy</p>
            <p>terms and Conditions of Sale</p>
            <p>Website Terms of Use</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
