"use strict";var e,c=document.querySelector(".header__burger-btn"),d=document.querySelector(".btn-close"),t=document.querySelector(".nav__list-open"),r=document.querySelector("#checkbox1"),s=document.querySelector("#checkbox2"),o=Array.from(document.querySelectorAll(".our-project__grid")),n=Array.from(document.querySelectorAll(".servises")),i=Array.from(document.querySelectorAll(".studio-services__checkbox-block-real-checkbox")),l=(Array.from(document.querySelectorAll(".servises")),Array.from(document.querySelectorAll(".completed-works__wrap"))),a=document.querySelector(".overlay__btn"),u=document.querySelector(".overlay__btn-open"),m=document.querySelector(".overlay");document.querySelector("body");i[0].checked=!0,r.checked=!0,ymaps.ready((function(){e=new ymaps.Map("map",{center:[55.76,37.64],zoom:10,controls:[]}),myGeoObject=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[55.8,37.8]}}),e.geoObjects.add(myGeoObject)})),c.addEventListener("click",(function(){t.classList.remove("hidden")})),d.addEventListener("click",(function(){t.classList.add("hidden")})),r.addEventListener("click",(function(){r.checked&&(s.checked=!1,o[0].classList.remove("hidden"),o[1].classList.add("hidden"))})),s.addEventListener("click",(function(){s.checked&&(r.checked=!1,o[1].classList.remove("hidden"),o[0].classList.add("hidden"))})),i[0].addEventListener("click",(function(){i[0].checked&&(i[1].checked=!1,n[0].classList.remove("hidden"),n[1].classList.add("hidden"),l[0].classList.remove("hidden"),l[1].classList.add("hidden"))})),i[1].addEventListener("click",(function(){i[1].checked&&(i[0].checked=!1,n[1].classList.remove("hidden"),n[0].classList.add("hidden"),l[1].classList.remove("hidden"),l[0].classList.add("hidden"))})),a.addEventListener("click",(function(){m.classList.add("hidden"),u.classList.remove("hidden")})),u.addEventListener("click",(function(){m.classList.remove("hidden"),u.classList.add("hidden")}));