// whiteGold watch page
var watchPage__whiteGold__toPinkGold = document.getElementById('watchPage__whiteGold__toPinkGold');
// Video
var watchPage_whiteGold_videobtn = document.getElementById("watchPage__whiteGold__video");
var whiteGold_video = document.getElementById("whiteGold__video");
var whiteGold_close = document.getElementById("whiteGold__video-close");

// spec
var watchPage__whiteGold__specbtn = document.getElementById("watchPage__whiteGold__spec");
var watchPage__whiteGold__specBtn1 = document.getElementById("watchPage__whiteGold-specBtn1");
var watchPage__whiteGold__specBtn2 = document.getElementById("watchPage__whiteGold-specBtn2");
var watchPage__whiteGold__specBtn3 = document.getElementById("watchPage__whiteGold-specBtn3");
var watchPage__whiteGold__specBtn4 = document.getElementById("watchPage__whiteGold-specBtn4");
var watchPage__whiteGold__specBtn5 = document.getElementById("watchPage__whiteGold-specBtn5");

// smoke text effect
// var smokeText_whiteGold = document.querySelector('.smoke__text-whiteGold');
// var smokeTextSpan_whiteGold = document.querySelectorAll('.smoke__text-whiteGold span');

// spec event
watchPage__whiteGold__specbtn.addEventListener("touchstart", handleWhiteGoldPage_spec, false);
watchPage__whiteGold__specBtn1.addEventListener("touchstart", handleWhiteGoldPage_specDetails1, false);
watchPage__whiteGold__specBtn2.addEventListener("touchstart", handleWhiteGoldPage_specDetails2, false);
watchPage__whiteGold__specBtn3.addEventListener("touchstart", handleWhiteGoldPage_specDetails3, false);
watchPage__whiteGold__specBtn4.addEventListener("touchstart", handleWhiteGoldPage_specDetails4, false);
watchPage__whiteGold__specBtn5.addEventListener("touchstart", handleWhiteGoldPage_specDetails5, false);

// Gellery
var watchPage__whiteGold__gallerybtn = document.getElementById("watchPage__whiteGold__gallery");
var whiteGold_galleryClose = document.getElementById("whiteGold__gallery-close");

// Swap page
watchPage__whiteGold__toPinkGold.addEventListener("touchstart", handlewhiteGoldPage_toPinkGold, false);

//Gallery event
watchPage__whiteGold__gallerybtn.addEventListener("touchstart", handleWhiteGoldPage_gallery, false);
// watchPage__whiteGold__gallerytoPinkGold.addEventListener("touchstart", handleWhiteGoldPage_galleryToPinkGold, false);
// watchPage__whiteGold__gallerytoWhiteGold.addEventListener("touchstart", handleWhiteGoldPage_galleryToWhiteGold, false);
// Video event
watchPage_whiteGold_videobtn.addEventListener("touchstart", handleWhiteGoldPage_video, false);
let clickcount_whitegold_video =0,clickcount_whitegold_spec =0,clickcount_whitegold_gallery=0;
let clickcount_whitegold_specPreventTouch =0;
let clickcount_whitegold_galleryToPinkGold =0; clickcount_whitegold_galleryToWhiteGold =0;
let clickcount_whiteGold_spec1 = 0,clickcount_whiteGold_spec2 = 0,clickcount_whiteGold_spec3 = 0,clickcount_whiteGold_spec4 = 0,clickcount_whiteGold_spec5 = 0;


// init 360deg image
let whiteGold_360Image = 1;

// video part
function handleWhiteGoldPage_video(e) {
    if(clickcount_whitegold_spec>=1){
    //no working
    }else{
    if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1&&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1) {
        clickcount_whitegold_video++; 
    gsap.to('#watchPage__whiteGold__video',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('.watchPage__whiteGold-Container',{duration:0.5,delay:0.3,display:'none',onComplete: playVideo_whiteGold});
    whiteGold_video.addEventListener('ended',whiteGoldVideoEndHandler,false);
  }
//   clickcount_whitegold_video++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}
}

function playVideo_whiteGold() {
    storyBanner_whiteGold.style.display="flex"
    watchPage__whiteGold_spec.style.display= "none";
    whiteGold_video.style.display="block";
    whiteGold_close.style.position="absolute";
    whiteGold_close.style.display="block";
    whiteGold_video.play();
}

function whiteGoldVideoEndHandler(e) {
    gsap.to('.watchPage__whiteGold-Container',{duration:2,display:'block',onComplete: completedVideo_whiteGold});
    whiteGold_close.style.display="none";
    whiteGold_video.style.display="none";
    storyBanner_whiteGold.style.display="none"
    watchPage__whiteGold_spec.style.display= "none";
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.5,opacity:1});
    gsap.to('#watchPage__whiteGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
};

