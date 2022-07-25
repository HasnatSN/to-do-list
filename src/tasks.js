class Tasks {
  constructor() {
    this.tasksArray = [];
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return (today = yyyy + "-" + mm + "-" + dd);
  }

  appendChildrenToParent(parent, ...args) {
    for (let child of args) {
      parent.appendChild(child);
    }
  }

  getNameOfTask(nameFieldInput) {
    const taskNameInput = document.querySelector(".task-name-input");
    if (taskNameInput.value == "") {
      nameFieldInput.setAttribute("value", "Unnamed");
    } else {
      nameFieldInput.setAttribute("value", taskNameInput.value);
      taskNameInput.value = "";
    }
  }

  removeTaskFromDom(index) {
    const taskList = document.querySelectorAll(".task");

    for (let task of taskList) {
      if (task.dataset.index == index) {
        task.parentNode.removeChild(task);
      }
    }
  }

  createNewTaskDiv() {
    const task = document.createElement("div");
    const isDoneBtn = document.createElement("button");
    const nameFieldInput = document.createElement("input");
    const dateField = document.createElement("input");
    const workingArea = document.querySelector(".working-area");

    let randomIndex = Math.floor(Math.random() * 1000000);

    task.classList.add("task");
    nameFieldInput.classList.add("task-title");
    dateField.classList.add("date-field");

    isDoneBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    isDoneBtn.addEventListener("click", () => {
      this.removeTaskFromDom(isDoneBtn.dataset.index);
    });

    dateField.setAttribute("type", "date");
    dateField.setAttribute("value", this.getTodaysDate());
    task.setAttribute("data-index", randomIndex);
    isDoneBtn.setAttribute("data-index", randomIndex);

    this.getNameOfTask(nameFieldInput);

    this.appendChildrenToParent(task, isDoneBtn, nameFieldInput, dateField);

    workingArea.appendChild(task);

    const nameInputDiv = document.querySelector(".name-input-tasks");
    const addTaskBtn = document.querySelector(".add-task");

    nameInputDiv.classList.add("collapse-div");
    addTaskBtn.classList.remove("collapse-div");
  }

  createNewTask() {
    const createTaskBtn = document.querySelector(".create-task-btn");
    createTaskBtn.addEventListener(
      "click",
      () => {
        this.createNewTaskDiv();
      },
      { once: true }
    );
  }

  cancelAddingNewTask(nameInputDiv, addTaskBtn) {
    const cancelButton = document.querySelector(".cancel-btn-task");
    cancelButton.addEventListener("click", () => {
      nameInputDiv.classList.add("collapse-div");
      addTaskBtn.classList.remove("collapse-div");
    });
  }

  addCollapseClassToDiv() {
    const nameInputDiv = document.querySelector(".name-input-tasks");
    const addTaskBtn = document.querySelector(".add-task");

    nameInputDiv.classList.remove("collapse-div");
    addTaskBtn.classList.add("collapse-div");

    this.cancelAddingNewTask(nameInputDiv, addTaskBtn);
    this.createNewTask(nameInputDiv, addTaskBtn);
  }

  addTask() {
    const addTaskBtn = document.querySelector(".add-task");
    addTaskBtn.addEventListener("click", () => {
      this.addCollapseClassToDiv();
    });
  }
}

export { Tasks };
