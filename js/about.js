function Member(img,nickname,name,favAnimal,email,linkedin,github){
    this.img = img,
    this.nickname = nickname,
    this.name = name,
    this.favAnimal = favAnimal,
    this.email = email,
    this.linkedin =linkedin,
    this.github =github
}

let dobeen = new Member(
    "./images/raccoon.jpg",
    "Dodo",
    "Dobeen",
    "Raccoon",
    "Dobeen.Kim@edu.futuregame.se",
    "https://www.linkedin.com/in/dobeen-kim",
    "https://github.com/DobeenKim"
)

let claudia = new Member(
    "./images/panda.jpg",
    "Claudia",
    "Claudia",
    "Panda",
    "Claudia.Pereira@edu.futuregames.se",
    "https://www.linkedin.com/in/claudia-pereira-carion/",
    "https://github.com/claudiacarion"
)

let ting = new Member(
    "./images/dragon.jpg",
    "Tingting",
    "Ting",
    "Dog",
    "Ting.Li@edu.futuregames.se",
    "http://www.linkedin.com/in/ting-li-218540382",
    "https://github.com/janetli82-ui"
)

let gabriella = new Member(
    "./images/sloth01.jpg",
    "Wineynia",
    "Gabriella",
    "Sloth",
    "Gabriella.Arif@edu.futuregames.se",
    "https://github.com/wineynia",
    "https://www.linkedin.com/in/gabriella-a-99a903121b",
)

let maho = new Member(
    "./images/sloth02.jpg",
    "MC Mahaa",
    "Maho",
    "Sloth",
    "Maho.Kurauchi@edu.futuregames.se",
    "http://www.linkedin.com/in/maho-kurauchi",
    "https://github.com/mamahimiko"
)

let memberArray = [dobeen,claudia,ting,gabriella,maho]

let mainContent = document.querySelector(".product-details")

let detailsWrap = document.createElement("div");
detailsWrap.classList.add(`detailsWrap`)

memberArray.forEach(member => {
    let memberContainer = document.createElement("div")
    memberContainer.classList.add(`members-card`)

    let imageBox = document.createElement("div");
    imageBox.classList.add("img")
    
    let memberImage = document.createElement("img");
    memberImage.src = member.img
    memberImage.alt =`${member.name} Image`
    imageBox.appendChild(memberImage)
    memberImage.classList.add("memberImg")

    let membersNickname = document.createElement("p");
    membersNickname.textContent = `${member.nickname}`
    membersNickname.classList.add("nickname")

    let infoList = document.createElement("ul");
    infoList.classList.add(`member-info`);

    let name = document.createElement("li");
    name.textContent =`Name : ${member.name}`;

    let favoritAnimal = document.createElement("li");
    favoritAnimal .textContent = `Favorite Animal : ${member.favAnimal}`

    let emailAddress = document.createElement("li");
    emailAddress.textContent = `Email : ${member.email}`

    memberContainer.append(imageBox,membersNickname,infoList)
    infoList.append(name,favoritAnimal,emailAddress)
    detailsWrap.appendChild(memberContainer)
    mainContent.appendChild(detailsWrap)
    
    memberImage.addEventListener("click",() => {
        let isActive = infoList.classList.contains("active");
        const ACTIVE = document.querySelectorAll(".member-info.active")

        ACTIVE.forEach(list => {
            list.classList.remove("active")
        });
        if(!isActive) {
            infoList.classList.add("active")
        }
    })

    if (member.linkedin) {
        let linkedinLi = document.createElement("li");
        infoList.appendChild(linkedinLi)

        let linkedinLink = document.createElement("a");
        linkedinLink.href = member.linkedin;
        linkedinLink.target = "_blank";
        linkedinLink.classList.add("linkedinBtn")

        let linkedinIcon = document.createElement("i");
        linkedinIcon.classList.add("fa-brands", "fa-linkedin"); 

        linkedinLi.appendChild(linkedinLink)
        linkedinLink.appendChild(linkedinIcon) 
    }

    if (member.github) {
        let githubLi = document.createElement("li");
        infoList.appendChild(githubLi)

        let githubLink = document.createElement("a");
        githubLink.href = member.github;
        githubLink.target = "_blank";
        githubLink.classList.add("gitBtn")

        let githubIcon = document.createElement("i");
        githubIcon.classList.add("fa-brands", "fa-github");

        githubLi.appendChild(githubLink)
        githubLink.appendChild(githubIcon)
    }
});



