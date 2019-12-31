import React , {Fragment} from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Provider } from "react-redux";
import store from './store/Store';
import Layout from './Components/LayoutComponent/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import  HeaderComponent  from "./Components/LayoutComponent/Header/Header";
function Copyright() {
  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <HeaderComponent/>
          <Container maxWidth="lg">
            <Layout />
          </Container>
          <Copyright />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
