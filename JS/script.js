// Select the hamburger button and mobile navbar container
const hamburger = document.getElementById('hamburger');
const navbarSlide = document.getElementById('navbarSlide');

// Add event listener to the hamburger button to toggle the menu
hamburger.addEventListener('click', () => {
  // Toggle the 'hidden' class to show or hide the navbar
  navbarSlide.classList.toggle('hidden');

  // Toggle the 'open' class for the hamburger icon animation
  hamburger.classList.toggle('open');
});

document.querySelectorAll(`.navLink`).forEach((e => e.addEventListener(`click`, () => {
  // Toggle the 'hidden' class to show or hide the navbar
  navbarSlide.classList.toggle('hidden');

  // Toggle the 'open' class for the hamburger icon animation
  hamburger.classList.toggle('open');
})))



document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.getElementById('sliderContainer');
  const slides = document.querySelectorAll('.boxes');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const indicators = document.querySelectorAll('#slider-Indicators button');

  // // Debugging: Check if elements are selected properly
  // console.log('prevButton:', prevButton);
  // console.log('nextButton:', nextButton);
  // console.log('indicators:', indicators);

  // Check if any of the essential elements are missing
  if (!prevButton || !nextButton || indicators.length === 0) {
    console.error('Some elements are missing');
    return; // Exit if essential elements are missing
  }

  let currentIndex = 0;

  // Function to update the slider position
  const updateSlider = () => {
    const offset = slides[currentIndex].offsetLeft;
    sliderContainer.scrollTo({ left: offset, behavior: 'smooth' });

    // Update active indicator
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('bg-bgSecondary');
      } else {
        indicator.classList.remove('bg-bgSecondary');
      }
    });
  };

  // Previous button click handler
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateSlider();
  });

  // Next button click handler
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
  });

  // Indicator click handler
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Initialize the first indicator
  updateSlider();

  // Auto slide every 2 seconds (optional)
  setInterval(() => {
    nextButton.click();
  }, 2000);
});




// heart like button
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");
  let likeBtn = document.querySelector(`#like`);

  // Debugging: Check if the like button is found
  console.log('likeBtn:', likeBtn);

  if (likeBtn) {
    const like = () => {
      if (likeBtn.classList.contains(`fa-regular`)) {
        likeBtn.classList.replace(`fa-regular`, `fa-solid`);
        likeBtn.classList.add(`like-animation`);
      } else {
        likeBtn.classList.replace(`fa-solid`, `fa-regular`);
        likeBtn.classList.remove(`like-animation`);
      }
    };

    likeBtn.addEventListener(`click`, like);
  } else {
    console.error("The like button is not found.");
  }
});


// share 
// Add event listener for the button click
document.getElementById("dropdownDefaultButton").addEventListener("click", function () {
  var dropdown = document.getElementById("dropdown");
  var isVisible = dropdown.classList.contains("hidden");

  // Toggle visibility of the dropdown
  if (isVisible) {
    dropdown.classList.remove("hidden"); // Show the dropdown
    dropdown.classList.add("block"); // Ensure it's visible
    this.setAttribute("aria-expanded", "true"); // Update aria-expanded to true
  } else {
    dropdown.classList.add("hidden"); // Hide the dropdown
    dropdown.classList.remove("block"); // Ensure it's hidden
    this.setAttribute("aria-expanded", "false"); // Update aria-expanded to false
  }
});



// =====

// window.addEventListener(`load`, () => {
//   const loader = document.querySelector(`.loader`);

//   loader.classList.add(`loader-hidden`);

//   loader.addEventListener(`transitionend`, () => {
//     document.body.removeChild(`loader`);
//   })
// })
// // pending