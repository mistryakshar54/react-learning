import { Dispatch } from "react";

export const MAX_FETCH_LIMIT = 10;

export enum ActionType {
  LOAD_DATA,
  SEARCH_POKEMON,
  FETCH_DETAILS
}

export type ImageSprites = {
  front_default: string;
  back_default: string;
};

export type PokemonActions = {
  type: ActionType;
  payload: Pokemon[];
};

export type Pokemon = {
  moves: string[];
  sprites: ImageSprites;
  type: string[];
  name: string;
}

export type AppState = {
  pokemons: Pokemon[];
  loading: boolean;
  message: string;
};

export type AppContextValue = {
  appState: AppState;
  dispatch: Dispatch<PokemonActions>;
}

export type AxiosResponseType = {
  data : {
    name : string,
    types : [{
      type : {
        name : string
      }
    }],
    moves : [{
      move : {
        name : string
      }
    }],
    sprites : ImageSprites,

  },
  status : number
}