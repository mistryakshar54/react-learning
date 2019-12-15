import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // ES6
import { Transition } from "react-transition-group";

const VideoOverlayComponent = props => {
  const { isPlayerRunning } = props;
  return (
    <div className="overlayInfo">
      <Transition in={isPlayerRunning} timeout={500}>
        {state => (
          <React.Fragment>
            <div
              className="overlayInfo"
              style={{
                visibility: state === "entering" ? "visible" : "none",
                opacity: state === "entering" ? 1 : 0
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
            </div>
            <div
              className="overlayInfo"
              style={{
                visibility: state === "exiting" ? "visible" : "none",
                opacity: state === "exiting" ? 1 : 0
              }}
            >
              <FontAwesomeIcon icon={faPause} />
            </div>
          </React.Fragment>
        )}
      </Transition>
    </div>
  );
};
export default VideoOverlayComponent;

VideoOverlayComponent.propTypes = {
  isPlayerRunning: PropTypes.bool
};
