let inAnimation = false;


// Add event listener to the button container
buttonContainer.addEventListener('click', () => {

    if (inAnimation) {
        return;
    }
    
    document.getElementById("guy").classList = "tilt-head";
    inAnimation = true;

    setTimeout(() => {
        document.getElementById("guy").classList = "";
        inAnimation = false;
    }, 2000);

});