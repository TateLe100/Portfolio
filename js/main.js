$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();

    var target = $(this.getAttribute("href"));
    var offset = 120;

    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - offset,
        },
        600,
      );
    }
  });
});
