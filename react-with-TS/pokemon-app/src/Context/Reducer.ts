import { ActionType, AppState, PokemonActions } from "./AppTypes";


export default(state: AppState, action: PokemonActions) => {
    switch (action.type) {
        case ActionType.LOAD_DATA : {
            return { ...state, pokemons: [...action.payload] };
        }
        default: return state;
    }
};
