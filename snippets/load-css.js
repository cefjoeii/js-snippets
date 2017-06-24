// Load CSS
// A function that attaches a css link tag on the <head>
// Perfect if you only have access to the <body> and want to import a CSS file on the <head>
// See: https://stackoverflow.com/questions/11833325/css-hack-adding-css-in-the-body-of-a-website
// loadCSS("path_to_css/file.css");

function loadCSS(filename) {

  var file = document.createElement("link");
  file.setAttribute("rel", "stylesheet");
  file.setAttribute("type", "text/css");
  file.setAttribute("href", filename);
  document.head.appendChild(file);

}
