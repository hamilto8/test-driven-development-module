// create a div and add it to html body
var div = document.createElement('div');

// give div class of welcome
div.className = 'welcome';

// give div inner text of welcome
div.innerText = 'Welcome to the Test Driven Development Module.';

//add div to html body
document.body.appendChild(div);

//create a function that alternates text on click
function alternateText() {
  div.innerText = 'Goodbye';
}

//run alternateText function on click
div.addEventListener('click', alternateText);