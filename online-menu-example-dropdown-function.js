const dropdownToggle = document.getElementById("dropdownToggle");
const languageDropdown = document.getElementById("language-dropdown");

// Function to close dropdowns
function closeDropdowns() {
    languageDropdown.classList.remove("show");
}

dropdownToggle.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up
    closeDropdowns(); // Close other dropdowns
    languageDropdown.classList.toggle("show");
});

// Event listener to close dropdowns when clicking outside of them
document.addEventListener('click', function(event) {
    closeDropdowns();
});

// Prevent dropdowns from closing when clicking inside them
languageDropdown.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the click event from bubbling up
});
