import React , { useState , useEffect } from 'react';
var TotalCount = 0;
const TimerComponent = ( props ) => {
    const { timerData } = props;
    const [ countdownTime, setCountdownTime] = useState(0);
    // const [timeLeft , setTimeLeft] = useState({ hours : 0 , minutes : 0 , seconds : 0 });
    const calculateTimeLeft = () => {
        let currDate = new Date().getTime();
        let difference = countdownTime - currDate; ;
        console.log("countdownTime", countdownTime, "currDate", currDate , "difference" , difference);
        let timeDiff = {
            hours: difference > 0 ? (Math.floor((difference / (1000 * 60 * 60)) % 24)) : 0,
            minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
            seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0
        };
        console.log("timeDiff => ", timeDiff);
        return timeDiff;
    }
    useEffect(() => {
        let expectedTime = new Date().getTime();
        let { hours, minutes, seconds } = timerData;
        expectedTime += (hours > 0) ? (hours * 3600000) : 0;
        expectedTime += minutes > 0 ? minutes * 60000 : 0;
        expectedTime += seconds > 0 ? seconds * 1000 : 0;
        setCountdownTime(expectedTime);
        console.log("Use Efffect 1 Set", expectedTime);
    }, [timerData]);
    
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
            console.log("Use Efffect 2 running for count ", TotalCount);
            setTimeout(() => {
              TotalCount++;
              setTimeLeft(calculateTimeLeft());
            }, 1000);
       
    });
    
    return (
      <p>
        Sample Timer
        {timeLeft.hours} - {timeLeft.minutes} - {timeLeft.seconds}
      </p>
    );
}

export default TimerComponent;