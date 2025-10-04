"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  organizationId: string;
  role: string;
  [key: string]: unknown; 
}

export interface AuthContextType {
  token: string | null;
  user: User | null;
  signIn: (newToken: string, userData: User) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  const signIn = (newToken: string, userData: User) => {
    setToken(newToken);

    setUser(userData);

    // Store token and user data in localStorage for persistence
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signOut = () => {
    setToken(null);
    setUser(null);

    // Remove token and user data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push(`/auth/login`);
    // router.replace("/signin");
  };

  // Restore token and user data from localStorage on initial load
  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
