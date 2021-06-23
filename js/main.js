var mainPage_whiteGold_btn = document.getElementById("mainPage-whiteGold-button");
var mainPage_pinkGold_btn = document.getElementById("mainPage-pinkGold-button");

var homePage_scene = document.getElementById("homePage_scene");
var storyBanner = document.querySelector(".story_banner");
var storyBanner_pinkGold = document.querySelector(".story_banner-pinkGold");
var storyBanner_whiteGold = document.querySelector(".story_banner-whiteGold");
var mainPageContainer = document.querySelector(".mainPage-Container");
var watchPage__whiteGold_spec = document.getElementById("watchPage__whiteGold-spec");
var watchPage__whiteGold_gallery = document.getElementById("watchPage__whiteGold-gallery");
var watchPage__pinkGold_spec = document.getElementById("watchPage__pinkGold-spec");
var watchPage__pinkGold_gallery = document.getElementById("watchPage__pinkGold-gallery");

var story_close = document.getElementById("story__video-close");

let pinkGold_selected =0,whiteGold_selected =0;
var clickcount_pinkGold_toWhiteGold=0,clickcount_pinkGold_toPinkGold=0;

const mainPage_timeline = gsap.timeline({paused:true,defaults:{duration:1}})
    .to('.mainPage-Container',{duration:1.5,position:'absolute',top:0})
    .fromTo('.mainPage__box-Container',{x:'-100%'},{opacity:1,x:'0%'})
    .fromTo('.mainPage__box-Container-right',{x:'100%'},{opacity:1,x:'0%'},'<')
    
    .fromTo('.mainPage__image-container',{opacity:0},{opacity:1})
    .fromTo('.mainPage__image-container-right',{opacity:0},{opacity:1},'<')
    .fromTo('.mainPage__title',{opacity:0,y:70},{opacity:1,y:0})
    .fromTo('.mainPage__title-right',{opacity:0,y:70},{opacity:1,y:0},'<')
    .fromTo('.mainPage__action',{opacity:0},{opacity:1},)
    .fromTo('.mainPage__action-right',{opacity:0},{opacity:1},'<');

mainPage_timeline.eventCallback("onReverseComplete", completeReverseWhiteGoldHandler);

mainPage_whiteGold_btn.addEventListener("touchstart", handleWhiteGoldPage, false);
mainPage_pinkGold_btn.addEventListener("touchstart", handlePinkGoldPage, false);

var ts_hp = document.getElementById('touchSurface_homePage');
    var ts_hp_inner = document.getElementById('touchSurface_homePage_inner');
     var story = document.getElementById("story");
    var hidetimer = null
    swipedetect(ts_hp, function(swipedir){
        if (swipedir != 'none'){
            console.log(swipedir);
            gsap.to('#homePage_scene',{duration:1,opacity:0});
            
            storyBanner.style.display="flex";
             story.style.display="block";
             story_close.style.position="absolute";
            story_close.style.display="block";
             story.play();
             story.addEventListener('ended',storyEndHandler,false);
        }
    })

function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}

// close video
story_close.addEventListener("touchstart", function closeStoryVideo(){
    story_close.style.display="none";
    mainPage_timeline.timeScale(1);
    gsap.to('#story',{duration:0.6,display:"none",onComplete:function(){
        mainPageContainer.style.display="block";
        mainPage_timeline.restart();
        story.pause();
        story.currentTime = 0; 
    }});
});

function storyEndHandler(e) {
    mainPage_timeline.timeScale(1);
    story_close.style.display="none";
    gsap.to('#story',{duration:0.6,delay:0.5,display:"none",onComplete:function(){mainPageContainer.style.display="block",mainPage_timeline.restart()}});
    }

function handleWhiteGoldPage(e) {
    if(mainPage_timeline.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    mainPage_timeline.timeScale(2)
    mainPage_timeline.reverse();
    whiteGold_selected = 1;
}

function completeReverseWhiteGoldHandler() {
    // Clear block
    homePage_scene.style.display="none";
    storyBanner.style.display="none";
    mainPageContainer.style.display="none";
    clickcount_pinkGold_toWhiteGold =1;
    if(whiteGold_selected ==1 && pinkGold_selected ==0){
        document.querySelector('.watchPage__pinkGold-Container').style.display= 'none';
    gsap.to('.watchPage__whiteGold-Container',{duration:1,position:'absolute',top:0,display:'block',onComplete:function() {
        if(whiteGold_360Image!==1){
             window.CI360.init();
             whiteGold_360Image=1;
        }
    }})
    gsap.fromTo('.watchPage__whiteGold-Header-title',{opacity:0},{duration:2,delay:0.3,opacity:1});
    gsap.fromTo('#watchPage__whiteGold-Scene',{opacity:0},{duration:3,delay:1,opacity:1});
    gsap.fromTo('.watchPage__whiteGold-selected',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1,y:'0%',boxShadow:"1px 1px 8px 13px #747474",border: "none"});
    gsap.fromTo('#watchPage__whiteGold__toPinkGold',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1.3,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__video',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1.6,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__spec',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:2,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__whiteGold__gallery',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:2.3,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white",onComplete:function(){
        clickcount_pinkGold_video = 0
        clickcount_pinkGold_spec = 0
        clickcount_pinkGold_specPreventTouch =0;
        clickcount_pinkGold_gallery = 0;
        clickcount_pinkGold_toPinkGold =0;
        clickcount_pinkGold_toWhiteGold =0;
    }});
    } else {
        document.querySelector('.watchPage__whiteGold-Container').style.display= 'none';
        gsap.to('.watchPage__pinkGold-Container',{duration:1,position:'absolute',top:0,display:'block',onComplete:function() {
            if(whiteGold_360Image!==1){
                 window.CI360.init();
                 whiteGold_360Image=1;
            }
        }})
    gsap.fromTo('.watchPage__pinkGold-Header-title',{opacity:0},{duration:2,delay:0.3,opacity:1});
    gsap.fromTo('#watchPage__pinkGold-Scene',{opacity:0},{duration:3,delay:1,opacity:1});
    gsap.fromTo('#watchPage__pinkGold__toWhiteGold',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('.watchPage__pinkGold-selected',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1.3,y:'0%',boxShadow:"1px 1px 8px 13px #747474",border: "none"});
    gsap.fromTo('#watchPage__pinkGold__video',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,opacity:1,delay:1.6,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__pinkGold__spec',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:2,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white"});
    gsap.fromTo('#watchPage__pinkGold__gallery',{y:'-100%',opacity:0,boxShadow:'0 0 0 0 #ffffff',border: "none"},{duration:1.5,delay:2.3,opacity:1,y:'0%',boxShadow:"1px 1px 8px 13px #f6f6f6",border: "2px solid white",onComplete:function(){
        clickcount_pinkGold_video = 0
        clickcount_pinkGold_spec = 0
        clickcount_pinkGold_specPreventTouch =0;
        clickcount_pinkGold_gallery = 0;
        clickcount_pinkGold_toPinkGold =0;
        clickcount_pinkGold_toWhiteGold =0;
    }});    
}
}

function handlePinkGoldPage(e) {
    if(mainPage_timeline.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    mainPage_timeline.timeScale(2)
    mainPage_timeline.reverse();
    pinkGold_selected = 1;
}

