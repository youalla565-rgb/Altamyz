import { Link } from "react-router-dom";
import { FaPlayCircle, FaGraduationCap } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="inline-block bg-gold text-secondary font-bold px-4 py-1 rounded-full text-sm mb-6">
            منصة التميز التعليمي
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            رحلتك نحو{" "}
            <span className="text-gold">التفوق الدراسي</span>{" "}
            تبدأ من هنا
          </h1>

          <p className="text-slate-300 text-lg mb-8">
            شروحات فيديو، ملفات PDF، امتحانات إلكترونية، ومتابعة مستمرة
            لمستواك الدراسي، كل ده في مكان واحد.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#subjects"
              className="flex items-center gap-2 bg-primary hover:bg-blue-700 transition px-7 py-3 rounded-xl font-bold"
            >
              <FaPlayCircle />
              ابدأ التعلم الآن
            </a>

            <Link
              to="/admin/login"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-7 py-3 rounded-xl font-bold border border-white/20"
            >
              <FaGraduationCap />
              دخول لوحة التحكم
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <img
            src="https://placehold.co/500x400/1e293b/FDBA21?text=Al-Tamayoz"
            alt="منصة التميز التعليمي"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
