// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Simulate login status

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect to home if not logged in
  }

  return children;
};

export default ProtectedRoute;
