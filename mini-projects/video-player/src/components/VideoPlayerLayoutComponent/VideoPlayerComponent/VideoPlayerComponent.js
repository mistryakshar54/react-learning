import React from "react";

const VideoPlayerComponent = React.forwardRef((props, ref) => {
  let vidsrc = process.env.PUBLIC_URL + "vid.mp4";
return <div className="videoPlayerComponent">
    <video ref={ref} src={vidsrc} ></video>
  </div>
});

export default VideoPlayerComponent;
