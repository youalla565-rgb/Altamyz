import {useState} from "react";

export default function UploadLesson(){

const [title,setTitle]=useState("");

const [teacher,setTeacher]=useState("");

const [subject,setSubject]=useState("");

const [video,setVideo]=useState(null);

const [pdf,setPdf]=useState(null);

return(

<div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow mt-10">

<h1 className="text-3xl font-bold mb-8">

رفع شرح جديد

</h1>

<input

className="border p-3 w-full mb-4 rounded"

placeholder="عنوان الدرس"

onChange={(e)=>setTitle(e.target.value)}

/>

<input

className="border p-3 w-full mb-4 rounded"

placeholder="اسم المدرس"

onChange={(e)=>setTeacher(e.target.value)}

/>

<input

className="border p-3 w-full mb-4 rounded"

placeholder="المادة"

onChange={(e)=>setSubject(e.target.value)}

/>

<label>

رفع فيديو

<input

type="file"

accept="video/*"

onChange={(e)=>setVideo(e.target.files[0])}

/>

</label>

<br/><br/>

<label>

رفع PDF

<input

type="file"

accept=".pdf"

onChange={(e)=>setPdf(e.target.files[0])}

/>

</label>

<br/><br/>

<button

className="bg-blue-600 text-white px-8 py-3 rounded-xl"

>

رفع الدرس

</button>

</div>

)

}
