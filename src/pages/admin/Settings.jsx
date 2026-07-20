import {useState} from "react";

export default function Settings(){

const [platformName,setPlatformName]=useState("منصة التميز التعليمي");
const [phone,setPhone]=useState("01000000000");
const [facebook,setFacebook]=useState("");
const [telegram,setTelegram]=useState("");
const [youtube,setYoutube]=useState("");

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">

إعدادات المنصة

</h1>

<div className="bg-white rounded-xl shadow p-8">

<input
className="border p-3 rounded w-full mb-4"
value={platformName}
onChange={(e)=>setPlatformName(e.target.value)}
/>

<input
className="border p-3 rounded w-full mb-4"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>

<input
placeholder="رابط فيسبوك"
className="border p-3 rounded w-full mb-4"
onChange={(e)=>setFacebook(e.target.value)}
/>

<input
placeholder="رابط تيليجرام"
className="border p-3 rounded w-full mb-4"
onChange={(e)=>setTelegram(e.target.value)}
/>

<input
placeholder="رابط يوتيوب"
className="border p-3 rounded w-full mb-4"
onChange={(e)=>setYoutube(e.target.value)}
/>

<label>

رفع شعار المنصة

<input
type="file"
accept="image/*"
className="mt-3"
/>

</label>

<button
className="bg-blue-600 text-white px-8 py-3 rounded-xl mt-6"
>

حفظ الإعدادات

</button>

</div>

</div>

)

}
