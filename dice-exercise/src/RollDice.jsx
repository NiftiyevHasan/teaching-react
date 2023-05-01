import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };
    constructor(props) {
        super(props)
        this.state = { dice1: "one", dice2: "one" , rolling: false};
        this.roll = this.roll.bind(this);
    }


    roll() {
        let rand1 = Math.floor(Math.random() * this.props.sides.length);
        let rand2 = Math.floor(Math.random() * this.props.sides.length);
        this.setState({ dice1: this.props.sides[rand1], dice2: this.props.sides[rand2], rolling: true })
        setTimeout(()=>{
            this.setState({rolling: false});
        },500)
    }

    render() {
        return <div className='RollDice'>
            <div className='RollDice-container'>
                <Die face={this.state.dice1} rolling={this.state.rolling} />
                <Die face={this.state.dice2} rolling={this.state.rolling} />
            </div>

            <button onClick={this.roll} disabled={this.state.rolling}>
                {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
        </div>
    }
}

export default RollDice;