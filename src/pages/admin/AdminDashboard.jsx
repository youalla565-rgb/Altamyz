import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const cards = [
    { title: "إدارة الطلاب", icon: "👨‍🎓", link: "/admin/students" },
    { title: "إدارة المدرسين", icon: "👨‍🏫", link: "/admin/teachers" },
    { title: "المواد الدراسية", icon: "📚", link: "/admin/subjects" },
    { title: "رفع الشروحات", icon: "🎥", link: "/admin/videos" },
    { title: "رفع ملفات PDF", icon: "📄", link: "/admin/pdf" },
    { title: "رفع الواجبات", icon: "📝", link: "/admin/homework" },
    { title: "الامتحانات", icon: "✅", link: "/admin/exams" },
    { title: "طرق الدفع", icon: "💳", link: "/admin/payments" },
    { title: "الإشعارات", icon: "🔔", link: "/admin/notifications" },
    { title: "الإعدادات", icon: "⚙️", link: "/admin/settings" }
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        لوحة تحكم منصة التميز التعليمي
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {cards.map((card) => (

          <Link
            key={card.title}
            to={card.link}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl duration-300"
          >
            <div className="text-5xl">{card.icon}</div>

            <h2 className="mt-5 text-xl font-bold">
              {card.title}
            </h2>

          </Link>

        ))}

      </div>

    </div>
  );
}
