import React, { Component } from 'react';
import PokeCard from './PokeCard';
import './PokeDex.css';

class PokeDex extends Component{
    
    render(){
        let title
        if(this.props.isWinner){
            title = <h1 className="PokeDexWinner">Winning Hand </h1>
        }
        else{
            title = <h1 className="PokeDexLoser">Losing Hand </h1>
        }
        return(
            <div className="PokeDex">
                {title}
                <h4> 
                    Total experience : {this.props.exp}
                </h4>
           
                <div className="PokedexCards">
                    {this.props.pokemon.map( (p)=>(
                        <PokeCard
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))
                }
                </div>
               
            </div>
        )
    }
}

export default PokeDex;