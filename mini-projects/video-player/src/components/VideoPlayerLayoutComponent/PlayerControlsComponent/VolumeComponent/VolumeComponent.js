import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute} from "@fortawesome/free-solid-svg-icons";

const VolumeComponent  = (props) => {
    let { toggleVolume, isVolumeEnabled } = props;
    return (
      <div>
        { isVolumeEnabled ?
         <FontAwesomeIcon onClick={toggleVolume} icon={faVolumeUp}/> :
          <FontAwesomeIcon onClick={toggleVolume} icon={faVolumeMute} />}
      </div>
    );
}

export default VolumeComponent;