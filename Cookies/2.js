var n = document.getElementById("nm");
var a = document.getElementById("ag");
var m = document.getElementById("ml");
var f = document.getElementById("fml");
var c = document.getElementById("clr");

var g;
function print(e) {
  g = e.value;
}

function setcookie(key, value, expdate) {
  var date = new Date(expdate);

  document.cookie = `${key}=${value}; expires=${date}`;
}

function register() {
  setcookie("name", n.value, "10/10/2022");
  setcookie("age", a.value, "10/10/2022");
  setcookie("gender", g, "10/10/2022");
  setcookie("color", c.value, "10/10/2022");
  setcookie("count", 0, "10/10/2022");

  window.location.replace("data.html");
}
