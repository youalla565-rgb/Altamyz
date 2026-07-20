import { useState } from "react";

export default function AddStudent() {

const [student,setStudent]=useState({

name:"",
email:"",
phone:"",
parentPhone:"",
grade:"",
password:""

});

function handleChange(e){

setStudent({

...student,

[e.target.name]:e.target.value

});

}

function saveStudent(e){

e.preventDefault();

console.log(student);

alert("تم إضافة الطالب بنجاح");

}

return(

<div className="max-w-3xl mx-auto mt-10 bg-white shadow-xl rounded-xl p-8">

<h1 className="text-3xl font-bold mb-8">

إضافة طالب

</h1>

<form onSubmit={saveStudent}>

<input
name="name"
placeholder="اسم الطالب"
className="border p-3 rounded w-full mb-4"
onChange={handleChange}
/>

<input
name="email"
type="email"
placeholder="البريد الإلكتروني"
className="border p-3 rounded w-full mb-4"
onChange={handleChange}
/>

<input
name="phone"
placeholder="رقم الهاتف"
className="border p-3 rounded w-full mb-4"
onChange={handleChange}
/>

<input
name="parentPhone"
placeholder="رقم ولي الأمر"
className="border p-3 rounded w-full mb-4"
onChange={handleChange}
/>

<select

name="grade"

className="border p-3 rounded w-full mb-4"

onChange={handleChange}

>

<option>اختر الصف الدراسي</option>

<option>الصف الأول الثانوي</option>

<option>الصف الثاني الثانوي</option>

<option>الصف الثالث الثانوي</option>

</select>

<input

name="password"

type="password"

placeholder="كلمة المرور"

className="border p-3 rounded w-full mb-6"

onChange={handleChange}

/>

<button

className="bg-blue-600 text-white px-8 py-3 rounded-xl w-full"

>

إضافة الطالب

</button>

</form>

</div>

)

}
