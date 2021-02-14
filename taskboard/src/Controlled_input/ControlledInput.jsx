import React, { Component } from "react";

export class ControlledInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  clickHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  ClickAlert = () => {
    alert(`${this.state.username}`);
  };

  render() {
    return (
      <div>
        <label htmlFor="name">
          ANURAG
          <input
            value={this.state.username}
            onChange={this.clickHandler}
            type="text"
          />
        </label>
        <button onClick={this.ClickAlert}>alert the written content</button>
      </div>
    );
  }
}

export default ControlledInput;
