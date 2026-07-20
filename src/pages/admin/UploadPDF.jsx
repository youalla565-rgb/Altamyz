import { useState } from "react";

export default function UploadPDF() {

  const [pdf, setPdf] = useState(null);

  function uploadPDF(e) {
    e.preventDefault();

    if (!pdf) {
      alert("اختر ملف PDF");
      return;
    }

    alert("تم رفع الملف بنجاح");
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8 mt-10">

      <h1 className="text-3xl font-bold mb-8">
        رفع مذكرة PDF
      </h1>

      <form onSubmit={uploadPDF}>

        <input
          className="border p-3 rounded w-full mb-4"
          placeholder="عنوان المذكرة"
        />

        <textarea
          className="border p-3 rounded w-full h-40 mb-4"
          placeholder="وصف المذكرة"
        />

        <input
          type="file"
          accept=".pdf"
          onChange={(e)=>setPdf(e.target.files[0])}
          className="mb-5"
        />

        <button
          className="bg-red-600 text-white px-8 py-3 rounded-xl"
        >
          رفع الملف
        </button>

      </form>

    </div>
  );
}
