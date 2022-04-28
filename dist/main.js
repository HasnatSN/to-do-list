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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\r\n\r\nlet projectClass = new _nav__WEBPACK_IMPORTED_MODULE_0__.Project;\r\n\r\nprojectClass.addProjectButtonToNav();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor() {\r\n    this.projectsArray = [];\r\n  }\r\n\r\n  createProjectButton() {\r\n    let button = document.createElement(\"button\");\r\n    button.setAttribute(\"data-index\", this.projectsArray);\r\n    return button;\r\n  }\r\n\r\n  createDivWithI() {\r\n    let divWithI = document.createElement(\"div\");\r\n    divWithI.innerHTML = '<div><i class=\"fa-solid fa-folder\">';\r\n    return divWithI;\r\n  }\r\n\r\n  createFolderNameDiv(folderName) {\r\n    let folderNameDiv = document.createElement(\"div\");\r\n    folderNameDiv.classList.add(\"project-name\");\r\n    folderNameDiv.textContent = folderName;\r\n    return folderNameDiv;\r\n  }\r\n\r\n  createRemoveBtn() {\r\n    let removeBtn = document.createElement(\"button\");\r\n    removeBtn.innerHTML =\r\n      '<button class=\"remove\"><i class=\"fa-solid fa-xmark\"></i></button>';\r\n    return removeBtn;\r\n  }\r\n\r\n  appendChildrenToParent(parent, ...args) {\r\n    for (let child of args) {\r\n      parent.appendChild(child);\r\n    }\r\n  }\r\n\r\n  createNewButton() {\r\n    // create all the elements for the custom project button\r\n    this.button = this.createProjectButton();\r\n    this.divWithI = this.createDivWithI();\r\n    this.folderNameDiv = this.createFolderNameDiv(prompt(\"Folder name?\"));\r\n    this.removeBtn = this.createRemoveBtn();\r\n\r\n    // append all the children elements to the parent button\r\n    this.appendChildrenToParent(\r\n      this.button,\r\n      this.divWithI,\r\n      this.folderNameDiv,\r\n      this.removeBtn\r\n    );\r\n\r\n    this.projectsArray.push(this.button);\r\n    return this.button;\r\n  }\r\n\r\n  addProjectButtonToNav() {\r\n    const addProjectBtn = document.querySelector(\".add-project\");\r\n    addProjectBtn.addEventListener(\"click\", () => {\r\n      const nav = document.querySelector(\"nav\");\r\n      nav.appendChild(this.createNewButton());\r\n    });\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/nav.js?");

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