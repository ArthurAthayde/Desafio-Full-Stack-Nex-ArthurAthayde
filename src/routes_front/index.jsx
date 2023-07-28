import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../pages/Register";
import { LoginPage } from "../pages/Login";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
