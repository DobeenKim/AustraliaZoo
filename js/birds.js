function Birds(name, lessDescription, moreDescription, img){
      this.name = name,
      this.lessDescription = lessDescription,
      this.moreDescription = moreDescription,
      this.img = img
}

let bird__one = new Birds("CassoWary", "Lifespan: 20 years \n Length: 1.7m \n Food: Plants matter like fruit, insects and small animals like mice amd lizards.", "It's not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "./images/Cassowary.jpg");

let bird__two = new Birds("Kookaburra", "Lifespan: 20 years\n Length:43cm\n  weight: 300g\n found: Australia wide\n Food: Insects and small animals including snakes, frogs and lizards", "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.","./images/Kookaburra.jpg");

let bird__three = new Birds("Yellow Tailed Black Cockatoo", "Lifespan: 41 years\n Length:65cm \n weight: 900g\n found: SE Australia\n Food: Fruit, seeds and other plant material", "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognized, although Tasmanian and southern mainland populations of the southern subspecies xanthous may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.","./images/Yellow-Tailed-Black-Cockatoo.jpg");

let birdsArray = [bird__one, bird__two, bird__three];

function commonPart(){
  let content = document.querySelector(".main-content");
  let groupPic = document.querySelector(".photo");
  if(groupPic){
    groupPic.style.display = "none";
  } 
  let removeElement = content.querySelectorAll(".pic, .title, .less, .button, .more");
  removeElement.forEach(element => {
      content.removeChild(element);
  });
}

birdsArray.forEach(animal => {
  let content = document.querySelector(".main-content")
  let nav = document.querySelector(".sidebar");
  let ulChildren = document.createElement("li");

  ulChildren.textContent = animal.name;

  ulChildren.classList.add("hide");
  nav.append(ulChildren);

  let birds__title = document.querySelector(".side__title");
  birds__title.addEventListener("click",()=>{
    ulChildren.classList.toggle("hide");
  }) 

  
  ulChildren.addEventListener("click", () => {
    commonPart();
    let content = document.querySelector(".main-content");

    let img = document.createElement("img");
    img.src = animal.img;
    img.classList.add("pic");

    let animalTitle= document.createElement("H1");
    animalTitle.innerHTML = animal.name;
    animalTitle.classList.add("title");

    let abstract = document.createElement("p");
    abstract.classList.add("less");
    abstract.innerHTML = animal.lessDescription.replace(/\n/g, '<br>');
        
    let btn = document.createElement("button");
    btn.textContent = "Read More";
    btn.classList.add("button");
    
    content.append(img,animalTitle,abstract,btn);
  
    btn.addEventListener("click", () => {
      let more = document.querySelector(".more")
      if(more){
       content.removeChild(more);
      }else{
      let moreDescription = document.createElement("p");
      moreDescription.textContent = animal.moreDescription;
      moreDescription.classList.add("more"); 
      content.appendChild(moreDescription);
      }
    });
 });
});

let secondClickBirds__title = document.querySelector(".side__title");
secondClickBirds__title.addEventListener("click", () => {
  let groupPic = document.querySelector(".photo");
  commonPart();
  if(groupPic){
    groupPic.style.display = "block";
  } 
}); 

let main = document.querySelector(".main")
let tab = document.querySelector(".sidebar-tab");
if (window.matchMedia("(max-width: 767px)").matches) {
  tab.addEventListener("click", () => {
    main.classList.toggle("open");
  });
}
document.addEventListener("click", e => {
  if (window.matchMedia("(max-width: 767px)").matches && !main.contains(e.target)) {
    main.classList.remove("open");
  }
})

