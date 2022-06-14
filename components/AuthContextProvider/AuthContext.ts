import { createContext } from "react";
import { UserType } from "../../models/User";

function noop() {}

interface AuthI {
  currentUser: UserType;
  login: (user: UserType) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthI>({
  currentUser: null,
  login: noop,
  logout: noop,
});
