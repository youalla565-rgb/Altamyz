import {useState} from "react";

export default function Exams(){

const [questions,setQuestions]=useState([]);

function addQuestion(){

setQuestions([

...questions,

{

id:Date.now(),

question:"",

a:"",

b:"",

c:"",

d:"",

answer:""

}

])

}

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">

الامتحانات

</h1>

<button

onClick={addQuestion}

className="bg-green-600 text-white px-6 py-3 rounded-xl"

>

إضافة سؤال

</button>

{

questions.map((q,index)=>(

<div
key={q.id}
className="bg-white shadow rounded-xl p-6 mt-5"
>

<input
placeholder="السؤال"
className="border p-3 w-full mb-3 rounded"
/>

<input
placeholder="الإجابة الأولى"
className="border p-3 w-full mb-3 rounded"
/>

<input
placeholder="الإجابة الثانية"
className="border p-3 w-full mb-3 rounded"
/>

<input
placeholder="الإجابة الثالثة"
className="border p-3 w-full mb-3 rounded"
/>

<input
placeholder="الإجابة الرابعة"
className="border p-3 w-full mb-3 rounded"
/>

<select
className="border p-3 rounded w-full"
>

<option>الإجابة الصحيحة</option>

<option>A</option>

<option>B</option>

<option>C</option>

<option>D</option>

</select>

</div>

))

}

</div>

)

}
