import React , {useState} from 'react';

let timeInterval = 0;
const ProgressBarComponent = props => {
  let [progressBarWidth, setProgressbarWidth] = useState({
    width: "0%"
  });
  let { isPlayerRunning } = props;
  
  if (isPlayerRunning){
    if(timeInterval > 0){
      clearInterval(timeInterval);
    }
    timeInterval = setInterval(() => {
      let { currentTime, videoDuration } = props.getCurrentVideoPlayerTime();
      let width = 0;
      width = (100 - ((videoDuration - currentTime) / videoDuration) * 100); 
      setProgressbarWidth({
        width: `${width}%`
      });
    }, 500);
  }
  else{
    if (timeInterval > 0) {
      clearInterval(timeInterval);
    }
  }
    return (
      <div className="controlItems progressBarOuter">
        <div className="progressBar" style={{ ...progressBarWidth }}></div>
      </div>
    );
};

export default ProgressBarComponent;
