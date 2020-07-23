import React , { useContext, useState } from "react";
import { addPokemon, fetchPokemonData, setSearchString } from "../../Context/Actions";
import { AppContext } from "../../Context/AppContext";
import debounce from 'lodash/debounce';
const SearchBar = () => {
    const { dispatch, appState } = useContext(AppContext);
    
    const [ searchKey, setSearchKey ] = useState("");
    
    const debounceSearch = debounce((searchValue) => {
      searchResponse(searchValue);
    }, 2500);
    const searchResponse = async (searchValue) => {
    //   const { pokemons } = appState;
      console.log("Got search Key as ", searchKey);
      //   if (!pokemons.some((pokemon) => pokemon.name === searchKey)) {
      //     const pokemonArr = await fetchPokemonData(searchKey);
      //     console.log("Searched Pokemon", pokemonArr);
      //     if (pokemonArr.length > 0) {
      //       dispatch(addPokemon(pokemonArr));
      //     }
      //   }
    };
    const handleSearch = async( searchValue ) => {
        
        if (searchValue === ""){
            setSearchKey("");
        }else{
            //searchValue = 'pikachu';
            debounceSearch(searchValue);
            setSearchKey( searchValue );
            
        }
        dispatch(setSearchString(searchValue));
    }
    return (
    <div>
        <input  type="text" 
        placeholder="Search by Pokemon Name"
        value = {searchKey}
        onChange={ e=> handleSearch(e.target.value) }
         />
    </div>);
};

export default SearchBar;
