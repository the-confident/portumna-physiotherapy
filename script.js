const btn = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

btn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  iconOpen.style.display = isOpen ? "none" : "block";
  iconClose.style.display = isOpen ? "block" : "none";
});

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    iconOpen.style.display = "block";
    iconClose.style.display = "none";
  });
});
