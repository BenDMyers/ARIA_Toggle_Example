const toggleCheckbox = document.querySelector('.toggle-switch-semantic input');
const toggler = document.querySelector('.toggle-switch');
const switchStatus = document.querySelector('.status');

let switchIsActive = false;

// Called whenever you click on the toggle
function handleChange() {
    // Causes page to alternate between light and dark mode
    document.body.classList.toggle('dark-mode');

    // Causes the toggle to change appearance
    toggler.classList.toggle('active');

    // Modifies status contents
    switchIsActive = !switchIsActive;
    switchStatus.innerHTML = switchIsActive ? 'on' : 'off';
}

toggleCheckbox.onchange = handleChange;