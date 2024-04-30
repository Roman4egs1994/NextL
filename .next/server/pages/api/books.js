"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/books";
exports.ids = ["pages/api/books"];
exports.modules = {

/***/ "(api)/./pages/api/books.ts":
/*!****************************!*\
  !*** ./pages/api/books.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ books)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst booksDB = [{\n  id: 1,\n  title: 'name'\n}, {\n  id: 2,\n  title: 'title'\n}, {\n  id: 3,\n  title: 'name 2'\n}];\nfunction books(req, res) {\n  if (req.method === 'GET') {\n    let books = booksDB;\n    const term = req.query.term;\n\n    if (term) {\n      books = books.filter(books => books.title.toLowerCase().includes(term.toLowerCase()));\n    }\n\n    res.status(200).json(books);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYm9va3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBTUEsTUFBTUEsT0FBTyxHQUFHLENBQ1o7RUFBQ0MsRUFBRSxFQUFFLENBQUw7RUFBUUMsS0FBSyxFQUFFO0FBQWYsQ0FEWSxFQUVaO0VBQUNELEVBQUUsRUFBRSxDQUFMO0VBQVFDLEtBQUssRUFBRTtBQUFmLENBRlksRUFHWjtFQUFDRCxFQUFFLEVBQUUsQ0FBTDtFQUFRQyxLQUFLLEVBQUU7QUFBZixDQUhZLENBQWhCO0FBTWUsU0FBU0MsS0FBVCxDQUNYQyxHQURXLEVBRVhDLEdBRlcsRUFHYjtFQUNFLElBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3RCLElBQUlILEtBQUssR0FBSUgsT0FBYjtJQUNBLE1BQU1PLElBQUksR0FBR0gsR0FBRyxDQUFDSSxLQUFKLENBQVVELElBQXZCOztJQUVBLElBQUdBLElBQUgsRUFBUztNQUNMSixLQUFLLEdBQUdBLEtBQUssQ0FBQ00sTUFBTixDQUFhTixLQUFLLElBQUlBLEtBQUssQ0FBQ0QsS0FBTixDQUFZUSxXQUFaLEdBQTBCQyxRQUExQixDQUFtQ0osSUFBSSxDQUFDRyxXQUFMLEVBQW5DLENBQXRCLENBQVI7SUFDSDs7SUFFREwsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJWLEtBQXJCO0VBQ0g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tYXN0ZXItY2xhc3MvLi9wYWdlcy9hcGkvYm9va3MudHM/Y2QwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxyXG5pbXBvcnQgdHlwZSB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcclxuXHJcbnR5cGUgRGF0YSA9IEJvb2tUeXBlW11cclxuXHJcblxyXG5jb25zdCBib29rc0RCID0gW1xyXG4gICAge2lkOiAxLCB0aXRsZTogJ25hbWUnfSxcclxuICAgIHtpZDogMiwgdGl0bGU6ICd0aXRsZSd9LFxyXG4gICAge2lkOiAzLCB0aXRsZTogJ25hbWUgMid9LFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib29rcyhcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIGxldCBib29rcyA9ICBib29rc0RCXHJcbiAgICAgICAgY29uc3QgdGVybSA9IHJlcS5xdWVyeS50ZXJtIGFzIHN0cmluZ1xyXG5cclxuICAgICAgICBpZih0ZXJtKSB7XHJcbiAgICAgICAgICAgIGJvb2tzID0gYm9va3MuZmlsdGVyKGJvb2tzID0+IGJvb2tzLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGJvb2tzKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxudHlwZSBCb29rVHlwZSA9IHtcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbn0iXSwibmFtZXMiOlsiYm9va3NEQiIsImlkIiwidGl0bGUiLCJib29rcyIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRlcm0iLCJxdWVyeSIsImZpbHRlciIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/books.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/books.ts"));
module.exports = __webpack_exports__;

})();