const toggler = document.querySelector('.toggle-switch');
const switchStatus = document.querySelector('.status');

let switchIsActive = false;

// Called whenever you click on the toggle
function handleClick() {
    // Causes page to alternate between light and dark mode
    document.body.classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    toggler.classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    switchStatus.innerHTML = switchIsActive ? 'on' : 'off';

    // Toggle aria-checked
    toggler.setAttribute('aria-checked', switchIsActive);
}

// Adds keyboard events to the toggle
toggler.addEventListener('keydown', function (event) {
    if (event.key === ' ' || event.key === 'Enter') {
        // Prevents unintentional form submissions, page scrolls, the like
        event.preventDefault();

        handleClick();
    }
});

toggler.onclick = handleClick;