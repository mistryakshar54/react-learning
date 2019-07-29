import React from 'react';
import { Route } from "react-router-dom";

import ItemListLayout from "../RenderProps/Components/ItemListLayout";
import Posts from "../HOC/Posts";
const LayoutComponent = () => {
    return (
        <React.Fragment>
            <Route  
                 path="/" exact
                 component={ItemListLayout}
               />
            <Route path="/HOC"  component={Posts} />
        </React.Fragment>
      
    );
}

export default LayoutComponent;