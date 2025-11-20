function Birds(name, lessDescription, moreDescription, img) {
  (this.name = name),
    (this.lessDescription = lessDescription),
    (this.moreDescription = moreDescription),
    (this.img = img);
}

let bird__one = new Birds(
  "CassoWary",
  "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water...",
  "Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida. \n\n Lifespan: 20 years\n\n Group: Bird\n\n Food: Plants matter like fruit, insects and small animals like mice amd lizards.\n\nLength: 1.7m",
  "./images/Cassowary.jpg"
);

let bird__two = new Birds(
  "Kookaburra",
  "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length.",
  "Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.\n\n Lifespan: 20 years\n\n Group:Bird\n\nFood: Insects and small animals including snakes, frogs and lizards\n\n Length:43cm\n\n weight: 300g\n\n found: Australia wide",
  "./images/Kookaburra.jpg"
);

let bird__three = new Birds(
  "Yellow Tailed Black Cockatoo",
  "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band.",
  "The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognized, although Tasmanian and southern mainland populations of the southern subspecies xanthous may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.\n\n Lifespan: 41 years\n\n Group:Bird \n\nLength:65cm \n\n weight: 900g\n\n found: SE Australia",
  "./images/Yellow-Tailed-Black-Cockatoo.jpg"
);

let birdsArray = [bird__one, bird__two, bird__three];
let currentAnimal = null;
let content = document.querySelector(".main-content");
let card = document.createElement("div");
card.className = "card";
content.appendChild(card);

function commonPart() {
  let removeElement = card.querySelectorAll(
    " .title, .pic, .less, .button, .more"
  );
  removeElement.forEach((element) => {
    if (element && element.parentNode === card) {
      card.removeChild(element);
    }
  });
}

birdsArray.forEach((animal) => {
  let content = document.querySelector(".main-content");
  let nav = document.querySelector(".sidebar");
  let ulChildren = document.createElement("li");
  ulChildren.className = "ulChildren";
  ulChildren.textContent = animal.name;

  ulChildren.classList.add("hide");
  nav.append(ulChildren);

  let birds__title = document.querySelector(".side__title");
  birds__title.addEventListener("click", () => {
    ulChildren.classList.toggle("hide");
  });

  ulChildren.addEventListener("click", () => {
    if (currentAnimal === animal.name) {
      commonPart();

      let birdsTitle = document.querySelector(".birds-title");
      let birdsAbstract = document.querySelector(".birds-abstract");

       if (birdsTitle) {
        birdsTitle.style.display = "block";
        birdsTitle.style.visibility = "visible";
       }
      if (birdsAbstract) {
        birdsAbstract.style.display = "block";
        birdsAbstract.style.visibility = "visible";
      }
      
      currentAnimal = null;
      return;
    }
    
    
    let birdsTitle = document.querySelector(".birds-title");
    let birdsAbstract = document.querySelector(".birds-abstract");

   if (birdsTitle) {
      birdsTitle.style.display = "none";
      birdsTitle.style.visibility = "hidden";
    }
    if (birdsAbstract) {
      birdsAbstract.style.display = "none";
      birdsAbstract.style.visibility = "hidden";
    }

    commonPart();
    let animalTitle = document.createElement("H4");
    animalTitle.innerHTML = animal.name;
    animalTitle.classList.add("title");

    let img = document.createElement("img");
    img.src = animal.img;
    img.classList.add("pic");

    let abstract = document.createElement("p");
    abstract.classList.add("less");
    abstract.innerHTML = animal.lessDescription;

    let btn = document.createElement("button");
    btn.textContent = "Read More";
    btn.classList.add("button");

    card.append(animalTitle, img, abstract);
    abstract.appendChild(btn);

    btn.addEventListener("click", () => {
      let more = document.querySelector(".more");

      if (more) {
        abstract.removeChild(more);
        btn.textContent = "Read More";
      } else {
        let moreDescription = document.createElement("p");
        moreDescription.innerHTML = animal.moreDescription.replace(
          /\n/g,
          "<br>"
        );
        moreDescription.classList.add("more");
        btn.textContent = "Read Less";
        abstract.appendChild(moreDescription);
      }
      abstract.appendChild(btn);
    });
    currentAnimal = animal.name;
  });
});

let nav = document.querySelector(".sidebar");
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
