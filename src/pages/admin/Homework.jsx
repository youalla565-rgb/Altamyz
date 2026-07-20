import { useState } from "react";

export default function Homework(){

const [homeworks,setHomeworks]=useState([]);

const [title,setTitle]=useState("");
const [subject,setSubject]=useState("");
const [deadline,setDeadline]=useState("");

function addHomework(){

const hw={
id:Date.now(),
title,
subject,
deadline
};

setHomeworks([...homeworks,hw]);

setTitle("");
setSubject("");
setDeadline("");

}

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">
إدارة الواجبات
</h1>

<div className="bg-white p-6 rounded-xl shadow">

<input
className="border p-3 w-full rounded mb-4"
placeholder="عنوان الواجب"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<input
className="border p-3 w-full rounded mb-4"
placeholder="المادة"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
/>

<input
type="date"
className="border p-3 w-full rounded mb-4"
value={deadline}
onChange={(e)=>setDeadline(e.target.value)}
/>

<input
type="file"
className="mb-5"
/>

<button
onClick={addHomework}
className="bg-blue-600 text-white px-8 py-3 rounded-xl"
>

إضافة الواجب

</button>

</div>

<div className="mt-10">

{

homeworks.map(hw=>(

<div
key={hw.id}
className="bg-white p-5 rounded-xl shadow mb-4"
>

<h2>{hw.title}</h2>

<p>{hw.subject}</p>

<p>آخر موعد : {hw.deadline}</p>

</div>

))

}

</div>

</div>

)

}
