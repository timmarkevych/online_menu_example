let modalIsActive = false; // Variable to track modal state

const review_modal = document.getElementById("review-modal");
const close_modal = document.getElementById("close-modal");
const modal_background = document.getElementById("background-modal");


modal_background.style.visibility = "hidden";

function review_show() {
    modalIsActive = !modalIsActive; // Toggle modal state
    review_modal.classList.toggle("review-modal-active");
    modal_background.classList.toggle("modal-background-active");
    
    // Set visibility to 'visible' when modal is active
    if (modal_background.classList.contains("modal-background-active")) {
        modal_background.style.visibility = "visible";
    } else {
        // If not active, set visibility to 'hidden' after the transition ends
        setTimeout(() => {
            modal_background.style.visibility = "hidden";
        }, 500); // Adjust timing to match transition duration
    }
}



close_modal.addEventListener('click', function() {
    if (modalIsActive) {
        review_show(); // Call review_show() to close the modal
        modalIsActive = false; // Update modal state
    }
});

// Add event listener to the document
document.addEventListener('click', function(event) {
    // Check if the modal is active
    if (modalIsActive) {
        // Check if the click event target is outside of the modal
        if (!review_modal.contains(event.target) && !event.target.closest('.like-btn')) {
            review_show(); // Call review_show() to close the modal
            modalIsActive = false; // Update modal state
        }
    }
});

// Now, you can bind event listeners to each like button
const likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach(function(likeBtn) {
    likeBtn.addEventListener('click', review_show);
});
