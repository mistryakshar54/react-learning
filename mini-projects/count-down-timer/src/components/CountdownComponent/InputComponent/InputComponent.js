import React, { useState } from "react";
import "./InputComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";
 
const InputComponent = props => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startTimer = () => {
    props.startCountdown({
      hours,
      minutes,
      seconds
    });
  };
  return (
    <div className="input-component-container">
      <div className="input-component">
        <p className="time-component">
          <div className="input-container">
            <input
              className="timer-input"
              type="number"
              value={hours}
              onChange={e => setHours(e.target.value)}
            />
          </div>
          <span>Hours</span>
        </p>
        <p className="time-component">
          <div className="input-container">
            <input
              className="timer-input"
              type="number"
              value={minutes}
              onChange={e => setMinutes(e.target.value)}
            />
          </div>
          <span>Minutes</span>
        </p>
        <p className="time-component">
          <div className="input-container">
            <input
              className="timer-input"
              type="number"
              value={seconds}
              onChange={e => setSeconds(e.target.value)}
            />
          </div>
          <span>Seconds</span>
        </p>
      </div>
      <div id="play-btn">
        <div onClick={startTimer}>
          <FontAwesomeIcon id="play-icon" icon={faPlay} />
        </div>
      </div>
    </div>
  );
};
export default InputComponent;
