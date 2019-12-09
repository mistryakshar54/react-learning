import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";

const PlaybackComponent = ( props )=> {
    const {videoRef } = props;
    
    const togglePlay = () => {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
          props.updatePlayerStatus(false);
        } else {
          videoRef.current.play();
          props.updatePlayerStatus(true);
        }
    }
    debugger;
    if (props.isPlayerRunning) {
      return <FontAwesomeIcon onClick={togglePlay} icon={faPause} />;
    } else {
      return <FontAwesomeIcon onClick={togglePlay} icon={faPlay} />;
    }
      
}

export default PlaybackComponent;