function slideLeft(section) {
  // Find the slider element using the section name, e.g., 'travel-slider-track' or just '.slider'
  const slider = document.querySelector(`#${section}-slider .slider`);
  slider.scrollBy({ left: -300, behavior: 'smooth' });
}

function slideRight(section) {
  const slider = document.querySelector(`#${section}-slider .slider`);
  slider.scrollBy({ left: 300, behavior: 'smooth' });
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "flex";

  // Add event listener to close modal when clicking outside the content
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}