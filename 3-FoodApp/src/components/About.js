import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  /*
    Mounting Cycle:
    contructor >> render >>                         (Render Phase) 
    DOM Manipulation >> ComponentDidMount           (Commit Phase)
  */
  /*
    LifeCycle Of About Component:

    Render Phase:
      Parent Constructor Called
      Parent Render Called
        First Child Constructor Called
        First Child Render Called
        Second Child Constructor Called
        Second Child Render Called
    
    Commit Phase:
        First Child Mounted
        Second Child Mounted 
      Parent Mounted

  */
  constructor(props) {
    super(props);
    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    /*
      It is equivalent to useEffect(()=>{},[]);
      This is basically used for making API Calls
    */
    console.log("Parent Mounted");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div style={{ padding: 30 }}>
        <h1>About page</h1>
        <p style={{ marginTop: 20 }}>This is our About Page</p>
        <UserClass name="First Child" twid="@first-child" />
        <UserClass name="Second Child" twid="@second-child" />
      </div>
    );
  }
}

export default About;
