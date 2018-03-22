(() => {
  console.log('video stuff loaded!');
 //variables come first!
 //grab the Video
 const vidPlayer = document.querySelector('video'),
        pauseButton = document.querySelectorAll('button')[0],
        playButton = document.querySelectorAll('button')[1],
        rewindButton = document.querySelectorAll('button')[2];

// functions go in the middle
function volOn() {
  vidPlayer.muted = false;
}
function volOff() {
  vidPlayer.muted = true;
}

function playvideo() {
  // any neme:) make the video play!
  vidPlayer.play();
}
function pausevideo() {
  vidPlayer.pause();
}
function rewindvideo() {
  vidPlayer.currentTime = 0;
  // currentTime -= 5     <-  move five seconds forward 
}

      vidPlayer.addEventListener('mouseover', volOn);
      vidPlayer.addEventListener('mouseout', volOff);

  playButton.addEventListener('click', playvideo);
  pauseButton.addEventListener('click', pausevideo);
  rewindButton.addEventListener('click', rewindvideo);
})();
