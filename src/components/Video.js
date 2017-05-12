import React, { Component } from 'react';
import '../styles/Video-style.css';

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  render() {
    return (
       <div className='video_container'>
        <img style="-webkit-user-select: none;background-position: 0px 0px, 10px 10px;background-size: 20px 20px;background-image:linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%),linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);cursor: zoom-in;" 
        src="http://admin:Inrotech@mrknowitall3.hopto.org/Streaming/Channels/1/picture" 
        width="1073" height="603" />
      </div>
    );
  }
}

export default Video;
