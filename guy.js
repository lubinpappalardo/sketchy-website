const guy = document.getElementById("guy");
let inAnimation = false;

// Add event listener to the button container
buttonContainer.addEventListener('click', () => {
  if (inAnimation) {
    return; // Exit the function if an animation is already in progress
  }

  guy.classList.remove("wave"); // Remove the "wave" class in case it was previously applied
  guy.classList.add("walk"); // Add the "walk" class to trigger the walking animation
  inAnimation = true; // Set the flag to indicate an animation is in progress

  guy.addEventListener('animationend', handleAnimationEnd, { once: true }); // Listen for the 'animationend' event only once
});

function handleAnimationEnd() {
  guy.classList.remove("walk"); // Remove the "walk" class

  setTimeout(() => {
    guy.classList.add("wave"); // Add the "wave" class to trigger the waving animation

    guy.addEventListener('animationend', () => {
      guy.classList.remove("wave"); // Remove the "wave" class
      inAnimation = false; // Reset the animation flag
    }, { once: true }); // Listen for the 'animationend' event only once
  }, 100); // Add a short delay before starting the waving animation
}