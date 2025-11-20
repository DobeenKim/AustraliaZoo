const menuItems = [
  { name: "Home", href: "#home", active: true },
  { name: "Birds", href: "#birds" },
  { name: "Reptiles", href: "#reptiles" },
  { name: "Mammals", href: "#mammals" },
  { name: "About Us", href: "#aboutUs" },
];

const buildNavMenu = () => {
  const navMenu = document.getElementById("navMenu");

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
