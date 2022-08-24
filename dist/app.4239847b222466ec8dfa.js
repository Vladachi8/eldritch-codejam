/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/Ancients/index.js":
/*!***********************************!*\
  !*** ../assets/Ancients/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Azathoth.png */ "../assets/Ancients/Azathoth.png");
/* harmony import */ var _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cthulthu.png */ "../assets/Ancients/Cthulthu.png");
/* harmony import */ var _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IogSothoth.png */ "../assets/Ancients/IogSothoth.png");
/* harmony import */ var _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShubNiggurath.png */ "../assets/Ancients/ShubNiggurath.png");





const ancients = {
  azathoth: _Azathoth_png__WEBPACK_IMPORTED_MODULE_0__,
  cthulhu: _Cthulthu_png__WEBPACK_IMPORTED_MODULE_1__,
  iogSothoth: _IogSothoth_png__WEBPACK_IMPORTED_MODULE_2__,
  shubNiggurath: _ShubNiggurath_png__WEBPACK_IMPORTED_MODULE_3__
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ancients);

/***/ }),

/***/ "../data/ancients.js":
/*!***************************!*\
  !*** ../data/ancients.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Ancients/index */ "../assets/Ancients/index.js");


const ancientsData = [
  {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].azathoth,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].cthulhu,
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 0,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].iogSothoth,
    firstStage: {
      greenCards: 0,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 1,
      brownCards: 3,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 0,
      brownCards: 4,
    },
  },
  {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_0__["default"].shubNiggurath,
    firstStage: {
      greenCards: 1,
      blueCards: 1,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 1,
      brownCards: 2,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 0,
      brownCards: 4,
    },
  },
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ancientsData);

/***/ }),

/***/ "../data/difficulties.js":
/*!*******************************!*\
  !*** ../data/difficulties.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const difficulties = [
  {
    id: 'easy',
    name: 'Низкая'
  },
  {
    id: 'normal',
    name: 'Средняя'
  },
  {
    id: 'hard',
    name: 'Высокая'
  },
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (difficulties);

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "../assets/Ancients/Azathoth.png":
/*!***************************************!*\
  !*** ../assets/Ancients/Azathoth.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e76cc60e6f2b9bb167ce.png";

/***/ }),

/***/ "../assets/Ancients/Cthulthu.png":
/*!***************************************!*\
  !*** ../assets/Ancients/Cthulthu.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7bfd029744dc9f87c1a.png";

/***/ }),

/***/ "../assets/Ancients/IogSothoth.png":
/*!*****************************************!*\
  !*** ../assets/Ancients/IogSothoth.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5b7717bff973cda27be.png";

/***/ }),

/***/ "../assets/Ancients/ShubNiggurath.png":
/*!********************************************!*\
  !*** ../assets/Ancients/ShubNiggurath.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68c4272e00c9596e65b1.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _data_difficulties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/difficulties */ "../data/difficulties.js");
/* harmony import */ var _data_ancients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ancients */ "../data/ancients.js");
/* harmony import */ var _assets_Ancients_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Ancients/index */ "../assets/Ancients/index.js");







