import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      height: "",
      width: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.addBox(newBox);

    this.setState({
      color: "",
      height: "",
      width: "",
    });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="color">Color</label>
        <input
          type="text"
          name="color"
          id="color"
          value={this.state.color}
          onChange={this.handleChange}
          placeholder="e.g pink"
        ></input>
        <label htmlFor="height">Height</label>
        <input
          type="text"
          name="height"
          id="height"
          value={this.state.height}
          onChange={this.handleChange}
          placeholder="e.g 200px"
        ></input>
        <label htmlFor="width">Width</label>
        <input
          type="text"
          name="width"
          id="width"
          value={this.state.width}
          onChange={this.handleChange}
          placeholder="e.g 150px"
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}

export default NewBoxForm;
