import React, { Component } from 'react';
import '../styles/Video-style.css';

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  constructor(){
    super()
    
  }
  
  //to get picture swap src with src .... /picture
  render() {
    return (
        <img src="http://217.7.233.140/cgi-bin/faststream.jpg?stream=full&fps=0" />
    );
  }
}

export default Video;
