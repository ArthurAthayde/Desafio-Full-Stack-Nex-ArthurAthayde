import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { DashboardPage } from "../pages/Dashboard";
import { NotFoundPage } from "../pages/NotFound";
import { WelcomePage } from "../pages/Welcome";
import { PrivateRoute } from "../components/PrivateRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<DashboardPage />} />}
      />
      <Route path="/" element={<WelcomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
