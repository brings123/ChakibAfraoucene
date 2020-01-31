$(document).ready(function() {
  let $btns = $(".work .buttons-group button");

  $btns.click(function(e) {
    $(".work .buttons-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".work .grid").isotope({
      filter: selector
    });

    return false;
  });
  let nav_offset_top = $(".showcase").height() + 50;

  function navbarFixed() {
    if ($(".showcase").length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".navbar").addClass("navbar_fixed");
        } else {
          $(".navbar").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
