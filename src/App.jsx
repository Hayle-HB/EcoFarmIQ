import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Welcome from "./pages/Welcome/Welcome";
import LandingApp from "./components/LandingPage/LandingApp";
import Sidebar from "./components/SideBar/SideBar";
import NotFound from "./components/NotFound/NotFound";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { useEffect } from "react";

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

// Public Route Component
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/welcome" replace />;
  }

  return children;
};

function App() {
  const token = localStorage.getItem("token");
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    // Apply or remove dark class based on Redux state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={token ? <Navigate to="/welcome" replace /> : <LandingApp />}
        />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
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
        <Route
          path="*"
          element={
            token ? (
              <ProtectedRoute>
                <NotFound />
              </ProtectedRoute>
            ) : (
              <PublicRoute>
                <NotFound />
              </PublicRoute>
            )
          }
        />
      </Routes>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
