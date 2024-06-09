import React from "react";
import CertifiPng from "../../assets/img/partners/certificate.png";
import congratIcons from "../../assets/img/congrat/image 1.png";
import Pattern from "../../assets/img/congrat/Pattern.png";

export default function Congrat({ ar }) {
  return (
    <section
      className={`relative mt-16 flex flex-col md:flex-row min-h-[150vh] md:min-h-[80vh] md:h-[100vh] bg-blue-120 `}
    >
      <div className="w-[100%] md:w-[40%] relative  ">
        <div className="absolute top-[730px] mx-auto left-1/2 -translate-x-1/2 w-[300px] md:top-1/2 md:-translate-y-1/2 md:-right-32 z-40 border-[20px] ">
          <img src={CertifiPng} alt="certificate" />
          <div className="absolute -bottom-5 w-36 cursor-pointer tracking-wide opacity-90 -left-5 h-10 text-center text-lg font-bold flex justify-center items-center bg-[#FABA20]">
            PREVIEW
          </div>
        </div>
      </div>
      <div className="bg-gray-20 w-[100%] md:w-[60%] flex justify-center relative items-start container gap-10 flex-col">
        <div className="absolute z-10 w-full h-full  left-0 flex justify-center items-center ">
          <img src={Pattern} alt="" className="w-full " />
        </div>
        <div className="h-full z-20 flex flex-col justify-center gap-10 py-8">
          <div className="bg-gray-200 flex w-fit md:mx-1 mx-auto">
            <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
              |
            </p>
            <p className="text-md bold boldAr  regular text-black-120 p-2 ">
              {ar ? "شهادات الجودة" : "ISO Certificates"}
            </p>
          </div>
          <h2
            className={`flex boldAr bold  flex-col gap-3  text-black-120 text-2xl md:text-5xl font-semibold tracking-wider ${
              ar ? "md:text-right boldAr" : "md:text-left ExtraBold"
            } text-center`}
          >
            {ar ? "شهادات الشركة" : "Company Certificates"}
          </h2>
          <p
            className={`max-w-[500px] Medium mediumAr text-[16px] text-gray-120 text-center ${
              ar ? "md:text-right" : "md:text-left"
            }`}
          >
            {ar
              ? "حصلت شركة البركة للاستثمارات الصناعية على ثماني براءات اختراع عن منتجها المتعدد الطبقات، نظراً لاحتوائه على طبقتين، الطبقة الأولى للحماية من العوامل الخارجية، والطبقة الداخلية لضمان سرعة الجريان فيه. وهي مواصفات لا تتوفر في أي منتج حول العالم. اجتهدت شركة البركة في تطوير منتجاتها باستمرار، ورغم ما تواجهه من تحديات، غير أن النجاح كان حليفها، نظراً للإصرار على التقدم، وتحقيق الأهداف. "
              : "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."}{" "}
          </p>
          <button
            className={
              " bg-yellow-120 Medium w-fit px-8 py-2 rounded-[0px] m-auto  md:m-1"
            }
          >
            {ar ? "استكشاف المزيد " : "Explore More"}
          </button>
          <div
            className={`flex gap-4 md:gap-10 justify-center md:justify-start   `}
          >
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
            <img src={congratIcons} alt="congratIcons" />
          </div>
        </div>
      </div>
    </section>
  );
}
// import React from "react";
// import CertifiPng from "../../assets/img/partners/certificate.png";
// import congratIcons from "../../assets/img/congrat/image 1.png";
// import Pattern from "../../assets/img/congrat/Pattern.png";

// export default function Congrat({ ar , className }) {

//   return (
//     <section className={`${className} relative  flex flex-col md:flex-row bg-black-120 h-[130vh]  md:h-[80vh] `}>
//       <div className={`w-[100%] md:w-[40%] ${ar ? "" : "relative"} `}>
//         <div
//           className={`absolute  ${
//             ar ? "md:right-[450px]" : "md:-right-32"
//           } top-[600px] right-10 mx-auto md:top-20    z-40 border-[20px]`}
//         >
//           <img
//             className="  object-cover w-[300px] md:w-[350px]"
//             src={CertifiPng}
//             alt="certificate"
//           />
//         </div>
//       </div>

