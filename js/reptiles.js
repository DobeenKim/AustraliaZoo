function Animal(
  name,
  lifespan,
  group,
  food,
  description,
  length,
  weight,
  location,
  image
) {
  this.name = name;
  this.lifespan = `${lifespan} years`;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = `${length}`;
  this.weight = `${weight} kg`;
  this.location = location;
  this.image = image;
}

function Species(name, description) {
  this.name = name;
  this.description = description;
  this.animals = [];
  this.addAnimal = function (animal) {
    this.animals.push(animal);
  };
}

const reptiles = new Species(
  "Reptiles",
  "Reptiles are a fascinating class of cold-blooded vertebrates, distinguished by their scaly skin, egg-laying habits, and widespread habitats. This diverse group encompasses a variety of creatures, including snakes, lizards, turtles, and crocodilians. Adapted to thrive in environments ranging from deserts to lush rainforests, reptiles exhibit unique physiological traits and behaviors. Their scaly skin helps minimize water loss, making them well-suited for arid climates, while their diverse diets range from herbivorous to carnivorous, allowing them to occupy various ecological niches. Among the most intriguing reptiles are the Frill-necked Lizard, known for its dramatic display to ward off threats, and the Hawksbill Turtle, recognized for its striking shell and crucial role in marine ecosystems. Additionally, the Perentie stands out as one of the largest lizards in Australia, embodying the adaptation of reptiles to their environments. With their remarkable features and behaviors, reptiles continue to captivate researchers and nature enthusiasts alike, underscoring their importance in biodiversity and ecosystem health"
);

reptiles.addAnimal(
  new Animal(
    "Frill-necked Lizard",
    20,
    "Reptile",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    "90 cm",
    1,
    "Northern Australia",
    "./images/frill-necked-lizard.jpg"
  )
);
reptiles.addAnimal(
  new Animal(
    "Hawksbill Turtle",
    50,
    "Reptile",
    "Other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    "80 cm (carapace)",
    50,
    "Tropical coasts of Queensland, Northern Territory, and Western Australia",
    "./images/hawksbill-turtle.jpg"
  )
);
reptiles.addAnimal(
  new Animal(
    "Perentie",
    20,
    "Reptile",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    "2.5 m",
    20,
    "Deserts",
    "./images/Perentie.jpg"
  )
);

let mainContent = document.querySelector(".main-content");
mainContent.innerHTML = `
  <h2 class="species-title">${reptiles.name}</h2>
  <p class="species-info">${reptiles.description}</p>
`;

reptiles.animals.forEach((animal) => {
  const animalCard = document.createElement("div");
  const animalClassname = animal.name.toLowerCase().replace(/\s+/g, "-");
  animalCard.classList.add("animal-card", animalClassname);

  let extraInfo = `
    <p>Lifespan: ${animal.lifespan}</p>
    <p>Group: ${animal.group}</p>
    <p>Food: ${animal.food}</p>
    <p>Length: ${animal.length}</p>
    <p>Weight: ${animal.weight}</p>
    <p>Where they are found: ${animal.location}</p>
  `;

  animalCard.innerHTML = `
    <h4 class="animal-title">${animal.name}</h4>
    <div class="image-wrapper">
      <img src="${animal.image}" alt="${animal.name} image" class="animal-image" style="width: 160px; height: 160px;">
    </div>
    <div class="animal-info-container">
      <p class="animal-description">${animal.description}</p>
      <div class="extra-info" style="display: none;">${animal.description} ${extraInfo}</div>
      <button class="read-more-btn">Read more</button>
    </div>
  `;

  mainContent.appendChild(animalCard);

  const extraInfoDiv = animalCard.querySelector(".extra-info");
  const animalDescription = animalCard.querySelector(".animal-description");
  const toggleBtn = animalCard.querySelector(".read-more-btn");

  let isExpanded = false;
  toggleBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;
    extraInfoDiv.style.display = isExpanded ? "block" : "none";
    animalDescription.style.display = isExpanded ? "none" : "block";
    toggleBtn.textContent = isExpanded ? "Read less" : "Read more";
  });
});

let sidebarContent = document.querySelector(".sidebar-content");
sidebarContent.innerHTML = `
  <h3 class="sidebar__title">${reptiles.name}</h3>
  <ul class="sidebar__list">
    ${reptiles.animals
      .map((animal) => `<li class="sidebar__item">${animal.name}</li>`)
      .join("")}
  </ul>
`;

const sidebar = document.querySelector(".sidebar-content");
const tab = document.querySelector(".sidebar-tab");
const sidebarItems = sidebarContent.querySelectorAll(".sidebar__item");

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
    const target = document.querySelector(`.animal-card.${clicked}`);

    document.querySelectorAll(".animal-card").forEach((card) => {
      if (card !== target) {
        card.classList.remove("active");
      }
    });

    target.classList.toggle("active");

    sidebar.classList.remove("open");
  });
});
