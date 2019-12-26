import React , {useState} from 'react';
import TimerComponent from "./TimerComponent/TimerComponent";
import InputComponent from "./InputComponent/InputComponent";
const CountdownComponent = ( props ) => {
    const [ isTimerRunning , setTimerRunning ] = useState(false);
    const timerValue = {
        hours : 0,
        minutes: 0,
        seconds: 0
    }
    const startCountdown = ( timerData ) => {
        setTimer(timerData);
        setTimerRunning(!isTimerRunning);
    } 
    const stopCountdown = () => {
        setTimer(timerValue);
        setTimerRunning(!isTimerRunning);
    }
    const [ timer , setTimer ] = useState(timerValue);
    return (
      <div>
        {isTimerRunning ? (
          <TimerComponent timerData={timer} stopCountdown={stopCountdown} />
        ) : (
          <InputComponent startCountdown={startCountdown} />
        )}
      </div>
    );
}
export default CountdownComponent;