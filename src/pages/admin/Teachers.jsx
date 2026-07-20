import {useState} from "react";

export default function Teachers(){

const [teachers]=useState([

{
id:1,
name:"د/ محمد",
subject:"الرياضيات"
},

{
id:2,
name:"د/ أحمد",
subject:"الفيزياء"
}

]);

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-6">
المدرسين
</h1>

<button className="bg-blue-600 text-white px-5 py-3 rounded-xl mb-6">
إضافة مدرس
</button>

<div className="grid grid-cols-3 gap-6">

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

<p className="text-center">
{item.subject}
</p>

<button className="bg-yellow-500 text-white px-4 py-2 rounded mt-5 w-full">
تعديل
</button>

</div>

))

}

</div>

</div>

)

}
