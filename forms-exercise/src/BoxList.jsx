import React, { Component } from "react";
import Box from "./Box.jsx";
import NewBoxForm from "./NewBoxForm.jsx";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(newBox) {
    this.setState((st) => ({ boxes: [...st.boxes, newBox] }));
  }
  removeBox(newBox) {
    this.setState((st) => ({
      boxes: st.boxes.filter((box) => box.id !== newBox.id),
    }));
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map((box, index) => (
          <Box key={box.id} id={box.id} removeBox={this.removeBox} {...box} />
        ))}
      </div>
    );
  }
}

export default BoxList;
