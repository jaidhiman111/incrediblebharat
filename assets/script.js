// Function to slide left in the slider section
function slideLeft(section) {
  // Find the slider element using the section name, e.g., 'travel-slider-track' or '.slider'
  const slider = document.querySelector(`#${section}-slider .slider`);
  slider.scrollBy({ left: -300, behavior: 'smooth' });
}

// Function to slide right in the slider section
function slideRight(section) {
  const slider = document.querySelector(`#${section}-slider .slider`);
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}

// Function to open the modal and disable background scrolling
function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";
  
  // Disable background scrolling when modal is open
  document.body.style.overflow = 'hidden'; // Disable scroll on the body
  
  // Add event listener to close modal when clicking outside the content
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal(id);
    }
  });
}

// Function to close the modal and re-enable background scrolling
function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "none";

  // Re-enable background scrolling when modal is closed
  document.body.style.overflow = 'auto'; // Enable scroll on the body
}
