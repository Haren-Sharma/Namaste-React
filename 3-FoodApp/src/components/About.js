import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div style={{ padding: 30 }}>
      <h1>About page</h1>
      <p style={{ marginTop: 20 }}>This is our About Page</p>
      {/* <User name="Haren (function)" twid="@sharma33"/> */}
      <UserClass name="Haren (class-based)" twid="@sharma33"/>
    </div>
  );
};

export default About;
