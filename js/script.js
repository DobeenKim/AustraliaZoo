function Animal(species, names){
    this.species = species,
    this.names = names
}

let mammal = new Animal("Mammals", ["Echidna", "Tasmanian Devil", "Quokka"]);
let bird = new Animal("Birds", ["Cassowary", "Kookaburra", "Yellow Tailed Black Cockatoo"]);
let reptile = new Animal("Reptiles", ["Frill-necked Lizard", "Hawksbill Turtle", "Perentie"]);
let animalArray = [mammal, bird, reptile];

animalArray.forEach((animal, index) => {
    let nav = document.querySelector(".sidebar");
    let uls = nav.querySelectorAll("ul"); 
    
    animal.names.forEach(animalName => {
      let liElement = document.createElement("li");
      liElement.textContent = animalName;
      liElement.classList.add("active");
      uls[index].appendChild(liElement);
    });
});

document.querySelectorAll("h3 a").forEach(title => {
    title.addEventListener("click", () => {
        let animalUls = title.parentElement.nextElementSibling;
        let animalLis = animalUls.querySelectorAll("li");

        animalLis.forEach(item => {
            item.classList.toggle("active");
            });
        })
 
})



    

