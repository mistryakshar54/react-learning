import React, { useState, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import * as actionCreators from '../../store/CoreActionCreator';
import { createSelector } from "reselect";
import './searchBar.css';

const stateSelector = createSelector(
  (state) => state,
  (state) => state.filteredCities,
);

const SearchBarComponent = () => {
    const dispatch = useDispatch();
    const [ searchKey , setSearchKey ] = useState('');
    const filteredCities = useSelector(stateSelector);
    useEffect(() => {
      dispatch(actionCreators.searchLocationThunk(searchKey));
    }, [dispatch, searchKey]);

    return (
      <div className="searchBar">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {filteredCities.length > 0 &&
        <div className="autoSuggestDiv">
          <ul className="autoSuggestBox">
            {filteredCities.map((city) => (
              <li className="autoSuggestBoxItem" key={city.id}>
                {`${city.name} , ${city.state}, ${city.country}`}
              </li>
            ))}
          </ul>
        </div>
        }
      </div>
    );
}

export default SearchBarComponent;