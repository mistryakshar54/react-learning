import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";

const PlaybackComponent = ( props )=> {
    if (props.isPlayerRunning) {
      return <FontAwesomeIcon icon={faPause} />;
    } else {
      return <FontAwesomeIcon icon={faPlay} />;
    }
      
}

export default PlaybackComponent;