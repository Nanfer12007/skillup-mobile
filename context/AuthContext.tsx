import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email: string, password: string) {
    const response = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });

    await AsyncStorage.setItem("token", response.data.token);
    setUser(response.data.user);
  }

  async function logout() {
    await AsyncStorage.removeItem("token");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
