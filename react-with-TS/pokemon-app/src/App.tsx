import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import {AppContextProvider} from './Context/AppContext';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContextProvider>
          <Layout />
        </AppContextProvider>
      </header>
    </div>
  );
}

export default App;
