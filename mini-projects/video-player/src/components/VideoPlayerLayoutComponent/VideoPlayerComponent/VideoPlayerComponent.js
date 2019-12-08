import React from "react";

const VideoPlayerComponent = React.forwardRef((props, ref) => {
  let vidsrc =
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4";
  return <video controls ref={ref} src={vidsrc} />;
});

export default VideoPlayerComponent;
