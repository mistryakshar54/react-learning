import React , {Component} from 'react';
import VideoPlayerComponent  from "./VideoPlayerComponent/VideoPlayerComponent";
import PlaybackComponent from './PlayerControlsComponent/PlaybackComponent/PlaybackComponent';

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
            <PlaybackComponent
              videoRef={videoPlayerRef}
              isPlayerRunning ={this.state.isPlayerRunning}
              updatePlayerStatus={this.updateIsPlayerRunning}
            />
          </div>
        );
    }
}

export default VideoPlayerLayout;
