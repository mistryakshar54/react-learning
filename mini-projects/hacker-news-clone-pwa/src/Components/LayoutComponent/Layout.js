import React, { Suspense, lazy } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Route, Redirect, Switch } from "react-router-dom";

const News = lazy(() => import("../NewsComponent/NewsComponent"));
const NotFound = lazy(() => import("./NotFoundComponent/NotFoundComponent"));

const Layout = ( props ) => {
    return (
      // <Paper style={{ marginTop: "5%" }} elevation={3}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect exact from="/" to="/newest/1" />
          <Route path="/newest/:id" exact component={News} />
          <Route path="/news/:id" exact component={News} />
          <Route path="/ask/:id" exact component={News} />
          <Route path="/show/:id" exact component={News} />
          <Route path="/jobs/:id" exact component={News} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
      // </Paper>
    );
}

export default Layout;