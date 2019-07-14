import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemListComponent from './RenderProps/Components/ItemListComponent';
import SummaryComponent from './RenderProps/Components/SummaryComponent';

function App() {
  return (
    <div className="App">
        <h1 className="header-label">Render Props Example</h1>
        <ItemListComponent
          render = {
            (cartItems) => <SummaryComponent cartItems={cartItems} />
          }
        
        />
    </div>
  );
}

export default App;
