import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'; // ES6

const PlaybackComponent = ( props )=> {
    if (props.isPlayerRunning) {
      return (
        <div onClick={props.togglePlay}>
          <FontAwesomeIcon icon={faPause} />
        </div>
      );
    } else {
      return (
        <div onClick={props.togglePlay}>
          <FontAwesomeIcon icon={faPlay} />
        </div>
      );
    }
      
}

export default PlaybackComponent;

PlaybackComponent.propTypes = {
  isPlayerRunning : PropTypes.bool
}