import React from "react";

class UserClass extends React.Component {
  constructor(props) {
      /*
      The below line ensures that this.props is properly initialized
      With the help of this we can access this.props in our constructor as well
      */
     super(props);
     console.log(this.props.name+": Constructor Called");
    this.state = {
      //this will create the state variables for this component
      count: 10,
      count1: 10,
    };
  }
  componentDidMount() {
    console.log(this.props.name+": Mounted");
  }
  render() {
    console.log(this.props.name+": Render Called");
    const { name, twid } = this.props;
    const { count, count1 } = this.state;

    const increaseTheCount = () => {
      this.setState({
        /*
            NEVER UPDATE STATE VARIABLES DIRECTLY    
            With the hepl of this function we can update our state variables
            It will update only those variables mentioned , will not touch other
            Here below as we have updated only the value of count variable
            it won't hamper the value for count1 variable
            */
        count: this.state.count + 1,
      });
    };

    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h3>{twid}</h3>
        <div>Count : {count}</div>
        <button onClick={increaseTheCount}>Increase the Count</button>
        <div>Count : {count1}</div>
      </div>
    );
  }
}

export default UserClass;
