// Select the sections and the buttons
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');

const startBtn = document.getElementById('start-btn');
const nextBtn2 = document.getElementById('next-btn-2');
const nextBtn3 = document.getElementById('next-btn-3');
const nextBtn4 = document.getElementById('next-btn-4');

// Show the first section initially
section1.classList.add('active');

// Event listeners for the buttons to move to next sections
startBtn.addEventListener('click', () => {
    section1.classList.remove('active');
    section2.classList.add('active');
});

nextBtn2.addEventListener('click', () => {
    section2.classList.remove('active');
    section3.classList.add('active');
});

nextBtn3.addEventListener('click', () => {
    section3.classList.remove('active');
    section4.classList.add('active');
});

nextBtn4.addEventListener('click', () => {
    section4.classList.remove('active');
    section5.classList.add('active');
});
