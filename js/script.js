"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-menu');
const buyBtn = document.querySelector('.header__buy-btn');
if(burger) {
    burger.addEventListener('click', function(e) {
        burger.classList.toggle('burger--active'); //change burger icon
        menu.classList.toggle('burger--active'); //open burger menu
        buyBtn.classList.toggle('burger--active'); //open burger menu
        document.body.classList.toggle('locked'); //lock page from scroling when burger in opened
    });
}

function closeBurgerMenu() { //used in anchors.js, close burger after click on menu link
    if(burger.classList.contains('burger--active')){
        burger.classList.remove('burger--active');
        menu.classList.remove('burger--active');
        buyBtn.classList.remove('burger--active');
        document.body.classList.remove('locked');
    }
}
    let upBtn = document.getElementById('upbtn');
upBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
    const anchorElements = document.querySelectorAll(".anchor");
for (let anchorElement of anchorElements){
    anchorElement.addEventListener("click", function(e){
        e.preventDefault();

        const destination = anchorElement.dataset.anchor;
        document.querySelector('' + destination).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        
        closeBurgerMenu();
    });
}
});
