import React, {useState , useEffect} from 'react';

const TimerHook = props => {
     const [timer, setTimer] = useState(0);
     let dispalyTime = "";

    
     const startTimer = () => {
       //setTimer(10);
       var currTime = new Date().getTime() + 10000;
       setTimer(currTime);
       console.log(currTime);
       //setInterval(timerCallback, 1000);
     };

     const timerCallback = () => {
       let diff = timer - new Date().getTime();
       console.log("Came here", diff, "Timer=> ", timer);
       if (diff < 0) {
         clearInterval(timerCallback);
       }
       dispalyTime = new Date(diff).toISOString().substr(11, 8);
       console.log(dispalyTime);
     };
 useEffect(() => {
    if (timer > 0) {
    console.log("Timer=> ", timer);
     dispalyTime = new Date(timer).toISOString().substr(11, 8);
     setTimer( timer - new Date().getTime() )
    }
 }, [timer]);
     return (
       <div className="App">
         <h1>Hello CodeSandbox</h1>
         <h2>Timer :{timer}</h2>
         <br />
         <h2>{dispalyTime}</h2>
         <button onClick={startTimer}>Start Timer</button>
       </div>
     );
};

export default TimerHook;