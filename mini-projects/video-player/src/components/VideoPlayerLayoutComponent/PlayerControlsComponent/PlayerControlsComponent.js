import React, { Component } from "react";
import PlaybackComponent from "./PlaybackComponent/PlaybackComponent";
import VideoOverlayComponent from "./VideoOverlayComponent/VideoOverlayComponent";

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
    return (
      <div className="videoOverlay" onClick={togglePlay}>
        <VideoOverlayComponent
          className="videoOverlay"
          isPlayerRunning={this.state.isPlayerRunning}
        />
        <div className="videoControls showControls">
          <div className="controlItems">
            <PlaybackComponent
              updatePlayerStatus={this.updateIsPlayerRunning}
              isPlayerRunning={this.state.isPlayerRunning}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerControlsComponent;
