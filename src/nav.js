class Project {
  constructor() {
    this.projectsArray = [];
  }

  newProjectFolder() {
    let newButton = document.createElement("button");
    newButton.setAttribute("data-index", this.projectsArray.length);
    newButton.innerHTML =
      '<div><i class="fa-solid fa-folder"></i> Project X</div><button class="remove"><i class="fa-solid fa-xmark"></i></button>';
    this.projectsArray.push(newButton);
    console.log(this.projectsArray);
    return newButton;
  }

  addProject() {
    const addProjectBtn = document.querySelector(".add-project");
    addProjectBtn.addEventListener("click", () => {
      const nav = document.querySelector("nav");
      nav.appendChild(this.newProjectFolder());
    });
  }
}

export { Project };
