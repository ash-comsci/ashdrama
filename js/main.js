

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Curtain Fade

// Curtain Fade function to trigger the animation on page load
function curtainFade() {
  console.log("Page loaded");

  // Add the class `curtain-opened` when the page is fully loaded
  document.querySelector('.curtain-0').classList.add('curtain-opened');
}
