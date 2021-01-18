import React, { Component } from "react";

export class Classcontent extends Component {
  // super()
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  clickHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        this is a class component
        <h1> count -- - -- {this.state.count}</h1>
        <button onClick={() => this.clickHandler()}>
          {" "}
          add one to the counter
        </button>
      </div>
    );
  }
}

export default Classcontent;
