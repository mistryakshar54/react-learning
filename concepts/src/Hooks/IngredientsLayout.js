import React, { useState, useCallback } from "react";
import IngredientComponent from "./Components/Ingredients/Ingredients";
import SearchFilterComponent from './Components/SearchFilter/SearchFilter';

const IngredientsLayoutComponent = ( props ) => {

    const [ ingredientsList , setingredientsList ] = useState([]);
    const filterResultsHandler = useCallback(
      filterResults => {
        setingredientsList([...filterResults]);
      },
      [setingredientsList]
    ); 

    return (
      <div>
        <div className="container center-content">
          <h1 className="content-header">
            React Hooks Ingredients List Example
          </h1>
          <h2 className="content-sub-header">
            This example uses useEffect() and useCallback() hook to filter data.
          </h2>
        </div>
        <div className="container content-center">
          <SearchFilterComponent filterResults={filterResultsHandler} />
          <h1 className="content-header">Ingredients</h1>
          <IngredientComponent ingredients={ingredientsList} />
        </div>
      </div>
    );
}

export default IngredientsLayoutComponent;