import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay , faPause } from "@fortawesome/free-solid-svg-icons";

const VideoOverlayComponent = (props) => {

    const {isPlayerRunning} = props;

    if( isPlayerRunning){
        return <FontAwesomeIcon icon={faPause} />
    }
    else{
        return <FontAwesomeIcon icon={faPlay} />;
    }
}
export default VideoOverlayComponent;