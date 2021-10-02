document.addEventListener("DOMContentLoaded", function() {
  // Código que será executado quando o navegador carregar
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "https://us-central1-squid-apis.cloudfunctions.net/test-front-basic");
  ajax.send();
});