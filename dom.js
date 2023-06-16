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
// var titles = document.querySelectorAll(".title");
// titles[0].textContent = "hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
//   even[i].style.backgroundColor = "grey";
// }
// var secondli = document.querySelectorAll("li:nth-child(2)")[0];
// secondli.style.color = "green";

// TRAVERSING THE DOM   //
//var itemList = document.querySelector("#items");
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "pink";
// console.log(itemList.parentNode.parentNode);

// //parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "blue";
// console.log(itemList.parentElement.parentElement);

// //  childNodes
// //console.log(itemList.chileNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

//   FirstChild
// console.log(itemList.firstChild);
// //   FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "HELLO 1";

// //   LastChild
// console.log(itemList.lastChild);
// //   lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "HELLO 4";

//    nextSibling
// console.log(itemList.nextSibling);

// //    nextElementSibling
//   console.log(itemList.nextElementSibling);
// //    previous Sibling
//  console.log(itemList.previousSibling);
//  //   previousElementSibling
//  console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.computedStyleMap.color = "pink";

//CREATE A DIV
// var newDiv = document.createElement("div");

// // add class
// newDiv.className = "hello";
// // add id
// newDiv.id = "hello1";

// // add attribute
// newDiv.setAttribute("title", "hello Div");

// // Create a textNode
// var newDivText = document.createTextNode("Hello World");

// // add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(newDiv);

// newDiv.style.fontSize = "30px";

// container.insertBefore(newDiv, h1);
// var item = document.querySelector("ul li:nth-child(1)");
// item.parentNode.insertBefore(newDiv, item);
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append button to li
  li.appendChild(deleteBtn);

  // Create edit button element
  var editBtn = document.createElement("button");
  // Add classes to edit button
  editBtn.className = "btn btn-primary btn-sm float-right edit";
  // Append text node
  editBtn.appendChild(document.createTextNode("Edit"));

  // Append edit button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName("li");
  // Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
