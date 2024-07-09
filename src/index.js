import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Documents from "./routes/Documents";
import People from "./routes/People";
import Navbar from "./components/Navbar";
import {loader as monitorLoader} from "./components/Monitor";
import "./index.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: monitorLoader
      },
      {
        path: "documents",
        element: <Documents />,
      },
      {
        path: "people",
        element: <People />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);