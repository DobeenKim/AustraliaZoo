function Member(img,name,favAnimal,email,linkedin,github){
  this.img = img,
  this.name = name,
  this.favAnimal = favAnimal,
  this.email = email
  this.linkedin =linkedin,
  this.github =github
}

let dobeen = new Member("../img/about-img","Dobeen","Quokka",
  "Dobeen.Kim@edu.futuregame.se","https://www.linkedin.com/in/dobeen-kim","https://github.com/DobeenKim")

let claudia = new Member("../img/about-img","Claudia","Panda",
  "Claudia.Pereira@edu.futuregames.se","https://www.linkedin.com/in/claudia-pereira-carion/","https://github.com/claudiacarion")

let ting = new Member("../img/about-img","Ting","Dog",
  "Ting.Li@edu.futuregames.se","http://www.linkedin.com/in/ting-li-218540382","https://github.com/janetli82-ui"
)

let gabriella = new Member("../img/about-img","Gabriella","Sloth",
  "Gabriella.Arif@edu.futuregames.se","https://github.com/wineynia","",
)

let maho = new Member("../img/about-img","Maho","Sloth",
  "Maho.Kurauchi@edu.futuregames.se","http://www.linkedin.com/in/maho-kurauchi","https://github.com/mamahimiko",)




let memberArray = [dobeen,claudia,ting,gabriella,maho]

let mainContent = document.querySelector(".main")

memberArray.forEach(member => {
  let memberContainer = document.createElement("div")
  memberContainer.classList.add(`members-card`)
  // memberContainer.textContent = (`NAME : ${Member.name}`)

  let infoList = document.createElement("ul");
  infoList.classList.add(`member-info`);

  let name = document.createElement("li");
  name.textContent =`Name : ${member.name}`;

  infoList.appendChild(name)
  memberContainer.appendChild(infoList)
  mainContent.appendChild(memberContainer)
})




