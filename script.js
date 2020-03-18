var colorButton = document.getElementById('color-btns');
var addBtn = document.getElementById('add-btn');
var dropdown = document.getElementById('color-options');
var removeBtn = document.getElementById('remove-current-btn');

init();

addBtn.addEventListener('click', function() {
  var selectedColor = dropdown.value;
  createColorButton(selectedColor);
  removeColorOption(selectedColor);
});

removeBtn.addEventListener('click', function() {
  var currColor = document.body.style.backgroundColor;
  removeColorBtn(currColor);
  createColorOption(currColor);
});

// Does everything necessary to setup our site for the first time
function init() {
  // populate dropdown with color options
  for (var i = 0; i < listColors.length; i++) {
    createColorOption(listColors[i]);
  }
  // generate the initial 3 color buttons
  createColorButton('Red');
  createColorButton('Yellow');
  createColorButton('Green');
}

// creates a new option of a given color and adds it to the dropdown
function createColorOption(color) {
  // create an option
  var item = document.createElement('option');
  // set the option's value to the given color
  item.value = color;
  // set the option's inner text to be the given color
  item.innerText = color;
  // add the option to the dropdown in the DOM
  dropdown.appendChild(item);
}

// creates a new button of a given color and adds it to the color-btns container
function createColorButton(color) {
  // create a button
  var item = document.createElement('button');
  // set the button's text to say the color name
  item.innerText = color;
  // set the style of the button to have a background color of the given color
  item.style.background = color;
  // assign a button class
  item.classList.add('colors');
  // assign an id of "<color-name-here>-btn" (replace the stuff in <>'s)
  item.id = color + '-btn';
  // create an event listener on this button that sets the background color to be the given color
  item.addEventListener('click', function() {
    document.body.style.backgroundColor = color;
  });
  // append into DOM
  colorButton.append(item);
}

// remove an option of a given color from the dropdown
function removeColorOption(color) {
  // get the option from the DOM
  var option = document.querySelector(
    '#color-options > option[value="' + color + '"]'
  );
  // remove it
  option.remove();
}

// remove a button of a given color from our buttons
function removeColorBtn(color) {
  var btn = document.getElementById(color + '-btn');
  btn.remove();
}
