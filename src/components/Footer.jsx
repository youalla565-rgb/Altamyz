import { FaFacebook, FaYoutube, FaWhatsapp, FaGraduationCap } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary text-slate-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 mb-10">

        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-xl mb-4">
            <FaGraduationCap className="text-gold" />
            منصة التميز التعليمي
          </div>
          <p className="leading-relaxed">
            منصة تعليمية متكاملة تساعد الطلاب على التفوق من خلال شروحات
            فيديو، ملفات مذاكرة، وامتحانات إلكترونية.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2">
            <li><a href="#subjects" className="hover:text-gold transition">المواد الدراسية</a></li>
            <li><a href="/admin/login" className="hover:text-gold transition">لوحة التحكم</a></li>
            <li><a href="#" className="hover:text-gold transition">عن المنصة</a></li>
            <li><a href="#" className="hover:text-gold transition">تواصل معنا</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">تابعنا</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-secondary transition">
              <FaFacebook />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-secondary transition">
              <FaYoutube />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-secondary transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-slate-500 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} منصة التميز التعليمي. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
