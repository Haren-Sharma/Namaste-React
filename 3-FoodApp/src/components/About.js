import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  /*
    LifeCycle Of About Component
    
    Mounting Cycle
      Render Phase
        -Parent Constructor Called
        -Parent Render Called (with dummy data)
        -Child Constructor Called
        -Child Render Called (with dummy data)
      
      Commit Phase
        -Child Did Mount
        -Parent Did Mount
        -Api Call
        -this.setState(api data)

    Updating Cycle
      Render Phase
        - Parent Render Called(api data)
        - Child Render Called(api data)
      
      Commit Phase
        - Child Did Update
        - Parent Did Update

    Unmounting Cycle(When you navigate to a previous or a different page)
      -Parent Unmounted
      -Child Unmounted


  */
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Parent Constructor Called");
  }

  async componentDidMount() {
    /*
      It is equivalent to useEffect(()=>{},[]);
      This is basically used for making API Calls
    */
    console.log("Parent Did Mount");
    const raw = await fetch("https://api.github.com/users/Haren-Sharma");
    const data = await raw.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    /*
      It is equivalent to when a depency changes inside useEffect
    */
    console.log("Parent Did Update");
  }

  componentWillUnmount() {
    /*
      It is equivalent to return function cleanup in useEffect
      It is called when the component unmounts
    */
    console.log("Parent Unmounted");
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div style={{ padding: 30 }}>
        <h1>About page</h1>
        <p style={{ marginTop: 20 }}>This is our About Page</p>
        <UserClass
          avatar_url={this.state.userInfo?.avatar_url}
          name={this.state.userInfo?.name}
          location={this.state.userInfo?.location}
        />
      </div>
    );
  }
}

export default About;
