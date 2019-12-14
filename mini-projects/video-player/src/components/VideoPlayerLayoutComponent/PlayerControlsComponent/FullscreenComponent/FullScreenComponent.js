import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

const FullScreenComponent = ( {isFullscreenEnabled , enableFullScreenMode} ) => {
    console.log("FullScreen Enabled: " , isFullscreenEnabled)
    return (
      <div className="controlItems">
        {isFullscreenEnabled === true ? (
          <FontAwesomeIcon
            onClick={() => {
              enableFullScreenMode(false);
            }}
            icon={faCompress}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              enableFullScreenMode(true);
            }}
            icon={faExpand}
          />
        )}
      </div>
    );

}

export default FullScreenComponent;