import React, { Component } from 'react';
import '../styles/Video-style.css';
import source from '../images/false-2061132_1280.png'

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  constructor(){
    super()
    if (!window.sessionStorage.getItem('videoIP')==undefined) {
      this.src=window.sessionStorage.getItem('videoIP')
    } else {
    this.src=source
    }
  }
  
  //to get picture swap src .../preview with src .... /picture
  render() {
    return (
       <div className='video_container'>
        <img src={this.src} />
      </div>
    );
  }
}

export default Video;
