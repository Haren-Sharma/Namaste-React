import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    /*
      The below line ensures that this.props is properly initialized
      With the help of this we can access this.props in our constructor as well
      */
    super(props);
    this.state = {
      //this will create the state variables for this component
      count: 110,
      count1: 10,
    };
  }
  render() {
    const { name, twid } = this.props;
    const { count, count1 } = this.state;

    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{twid}</h3>
        <div>Count : {count}</div>
        <div>Count : {count1}</div>
      </div>
    );
  }
}

export default UserClass;
