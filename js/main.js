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
});
