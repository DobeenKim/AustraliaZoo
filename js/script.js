const toggleMenu = () => {
  const menu = document.querySelector(".nav-menu");
  menu.classList.toggle("show");
};

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);

function Animal(species, names) {
  (this.species = species), (this.names = names);
}

let mammal = new Animal("Mammals", ["Echidna", "Tasmanian Devil", "Quokka"]);
let bird = new Animal("Birds", [
  "Cassowary",
  "Kookaburra",
  "Yellow Tailed Black Cockatoo",
]);
let reptile = new Animal("Reptiles", [
  "Frill-necked Lizard",
  "Hawksbill Turtle",
  "Perentie",
]);
let animalArray = [mammal, bird, reptile];

let main_sidebar = document.querySelector(".main__sidebar");
let tab = document.querySelector(".sidebar-tab");

animalArray.forEach((animal) => {
  let nav = document.querySelector(".sidebar");
  let allTitle = document.createElement("a");

  allTitle.textContent = animal.species;
  allTitle.href = "#";
  let uls = document.createElement("ul");
  nav.append(allTitle, uls);

  animal.names.forEach((animalName) => {
    let liElement = document.createElement("li");
    liElement.textContent = animalName;
    liElement.classList.add("active");
    uls.appendChild(liElement);
  });
});


document.querySelectorAll("a").forEach((title) => {
  title.addEventListener("click", () => {
    let animalUls = title.nextElementSibling;
    let animalLis = animalUls.querySelectorAll("li");
    animalLis.forEach((item) => {
      item.classList.toggle("active");
      item.addEventListener("click", () =>
        main_sidebar.classList.remove("open")
      );
    });
  });
});

if (window.matchMedia("(max-width: 767px)").matches) {
  tab.addEventListener("click", () => {
    main_sidebar.classList.toggle("open");
  });
}

document.addEventListener("click", (e) => {
  if (
    window.matchMedia("(max-width: 767px)").matches &&
    !main_sidebar.contains(e.target)
  ) {
    main_sidebar.classList.remove("open");
  }
});
