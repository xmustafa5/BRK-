import SectionTitle from "../ui/Section-title";
import LightLabel from "../ui/LightLabel";
import Paragraph from "../ui/Paragraph";

import workerImg from "../../assets/about-page/Photo.png";
import DarkLabel from "../ui/DarkLabel";

export default function OurVision({ar}) {
  return (
    <>
      <section className="bg-gray-20 relative overflow-hidden py-10 lg:py-0">
        <div className="container min-h-[90vh] flex gap-8 items-center flex-col lg:ml-16 lg:flex-row ">
          <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-start flex-1">
            <LightLabel title={ar? 'من نحن' :"About us"} />
            <SectionTitle title={ar? 'بعد عام 2003 ' :"After 2003"} />
            <Paragraph p={ar? 'وانفتاح العراق على الأسواق العالمية،  باشرت شركة البركة للاستثمارات الصناعية أول توسّع لها، عندما رُفد السوق بمواد جديدة، وصارت التكنولوجيا جزءا من صناعة الأنابيب البلاستيكية، وزادت مساحات النشاط، لتصبح شركة البركة أول شركة محلية تنتج ملحقات الـPVC في العراق.' :"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition."} />
            <Paragraph p={ar? 'حصلت شركة البركة للاستثمارات الصناعية في عام 2011 على أول براءة اختراع طوّرت من قدرات شبكات الصرف الصحي. ' :"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit."} />
            <Paragraph p={ar? 'وضمن مساعي الشركة الاستراتيجية، أنشأت في 2015  قسم التخطيط والتطوير، لتوفير البيئة المناسبة وبذل الإمكانيات اللازمة لإيجاد الحلول المضافة وتطوير المنتجات، فتكللت الجهود بحصول الشركة على عدد من براءات الاختراع التي أسهمت في تطور شبكات الصرف الصحي عالمياً. ' :"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit"} />
            <Paragraph p={ar?  "وفي عام 2017 استكملت الشركة خطتها في التطوير، وبدأت بدراسة عن ابتكار جديد يحل المشكلات، فكانت الملحقات ذات الطبقتين بقدراتها في الحماية والمتانة والمرونة، فحصلت على مجموعة من براءات الاختراع عن منتجها PVC PRO، ومع عام 2022 طرح المنتج لأول مرة في السوق العراقي، ومنه انطلق إلى الأسواق العالمية. ولا تزال شركة البركة للاستثمارات الصناعية الوحيدة في العالم التي تمتلك حقوق المنتج وتصدره إلى دول عدة."   :"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."} />
          </div>
          <div className="justify-items-end flex-1">
            <img src={workerImg} alt="Worker" />
          </div>
        </div>
      </section>
      <section className="bg-yellow-120 pattern-image flex justify-center">
        <div className="container flex flex-col gap-8 items-center justify-center min-h-[50vh]">
          <DarkLabel title={ar? 'الرؤية' :"our vision"} />
          <h2 className="text-xl bold text-blue-110 text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {ar? 'ترسيخ الحضور محلياً، والانطلاقـ نحو الأسواقـ العالمية' :'Establishing presence locally, and launch towards markets globalism'}
          </h2>
        </div>
      </section>
    </>
  );
}
