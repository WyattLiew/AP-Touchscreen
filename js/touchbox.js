// disable rightclick
document.addEventListener("contextmenu", event => event.preventDefault());

var isContentActive = 0;

// timer declare
var timeoutInMiliseconds = 150000;
var timeoutId;

function startTimer() {
  // window.setTimeout returns an Id that can be used to start and stop a timer
  timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);
}

function doInactive() {
  // does whatever you need it to actually do - probably signs them out or stops polling the server for info
  
 // clear all the content
  window.CI360.destroy();
  whiteGold_360Image = 0;

  document.querySelector('.watchPage__whiteGold-Container').style.display= 'none';
  document.querySelector('.watchPage__pinkGold-Container').style.display= 'none';

  mainPageContainer.style.display="none";
  story.pause();
  story.currentTime = 0;
  storyBanner.style.display="none";
  story.style.display="none";

  whiteGold_galleryClose.style.display="none";
  watchPage__whiteGold_gallery.style.display="none";
  watchPage__whiteGold_spec.style.display= "none";
  whiteGold_video.style.display="none";
  whiteGold_close.style.display="none";

  pinkGold_galleryClose.style.display="none";
  watchPage__pinkGold_gallery.style.display="none";
  watchPage__pinkGold_spec.style.display= "none";
  pinkGold_video.style.display="none";
  pinkGold_close.style.display="none";
  story_close.style.display="none";

  clickcount_whitegold_video = 0;
  clickcount_whitegold_spec = 0;
  clickcount_whitegold_gallery = 0;
  clickcount_pinkGold_video = 0;
  clickcount_pinkGold_spec = 0;
  clickcount_pinkGold_specPreventTouch =0;
  clickcount_whitegold_specPreventTouch =0;
  clickcount_pinkGold_gallery = 0;
  clickcount_pinkGold_toPinkGold =0;
  clickcount_pinkGold_toWhiteGold =0;
  pinkGold_selected =0;
  whiteGold_selected =0;

  clearWhiteGoldSpec();
  clearpinkGoldSpec();
  
  gsap.to('#watchPage__whiteGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__whiteGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__whiteGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__pinkGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__pinkGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__pinkGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});

  // show Home page
  gsap.to('#homePage_scene',{duration:4,delay:1.5,opacity:1,display:'block'})
  isContentActive = 0;
  window.human = false;

  console.log("reset")

}

function resetTimer() {
  window.clearTimeout(timeoutId);
  if (isContentActive == 0) {
    startTimer();
  }
}

function setupTimers() {
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
  document.addEventListener("touchend", resetTimer, false);
  document.addEventListener("touchstart", resetTimer, false);

  startTimer();
}

// start timer
setupTimers();
