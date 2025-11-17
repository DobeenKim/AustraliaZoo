function Animal(name, lifespan, group, food, description, length, weight, location, image) {
  (this.name = name),
    (this.lifespan = `${lifespan} years`),
    (this.group = group),
    (this.food = food),
    (this.description = description),
    (this.length = `${length} cm`),
    (this.weight = `${weight} kg`),
    (this.location = location);
  this.image = image;
}

function Species(name, description) {
  (this.name = name),
    (this.description = description),
    (this.animals = []),
    (this.addAnimal = function (animal) {
      this.animals.push(animal);
    });
}

const mammals = new Species(
  "Mammals",
  "Mammals are a class of warm-blooded, vertebrate animals that are defined by having hair or fur, producing milk to nourish their young through mammary glands, and typically giving birth to live young. They are also distinguished by a diaphragm and three middle ear bones. This diverse group includes humans, cats, whales, and bats."
);
mammals.addAnimal(
  new Animal(
    "Echidna",
    50,
    "Mammal",
    "Insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    76,
    10,
    "Throughout Australia",
    "./images/Echidna.jpg"
  )
);
mammals.addAnimal(
  new Animal(
    "Tasmanian Devil",
    5,
    "Mammal",
    "A predator, then eat meat from other animals such as wallabies and wombats",
    "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.",
    70,
    10,
    "Tasmania",
    "./images/TasmanianDevil.jpg"
  )
);
mammals.addAnimal(
  new Animal(
    "Quokka",
    10,
    "Mammal",
    "Plant eaters, they munch on shrubs and grasses",
    "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh, 'as a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.",
    50,
    3,
    "Only found on Rottnest Island and a few places on mainland Western Australia",
    "./images/quokka.jpg"
  )
);

let mainContent = document.querySelector(".main-content");
let mammalsTitle = document.createElement("h2");
mammalsTitle.classList.add("species-title");
mammalsTitle.textContent = mammals.name;
mainContent.appendChild(mammalsTitle);
let mammalsInfo = document.createElement("p");
mammalsInfo.classList.add("species-info");
mammalsInfo.textContent = mammals.description;
mainContent.appendChild(mammalsInfo);

let animalsArray = mammals.animals;

mammals.animals.forEach(animal => {
  let preview = animal.description.substring(0, 200) + "...";

  let animalWrapper = document.createElement("div");
  animalWrapper.innerHTML = `
  <h4>${animal.name}</h4>
  <img 
    src="${animal.image}" 
    alt="${animal.name} image" 
    class="animal-image"
    style="width: 100px; height: 100px;"
  >
  <p class="animal-description">${preview}</p>
  <button class="read-more-btn">Read more</button>
`;

  mainContent.appendChild(animalWrapper);
  let animalDescription = animalWrapper.querySelector(".animal-description");
  let toggleBtn = animalWrapper.querySelector(".read-more-btn");

  let isExpanded = false;

  toggleBtn.addEventListener("click", () => {
    if (!isExpanded) {
      animalDescription.textContent = animal.description;
      toggleBtn.textContent = "Read less";
      isExpanded = true;
    } else {
      animalDescription.textContent = preview;
      toggleBtn.textContent = "Read more";
      isExpanded = false;
    }
  });
});

// Mammals Sidebar
let sidebarContent = document.querySelector(".sidebar-content");

sidebarContent.innerHTML = `
  <h3 class="sidebar__title">${mammals.name}</h3>
  <ul class="sidebar__list">
    ${mammals.animals
      .map(animal => `<li class="sidebar__item">${animal.name}</li>`)
      .join("")}
  </ul>
`;
