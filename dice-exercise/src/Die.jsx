import React, { Component } from 'react';
import './Die.css'

class Die extends Component{
    render(props){
        return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && "rolling"}`}></i>;    }
}

export default Die;