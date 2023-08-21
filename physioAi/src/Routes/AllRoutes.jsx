import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../Homepage/Login";
import DashboardPage from "../Homepage/Dashboard";
import { Navbar } from "../components/Navbar";
import { PrivateRoute } from "./PrivateRoutes";

export const AllRoutes = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== "/login";
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<DashboardPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
