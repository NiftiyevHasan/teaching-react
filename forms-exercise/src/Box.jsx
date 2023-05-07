import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove() {
    this.props.removeBox(this.props);
  }
  render() {
    const { height, width, color } = this.props;
    const boxStyle = {
      height: height,
      width: width,
      backgroundColor: color,
    };
    return (
      <div style={boxStyle} onClick={this.handleRemove}>
        {" "}
        Click to Remove{" "}
      </div>
    );
  }
}

export default Box;
