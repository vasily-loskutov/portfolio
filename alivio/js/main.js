




// MOBILE NAV
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav= document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click',()=>{
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// VIDEO
const videoBtn = document.querySelector('.story-video-btn');
const videoFile = document.querySelector('#video-story');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');

videoBtn.addEventListener('click',()=>{
    function toggleOverlay(event){
        if(event.type === 'mouseleave'){
            videoOverlay.classList.add('hidden');
        }else{
            videoOverlay.classList.remove('hidden');
        }
    }
    
   if(videoFile.paused ){
    videoFile.play();
    videoBtnIcon.src = './video/video-pause.svg';
    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
   }else{
    videoFile.pause();
    videoBtnIcon.src = './video/play-white.svg';
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
   }
});
