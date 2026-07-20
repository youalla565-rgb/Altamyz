import { useState } from "react";

export default function Notifications(){

const [message,setMessage]=useState("");

function send(){

alert("تم إرسال الإشعار");

setMessage("");

}

return(

<div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">

<h1 className="text-3xl font-bold mb-8">

إرسال إشعار

</h1>

<input

className="border p-3 rounded w-full mb-4"

placeholder="عنوان الإشعار"

/>

<textarea

value={message}

onChange={(e)=>setMessage(e.target.value)}

className="border rounded w-full h-40 p-3"

placeholder="اكتب الرسالة"

/>

<button

onClick={send}

className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-xl"

>

إرسال لجميع الطلاب

</button>

</div>

)

}
