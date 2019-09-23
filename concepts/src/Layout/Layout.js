import React from 'react';
import { Route } from "react-router-dom";

import ItemListLayout from "../RenderProps/Components/ItemListLayout";
import Posts from "../HOC/Posts";
import IngredientsListComponent from "../Hooks/Components/IngredientsList/IngredientsList";
import ContextLayoutComponent from "../Context/Components/Layout";
import PostsComponent from "../Thunk-Testing/PostsComponent";
const LayoutComponent = () => {
    return (
      <React.Fragment>
        <Route path="/" exact component={ItemListLayout} />
        <Route path="/HOC" exact component={Posts} />
        <Route path="/Hook" exact component={IngredientsListComponent} />
        <Route path="/Context" exact component={ContextLayoutComponent} />
        <Route path="/Posts" exact component={PostsComponent} />
      </React.Fragment>
    );
}

export default LayoutComponent;