import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {

  const { isAuthenticated } = useAuth();

  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}