import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // console.log("constructore")
  }

  componentDidMount(){
    // console.log("Mount")
  }

  render() {
    // console.log("render")
    return (
      <>
        <h1>Chethan</h1>
        <h1>name: {this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: 1
            });
          }}
        >
          change
        </button>
      </>
    );
  }
}

export default Profile;
