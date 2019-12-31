import React from 'react';
import NewsComponent from '../NewsComponent/NewsComponent';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Route , Switch } from 'react-router-dom';
import NotFoundComponent from './NotFoundComponent/NotFoundComponent';
const Layout = ( props ) => {
    return (
      <Paper style={ { marginTop:'5%' } } elevation={3}>
        <Switch>
          <Route path="/top" exact component={NewsComponent} />
          <Route path="*"  component={NotFoundComponent} />
        </Switch>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
      </Paper>
    );
}

export default Layout;