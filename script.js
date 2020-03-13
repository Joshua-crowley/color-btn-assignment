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
  for (var i = 0; i < colors.length; i++) {
    createColorOption(colors[i]);
  }
  // generate the initial 3 color buttons
  createColorButton('red');
  createColorButton('yellow');
  createColorButton('green');
}

// creates a new option of a given color and adds it to the dropdown
function createColorOption(color) {
  // create an option
  // set the option's value to the given color
  // set the option's inner text to be the given color
  // add the option to the dropdown in the DOM
}

// creates a new button of a given color and adds it to the color-btns container
function createColorButton(color) {
  // create a button
  // set the button's text to say the color name
  // set the style of the button to have a background color of the given color
  // assign a button class
  // assign an id of "<color-name-here>-btn" (replace the stuff in <>'s)
  // create an event listener on this button that sets the background color to be the given color
  // append into DOM
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
