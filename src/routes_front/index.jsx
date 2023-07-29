import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { DashboardPage } from "../pages/Dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
