import React, { useCallback, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
// import LogoutComponent from '../Logout.Comp';
// import SideNavAdmin from '../SideNavAdmin';
const LogoutComponent = React.lazy(() => import("../Logout.Comp"));
const SideNavAdmin = React.lazy(() => import("../SideNavAdmin"));

export const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const { request, error, clearError } = useHttp();
  const message = useMessage();

  const getUsers = useCallback(async () => {
    try {
      const fetchedUsers = await request(
        "/api/users/getusers",
        "GET",
        null,
        {}
      );
      setUsers(fetchedUsers.data);
    } catch (error) {}
  }, [setUsers, request]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    message(error, "red");
    clearError();
  }, [error, message, clearError]);

  const handleEditUser = async (user) => {
    try {
      const index = users.findIndex(
        (stateUserData) => stateUserData._id === user._id
      );
      const editedUsers = [
        ...users.slice(0, index),
        user,
        ...users.slice(index + 1),
      ];
      setUsers(editedUsers);
      const response = await request(
        `/api/users/edit/${user._id}`,
        "PATCH",
        user
      );

      message(response.data.message, "green");
    } catch (error) {}
  };

  const passwordReset = async (user) => {
    try {
      const response = await request(
        `/api/users/passwordreset/${user._id}`,
        "PATCH",
        {}
      );
      message(response.data.message, "green");
    } catch (error) {}
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        handleEditUser,
        passwordReset,
      }}
    >
      <React.Suspense
        fallback={
          <button className="btn waves-effect waves-light">
            <span>SideNav</span>
          </button>
        }
      >
        <SideNavAdmin />
      </React.Suspense>

      <React.Suspense
        fallback={
          <button className="btn waves-effect waves-light">
            <span>Сохранить EXCEL</span>
          </button>
        }
      >
        <div className="fixed-action-btn col">
          <LogoutComponent />
        </div>
      </React.Suspense>
    </UsersContext.Provider>
  );
};

export default AdminPage;
