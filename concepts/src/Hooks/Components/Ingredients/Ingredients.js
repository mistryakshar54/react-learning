import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const IngredientComponent = ( props ) => {
    return props.ingredients && props.ingredients.length > 0 ? (
      props.ingredients.map((item, index) => {
        return (
          <ul key={index} className="list-group list-group-flush center-items">
            <li className="list-group-item text-left col-7">
              <label>
                {item.name} - {item.amount}$
              </label>
              <FontAwesomeIcon
                onClick={props.addToCart}
                style={{
                  float: "right",
                  cursor: "pointer",
                  marginTop: "10px",
                  padding: "0.5%"
                }}
                icon={faTrash}
              />
            </li>
          </ul>
        );
      })
    ) : (
      <h2 className="content-header">No Ingredients Added!</h2>
    );
}

export default IngredientComponent;