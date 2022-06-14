import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";
import { useAuth } from "../../hooks/auth.hook";
import { AuthContext } from "./AuthContext";

export const AuthContextProvider: FC = ({ children }) => {
  const { login, logout, currentUser, ready } = useAuth();
  const router = useRouter();
  const isAuthenticated = Boolean(currentUser);

  useEffect(() => {
    if (ready) {
      if (!isAuthenticated) {
        router.replace("/");
      } else if (
        currentUser.role === "user" &&
        !router.pathname.startsWith("/posts")
      ) {
        router.replace("/posts");
      } else if (
        currentUser.role === "admin" &&
        !router.pathname.startsWith("/admin")
      ) {
        router.replace("/admin");
      }
    }
  }, [isAuthenticated, ready, currentUser?.role]);

  return (
    <>
      <AuthContext.Provider
        value={{
          login,
          logout,
          currentUser,
        }}
      >
        {ready && children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => useContext(AuthContext);
