

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

function openNav() {
  document.getElementById("mySidenav").style.width = "240px";
  }

  // Curtain Fade function to trigger the animation on page load
  function curtainFade() {
    console.log("Page loaded");

    // Add the class `curtain-opened` when the page is fully loaded
    document.querySelector('.curtain-0').classList.add('curtain-opened');
  }

  let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop && currentScroll > 5) {
            navbar.style.top = "-200px";
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

  
  let lastScrollTop1 = 0;
  const sidebar = document.getElementById("mySidenav");
  window.addEventListener("scroll", function() {
      let scrollTop1 = window.pageYOffset || document.documentElement.scrollTop1;
      if (scrollTop1 > lastScrollTop1) {
            sidebar.style.width = "0";
      } else if (scrollTop1 < lastScrollTop1) {
            sidebar.style.width = "0";
      } else {
            sidebar.style.width = "-200px";
      }
      lastScrollTop1 = scrollTop1;
  });
 
 
  const fadeText = document.getElementById("fadeText");
      window.addEventListener("scroll", function() {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const maxScroll = 650;
          const newOpacity = Math.min(scrollTop / maxScroll, 1);
          fadeText.style.opacity = newOpacity;
      });


   
   
  function createSlideshow(sliderId, dotsId) {
    const slides = document.querySelector(`#${sliderId} .slides`);
    const dots = document.querySelectorAll(`#${dotsId} .dot`);
    let currentIndex = 0;
  function showSlide(index) {
      const slideHeight = slides.children[0].clientHeight;
      slides.style.transform = `translateY(${-index * slideHeight}px)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  function autoSlide() {
      currentIndex = (currentIndex + 1) % slides.children.length;
      showSlide(currentIndex);
    }
    setInterval(autoSlide, 2999);
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  }
  createSlideshow('slider1', 'dots1');
  createSlideshow('slider2', 'dots2');
