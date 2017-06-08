// countdown.js
// A very simple 5-second countdown timer
// Can be used before redirecting

var counterDisplay = document.querySelector('#counter-display');
var counter = 5;

var interval = setInterval(function () {

  counterDisplay.innerHTML = counter;
  counter--;
  
  if (counter <= 0) {
    clearInterval(interval);
    // Do something such as window.location.replace('/');
  }
}, 1000);
