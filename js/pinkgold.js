// pinkGold watch page
var watchPage__pinkGold__toWhiteGold = document.getElementById('watchPage__pinkGold__toWhiteGold');
// Video
var watchPage_pinkGold_videobtn = document.getElementById("watchPage__pinkGold__video");
var pinkGold_video = document.getElementById("pinkGold__video");
var pinkGold_close = document.getElementById("pinkGold__video-close");

// spec
var watchPage__pinkGold__specbtn = document.getElementById("watchPage__pinkGold__spec");
var watchPage__pinkGold__specBtn1 = document.getElementById("watchPage__pinkGold-specBtn1");
var watchPage__pinkGold__specBtn2 = document.getElementById("watchPage__pinkGold-specBtn2");
var watchPage__pinkGold__specBtn3 = document.getElementById("watchPage__pinkGold-specBtn3");
var watchPage__pinkGold__specBtn4 = document.getElementById("watchPage__pinkGold-specBtn4");
var watchPage__pinkGold__specBtn5 = document.getElementById("watchPage__pinkGold-specBtn5");
// var pinkGold__spec__360Image = document.getElementById("pinkGold__spec-360image");
// smoke text effect
// var smokeText_pinkGold = document.querySelector('.smoke__text-pinkGold');
// var smokeTextSpan_pinkGold = document.querySelectorAll('.smoke__text-pinkGold span');

// spec event
watchPage__pinkGold__specbtn.addEventListener("touchstart", handlepinkGoldPage_spec, false);
watchPage__pinkGold__specBtn1.addEventListener("touchstart", handlepinkGoldPage_specDetails1, false);
watchPage__pinkGold__specBtn2.addEventListener("touchstart", handlepinkGoldPage_specDetails2, false);
watchPage__pinkGold__specBtn3.addEventListener("touchstart", handlepinkGoldPage_specDetails3, false);
watchPage__pinkGold__specBtn4.addEventListener("touchstart", handlepinkGoldPage_specDetails4, false);
watchPage__pinkGold__specBtn5.addEventListener("touchstart", handlepinkGoldPage_specDetails5, false);

// pinkGold__spec__360Image.addEventListener("touchstart",handlepinkGoldPage_360Image,false);
// Gellery
var watchPage__pinkGold__gallerybtn = document.getElementById("watchPage__pinkGold__gallery");
var pinkGold_galleryClose = document.getElementById("pinkGold__gallery-close");


// Swap page
watchPage__pinkGold__toWhiteGold.addEventListener("touchstart", handlepinkGoldPage_toWhiteGold, false);
//Gallery event
watchPage__pinkGold__gallerybtn.addEventListener("touchstart", handlepinkGoldPage_gallery, false);

// Video event
watchPage_pinkGold_videobtn.addEventListener("touchstart", handlepinkGoldPage_video, false);
let clickcount_pinkGold_video =0,clickcount_pinkGold_spec =0,clickcount_pinkGold_gallery=0;
let clickcount_pinkGold_specPreventTouch =0;
let clickcount_pinkGold_galleryToPinkGold =0; clickcount_pinkGold_galleryTopinkGold =0;
let clickcount_pinkGold_spec1 = 0,clickcount_pinkGold_spec2 = 0,clickcount_pinkGold_spec3 = 0,clickcount_pinkGold_spec4 = 0,clickcount_pinkGold_spec5 = 0;

// init 360deg image
let pinkGold_360Image = 1;

