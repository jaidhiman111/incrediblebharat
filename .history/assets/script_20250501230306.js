<script>
  function slideLeft(section) {
    // Find the slider element using the section name, e.g., 'travel-slider-track' or just '.slider'
    const slider = document.querySelector(`#${section}-slider .slider`);
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  }

  function slideRight(section) {
    const slider = document.querySelector(`#${section}-slider .slider`);
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  }
</script>
