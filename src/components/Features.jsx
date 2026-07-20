import {
  FaVideo,
  FaFilePdf,
  FaClipboardCheck,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "شروحات فيديو",
    desc: "شروحات مسجلة بجودة عالية لكل درس في المنهج",
    icon: <FaVideo />,
  },
  {
    title: "ملفات PDF",
    desc: "مذكرات وملخصات جاهزة للتحميل والمراجعة",
    icon: <FaFilePdf />,
  },
  {
    title: "امتحانات إلكترونية",
    desc: "اختبر نفسك بامتحانات فورية مع تصحيح تلقائي",
    icon: <FaClipboardCheck />,
  },
  {
    title: "متابعة الأداء",
    desc: "تقارير دورية توضح مستواك ونقاط التحسين",
    icon: <FaChartLine />,
  },
  {
    title: "دعم فني",
    desc: "فريق دعم جاهز للرد على استفساراتك في أي وقت",
    icon: <FaHeadset />,
  },
  {
    title: "دفع آمن",
    desc: "طرق دفع متعددة وآمنة لاشتراكك في المنصة",
    icon: <FaShieldAlt />,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-3">
            ليه تختار منصتنا؟
          </h2>
          <p className="text-slate-500">
            كل اللي محتاجه علشان تتفوق في مكان واحد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
