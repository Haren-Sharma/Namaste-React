import React, { useState } from "react";

const User = ({ name, twid }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <h3>{twid}</h3>
      <div>Count : {count}</div>
      <div>Count : {count1}</div>
    </div>
  );
};

export default User;
