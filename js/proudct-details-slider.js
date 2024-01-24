$(document).ready(function () {
  var productSlider = $(".product-slider");

  productSlider.slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<span class="slick-prev -mt-[20px]"><i class="bg-[#000] text-white text-[20px] font-bold rounded-full cursor-pointer bx bx-chevron-left"></i></span>',
    nextArrow:
      '<span class="slick-next -mt-[20px]"><i class="bg-[#000] text-white text-[22px] font-bold rounded-full cursor-pointer bx bx-chevron-right"></i></span>',
  });

  // Disable arrows initially if at the beginning or end
  productSlider.on("init", function (event, slick) {
    if (slick.currentSlide === 0) {
      $(".slick-prev").addClass("slick-disabled");
    } else if (
      slick.currentSlide ===
      slick.slideCount - slick.options.slidesToShow
    ) {
      $(".slick-next").addClass("slick-disabled");
    }
  });

  // Disable arrows dynamically on slide change
  productSlider.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      // Check if it's the first slide, disable the prev arrow
      if (nextSlide === 0) {
        $(".slick-prev").addClass("slick-disabled");
      } else {
        $(".slick-prev").removeClass("slick-disabled");
      }

      // Check if it's the last slide, disable the next arrow
      if (nextSlide === slick.slideCount - slick.options.slidesToShow) {
        $(".slick-next").addClass("slick-disabled");
      } else {
        $(".slick-next").removeClass("slick-disabled");
      }
    }
  );
});


function changeImage(src) {
    document.getElementById('main-image').src = src;
  }
