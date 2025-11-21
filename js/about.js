function Member(img, nickname, name, favAnimal, email, linkedin, github) {
  (this.img = img),
    (this.nickname = nickname),
    (this.name = name),
    (this.favAnimal = favAnimal),
    (this.email = email),
    (this.linkedin = linkedin),
    (this.github = github);
}

let dobeen = new Member(
  "./images/raccoon.jpg",
  "Dodo",
  "Dobeen",
  "Raccoon",
  "Dobeen.Kim@edu.futuregame.se",
  "https://www.linkedin.com/in/dobeen-kim",
  "https://github.com/DobeenKim"
);

let claudia = new Member(
  "./images/panda.jpg",
  "Claudia",
  "Claudia",
  "Panda",
  "Claudia.Pereira@edu.futuregames.se",
  "https://www.linkedin.com/in/claudia-pereira-carion/",
  "https://github.com/claudiacarion"
);

let ting = new Member(
  "./images/dragon.jpg",
  "Tingting",
  "Ting",
  "Dog",
  "Ting.Li@edu.futuregames.se",
  "http://www.linkedin.com/in/ting-li-218540382",
  "https://github.com/janetli82-ui"
);

let gabriella = new Member(
  "./images/sloth01.jpg",
  "Wineynia",
  "Gabriella",
  "Sloth",
  "Gabriella.Arif@edu.futuregames.se",
  "https://github.com/wineynia",
  "https://www.linkedin.com/in/gabriella-a-99a903121b"
);

let maho = new Member(
  "./images/sloth02.jpg",
  "MC Mahaa",
  "Maho",
  "Sloth",
  "Maho.Kurauchi@edu.futuregames.se",
  "http://www.linkedin.com/in/maho-kurauchi",
  "https://github.com/mamahimiko"
);

let mainContent = document.querySelector(".main-content");
let memberArray = [dobeen, claudia, ting, gabriella, maho];

mainContent.innerHTML = `
<h1 class="message">Welcome to the About Page! <br>Meet our lovely staff!</h2>
`;

memberArray.forEach((member) => {
  let preview = member.nickname;
  let memberContainer = document.createElement("div");
  const memberClassname = member.name.toLowerCase().replace(/\s+/g, "-");
  memberContainer.classList.add("member-card", memberClassname);

  memberContainer.innerHTML = `
    <h4 class="member-title">${member.name}</h4>
    <div class="image-wrapper">
        <img 
        src="${member.img}" 
        alt="${member.name} image" 
        class="member-image"
        style="width: 160px; height: 160px;"
        >
    </div>
        <div class="member-info-container">
            <p class="member-description">Nick name : ${member.nickname}</p>
            <p class="member-description">Favorite animal : ${member.favAnimal}</p>
            <p class="member-description">Email address : ${member.email}</p>
        <p class="memberContact">
            <a href="${member.linkedin}" target="_blank"><i class="fa-brands fa-linkedin-in"></i>
            <a href="${member.github}" target="_blank"><i class="fa-brands fa-github"></i>
        </a>
        </p>
    </div>
`;

  mainContent.appendChild(memberContainer);

  let memberDescription = memberContainer.querySelector(".member-description");
});
