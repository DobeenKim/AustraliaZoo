const toggleMenu = () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
};

const closeMenuOnClickOutside = (event) => {
  const menu = document.querySelector(".nav-menu");
  const toggleButton = document.querySelector(".menu-toggle");

  console.log("Clicked element:", event.target);

  if (
    !menu.contains(event.target) &&
    !toggleButton.contains(event.target) &&
    menu.classList.contains("show")
  ) {
    console.log("Closing menu");
    menu.classList.remove("show");
  }
};

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenuOnClickOutside);

