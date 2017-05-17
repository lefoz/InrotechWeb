import React, { Component } from 'react';
import '../styles/Video-style.css';

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  constructor(){
    super()
    
  }
  
  render() {
    return (
       <div className='video_container'>
        <img src="http://admin:Inrotech@mrknowitall3.hopto.org/Streaming/Channels/1/preview" width="1073" height="603" />
      </div>
    );
  }
}

export default Video;
