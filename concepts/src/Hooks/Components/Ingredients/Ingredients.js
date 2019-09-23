import React from 'react';
import Card from "react-bootstrap/Card";
const IngredientComponent = ( props ) => {
    return(
            props.ingredientList.map( (item , index) => {
                return (
                  <Card key={index}>
                    <Card.Title>
                      {item.title} - {item.amount}
                    </Card.Title>
                    <span> X </span>
                  </Card>
                );    
            })
    );
}

export default IngredientComponent;