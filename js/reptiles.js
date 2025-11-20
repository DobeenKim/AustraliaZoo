const reptilesData = [
  {
    photo: "./images/frill-necked-lizard.jpg",
    name: "Frill-necked Lizard",
    group: "reptile",
    lifespan: "20 years",
    food: "Small insects and spiders",
    description:
      "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right.",
    length: "90 cm",
    weight: "1 kg",
    found: "Northern Australia",
  },
  {
    photo: "./images/hawksbill-turtle.jpg",
    name: "Hawksbill Turtle",
    group: "reptile",
    lifespan: "50 years",
    food: "Other animals (sponges & jellyfish), sea plants",
    description:
      "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell is covered in large overlapping scutes, which are a distinctive brown/green/amber background.",
    length: "80 cm (carapace)",
    weight: "50 kg",
    found: "Tropical coasts of Queensland, Northern Territory, and Western Australia",
  },
  {
    photo: "./images/Perentie.jpg",
    name: "Perentie",
    group: "reptile",
    lifespan: "20 years",
    food: "Carnivore, eat animals like kangaroos, rabbits, lizards, and birds.",
    description:
      "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on Earth.",
    length: "2.5 m",
    weight: "20 kg",
    found: "Deserts",
  },
];

const reptilesContainer = document.getElementById("reptiles-container");
const sidebarContainer = document.getElementById("sidebar-container");

const createSidebar = () => {
  let sidebarHTML = "<h2>Reptiles</h2><ul>";
  reptilesData.forEach((reptile) => {
    sidebarHTML += `<li><a href="#" onclick="showShortSummary('${reptile.name}')">${reptile.name}</a></li>`;
  });
  sidebarHTML += "</ul>";
  sidebarContainer.innerHTML = sidebarHTML;
};

const showShortSummary = (name) => {
  const links = document.querySelectorAll("#sidebar-container a");
  links.forEach((link) => link.classList.remove("active"));

  const reptile = reptilesData.find((r) => r.name === name);
  if (reptile) {
    const activeLink = [...links].find(link => link.textContent === reptile.name);
    if (activeLink) {
      activeLink.classList.add("active");
    }

    const shortSummaryHTML = `
      <img src="${reptile.photo}" alt="${
      reptile.name
    }" style="width: 100%; max-width: 300px; height: auto;">
      <h3>${reptile.name}</h3>
      <p><strong>Group:</strong> ${reptile.group}</p>
      <button onclick="showFullSummary('${reptile.name}')">Read More</button>
      <div id="full-summary-${reptile.name
        .replace(/\s+/g, "-")
        .toLowerCase()}" style="display: none;"></div>
    `;
    reptilesContainer.innerHTML = shortSummaryHTML;
  } else {
    console.error("Animal not found!");
    reptilesContainer.innerHTML = "<p>Oops! It seems we couldn't find that animal. Please try another one!</p>";
  }
};

const showFullSummary = (name) => {
  const reptile = reptilesData.find((r) => r.name === name);

  if (reptile) {
    const fullSummaryHTML = `
      <p><strong>Description:</strong> ${reptile.description}</p>
      <p><strong>Length:</strong> ${reptile.length}</p>
      <p><strong>Weight:</strong> ${reptile.weight}</p>
      <p><strong>Food:</strong> ${reptile.food}</p>
      <p><strong>Found in:</strong> ${reptile.found}</p>
      <p><strong>Lifespan:</strong> ${reptile.lifespan}</p>
    `;
    const summaryDiv = document.getElementById(
      `full-summary-${name.replace(/\s+/g, "-").toLowerCase()}`
    );

    if (
      summaryDiv.style.display === "none" ||
      summaryDiv.style.display === ""
    ) {
      summaryDiv.innerHTML = fullSummaryHTML;
      summaryDiv.innerHTML = fullSummaryHTML;
      summaryDiv.style.display = "block";
    } else {
      summaryDiv.style.display = "none";
      summaryDiv.innerHTML = "";
    }
  } else {
    console.error("Animal not found!");
    reptilesContainer.innerHTML =
      "<p>Oops! It seems we couldn't find that animal. Please try another one!</p>";
  }
};

document.addEventListener("DOMContentLoaded", createSidebar);

