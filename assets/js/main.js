var sildeBrand = $(".brand-higlight-list");
sildeBrand.owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

// var sildeBrand = $(".brand-higlight-list");
// sildeBrand.owlCarousel({
//   loop: true,
//   margin: 0,
//   nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 3,
//     },
//     1000: {
//       items: 3,
//     },
//   },
// });
// phần này tìm trong Event của doc owlCourosel
//https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html
// $(".owl-prev").click(function () {
//   owl.trigger("prev.owl.carousel");
// });

// $(".owl-next").click(function () {
//   owl.trigger("next.owl.carousel");
// });

var owl = $(".owl-carousel");
owl.owlCarousel();
var prevBtn = document.querySelector(".customPrevBtn");

prevBtn.style.display = "none";
var isPress = false;
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
  isPress = true;
  if (isPress === true) {
    prevBtn.style.display = "block";
  }
});

$(".customPrevBtn").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
