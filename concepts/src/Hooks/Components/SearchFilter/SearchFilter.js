import React , {useState , useRef, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const SearchFilterComponent = ( props ) => {
    const { filterResults } = props;
    const [ filterKey , setFilterKey ] = useState("");
    const searchRef = useRef(null);
    useEffect(() => {
      const timer = setTimeout(() => {
        if (searchRef.current.value === filterKey) {
          console.log("Sending to Props");
          clearTimeout(timer);
          if (filterKey !== "") {
            filterResults(filterKey);
          }
        }
      }, 500);
      return () => {
        clearTimeout(timer);
      };
    }, [filterKey, searchRef, filterResults]);
   
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