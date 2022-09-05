import { createContext, useCallback, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

interface AuthContextInterface {
  isLogged: boolean;
  login: () => Promise<void>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextInterface | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false);
  const navigate = useNavigate();

  const login = useCallback(async () => {
    setIsLogged(true);
    navigate("/", { replace: true });
  }, [setIsLogged, navigate]);

  const logout = useCallback(() => {
    setIsLogged(false);
    navigate("/login", { replace: true });
  }, [setIsLogged, navigate]);

  const value = useMemo(
    () => ({
      isLogged,
      login,
      logout,
    }),
    [isLogged, login, logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
