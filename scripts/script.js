/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


// JavaScript Document
var hamburgerButton = document.querySelector('header > button');
var hamburgerNav = document.querySelector('header > nav');


var open = function menuOpen() {

    hamburgerNav.classList.toggle('menu');

};

hamburgerButton.addEventListener('click', open);



// carrousel games


var count = 0;

 //next button

function rollTheGame() {
   

    var imgArray = ["simsmobilepromo.jpg", "promocosole.jpg", "simsfreeplaypromo.jpg", "sims3promo.jpg", "mysimspromo.jpg", "thesims2.jpg"];
    console.log(imgArray);

    var gameImg = imgArray[count];
    count = count + 1;
    console.log('Nummer:' + count);

    console.log('Plaatje:' + gameImg);



    document.querySelectorAll('main > section:nth-of-type(4) > img')[0].src = "images/" + gameImg;
if (count >= 6) {
  count = 0}
    else {
      count - 1   } 
}

document.querySelector('.next').addEventListener('click', rollTheGame);
rollTheGame();
// previous button
function rollTheGamePrev() {
   

    var imgArray = ["simsmobilepromo.jpg", "promocosole.jpg", "simsfreeplaypromo.jpg", "sims3promo.jpg", "mysimspromo.jpg", "thesims2.jpg"];
    console.log(imgArray);

    var gameImg = imgArray[count];
    count = count - 1;
    count = 0;
    console.log('Nummer:' + count);

    console.log('Plaatje:' + gameImg);


    document.querySelectorAll('main > section:nth-of-type(4) > img')[0].src = "images/" + gameImg;

}
document.querySelector('.prev').addEventListener('click', rollTheGamePrev);
rollTheGamePrev();
