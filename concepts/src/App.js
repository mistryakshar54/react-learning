import React from 'react';
import './App.css';
import LayoutComponent from "./Layout/Layout";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
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
