import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayerLayout from './components/VideoPlayerLayoutComponent/VideoPlayerLayout';
function App() {
  // let vidsrc = "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <VideoPlayerLayout />
      </header>
    </div>
  );
}

export default App;
