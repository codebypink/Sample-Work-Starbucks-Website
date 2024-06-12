const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector('.ocfe');
const pcfe = document.querySelector('.pcfe');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

gcfe.addEventListener('click', () => {
    green.style.opacity = '1';
    green.style.transform = 'rotate(0deg)';

    pink.style.opacity = '0';
    pink.style.transform = 'rotate(-90deg)';
    orange.style.opacity = '0';
    orange.style.transform = 'rotate(-90deg)';
});

ocfe.addEventListener('click', () => {
    orange.style.opacity = '1';
    orange.style.transform = 'rotate(0deg)';

    pink.style.opacity = '0';
    pink.style.transform = 'rotate(-90deg)';
    green.style.opacity = '0';
    green.style.transform = 'rotate(-90deg)';
});

pcfe.addEventListener('click', () => {
    pink.style.opacity = '1';
    pink.style.transform = 'rotate(0deg)';

    green.style.opacity = '0';
    green.style.transform = 'rotate(-90deg)';
    orange.style.opacity = '0';
    orange.style.transform = 'rotate(-90deg)';
});
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('section.hero img');

    image.addEventListener('click', function() {
        image.classList.toggle('clicked');
    });
});

function addPinkShadow(element) {
    // Remove the pink shadow class from all boxes
    document.querySelectorAll('.box').forEach(function(box) {
        box.classList.remove('pink-shadow');
    });

    // Add the pink shadow class to the clicked box
    element.classList.add('pink-shadow');
}