import { ActionType, AppState, Pokemon, PokemonActions } from "./AppTypes";


export default(state: AppState, action: PokemonActions) => {
    switch (action.type) {
      case ActionType.SET_DATA: {
        return { ...state, pokemons: [...(action.payload as Pokemon[])] };
      }
      case ActionType.ADD_POKEMON: {
        const pokemons = [...state.pokemons];
        pokemons.push(...action.payload as Pokemon[]);
        console.log("ADD_POKEMON", pokemons);
        return { ...state, pokemons : [...pokemons] };
      }
      case ActionType.SET_SEARCH_DATA: {
        return { ...state, searchKeyword: action.payload as string };
      }
      default:
        return state;
    }
};
