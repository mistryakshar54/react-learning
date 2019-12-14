import React , {Component} from 'react';
import VideoPlayerComponent  from "./VideoPlayerComponent/VideoPlayerComponent";
import PlayerControlsComponent from './PlayerControlsComponent/PlayerControlsComponent';
import './VideoPlayerLayout.css';

const videoPlayerRef = React.createRef();
class VideoPlayerLayout extends Component{
    
    render(){
        return (
          <div className="videoPlayer">
            <div id="videoPlayerComp" className="videoPlayerContainer">
              <VideoPlayerComponent ref={videoPlayerRef} />
              <div className="videoOverlay top-gradient"></div>
              <PlayerControlsComponent videoRef={videoPlayerRef} />
              <div className="videoOverlay bottom-gradient"></div>
            </div>
          </div>
        );
    }
}

export default VideoPlayerLayout;
