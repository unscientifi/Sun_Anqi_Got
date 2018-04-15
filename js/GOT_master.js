(() => {
  console.log('DOT STUFF');

  String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); }

 // variable stack goes here
 let sigils = document.querySelectorAll(".sigilContainer"),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
      vidPlayer = document.querySelector('video'),
      vidControl = document.querySelector('#playBtn'),
      volControl = document.querySelector('#speaker'),
      volume = document.querySelector('#volume'),
      imageBanner = document.querySelector('#houseImages'),
      fillBar = document.querySelector('#fill'),
      currentTime = document.querySelector('#currentTime'),
      element = document.querySelector('#houseContents');



//function in the middle


  //
  // const houseInfo = document.querySelector('#houseDetail');
  //
  // houseInfo.innerHTML += '<p>House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen\'s invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.</p>';


  function scrollBanners(offset) {
  //move the banner image to the left
    let moveIt = offset * 600 + "px";

    imageBanner.style.right = moveIt;
  }

// !!! text detail !!! I spent a whole day trying to figure out this part
//   var element = document.getElementById('houseContents');
//
//     function showContent (){
//
//      if() {
//           element.style.visibility = 'visible';
// }  else() {
//           element.style.display = 'none';
//
// }

  function showHouseVideo() {
      scrollBanners();
    {
    scrollBanners(this.dataset.offset);
    let houseName = this.className.split(' ')[1].capIt();
    //split apart the class name on the element, grab the house from the result
    document.querySelector('h1').textContent = `House ${houseName}`;
    //animation first
    setTimeout(function() {
      lightbox.classList.add('show-lightbox');
  }, 1000);
    //make the video play
    vidPlayer.src = `video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`
    vidPlayer.load();
    vidPlayer.play();

    element.style.display = 'none';
  }

 }

  function playOrPause() {
    // let pnp = this.firstElementChild;
    //debugger;
    if (vidPlayer.paused == true) {
      vidPlayer.play();
      document.getElementById("playBtn").src = "images/Pause.png";
    } else {
    vidPlayer.pause();
    document.getElementById("playBtn").src = "images/Play.png";
  }
}

function muteOrUnmute() {
  if (vidPlayer.muted) {
    vidPlayer.muted = false;
    document.getElementById("speaker").src = "images/Speaker.png";
    volume.value = 100;
  } else {
    vidPlayer.muted = true
  document.getElementById("speaker").src = "images/Mute.png";
      volume.value = 0;
  }
}

  function setVolume() {
    vidPlayer.volume = volume.value / 100;
  }


  function vidTime() {
     var position = vidPlayer.currentTime / vidPlayer.duration;

     fillBar.style.width = position * 100 + '%';
     convertTime(Math.round(vidPlayer.currentTime));
  }

  function convertTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;

            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent = min + ":" + sec;

            totalTime(Math.round(vidPlayer.duration));
            if(vidPlayer.ended){
            	$("#playBtn").attr("src","Play.png");
            }
        }

function totalTime(seconds)
        {
            var min = Math.floor(seconds / 60);
            var sec = seconds % 60;

            min = (min < 10) ? "0" + min : min;
            sec = (sec < 10) ? "0" + sec : sec;
            currentTime.textContent += " / " + min + ":" + sec;
        }


function closeLightBox() {
          lightbox.classList.remove('show-lightbox');
          //stop the video and rewind it to 0
          vidPlayer.pause();
          vidPlayer.currentTime = 0;
        }

function houseContents() {
        element.style.display= 'block';
}

// event handling at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);
  closeLightBoxButton.addEventListener('click', houseContents);
  vidPlayer.addEventListener('ended', closeLightBox);
  vidControl.addEventListener('click', playOrPause);
  volControl.addEventListener('click',muteOrUnmute);
  volume.addEventListener('change', setVolume);
  vidPlayer.addEventListener('timeupdate',vidTime);
})();
