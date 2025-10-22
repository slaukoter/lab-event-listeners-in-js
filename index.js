// Handle Button Clicks

// Function to change the background color when a button is clicked
// Colors to loop through. 
const colors = ["rgb(0, 0, 255)", "rgb(0, 128, 0)", "rgb(255, 0, 0)"]
let colorIndex = 0

function changeBackgroundColor() {
  // Implement the function to change background color
  document.body.style.backgroundColor = colors[colorIndex]
  colorIndex = (colorIndex + 1) % colors.length
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  document.body.style.backgroundColor = ""
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  const keyDisplay = document.getElementById("keyPressDisplay")
  keyDisplay.textContent = `Key pressed: ${event.key}`
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const input = document.getElementById("textInput")
  const output = document.getElementById("textInputDisplay")

  if (input.value) {
    output.textContent = `You typed: ${input.value}`
  } else {
    output.textContent = "Your input will be displayed here."
  }
}

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}