import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorTable.css'

class ColorTable extends Component {
    static defaultProps = {
        numBoxes: 18,
        colors: ["pink", "LightPink", "HotPink", "PaleVioletRed", "DeepPink", "violet", "MediumVioletRed", "Fuchsia", "Purple" , "Tomato"]
    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(() => <ColorBox colors={this.props.colors}/>);
        return <div className="ColorTable">
            {boxes}
        </div>
    }
}

export default ColorTable;