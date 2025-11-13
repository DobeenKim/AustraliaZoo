const reptilesData = [
  {
      name: 'Frill-necked Lizard',
      image: '', 
      lifespan: '20 years',
      diet: 'Small insects and spiders',
      description: 'When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses.',
      length: '90 cm',
      weight: '1 kg',
      found: 'Northern Australia',
      group: 'Reptile',
      groupLink: ''
  },
  {
      name: 'Hawksbill Turtle',
      image: '',
      lifespan: '50 years',
      diet: 'Other animals (sponges & jellyfish), sea plants',
      description: 'The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak.',
      length: '80 cm (carapace)',
      weight: '50 kg',
      found: 'Tropical coasts of Queensland, Northern Territory and Western Australia',
      group: 'Reptile',
      groupLink: ''
  },
  {
      name: 'Perentie',
      image: '', 
      lifespan: '20 years',
      diet: 'Carnivore, eating animals like kangaroos, rabbits, lizards, and birds',
      description: 'The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia.',
      length: '2.5 m',
      weight: '20 kg',
      found: 'Deserts',
      group: 'Reptile',
      groupLink: ''
  }
];

const reptilesContainer = document.getElementById('reptiles-container');

const createReptileElement = (reptile) => {
  const reptileDiv = document.createElement('div');
  reptileDiv.className = 'reptile-item';

  try {
      if (!reptile.name || typeof reptile.name !== 'string') throw new Error('Invalid name');
      if (!reptile.image || typeof reptile.image !== 'string') throw new Error('Invalid image URL');
      if (!reptile.lifespan || typeof reptile.lifespan !== 'string') throw new Error('Invalid lifespan');
      if (!reptile.diet || typeof reptile.diet !== 'string') throw new Error('Invalid diet');
      if (!reptile.description || typeof reptile.description !== 'string') throw new Error('Invalid description');
      if (!reptile.length || typeof reptile.length !== 'string') throw new Error('Invalid length');
      if (!reptile.weight || typeof reptile.weight !== 'string') throw new Error('Invalid weight');
      if (!reptile.found || typeof reptile.found !== 'string') throw new Error('Invalid found location');
      if (!reptile.group || typeof reptile.group !== 'string') throw new Error('Invalid group name');
      if (!reptile.groupLink || typeof reptile.groupLink !== 'string') throw new Error('Invalid group link');

      reptileDiv.innerHTML = `
          <img src="${reptile.image}" alt="${reptile.name}" class="reptile-image">
          <h3>${reptile.name}</h3>
          <p><strong>Lifespan:</strong> ${reptile.lifespan}</p>
          <p><strong>Diet:</strong> ${reptile.diet}</p>
          <p>${reptile.description.substring(0, 200)}...</p>
          <p><strong>Length:</strong> ${reptile.length}</p>
          <p><strong>Weight:</strong> ${reptile.weight}</p>
          <p><strong>Found:</strong> ${reptile.found}</p>
          <p><strong>Group:</strong> <a href="${reptile.groupLink}">${reptile.group}</a></p>
      `;
  } catch (error) {
      console.error(`Error creating element for ${reptile.name}: ${error.message}`);
      reptileDiv.innerHTML = `<p>Error: ${error.message}</p>`;
  }

  return reptileDiv;
};

const renderReptiles = (data) => {
  data.forEach((reptile) => {
    const reptileElement = createReptileElement(reptile);
    reptilesContainer.appendChild(reptileElement);
  });
};

renderReptiles(reptilesData);
