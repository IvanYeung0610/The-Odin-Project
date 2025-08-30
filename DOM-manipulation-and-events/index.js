// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Exercises

// 1.
const para = document.createElement("p");
para.textContent = "Hey I'm red!"
para.style.color = "red";
container.appendChild(para);

// 2.
const header = document.createElement("h3");
header.textContent = "I'm a blue h3!";
header.style.color = "blue";
container.appendChild(header);

// 3.
const div = document.createElement("div");
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div";
const divPara = document.createElement("p");
divPara.textContent = "ME TOO!";
div.appendChild(divHeader);
div.appendChild(divPara);
container.appendChild(div);
