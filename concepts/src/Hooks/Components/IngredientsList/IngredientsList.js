import React , {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import IngredientComponent from "../Ingredients/Ingredients";

const IngredientsListComponent = ( props ) => {
    const [validated, setValidated] = useState(false);
    const [ title , setTitle ] = useState("");
    const [amount, setAmount] = useState(0);
    const handleSubmit = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };
    return (
      <div>
        <div className="container center-content">
          <h1 className="content-header">
            React Hooks Ingredients List Example
          </h1>
          {/* <h3 className="content-sub-header">
            Select Curreny from the dropdown to see the price changes
          </h3> */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row className="justify-center">
              <Form.Group as={Col} md="5" controlId="validationCustom01">
                {/* <Form.Label>Last name</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  placeholder="Ingredient Name"
                  value={title}
                  onChange={event => {
                    setTitle(event.target.value);
                  }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                {/* <Form.Label>Last name</Form.Label> */}
                <Form.Control
                  required
                  type="text"
                  placeholder="Amount"
                  value={amount}
                  onChange={event => {
                    setAmount(event.target.value);
                  }}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="danger" type="submit">
              Add Ingredient
            </Button>
        <hr/>
          </Form>
        </div>
        <div className="container content-center">
          <h1 className="content-header">Ingredients</h1>
          <div>
            <IngredientComponent ingredientList ={[]}/>
          </div>
        </div>
      </div>
    );
}

export default IngredientsListComponent;