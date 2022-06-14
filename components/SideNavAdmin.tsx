import React, { useContext, useEffect, useState } from "react";
import { Button, Icon, SideNav, SideNavItem } from "react-materialize";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { AuthContext } from "./AuthContextProvider/AuthContext";
import { UsersContext } from "../context/UsersContext";
import { AdminAllPostsPage } from "./pages/AdminAllPostsPage";
import { AdminLastVotePage } from "./pages/AdminLastVotePage";
import { AdminUsersPage } from "./pages/AdminUsersPage";

export const SideNavAdmin = () => {
  const [userData, setUserData] = useState(["", ""]);

  let match = useRouteMatch();
  const { userId } = useContext(AuthContext);
  const { users } = useContext(UsersContext);

  useEffect(() => {
    const user = users.find((user) => user._id === userId);
    const name = user ? user.name : "";
    const email = user ? user.email : "";
    setUserData([name, email]);
  }, [users]);

  return (
    <div>
      <div style={{ position: "sticky", top: "10px" }}>
        <style>{`#root > div > div {z-index: 99999 !important;}`}</style>
        <SideNav
          id="SideNav-10"
          options={{
            draggable: true,
          }}
          trigger={<MyButton />}
        >
          <SideNavItem
            user={{
              background: "https://placeimg.com/640/480/tech",
              email: userData[1],
              image: "../../public/images/yuna.jpg",
              name: userData[0],
            }}
            userView
          />
          <li>
            <Link to={match.url + "/allproposals"}>
              <Icon>cloud</Icon>Кайдзен Предложения
            </Link>
          </li>
          <li>
            <Link to={match.url + "/lastvoting"}>
              <Icon>cloud</Icon>Итоговое Голосование
            </Link>
          </li>
          <li>
            <Link to={match.url + "/users"}>
              <Icon>cloud</Icon>Пользователи
            </Link>
          </li>

          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
          <SideNavItem waves>Third Link With Waves</SideNavItem>
        </SideNav>
      </div>
      <Switch>
        <Route path={match.path + "/allproposals"}>
          <AdminAllPostsPage />
        </Route>

        <Route path={match.path + "/users"}>
          <AdminUsersPage />
        </Route>

        <Route path={match.path + "/lastvoting"}>
          <AdminLastVotePage />
        </Route>
      </Switch>
    </div>
  );
};

const MyButton = React.forwardRef((props, ref) => (
  <Button {...props}>
    SIDE NAV<Icon right>menu</Icon>
  </Button>
));

export default SideNavAdmin;
