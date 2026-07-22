import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Subjects from "./components/Subjects";
import Features from "./components/Features";
import Footer from "./components/Footer";

import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Students from "./pages/admin/Students";
import AddStudent from "./pages/admin/AddStudent";
import Teachers from "./pages/admin/Teachers";
import AddTeacher from "./pages/admin/AddTeacher";
import AdminSubjects from "./pages/admin/Subjects";
import UploadVideo from "./pages/admin/UploadVideo";
import UploadPDF from "./pages/admin/UploadPDF";
import UploadLesson from "./pages/admin/UploadLesson";
import Homework from "./pages/admin/Homework";
import Exams from "./pages/admin/Exams";
import Payments from "./pages/admin/Payments";
import Notifications from "./pages/admin/Notifications";
import Statistics from "./pages/admin/Statistics";
import Settings from "./pages/admin/Settings";

import StudentLogin from "./pages/student/Login";
import StudentDashboard from "./pages/student/Dashboard";
import TeacherLogin from "./pages/teacher/Login";
import TeacherDashboard from "./pages/teacher/Dashboard";

function Home() {
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <Subjects />
      <Features />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin/login" element={<Login />} />

        <Route path="/student/login" element={<StudentLogin />} />
        <Route
          path="/student/dashboard"
          element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>}
        />

        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route
          path="/teacher/dashboard"
          element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>}
        />

        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
        />

        <Route
          path="/admin/students"
          element={<ProtectedRoute><Students /></ProtectedRoute>}
        />
        <Route
          path="/admin/students/add"
          element={<ProtectedRoute><AddStudent /></ProtectedRoute>}
        />

        <Route
          path="/admin/teachers"
          element={<ProtectedRoute><Teachers /></ProtectedRoute>}
        />
        <Route
          path="/admin/teachers/add"
          element={<ProtectedRoute><AddTeacher /></ProtectedRoute>}
        />

        <Route
          path="/admin/subjects"
          element={<ProtectedRoute><AdminSubjects /></ProtectedRoute>}
        />

        <Route
          path="/admin/videos"
          element={<ProtectedRoute><UploadVideo /></ProtectedRoute>}
        />
        <Route
          path="/admin/pdf"
          element={<ProtectedRoute><UploadPDF /></ProtectedRoute>}
        />
        <Route
          path="/admin/lessons"
          element={<ProtectedRoute><UploadLesson /></ProtectedRoute>}
        />

        <Route
          path="/admin/homework"
          element={<ProtectedRoute><Homework /></ProtectedRoute>}
        />
        <Route
          path="/admin/exams"
          element={<ProtectedRoute><Exams /></ProtectedRoute>}
        />
        <Route
          path="/admin/payments"
          element={<ProtectedRoute><Payments /></ProtectedRoute>}
        />
        <Route
          path="/admin/notifications"
          element={<ProtectedRoute><Notifications /></ProtectedRoute>}
        />
        <Route
          path="/admin/statistics"
          element={<ProtectedRoute><Statistics /></ProtectedRoute>}
        />
        <Route
          path="/admin/settings"
          element={<ProtectedRoute><Settings /></ProtectedRoute>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
