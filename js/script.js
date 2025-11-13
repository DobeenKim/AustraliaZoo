 let mammal = document.querySelector(".first");
 let bird = document.querySelector(".second");
 let reptile = document.querySelector(".third");


// let box2 = document.querySelector(".box2");
// let box3 = document.querySelector(".box3")

// box2.style.display = box2.style.display === "none" ? "block" : "none";
//   box3.style.display = box3.style.display === "none" ? "block" : "none";

function createSidebar() {
    let sideLink = document.querySelector('.side-link');
    const lis = [
        { li: 'mammals', text: 'Echidna'},
        { li: 'birds', text: 'Tasmanian Devil'},
        { li: 'reptiles', text: 'quokka'},
        
    ];

    lis.forEach(link => {
        const newContent = document.createElement('li');
        newContent.li = link.li;
        newContent.textContent = link.text;
        newContent.className = 'sidebar-link';
        sideLink.appendChild(newContent);
    });
}

function createSidebar2() {
    let tas = document.querySelector('.tas');
    const lis = [
        { li: 'mammals', text: 'Cassowary'},
        { li: 'birds', text: 'Kookaburra'},
        { li: 'reptiles', text: 'Yellow Tailed Black Cockatoo'},
        
    ];

    lis.forEach(link => {
        const newContent = document.createElement('li');
        newContent.li = link.li;
        newContent.textContent = link.text;
        newContent.className = 'sidebar-link';
        tas.appendChild(newContent);
    });
}


 mammal.addEventListener('click', createSidebar);  
 bird.addEventListener('click', createSidebar2);  
 reptile.addEventListener('click', createSidebar);  
 
        // { li: 'mammals', text: 'frill-necked lizard'},
        // { li: 'birds', text: 'Hawksbill Turtle'},
        // { li: 'reptiles', text: 'Perentie '}