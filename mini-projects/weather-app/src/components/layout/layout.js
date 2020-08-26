import React from 'react';
import TempChart from '../charts/TempChart';
import SearchBarComponent from '../searchbar/searchBar';
const Layout = () => {
    return (
        <div>
            <SearchBarComponent/>
            <h1>Graphs Come here</h1>
            <TempChart/>
        </div>
    );
}
export default Layout;