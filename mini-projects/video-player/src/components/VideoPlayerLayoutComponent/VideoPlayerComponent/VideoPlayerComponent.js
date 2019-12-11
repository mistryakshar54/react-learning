import React from "react";

const VideoPlayerComponent = React.forwardRef((props, ref) => {
  let vidsrc =
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4";
return <div className="videoPlayerComponent">
    <video ref={ref} src={vidsrc} ></video>
  </div>
});

export default VideoPlayerComponent;
