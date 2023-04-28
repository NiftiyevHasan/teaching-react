import React,{Component} from "react"
import Pokecard from "./pokecard"
import "./pokedex.css"

class Pokedex extends Component{
	render(){
		const {isWinner, exp, hand} = this.props;
		return (
			<div className="pokedex">
				<h1 className={isWinner ? "pokedex-winner" : "pokedex-loser"}>
				{isWinner ? "Winning " : "Losing "} hand</h1>
				<h4>Total Experience : {exp}</h4>
				<div className="pokedex-card">
					{hand.map(card => (
					<Pokecard card={card} />
				))}
				</div>
				
			</div>
		);
	}
}

export default Pokedex;
