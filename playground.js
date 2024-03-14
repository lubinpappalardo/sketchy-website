document.getElementById("guy-all-control").addEventListener('input', (e) => {
    document.getElementById("guy").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("all-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-head-control").addEventListener('input', (e) => {
    document.getElementById("guy-head").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("neck-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-left-shoulder-control").addEventListener('input', (e) => {
    document.getElementById("guy-left-arm").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("left-shoulder-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-left-elbow-control").addEventListener('input', (e) => {
    document.getElementById("guy-left-lower-arm-group").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("left-elbow-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-left-wrist-control").addEventListener('input', (e) => {
    document.getElementById("guy-left-hand").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("left-wrist-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-right-shoulder-control").addEventListener('input', (e) => {
    document.getElementById("guy-right-arm").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("right-shoulder-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-right-elbow-control").addEventListener('input', (e) => {
    document.getElementById("guy-right-lower-arm-group").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("right-elbow-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-right-wrist-control").addEventListener('input', (e) => {
    document.getElementById("guy-right-hand").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("right-wrist-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-upper-body-control").addEventListener('input', (e) => {
    document.getElementById("guy-upper-body-group").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("upper-body-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-left-leg-control").addEventListener('input', (e) => {
    document.getElementById("guy-left-leg").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("left-leg-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-right-leg-control").addEventListener('input', (e) => {
    document.getElementById("guy-right-leg").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("right-leg-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-left-knee-control").addEventListener('input', (e) => {
    document.getElementById("guy-left-lower-leg").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("left-knee-value").textContent = e.target.value + 'deg';
});

document.getElementById("guy-right-knee-control").addEventListener('input', (e) => {
    document.getElementById("guy-right-lower-leg").style.transform = `rotate(${e.target.value}deg)`;
    document.getElementById("right-knee-value").textContent = e.target.value + 'deg';
});

document.getElementById("reset-controls").addEventListener('click', () => {
    document.getElementById("guy-all-control").value = 0;
    document.getElementById("guy").style.transform = ``;
    document.getElementById("all-value").textContent = 0 + 'deg';

    document.getElementById("guy-head-control").value = 0;
    document.getElementById("guy-head").style.transform = ``;
    document.getElementById("neck-value").textContent = 0 + 'deg';

    document.getElementById("guy-left-shoulder-control").value = 0;
    document.getElementById("guy-left-arm").style.transform = ``;
    document.getElementById("left-shoulder-value").textContent = 0 + 'deg';

    document.getElementById("guy-left-elbow-control").value = 0;
    document.getElementById("guy-left-lower-arm-group").style.transform = ``;
    document.getElementById("left-elbow-value").textContent = 0 + 'deg';

    document.getElementById("guy-left-wrist-control").value = 0;
    document.getElementById("guy-left-hand").style.transform = ``;
    document.getElementById("left-wrist-value").textContent = 0 + 'deg';

    document.getElementById("guy-right-shoulder-control").value = 0;
    document.getElementById("guy-right-arm").style.transform = ``;
    document.getElementById("right-shoulder-value").textContent = 0 + 'deg';

    document.getElementById("guy-right-elbow-control").value = 0;
    document.getElementById("guy-right-lower-arm-group").style.transform = ``;
    document.getElementById("right-elbow-value").textContent = 0 + 'deg';

    document.getElementById("guy-right-wrist-control").value = 0;
    document.getElementById("guy-right-hand").style.transform = ``;
    document.getElementById("right-wrist-value").textContent = 0 + 'deg';

    document.getElementById("guy-upper-body-control").value = 0;
    document.getElementById("guy-upper-body-group").style.transform = ``;
    document.getElementById("upper-body-value").textContent = 0 + 'deg';

    document.getElementById("guy-left-leg-control").value = 0;
    document.getElementById("guy-left-leg").style.transform = ``;
    document.getElementById("left-leg-value").textContent = 0 + 'deg';

    document.getElementById("guy-right-leg-control").value = 0;
    document.getElementById("guy-right-leg").style.transform = ``;
    document.getElementById("right-leg-value").textContent = 0 + 'deg';
    
    document.getElementById("guy-left-knee-control").value = 0;
    document.getElementById("guy-left-lower-leg").style.transform = ``;
    document.getElementById("left-knee-value").textContent = 0 + 'deg';

    document.getElementById("guy-right-knee-control").value = 0;
    document.getElementById("guy-right-lower-leg").style.transform = ``;
    document.getElementById("right-knee-value").textContent = 0 + 'deg';
});

document.getElementById("guy-show-bounding-boxes").addEventListener('click', () => {
    guy.classList.toggle('show-bounding-boxes');
});