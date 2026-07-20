import { useState } from "react";

export default function Payments() {

const [payments,setPayments]=useState([
{
id:1,
name:"Vodafone Cash",
number:"01012345678",
active:true
},
{
id:2,
name:"InstaPay",
number:"altamayoz@instapay",
active:true
}
]);

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">
طرق الدفع
</h1>

<button className="bg-blue-600 text-white px-6 py-3 rounded-xl mb-6">
إضافة طريقة دفع
</button>

<table className="w-full bg-white rounded-xl shadow">

<thead className="bg-blue-600 text-white">

<tr>

<th className="p-4">الطريقة</th>

<th>الرقم</th>

<th>الحالة</th>

<th>التحكم</th>

</tr>

</thead>

<tbody>

{payments.map(item=>(

<tr key={item.id} className="border-b">

<td className="p-4">{item.name}</td>

<td>{item.number}</td>

<td>

{item.active?

<span className="text-green-600">
مفعل
</span>

:

<span className="text-red-600">
متوقف
</span>

}

</td>

<td>

<button className="bg-yellow-500 px-4 py-2 rounded-lg text-white mr-2">

تعديل

</button>

<button className="bg-red-600 px-4 py-2 rounded-lg text-white">

حذف

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}
