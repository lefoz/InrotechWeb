import React, { Component } from 'react';
import '../styles/Video-style.css';

//https://wiki.videolan.org/Documentation:WebPlugin/

//https://github.com/Streamedian/html5_rtsp_player/wiki/HTML5-RTSP-Player

class Video extends Component {
  render() {
    return (
       <div className='video_container'>
      <object className="clsid-9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab" id="vlc">
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
</object>
<object className="clsid-9BE31822-FDAD-461B-AD51-BE1D1C159921"
codebase="http://downloads.videolan.org/pub/videolan/vlc/latest/win32/axvlc.cab"
id="vlc" events="True">
<param name="Src" value="rtsp://admin:Inrotech@192.168.1.64:554/Streaming/Channels/101" />
<param name="ShowDisplay" value="True" />
<param name="AutoLoop" value="False" />
<param name="AutoPlay" value="True" />
</object>


      </div>
    );
  }
}

export default Video;
