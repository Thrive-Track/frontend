import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Pages/SignUp.jsx";
import Loginpage from "./Pages/Loginpage.jsx";
import ForgotPassword from "./Pages/ForgotPasswordPage.jsx.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/get started",
    element: <Signup />,
  },
  {
    path: "/sign in",
    element: <Loginpage />,
  },
  {
    path: "/sign up",
    element: <Signup />,
  },
  {
    path: "/forgot password",
    element: <ForgotPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
