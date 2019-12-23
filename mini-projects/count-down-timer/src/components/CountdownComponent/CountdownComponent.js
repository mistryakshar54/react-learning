import React , {useState} from 'react';
import TimerComponent from "./TimerComponent/TimerComponent";
const CountdownComponent = ( props ) => {

    const timerValue = {
        hours : 0,
        minutes: 2,
        seconds: 10
    }
    const [ timer , setTimer ] = useState(timerValue);
    return <TimerComponent timerData={timer} />;
}
export default CountdownComponent;