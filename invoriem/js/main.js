$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin:48,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2,
                margin:32,
                loop:true,
                
            },
            // breakpoint from 480 up
            601 : {
                items:2,
                margin:32,
                loop:true,
            },
            // breakpoint from 768 up
            1001 : {
                items:3,
                margin:48,
                loop:true,
            }
        }
    });
  });



// Video
const videoBtn = document.querySelector('#video-btn');
const videoPic = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video')
const videoFile = document.querySelector('#video-file')

videoBtn.addEventListener('click',()=>{
    videoPic.classList.add('hidden');
    videoWrapper.classList.remove('video__overlay')
   videoBtn.classList.add('none')
   
    if(videoFile.paused){
        videoFile.play();
    }
})
videoFile.addEventListener('click',()=>{

    if(videoFile.paused){

        videoFile.play();
    }else{
        
        videoWrapper.classList.add('video__overlay')
        videoBtn.classList.remove('none')
        videoFile.pause();
       
    }
})

// Mobile nav
const openNavBtn = document.querySelector('#openMobileNav');
const closeNavBtn = document.querySelector('#closeMobileNav');
const mobileNav = document.querySelector('#mobileNav');

openNavBtn.onclick = function(){
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll');
  
}
closeNavBtn.onclick = function(){
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll');
}
