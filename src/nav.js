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

  getNameOfFolder() {
    let currentFolderName = document.querySelector(".folder-name-input").value;
    document.querySelector(".folder-name-input").value = "";
    if (currentFolderName === "") {
      currentFolderName = "Unnamed";
    }
    return currentFolderName;
  }

  createFolderNameDiv() {
    let folderNameDiv = document.createElement("div");
    folderNameDiv.classList.add("project-name");
    folderNameDiv.innerHTML = this.getNameOfFolder();
    return folderNameDiv;
  }

  removeProjectBtnFromArray(index) {
    this.projectsArray.splice(index, 1);
  }

  removeProjectBtnFromDom(index) {
    const nav = document.querySelector("nav");
    let childToBeRemoved = nav.childNodes[index + 13];
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
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeBtn.classList.add("remove");
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

  createNewFolder(nameInputDiv, addProjectBtn) {
    const createButton = document.querySelector(".create-btn");
    const nav = document.querySelector("nav");

    createButton.addEventListener(
      "click",
      () => {
        nav.appendChild(this.createNewButton());
        nameInputDiv.classList.add("collapse-div");
        addProjectBtn.classList.remove("collapse-div")
      },
      { once: true }
    );
  }

  cancelAddingNewFolder(nameInputDiv, addProjectBtn) {
    const cancelButton = document.querySelector(".cancel-btn");
    cancelButton.addEventListener("click", () => {
      nameInputDiv.classList.add("collapse-div");
      addProjectBtn.classList.remove("collapse-div")
    });

    this.getNameOfFolder();
  }

  addCollapseClassToDiv() {
    const nameInputDiv = document.querySelector(".name-input");
    const addProjectBtn = document.querySelector(".add-project")
    nameInputDiv.classList.remove("collapse-div");
    addProjectBtn.classList.add("collapse-div");
    this.cancelAddingNewFolder(nameInputDiv, addProjectBtn);
    this.createNewFolder(nameInputDiv, addProjectBtn);
  }

  addProjectButtonToNav() {
    const addProjectBtn = document.querySelector(".add-project");
    addProjectBtn.addEventListener("click", () => {
      this.addCollapseClassToDiv();
    });
  }
}

export { Project };
