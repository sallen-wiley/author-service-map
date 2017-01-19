var homeIntroCards = document.getElementsByClassName("home-intro__card"),
    heroBg = document.getElementById("hero-bg"),
    i;

window.onload = function () {
    'use strict';
    for (i = 0; i < homeIntroCards.length; i += 1) {
        
        homeIntroCards[i].onmouseenter = function () {
            heroBg.classList.add("blur");
            this.classList.add("hover");
        };

        homeIntroCards[i].onmouseleave = function () {
            heroBg.classList.remove("blur");
            this.classList.remove("hover");
        };
        
    }
};