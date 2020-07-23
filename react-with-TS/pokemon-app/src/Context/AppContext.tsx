import { useReducer, createContext, Dispatch } from "react";
import * as React from 'react';
import PokemonReducer from './Reducer';
import { AppState, AppContextValue } from './AppTypes';

const initialState : AppState = {
  pokemons: [
    // {
    //   "name": "bulbasaur",
    //   "moves": [
    //     "razor-wind",
    //     "swords-dance",
    //     "cut",
    //     "bind",
    //     "vine-whip",
    //     "headbutt",
    //     "tackle",
    //     "body-slam",
    //     "take-down",
    //     "double-edge"
    //   ],
    //   "type": [
    //     "grass",
    //     "poison"
    //   ],
    //   "sprites": {
    //     "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    //     "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    //   }
    // }
  ],
    loading : false,
    message: "",
    searchKeyword:""
}
const initialContextValue = {
    appState: initialState,
    dispatch: () => { },
};

export const AppContext = createContext<AppContextValue>(initialContextValue);

export const AppContextProvider: React.FC = ({ children }) => {
  const [state , dispatch] = useReducer( PokemonReducer, initialState );
  return (
    <AppContext.Provider value={{appState:state , dispatch}}>
      {children}
    </AppContext.Provider>
  );
};