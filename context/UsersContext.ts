import { createContext } from "react";

function noop() {}

export const UsersContext = createContext({
  users: {},
  handleEditUser: noop,
  passwordReset: noop,
});
