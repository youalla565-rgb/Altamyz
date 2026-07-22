import { Navigate } from "react-router-dom";

const KEYS = {
  admin: "admin",
  student: "studentAuth",
  teacher: "teacherAuth",
};

const LOGIN_PATHS = {
  admin: "/admin/login",
  student: "/student/login",
  teacher: "/teacher/login",
};

export default function ProtectedRoute({ children, role = "admin" }) {

  const storageKey = KEYS[role];
  const value = localStorage.getItem(storageKey);

  const isAuthed = role === "admin" ? value === "true" : !!value;

  if (!isAuthed) {
    return <Navigate to={LOGIN_PATHS[role]} />;
  }

  return children;
}
