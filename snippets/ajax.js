// AJAX
// A reusable code to make AJAX's asynchronousity slightly easier to deal with via the so-called 'callback'
// I'm aware that this could be flatten out via promises, but for simplicity and compatibility, this would do for now.
// See: http://callbackhell.com/
// IE10+

// Get Data
function getData(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      callback(JSON.parse(xhr.responseText));
    }
    else {
      // We reached our target server, but it returned an error
    }
  };

  xhr.onerror = function() {
    // There was a connection error of some sort
  };

  xhr.send();
}

// Post Data
function postData(url, headerKey, headerValue, data, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader(headerKey, headerValue);

  xhr.send(data);

  xhr.onreadystatechange = function() {

    // 4 = Response from server has been completely loaded.
    if (xhr.readyState === 4) {
      // 200 - 299 = successful
      if (xhr.status === 200 && xhr.status < 300) {
        callback(true);
      }
      else {
        callback(false);
      }
    }
  };

}
