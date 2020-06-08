import React, { Suspense } from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import HeaderComponent from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderComponent/>
        <Container maxWidth="lg">
          <Layout/>
        </Container>
      </Suspense>
    </Router>
  );
}

export default App;
