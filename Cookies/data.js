function getCookie(key) {
  var val = "";
  var x = document.cookie;
  var y = x.split(";");
  for (var i in y) {
    var test = y[i].split("=");
    if (test[0].trim() === key) {
      return test[1];
    }
  }
}
function setCookie(key, value, expdate) {
  var date = new Date(expdate);

  document.cookie = `${key}=${value}; expires=${date}`;
}

function deleteCookie(key) {
  var date = new Date("1/1/2008");
  setCookie(key, "", date);
}
var img = document.getElementById("g");

function allCookieList(key) {
  var x = document.cookie;
  var y = x.split(";");
  return y;
}

function hasCookie(key) {
  var x = document.cookie;
  var y = x.split(";");
  for (var i in y) {
    var test = y[i].split("=");
    if (test[0].trim() === key) {
      return "It has that cookie";
    }
  }
}

(function () {
  if (getCookie("gender") === "male") {
    img.setAttribute("src", "male.jpg");
  } else {
    img.setAttribute("src", "female.jpg");
  }
})();

var n = document.getElementById("nm");

(function () {
  n.innerHTML = getCookie("name");
  n.style.color = getCookie("color");
  n.style.fontSize = "20px";
  n.style.fontWeight = "bold";
})();

var nn = document.getElementById("num");

var y = parseInt(getCookie("count"));
(function () {
  setCookie("count", y + 1);
  nn.innerHTML = `${y + 1}`;
  nn.style.color = getCookie("color");
  nn.style.fontSize = "20px";
  nn.style.fontWeight = "bold";
})();
