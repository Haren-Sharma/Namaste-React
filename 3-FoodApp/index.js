import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./src/components/About";

const appRouter = new createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
