// Mobile-Menu---->
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Burger Animation
    burger.classList.toggle('toggle');
  });
};
navSlide();

// testimonial-slider---->
$('.testimonial-area').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<ion-icon name="chevron-back-outline"></ion-icon>',
    '<ion-icon name="chevron-forward-outline"></ion-icon>',
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// team-member-slider---->
$('.team-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  margin: 40,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
