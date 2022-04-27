class Project {
  constructor() {
    this.projectsArray = [];
  }

  createSubButtons() {
    
  }

  createNewButton() {
    this.button = document.createElement("button");
    this.button.setAttribute("data-index", this.projectsArray);
    this.divWithI = document.createElement("div");
    this.divWithI.innerHTML = '<div><i class="fa-solid fa-folder">';
    this.folderName = prompt("Folder name?")
    this.folderNameDiv = document.createElement("div");
    this.folderNameDiv.classList.add("project-name")
    this.folderNameDiv.textContent = this.folderName;
    this.removeBtn = document.createElement("button");
    this.removeBtn.innerHTML =
      '<button class="remove"><i class="fa-solid fa-xmark"></i></button>';
    this.button.appendChild(this.divWithI);
    this.button.appendChild(this.folderNameDiv);
    this.button.appendChild(this.removeBtn);
    this.projectsArray.push(this.button);
    return this.button;
  }

  addButton() {
    const addProjectBtn = document.querySelector(".add-project");
    addProjectBtn.addEventListener("click", () => {
      const nav = document.querySelector("nav");
      nav.appendChild(this.createNewButton());
    });
  }
}

// {/* <div><i class="fa-solid fa-folder"></i> Project X</div> */}

export { Project };

// newProjectFolder() {
//     let newButton = document.createElement("button");
//     newButton.setAttribute("data-index", this.projectsArray.length);
//     newButton.innerHTML =
// '<div><i class="fa-solid fa-folder"></i> Project X</div><button class="remove"><i class="fa-solid fa-xmark"></i></button>';
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
