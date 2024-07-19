document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".hamburger-menu");
  var navUl = document.querySelector("nav ul");

  hamburger.addEventListener("click", function () {
    navUl.classList.toggle("active");
  });
});
