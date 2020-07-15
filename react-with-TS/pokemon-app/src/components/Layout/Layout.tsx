import * as React from 'react';
import Grid from '../Grid/Grid';
import {AppContext} from '../../Context/AppContext';
import { useContext } from 'react';
const Layout = () => {
    const { appState , dispatch} = useContext(AppContext);
    const { pokemons } = appState;
    pokemons.forEach( item => console.log( item ) );
    return <Grid />
}

export default Layout;