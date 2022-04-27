class Project {
  constructor() {
    this.projectsArray = [];
  }

  button() {
      
  }


}

export { Project };








// newProjectFolder() {
//     let newButton = document.createElement("button");
//     newButton.setAttribute("data-index", this.projectsArray.length);
//     newButton.innerHTML =
//       '<div><i class="fa-solid fa-folder"></i> Project X</div><button class="remove"><i class="fa-solid fa-xmark"></i></button>';
//     this.projectsArray.push(newButton);
//     console.log(this.projectsArray);
//     this.removeFolder(newButton);
//     return newButton;
//   }

//   addProject() {
//     const addProjectBtn = document.querySelector(".add-project");
//     addProjectBtn.addEventListener("click", () => {
//       const nav = document.querySelector("nav");
//       nav.appendChild(this.newProjectFolder());
//     });
//   }

//   removeFolder(button) {
//     console.log(button);
//     //   button.addEventListener("click", () => {
          
//     //   })
//   }