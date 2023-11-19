import React from "react";
import Login from "./Page/Login/Login";
import Admin from "./Page/Admin/Admin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Page/Error/ErrorPage";

const App = () => {
  const PrivateRoute = ({ path, element }) => {
    const authToken = localStorage.getItem("auth_token");
    if (!authToken || (authToken.length === 0 && path !== "/login")) {
      return <Login />;
    }

    return element;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute path="/" element={<Admin />} />,
      errorElement: <PrivateRoute element={<ErrorPage />} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
