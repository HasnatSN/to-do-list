/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nlet projectClass = new _nav__WEBPACK_IMPORTED_MODULE_0__.Project;\r\nlet tasksClass = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Tasks;\r\n\r\nprojectClass.addProjectButtonToNav();\r\ntasksClass.addTask();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor() {\r\n    this.projectsArray = [];\r\n  }\r\n\r\n  createProjectButton() {\r\n    let button = document.createElement(\"button\");\r\n    button.setAttribute(\"data-index\", this.projectsArray.length);\r\n    return button;\r\n  }\r\n\r\n  createDivWithI() {\r\n    let divWithI = document.createElement(\"div\");\r\n    divWithI.innerHTML = '<div><i class=\"fa-solid fa-folder\">';\r\n    return divWithI;\r\n  }\r\n\r\n  getNameOfFolder() {\r\n    let currentFolderName = document.querySelector(\".folder-name-input\").value;\r\n    document.querySelector(\".folder-name-input\").value = \"\";\r\n    if (currentFolderName === \"\") {\r\n      currentFolderName = \"Unnamed\";\r\n    }\r\n    return currentFolderName;\r\n  }\r\n\r\n  createFolderNameDiv() {\r\n    let folderNameDiv = document.createElement(\"div\");\r\n    folderNameDiv.classList.add(\"project-name\");\r\n    folderNameDiv.innerHTML = this.getNameOfFolder();\r\n    return folderNameDiv;\r\n  }\r\n\r\n  removeProjectBtnFromArray(index) {\r\n    this.projectsArray.splice(index, 1);\r\n  }\r\n\r\n  removeProjectBtnFromDom(index) {\r\n    const nav = document.querySelector(\"nav\");\r\n    let childToBeRemoved = nav.childNodes[index + 13];\r\n    childToBeRemoved.parentNode.removeChild(childToBeRemoved);\r\n  }\r\n\r\n  removeProjectBtn(removeBtn) {\r\n    removeBtn.addEventListener(\"click\", () => {\r\n      let index = this.projectsArray.findIndex(\r\n        (button) => removeBtn.dataset.index == button.dataset.index\r\n      );\r\n      this.removeProjectBtnFromArray(index);\r\n      this.removeProjectBtnFromDom(index);\r\n    });\r\n  }\r\n\r\n  createRemoveBtn() {\r\n    let removeBtn = document.createElement(\"button\");\r\n    removeBtn.setAttribute(\"data-index\", this.projectsArray.length);\r\n    removeBtn.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\r\n    removeBtn.classList.add(\"remove\");\r\n    this.removeProjectBtn(removeBtn);\r\n    return removeBtn;\r\n  }\r\n\r\n  appendChildrenToParent(parent, ...args) {\r\n    for (let child of args) {\r\n      parent.appendChild(child);\r\n    }\r\n  }\r\n\r\n  createNewButton() {\r\n    // create all the elements for the custom project button\r\n    this.button = this.createProjectButton();\r\n    this.divWithI = this.createDivWithI();\r\n    this.folderNameDiv = this.createFolderNameDiv();\r\n    this.removeBtn = this.createRemoveBtn();\r\n\r\n    // append all the children elements to the parent button\r\n    this.appendChildrenToParent(\r\n      this.button,\r\n      this.divWithI,\r\n      this.folderNameDiv,\r\n      this.removeBtn\r\n    );\r\n\r\n    this.projectsArray.push(this.button);\r\n    return this.button;\r\n  }\r\n\r\n  createNewFolder(nameInputDiv, addProjectBtn) {\r\n    const createButton = document.querySelector(\".create-btn\");\r\n    const nav = document.querySelector(\"nav\");\r\n\r\n    createButton.addEventListener(\r\n      \"click\",\r\n      () => {\r\n        nav.appendChild(this.createNewButton());\r\n        nameInputDiv.classList.add(\"collapse-div\");\r\n        addProjectBtn.classList.remove(\"collapse-div\")\r\n      },\r\n      { once: true }\r\n    );\r\n  }\r\n\r\n  cancelAddingNewFolder(nameInputDiv, addProjectBtn) {\r\n    const cancelButton = document.querySelector(\".cancel-btn\");\r\n    cancelButton.addEventListener(\"click\", () => {\r\n      nameInputDiv.classList.add(\"collapse-div\");\r\n      addProjectBtn.classList.remove(\"collapse-div\")\r\n    });\r\n\r\n    this.getNameOfFolder();\r\n  }\r\n\r\n  addCollapseClassToDiv() {\r\n    const nameInputDiv = document.querySelector(\".name-input\");\r\n    const addProjectBtn = document.querySelector(\".add-project\")\r\n    nameInputDiv.classList.remove(\"collapse-div\");\r\n    addProjectBtn.classList.add(\"collapse-div\");\r\n    this.cancelAddingNewFolder(nameInputDiv, addProjectBtn);\r\n    this.createNewFolder(nameInputDiv, addProjectBtn);\r\n  }\r\n\r\n  addProjectButtonToNav() {\r\n    const addProjectBtn = document.querySelector(\".add-project\");\r\n    addProjectBtn.addEventListener(\"click\", () => {\r\n      this.addCollapseClassToDiv();\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/nav.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tasks\": () => (/* binding */ Tasks)\n/* harmony export */ });\nclass Tasks {\r\n  constructor() {\r\n    this.tasksArray = [];\r\n  }\r\n\r\n  getTodaysDate() {\r\n    var today = new Date();\r\n    var dd = String(today.getDate()).padStart(2, \"0\");\r\n    var mm = String(today.getMonth() + 1).padStart(2, \"0\");\r\n    var yyyy = today.getFullYear();\r\n    return (today = yyyy + \"-\" + mm + \"-\" + dd);\r\n  }\r\n\r\n  appendChildrenToParent(parent, ...args) {\r\n    for (let child of args) {\r\n      parent.appendChild(child);\r\n    }\r\n  }\r\n\r\n  getNameOfTask(nameFieldInput) {\r\n    const taskNameInput = document.querySelector(\".task-name-input\");\r\n    if (taskNameInput.value == \"\") {\r\n      nameFieldInput.setAttribute(\"value\", \"Unnamed\");\r\n    } else {\r\n      nameFieldInput.setAttribute(\"value\", taskNameInput.value);\r\n      taskNameInput.value = \"\";\r\n    }\r\n  }\r\n\r\n  removeTaskFromDom(index) {\r\n    const taskList = document.querySelectorAll(\".task\");\r\n\r\n    for (let task of taskList) {\r\n      if (task.dataset.index == index) {\r\n        task.parentNode.removeChild(task);\r\n      }\r\n    }\r\n  }\r\n\r\n  createNewTaskDiv() {\r\n    const task = document.createElement(\"div\");\r\n    const isDoneBtn = document.createElement(\"button\");\r\n    const nameFieldInput = document.createElement(\"input\");\r\n    const dateField = document.createElement(\"input\");\r\n    const workingArea = document.querySelector(\".working-area\");\r\n\r\n    let randomIndex = Math.floor(Math.random() * 1000000);\r\n\r\n    task.classList.add(\"task\");\r\n    nameFieldInput.classList.add(\"task-title\");\r\n    dateField.classList.add(\"date-field\");\r\n\r\n    isDoneBtn.innerHTML = '<i class=\"fa-solid fa-circle-check\"></i>';\r\n    isDoneBtn.addEventListener(\"click\", () => {\r\n      this.removeTaskFromDom(isDoneBtn.dataset.index);\r\n    });\r\n\r\n    dateField.setAttribute(\"type\", \"date\");\r\n    dateField.setAttribute(\"value\", this.getTodaysDate());\r\n    task.setAttribute(\"data-index\", randomIndex);\r\n    isDoneBtn.setAttribute(\"data-index\", randomIndex);\r\n\r\n    this.getNameOfTask(nameFieldInput);\r\n\r\n    this.appendChildrenToParent(task, isDoneBtn, nameFieldInput, dateField);\r\n\r\n    workingArea.appendChild(task);\r\n\r\n    const nameInputDiv = document.querySelector(\".name-input-tasks\");\r\n    const addTaskBtn = document.querySelector(\".add-task\");\r\n\r\n    nameInputDiv.classList.add(\"collapse-div\");\r\n    addTaskBtn.classList.remove(\"collapse-div\");\r\n  }\r\n\r\n  createNewTask() {\r\n    const createTaskBtn = document.querySelector(\".create-task-btn\");\r\n    createTaskBtn.addEventListener(\r\n      \"click\",\r\n      () => {\r\n        this.createNewTaskDiv();\r\n      },\r\n      { once: true }\r\n    );\r\n  }\r\n\r\n  cancelAddingNewTask(nameInputDiv, addTaskBtn) {\r\n    const cancelButton = document.querySelector(\".cancel-btn-task\");\r\n    cancelButton.addEventListener(\"click\", () => {\r\n      nameInputDiv.classList.add(\"collapse-div\");\r\n      addTaskBtn.classList.remove(\"collapse-div\");\r\n    });\r\n  }\r\n\r\n  addCollapseClassToDiv() {\r\n    const nameInputDiv = document.querySelector(\".name-input-tasks\");\r\n    const addTaskBtn = document.querySelector(\".add-task\");\r\n\r\n    nameInputDiv.classList.remove(\"collapse-div\");\r\n    addTaskBtn.classList.add(\"collapse-div\");\r\n\r\n    this.cancelAddingNewTask(nameInputDiv, addTaskBtn);\r\n    this.createNewTask(nameInputDiv, addTaskBtn);\r\n  }\r\n\r\n  addTask() {\r\n    const addTaskBtn = document.querySelector(\".add-task\");\r\n    addTaskBtn.addEventListener(\"click\", () => {\r\n      this.addCollapseClassToDiv();\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;