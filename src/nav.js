class Project {}

function removeProjectFolder() {}

function newProjectFolder() {
  let newButton = document.createElement("button");
  newButton.setAttribute("data-index", 1);
  newButton.innerHTML =
    '<div><i class="fa-solid fa-folder"></i> Project X</div><button class="remove"><i class="fa-solid fa-xmark"></i></button>';
  return newButton;
}

function addProject() {
  const addProjectBtn = document.querySelector(".add-project");
  addProjectBtn.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.appendChild(newProjectFolder());
  });
}

export { addProject };
