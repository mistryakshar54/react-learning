import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const [autoSuggestDiv, toggleAutoSuggestDiv] = useState(false);
    
    const handleCityClick = (city) => {
      toggleAutoSuggestDiv(false);
      dispatch(actionCreators.loadWeatherInformationThunk(city))
    };
    
    const handleLocSearch = (searchVal) => {
      if( !autoSuggestDiv ){toggleAutoSuggestDiv(true);}
      setSearchKey(searchVal);
      dispatch(actionCreators.searchLocationThunk(searchKey));
    };

    return (
      <div className="searchBar">
        <input
          type="text"
          className="searchBarInput"
          value={searchKey}
          onChange={(e) => handleLocSearch(e.target.value)}
        />
        {autoSuggestDiv && (
          <div className="autoSuggestDiv">
            <ul className="autoSuggestBox">
              {filteredCities.map((city) => (
                <li
                  onClick={() => handleCityClick(city)}
                  className="autoSuggestBoxItem"
                  key={city.id}
                >
                  {`${city.name} , ${city.state}, ${city.country}`}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

export default SearchBarComponent;