import React ,{Component} from 'react';
import './PokeCard.css';
import './PokeDex.css';



const POKE_API ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let convert = (number) => (number<=999 ? `00${number}`.slice(-3): number )


class PokeCard extends Component{
    render(){
        let imgSrc= `${POKE_API}${convert(this.props.id)}.png`
        return(
            <div className="PokeCard"> 
                <h1 className="PokeCardTitle">{this.props.name}</h1>
                <div className="PokeCardImage">
                    <img src={imgSrc} alt={this.props.name}/>
                
                </div>
                <div className=" PokeCardData">Type : {this.props.type}</div>
                <div className="PokeCardData">Exp : {this.props.exp}</div>

            </div>
        )
    }
}

export default PokeCard;