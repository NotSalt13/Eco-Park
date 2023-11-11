$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  setInterval(function () {
    if ($(".header__flag").css("color") == "rgb(255, 0, 0)") {
      offset1 = 48;
    } else {
      offset1 = 72;
    }
  }, 5000);

  jQuery("a.scrollto").click(function () {
    $(".header__burger, .header__menu").removeClass("active");
    if ($("body").hasClass("lock")) {
      $("body").removeClass("lock");
    }
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top - offset1;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      1100
    );
    return false;
  });

  $(".gallery__slider").slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    centerMode: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 767,
        settings: { arrows: false, slidesToShow: 1, centerMode: false },
      },
    ],
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,
    idle: false,

    animated: true,
    showClass: false,
    hideClass: false,

    dragToClose: true,

    Images: {
      // Disable animation from/to thumbnail on start/close
      zoom: false,
    },

    Toolbar: {
      display: {
        left: [],
        middle: ["prev", "infobar", "next"],
        right: ["slideshow", "download", "thumbs", "close"],
      },
    },

    Thumbs: {
      type: "classic",
      Carousel: {
        center: function () {
          return this.contentDim > this.viewportDim;
        },
      },
    },

    Carousel: {
      // Remove the navigation arrows
      Navigation: false,
      transition: "classic",
    },

    breakpoints: {
      "(min-width: 768px)": {
        display: {
          left: [],
          middle: ["prev", "infobar", "next"],
          right: [],
        },
      },
    },
  });

  $(".slick-cloned img").attr("data-fancybox", "null");
  setInterval(function () {
    $(".slick-cloned img").attr("data-fancybox", "null");
  }, 1000);
});
