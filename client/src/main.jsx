import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import Project from "./pages/Project";
import fetchApi from "./services/fetchApi";

const projectUrl = "/api/projects";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Project/:id",
        element: <Project />,
        loader: ({ params }) => fetchApi(`${projectUrl}/${params.id}`),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
