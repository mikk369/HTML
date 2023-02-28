// ACCORDION
const items = document.querySelectorAll(".item");

for (const item of items) {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
}

// CAROUSELL
const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".dot");
testimonials = document.querySelectorAll(".testimonial");

let currentSlide = 0;
// Show the current slide and active dot
function showSlide(slideIndex) {
  // Hide all slides and remove active class from all dots
  testimonials.forEach((testimonial) => testimonial.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("dot-active"));
  // Show the current slide and activate the corresponding dot
  testimonials[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("dot-active");
}
// Show the first slide and active dot on page load
showSlide(currentSlide);
// Add event listeners to carousel buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "left") {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = testimonials.length - 1;
      }
    } else if (button.id === "right") {
      currentSlide++;
      if (currentSlide >= testimonials.length) {
        currentSlide = 0;
      }
    }
    showSlide(currentSlide);
  });
});
