"use strict";function _navMenu(){$(".mobile-nav-menu__burger").click(function(){$(".mobile-nav-menu__burger").toggleClass("burger_toggle"),$(".mobile-nav-menu__list").slideToggle("slow")}),$(".tablet-nav-menu__burger").click(function(){$(".tablet-nav-menu__burger").toggleClass("burger_toggle"),$(".tablet-nav-menu__list").toggleClass("tablet-nav-menu__list_show")}),$(".nav-list li a").click(function(){$(".nav-list li a").each(function(){$(".nav-list li a").toggleClass("active")}),$(".mobile-nav-menu__list").slideToggle("slow")}),$(window).on("load resize",function(){"1440"<=$(window).width()?$(".nav-menu").css("margin-left","calc((100% - 1440px)/2)"):$(".nav-menu").css("margin-left","0")})}function slowScroll(e){$(e.toString()).on("click",function(e){console.log("click"),e.preventDefault(),0<$(".burger_toggle").length&&($(".tablet-nav-menu__burger").removeClass("burger_toggle"),$(".mobile-nav-menu__burger").removeClass("burger_toggle"),$(".tablet-nav-menu__list").removeClass("tablet-nav-menu__list_show"),$(".mobile-nav-menu__list").hide());var t=$(this).attr("href"),n=$(t).offset().top;$("body,html").animate({scrollTop:n},1e3)})}function reserveBtn(e){var t={closeText:"Закрити",prevText:"&#x3C;",nextText:"&#x3E;",currentText:"Сьогодні",monthNames:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],monthNamesShort:["Січ","Лют","Бер","Кві","Тра","Чер","Лип","Сер","Вер","Жов","Лис","Гру"],dayNames:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"],dayNamesShort:["нед","пнд","вів","срд","чтв","птн","сбт"],dayNamesMin:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],weekHeader:"Тиж",dateFormat:"dd.mm.yy",firstDay:1,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""};$("#reserve-date").datepicker(t),$("#reserve-date-action").datepicker(t),$("#reserve-date-white").datepicker(t),$(document.body).on("click",function(e){$("#res-btn").removeClass("display-none")})}function initWhiteMap(){mapboxgl.accessToken="pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw";var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/valentina532/cjpstjqno3hfb2rnqai46wm83",center:[30.5933111,50.4284607],zoom:14});n.on("load",function(){n.loadImage("../img/index/map-marker-green.png",function(e,t){if(e)throw e;n.addImage("custom-marker",t),n.addLayer({id:"markers",type:"symbol",source:{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:["30.5933111","50.4284607"]}}]}},layout:{"icon-image":"custom-marker"}})})})}_navMenu(),slowScroll("#res-btn"),slowScroll("#contacts-btn"),slowScroll("#contacts-btn-tab"),slowScroll("#contacts-btn-mob"),reserveBtn(!0),initWhiteMap();