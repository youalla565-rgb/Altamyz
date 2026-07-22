import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex flex-wrap items-center justify-between gap-3">

      <h1 className="text-2xl font-bold">
        منصة التميز التعليمي
      </h1>

      <div className="flex items-center gap-3 text-sm">

        <Link
          to="/student/login"
          className="bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg"
        >
          دخول الطلاب
        </Link>

        <Link
          to="/teacher/login"
          className="bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-lg"
        >
          دخول المدرسين
        </Link>

        <Link
          to="/admin/login"
          className="bg-gold text-secondary font-bold px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          لوحة التحكم
        </Link>

      </div>

    </nav>
  );
}
