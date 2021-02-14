import React, { Component, useRef } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namee: "",
    };

    this.inputref = React.createRef();
  }

  clickHandler = () => {
    this.setState({
      namee: this.state.namee + this.inputref.current.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} />
        <button onClick={this.clickHandler}> submit the text</button>
        <h1>{this.state.namee}</h1>
      </div>
    );
  }
}

export default Ref;
