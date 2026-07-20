import { useState } from "react";

export default function Students(){

const [students,setStudents]=useState([
{
id:1,
name:"محمد أحمد",
email:"mohamed@gmail.com",
phone:"01000000000",
course:"الرياضيات",
status:"نشط"
},
{
id:2,
name:"أحمد علي",
email:"ahmed@gmail.com",
phone:"01111111111",
course:"الفيزياء",
status:"موقوف"
}
]);

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
إدارة الطلاب
</h1>

<input
placeholder="بحث..."
className="border rounded-lg p-3 w-80 mb-6"
/>

<table className="w-full bg-white shadow rounded-xl">

<thead className="bg-blue-600 text-white">

<tr>

<th className="p-3">الاسم</th>

<th>البريد</th>

<th>الهاتف</th>

<th>الكورس</th>

<th>الحالة</th>

<th>الإجراءات</th>

</tr>

</thead>

<tbody>

{
students.map(student=>(

<tr key={student.id} className="border-b">

<td className="p-4">{student.name}</td>

<td>{student.email}</td>

<td>{student.phone}</td>

<td>{student.course}</td>

<td>{student.status}</td>

<td>

<button className="bg-green-600 text-white px-3 py-2 rounded mr-2">
تعديل
</button>

<button className="bg-red-600 text-white px-3 py-2 rounded">
حذف
</button>

</td>

</tr>

))
}

</tbody>

</table>

</div>

)

}
