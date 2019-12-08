import React from 'react';
import { Route } from "react-router-dom";

import ItemListLayout from "../RenderProps/Components/ItemListLayout";
import Posts from "../HOC/Posts";
import IngredientsLayoutComponent from "../Hooks/IngredientsLayout";
import ContextLayoutComponent from "../Context/Components/Layout";
import PostsComponent from "../Thunk-Testing/PostsComponent";
import CustomVidePlayerComponent from '../CustomVideoPlayer/CustomVidePlayer';
const LayoutComponent = () => {
    return (
      <React.Fragment>
        <Route path="/" exact component={ItemListLayout} />
        <Route path="/HOC" exact component={Posts} />
        <Route path="/Hook" exact component={IngredientsLayoutComponent} />
        <Route path="/Context" exact component={ContextLayoutComponent} />
        <Route path="/Posts" exact component={PostsComponent} />
        <Route path="/VideoPlayer" exact component={CustomVidePlayerComponent} />
      </React.Fragment>
    );
}

export default LayoutComponent;