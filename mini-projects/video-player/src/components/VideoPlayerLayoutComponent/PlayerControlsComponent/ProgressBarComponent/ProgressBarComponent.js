import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types"; // ES6

const ProgressBarComponent = props => {
  return (
    <div className="controlItems progressBarOuter">
      <div className="progressBar"></div>
    </div>
  );
};

export default ProgressBarComponent;

// ProgressBarComponent.propTypes = {
//   isPlayerRunning: PropTypes.bool
// };