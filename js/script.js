function Animal(kinds, name){
    this.kinds = kinds,
    this.name = name
}

let mammal = new Animal("Mammals", ["Echidna", "Tasmanian Devil", "Quokka"]);
let bird = new Animal("Birds", ["Cassowary", "Kookaburra", "Yellow Tailed Black Cockatoo"]);
let reptile = new Animal("Reptiles", ["frill-necked lizard", "Hawksbill Turtle", "Perentie"]);
let animalArray = [mammal, bird, reptile];

animalArray.forEach(animal => {
    let animalList = document.querySelector(`.${animal.kinds}`);
     let titleElement = document.querySelector(`.${animal.kinds.toLowerCase()}Title`);
    animal.name.forEach(animalName => {
        let animalContainer = document.createElement("li");
        animalContainer.textContent = animalName;
        animalContainer.style.display = "none";
        animalList.appendChild(animalContainer);
      if (titleElement) {
        titleElement.addEventListener("click", () => {
           
            const animalItems = animalList.querySelectorAll("li");
            const isHidden = animalItems[0].style.display === "none";
            
            animalItems.forEach(item => {
                item.style.display = isHidden ? "block" : "none";
            });
        })
      }
    });
       
})
        
            

