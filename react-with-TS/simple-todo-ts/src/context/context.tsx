import React , {createContext} from 'react';
import { useReducer } from 'react';
import appReducer from './appReducer';
import { todo, AppState, TodoActions } from "./types";

const appState: AppState = {
    todoList : [],
    theme: 'light'
};

interface AppContextValue {
    appState : AppState,
    addTodo : (todoItem: todo) => void,
    removeTodo : (todoName : string) => void,
    completeTodo : (todoItem: todo) => void,
}

const initialContextValues: AppContextValue = {
  appState,
  addTodo: (todoItem) => {},
  removeTodo: (todoName) => {},
  completeTodo: (todoItem) => {},
};

export const AppContext = createContext<AppContextValue>(initialContextValues);

export const AppContextProvider : React.FC  = ( { children  } ) => {
    const [state, dispatch] = useReducer(appReducer, appState);
    const appContextValue: AppContextValue = {
      appState : state,
      addTodo: (todoItem) => {
        dispatch({
          type: "ADD_TODO",
          payload: { todoItem },
        });
      },
      removeTodo: (todoName) => {
        dispatch({
          type: "REMOVE_TODO",
          payload: { todoItemName :  todoName },
        });
      },
      completeTodo: (todoItem) => {
        dispatch({
          type: "COMPLETE_TODO",
          payload: { todoItem },
        });
      },
    };
    return (
      <AppContext.Provider value={appContextValue}>
        {children}
      </AppContext.Provider>
    );
}