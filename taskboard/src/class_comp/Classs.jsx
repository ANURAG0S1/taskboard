import React, { Component } from "react";

export class Classs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    console.log("class component buttton clicked " + this.state.count);
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>click me</button>
      </div>
    );
  }
}

export default Classs;