// video part
function handlepinkGoldPage_video(e) {
    if(clickcount_pinkGold_spec>=1){
    //no working
    }else{
    if (clickcount_pinkGold_gallery <1 && clickcount_pinkGold_spec <1 && clickcount_pinkGold_video <1 &&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1) {
        clickcount_pinkGold_video++;
    gsap.to('#watchPage__pinkGold__video',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('.watchPage__pinkGold-Container',{duration:0.5,delay:0.3,display:'none',onComplete: playVideo_pinkGold});
    pinkGold_video.addEventListener('ended',pinkGoldVideoEndHandler,false);
  }
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}
}

function playVideo_pinkGold() {
    storyBanner_pinkGold.style.display="flex";
    watchPage__pinkGold_spec.style.display= "none";
    pinkGold_video.style.display="block";
    pinkGold_close.style.position="absolute";
    pinkGold_close.style.display="block";
    // pinkGold__spec__360Image.style.display="none";
    pinkGold_video.play();
}

function pinkGoldVideoEndHandler(e) {
    gsap.to('.watchPage__pinkGold-Container',{duration:2,display:'block',onComplete: completedVideo_pinkGold});
    pinkGold_close.style.display="none";
    pinkGold_video.style.display="none";
    storyBanner_pinkGold.style.display="none"
    watchPage__pinkGold_spec.style.display= "none";
    gsap.to('#watchPage__pinkGold-Scene',{duration:0.5,opacity:1});
    gsap.to('#watchPage__pinkGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__pinkGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__pinkGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
};

function completedVideo_pinkGold() {
    // pinkGold__spec__360Image.style.display="none";
    clickcount_pinkGold_video = 0
    clickcount_pinkGold_spec = 0
    clickcount_pinkGold_specPreventTouch =0;
    clickcount_pinkGold_gallery = 0;
    clickcount_pinkGold_toPinkGold =0;
    clickcount_pinkGold_toWhiteGold =0;
    clearpinkGoldSpec();
}

// close video
pinkGold_close.addEventListener("touchstart", function closeVideo(){
    pinkGold_close.style.display="none";
    pinkGold_video.pause();
    pinkGold_video.currentTime = 0;
    pinkGoldVideoEndHandler();
});

// clear spec
function clearpinkGoldSpec() {
    gsap.to('#pinkGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn1',{duration:0.3,opacity:0});
    gsap.to('#pinkGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn2',{duration:0.3,opacity:0});
    gsap.to('#pinkGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn3',{duration:0.3,opacity:0});
    gsap.to('#pinkGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn4',{duration:0.3,opacity:0});
    gsap.to('#pinkGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn5',{duration:0.3,opacity:0});
    clickcount_pinkGold_spec1 = 0;
    clickcount_pinkGold_spec2 = 0;
    clickcount_pinkGold_spec3 = 0;
    clickcount_pinkGold_spec4 = 0;
    clickcount_pinkGold_spec5 = 0;
}

// spec
function handlepinkGoldPage_spec(e) {
    if (clickcount_pinkGold_gallery <1 && clickcount_pinkGold_spec <1 && clickcount_pinkGold_video <1 && clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1 && clickcount_pinkGold_specPreventTouch<1) {
        clickcount_pinkGold_spec++;
        clickcount_pinkGold_specPreventTouch++;
        gsap.to('#watchPage__pinkGold__spec',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('#watchPage__pinkGold-Scene',{duration:0.5,delay:0.3,opacity:0,onComplete: showSpec_pinkGold});
  }
  
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function showSpec_pinkGold() {
    clickcount_pinkGold_spec =1;
    gsap.to('#watchPage__pinkGold-spec',{duration:1,display:'block',onComplete:showPoint_pinkGold});
}

function showPoint_pinkGold() {
    gsap.fromTo('#watchPage__pinkGold-specBtn1',{opacity:0},{duration:1,opacity:0.8});
    gsap.fromTo('#watchPage__pinkGold-specBtn2',{opacity:0},{duration:1,delay:0.2,opacity:0.8});
    gsap.fromTo('#watchPage__pinkGold-specBtn3',{opacity:0},{duration:1,delay:0.4,opacity:0.8});
    gsap.fromTo('#watchPage__pinkGold-specBtn4',{opacity:0},{duration:1,delay:0.6,opacity:0.8});
    gsap.fromTo('#watchPage__pinkGold-specBtn5',{opacity:0},{duration:1,delay:0.8,opacity:0.8,onComplete:function(){
    // gsap.to(pinkGold__spec__360Image,{duration:1,display:'block',position:'absolute'});
    clickcount_pinkGold_video = 0
    clickcount_pinkGold_spec = 0
    clickcount_pinkGold_gallery = 0;
    clickcount_pinkGold_toPinkGold =0;
    clickcount_pinkGold_toWhiteGold =0;
    }});
}

//spec to 360 Image
// function handlepinkGoldPage_360Image(){
//     watchPage__pinkGold_spec.style.display= "none";
//     gsap.to('#watchPage__pinkGold-Scene',{duration:0.5,opacity:1});
//     gsap.to('#watchPage__pinkGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
//     gsap.to('#watchPage__pinkGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
//     gsap.to('#watchPage__pinkGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:function(){
//         completedVideo_pinkGold();
//     }});
// }

// spec details
function handlepinkGoldPage_specDetails1() {
    if(clickcount_pinkGold_spec1 !== 1){
    gsap.to('#pinkGold__spec-1',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.pinkGold__spec-1-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-specBtn1',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#pinkGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    clickcount_pinkGold_spec2 = 0;
    clickcount_pinkGold_spec3 = 0;
    clickcount_pinkGold_spec4 = 0;
    clickcount_pinkGold_spec5 = 0;
    }
    clickcount_pinkGold_spec1 = 1;
}

function handlepinkGoldPage_specDetails2() {
    if(clickcount_pinkGold_spec2 !== 1){
    gsap.to('#pinkGold__spec-2',{duration:0.3,opacity:1});
    gsap.fromTo('.pinkGold__spec-2-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-specBtn2',{opacity:1},{duration:0.3,delay:0.3,opacity:0});

    // recover
    gsap.to('#pinkGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    clickcount_pinkGold_spec1 = 0;
    clickcount_pinkGold_spec3 = 0;
    clickcount_pinkGold_spec4 = 0;
    clickcount_pinkGold_spec5 = 0;
    }
    clickcount_pinkGold_spec2 =1;
}

function handlepinkGoldPage_specDetails3() {
    if(clickcount_pinkGold_spec3 !== 1){
    gsap.to('#pinkGold__spec-3',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.pinkGold__spec-3-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-specBtn3',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#pinkGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    clickcount_pinkGold_spec1 = 0;
    clickcount_pinkGold_spec2 = 0;
    clickcount_pinkGold_spec4 = 0;
    clickcount_pinkGold_spec5 = 0;
    }
    clickcount_pinkGold_spec3 = 1;
}

function handlepinkGoldPage_specDetails4() {
    if(clickcount_pinkGold_spec4 !== 1){
    gsap.to('#pinkGold__spec-4',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'50%'});
    gsap.fromTo('.pinkGold__spec-4-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-specBtn4',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#pinkGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-5',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn5',{duration:1,delay:0.3,opacity:1});
    clickcount_pinkGold_spec1 = 0;
    clickcount_pinkGold_spec2 = 0;
    clickcount_pinkGold_spec3 = 0;
    clickcount_pinkGold_spec5 = 0;
    }
    clickcount_pinkGold_spec4 =1;
}

function handlepinkGoldPage_specDetails5() {
    if(clickcount_pinkGold_spec5 !== 1){
    gsap.to('#pinkGold__spec-5',{duration:0.3,opacity:1});
    gsap.fromTo('.solidLine',{opacity:0,width:'0%'},{duration:1,opacity:1,width:'40%'});
    gsap.fromTo('.pinkGold__spec-5-text',{opacity:0},{duration:1.5,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-specBtn5',{opacity:1},{duration:0.5,delay:0.3,opacity:0});

    // recover
    gsap.to('#pinkGold__spec-1',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn1',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-2',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn2',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-3',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn3',{duration:1,delay:0.3,opacity:1});
    gsap.to('#pinkGold__spec-4',{duration:0.3,opacity:0});
    gsap.to('#watchPage__pinkGold-specBtn4',{duration:1,delay:0.3,opacity:1});
    clickcount_pinkGold_spec1 = 0;
    clickcount_pinkGold_spec2 = 0;
    clickcount_pinkGold_spec3 = 0;
    clickcount_pinkGold_spec4 = 0;
    }
    clickcount_pinkGold_spec5 =1;
}

//  Gallery
function handlepinkGoldPage_gallery(e) {
    if(clickcount_pinkGold_spec>=1){
    //no working
    }else{
 if (clickcount_pinkGold_gallery <1 && clickcount_pinkGold_spec <1 && clickcount_pinkGold_video <1 &&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1) {
    // swapImageTopinkGold();
    //  gsap.to('#watchPage__pinkGold__gallerytopinkGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
     // watchPage__pinkGold__gallerytopinkGold.classList.remove("selected")
    //  gsap.to('#watchPage__pinkGold__gallerytoPinkGold',{duration:2,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    clickcount_pinkGold_gallery++;
    gsap.to('#watchPage__pinkGold__gallery',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('.watchPage__pinkGold-Container',{duration:0.2,delay:0.3,display:'none',onComplete: showGallery_pinkGold});
  }
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}
}

function showGallery_pinkGold() {
    watchPage__pinkGold_spec.style.display= "none";
    watchPage__pinkGold_gallery.style.display="block";
    pinkGold_galleryClose.style.position="absolute";
    pinkGold_galleryClose.style.display="block";
    // pinkGold__spec__360Image.style.display="none";
}

// close gallery
pinkGold_galleryClose.addEventListener("touchstart", function closeGallery(){
    pinkGold_galleryClose.style.display="none";
    pinkGoldGalleryEndHandler();
});

function pinkGoldGalleryEndHandler(e) {
    gsap.to('.watchPage__pinkGold-Container',{duration:2,display:'block',onComplete: completedVideo_pinkGold});
    pinkGold_galleryClose.style.display="none";
    watchPage__pinkGold_gallery.style.display="none";
    watchPage__pinkGold_spec.style.display= "none";
    gsap.to('#watchPage__pinkGold-Scene',{duration:0.5,opacity:1});
    gsap.to('#watchPage__pinkGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__pinkGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    gsap.to('#watchPage__pinkGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
}

function handlepinkGoldPage_toWhiteGold(e) {
    if (clickcount_pinkGold_gallery <1 && clickcount_pinkGold_spec <1 && clickcount_pinkGold_video <1 &&clickcount_pinkGold_toWhiteGold<1 && clickcount_pinkGold_toPinkGold<1) {
    gsap.to('#watchPage__pinkGold__toWhiteGold',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    document.querySelector(".watchPage__pinkGold-selected").classList.remove("selected");
    gsap.to('.watchPage__pinkGold-selected',{duration:0.3,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff",onComplete:hidePinkGold});
    }
    clickcount_pinkGold_toWhiteGold++;
    e.preventDefault();
    e.stopImmediatePropagation();
    return false
}

function hidePinkGold() {
     // document.querySelector('.watchPage__whiteGold-Container').style.display= 'none';
        // gsap.to('.watchPage__pinkGold-Container',{duration:1,position:'absolute',top:0,display:'block'})
    // smokeText_whiteGold.style.display="none";
    pinkGold_galleryClose.style.display="none";
  watchPage__pinkGold_gallery.style.display="none";
  watchPage__pinkGold_spec.style.display= "none";
  pinkGold_video.style.display="none";
  pinkGold_close.style.display="none";
//   pinkGold__spec__360Image.style.display="none";
  clearWhiteGoldSpec();
  gsap.to('#watchPage__whiteGold__video',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__whiteGold__spec',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
  gsap.to('#watchPage__whiteGold__gallery',{duration:1,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    //  for (var i = 0; i <smokeTextSpan_pinkGold.length; i++) {
    //      smokeTextSpan_pinkGold[i].style.animation = "smoky 2s both";
    //      smokeTextSpan_pinkGold[i].style.animationDelay= `${1 + i/10}s`; 
    // }
    gsap.to('#watchPage__pinkGold-Scene',{duration:0.3,opacity:0,onComplete:function() {
        if(whiteGold_360Image!==0){
             window.CI360.destroy();
             whiteGold_360Image=0;
        }
    }});
    gsap.to('.watchPage__pinkGold-Header-title',{duration:0.3,opacity:0,onComplete:swapPageToWhiteGold});
}

function swapPageToWhiteGold() {
    gsap.to('.watchPage__whiteGold-Container',{duration:0,position:'absolute',top:0,display:'block',onComplete:function() {
        document.querySelector('.watchPage__pinkGold-Container').style.display= 'none';
        if(whiteGold_360Image!==1){
             window.CI360.init();
             whiteGold_360Image=1;
        }
    }});
    gsap.to('.watchPage__whiteGold-Header-title',{duration:0.6,delay:0.4,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-Scene',{opacity:0},{duration:0.6,delay:0.4,opacity:1,onComplete:function(){
        clickcount_pinkGold_toPinkGold =0;
        clickcount_pinkGold_toWhiteGold =0;
        clickcount_whitegold_video = 0;
        clickcount_whitegold_spec = 0;
        clickcount_whitegold_specPreventTouch=0;
        clickcount_whitegold_gallery = 0;
        // whiteGold__spec__360Image.style.display="none";
    }});
    gsap.to('.watchPage__pinkGold-selected',{duration:0.3,border: "2px solid #747474",boxShadow: "1px 1px 8px 13px #747474",color: "#373737"});
    gsap.to('#watchPage__pinkGold__toWhiteGold',{duration:0.3,border: "2px solid #ffffff",boxShadow: "1px 1px 8px 13px #7f6f6f6",color: "#ffffff"});
    // gsap.fromTo('#watchPage__whiteGold__video',{opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none",display:'none'},{duration:1.5,opacity:1,delay:1,display:'inline-block',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    // gsap.fromTo('#watchPage__whiteGold__spec',{opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none",display:'none'},{duration:1.5,delay:1,opacity:1,display:'inline-block',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    // gsap.fromTo('#watchPage__whiteGold__gallery',{opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none",display:'none'},{duration:1.5,delay:1,opacity:1,display:'inline-block',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
}







