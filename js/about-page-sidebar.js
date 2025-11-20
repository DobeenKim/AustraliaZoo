function Members(img, nickname, name, favAnimal, email, linkedin, github) {
  (this.img = img),
    (this.nickname = nickname),
    (this.name = name),
    (this.favAnimal = favAnimal),
    (this.email = email),
    (this.linkedin = linkedin),
    (this.github = github);
}

let dobeen = new Members(
  "./images/raccoon.jpg",
  "Dodo",
  "Dobeen",
  "Raccoon",
  "Dobeen.Kim@edu.futuregame.se",
  "https://www.linkedin.com/in/dobeen-kim",
  "https://github.com/DobeenKim"
);

let claudia = new Members(
  "./images/panda.jpg",
  "Claudia",
  "Claudia",
  "Panda",
  "Claudia.Pereira@edu.futuregames.se",
  "https://www.linkedin.com/in/claudia-pereira-carion/",
  "https://github.com/claudiacarion"
);

let ting = new Members(
  "./images/dragon.jpg",
  "Tingting",
  "Ting",
  "Dog",
  "Ting.Li@edu.futuregames.se",
  "http://www.linkedin.com/in/ting-li-218540382",
  "https://github.com/janetli82-ui"
);

let gabriella = new Members(
  "./images/sloth01.jpg",
  "Wineynia",
  "Gabriella",
  "Sloth",
  "Gabriella.Arif@edu.futuregames.se",
  "https://github.com/wineynia",
  "https://www.linkedin.com/in/gabriella-a-99a903121b"
);

let maho = new Members(
  "./images/sloth02.jpg",
  "MC Mahaa",
  "Maho",
  "Sloth",
  "Maho.Kurauchi@edu.futuregames.se",
  "http://www.linkedin.com/in/maho-kurauchi",
  "https://github.com/mamahimiko"
);

let memberArray = [dobeen, claudia, ting, gabriella, maho];

let sidebarContent = document.querySelector(".sidebar-content");

sidebarContent.innerHTML = `
    <h3 class="sidebar__title">Members!</h3>
    <ul class="sidebar__list">
      ${memberArray
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
