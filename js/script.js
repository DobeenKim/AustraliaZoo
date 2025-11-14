function Animal(species, name){
    this.species = species,
    this.name = name
}

let mammal = new Animal("Mammals", ["Echidna", "Tasmanian Devil", "Quokka"]);
let bird = new Animal("Birds", ["Cassowary", "Kookaburra", "Yellow Tailed Black Cockatoo"]);
let reptile = new Animal("Reptiles", ["frill-necked lizard", "Hawksbill Turtle", "Perentie"]);
let animalArray = [mammal, bird, reptile];

animalArray.forEach(animal => {
    let animalList;
    if (animal.species === "Mammals") {
        animalList = document.getElementById("one");
    } else if (animal.species === "Birds") {
        animalList = document.getElementById("two");
    } else if (animal.species === "Reptiles") {
        animalList = document.getElementById("three");
    }

    animal.name.forEach(animalName => {
        let animalContainer = document.createElement("li");
        animalContainer.textContent = animalName;
        animalContainer.style.display = "none";
        animalList.appendChild(animalContainer);
    });
        
    document.querySelectorAll("h3 a").forEach(title => {
        title.addEventListener("click", () => {
            let animalItems = title.parentElement.nextElementSibling.querySelectorAll("li");
            let hide = animalItems[0].style.display === "none";
            animalItems.forEach(item => {
                item.style.display = hide ? "block" : "none";
            });
          
        })
 
    })
      
});


let img = document.querySelector("img");
let sidebar = document.querySelector(".sidebar")
img.addEventListener("click", () => {
    sidebar.classList.toggle("box")
})       
            

