import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ADMIN_EMAIL = "admin@altamayoz.com";
  const ADMIN_PASSWORD = "Altamayoz@2026#Strong";

  function login(e) {
    e.preventDefault();

    if (
      email === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      alert("بيانات الدخول غير صحيحة");
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <form
        onSubmit={login}
        className="bg-white p-10 rounded-2xl shadow-xl w-[400px]"
      >

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          لوحة تحكم التميز التعليمي
        </h1>

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full border p-3 rounded-xl mb-4"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full border p-3 rounded-xl mb-6"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
        >
          تسجيل الدخول
        </button>

      </form>

    </div>
  );
}
