// src/hooks/useAuth.jsx
import { useState } from "react";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  const login = () => {
    localStorage.setItem("auth", "true");
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
};
