import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthGuard from "./components/AuthGuard";
import ReportDashboard from "./pages/ReportDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ReportDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route element={<AuthGuard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
