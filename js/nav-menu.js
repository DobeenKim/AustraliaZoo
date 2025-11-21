const menuItems = [
  { name: "Home", href: "./index.html", active: true },
  { name: "Birds", href: "./birds.html" },
  { name: "Reptiles", href: "./reptiles.html" },
  { name: "Mammals", href: "./mammals.html" },
  { name: "About Us", href: "./about.html" },
];

const buildNavMenu = () => {
  const navMenu = document.querySelector(".nav-menu");

  menuItems.forEach((item) => {
    const anchor = document.createElement("a");
    anchor.href = item.href;
    anchor.textContent = item.name;
    if (item.active) {
      anchor.classList.add("active");
    }
    navMenu.appendChild(anchor);
  });
};

const toggleMenu = () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
};

document.addEventListener("DOMContentLoaded", buildNavMenu);
