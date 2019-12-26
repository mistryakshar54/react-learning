import React, { useState } from 'react';
import "./InputComponent.css";
const InputComponent = ( props ) => {
    const [ hours , setHours ] = useState(0);
    const [ minutes, setMinutes] = useState(0);
    const [ seconds, setSeconds] = useState(0);
    const startTimer = () => {
        props.startCountdown({
            hours,minutes,seconds
        });
    }
    return (
      <div className="timer-component">
        <div className="timer-component">
          <p className="time-component">
            <input
              className="timer-input"
              type="number"
              value={hours}
              onChange={e => setHours(e.target.value)}
            />
            <span>Hours</span>
          </p>
          <p className="time-component">
            <input
              className="timer-input"
              type="number"
              value={minutes}
              onChange={e => setMinutes(e.target.value)}
            />
            <span>Minutes</span>
          </p>
          <p className="time-component">
            <input
              className="timer-input"
              type="number"
              value={seconds}
              onChange={e => setSeconds(e.target.value)}
            />
            <span>Seconds</span>
          </p>
        </div>
        <div>
          <button onClick={startTimer}> Start </button>
        </div>

        {/* <div className="inputContainers">
          <input
            className="timer-input"
            type="number"
            value={hours}
            onChange={e => setHours(e.target.value)}
          />
          :
          <input
            className="timer-input"
            type="number"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
          />
          :
          <input
            className="timer-input"
            type="number"
            value={seconds}
            onChange={e => setSeconds(e.target.value)}
          />
        </div>
        <div>
          <button onClick={startTimer}> Start </button>
        </div> */}
      </div>
    );
}
export default InputComponent;