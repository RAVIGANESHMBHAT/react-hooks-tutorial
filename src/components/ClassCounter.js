import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prev) => {
      this.setState({ count: prev.count + 1 });
    });
  };
  render() {
    return (
      <>
        <div>Count = {this.state.count}</div>
        <button onClick={this.incrementCount}>Increment Count</button>
      </>
    );
  }
}

export default ClassCounter;
