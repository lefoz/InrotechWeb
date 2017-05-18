import React, { Component } from 'react';
import '../styles/Video-style.css';

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  constructor(props){
    super(props)
    this.source = "http://"+this.props.uri+"/Streaming/Channels/1/preview"
  }
  
  //to get picture swap src with src .... /picture
  render() {
    return (
       <div className='video_container'>
        <img src={this.source} width="1073" height="603" />
      </div>
    );
  }
}

export default Video;
