import React from "react";
import Login from "./Page/Login/Login";
import Admin from "./Page/Admin/Admin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Page/Error/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin />,
      errorElement: <ErrorPage />,
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
