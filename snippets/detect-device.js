// Detect Device
// A function that attempts to detect the client device and returns a string

function detectDevice() {

    // Detect a specific brand
    if (/Android/i.test(navigator.userAgent)) {
      return 'Android';
    }
    else if (/webOS/i.test(navigator.userAgent)) {
      return 'webOS';
    } 
    else if (/iPhone/i.test(navigator.userAgent)) {
      return 'iPhone';
    } 
    else if (/iPad/i.test(navigator.userAgent)) {
      return 'iPad';
    } 
    else if (/iPod/i.test(navigator.userAgent)) {
      return 'iPod';
    } 
    else if (/BlackBerry/i.test(navigator.userAgent)) {
      return 'BlackBerry';
    } 
    else if (/Windows Phone/i.test(navigator.userAgent)) {
      return 'Windows Phone';
    } 

    // If all else fails, just return mobile or desktop
    else if (/Mobi/i.test(navigator.userAgent)) {
      return 'Mobile';
    } 
    else {
      return 'Desktop';
    }
  }
