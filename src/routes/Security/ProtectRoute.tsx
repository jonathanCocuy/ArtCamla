import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/authProvider";

export default function ProtectRoute() {
  const auth = useAuth()

  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
