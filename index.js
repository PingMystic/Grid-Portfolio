let barIcon = document.querySelector(".bar-icon");
let menuNav = document.querySelector(".menu-nav");

barIcon.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});
