import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ Important

const ProtectedRoute = ({ children }) => {
  const { authenticated } = useAuth(); // ✅ useAuth is used

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
