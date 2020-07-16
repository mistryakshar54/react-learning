import React from 'react';
import { Pokemon } from '../../../Context/AppTypes';

type GridItemProps = {
    pokemons : Pokemon[]
}

const GridItems = ( props : GridItemProps ) => {
    const renderPokemon = () => {
        const { pokemons } = props;
        return pokemons.map( (pokemon : Pokemon) => {
            return(
            <h1 key={pokemon.name}>{pokemon.name}</h1>
            );
        });
    }
    return(<> { renderPokemon() } </>);
}

export default GridItems;
