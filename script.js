const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 225,
    },
  },
});

new PureCounter();

// Intersection observer

const navbar = document.getElementById("my-navbar");
const header = document.querySelector("header");

const observerCallBack = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(observerCallBack, observerOptions);
observer.observe(header);
