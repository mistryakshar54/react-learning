import React,{ Suspense } from 'react';
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";
import GridItems from './GridItems/GridItems';
import { useEffect } from 'react';
import {fetchPokemonData} from '../../Context/Actions';
const Grid = () => {
    const { appState, dispatch } = useContext(AppContext);
    const { pokemons } = appState;
    useEffect(() => {
        const fetchData = async() =>{
            const pokemons = await fetchPokemonData('all');
            
        }
        fetchData();
    },[]);
    return (
      <Suspense fallback={() => "Loading!!"}>
        <GridItems pokemons={pokemons} />
      </Suspense>
    );

}

export default Grid;