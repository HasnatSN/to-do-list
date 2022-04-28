class Project {
  constructor() {
    this.projectsArray = [];
  }

  createProjectButton() {
    let button = document.createElement("button");
    button.setAttribute("data-index", this.projectsArray);
    return button;
  }

  createDivWithI() {
    let divWithI = document.createElement("div");
    divWithI.innerHTML = '<div><i class="fa-solid fa-folder">';
    return divWithI;
  }

  createFolderNameDiv(folderName) {
    let folderNameDiv = document.createElement("div");
    folderNameDiv.classList.add("project-name");
    folderNameDiv.textContent = folderName;
    return folderNameDiv;
  }

  createRemoveBtn() {
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML =
      '<button class="remove"><i class="fa-solid fa-xmark"></i></button>';
    return removeBtn;
  }

  appendChildrenToParent(parent, ...args) {
    for (let child of args) {
      parent.appendChild(child);
    }
  }

  createNewButton() {
    // create all the elements for the custom project button
    this.button = this.createProjectButton();
    this.divWithI = this.createDivWithI();
    this.folderNameDiv = this.createFolderNameDiv(prompt("Folder name?"));
    this.removeBtn = this.createRemoveBtn();

    // append all the children elements to the parent button
    this.appendChildrenToParent(
      this.button,
      this.divWithI,
      this.folderNameDiv,
      this.removeBtn
    );

    this.projectsArray.push(this.button);
    return this.button;
  }

  addProjectButtonToNav() {
    const addProjectBtn = document.querySelector(".add-project");
    addProjectBtn.addEventListener("click", () => {
      const nav = document.querySelector("nav");
      nav.appendChild(this.createNewButton());
    });
  }
}

export { Project };
