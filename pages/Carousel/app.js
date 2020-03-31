const carousel = document.querySelector('.carousel-slide');
const slider = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = slider[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listener

nextBtn.addEventListener('click', () => {
     if (counter >= slider.length - 1) return; 
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carousel.addEventListener('transitionend', () => {
    if (slider[counter].id === 'lastClone') {
        carousel.style.transition = "none";
        counter = slider.length - 2;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (slider[counter].id === 'firstClone') {
        carousel.style.transition = "none";
        counter = slider.length - counter;
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});