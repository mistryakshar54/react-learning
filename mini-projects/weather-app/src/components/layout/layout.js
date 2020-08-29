import React from 'react';
import TempChart from '../charts/TempChart';
import SearchBarComponent from '../searchbar/searchBar';
import HeroComponent from '../hero/hero';
import './layout.css';

const Layout = () => {
    return (
      <div className="content">
        <div>
          <HeroComponent />
          <SearchBarComponent />
        </div>
        <TempChart />
      </div>
    );
}
export default Layout;