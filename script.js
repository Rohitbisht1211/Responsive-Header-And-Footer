// Get the toggle bar, menu, and document elements
const toggleBar = document.getElementById('toggle-bar');
const menu = document.querySelector('nav.menu');
const body = document.querySelector('body');

// Function to toggle the menu
function toggleMenu() {
    menu.classList.toggle('open');
}

// Function to close the menu if the click is outside of it
function closeMenu(event) {
    if (!menu.contains(event.target) && !toggleBar.contains(event.target)) {
        menu.classList.remove('open');
    }
}

// Add click event listener to the toggle bar
toggleBar.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the event from bubbling up
    toggleMenu();
});

// Add click event listener to the document
body.addEventListener('click', closeMenu);


