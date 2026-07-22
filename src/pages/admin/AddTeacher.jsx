import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTeacher } from "../../data/store";

export default function AddTeacher() {
  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    password: ""
  });

  function handleChange(e) {
    setTeacher({
      ...teacher,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!teacher.name || !teacher.email || !teacher.password) {
      alert("من فضلك أدخل الاسم والبريد الإلكتروني وكلمة المرور");
      return;
    }

    addTeacher(teacher);

    alert("تم إضافة المدرس بنجاح");

    navigate("/admin/teachers");
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow mt-10">

      <h1 className="text-3xl font-bold mb-8">
        إضافة مدرس جديد
      </h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="اسم المدرس"
          value={teacher.name}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="text"
          name="subject"
          placeholder="المادة"
          value={teacher.subject}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={teacher.email}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="text"
          name="phone"
          placeholder="رقم الهاتف"
          value={teacher.phone}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="كلمة المرور"
          value={teacher.password}
          onChange={handleChange}
          className="border p-3 rounded w-full mb-6"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl w-full hover:bg-blue-700"
        >
          إضافة المدرس
        </button>

      </form>

    </div>
  );
}
