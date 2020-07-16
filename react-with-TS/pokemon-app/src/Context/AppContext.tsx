import { useReducer, createContext, Dispatch } from "react";
import * as React from 'react';
import PokemonReducer from './Reducer';
import { AppState, AppContextValue } from './AppTypes';

const initialState : AppState = {
    pokemons: [
      {
        moves: [],
        sprites: [],
        type: [],
        name: "Pikachu"
      },
      {
        moves: [],
        sprites: [],
        type: [],
        name: "Pichu"
      }
    ],
    loading : false,
    message: ""
}
const initialContextValue = {
    appState: initialState,
    dispatch : null,
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