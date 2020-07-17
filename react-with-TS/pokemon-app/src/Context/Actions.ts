import instance from "../AxiosConfig/Config";
import {ActionType, Pokemon, PokemonActions, MAX_FETCH_LIMIT, AxiosResponseType} from './AppTypes';
export const fetchPokemonData = async( query :string) : Promise<Pokemon[]> => {
    const promisesArr: AxiosResponseType[] = [];
    if( query === 'all' ){
        let limit = 1;
        while (limit <= MAX_FETCH_LIMIT) {
            const fetchResponse : AxiosResponseType = await instance.get(`${limit}`)
            promisesArr.push(fetchResponse);
            limit++;
        }
    }
    else{
        const fetchResponse : AxiosResponseType = await instance.get(`${query}`)
        promisesArr.push(fetchResponse);      
    }
    const pokemonArr : Pokemon[] = promisesArr.map( (promiseResp: AxiosResponseType) => {
        const {data}  = promiseResp;
        const moves = data.moves.slice(0,10).map( item => item.move.name );
        const type = data.types.map( item => item.type.name)
        
        const pokemon : Pokemon = {
             name : data.name,
             moves,
             type,
             sprites : data.sprites
        }
        return pokemon;
    });
    console.log("pokemonArr", pokemonArr);
    return pokemonArr;
}

export const loadInitialData  = ( payload: Pokemon[] ) : PokemonActions => {
    return {
        type : ActionType.LOAD_DATA,
        payload 
    }
}