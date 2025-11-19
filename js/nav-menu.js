const toggleMenu = () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
};

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);