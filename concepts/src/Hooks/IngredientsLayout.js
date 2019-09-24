import React, {useState} from 'react';
import IngredientsListComponent from "./Components/IngredientsList/IngredientsList";
import IngredientComponent from "./Components/Ingredients/Ingredients";
const IngredientsLayoutComponent = ( props ) => {

    const [ ingredientsList , setingredientsList ] = useState([]);
    
    const addNewIngredientHandler = ( ingredient ) => {
        debugger;
        setingredientsList(currentList => [
          ...currentList,
          {
            id: new Date().getTime().toString().slice(0, 8),
            ...ingredient
          }
        ]);
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
          <h1 className="content-header">Ingredients</h1>
            <IngredientComponent ingredientList={ingredientsList} />
        </div>
      </div>
    );
}

export default IngredientsLayoutComponent;