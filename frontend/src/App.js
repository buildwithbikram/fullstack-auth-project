import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import PublicNavbar from "./components/PublicNavbar";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(
  localStorage.getItem("darkMode") === "true"
);
  const location = useLocation();


const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  localStorage.setItem("darkMode", newMode);
};


  const hideNavbar =
    // location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/admin");

  return (
    <div className={darkMode ? "dark" : ""}>
      {!hideNavbar && (
        <PublicNavbar toggleDarkMode={toggleDarkMode} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;



