import { useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudent } from "../../data/store";

export default function Students(){

const [students, setStudents] = useState(getStudents());
const [search, setSearch] = useState("");

function handleDelete(id) {
  if (!confirm("متأكد إنك عايز تحذف الطالب ده؟")) return;
  setStudents(deleteStudent(id));
}

const filtered = students.filter((s) =>
  s.name.includes(search) || s.email.includes(search)
);

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
إدارة الطلاب
</h1>

<div className="flex items-center gap-4 mb-6">

<input
placeholder="بحث..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="border rounded-lg p-3 w-80"
/>

<Link
to="/admin/students/add"
className="bg-blue-600 text-white px-6 py-3 rounded-xl"
>
إضافة طالب
</Link>

</div>

<table className="w-full bg-white shadow rounded-xl">

<thead className="bg-blue-600 text-white">

<tr>

<th className="p-3">الاسم</th>

<th>البريد</th>

<th>الهاتف</th>

<th>الصف</th>

<th>الحالة</th>

<th>الإجراءات</th>

</tr>

</thead>

<tbody>

{
filtered.map(student=>(

<tr key={student.id} className="border-b text-center">

<td className="p-4">{student.name}</td>

<td>{student.email}</td>

<td>{student.phone}</td>

<td>{student.grade || student.course || "-"}</td>

<td>{student.status}</td>

<td>

<button className="bg-green-600 text-white px-3 py-2 rounded mr-2">
تعديل
</button>

<button
onClick={() => handleDelete(student.id)}
className="bg-red-600 text-white px-3 py-2 rounded"
>
حذف
</button>

</td>

</tr>

))
}

{filtered.length === 0 && (
  <tr>
    <td colSpan="6" className="p-6 text-center text-slate-400">
      لا يوجد طلاب
    </td>
  </tr>
)}

</tbody>

</table>

</div>

)

}