//       <div className="bg-gray-20 w-[100%] md:w-[60%] flex justify-center relative items-start pl-[50px] md:pl-[200px] gap-10 flex-col">
//         <div className="absolute z-10 w-full h-full  left-0 flex justify-center items-center">
//           <img src={Pattern} alt="" className="w-full " />
//         </div>
//         <div
//           className={`h-full z-20  flex flex-col justify-center ${
//             ar ? "mr-60" : "mr-0"
//           }  gap-10`}
//         >
//           <div className="bg-gray-200 flex w-fit  ">
//             <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
//               |
//             </p>
//             <p className="text-md regular text-black-120 font-medium p-1">
//               {ar ? "شهادات الجودة" : "ISO Certificates"}
//             </p>
//           </div>
//           <h1 className="flex bold flex-col gap-3  text-black-120 text-2xl md:text-5xl font-semibold tracking-wider">
//             {ar ? "شهادات الشركة" : "Company Certificates"}
//           </h1>
//           <p className="max-w-[500px] text-[16px] text-gray-120">
//             {ar
//               ? "حصلت شركة البركة للاستثمارات الصناعية على ثماني براءات اختراع عن منتجها المتعدد الطبقات، نظراً لاحتوائه على طبقتين، الطبقة الأولى للحماية من العوامل الخارجية، والطبقة الداخلية لضمان سرعة الجريان فيه. وهي مواصفات لا تتوفر في أي منتج حول العالم. اجتهدت شركة البركة في تطوير منتجاتها باستمرار، ورغم ما تواجهه من تحديات، غير أن النجاح كان حليفها، نظراً للإصرار على التقدم، وتحقيق الأهداف. "
//               : "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."}
//           </p>
//           <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
//             {ar ? "استكشاف المزيد " : "Explore More"}
//           </button>
//           <div className="flex gap-4 md:gap-10 justify-center items-center">
//             <img src={congratIcons} alt="congratIcons" />
//             <img src={congratIcons} alt="congratIcons" />
//             <img src={congratIcons} alt="congratIcons" />
//             <img src={congratIcons} alt="congratIcons" />
//           </div>
//         </div>
//       </div>

//       {/* <div className="absolute left-36  mt-32 md:ml-[550px]  border-[20px] z-30 border-gray-300">
//         <img
//           className="object-cover w-[300px] md:w-[350px]"
//           src={CertifiPng}
//           alt="certificate "
//         />
//         <div className="absolute -bottom-5 w-36 cursor-pointer tracking-wide opacity-90 -left-5 h-10 text-center text-lg font-bold flex justify-center items-center bg-[#FABA20]">
//           PREVIEW
//         </div>
//       </div>
//       <div className=" w-[600px] md:w-[800px] bg-[#091242]"></div>

//       <div className="bg-gray-20  flex justify-center relative items-start pl-[50px] md:pl-[200px] gap-10 flex-col">
//         <div className="absolute z-10 w-full h-full  left-0 flex justify-center items-center">
//           <img src={Pattern} alt="" className="w-full " />
//         </div>
//         <div className="h-full z-20 flex flex-col justify-center gap-10">
//           <div className="bg-gray-200 flex w-fit  ">
//             <p className=" font-bold text-yellow-120 flex justify-center items-center bg-yellow-120">
//               |
//             </p>
//             <p className="text-md regular text-black-120 font-medium p-1">
//               ISO Certificates
//             </p>
//           </div>
//           <h1 className="flex bold flex-col gap-3  text-black-120 text-2xl md:text-5xl font-semibold tracking-wider">
//             Company Certificates
//           </h1>
//           <p className="max-w-[500px] text-[16px] text-gray-120">
//             Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
//             accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
//             quae ab illo inventore veritatis et quasi architecto beatae vitae
//             dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.
//           </p>
//           <button className=" bg-yellow-120 w-fit px-8 py-2 rounded-[0px]">
//             Explore More
//           </button>
//           <div className="flex gap-4 md:gap-10 justify-center items-center">
//             <img src={congratIcons} alt="congratIcons" />
//             <img src={congratIcons} alt="congratIcons" />
//             <img src={congratIcons} alt="congratIcons" />
//             <img src={congratIcons} alt="congratIcons" />
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// }
