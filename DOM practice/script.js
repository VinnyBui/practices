/* 
// <p> 
const body = document.body;

const newP = document.createElement('p');

newP.textContent = "Hey I'm Red!";

newP.style.cssText = 'color: red; font-size:30px'; 

// h3 header 
const newH3 = document.createElement('h3');

newH3.textContent = "I'm a blue h3!";

newH3.style.cssText = 'color: blue; font-size:30px'; 

// div 
const newDiv = document.createElement('div');

newDiv.setAttribute('style', 'border: thick solid black; background: pink');

// <h1> inside div 
const newH1 = document.createElement('h1');

newH1.textContent = "I'm in a div";

// <p> inside div 
const newPDiv = document.createElement('p');

newPDiv.textContent = "ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(newPDiv);
body.append(newP, newH3, newDiv);
*/

/*
// button
const btn = document.querySelector('#btn');

//btn.onclick = () => alert('hello hello');

// Button with EventListener 
const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', () => {
  alert("hello hello hello");
});

//You can also create a function and have them called the function instead
function alertFunction() {
  alert("Calling function!");
};

// Using EventListener to change style

btn.addEventListener('click', function (e){
  e.target.style.background = 'white';
});
*/

//Attaching EventListeners to groups of nodes

const buttons = document.querySelectorAll('button');

//.forEach iterate through each button
buttons.forEach((button) => {
  //Adding a 'click' listener to each button
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

const body = document.body;

const div = document.createElement('div');

const btn = document.createElement('button');

btn.setAttribute('id', 'btn1')
btn.textContent = "Change color";

function ChangeColor(){
  document.body.style.backgroundColor = 'gray';
  setTimeout("ChangeColor()", 2000);
}

btn.addEventListener('mouseover', ChangeColor);
div.appendChild(btn);

body.append(div);