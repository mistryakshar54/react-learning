import React, {useContext, useEffect} from 'react';
import { fetchPokemonData, loadInitialData } from '../../Context/Actions';
import { AppContext } from '../../Context/AppContext';
import GridItems from '../Grid/GridItems';
import SearchBar from '../Searchbar/Searchbar';
const Layout = () => {
    const { dispatch } = useContext(AppContext);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         //Dispatch Loading
    //         const pokemons = await fetchPokemonData('all');
    //         dispatch(loadInitialData(pokemons));
    //         //Dispatch Loading complete
    //     }
    //     fetchData();
    // }, [dispatch]);
    return(
    <div>
        <SearchBar/>
        <GridItems />
    </div>)
}

export default Layout;