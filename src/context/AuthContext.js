"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import api from "@/services/api.service";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(Cookies.get("jwt") || null);
  const [userInfo, setUserInfo] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const saveToken = (jwt) => {
    setToken(jwt);
    Cookies.set("jwt", jwt, { expires: 7 });
    console.log("saved token");
  };

  const removeToken = () => {
    setToken(null);
    setUserInfo(null);
    Cookies.remove("jwt");
  };

  const getUserInfo = useCallback(async () => {
    try {
      if (token) {
        const response = await api.get(`/User/${token}/jwt`);
        setUserInfo(response.data);
      } else {
        setUserInfo(null);
      }
    } catch (error) {
      console.error("Failed to fetch user info", error);
    }
  }, [token]);

  useEffect(() => {
    console.log('testtttt')
    function handleCookieChange() {
      const jwt = Cookies.get("jwt") || null;
      setToken(jwt);
      if (jwt) {
        getUserInfo();
      } else {
        setUserInfo(null);
      }
      console.log("test token");
    }

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleCookieChange);
      handleCookieChange(); // Check for token at mount
      setIsInitialized(true);

      // Cleanup
      return () => {
        window.removeEventListener("storage", handleCookieChange);
      };
    }
  }, [getUserInfo]);

  useEffect(() => {
    console.log("user info");
    console.log(userInfo)
  }, [userInfo]);

  // Don't render the provider until after the first getUserInfo effect has run
  if (!isInitialized) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ token, saveToken, removeToken, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
}
