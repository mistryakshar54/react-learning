import React , {createContext} from 'react';

type todo = {
    name : string,
    isComplete : boolean,
}
interface state {
    todoList : todo[],
    theme : 'dark' | 'light'
}

const appState: state = {
    todoList : [],
    theme: 'light'
};

export const AppContext = createContext( appState );

export const AppContextProvider = ( { children } ) => {
    return(
        <AppContext.Provider value={appState}>
            {children}
        </AppContext.Provider>
    );
}