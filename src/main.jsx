import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./Components/Home";
import Session from "./Components/track-session/Session";
import Stats from "./Components/stats/Stats";
import ManageSessions from "./Components/sessions/ManageSessions";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "session/:sessionId", element: <Session/> },
      { path: "stats", element: <Stats /> },
      { path: "sessions", element: <ManageSessions /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
