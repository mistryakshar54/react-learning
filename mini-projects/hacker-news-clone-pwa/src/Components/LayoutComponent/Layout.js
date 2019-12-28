import React from 'react';
import NewsComponent from '../NewsComponent/NewsComponent';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Layout = ( props ) => {
    return (
      <Paper elevation={3}>
        <NewsComponent />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
      </Paper>
    );
}

export default Layout;