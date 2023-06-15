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

// var item = document.getElementsByClassName("title");
//  console.log(item);
//  console.log(item[0]);
// item[0].style.fontWeight = "bold";
// item[0].style.color = "green";

var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].textContent = "Hello 3";
// items.style.fontWeight = "bold";
//items[2].Style.backgroundColor = "yellow";

for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
  items[i].style.color = "blue";
}
items[2].style.backgroundColor = "green";
