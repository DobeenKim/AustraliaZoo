let sideBarMemberArray = [
  { name: "Dobeen" },
  { name: "Claudia" },
  { name: "Ting" },
  { name: "Gabriella" },
  { name: "Maho" },
];

let sidebarContent = document.querySelector(".sidebar-content");

sidebarContent.innerHTML = `
    <h3 class="sidebar__title">Members!</h3>
    <ul class="sidebar__list">
      ${sideBarMemberArray
        .map((member) => `<li class="sidebar__item">${member.name}</li>`)
        .join("")}
    </ul>
  `;

const sidebar = document.querySelector(".sidebar-content");
const tab = document.querySelector(".sidebar-tab");
const sidebarItems = document.querySelectorAll(".sidebar__item");

tab.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !tab.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    const clicked = item.textContent.trim().toLowerCase().replace(/\s+/g, "-");
    const target = document.querySelector(`.member-card.${clicked}`);

    document.querySelectorAll(".member-card").forEach((card) => {
      if (card !== target) {
        card.classList.remove("active");
      }
    });

    target.classList.toggle("active");

    sidebar.classList.remove("open");
  });
});
