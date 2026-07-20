import { useState } from "react";

export default function Subjects() {

  const [subjects, setSubjects] = useState([
    { id: 1, name: "الرياضيات", grade: "الصف الثالث الثانوي", teacher: "د/ محمد" },
    { id: 2, name: "الفيزياء", grade: "الصف الثالث الثانوي", teacher: "د/ أحمد" },
    { id: 3, name: "الكيمياء", grade: "الصف الثاني الثانوي", teacher: "د/ سارة" },
  ]);

  const [name, setName] = useState("");

  function addSubject(e) {
    e.preventDefault();
    if (!name.trim()) return;

    setSubjects([
      ...subjects,
      { id: Date.now(), name, grade: "غير محدد", teacher: "غير محدد" },
    ]);
    setName("");
  }

  function deleteSubject(id) {
    setSubjects(subjects.filter((s) => s.id !== id));
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        المواد الدراسية
      </h1>

      <form onSubmit={addSubject} className="flex gap-3 mb-8">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="اسم مادة جديدة"
          className="border rounded-lg p-3 w-80"
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          إضافة مادة
        </button>
      </form>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">المادة</th>
            <th>الصف الدراسي</th>
            <th>المدرس</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id} className="border-b text-center">
              <td className="p-4">{subject.name}</td>
              <td>{subject.grade}</td>
              <td>{subject.teacher}</td>
              <td>
                <button className="bg-green-600 text-white px-3 py-2 rounded mr-2">
                  تعديل
                </button>
                <button
                  onClick={() => deleteSubject(subject.id)}
                  className="bg-red-600 text-white px-3 py-2 rounded"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
