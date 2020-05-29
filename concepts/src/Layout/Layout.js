import React from 'react';
import { Route } from "react-router-dom";

import ItemListLayout from "../RenderProps/Components/ItemListLayout";
import Posts from "../HOC/Posts";
import IngredientsLayoutComponent from "../Hooks/IngredientsLayout";
import ContextLayoutComponent from "../Context/Components/Layout";
import HomeComponent from './home';
const LayoutComponent = () => {
    return (
      <React.Fragment>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/render-props" exact component={ItemListLayout} />
        <Route path="/HOC" exact component={Posts} />
        <Route path="/Hook" exact component={IngredientsLayoutComponent} />
        <Route path="/Context" exact component={ContextLayoutComponent} />
      </React.Fragment>
    );
}

export default LayoutComponent;