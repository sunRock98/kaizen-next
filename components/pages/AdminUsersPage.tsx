import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContext";
import { UsersContext } from "../../context/UsersContext";
import { LoaderComp } from "../Loader";
import { UserCardFromAdminPage } from "../UserCardFromAdminPage";

export const AdminUsersPage = () => {
  const { users, handleEditUser, passwordReset } = useContext(UsersContext);
  const { loading } = useContext(AuthContext);
  const [shownUsers, setShownUsers] = useState(users);
  const [inputVal, setInputVal] = useState("");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(inputVal)
    );
    setShownUsers(filteredUsers);
  }, [inputVal, users]);

  useEffect(() => {
    if (inputVal) {
      setShownUsers(
        users.filter((user) => user.name.toLowerCase().includes(inputVal))
      );
    } else {
      setShownUsers(users);
    }
  }, [users, inputVal]);

  return (
    <div className="usersBlock">
      <div className="container">
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">account_circle</i>
            <input
              value={inputVal}
              onChange={inputChangeHandler}
              id="icon_prefix"
              type="text"
              className="userSearchInput"
            />
            <label htmlFor="icon_prefix">User Name</label>
          </div>
        </div>
      </div>
      <div className="table">
        {loading ? (
          <LoaderComp />
        ) : (
          <table className="usersBlockTable">
            <thead>
              <tr className="usersTableHeader">
                <th className="headerUserEdit" />
                <th className="headerUserName">Имя пользователя</th>
                <th className="headerUserRole">Роль</th>
                <th className="headerUserEmail">Email</th>
              </tr>
            </thead>

            <tbody className="usersTable">
              {shownUsers.length !== 0 ? (
                shownUsers.map((user) => (
                  <UserCardFromAdminPage
                    handleEditUser={handleEditUser}
                    key={user._id}
                    user={user}
                    passwordReset={passwordReset}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={4} style={{ textAlign: "center" }}>
                    Пользователей с таким именем нет
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
