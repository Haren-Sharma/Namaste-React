import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  /*
    Header
    -Logo
    -NavItems
        -Home
        -About
        -Cart

    Body
    -Search
    -Restaurant Container
        -Restaurant Cards
    */
  return (
    <div>
      <Header setDarkMode={setDarkMode}/>
      <div>
      <Outlet />
      </div>
      {/*
      This Outlet component is provided by react-router
      With the help of this , the children routes created in the route configuration(createBrowserRouter)
      will get replaced with Outlet, depending upon the path given to the children.
      This won't affect our Header it will remian intact in it's position
      */}
    </div>
  );
};
export default AppLayout;
