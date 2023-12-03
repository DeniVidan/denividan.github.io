document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function contactClicked() {
  window.location = "#contact-me";
  document.getElementById("contact-me").classList.add("contact-me-clicked");
  delay(2000).then(() =>
    document.getElementById("contact-me").classList.remove("contact-me-clicked")
  );
}
