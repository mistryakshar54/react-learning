import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutComponent from "./Layout/Layout";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router , Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <LayoutComponent/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
