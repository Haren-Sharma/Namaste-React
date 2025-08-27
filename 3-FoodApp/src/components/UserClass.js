import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    /*
      The below line ensures that this.props is properly initialized
      With the help of this we can access this.props in our constructor as well
      */
    super(props);
    console.log("Child Constructor Called");
  }
  componentDidMount() {
    console.log("Child Did Mount");
  }
  componentDidUpdate(){
    console.log("Child Did Update")
}
componentWillUnmount(){
    
    console.log("Child Unmounted")
  }
  render() {
    console.log("Child Render Called");
    const { name, location,avatar_url } = this.props;

    return (
      <div className="user-card">
        <img src={avatar_url} className="avatar-img"/>
        <h2>{name}</h2>
        <h3>{location}</h3>
      </div>
    );
  }
}

export default UserClass;
