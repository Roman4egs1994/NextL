"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/characters",{

/***/ "./pages/characters/index.tsx":
/*!************************************!*\
  !*** ./pages/characters/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageWrapper/PageWrapper */ \"./components/PageWrapper/PageWrapper.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\IT\\\\school\\\\next\\\\nextjs-lesson\\\\pages\\\\characters\\\\index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Characters = function Characters(props) {\n  var characters = props.characters;\n  var charactersList = characters.results.map(function (character) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: character.name\n    }, character.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), charactersList]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Characters;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Characters);\n\nvar _c;\n\n$RefreshReg$(_c, \"Characters\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXJzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBOzs7QUFnQkEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFzQjtFQUVyQyxJQUFRQyxVQUFSLEdBQXNCRCxLQUF0QixDQUFRQyxVQUFSO0VBRUEsSUFBTUMsY0FBYyxHQUFHRCxVQUFVLENBQUNFLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLFNBQUQsRUFBZTtJQUN6RCxvQkFDSTtNQUFBLFVBQXlCQSxTQUFTLENBQUNDO0lBQW5DLEdBQVVELFNBQVMsQ0FBQ0UsRUFBcEI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKO0VBR0gsQ0FKc0IsQ0FBdkI7RUFNQSxvQkFDSSw4REFBQyw0RUFBRDtJQUFBLHdCQUNJLDhEQUFDLDZEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixFQUVLTCxjQUZMO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBTUgsQ0FoQkQ7O0tBQU1IOztBQWtCTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFyYWN0ZXJzL2luZGV4LnRzeD81MTIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QVBJfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2FwaS9hcGlcIjtcclxuaW1wb3J0IHtDaGFyYWN0ZXJUeXBlLCBSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9hc3NldHMvYXBpL3JpY2stYW5kLW1vcnR5LWFwaVwiO1xyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5cclxuaW1wb3J0IHtQYWdlV3JhcHBlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICAoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgQVBJLnJpY2tBbmRNb3J0eS5nZXRDaGFyYWN0ZXJzKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlcnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgUHJvcHNUeXBlID0ge1xyXG4gICAgY2hhcmFjdGVyczogUmVzcG9uc2VUeXBlPENoYXJhY3RlclR5cGU+XHJcbn1cclxuXHJcbmNvbnN0IENoYXJhY3RlcnMgPSAocHJvcHM6IFByb3BzVHlwZSkgPT4ge1xyXG5cclxuICAgIGNvbnN0ICB7Y2hhcmFjdGVyc30gPSBwcm9wc1xyXG5cclxuICAgIGNvbnN0IGNoYXJhY3RlcnNMaXN0ID0gY2hhcmFjdGVycy5yZXN1bHRzLm1hcCgoY2hhcmFjdGVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2NoYXJhY3Rlci5pZH0+e2NoYXJhY3Rlci5uYW1lfTwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICB7Y2hhcmFjdGVyc0xpc3R9XHJcbiAgICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIlBhZ2VXcmFwcGVyIiwiQ2hhcmFjdGVycyIsInByb3BzIiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMaXN0IiwicmVzdWx0cyIsIm1hcCIsImNoYXJhY3RlciIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/characters/index.tsx\n"));

/***/ })

});