"use strict"
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', (e)=> {hamburgerClickdedHandler(e)});

function hamburgerClickdedHandler(e){
    e.preventDefault();
    header.classList.toggle('hamburger-clicked');
}

const hamburgerLinks = document.querySelectorAll('header a');

hamburgerLinks.forEach((link)=>{link.addEventListener('click', (e)=>{header.classList.remove('hamburger-clicked')})});