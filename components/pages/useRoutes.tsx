import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import AdminPage from "./AdminPage";
import { AuthPage } from "./AuthPage";
import UserPage from "./UserPage";
import VoteMemberPage from "./VoteMemberPage";

export const useRoutes = (isAuthenticated, userType) => {
  if (isAuthenticated) {
    if (userType === "user") {
      return (
        <Switch>
          <Route path="/user" exact>
            <UserPage />
          </Route>

          <Redirect to="/user" />
        </Switch>
      );
    } else if (userType === "admin") {
      return (
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Redirect to="/admin/allproposals" />
        </Switch>
      );
    } else if (userType === "committeeMember") {
      return (
        <Switch>
          <Route path="/voting-page">
            <VoteMemberPage />
          </Route>
          <Redirect to="/voting-page" />
        </Switch>
      );
    }
  }

  return (
    <Switch>
      <Route path="/">
        <AuthPage />
      </Route>
    </Switch>
  );
};
