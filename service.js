document.addEventListener('DOMContentLoaded', function () {
  const sidebarItems = document.querySelectorAll('#sidebar-items li');
  const sliderImages = document.querySelectorAll('.slider-wrapper img');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const serviceSection = document.querySelector('.service_sec');
  const totalSlides = sliderImages.length;
  let currentSlide = 1;
  let isScrolling = false; // To throttle scroll events

  // Function to show the slide and update the active states
  function showSlide(slideNumber) {
    const offset = (slideNumber - 1) * 100; // Each image is 100% of the wrapper width
    sliderWrapper.style.transform = `translateX(-${offset}%)`;
    
    // Update active states for sidebar and dots
    sidebarItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    document.querySelector(`#sidebar-items li[data-slide="${slideNumber}"]`).classList.add('active');
    document.querySelector(`.slider-dots .dot[data-slide="${slideNumber}"]`).classList.add('active');
  }

  // Function to handle the wheel scroll
  function handleScroll(event) {
    if (isScrolling) return; // Prevent multiple triggers

    const scrollAmount = event.deltaY;

    // Scroll down (next slide)
    if (scrollAmount > 0 && currentSlide < totalSlides) {
      currentSlide++;
      showSlide(currentSlide);
    } 
    // Scroll up (previous slide)
    else if (scrollAmount < 0 && currentSlide > 1) {
      currentSlide--;
      showSlide(currentSlide);
    }

    // Throttle to prevent rapid scrolling
    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 700); // Adjust delay for smoother scrolling
  }

  // Allow normal scrolling after the last slide and before the first slide
  serviceSection.addEventListener('wheel', function (event) {
    if (currentSlide === totalSlides && event.deltaY > 0) {
      // Allow normal scroll if on the last slide and scrolling down
      return;
    }
    if (currentSlide === 1 && event.deltaY < 0) {
      // Allow normal scroll if on the first slide and scrolling up
      return;
    }
    handleScroll(event);
    event.preventDefault(); // Prevent default vertical scrolling
  });

  // Sidebar and dots navigation
  sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
      currentSlide = parseInt(this.getAttribute('data-slide'));
      showSlide(currentSlide);
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', function () {
      currentSlide = parseInt(this.getAttribute('data-slide'));
      showSlide(currentSlide);
    });
  });

  // Initialize the first slide
  showSlide(currentSlide);
});
