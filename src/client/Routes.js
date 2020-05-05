import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UserListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        ...HomePage,
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {
        path: "/users",
        ...UsersListPage,
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