function completedVideo_whiteGold() {
    clickcount_whitegold_video = 0;
    clickcount_whitegold_spec = 0;
    clickcount_whitegold_specPreventTouch =0;
    clickcount_whitegold_gallery = 0;
    clickcount_pinkGold_toPinkGold =0;
    clickcount_pinkGold_toWhiteGold =0;
    clearWhiteGoldSpec();
}

// close video
whiteGold_close.addEventListener("touchstart", function closeVideo(){
    whiteGold_close.style.display="none";
    whiteGold_video.pause();
    whiteGold_video.currentTime = 0;
    whiteGoldVideoEndHandler();
});

// clear spec
function clearWhiteGoldSpec() {
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:0.3,opacity:0});
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:0.3,opacity:0});
    clickcount_whiteGold_spec1 = 0;
    clickcount_whiteGold_spec2 = 0;
    clickcount_whiteGold_spec3 = 0;
    clickcount_whiteGold_spec4 = 0;
    clickcount_whiteGold_spec5 = 0;
}

// spec
function handleWhiteGoldPage_spec(e) {
    if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1&&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1&& clickcount_whitegold_specPreventTouch<1) {
        clickcount_whitegold_spec++; 
    gsap.to('#watchPage__whiteGold__spec',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.5,delay:0.3,opacity:0,onComplete: showSpec_whiteGold});
  }
  clickcount_whitegold_specPreventTouch++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function showSpec_whiteGold() {
    clickcount_whitegold_spec =1;
    gsap.to('#watchPage__whiteGold-spec',{duration:1,display:'block',onComplete:showPoint_whiteGold});
}

