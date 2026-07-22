import {useState} from "react";
import {Link} from "react-router-dom";
import { getTeachers, deleteTeacher } from "../../data/store";

export default function Teachers(){

const [teachers, setTeachers] = useState(getTeachers());

function handleDelete(id) {
  if (!confirm("متأكد إنك عايز تحذف المدرس ده؟")) return;
  setTeachers(deleteTeacher(id));
}

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
المدرسين
</h1>

<Link
to="/admin/teachers/add"
className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl mb-6"
>
إضافة مدرس
</Link>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{

teachers.map(item=>(

<div
key={item.id}
className="bg-white rounded-xl shadow-lg p-6"
>

<img
src="https://placehold.co/150"
className="rounded-full mx-auto"
/>

<h2 className="text-center mt-4 text-xl font-bold">
{item.name}
</h2>

<p className="text-center text-slate-500">
{item.subject}
</p>

<div className="flex gap-2 mt-5">

<button className="bg-yellow-500 text-white px-4 py-2 rounded flex-1">
تعديل
</button>

<button
onClick={() => handleDelete(item.id)}
className="bg-red-600 text-white px-4 py-2 rounded flex-1"
>
حذف
</button>

</div>

</div>

))

}

{teachers.length === 0 && (
  <p className="text-slate-400 col-span-full text-center">لا يوجد مدرسين</p>
)}

</div>

</div>

)

}
