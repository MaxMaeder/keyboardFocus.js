// Add event listener for when tab pressed
document.addEventListener("keyup", function(event) {
  if (event.keyCode !== 9) return;

  removeFocusedClass();

  // Add the "keyboardFocused" class to the currently focused element
  document.activeElement.classList.add("keyboardFocused");
});

// Remove the class when the user interacts with the page with their mouse, or when the page looses focus
document.addEventListener("click", removeFocusedClass);
document.addEventListener("focusout", removeFocusedClass);

// Remove the "keyboardFocused" class from any elements that have it
function removeFocusedClass() {
  var previouslyFocusedElement = document.getElementsByClassName("keyboardFocused") [0];
  if (previouslyFocusedElement) previouslyFocusedElement.classList.remove("keyboardFocused");
}
