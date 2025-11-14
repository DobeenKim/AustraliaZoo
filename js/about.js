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
    "./img/raccoon.jpg",
    "Dodo",
    "Dobeen",
    "Raccoon",
    "Dobeen.Kim@edu.futuregame.se",
    "https://www.linkedin.com/in/dobeen-kim",
    "https://github.com/DobeenKim"
)

let claudia = new Member(
    "./img/panda.jpg",
    "Claudia",
    "Claudia",
    "Panda",
    "Claudia.Pereira@edu.futuregames.se",
    "https://www.linkedin.com/in/claudia-pereira-carion/",
    "https://github.com/claudiacarion"
)

let ting = new Member(
    "./img/dragon.jpg",
    "Tingting",
    "Ting",
    "Dog",
    "Ting.Li@edu.futuregames.se",
    "http://www.linkedin.com/in/ting-li-218540382",
    "https://github.com/janetli82-ui"
)

let gabriella = new Member(
    "./img/sloth01.jpg",
    "Wineynia",
    "Gabriella",
    "Sloth",
    "Gabriella.Arif@edu.futuregames.se",
    "https://github.com/wineynia",
    "https://www.linkedin.com/in/gabriella-a-99a903121b",
)

let maho = new Member(
    "./img/sloth02.jpg",
    "MC MAHAA",
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

    memberContainer.appendChild(imageBox)
    memberContainer.appendChild(membersNickname)
    infoList.appendChild(name)
    infoList.appendChild(favoritAnimal)
    infoList.appendChild(emailAddress)
    memberContainer.appendChild(infoList)
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

        // if(isActive) {
        //     infoList.classList.remove("active")
        // } else {
        //     infoList.classList.add("active")
        // }
    })

    if (member.linkedin) {
        let linkedinLi = document.createElement("li");
        infoList.appendChild(linkedinLi)

        let linkedinLink = document.createElement("a");
        linkedinLink.href = member.linkedin;
        linkedinLink.target = "_blank";
        linkedinLink.classList.add("linkedinBtn")

        let linkedinImage = document.createElement("img");
        linkedinImage.src ="./logo/linkedin.png";
        linkedinImage.classList.add("linkedin-logo");

        linkedinLi.appendChild(linkedinLink)
        linkedinLink.appendChild(linkedinImage)
    }

    if (member.github) {
        let githubLi = document.createElement("li");
        infoList.appendChild(githubLi)

        let githubLink = document.createElement("a");
        githubLink.href = member.github;
        githubLink.target = "_blank";
        githubLink.classList.add("gitBtn")

        let githubImage = document.createElement("img");
        githubImage.src ="./logo/github.png";
        githubImage.classList.add("github-logo");

        githubLi.appendChild(githubLink)
        githubLink.appendChild(githubImage)
    }

    
});



