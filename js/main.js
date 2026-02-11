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

  $(".contactForm").on("submit", function (e) {
    e.preventDefault();

    const form = $(this);

    $.ajax({
      url: form.attr("action"),
      method: form.attr("method"),
      data: form.serialize(),
      dataType: "json",
      success: function () {
        $("#toast").stop(true, true).slideDown(300);

        form[0].reset();

        setTimeout(function () {
          $("#toast").slideUp(300);
        }, 3000);
      },
      error: function () {
        alert("Something went wrong. Please try again.");
      },
    });
  });
});
