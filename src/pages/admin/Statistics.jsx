export default function Statistics(){

const cards=[

["عدد الطلاب",1245],

["عدد المدرسين",32],

["عدد الفيديوهات",865],

["عدد الـ PDF",430],

["عدد الواجبات",120],

["عدد الامتحانات",85],

["الاشتراكات",780],

["الإيرادات","125,000 جنيه"]

];

return(

<div className="p-8">

<h1 className="text-3xl font-bold mb-8">

الإحصائيات

</h1>

<div className="grid grid-cols-4 gap-6">

{

cards.map((item,index)=>(

<div

key={index}

className="bg-white shadow rounded-xl p-8"

>

<h2 className="text-xl">

{item[0]}

</h2>

<p className="text-4xl font-bold mt-4 text-blue-600">

{item[1]}

</p>

</div>

))

}

</div>

</div>

)

}
