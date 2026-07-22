import { useNavigate } from "react-router-dom";
import { getStudents } from "../../data/store";

export default function StudentDashboard() {
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("studentAuth") || "null");
  const student = getStudents().find((s) => s.id === auth?.id);

  function logout() {
    localStorage.removeItem("studentAuth");
    navigate("/student/login");
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        لم يتم العثور على بيانات الطالب
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          أهلاً بيك، {student.name}
        </h1>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-6 py-3 rounded-xl"
        >
          تسجيل الخروج
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg mb-3">بياناتي</h2>
          <p className="text-slate-500 mb-1">الصف: {student.grade || "-"}</p>
          <p className="text-slate-500 mb-1">المادة: {student.course || "-"}</p>
          <p className="text-slate-500">الحالة: {student.status}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg mb-3">الشروحات والملفات</h2>
          <p className="text-slate-400">لسه مفيش شروحات متاحة، تابع معانا قريب.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg mb-3">الامتحانات</h2>
          <p className="text-slate-400">مفيش امتحانات متاحة دلوقتي.</p>
        </div>

      </div>

    </div>
  );
}
