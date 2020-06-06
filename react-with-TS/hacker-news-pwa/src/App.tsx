import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import HeaderComponent from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <HeaderComponent/>
      <Container maxWidth="lg">
        <Layout/>
      </Container>
    </Router>
  );
}

export default App;
