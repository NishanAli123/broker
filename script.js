document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter"); // Get the counter element
    const target = 1000; // Target count value
    const duration = 3000; // Duration in milliseconds (3 seconds)
    let animationFrameId; // Variable to store the requestAnimationFrame ID

    const startCounterAnimation = () => {
        const startTime = performance.now(); // Record the start time

        // Step function to update the counter
        const step = (currentTime) => {
            const elapsedTime = currentTime - startTime; // Calculate elapsed time
            const progress = Math.min(elapsedTime / duration, 1); // Calculate progress, ensuring it does not exceed 1
            const currentCount = Math.floor(progress * target); // Calculate current count based on progress
            counterElement.textContent = currentCount; // Update the counter element's text

            if (progress < 1) { // If the progress is less than 1, continue the animation
                animationFrameId = requestAnimationFrame(step);
            }
        };

        animationFrameId = requestAnimationFrame(step); // Start the counter animation
    };

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounterAnimation(); // Start the counter animation
            } else {
                cancelAnimationFrame(animationFrameId); // Cancel the animation if the element exits the viewport
                counterElement.textContent = 0; // Reset the counter when out of view
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    observer.observe(counterElement); // Observe the counter element
});


document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class to trigger animation
                // Optional: Unobserve the element if you want the animation to trigger only once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'visible' class if you want the animation to reset when it goes out of view
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    elementsToAnimate.forEach(element => {
        observer.observe(element); // Observe each element
    });

    const counterElement = document.getElementById("counter"); // Get the counter element
    const target = 1000; // Target count value
    const duration = 3000; // Duration in milliseconds (3 seconds)
    let animationFrameId; // Variable to store the requestAnimationFrame ID

    const startCounterAnimation = () => {
        const startTime = performance.now(); // Record the start time

        // Step function to update the counter
        const step = (currentTime) => {
            const elapsedTime = currentTime - startTime; // Calculate elapsed time
            const progress = Math.min(elapsedTime / duration, 1); // Calculate progress, ensuring it does not exceed 1
            const currentCount = Math.floor(progress * target); // Calculate current count based on progress
            counterElement.textContent = currentCount; // Update the counter element's text

            if (progress < 1) { // If the progress is less than 1, continue the animation
                animationFrameId = requestAnimationFrame(step);
            }
        };

        animationFrameId = requestAnimationFrame(step); // Start the counter animation
    };

    observer.observe(counterElement); // Observe the counter element

    const observerForCounter = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounterAnimation(); // Start the counter animation
            } else {
                cancelAnimationFrame(animationFrameId); // Cancel the animation if the element exits the viewport
                counterElement.textContent = 0; // Reset the counter when out of view
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    observerForCounter.observe(counterElement); // Observe the counter element
});


  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
      ride: 'carousel',
      interval: 5000,
      wrap: true
    });

    myCarousel.addEventListener('touchstart', function (e) {
      console.log('Touch start event detected.');
    });

    myCarousel.addEventListener('touchend', function (e) {
      console.log('Touch end event detected.');
    });
  });
