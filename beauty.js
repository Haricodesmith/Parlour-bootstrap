const scrollContainer = document.getElementById('scrollContainer');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const scrollAmount = 300;

leftArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

function showService(serviceNumber) {
    // Hide all service sections and remove 'active' class from buttons
    for (let i = 1; i <= 5; i++) {
        document.getElementById('service-' + i).style.display = 'none';
        document.querySelectorAll('.s-heading button')[i - 1].classList.remove('active');
    }
    // Show the selected service section and add 'active' class to the corresponding button
    document.getElementById('service-' + serviceNumber).style.display = 'block';
    document.querySelectorAll('.s-heading button')[serviceNumber - 1].classList.add('active');
}

// Initially show the first service section
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('service-1').style.display = 'block'; // Show service-1 by default
});