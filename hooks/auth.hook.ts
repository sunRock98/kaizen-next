import { useCallback, useState, useEffect } from "react";
import { UserType } from "../models/User";
import { getCookie, deleteCookie } from "../helpers/cookieManage";
const storageName = "userData";

export const useAuth = () => {
  const [currentUser, setUser] = useState<UserType | undefined>(undefined);
  const [ready, setReady] = useState(false);

  const updateAppState = useCallback((user) => {
    setUser(user);
  }, []);

  const updateLocalStorage = useCallback((obj: UserType) => {
    localStorage.setItem(storageName, JSON.stringify(obj));
  }, []);

  const login = useCallback(
    (user: UserType) => {
      updateAppState(user);
      updateLocalStorage(user);
    },
    [updateAppState, updateLocalStorage]
  );

  const logout = useCallback(() => {
    console.log("logout fn");

    deleteCookie("auth");
    updateAppState(null);
    localStorage.removeItem(storageName);
  }, [deleteCookie, updateAppState, getCookie]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName)) as UserType;

    if (data && data.role) {
      updateAppState(data);
    }
    setReady(true);
  }, [updateAppState]);

  return { login, logout, currentUser, ready };
};
