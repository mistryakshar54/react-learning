import { Dispatch } from "react";

export type ImageSprites = {
  front_default: string;
  back_default: string;
};

export type PokemonActions = {
  type: string;
  payload: [];
};

export type Pokemon = {
  moves: string[];
  sprites: ImageSprites[];
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
  dispatch: Dispatch<PokemonActions> | null;
}