function showPoint_whiteGold() {
    gsap.fromTo('#watchPage__whiteGold-specBtn1',{opacity:0},{duration:1,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn2',{opacity:0},{duration:1,delay:0.2,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn3',{opacity:0},{duration:1,delay:0.4,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn4',{opacity:0},{duration:1,delay:0.6,opacity:0.8});
    gsap.fromTo('#watchPage__whiteGold-specBtn5',{opacity:0},{duration:1,delay:0.8,opacity:0.8,onComplete:function(){
        clickcount_whitegold_video = 0
        clickcount_whitegold_spec = 0
        clickcount_whitegold_gallery = 0;
        clickcount_pinkGold_toPinkGold =0;
        clickcount_pinkGold_toWhiteGold =0;
    }});
}

// spec details
function handleWhiteGoldPage_specDetails1() {
    if(clickcount_whiteGold_spec1 !== 1){
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.whiteGold__spec-1-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-specBtn1',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    clickcount_whiteGold_spec2 = 0;
    clickcount_whiteGold_spec3 = 0;
    clickcount_whiteGold_spec4 = 0;
    clickcount_whiteGold_spec5 = 0;
    }
    clickcount_whiteGold_spec1 = 1;
}

function handleWhiteGoldPage_specDetails2() {
    if(clickcount_whiteGold_spec2 !== 1){
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:1});
    gsap.fromTo('.whiteGold__spec-2-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-specBtn2',{opacity:1},{duration:0.3,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    clickcount_whiteGold_spec1 = 0;
    clickcount_whiteGold_spec3 = 0;
    clickcount_whiteGold_spec4 = 0;
    clickcount_whiteGold_spec5 = 0;
    }
    clickcount_whiteGold_spec2 =1;
}

function handleWhiteGoldPage_specDetails3() {
    if(clickcount_whiteGold_spec3 !== 1){
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.whiteGold__spec-3-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-specBtn3',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    clickcount_whiteGold_spec1 = 0;
    clickcount_whiteGold_spec2 = 0;
    clickcount_whiteGold_spec4 = 0;
    clickcount_whiteGold_spec5 = 0;
    }
    clickcount_whiteGold_spec3=1;
}

function handleWhiteGoldPage_specDetails4() {
    if(clickcount_whiteGold_spec4 !== 1){
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.whiteGold__spec-4-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-specBtn4',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    clickcount_whiteGold_spec1 = 0;
    clickcount_whiteGold_spec2 = 0;
    clickcount_whiteGold_spec3 = 0;
    clickcount_whiteGold_spec5 = 0;
    }
    clickcount_whiteGold_spec4 =1;
}

function handleWhiteGoldPage_specDetails5() {
    if(clickcount_whiteGold_spec5 !== 1){
    gsap.to('#whiteGold__spec-5',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'40%'});
    gsap.fromTo('.whiteGold__spec-5-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-specBtn5',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#whiteGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#whiteGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__whiteGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    clickcount_whiteGold_spec1 = 0;
    clickcount_whiteGold_spec2 = 0;
    clickcount_whiteGold_spec3 = 0;
    clickcount_whiteGold_spec4 = 0;
    }
    clickcount_whiteGold_spec5 =1;
}

//  Gallery
function handleWhiteGoldPage_gallery(e) {
    if(clickcount_whitegold_spec>=1){
    //no working
    }else{
 if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1 &&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1) {
    // swapImageToWhitegold();
    //  gsap.to('#watchPage__whiteGold__gallerytoWhiteGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     // watchPage__whiteGold__gallerytoWhiteGold.classList.remove("selected")
    //  gsap.to('#watchPage__whiteGold__gallerytoPinkGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    clickcount_whitegold_gallery++; 
    gsap.to('#watchPage__whiteGold__gallery',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('.watchPage__whiteGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_whiteGold});
  }
//   clickcount_whitegold_gallery++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}
}

function showGallery_whiteGold() {
    watchPage__whiteGold_spec.style.display= "none";
    watchPage__whiteGold_gallery.style.display="block";
    whiteGold_galleryClose.style.position="absolute";
    whiteGold_galleryClose.style.display="block";
}

// close gallery
whiteGold_galleryClose.addEventListener("touchstart", function closeGallery(){
    whiteGold_galleryClose.style.display="none";
    whiteGoldGalleryEndHandler();
});

function whiteGoldGalleryEndHandler(e) {
    gsap.to('.watchPage__whiteGold-Container',{duration:2,display:'block',onComplete: completedVideo_whiteGold});
    whiteGold_galleryClose.style.display="none";
    watchPage__whiteGold_gallery.style.display="none";
    watchPage__whiteGold_spec.style.display= "none";
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.5,opacity:1});
    gsap.to('#watchPage__whiteGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__whiteGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
};

// Gallery
// var whiteGoldslideIndex = 1;
// whiteGoldshowSlides(whiteGoldslideIndex);

// function whiteGoldplusSlides(n) {
//   whiteGoldshowSlides(whiteGoldslideIndex += n);
// }

// function whiteGoldCurrentSlide(n) {
//   whiteGoldshowSlides(whiteGoldslideIndex = n);
// }

// function whiteGoldshowSlides(n) {
//   var i;
//   var whiteGoldslides = document.getElementsByClassName("watchPage__whiteGold-gallery-mySlides");
//   var whiteGolddots = document.getElementsByClassName("watchPage__whiteGold-gallery-demo");
//   if (n > whiteGoldslides.length) {whiteGoldslideIndex = 1}
//   if (n < 1) {whiteGoldslideIndex = whiteGoldslides.length}
//   for (i = 0; i < whiteGoldslides.length; i++) {
//       whiteGoldslides[i].style.display = "none";
//   }
//   for (i = 0; i < whiteGolddots.length; i++) {
//       whiteGolddots[i].className = whiteGolddots[i].className.replace(" active", "");
//   }
//   whiteGoldslides[whiteGoldslideIndex-1].style.display = "block";
//   whiteGolddots[whiteGoldslideIndex-1].className += " active";
// }

// Gallery swap image to pink gold
function handleWhiteGoldPage_galleryToPinkGold(e) {
    if (clickcount_whitegold_galleryToPinkGold <1) {
    clickcount_whitegold_galleryToWhiteGold =1;
     gsap.to('#watchPage__whiteGold__gallerytoPinkGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     watchPage__whiteGold__gallerytoWhiteGold.classList.remove("selected")
     gsap.to('#watchPage__whiteGold__gallerytoWhiteGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:swapImageToPinkgold});
        
    // gsap.to('.watchPage__whiteGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_whiteGold});
  }
  clickcount_whitegold_galleryToPinkGold++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function swapImageToPinkgold() {
    document.getElementById("whiteGoldImageSmall1").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImageSmall2").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImageSmall3").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU05_PNG.png";
    document.getElementById("whiteGoldImageSmall4").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP04_PNG.png";
    document.getElementById("whiteGoldImageSmall5").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_backcase_GP11_PNG.png";
    document.getElementById("whiteGoldImageSmall6").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP08_PNG.png";
    document.getElementById("whiteGoldImageSmall7").style.display="block";
    document.getElementById("whiteGoldImageSmall8").style.display="block";

    document.getElementById("whiteGoldImage1").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImage2").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImage3").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_CU05_PNG.png";
    document.getElementById("whiteGoldImage4").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP04_PNG.png";
    document.getElementById("whiteGoldImage5").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_backcase_GP11_PNG.png";
    document.getElementById("whiteGoldImage6").src="assets/pinkGold/CODE_26393NR-OO-A002CA-01_closeup_GP08_PNG.png";
    clickcount_whitegold_galleryToWhiteGold = 0;
}

// Gallery swap image to white gold
function handleWhiteGoldPage_galleryToWhiteGold(e) {
    if (clickcount_whitegold_galleryToWhiteGold <1) {
        clickcount_whitegold_galleryToPinkGold=1;
     gsap.to('#watchPage__whiteGold__gallerytoWhiteGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     // watchPage__whiteGold__gallerytoWhiteGold.classList.remove("selected")
     gsap.to('#watchPage__whiteGold__gallerytoPinkGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:swapImageToWhitegold});
        
    // gsap.to('.watchPage__whiteGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_whiteGold});
  }
  clickcount_whitegold_galleryToWhiteGold++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function swapImageToWhitegold() {
    document.getElementById("whiteGoldImageSmall1").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImageSmall2").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP09_PNG.png";
    document.getElementById("whiteGoldImageSmall3").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP18_PNG.png";
    document.getElementById("whiteGoldImageSmall4").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_backcase_GP06_PNG.png";
    document.getElementById("whiteGoldImageSmall5").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImageSmall6").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP08_PNG.png";
    document.getElementById("whiteGoldImageSmall7").style.display="none";
    document.getElementById("whiteGoldImageSmall8").style.display="none";
    whiteGoldCurrentSlide(1);

    document.getElementById("whiteGoldImage1").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU04_PNG.png";
    document.getElementById("whiteGoldImage2").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP09_PNG.png";
    document.getElementById("whiteGoldImage3").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP18_PNG.png";
    document.getElementById("whiteGoldImage4").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_backcase_GP06_PNG.png";
    document.getElementById("whiteGoldImage5").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_CU03_PNG.png";
    document.getElementById("whiteGoldImage6").src="assets/whiteGold/CODE_26393NB-OO-A002CA-01_closeup_GP08_PNG.png";
    clickcount_whitegold_galleryToPinkGold =0;
}

function handlewhiteGoldPage_toPinkGold(e) {
    if (clickcount_whitegold_gallery <1 && clickcount_whitegold_spec <1 && clickcount_whitegold_video <1 &&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1) {
    gsap.to('#watchPage__whiteGold__toPinkGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    document.querySelector(".watchPage__whiteGold-selected").classList.remove("selected");
    gsap.to('.watchPage__whiteGold-selected',{duration:0.3,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:hideWhiteGold});
    }
    clickcount_pinkGold_toPinkGold++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function hideWhiteGold() {
     // document.querySelector('.watchPage__whiteGold-Container').style.display= 'none';
        // gsap.to('.watchPage__pinkGold-Container',{duration:1,position:'absolute',top:0,display:'block'})
    // smokeText_pinkGold.style.display="none";
    whiteGold_galleryClose.style.display="none";
  watchPage__whiteGold_gallery.style.display="none";
  watchPage__whiteGold_spec.style.display= "none";
  whiteGold_video.style.display="none";
  whiteGold_close.style.display="none";
  clearpinkGoldSpec();
  gsap.to('#watchPage__pinkGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__pinkGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__pinkGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    //  for (var i = 0; i <smokeTextSpan_pinkGold.length; i++) {
    //      smokeTextSpan_pinkGold[i].style.animation = "smoky 2s both";
    //      smokeTextSpan_pinkGold[i].style.animationDelay= `${1 + i/10}s`; 
    // }
    gsap.to('#watchPage__whiteGold-Scene',{duration:0.3,opacity:0,onComplete:function() {
        if(whiteGold_360Image!==0){
             window.CI360.destroy();
             whiteGold_360Image=0;
        }
    }});
    gsap.to('.watchPage__whiteGold-Header-title',{duration:0.3,opacity:0,onComplete:swapPageToPinkGold});
}

function swapPageToPinkGold() {
    gsap.to('.watchPage__pinkGold-Container',{duration:0,position:'absolute',top:0,display:'block',onComplete:function() {
        document.querySelector('.watchPage__whiteGold-Container').style.display= 'none';
        if(whiteGold_360Image!==1){
             window.CI360.init();
             whiteGold_360Image=1;
        }
    }});
    gsap.to('.watchPage__pinkGold-Header-title',{duration:0.6,delay:0.4,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-Scene',{opacity:0},{duration:0.6,delay:0.4,opacity:1,onComplete:function(){
        clickcount_pinkGold_toPinkGold =0;
        clickcount_pinkGold_toWhiteGold =0;
        clickcount_pinkGold_video = 0;
        clickcount_pinkGold_spec = 0;
        clickcount_pinkGold_specPreventTouch = 0;
        clickcount_pinkGold_gallery = 0;
    }});
    gsap.to('.watchPage__whiteGold-selected',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('#watchPage__whiteGold__toPinkGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    // gsap.fromTo('#watchPage__pinkGold__video',{display:'none',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1,display:'inline-block',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    // gsap.fromTo('#watchPage__pinkGold__spec',{display:'none',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:1,opacity:1,display:'inline-block',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    // gsap.fromTo('#watchPage__pinkGold__gallery',{display:'none',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:1,opacity:1,display:'inline-block',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
}
