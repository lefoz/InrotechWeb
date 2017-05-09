import React, { Component } from 'react';
import '../styles/Video-style.css';

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  render() {
    return (
       <div className='video_container'>
{/*}      <object className="clsid-9BE31822-FDAD-461B-AD51-BE1D1C159921" 
      codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab" 
      id="vlc">
<embed 
    className="clsid-9BE31822-FDAD-461B-AD51-BE1D1C159921"
    type="application/x-vlc-plugin" 
    pluginspage="http://www.videolan.org" 
    version="VideoLAN.VLCPlugin.2"
    width="640"
    height="480"
    target="rtsp://admin:Inrotech@192.168.1.64:554/Streaming/Channels/102/"
    id="vlc">
</embed>
</object>*/}
<a rel="nofollow" href="http://131.229.88.140:80/" target="new">
<img id="image0" src="http://131.229.88.140:80/mjpg/video.mjpg?COUNTER" 
class="img-responsive img-rounded detailimage" alt="" 
title="Click here to enter the camera located in United States, region Massachusetts, Northampton"/>
</a>


      </div>
    );
  }
}

export default Video;
