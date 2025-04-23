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
var nextBtn = document.querySelector(".customNextBtn");
prevBtn.style.display = "none";
var isPress = false;

// logic 1
// ấn lần 1 hiện lên cả 2 nút
// ấn tiếp lần 2 hiện cả 2 nút
// ấn back về lần 1 hiện 2 nút
// ấn back lần 2 về hiện  1 nút next
$(".customNextBtn").click(function () {
  owl.trigger("next.owl.carousel");
  isPress = true;

  if (isPress === true) {
    prevBtn.style.display = "block";
  }
});

$(".customPrevBtn").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
