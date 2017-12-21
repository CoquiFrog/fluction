import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Jukebox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>This is the jukebox</h2>
                <div id="wrapper">
    <audio id="mytrack" controls="controls" onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 1000)">
      <source src="/audio/Lullaby.mp3" type="audio/mp3" />
  </audio>
    
     {/* Place the word "controls" before the right pointing carrot at the end of the audio tag to view controls */}
   {/* <audio id="mytrack"> 
      <source src="/audio/Lullaby.mp3" type="audio/mp3"/>
    </audio> */}
    <nav>
      <div id="defaultBar">
        <div id="progressBar"></div>
      </div>
      <div id="buttons">
        <button type="button" id="playButton"></button>
        <button type="button" id="muteButton"></button>
        <span id="currentTime">0:00</span>  / 
        <span id="fullDuration">0:00</span>
      </div>
    </nav>
  </div>
            </div>
        )
    }

}

export default Jukebox;