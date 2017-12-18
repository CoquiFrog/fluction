// window.alert('poopy pants22');
console.log('Hello hello hello');
var mytrack = document.getElementById('mytrack');
var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

duration.innerHTML = mytrack.duration

playButton.addEventListener('click',playOrPause,false);
muteButton.addEventListener('click',muteOrUnmute,false);

// This is an offered solution to the NaN error, but it is using an event listener
mytrack.addEventListener("loadedmetadata", function () {
    //you can display the duration now
    var minutes = parseInt(mytrack.duration / 60);
    var seconds = parseInt(mytrack.duration % 60);
    duration.innerHTML = minutes + ':' + seconds;
});
// ends here


// // This code was posted on youtube, but it doesn't fix NaN error, not sure what it does.
// setTimeout(()=>{
//     var minutes = parseInt(myTrack.duration/60)
//     var seconds = parseInt(myTrack.duration%60)
//     durationTime.innerHTML = minutes + ':' + seconds
//    }, 100)﻿




function playOrPause(){
    if(!mytrack.paused && !mytrack.ended){
        mytrack.pause();
        console.log("Function is working!");
        playButton.style.backgroundImage = 'url("/publicimages/play6.png")';
        window.clearInterval(updateTime);
    }
    else{
        mytrack.play();
        console.log("Function is working2222!");
        playButton.style.backgroundImage = 'url("/publicimages/pause.png")';
        updateTime = setInterval(update,500);
    }
}

function muteOrUnmute(){
    if(mytrack.muted == true){
        mytrack.muted = false;
        console.log("working here");
        muteButton.style.backgroundImage = 'url("/publicimages/mute2.jpg")';

    }
    else{
        mytrack.muted = true;
        console.log("working here222");
        muteButton.style.backgroundImage = 'url("/publicimages/unmute.png")';
    }
}

function update(){
    if(!mytrack.ended){
        var playedMinutes = parseInt(mytrack.currentTime/60);
        var playedSeconds = parseInt(mytrack.currentTime%60);
        currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
    }
    else{
        currentTime.innerHTML = "0.00";
        playButton.style.backgroundImage = 'url("/publicimages/play6.png")';
    }
}