import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({
  userName: "Default User",
  setUser: () => null,
});

const UserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser("Haren Sudhir Sharma");
  }, []);

  return (
    <UserContext.Provider
      value={{ userName: loggedInUser, setUser: setLoggedInUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const getUser = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
