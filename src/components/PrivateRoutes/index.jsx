import { Navigate } from "react-router-dom";
import { DashboardPage } from "../../pages/Dashboard";

export const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem("@NexFullStack_userToken");

  return isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />;
};
