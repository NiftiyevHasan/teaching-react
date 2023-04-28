import React,{Component} from "react"
import "./pokecard.css"

class Pokecard extends Component{
	render() {
		const {name,id,type,base_experience: exp} = this.props.card;
		const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3,0)}.png`;

		return (<div className="pokecard"> 
				<h1 className="pokecard-title">{name}</h1>
				<div className="pokecard-img">
					<img src={img} />

				</div>
				<div className="pokecard-data">{`Type: ${type}`}</div>
				<div className="pokecard-data">{`EXP: ${exp}`}</div>
				</div>)
	}
}

export default Pokecard;