var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});

// phần này tìm trong Event của doc owlCourosel
//https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html
// $(".owl-prev").click(function () {
//   owl.trigger("prev.owl.carousel");
// });

// $(".owl-next").click(function () {
//   owl.trigger("next.owl.carousel");
// });
