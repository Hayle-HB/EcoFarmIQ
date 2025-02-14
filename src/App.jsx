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

  return (
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
  );
}

export default App;
