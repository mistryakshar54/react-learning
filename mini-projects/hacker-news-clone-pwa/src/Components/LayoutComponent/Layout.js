import React, { Suspense, lazy } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Route , Switch } from 'react-router-dom';

const News = lazy(() => import("../NewsComponent/NewsComponent"));
const NotFound = lazy(() => import("./NotFoundComponent/NotFoundComponent"));

const Layout = ( props ) => {
    return (
      <Paper style={{ marginTop: "5%" }} elevation={3}>
         <Suspense fallback={<div>Loading...</div>}>
         
            <Switch>
            <Route path="/top" exact component={News} />
            <Route path="*" component={NotFound} />
            </Switch>
            <Typography variant="h4" component="h1" gutterBottom>
            Create React App v4-beta example
            </Typography>
         </Suspense> 
      </Paper>
    );
}

export default Layout;