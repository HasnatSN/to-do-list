class InboxSystem {
  constructor() {
    this.currentTasksArray = [];
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return (today = yyyy + "-" + mm + "-" + dd);
  }

  getTodaysWeek(currentdate) {
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
    return result;
  }

  showAllTasks(taskArea) {
    taskArea = document.querySelectorAll(".date-field");
    for (let task of taskArea) {
      task.parentNode.classList.remove("collapse-div");
    }
  }

  showTodaysTasks(taskArea) {
    taskArea = document.querySelectorAll(".date-field");

    for (let task of taskArea) {
      if (task.value == this.getTodaysDate()) {
      } else {
        task.parentNode.classList.add("collapse-div");
      }
    }
  }

  showWeekTasks(taskArea) {
    taskArea = document.querySelectorAll(".date-field");

    for (let task of taskArea) {

        let currentdate = new Date();
        let date = new Date(task.value);

        if (this.getTodaysWeek(date) == this.getTodaysWeek(currentdate)) {
            task.parentNode.classList.remove("collapse-div");
        } else {
          task.parentNode.classList.add("collapse-div");
        }
      }
  }

  addEventListenerToInboxes() {
    const inboxAll = document.querySelector(".inbox-all");
    const inboxDay = document.querySelector(".inbox-day");
    const inboxWeek = document.querySelector(".inbox-week");
    let taskArea = document.querySelectorAll(".date-field");

    inboxAll.addEventListener("click", () => {
      this.showAllTasks(taskArea);
    });

    inboxDay.addEventListener("click", () => {
      this.showTodaysTasks(taskArea);
    });

    inboxWeek.addEventListener("click", () => {
      this.showWeekTasks(taskArea);
    });
  }
}

export { InboxSystem };