console.log('ancients')

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjQyMzk4NDdiMjIyNDY2ZWM4ZGZhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNEO0FBQ0s7QUFDTTs7QUFFaEQ7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNULFlBQVk7QUFDWixlQUFlO0FBQ2Y7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1pnQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVFQUFpQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzRUFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMseUVBQW1CO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRFQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDckZmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7O0FDZmY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUM0QjtBQUNKO0FBQ0k7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vYXNzZXRzL0FuY2llbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9kYXRhL2FuY2llbnRzLmpzIiwid2VicGFjazovLy8uLi9kYXRhL2RpZmZpY3VsdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZS5jc3M/YjI1OSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF6YXRob3RoIGZyb20gJy4vQXphdGhvdGgucG5nJztcbmltcG9ydCBjdGh1bGh1IGZyb20gJy4vQ3RodWx0aHUucG5nJztcbmltcG9ydCBpb2dTb3Rob3RoIGZyb20gJy4vSW9nU290aG90aC5wbmcnO1xuaW1wb3J0IHNodWJOaWdndXJhdGggZnJvbSAnLi9TaHViTmlnZ3VyYXRoLnBuZyc7XG5cbmNvbnN0IGFuY2llbnRzID0ge1xuICBhemF0aG90aCxcbiAgY3RodWxodSxcbiAgaW9nU290aG90aCxcbiAgc2h1Yk5pZ2d1cmF0aFxufVxuXG5leHBvcnQgZGVmYXVsdCBhbmNpZW50cyIsImltcG9ydCBBbmNpZW50cyBmcm9tICcuLi9hc3NldHMvQW5jaWVudHMvaW5kZXgnXG5cbmNvbnN0IGFuY2llbnRzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAnYXphdGhvdGgnLFxuICAgIG5hbWU6ICdhemF0aG90aCcsXG4gICAgY2FyZEZhY2U6IEFuY2llbnRzLmF6YXRob3RoLFxuICAgIGZpcnN0U3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXG4gICAgICBibHVlQ2FyZHM6IDEsXG4gICAgICBicm93bkNhcmRzOiAyLFxuICAgIH0sXG4gICAgc2Vjb25kU3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXG4gICAgICBibHVlQ2FyZHM6IDEsXG4gICAgICBicm93bkNhcmRzOiAzLFxuICAgIH0sXG4gICAgdGhpcmRTdGFnZToge1xuICAgICAgZ3JlZW5DYXJkczogMixcbiAgICAgIGJsdWVDYXJkczogMCxcbiAgICAgIGJyb3duQ2FyZHM6IDQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnY3RodWxodScsXG4gICAgbmFtZTogJ2N0aHVsaHUnLFxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5jdGh1bGh1LFxuICAgIGZpcnN0U3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDAsXG4gICAgICBibHVlQ2FyZHM6IDIsXG4gICAgICBicm93bkNhcmRzOiAyLFxuICAgIH0sXG4gICAgc2Vjb25kU3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXG4gICAgICBibHVlQ2FyZHM6IDAsXG4gICAgICBicm93bkNhcmRzOiAzLFxuICAgIH0sXG4gICAgdGhpcmRTdGFnZToge1xuICAgICAgZ3JlZW5DYXJkczogMyxcbiAgICAgIGJsdWVDYXJkczogMCxcbiAgICAgIGJyb3duQ2FyZHM6IDQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnaW9nU290aG90aCcsXG4gICAgbmFtZTogJ2lvZ1NvdGhvdGgnLFxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5pb2dTb3Rob3RoLFxuICAgIGZpcnN0U3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDAsXG4gICAgICBibHVlQ2FyZHM6IDEsXG4gICAgICBicm93bkNhcmRzOiAyLFxuICAgIH0sXG4gICAgc2Vjb25kU3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDIsXG4gICAgICBibHVlQ2FyZHM6IDEsXG4gICAgICBicm93bkNhcmRzOiAzLFxuICAgIH0sXG4gICAgdGhpcmRTdGFnZToge1xuICAgICAgZ3JlZW5DYXJkczogMyxcbiAgICAgIGJsdWVDYXJkczogMCxcbiAgICAgIGJyb3duQ2FyZHM6IDQsXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnc2h1Yk5pZ2d1cmF0aCcsXG4gICAgbmFtZTogJ3NodWJOaWdndXJhdGgnLFxuICAgIGNhcmRGYWNlOiBBbmNpZW50cy5zaHViTmlnZ3VyYXRoLFxuICAgIGZpcnN0U3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDEsXG4gICAgICBibHVlQ2FyZHM6IDEsXG4gICAgICBicm93bkNhcmRzOiAyLFxuICAgIH0sXG4gICAgc2Vjb25kU3RhZ2U6IHtcbiAgICAgIGdyZWVuQ2FyZHM6IDMsXG4gICAgICBibHVlQ2FyZHM6IDEsXG4gICAgICBicm93bkNhcmRzOiAyLFxuICAgIH0sXG4gICAgdGhpcmRTdGFnZToge1xuICAgICAgZ3JlZW5DYXJkczogMixcbiAgICAgIGJsdWVDYXJkczogMCxcbiAgICAgIGJyb3duQ2FyZHM6IDQsXG4gICAgfSxcbiAgfSxcbl1cblxuZXhwb3J0IGRlZmF1bHQgYW5jaWVudHNEYXRhIiwiY29uc3QgZGlmZmljdWx0aWVzID0gW1xuICB7XG4gICAgaWQ6ICdlYXN5JyxcbiAgICBuYW1lOiAn0J3QuNC30LrQsNGPJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdub3JtYWwnLFxuICAgIG5hbWU6ICfQodGA0LXQtNC90Y/RjydcbiAgfSxcbiAge1xuICAgIGlkOiAnaGFyZCcsXG4gICAgbmFtZTogJ9CS0YvRgdC+0LrQsNGPJ1xuICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBkaWZmaWN1bHRpZXMiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCBkaWZmaWN1bHRpZXMgZnJvbSAnLi4vZGF0YS9kaWZmaWN1bHRpZXMnO1xyXG5pbXBvcnQgYW5jaWVudHNEYXRhIGZyb20gJy4uL2RhdGEvYW5jaWVudHMnO1xyXG5pbXBvcnQgYW5jaWVudHMgZnJvbSAnLi4vYXNzZXRzL0FuY2llbnRzL2luZGV4JztcclxuXHJcblxyXG5cclxuY29uc29sZS5sb2coJ2FuY2llbnRzJylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9