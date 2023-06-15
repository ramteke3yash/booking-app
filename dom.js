//   EXAMINE THE DOCUMENT OBJECT   //
//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

//    GETELEMENTBYID    //
// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>hello</h3>";
// header.style.borderBottom = "solid 3px #000";

//  GET ELEMENTBY CLASS    //
// var item = document.getElementsByClassName("title");
//  console.log(item);
//  console.log(item[0]);
// item[0].style.fontWeight = "bold";
// item[0].style.color = "green";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "Hello 3";
// items.style.fontWeight = "bold";
//items[2].Style.backgroundColor = "yellow";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
//   items[i].style.color = "blue";
// }
// items[2].style.backgroundColor = "green";
//     GET ELEMENT BY TAG    //
// var li = document.getElementsByTagName("li");

// for (var i = 0; i < li.length; i++) {
//   li[i].style.fontWeight = "bold";
//   li[i].style.color = "blue";
// }
// li[2].style.backgroundColor = "green";

//  QUERYSELECTOR   //
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// lastItem.style.color = "blue";

//   QUERYSELECTORALL    //
var titles = document.querySelectorAll(".title");
titles[0].textContent = "hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "grey";
}
var secondli = document.querySelectorAll("li:nth-child(2)")[0];
secondli.style.color = "green";
