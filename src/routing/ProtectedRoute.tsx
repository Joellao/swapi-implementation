import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({
  children,
  redirectTo,
}: {
  children: JSX.Element;
  redirectTo: string;
}) => {
  const auth = useAuth();
  return auth?.isLogged ? children : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
