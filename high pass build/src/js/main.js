var myMap;
const openBtn = document.querySelector('.header__burger-btn');
const closeBtn = document.querySelector('.btn-close');
const mobileNav = document.querySelector('.nav__list-open');
const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const grids = Array.from(document.querySelectorAll('.our-project__grid'));
const services = Array.from(document.querySelectorAll('.servises'));
const servicesBtns = Array.from(document.querySelectorAll('.studio-services__checkbox-block-real-checkbox'));
const servises = Array.from(document.querySelectorAll('.servises'));
const completedWorksList = Array.from(document.querySelectorAll('.completed-works__wrap'));
const overlayBtnClose = document.querySelector('.overlay__btn');
const overlayBtnOpen = document.querySelector('.overlay__btn-open');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
servicesBtns[0].checked=true;
checkbox1.checked = true;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10,
        controls: []
    }),
    myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [55.8, 37.8]
        }});
        myMap.geoObjects
        .add(myGeoObject)



}

openBtn.addEventListener('click', ()=>{
    mobileNav.classList.remove('hidden')
   
})
closeBtn.addEventListener('click', ()=>{
    mobileNav.classList.add('hidden')
  
})



checkbox1.addEventListener('click',()=>{
    if(checkbox1.checked){
        checkbox2.checked = false
        grids[0].classList.remove("hidden")
        grids[1].classList.add("hidden")
        
    }
})
checkbox2.addEventListener('click',()=>{
    if(checkbox2.checked){
        checkbox1.checked = false
        grids[1].classList.remove("hidden")
        grids[0].classList.add("hidden")
    }
})


servicesBtns[0].addEventListener('click',()=>{
    if(servicesBtns[0].checked){
        servicesBtns[1].checked = false
        services[0].classList.remove('hidden')
        services[1].classList.add('hidden')
        completedWorksList[0].classList.remove("hidden")
        completedWorksList[1].classList.add("hidden")
   
    }
})
servicesBtns[1].addEventListener('click',()=>{
    if(servicesBtns[1].checked){
        servicesBtns[0].checked = false
        services[1].classList.remove('hidden')
        services[0].classList.add('hidden')
        completedWorksList[1].classList.remove("hidden")
        completedWorksList[0].classList.add("hidden")
    }
})
overlayBtnClose.addEventListener('click',()=>{
    overlay.classList.add('hidden')
    overlayBtnOpen.classList.remove('hidden')

})
overlayBtnOpen.addEventListener('click',()=>{
    overlay.classList.remove('hidden')
    overlayBtnOpen.classList.add('hidden')

})
