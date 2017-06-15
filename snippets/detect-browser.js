// Detect Browser
// An imperfect function that detects the browser and returns a string
// See: https://stackoverflow.com/questions/2400935/browser-detection-in-javascript

function detectBrowser() {

    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Safari 3.0+
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === '[object SafariRemoteNotification]'; })(!window['safari'] || safari.pushNotification);
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    // Using break; may be pointless since it's unreachable
    // Using return might be cheaper
    switch (true) {
      case isOpera: return 'Opera';
      case isFirefox: return 'Firefox';
      case isSafari: return 'Safari';
      case isIE: return 'Internet Explorer';
      case isEdge: return 'Edge';
      case isChrome: return 'Chrome';
      case isBlink: return 'Blink';
      default: return 'Not Sure';
    }

  }
