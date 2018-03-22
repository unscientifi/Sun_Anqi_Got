(() => {
  console.log('video stuff loaded!');

 // variable stack goes here
 let sigils = document.querySelectorAll(".sigilContainer"),
      lightbox = document.querySelector('.lightbox'),
      closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
      vidPlayer = document.querySelector('video');

// function in the middle
  function showHouseVideo() {
    //debugger;
    lightbox.classList.add('show-lightbox');
    //make the video play
    vidPlayer.play();
  }

  function closeLightBox() {
    lightbox.classList.remove('show-lightbox');
    //stop the video and rewind it to 0
    vidPlayer.pause();
    vidPlayer.currentTime = 0;
  }

// event handling at the bottom
  sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
  closeLightBoxButton.addEventListener('click', closeLightBox);
})();
