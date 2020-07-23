import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { Pokemon } from '../../Context/AppTypes';

const GridItems = () => {
    const { appState } = useContext(AppContext);
    const { pokemons, loading,searchKeyword } = appState;
    const renderPokemon = () => {
        // let pokeList : Pokemon[];
        // if(searchKeyword != ""){
        //     pokeList = pokemons.filter( pokemon => searchKeyword !== "" ? pokemon.name === searchKeyword ? true : false : true );
        // }
        return pokemons.filter((pokemon) =>
          searchKeyword !== ""
            ? pokemon.name === searchKeyword
              ? true
              : false
            : true
        ).map((pokemon: Pokemon) => {
          return <h1 key={pokemon.name}>{pokemon.name}</h1>;
        });
    }
    return(<> { loading === true ? "Loading" : renderPokemon()}</>);
}

export default GridItems;
