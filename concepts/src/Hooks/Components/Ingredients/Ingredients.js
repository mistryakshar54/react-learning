import React from 'react';

const IngredientComponent = ( props ) => {
    return props.ingredients && props.ingredients.length > 0 ? (
      props.ingredients.map((item, index) => {
        return (
          <ul key={index} className="list-group list-group-flush center-items">
            <li className="list-group-item text-left col-7">
              <label>
                {item.name} - {item.amount}$
              </label>
            </li>
          </ul>
        );
      })
    ) : (
      <h2 className="content-header">No Such Ingredient :(</h2>
    );
}

export default IngredientComponent;