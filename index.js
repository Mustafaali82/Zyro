const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelector(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    humburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function invisibleFunction() {
  document.querySelector(".input-form").style.display = "none";
  document.querySelector(".invisble").style.display = "block";
}

function invisibleFunction1() {
  document.querySelector(".three").style.display = "none";
  document.querySelector(".invisble1").style.display = "block";
}
