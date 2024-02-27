import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Portfolio from "./routes/portfolio";
import Blog from "./routes/blog";
import BlogPost from "./routes/blog/blog-post";

const router = createBrowserRouter(
  [
    { path: "/", element: <Portfolio /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:id", element: <BlogPost /> },
  ],
  { basename: "/portfolio" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
