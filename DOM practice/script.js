/* <p> */ 
const body = document.body;

const newP = document.createElement('p');

newP.textContent = "Hey I'm Red!";

newP.style.cssText = 'color: red; font-size:30px'; 

/* h3 header */ 
const newH3 = document.createElement('h3');

newH3.textContent = "I'm a blue h3!";

newH3.style.cssText = 'color: blue; font-size:30px'; 

/* div */

const newDiv = document.createElement('div');

newDiv.setAttribute('style', 'border: thick solid black; background: pink');

/* <h1> inside div */
const newH1 = document.createElement('h1');

newH1.textContent = "I'm in a div";

const newPDiv = document.createElement('p');

newPDiv.textContent = "ME TOO!";

newDiv.appendChild(newH1);
newDiv.appendChild(newPDiv);
body.append(newP, newH3, newDiv);