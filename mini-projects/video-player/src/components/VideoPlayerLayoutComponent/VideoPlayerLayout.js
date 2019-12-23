import React , {Component} from 'react';
import VideoPlayerComponent  from "./VideoPlayerComponent/VideoPlayerComponent";
import PlayerControlsComponent from './PlayerControlsComponent/PlayerControlsComponent';
import './VideoPlayerLayout.css';

const videoPlayerRef = React.createRef();
class VideoPlayerLayout extends Component{
    
    render(){
        return (
          <div className="videoPlayer">
            <div
              id="videoPlayerComp"
              className="videoPlayerContainer"
            >
              <VideoPlayerComponent ref={videoPlayerRef} />
              <PlayerControlsComponent
                videoRef={videoPlayerRef}
              />
            </div>
          </div>
        );
    }
}

export default VideoPlayerLayout;
