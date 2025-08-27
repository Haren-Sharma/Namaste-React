import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  /*
    LifeCycle Of About Component
    
    Mounting Cycle
      -Parent Constructor Called
      -Parent Render Called (with dummy data)
      -Child Constructor Called
      -Child Render Called (with dummy data)
      -Child Did Mount
      -Parent Did Mount
      -Api Call
      -this.setState(api data)

    Updating Cycle
      -Parent Render Called(api data)
      -Child Render Called(api data)
      -Child Did Update
      -Parent Did Update

    Unmounting Cycle(When you navigate to a different component)
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
    console.log("Parent Did Mount");
    const raw = await fetch("https://api.github.com/users/Haren-Sharma");
    const data = await raw.json();
    this.setState({
      userInfo: data,
    });
  }

  componentDidUpdate() {
    console.log("Parent Did Update");
  }

  componentWillUnmount() {
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
