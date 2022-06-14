import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./pages/useRoutes";
import { useAuth } from "../hooks/auth.hook";
import { LoaderComp } from "./Loader";
import { AuthContext } from "./AuthContextProvider/AuthContext";
import { ConfigProvider } from "antd";



function App() {
  const { token, login, logout, userId, userRole, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated, userRole);

  useEffect(() => {
    const init = async () => {
      const M = await import("materialize-css");
      window.M = M;
    };
    init();
  }, []);

  if (!ready) {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "10%",
        }}
      >
        <LoaderComp />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
        userRole,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
}

export default App;
