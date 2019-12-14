import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFastForward, faFastBackward } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'; // ES6

const PlayerIntervalComponent = ( props )=> {
    
    const skipInterval = ( skipDirection ) => {
        props.skipToInterval( skipDirection );
    }
    return (
      <React.Fragment>
        <div className="controlItem">
          <FontAwesomeIcon onClick={() => {skipInterval('back')}} icon={faFastBackward} />
        </div>
        <div className="controlItem">
          <FontAwesomeIcon onClick={() => {skipInterval('forward')}} icon={faFastForward} />
        </div>
      </React.Fragment>
    );
}

export default PlayerIntervalComponent;

PlayerIntervalComponent.propTypes = {
  skipToInterval: PropTypes.func
};