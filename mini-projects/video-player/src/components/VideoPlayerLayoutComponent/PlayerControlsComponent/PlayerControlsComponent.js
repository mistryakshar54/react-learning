import React, { Component } from "react";
import PlaybackComponent from "./PlaybackComponent/PlaybackComponent";
import VideoOverlayComponent from "./VideoOverlayComponent/VideoOverlayComponent";
import PlayerIntervalComponent from './PlayerIntervalComponent/PlayerIntervalComponent';
class PlayerControlsComponent extends Component {
  state = {
    isPlayerRunning: false
  };
  updateIsPlayerRunning = playerRunning => {
    console.log("Is player running", playerRunning);
    this.setState({ isPlayerRunning: playerRunning });
  };
  render() {
    const { videoRef } = this.props;

    const togglePlay = () => {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
        this.setState({ isPlayerRunning: false });
      } else {
        videoRef.current.play();
        this.setState({ isPlayerRunning: true });
      }
    };
    const skipToInterval = ( skipDirection ) => {
      skipDirection === "forward"
        ? (videoRef.current.currentTime = videoRef.current.currentTime + 10)
        : (videoRef.current.currentTime = videoRef.current.currentTime - 10);
        videoRef.current.play();
        this.setState({ isPlayerRunning: true });
    }
    return (
      <div className="videoOverlay">
        <div onClick={togglePlay}>
          <VideoOverlayComponent
            className="videoOverlay"
            isPlayerRunning={this.state.isPlayerRunning}
          />
        </div>
        <div className="videoControls showControls">
          <div className="controlItems">
            <PlaybackComponent
              togglePlay={togglePlay}
              updatePlayerStatus={this.updateIsPlayerRunning}
              isPlayerRunning={this.state.isPlayerRunning}
            />
            <PlayerIntervalComponent skipToInterval={skipToInterval} />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerControlsComponent;
