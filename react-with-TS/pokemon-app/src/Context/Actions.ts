import instance from "../AxiosConfig/Config";
import {ActionType, Pokemon, PokemonActions, MAX_FETCH_LIMIT} from './AppTypes';
export const fetchPokemonData = async( query :string) => {
    // const responseData : Pokemon[];
    if( query === 'all' ){
        console.log("An all promise!!");
        let limit = 1;
        const promiseArr = [];
        while (limit <= MAX_FETCH_LIMIT) {
            promiseArr.push(await instance.get(`${limit}`));
            limit++;
        }
        console.log(promiseArr);
    }
    // else{

    // }
    // const pokemonResponse = await instance.get(pokemon);
    // console.log("pokemonResponse => ", pokemonResponse?.data);
    // return pokemonResponse?.data
}

export const loadInitialData  = ( payload: Pokemon[] ) : PokemonActions => {
    return {
        type : ActionType.FETCH_DETAILS,
        payload 
    }
}