import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Main from "../pages/Main";
import PracticeOne from "../pages/PracticeOne";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/practiceOne",
        element: <PracticeOne />,
      },
    ],
  },
]);
