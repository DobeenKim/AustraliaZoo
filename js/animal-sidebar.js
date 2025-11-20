let sidebarContent = document.querySelector(".sidebar-content");

// Mammals Sidebar
sidebarContent.innerHTML = `
  <h3 class="sidebar__title">${mammals.name}</h3>
  <ul class="sidebar__list">
    ${mammals.animals.map(animal => `<li class="sidebar__item">${animal.name}</li>`).join("")}
  </ul>
`;
//

const sidebar = document.querySelector(".sidebar-content");
const tab = document.querySelector(".sidebar-tab");
const sidebarItems = document.querySelectorAll(".sidebar__item");

tab.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("click", e => {
  if (!sidebar.contains(e.target) && !tab.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});

sidebarItems.forEach(item => {
  item.addEventListener("click", () => {
    const clicked = item.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    const target = document.querySelector(`.animal-card.${clicked}`);

    document.querySelectorAll(".animal-card").forEach(card => {
      if (card !== target) {
        card.classList.remove("active");
      }
    });

    target.classList.toggle("active");

    sidebar.classList.remove("open");
  });
});