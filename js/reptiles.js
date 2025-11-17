const reptilesData = [
  {
    name: "Frill-necked Lizard",
    image: "./images/frill-necked-lizard.jpg",
    food: "Small insects and spiders",
    description:
      "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right.",
    length: "90 cm",
    weight: "1 kg",
    found: "Northern Australia",
    group: "Reptile",
    groupLink: "https://example.com/reptiles",
  },
  {
    name: "Hawksbill Turtle",
    image: "./images/hawksbill-turtle.jpg",
    lifespan: "50 years",
    food: "Other animals (sponges & jellyfish), sea plants",
    description:
      "The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background.",
    length: "80 cm (carapace)",
    weight: "50 kg",
    found:
      "Tropical coasts of Queensland, Northern Territory and Western Australia",
    group: "Reptile",
    groupLink: "https://example.com/reptiles",
  },
  {
    name: "Perentie",
    image: "./images/Perentie.jpg",
    lifespan: "20 years",
    food: "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds",
    description:
      "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and...",
    length: "2.5 m",
    weight: "20 kg",
    found: "Deserts",
    group: "Reptile",
    groupLink: "https://example.com/reptiles",
  },
];

const reptilesContainer = document.getElementById("reptiles-container");

const truncateDescription = (description, maxLength = 200) => {
  return description.length > maxLength
    ? description.substring(0, maxLength) + "..."
    : description;
};

const createReptileHTML = (reptile) => {
  try {
    if (
      !reptile.name ||
      !reptile.group ||
      !reptile.food ||
      !reptile.description ||
      !reptile.length ||
      !reptile.weight ||
      !reptile.found ||
      !reptile.image ||
      !reptile.groupLink
    ) {
      throw new Error(
        "Oops! It looks like some information about this reptile is missing."
      );
    }

    return `
      <div class="reptile-item">
          <img src="${reptile.image}" alt="${
      reptile.name
    }" class="reptile-image" style="width: 150px; height: auto;">
          <h3>${reptile.name}</h3>
          <p><strong>Description:</strong> ${truncateDescription(
            reptile.description
          )}</p>
          <p><strong>Food:</strong> ${reptile.food}</p>
          <p>
            <strong>Group:</strong> 
            <a href="${reptile.groupLink}" target="_blank">${reptile.group}</a>
          </p>
      </div>
    `;
  } catch (error) {
    console.error(`We couldn’t display this reptile: ${error.message}`);
    return `<p>Error: ${error.message}</p>`;
  }
};

let reptilesHTML = "";
reptilesData.forEach((reptile) => {
  reptilesHTML += createReptileHTML(reptile);
});
reptilesContainer.innerHTML = reptilesHTML;
