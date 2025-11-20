function Animal(name, lifespan, group, food, description, length, weight, location) {
  (this.name = name),
    (this.lifespan = `${lifespan} years`),
    (this.group = group),
    (this.food = food),
    (this.description = description),
    (this.length = `${length} cm`),
    (this.weight = `${weight} kg`),
    (this.location = location);
}

function Species(name) {
  (this.name = name),
    (this.animals = []),
    (this.addAnimal = function (animal) {
      this.animals.push(animal);
    });
}

const mammals = new Species("Mammals");
mammals.addAnimal(
  new Animal(
    "Echidna",
    50,
    "Mammal",
    "Insects such as ants and termites, beetle larvae and worms",
    "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
    76,
    10,
    "Throughout Australia"
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
    "Tasmania"
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
    "Only found on Rottnest Island and a few places on mainland Western Australia"
  )
);

const reptiles = new Species("Reptiles");
reptiles.addAnimal(
  new Animal(
    "Frill-necked Lizard",
    20,
    "Reptile",
    "Small insects and spiders",
    "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
    90,
    1,
    "Northern Australia"
  )
);
reptiles.addAnimal(
  new Animal(
    "Hawksbill Turtle",
    50,
    "Reptile",
    "Other animals (sponges & jellyfish), sea plants",
    "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.",
    80,
    50,
    "Tropical coasts of Queensland, Northern Territory and Western Australia"
  )
);
reptiles.addAnimal(
  new Animal(
    "Perentie",
    20,
    "Reptile",
    "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.",
    250,
    20,
    "Deserts"
  )
);

const birds = new Species("Birds");
birds.addAnimal(
  new Animal(
    "Cassowary",
    20,
    "Bird",
    "Plant matter like fruit, insects and small animals like mice and lizards",
    " It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
    170,
    44,
    "Queensland"
  )
);
birds.addAnimal(
  new Animal(
    "Kookaburra",
    20,
    "Bird",
    "Insects and smalll animals including snakes, frogs and lizards",
    "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.",
    43,
    0.3,
    "Australia wide"
  )
);
birds.addAnimal(
  new Animal(
    "Yellow Tailed Black Cockatoo",
    41,
    "Bird",
    "Fruit, seeds and other plant material",
    "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.",
    65,
    0.9,
    "SE Australia"
  )
);

let sidebarContent = document.querySelector(".sidebar-content");

// Mammals Sidebar
sidebarContent.innerHTML = `
  <h3 class="sidebar__title">${mammals.name}</h3>
  <ul class="sidebar__list">
    ${mammals.animals.map(animal => `<li class="sidebar__item">${animal.name}</li>`).join("")}
  </ul>
`;
//

// // Reptiles Sidebar
// sidebarContent.innerHTML = `
//   <h3 class="sidebar__title">${reptiles.name}</h3>
//   <ul class="sidebar__list">
//     ${reptiles.animals.map(animal => `<li class="sidebar__item">${animal.name}</li>`).join("")}
//   </ul>
// `;

// // Birds Sidebar
// sidebarContent.innerHTML = `
//   <h3 class="sidebar__title">${birds.name}</h3>
//   <ul class="sidebar__list">
//     ${birds.animals.map(animal => `<li class="sidebar__item">${animal.name}</li>`).join("")}
//   </ul>
// `;

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