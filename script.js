document.addEventListener("DOMContentLoaded", function () {
  var toggler = document.querySelector(".navbar-toggler");
  var canvas = document.getElementById("offcanvasNavbar");

  if (toggler && canvas) {
    canvas.addEventListener("shown.bs.offcanvas", function () {
      toggler.innerHTML = '&times;';
    });

    canvas.addEventListener("hidden.bs.offcanvas", function () {
      toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
    });
  }
});

