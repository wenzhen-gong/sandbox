import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CatchGame from "./components/game/CatchGame";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "newgame",
        element: <CatchGame />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
