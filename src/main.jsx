import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import TimeLinePage from "./pages/TimeLinePage";
import StatusPage from "./pages/StatusPage";
import ErrorPage from "./pages/ErrorPage";
import FriendDetails from "./components/friendDetails/FriendDetails";
import FriendProvider from "./context/FriendProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/timeLine",
        element: <TimeLinePage></TimeLinePage>,
      },
      {
        path: "/status",
        element: <StatusPage></StatusPage>,
      },
      {
        path: "/details/:id",
        element: <FriendDetails></FriendDetails>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
);
