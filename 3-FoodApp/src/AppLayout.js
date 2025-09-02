import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import UserContextProvider from "./context/UserContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store/store";

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
    <Provider store={store}>
      <UserContextProvider>
        <Header setDarkMode={setDarkMode} />
        <Outlet />
        {/*
      This Outlet component is provided by react-router
      With the help of this , the children routes created in the route configuration(createBrowserRouter)
      will get replaced with Outlet, depending upon the path given to the children.
      This won't affect our Header it will remian intact in it's position
      */}
      </UserContextProvider>
    </Provider>
  );
};
export default AppLayout;
