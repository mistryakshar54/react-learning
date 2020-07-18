import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { Pokemon } from '../../Context/AppTypes';

const GridItems = () => {
    const { appState } = useContext(AppContext);
    const { pokemons, loading } = appState;
    const renderPokemon = () => {
        return pokemons.map( (pokemon : Pokemon) => {
            return(
            <h1 key={pokemon.name}>{pokemon.name}</h1>
            );
        });
    }
    return(<> { loading === true ? "Loading" : renderPokemon()}</>);
}

export default GridItems;
