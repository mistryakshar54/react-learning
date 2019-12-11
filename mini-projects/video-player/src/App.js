import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayerLayout from './components/VideoPlayerLayoutComponent/VideoPlayerLayout';
function App() {
  // let vidsrc = "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4";
  return (
    <div className="App">
      <header className="App-header">
        <VideoPlayerLayout />
      </header>
    </div>
  );
}

export default App;
