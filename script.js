const descriptionContainer = document.querySelector('.description-container');

// Create an intersection observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // When the section is in view, add the "active" class to trigger animation
      descriptionContainer.classList.add('active');
      observer.unobserve(entry.target); // Stop observing once animation is triggered
    }
  });
});

// Start observing the element
observer.observe(descriptionContainer);