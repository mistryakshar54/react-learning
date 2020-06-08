import React, { lazy } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
const News = lazy(() => import('../News/News'));

const NotFound = () => <h1>Lost Are you??</h1>
const Layout = () => {
    return(
            <Switch>
                <Redirect exact from="/" to="/newest/1" />
                <Route path="/newest/:id" exact component={News} />
                <Route path="/news/:id" exact component={News} />
                <Route path="/ask/:id" exact component={News} />
                <Route path="/show/:id" exact component={News} />
                <Route path="/jobs/:id" exact component={News} />
                <Route path="*" component={NotFound} />
            </Switch>
    );
}

export default Layout;