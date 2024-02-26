import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./Pages/SignUp.jsx";
import Loginpage from "./Pages/Loginpage.jsx";
import ForgotPassword from "./Pages/forgot password page.jsx";
import PassRecover from "./Pages/Password Recovery.jsx";
import CreatePassword from "./Pages/Create New Password.jsx";
import AboutUs from "./components/about_us/AboutUs.jsx";
import Dashboard from "./components/dashboard/mydashboard/Dashboard.jsx";

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
  {
    path: "/password recovery",
    element: <PassRecover />,
  },
  {
    path: "/create password",
    element: <CreatePassword />,
  },
  {
    path: "/about us",
    element: <AboutUs />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
