import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutComponent from "./Layout/Layout";
import { BrowserRouter as Router , Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <LayoutComponent/>
      </Router>
    </div>
  );
}

export default App;
