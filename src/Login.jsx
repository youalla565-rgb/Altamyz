import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { findStudent } from "../../data/store";

export default function StudentLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();

    const student = findStudent(email, password);

    if (student) {
      localStorage.setItem(
        "studentAuth",
        JSON.stringify({ id: student.id, name: student.name })
      );
      navigate("/student/dashboard");
    } else {
      alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={login}
        className="bg-white p-10 rounded-2xl shadow-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold text-center text-primary mb-8">
          دخول الطلاب
        </h1>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full border p-3 rounded-xl mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary text-white p-3 rounded-xl hover:bg-blue-700">
          تسجيل الدخول
        </button>

        <div className="text-center mt-6 text-sm text-slate-500">
          <Link to="/teacher/login" className="hover:text-primary">
            دخول المدرسين
          </Link>
          {" | "}
          <Link to="/" className="hover:text-primary">
            الرئيسية
          </Link>
        </div>

      </form>

    </div>
  );
}
