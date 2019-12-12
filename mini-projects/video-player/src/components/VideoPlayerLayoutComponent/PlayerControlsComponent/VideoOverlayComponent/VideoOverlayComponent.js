import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";

const VideoOverlayComponent = (props) => {

    const {isPlayerRunning} = props;

    if( isPlayerRunning){
        return (
          <div className="overlayInfo">
            <FontAwesomeIcon icon={faPause} />
          </div>
        );
    }
    else{
        return (
          <div className="overlayInfo">
            <FontAwesomeIcon icon={faPlay} />
          </div>
        );
    }
}
export default VideoOverlayComponent;