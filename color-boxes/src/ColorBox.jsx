import React, { Component } from 'react';
import {choice} from './helper.js'
import './ColorBox.css'

class ColorBox extends Component{
    constructor(props){
        super(props)
        this.state ={
            color: choice(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newColor;
        do{
            newColor = choice(this.props.colors);
            this.setState({color:  newColor});
        }while(this.state.color===newColor)

    }
    handleClick(e){
        this.pickColor()
    }

    render(){
        return <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
        </div>
    }
}

export default ColorBox;