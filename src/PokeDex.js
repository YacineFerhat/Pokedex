import React, { Component } from 'react';
import PokeCard from './PokeCard';
import './PokeDex.css';

class PokeDex extends Component{
    static defaultProps ={
        pokemon : [
            {id : 4, name : 'Charmander' , type :'Fire', base_experience : '62'},
            {id : 7, name : 'Squirtle' , type :'Water', base_experience : '63'},
            {id : 11, name : 'Metapod' , type :'Bug', base_experience : '72'},
            {id : 12, name : 'Butterfree' , type :'Flying', base_experience : '178'},
            {id : 25, name : 'Pikachu' , type :'Electric', base_experience : '112'},
            {id : 39, name : 'Jigglypuff' , type :'Normal', base_experience : '95'},
            {id : 94, name : 'Gengar' , type :'Poison', base_experience : '225'},
            {id : 133, name : 'Eevee' , type :'Normal', base_experience : '65'}
            ]
        }
    render(){
        return(
            <div className="PokeDex">
                <h1>
                    PokeDex
                </h1>
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