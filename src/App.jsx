import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Welcome from "./pages/Welcome/Welcome";
import LandingApp from "./components/LandingPage/LandingApp";
import Sidebar from "./components/SideBar/SideBar";
import NotFound from "./components/NotFound/NotFound";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-20 md:ml-64">{children}</div>
    </div>
  );
};

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={!token ? <LandingApp /> : <Navigate to="/welcome" />}
      />
      <Route
        path="/login"
        element={!token ? <Login /> : <Navigate to="/welcome" />}
      />
      <Route
        path="/signup"
        element={!token ? <Signup /> : <Navigate to="/welcome" />}
      />

      {/* Protected Routes */}
      <Route
        path="/welcome"
        element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        }
      />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
