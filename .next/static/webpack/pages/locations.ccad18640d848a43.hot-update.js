"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/locations",{

/***/ "./pages/locations/index.tsx":
/*!***********************************!*\
  !*** ./pages/locations/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageWrapper/PageWrapper */ \"./components/PageWrapper/PageWrapper.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\IT\\\\school\\\\next\\\\nextjs-lesson\\\\pages\\\\locations\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar getLocations = function getLocations() {\n  return fetch('https://rickandmortyapi.com/api/location', {\n    method: 'GET'\n  }).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Episodes = function Episodes() {\n  _s();\n\n  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(['locations'], getLocations),\n      locations = _useQuery.data;\n\n  if (!locations) {\n    return null;\n  }\n\n  var locationList = locations.results.map(function (location) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: location.name\n    }, location.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this), locationList]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Episodes, \"THz51jIVXwTbGbgzvHBChnSQ0kg=\", false, function () {\n  return [_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = Episodes;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Episodes);\n\nvar _c;\n\n$RefreshReg$(_c, \"Episodes\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2NhdGlvbnMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBOzs7QUFJQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0VBQ3ZCLE9BQU9DLEtBQUssQ0FBQywwQ0FBRCxFQUE2QztJQUNyREMsTUFBTSxFQUFFO0VBRDZDLENBQTdDLENBQUwsQ0FFSkMsSUFGSSxDQUVDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtFQUFBLENBRkosQ0FBUDtBQUdILENBSkQ7O0FBb0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFBQTs7RUFDbkIsZ0JBQTJCUCwrREFBUSxDQUE2QixDQUFDLFdBQUQsQ0FBN0IsRUFBNENDLFlBQTVDLENBQW5DO0VBQUEsSUFBYU8sU0FBYixhQUFPQyxJQUFQOztFQUVBLElBQUcsQ0FBQ0QsU0FBSixFQUFlO0lBQ1gsT0FBUSxJQUFSO0VBQ0g7O0VBRUQsSUFBTUUsWUFBWSxHQUFHRixTQUFTLENBQUNHLE9BQVYsQ0FBa0JDLEdBQWxCLENBQXNCLFVBQUNDLFFBQUQsRUFBYztJQUNyRCxvQkFDSTtNQUFBLFVBQXdCQSxRQUFRLENBQUNDO0lBQWpDLEdBQVVELFFBQVEsQ0FBQ0UsRUFBbkI7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKO0VBR0gsQ0FKb0IsQ0FBckI7RUFNQSxvQkFDSSw4REFBQyw0RUFBRDtJQUFBLHdCQUNJLDhEQUFDLDZEQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FESixFQUVLTCxZQUZMO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURKO0FBTUgsQ0FuQkQ7O0dBQU1IO1VBQ3lCUDs7O0tBRHpCTzs7QUFxQk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9jYXRpb25zL2luZGV4LnRzeD8yMjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0FQSX0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9hcGkvYXBpXCI7XHJcbmltcG9ydCB7TG9jYXRpb25UeXBlLCBSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9hc3NldHMvYXBpL3JpY2stYW5kLW1vcnR5LWFwaVwiO1xyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5cclxuaW1wb3J0IHtQYWdlV3JhcHBlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXJcIjtcclxuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xyXG5pbXBvcnQge1F1ZXJ5Q2xpZW50fSBmcm9tIFwiQHRhbnN0YWNrL3F1ZXJ5LWNvcmVcIjtcclxuXHJcblxyXG5jb25zdCBnZXRMb2NhdGlvbnMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvbG9jYXRpb24nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpXHJcbiAgYXdhaXQgIHF1ZXJ5Q2xpZW50LmZldGNoUXVlcnkoWydsb2NhdGlvbnMnXSwgZ2V0TG9jYXRpb25zKVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IEVwaXNvZGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge2RhdGE6IGxvY2F0aW9uc30gID0gdXNlUXVlcnk8UmVzcG9uc2VUeXBlPExvY2F0aW9uVHlwZT4+KFsnbG9jYXRpb25zJ10sIGdldExvY2F0aW9ucylcclxuXHJcbiAgICBpZighbG9jYXRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuICBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25MaXN0ID0gbG9jYXRpb25zLnJlc3VsdHMubWFwKChsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtsb2NhdGlvbi5pZH0+e2xvY2F0aW9uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdlV3JhcHBlcj5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIHtsb2NhdGlvbkxpc3R9XHJcbiAgICAgICAgPC9QYWdlV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcGlzb2RlczsiXSwibmFtZXMiOlsiUmVhY3QiLCJIZWFkZXIiLCJQYWdlV3JhcHBlciIsInVzZVF1ZXJ5IiwiZ2V0TG9jYXRpb25zIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwianNvbiIsIkVwaXNvZGVzIiwibG9jYXRpb25zIiwiZGF0YSIsImxvY2F0aW9uTGlzdCIsInJlc3VsdHMiLCJtYXAiLCJsb2NhdGlvbiIsIm5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/locations/index.tsx\n"));

/***/ })

});