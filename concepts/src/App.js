import React from 'react';
import './App.css';
import LayoutComponent from "./Layout/Layout";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">React Concepts</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink className="nav-link" to="/render-props">Render Props</NavLink>
                <NavLink className="nav-link" to="/HOC">HOC</NavLink>
                <NavLink className="nav-link" to="/Hook">Hooks</NavLink>
                <NavLink className="nav-link" to="/Context">Context</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <LayoutComponent />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
