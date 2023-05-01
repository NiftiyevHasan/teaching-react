import React, { Component } from 'react';
import Coin from './Coin'
import {choice} from './helper'

class CoinContainer extends Component {
    static defaultProps = { 
        coins: [{side: "head", imgSrc: "https://tinyurl.com/react-coin-heads-jpg"}, 
                {side: "tail", imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg"}]
    };

    constructor(props){
        super(props)
        this.state = {currCoin: null , flips: 0, heads: 0, tails: 0}
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(oldState => {
        return {currCoin: newCoin,
                flips: oldState.flips +1,
                heads: oldState.heads + (newCoin.side==="head" ? 1 : 0),
                tails: oldState.tails + (newCoin.side==="tail" ? 1: 0) };  
    })
}

    handleClick(e){
        this.flipCoin();
    }
    render() {
        return <div className='CoinContainer'>
            <h1>Let's Flip a coin !</h1>
            {this.state.currCoin && <Coin data={this.state.currCoin}/>}
            <button onClick={this.handleClick}>Flip Me</button>
            <p> Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
        </div>
    }
}

export default CoinContainer;

