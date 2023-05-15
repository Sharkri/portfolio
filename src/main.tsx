import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Portfolio from "./routes/portfolio";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Portfolio />,
    },
  ],
  { basename: "/portfolio" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
