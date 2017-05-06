import React, { Component } from 'react';
import '../styles/Video-style.css';

class Video extends Component {
  render() {
    return (
       <div className='video_container'>
        <embed className='vlc_player' type="application/x-vlc-plugin" pluginspage="rtsp://admin:Inrotech@192.168.1.64:554/Streaming/Channels/102/"/>
      </div>
    );
  }
}

export default Video;
