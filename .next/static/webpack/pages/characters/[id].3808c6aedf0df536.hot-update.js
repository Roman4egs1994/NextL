"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/characters/[id]",{

/***/ "./pages/characters/[id].tsx":
/*!***********************************!*\
  !*** ./pages/characters/[id].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _components_Layout_BaseLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Layout/BaseLayout */ \"./components/Layout/BaseLayout.tsx\");\n/* harmony import */ var _components_Card_CharacterCard_CharacterCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Card/CharacterCard/CharacterCard */ \"./components/Card/CharacterCard/CharacterCard.tsx\");\n/* harmony import */ var _components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageWrapper/PageWrapper */ \"./components/PageWrapper/PageWrapper.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\IT\\\\school\\\\next\\\\nextjs-lesson\\\\pages\\\\characters\\\\[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n //когда много различных персонажей , много страниче (допустим открытие по ID , заранее компилем их )\n\n\n\nvar Character = function Character(props) {\n  _s();\n\n  var character = props.character;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  if (router.isFallback) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 35\n  }, _this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(IdText, {\n      children: \"ID: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Card_CharacterCard_CharacterCard__WEBPACK_IMPORTED_MODULE_1__.CharacterCard, {\n      character: character\n    }, character.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Character, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Character;\nvar IdText = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"id__IdText\",\n  componentId: \"sc-kz9dnt-0\"\n})([\"font-size:40px;\"]);\n_c2 = IdText;\nCharacter.getLayout = _components_Layout_BaseLayout__WEBPACK_IMPORTED_MODULE_0__.getLayout;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Character);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Character\");\n$RefreshReg$(_c2, \"IdText\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFyYWN0ZXJzL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFLQTtDQUdBOzs7O0FBMENBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBc0I7RUFBQTs7RUFFcEMsSUFBT0MsU0FBUCxHQUFvQkQsS0FBcEIsQ0FBT0MsU0FBUDtFQUNBLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7RUFFQSxJQUFHSyxNQUFNLENBQUNDLFVBQVYsRUFBc0Isb0JBQVE7SUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FBUjtFQUV0QixvQkFDSSw4REFBQyw0RUFBRDtJQUFBLHdCQUNJLDhEQUFDLE1BQUQ7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixlQUVJLDhEQUFDLHVGQUFEO01BQWtDLFNBQVMsRUFBRUY7SUFBN0MsR0FBb0JBLFNBQVMsQ0FBQ0csRUFBOUI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBTUgsQ0FiRDs7R0FBTUw7VUFHYUY7OztLQUhiRTtBQWVOLElBQU1NLE1BQU0sR0FBR1Asd0VBQUg7RUFBQTtFQUFBO0FBQUEsdUJBQVo7TUFBTU87QUFLTk4sU0FBUyxDQUFDTCxTQUFWLEdBQXNCQSxvRUFBdEI7O0FBQ0EsK0RBQWVLLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhcmFjdGVycy9baWRdLnRzeD9iNjRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0TGF5b3V0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvQmFzZUxheW91dFwiO1xyXG5pbXBvcnQge0NoYXJhY3RlckNhcmR9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmQvQ2hhcmFjdGVyQ2FyZC9DaGFyYWN0ZXJDYXJkXCI7XHJcbmltcG9ydCB7UGFnZVdyYXBwZXJ9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VXcmFwcGVyL1BhZ2VXcmFwcGVyXCI7XHJcbmltcG9ydCB7Q2hhcmFjdGVyVHlwZX0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9hcGkvcmljay1hbmQtbW9ydHktYXBpXCI7XHJcbmltcG9ydCB7QVBJfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2FwaS9hcGlcIjtcclxuaW1wb3J0IHtHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHN9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBjaGFyYWN0ZXJzIGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbi8v0LrQvtCz0LTQsCDQvNC90L7Qs9C+INGA0LDQt9C70LjRh9C90YvRhSDQv9C10YDRgdC+0L3QsNC20LXQuSAsINC80L3QvtCz0L4g0YHRgtGA0LDQvdC40YfQtSAo0LTQvtC/0YPRgdGC0LjQvCDQvtGC0LrRgNGL0YLQuNC1INC/0L4gSUQgLCDQt9Cw0YDQsNC90LXQtSDQutC+0LzQv9C40LvQtdC8INC40YUgKVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtyZXN1bHRzfSA9IGF3YWl0IEFQSS5yaWNrQW5kTW9ydHkuZ2V0Q2hhcmFjdGVycygpXHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSByZXN1bHRzLm1hcChjaGFyYWN0ZXIgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHtpZDogU3RyaW5nKGNoYXJhY3Rlci5pZCl9XHJcbiAgICB9KSlcclxuXHJcbiAgICAvLyBbe3BhcmFtczoge2lkOjF9fV0g0LzQsNGB0YHQuNCyINGD0YDQu9C+0LJcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8v0YHRgtGA0LDQvdC40YfQutCwINGB0L7QsdC40YDQsNC10YLRgdGPINGC0L7Qu9GM0LrQviDQstC+INCy0YDQtdC80Y8g0LHQuNC70LTQsCAuINCe0L3QsCDQsdGD0LTQtdGCINCy0YHQtdCz0LTQsCDQvtC00LjQvdCw0LrQvtCy0LDRjyAuINCe0L3QsFxyXG4vL9C60LXRiNC40YDRg9C10YLRgdGPXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtc30pID0+IHtcclxuXHJcbiAgICBjb25zdCB7aWR9ID0gcGFyYW1zIHx8IHt9XHJcblxyXG4gICAgY29uc3QgY2hhcmFjdGVyID0gYXdhaXQgQVBJLnJpY2tBbmRNb3J0eS5nZXRDaGFyYWN0ZXIoaWQgYXMgc3RyaW5nKVxyXG5cclxuICAgIGlmICghY2hhcmFjdGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnR5cGUgUHJvcHNUeXBlID0ge1xyXG4gICAgY2hhcmFjdGVyOiBDaGFyYWN0ZXJUeXBlXHJcbn1cclxuXHJcbmNvbnN0IENoYXJhY3RlciA9IChwcm9wczogUHJvcHNUeXBlKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2NoYXJhY3Rlcn0gPSBwcm9wc1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBpZihyb3V0ZXIuaXNGYWxsYmFjaykgcmV0dXJuICA8aDE+TG9hZGluZy4uLjwvaDE+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxJZFRleHQ+SUQ6IDwvSWRUZXh0PlxyXG4gICAgICAgICAgICA8Q2hhcmFjdGVyQ2FyZCBrZXk9e2NoYXJhY3Rlci5pZH0gY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9Lz5cclxuICAgICAgICA8L1BhZ2VXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IElkVGV4dCA9IHN0eWxlZC5kaXZgXHJcbmZvbnQtc2l6ZTogNDBweDtcclxuYFxyXG5cclxuXHJcbkNoYXJhY3Rlci5nZXRMYXlvdXQgPSBnZXRMYXlvdXRcclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyOyJdLCJuYW1lcyI6WyJnZXRMYXlvdXQiLCJDaGFyYWN0ZXJDYXJkIiwiUGFnZVdyYXBwZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZWQiLCJDaGFyYWN0ZXIiLCJwcm9wcyIsImNoYXJhY3RlciIsInJvdXRlciIsImlzRmFsbGJhY2siLCJpZCIsIklkVGV4dCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/characters/[id].tsx\n"));

/***/ })

});