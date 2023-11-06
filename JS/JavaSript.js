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
  }, 1000);

  jQuery("a.scrollto").click(function () {
    $(".header__burger, .header__menu").removeClass("active");
    elementClick = jQuery(this).attr("href");
    destination = jQuery(elementClick).offset().top - offset1;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      { scrollTop: destination },
      1100
    );
    return false;
  });
});
