$(document).ready(function () {
  /*carasoul from slick*/
  $('.carasoul').slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    autoplayspeed: 4000,
    arrows: false,

    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
