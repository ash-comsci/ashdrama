window.onload = function () {
  if (window.location.pathname == "/index.html") {
    curtainFade();
    createSlideshow("slider1");
    createSlideshow("slider2");

    // Curtain Fade function to trigger the animation on page load
  function curtainFade() {
    console.log("Page loaded");

    // Add the class `curtain-opened` when the page is fully loaded
    document.querySelector(".curtain-0").classList.add("curtain-opened");
  }
  let mySidenav = document.getElementById("mySidenav");
  let menu = document.getElementById("menu");

  console.log(mySidenav)
  let lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 5) {
      navbar.style.top = "-200px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  let lastScrollTop1 = 0;
  const sidebar = mySidenav;
  window.addEventListener("scroll", function () {
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
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = 650;
    const newOpacity = Math.min(scrollTop / maxScroll, 1);
    fadeText.style.opacity = newOpacity;
  });
  }

  
  mySidenav.addEventListener("mouseleave", closeNav);
  menu.addEventListener("mouseenter", openNav)

  // Curtain Fade

  // Curtain Fade function to trigger the animation on page load
  function curtainFade() {
    console.log("Page loaded");

    // Add the class `curtain-opened` when the page is fully loaded
    document.querySelector(".curtain-0").classList.add("curtain-opened");
  }

  function openNav() {
    console.log("nav opened")
    mySidenav.style.width = "240px";
    document.getElementById("logo").style.opacity = "0%";
  }

  function closeNav() {
    console.log("nav closed")
    mySidenav.style.width = "0px";
    document.getElementById("logo").style.opacity = "100%";
  }

  createSlideshow("slideshow-container");

  function createSlideshow(sliderId) {
    const slides = document.querySelector(`#${sliderId} .slides`);
    let currentIndex = 0;
    function showSlide(index) {
      const slideHeight = slides.children[0].clientHeight;
      slides.style.transform = `translateY(${-index * slideHeight}px)`;
    }
    function autoSlide() {
      currentIndex = (currentIndex + 1) % slides.children.length;
      showSlide(currentIndex);
    }
    setInterval(autoSlide, 2999);
  }
};
