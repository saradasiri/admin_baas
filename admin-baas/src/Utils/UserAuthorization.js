import React, { useState, createContext } from "react";

const UserRoleContext = createContext(null);
const UserRoleContextConsumer = UserRoleContext.Consumer;

const UserRoleContextProvider = (props) => {
  const [userDetails, setUserDetails] = useState({
    isLoggedIn: false,
  });

  // Update the details context
  const updateContext = (data) => {
    const { isLoggedIn } = data;

    setUserDetails({
      isLoggedIn,
    });
  };

  return (
    <UserRoleContext.Provider
      value={{ ...userDetails, updateContext: updateContext }}
    >
      {props.children}
    </UserRoleContext.Provider>
  );
};

export { UserRoleContext, UserRoleContextProvider, UserRoleContextConsumer };
