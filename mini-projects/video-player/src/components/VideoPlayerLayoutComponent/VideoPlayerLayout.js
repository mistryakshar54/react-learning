import React , {Component} from 'react';
import VideoPlayerComponent  from "./VideoPlayerComponent/VideoPlayerComponent";
import PlaybackComponent from './PlayerControlsComponent/PlaybackComponent/PlaybackComponent';
import VideoOverlayComponent from './VideoOverlayComponent/VideoOverlayComponent';
import './VideoPlayerLayout.css';

const videoPlayerRef = React.createRef();
class VideoPlayerLayout extends Component{
    state = {
        isPlayerRunning : false
    }
    updateIsPlayerRunning = ( playerRunning ) => {
        console.log("Is player running" , playerRunning);
        this.setState({ isPlayerRunning: playerRunning });
    }
    render(){
        return (
          <div>
            <VideoPlayerComponent ref={videoPlayerRef} />
            <div className="videoOverlay">
              <VideoOverlayComponent className="videoOverlay" isPlayerRunning={this.state.isPlayerRunning} />
            </div>
            <div className="videoControls showControls">
              <PlaybackComponent
                videoRef={videoPlayerRef}
                isPlayerRunning={this.state.isPlayerRunning}
                updatePlayerStatus={this.updateIsPlayerRunning}
              />
            </div>
          </div>
        );
    }
}

export default VideoPlayerLayout;
