//////////Constructors///////
function book(nm, pr) {
  this.name = nm;
  this.price = pr;
  var parent = this;
  this.author = function author(nme, em) {
    this.name = nme;
    this.email = em;
    parent.author = this;
  };
}

////////////Number of books/////////
var f = document.getElementById("first");
var n = document.getElementById("num");
var s = document.getElementById("second");
var ta = document.getElementById("t");
var tb = document.getElementById("data");

var innm = document.getElementById("name");
var inp = document.getElementById("price");
var inau = document.getElementById("authorname");
var inem = document.getElementById("email");
var btcr = document.getElementById("create");

var ll1 = document.getElementById("l1");
var ll2 = document.getElementById("l2");
var ll3 = document.getElementById("l3");
var ll4 = document.getElementById("l4");

btcr.style.fontSize = "20px";
btcr.style.height = "60px";
btcr.style.width = "100px";

var nn = 0;
var books = [];

function Enter() {
  if (n.value !== "") {
    nn = n.valueAsNumber;
    f.style.display = "none";
    s.style.display = "flex";
  } else {
    alert("Please Enter a number");
  }
}
////////////////////////////////

function Create() {
  if (
    innm.value != "" &&
    inp.value !== "" &&
    inau.value !== "" &&
    inem.value !== ""
  ) {
    if (books.length < nn - 1) {
      var a = new book(innm.value, inp.valueAsNumber);
      var b = new a.author(inau.value, inem.value);
      books.push(a);

      innm.value = "";
      inp.value = "";
      inau.value = "";
      inem.value = "";
      btcr.innerHTML = `Added ${books.length}`;
    } else if (books.length == nn - 1) {
      var a = new book(innm.value, inp.valueAsNumber);
      var b = new a.author(inau.value, inem.value);
      books.push(a);
      ll1.style.display = "none";
      ll2.style.display = "none";
      ll3.style.display = "none";
      ll4.style.display = "none";

      innm.style.display = "none";
      inp.style.display = "none";
      inau.style.display = "none";
      inem.style.display = "none";
      btcr.innerHTML = "DONE";
    } else {
      s.style.display = "none";
      t.style.display = "flex";
      Fill();
    }
  } else {
    alert("please enter all fields");
  }
}

////////////////////////////////////

function Fill() {
  books.forEach(function (j) {
    row = tb.insertRow();
    cell = row.insertCell();
    cell.innerHTML = j.name;
    cell = row.insertCell();
    cell.innerHTML = '<input type="date">';
    cell = row.insertCell();
    cell.innerHTML = j.price;
    cell = row.insertCell();
    cell.innerHTML = j.author.name;
    cell = row.insertCell();
    cell.innerHTML = j.author.email;
    cell = row.insertCell();
    cell.innerHTML = '<button id="ed" onclick="Edit(this)">Edit</button>';
    cell = row.insertCell();
    cell.innerHTML = '<button id="del" onclick="Delete(this)">Delete</button>';
  });
}

function Delete(f) {
  var p = f.parentNode.parentNode;
  ///////////
  var parent = p.parentNode;
  var index = Array.prototype.indexOf.call(parent.children, p);
  books.splice(index - 1, 1);

  p.parentNode.removeChild(p);
}

function Edit(n) {
  var p = n.parentNode.parentNode;
  var parent = p.parentNode;
  var index = Array.prototype.indexOf.call(parent.children, p);

  var arr = [...p.children];

  p.childNodes[0].innerHTML = '<input type="text" onchange="vname(this)">';
  arr[0].childNodes[0].value = books[index - 1].name;
  p.childNodes[1].innerHTML = '<input type="date">';
  p.childNodes[2].innerHTML = '<input type="number" onchange="vnum(this)">';
  arr[2].childNodes[0].valueAsNumber = books[index - 1].price;

  p.childNodes[3].innerHTML = '<input type="text" onchange="vname(this)">';
  arr[3].childNodes[0].value = books[index - 1].author.name;

  p.childNodes[4].innerHTML = '<input type="email" onchange="vmail(this)">';
  arr[4].childNodes[0].value = books[index - 1].author.email;

  p.childNodes[5].innerHTML =
    '<button id="sv" onclick="Save(this)">Save</button>';
}

function Save(s) {
  var p = s.parentNode.parentNode;
  var n = p.childNodes[0].childNodes[0];
  var pn = p.childNodes[2].childNodes[0];
  var an = p.childNodes[3].childNodes[0];
  var ae = p.childNodes[4].childNodes[0];
  var parent = p.parentNode;
  var index = Array.prototype.indexOf.call(parent.children, p);

  p.childNodes[5].innerHTML =
    '<button id="ed" onclick="Edit(this)">Edit</button>';
  if (n.value !== "" && pn.value !== "" && an.value !== "" && ae.value !== "") {
    p.childNodes[0].innerHTML = n.value;
    books[index - 1].name = n.value;
    p.childNodes[2].innerHTML = pn.valueAsNumber;
    books[index - 1].price = pn.valueAsNumber;
    p.childNodes[3].innerHTML = an.value;
    books[index - 1].author.name = an.value;
    p.childNodes[4].innerHTML = ae.value;
    books[index - 1].author.email = ae.value;
  } else {
    alert("All Fields are required");
  }
}

function vnum(inputtxt) {
  var numbers = /^[0-9]+$/;
  var innum = Number(inputtxt.value);
  var res = numbers.test(innum);
  if (res == 0) {
    alert("please enter only numbers");
    inputtxt.value = "";
  }
}

function vmail(inputtxt) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var innum = inputtxt.value;
  var res = mailformat.test(innum);
  if (res == 0) {
    alert("please enter only valid mail");
    inputtxt.value = "";
  }
}

function vname(inputtxt) {
  var rnm = /^([a-z]+ ?){1,3}$/i;
  var innum = inputtxt.value;
  var res = rnm.test(innum);
  if (res == 0) {
    alert("please enter only valid names");
    inputtxt.value = "";
  }
}
