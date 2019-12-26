import React , {useState , useRef, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from "axios";

const SearchFilterComponent = ( props ) => {
    const { filterResults } = props;
    const [ filterKey , setFilterKey ] = useState("");
    const searchRef = useRef(null);
    const [ ingredientsData , setIngredientsData ] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://raw.githubusercontent.com/mistryakshar54/react-learning/master/concepts/public/assets/ingredients.json"
        )
        .then(resp => {
          debugger;
          if (resp.status === 200) {
            setIngredientsData([...resp.data]);
            filterResults([...resp.data]);
          }
        })
        .catch(err => {
          setIngredientsData([]);
          filterResults([]);
        });
    }, [filterResults]);

    useEffect(() => {
      if (filterKey !== "") {
        filterResults(ingredientsData.filter(item => item.name.includes(filterKey)));
      }
      else{
        filterResults(ingredientsData);
      }
    }, [filterResults, filterKey, ingredientsData]); 
    return (
      <Form>
        <Form.Row className="justify-center">
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Control
              type="text"
              ref={searchRef}
              value={filterKey}
              placeholder="Search Ingredient Here..."
              onChange={event => {
                setFilterKey(event.target.value);
              }}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
}
export default SearchFilterComponent;