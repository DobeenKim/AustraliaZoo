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
let nav = document.querySelector(".sidebar");
animalArray.forEach((animal) => {
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
      item.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  });
});

let tab = document.querySelector(".sidebar-tab");
tab.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && tab.contains(e.target)) {
    nav.classList.remove("open");
  }
});
