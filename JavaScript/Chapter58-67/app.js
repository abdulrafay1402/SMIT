
var main = document.getElementById("main-content");

for(let i = 0; i < main.children.length; i++) {
  console.log(main.children[i].innerText);
}

var render = document.getElementsByClassName("render");
for (let i = 0; i < render.length; i++) {
  console.log(render[i].innerHTML);
}

document.getElementById("first-name").value = "Alex";

document.getElementById("last-name").value = "Bank";
document.getElementById("email").value = "alexbank@example.com";

var formContent = document.getElementById("form-content");
console.log("Node type of 'form-content':", formContent.nodeType);

var lastName = document.getElementById("lastName");
console.log("Node type of 'lastName':", lastName.nodeType);
console.log("Child node of 'lastName':", lastName.childNodes[0]);
console.log("Child node type:", lastName.childNodes[0].nodeType);

lastName.childNodes[0].nodeValue = "Last Name: Updated Name";

var main = document.getElementById("main-content");
console.log("First child:", main.firstChild);
console.log("Last child:", main.lastChild);

console.log("First element child:", main.firstElementChild);
console.log("Last element child:", main.lastElementChild);

console.log("Next sibling:", lastName.nextSibling);
console.log("Previous sibling:", lastName.previousSibling);

console.log("Next element sibling:", lastName.nextElementSibling);
console.log("Previous element sibling:", lastName.previousElementSibling);

var email = document.getElementById("email");
console.log("Parent node of 'email':", email.parentNode);
console.log("Parent node type:", email.parentNode.nodeType);