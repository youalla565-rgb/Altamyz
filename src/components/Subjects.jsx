import {
  FaSquareRootAlt,
  FaAtom,
  FaFlask,
  FaDna,
  FaLanguage,
  FaBookOpen,
} from "react-icons/fa";

const subjects = [
  { title: "الرياضيات", icon: <FaSquareRootAlt />, color: "bg-blue-100 text-primary" },
  { title: "الفيزياء", icon: <FaAtom />, color: "bg-purple-100 text-purple-600" },
  { title: "الكيمياء", icon: <FaFlask />, color: "bg-green-100 text-green-600" },
  { title: "الأحياء", icon: <FaDna />, color: "bg-emerald-100 text-emerald-600" },
  { title: "اللغة العربية", icon: <FaBookOpen />, color: "bg-amber-100 text-amber-600" },
  { title: "اللغة الإنجليزية", icon: <FaLanguage />, color: "bg-rose-100 text-rose-600" },
];

export default function Subjects() {
  return (
    <section id="subjects" className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-3">
            المواد الدراسية
          </h2>
          <p className="text-slate-500">
            اختر المادة اللي عايز تذاكرها وابدأ مع أفضل المدرسين
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-1 hover:shadow-2xl transition duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-5 ${subject.color}`}
              >
                {subject.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary">
                {subject.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
