import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemListComponent from './RenderProps/Components/ItemListComponent';
import SummaryComponent from './RenderProps/Components/SummaryComponent';
import { WithLoader } from "./HOC/withLoader";
import  Posts  from "./HOC/Posts";
function App() {
  return (
    <div className="App">
        <h1 className="header-label">Render Props Example</h1>
          <ItemListComponent
            render = {
              (cartItems) => <SummaryComponent cartItems={cartItems} />
            }
          
          />
          <Posts/>
    </div>
  );
}

export default App;
