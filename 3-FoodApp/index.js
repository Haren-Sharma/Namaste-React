import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./src/components/About";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import ErrorComponent from "./src/components/ErrorComponent";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = new createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // children routes of AppLayout Component
      {
        index: true, //meaning this will be our default child route
        element: <Body />, // these elements will get replaced with Outlet defined in AppLayout
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
