import React, {useState} from 'react';
import IngredientsListComponent from "./Components/IngredientsList/IngredientsList";
import IngredientComponent from "./Components/Ingredients/Ingredients";
import SearchFilterComponent from './Components/SearchFilter/SearchFilter';
const IngredientsLayoutComponent = ( props ) => {

    const [ ingredientsList , setingredientsList ] = useState([]);
    
    const addNewIngredientHandler = ( ingredient ) => {
        setingredientsList(currentList => [
          ...currentList,
          {
            id: new Date().getTime().toString().slice(0, 8),
            ...ingredient
          }
        ]);
    }

    const filterResultsHandler = ( filterKey ) => {
        
        setingredientsList( currentList =>  currentList.filter( item => item.title === filterKey )  );
    }
    return (
      <div>
        <div className="container center-content">
          <h1 className="content-header">
            React Hooks Ingredients List Example
          </h1>
        </div>
        <div className="container content-center">
          <IngredientsListComponent
            addNewIngredient={addNewIngredientHandler}
          />
          <SearchFilterComponent filterResults = {filterResultsHandler} />
          <h1 className="content-header">Ingredients</h1>
          <IngredientComponent ingredientList={ingredientsList} />
        </div>
      </div>
    );
}

export default IngredientsLayoutComponent;