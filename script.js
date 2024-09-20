"use strict"
const dropdown = document.querySelector(".dropdown_link");
const dropdownMenu = document.querySelector(".dropdown_menu");
const dropArrow = document.querySelector(".arrow_img");
const burger = document.querySelector(".burger_menu");
const offScreenMenu = document.querySelector(".off_screen-menu");
const innerShadow = document.querySelector(".inner_shadow");


dropdown.addEventListener("mouseenter", ()=>{
    dropdownMenu.classList.add("active");
    dropArrow.classList.add("active");
    innerShadow.classList.add("active");
})
dropdown.addEventListener("mouseleave", ()=>{
    dropdownMenu.classList.remove("active");
    dropArrow.classList.remove("active");
    innerShadow.classList.remove("active");
})

dropdownMenu.addEventListener("mouseenter", ()=>{
    dropArrow.classList.add("active");
    innerShadow.classList.add("active");
})
dropdownMenu.addEventListener("mouseleave", ()=>{
    dropArrow.classList.remove("active");
    innerShadow.classList.remove("active");
})

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})