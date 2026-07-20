import { useState } from "react";

export default function UploadVideo(){

const [video,setVideo]=useState(null);

return(

<div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow mt-10">

<h1 className="text-3xl font-bold mb-8">

رفع فيديو جديد

</h1>

<input

type="text"

placeholder="عنوان الفيديو"

className="border p-3 rounded w-full mb-4"

/>

<textarea

placeholder="وصف الفيديو"

className="border p-3 rounded w-full h-40 mb-4"

/>

<select

className="border p-3 rounded w-full mb-4"

>

<option>اختر المادة</option>

<option>رياضيات</option>

<option>فيزياء</option>

<option>كيمياء</option>

<option>لغة عربية</option>

</select>

<input

type="file"

accept="video/*"

onChange={(e)=>setVideo(e.target.files[0])}

className="mb-5"

/>

<button

className="bg-green-600 text-white px-8 py-3 rounded-xl"

>

رفع الفيديو

</button>

</div>

)

}
