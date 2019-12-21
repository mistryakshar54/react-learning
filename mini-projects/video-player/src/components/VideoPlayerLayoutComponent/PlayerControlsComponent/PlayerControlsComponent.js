import React, { PureComponent } from "react";
import PlaybackComponent from "./PlaybackComponent/PlaybackComponent";
import VideoOverlayComponent from "./VideoOverlayComponent/VideoOverlayComponent";
import PlayerIntervalComponent from './PlayerIntervalComponent/PlayerIntervalComponent';
import FullScreenComponent from "./FullscreenComponent/FullScreenComponent";
import PropTypes from 'prop-types'; // ES6
import ProgressBarComponent from "./ProgressBarComponent/ProgressBarComponent";
import VolumeComponent from './VolumeComponent/VolumeComponent'
class PlayerControlsComponent extends PureComponent {
  state = {
    isPlayerRunning: false,
    isFullscreenModeEnabled: false,
    volumeEnabled: true,
    showPlayerControls: true
  };
  
  togglePlayerControls = toggleValue => {
    if (toggleValue !== this.state.showPlayerControls) {
      this.setState({ showPlayerControls: toggleValue });
    }
  };

  updateIsPlayerRunning = playerRunning => {
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
    const skipToInterval = skipDirection => {
      let currentVideoTime = videoRef.current.currentTime;
      let updatedTime = 0;
      if (skipDirection === "forward") {
        updatedTime = currentVideoTime + 10;
        if (updatedTime > videoRef.current.duration) {
          updatedTime = videoRef.current.duration;
        }
      } else {
        updatedTime = currentVideoTime - 10;
        if (updatedTime < 0) {
          updatedTime = 0;
        }
      }
      videoRef.current.currentTime = updatedTime;
      videoRef.current.play();
      this.setState({ isPlayerRunning: true });
    };

    const toggleVolume = () => {
      console.log("Toggled Volume");
      this.state.volumeEnabled
        ? (videoRef.current.volume = 0)
        : (videoRef.current.volume = 1);
      this.setState({ volumeEnabled: !this.state.volumeEnabled });
    };
    const enableFullScreenMode = enableFullscreen => {
      if (enableFullscreen === true) {
        document.getElementById("videoPlayerComp").requestFullscreen();
        this.setState({ isFullscreenModeEnabled: true });
      } else {
        document.exitFullscreen();
        this.setState({ isFullscreenModeEnabled: true });
      }
    };
    const getCurrentVideoPlayerTime = () => {
      return {
        currentTime: videoRef.current ? videoRef.current.currentTime : 0,
        videoDuration: videoRef.current ? videoRef.current.duration : 0
      };
    };

    return (
      <div
        className="videoOverlay"
        onMouseOver={() => {
          this.togglePlayerControls(true);
        }}
        onMouseLeave={() => {
          this.togglePlayerControls(false);
        }}
      >
        <div onClick={togglePlay}>
          <VideoOverlayComponent
            className="videoOverlay"
            isPlayerRunning={this.state.isPlayerRunning}
          />
        </div>
        <div
          className="videoControls showControls"
          style={{
            opacity: this.state.showPlayerControls ? 1 : 0
          }}
        >
          <div className="controlItems">
            <ProgressBarComponent
              isPlayerRunning={this.state.isPlayerRunning}
              getCurrentVideoPlayerTime={getCurrentVideoPlayerTime}
            />
          </div>
          <div className="controlItems">
            <PlaybackComponent
              togglePlay={togglePlay}
              updatePlayerStatus={this.updateIsPlayerRunning}
              isPlayerRunning={this.state.isPlayerRunning}
            />
            <PlayerIntervalComponent skipToInterval={skipToInterval} />
            <VolumeComponent
              isVolumeEnabled={this.state.volumeEnabled}
              toggleVolume={toggleVolume}
            />
            <FullScreenComponent
              enableFullScreenMode={enableFullScreenMode}
              isFullscreenEnabled={this.state.isFullscreenModeEnabled}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerControlsComponent;

PlayerControlsComponent.propTypes = {
  videoRef : PropTypes.object
}