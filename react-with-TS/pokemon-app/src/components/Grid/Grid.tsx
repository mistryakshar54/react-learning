import React,{ Suspense } from 'react';
import { AppContext } from "../../Context/AppContext";
import { useContext } from "react";
import GridItems from './GridItems/GridItems';
import { useEffect } from 'react';
import {fetchPokemonData, loadInitialData} from '../../Context/Actions';
const Grid = () => {
    const { dispatch } = useContext(AppContext);
    useEffect(() => {
        const fetchData = async() =>{
          const pokemons = await fetchPokemonData('all');
          dispatch(loadInitialData(pokemons) );        
        }
        fetchData();
    },[]);
    return (<GridItems />);

}

export default Grid;