// Countdown
// A very simple countdown timer
// Perfect for telling the visitors that you are about to redirect

function countDown(el, timeSpan) {
  var counterDisplay = document.querySelector(el);

  var interval = setInterval(function() {
    counterDisplay.innerHTML = timeSpan;
    timeSpan--;
    
    if (timeSpan <= 0) {

      clearInterval(interval);

      // Do something such as window.location.replace('/');

    }
  }, 1000);

}
