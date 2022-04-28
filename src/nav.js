class Project {
  constructor() {
    this.projectsArray = [];
  }

  createProjectButton() {
    let button = document.createElement("button");
    button.setAttribute("data-index", this.projectsArray.length);
    return button;
  }

  createDivWithI() {
    let divWithI = document.createElement("div");
    divWithI.innerHTML = '<div><i class="fa-solid fa-folder">';
    return divWithI;
  }

  createFolderNameDiv() {
    let folderNameDiv = document.createElement("div");
    folderNameDiv.classList.add("project-name");
    folderNameDiv.textContent = `${this.projectsArray.length}`;
    return folderNameDiv;
  }

  removeProjectBtnFromArray(index) {
    this.projectsArray.splice(index, 1);
    console.log(this.projectsArray);
  }

  removeProjectBtnFromDom(index) {
    const nav = document.querySelector("nav");
    let childToBeRemoved = nav.childNodes[index + 11];
    console.log(childToBeRemoved)
    childToBeRemoved.parentNode.removeChild(childToBeRemoved);
  }

  removeProjectBtn(removeBtn) {
    removeBtn.addEventListener("click", () => {
      let index = this.projectsArray.findIndex(
        (button) => removeBtn.dataset.index == button.dataset.index
      );
      this.removeProjectBtnFromArray(index);
      this.removeProjectBtnFromDom(index);
    });
  }

  createRemoveBtn() {
    let removeBtn = document.createElement("button");
    removeBtn.setAttribute("data-index", this.projectsArray.length);
    removeBtn.innerHTML =
      '<button class="remove"><i class="fa-solid fa-xmark"></i></button>';

    this.removeProjectBtn(removeBtn);
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
    this.folderNameDiv = this.createFolderNameDiv();
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
