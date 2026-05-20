import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Home from "./components/Home";
import Session from "./components/track-session/Session";
import Stats from "./components/stats/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "session/:sessionId", element: <Session/> },
      { path: "stats", element: <Stats /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
