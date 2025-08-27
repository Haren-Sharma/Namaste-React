import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //The above line ensures that this.props is properly initialized
    //With the help of this we can access this.props in our constructor as well
    console.log("🚀 ~ UserClass ~ constructor ~ props:", props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>{this.props.name}</h2>
        <h3>{this.props.twid}</h3>
      </div>
    );
  }
}

export default UserClass;
