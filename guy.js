const guy = document.getElementById("guy");
let inAnimation = false;


// Add event listener to the button container
buttonContainer.addEventListener('click', () => {

    if (inAnimation) {
        return;
    }
    
    guy.classList = "wave";
    inAnimation = true;

    guy.addEventListener('animationend', () => {
        document.getElementById("guy").classList = "";
        inAnimation = false;
    });

});