import React, { Suspense, useContext } from 'react';
import { AppContext } from '../../../Context/AppContext';
import { Pokemon } from '../../../Context/AppTypes';

const GridItems = () => {
    const { appState } = useContext(AppContext);
    const renderPokemon = () => {
        const { pokemons } = appState;
        return pokemons.map( (pokemon : Pokemon) => {
            return(
            <h1 key={pokemon.name}>{pokemon.name}</h1>
            );
        });
    }
    return(<Suspense fallback={ "Loading!!!" } > { renderPokemon() } </Suspense>);
}

export default GridItems;
