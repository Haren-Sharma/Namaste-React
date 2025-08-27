import React from "react";

const User = ({ name, twid }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>{twid}</h3>
    </div>
  );
};

export default User;
