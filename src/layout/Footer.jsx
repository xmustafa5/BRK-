import { logo, logoText } from "../assets/svg";
import { Emails, Phones } from "../assets/svg/contact";

const Footer = () => {
  return (
    <div className="h-full bg-blue-120  flex justify-center items-center flex-col w-full">
      <div className="imageBgFooter w-full h-[50vh]">image</div>
      <div className="flex flex-col h-full  bg-blue-120 items-center gap-4 w-full ">
        <div className="flex justify-center h-full items-start  gap-6">
          <div className="flex flex-col h-full w-[300px]  p-2 bg-blue-120 justify-center items-center gap-2">
            <div className="flex gap-3">
              {logo} {logoText}
            </div>
            <p className="max-w-[] bg-[#] text-[16px] text-white">
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
          <div className="bg-[#1D2551] h-full w-full flex justify-center items-center">
            <h2 className="text-xl p-2 Medium text-white">pages</h2>
          </div>
          <div className="bg-[#1D2551] h-full w-full flex justify-center items-center">
            <h2 className="text-xl p-2 Medium text-white">About Us</h2>
          </div>
          <div className="bg-[#1D2551] h-full w-full flex justify-center items-center">
            <h2 className="text-xl p-2 Medium text-white">Subscribe</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
