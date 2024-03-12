// Get the button container element
const buttonContainer = document.querySelector('.button-container');


function addRandomness(arr) {
    const magnitude = 0.2;

    const modifiedArr = arr.map(item => {
        if (item === 0) {
            return Math.random() * (2*magnitude) - magnitude;
        } else if (item === 1) {
            return Math.random() * (2*magnitude) + (1-magnitude);
        } else {
            return item;
        }
    });

    return modifiedArr;
}


// Add event listener to the button container
buttonContainer.addEventListener('click', () => {
    // Array of possible placements
    const placements = [[0,0], [1,0], [0,1], [1,1]];

    // Randomly select a placement
    const randomPlacement = placements[Math.floor(Math.random() * placements.length)];

    const oppositePlacement = randomPlacement.map(placement => placement === 0 ? 1 : 0);

    // Create two new image elements
    const img1 = document.createElement('img');
    img1.className = 'highlight-star big-star';
    img1.src = 'highlight_star_big.svg';
    img1.alt = 'big highlight star';
    img1.draggable = false;
    const randomPlacementModified = addRandomness(randomPlacement);
    img1.style.left = `${randomPlacementModified[0] * 100}%`;
    img1.style.top = `${randomPlacementModified[1] * 100}%`;

    const img2 = document.createElement('img');
    img2.className = 'highlight-star small-star';
    img2.src = 'highlight_star_small.svg';
    img2.alt = 'big highlight small';
    img2.draggable = false;
    const oppositePlacementModified = addRandomness(oppositePlacement);
    img2.style.left = `${oppositePlacementModified[0] * 100}%`;
    img2.style.top = `${oppositePlacementModified[1] * 100}%`;

    // Append the image elements to the button container
    buttonContainer.appendChild(img1);
    buttonContainer.appendChild(img2);

    setTimeout(() => {
        // Remove the image elements after 1 second
        img1.remove();
        img2.remove();
    }, 2000);
});