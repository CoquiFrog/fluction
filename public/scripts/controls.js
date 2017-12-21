
var mytrack = document.getElementById('mytrack');
var playButton = document.getElementById('playButton');
var muteButton = document.getElementById('muteButton');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');


// needs to be set to the css px number in index.css
var barSize = 640;

var bar = document.getElementById('defaultBar');
var progressBar = document.getElementById('progressBar');

duration.innerHTML = mytrack.duration

playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);
bar.addEventListener('click', clickedBar, false);

// This is an offered solution to the NaN error, but it is using an event listener
mytrack.addEventListener("loadedmetadata", function () {
    //you can display the duration now
    var minutes = parseInt(mytrack.duration / 60);
    var seconds = pad(parseInt(mytrack.duration % 60));
    duration.innerHTML = minutes + ':' + seconds;
});
// ends here


// // This code was posted on youtube, but it doesn't fix NaN error, not sure what it does.
// setTimeout(()=>{
//     var minutes = parseInt(myTrack.duration/60)
//     var seconds = parseInt(myTrack.duration%60)
//     durationTime.innerHTML = minutes + ':' + seconds
//    }, 100)﻿




function playOrPause() {
    if (!mytrack.paused && !mytrack.ended) {
        mytrack.pause();
        playButton.style.backgroundImage = 'url("/publicimages/play6.png")';
        window.clearInterval(updateTime);
    }
    else {
        mytrack.play();
        playButton.style.backgroundImage = 'url("/publicimages/pause.png")';
        updateTime = setInterval(update, 500);
    }
}

function muteOrUnmute() {
    if (mytrack.muted == true) {
        mytrack.muted = false;
        muteButton.style.backgroundImage = 'url("/publicimages/mute2.jpg")';

    }
    else {
        mytrack.muted = true;
        muteButton.style.backgroundImage = 'url("/publicimages/unmute.png")';
    }
}

function update() {
    if (!mytrack.ended) {
        var playedMinutes = parseInt(mytrack.currentTime / 60);
        var playedSeconds = parseInt(mytrack.currentTime % 60);
        currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
        var size = parseInt(mytrack.currentTime * barSize / mytrack.duration);
        progressBar.style.width = size + "px";
    }
    else {
        currentTime.innerHTML = "0.00";
        playButton.style.backgroundImage = 'url("/publicimages/play6.png")';
        progressBar.style.width = "0px";
        window.clearInterval(updateTime);
    }
}

function clickedBar(e) {
    if (!mytrack.ended) {
        var mouseX = e.pageX - bar.offsetLeft;
        var newtime = mouseX * mytrack.duration / barSize;

        mytrack.currentTime = newtime;
        progressBar.style.width = mouseX + 'px';
    }
}

function pad(d){
    return (d < 10) ? '0' + d.toString() : d.toString();
}