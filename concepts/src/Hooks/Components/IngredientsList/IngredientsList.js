import React , {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const IngredientsListComponent = ( props ) => {
    const [validated, setValidated] = useState(false);
    const [ title , setTitle ] = useState("");
    const [amount, setAmount] = useState(0);
    const handleAddIngredient = event => {
      // const form = event.currentTarget;
      // if (form.checkValidity() === false) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }
      props.addNewIngredient({
        title,
        amount
      });
    };
    return (
      <Form>
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
        <Button variant="danger" onClick={handleAddIngredient}>
          Add Ingredient
        </Button>
      </Form>
    );
}

export default IngredientsListComponent;