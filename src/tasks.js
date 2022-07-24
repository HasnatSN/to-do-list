class Tasks {
  constructor() {
    this.tasksArray = [];
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return today = yyyy + "-" + mm + "-" + dd;
  }

  appendChildrenToParent(parent, ...args) {
    for (let child of args) {
      parent.appendChild(child)
    }
  }

  createNewTask(name, index) {
    const task = document.createElement("div");
    task.classList.add("task");
    const isDoneBtn = document.createElement("button");
    const nameFieldBtn = document.createElement("button");
    nameFieldBtn.classList.add("task-title")
    const dateField = document.createElement("input");
    dateField.classList.add("date-field")

    isDoneBtn.innerText = "O"
    nameFieldBtn.innerText = "Unnamed yet";

    dateField.setAttribute("type", "date");
    dateField.setAttribute("value", this.getTodaysDate());

    this.appendChildrenToParent(task, isDoneBtn, nameFieldBtn, dateField);

    const workingArea = document.querySelector(".working-area");
    workingArea.appendChild(task);

    // const taskDiv = document.createElement("div");
    // taskDiv.innerHTML = "Task";
    // const workingArea = document.querySelector(".working-area");
    // workingArea.appendChild(taskDiv);
  }

  cancelAddingNewTask(nameInputDiv, addTaskBtn) {
    const cancelButton = document.querySelector(".cancel-btn-task");
    cancelButton.addEventListener("click", () => {
      nameInputDiv.classList.add("collapse-div");
      addTaskBtn.classList.remove("collapse-div");
    });

    // this.getNameOfFolder();
  }

  addCollapseClassToDiv() {
    const nameInputDiv = document.querySelector(".name-input-tasks");
    const addTaskBtn = document.querySelector(".add-task");

    nameInputDiv.classList.remove("collapse-div");
    addTaskBtn.classList.add("collapse-div");

    this.cancelAddingNewTask(nameInputDiv, addTaskBtn);
    this.createNewTask(nameInputDiv);
  }

  addTask() {
    const addTaskBtn = document.querySelector(".add-task");
    addTaskBtn.addEventListener("click", () => {
      this.addCollapseClassToDiv();
    });
  }
}

export { Tasks };
