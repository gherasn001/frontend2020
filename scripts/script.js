/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


// JavaScript Document
var hamburgerButton = document.querySelector('header > button');
var hamburgerNav = document.querySelector('header > nav');


var open = function menuOpen() {

    hamburgerNav.classList.toggle('menu');

};

hamburgerButton.addEventListener('click', open);



//var mouseHover = document.querySelector('main > section:nth-of-type(1) > li > img')
//var hoverLink = document.querySelector('main > section:nth-of-type(1) > li:nth-of-type(1) > a')
//
//var hover = function hoverOver() {
//    hoverLink.classList.toggle('linkHover');
//
//}
//mouseHover.addEventListener('mouseover', hover);
