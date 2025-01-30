import { useState } from "react";
import httpClient from "@/http/singleton/httpClient";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response = await httpClient.post("/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      window.location.href = "/dashboard"; // Redirect after login
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
