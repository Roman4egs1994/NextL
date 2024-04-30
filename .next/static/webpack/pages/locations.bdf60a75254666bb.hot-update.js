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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageWrapper/PageWrapper */ \"./components/PageWrapper/PageWrapper.tsx\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\IT\\\\school\\\\next\\\\nextjs-lesson\\\\pages\\\\locations\\\\index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar getLocations = function getLocations() {\n  return fetch('https://rickandmortyapi.com/api/location', {\n    method: 'GET'\n  }).then(function (res) {\n    return res.json();\n  });\n};\n\nvar Episodes = function Episodes() {\n  _s();\n\n  var _useQuery = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(['locations'], getLocations),\n      locations = _useQuery.data;\n\n  if (!locations) {\n    return null;\n  }\n\n  var locationList = locations.results.map(function (location) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: location.name\n    }, location.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_PageWrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_2__.PageWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this), locationList]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Episodes, \"THz51jIVXwTbGbgzvHBChnSQ0kg=\", false, function () {\n  return [_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery];\n});\n\n_c = Episodes;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Episodes);\n\nvar _c;\n\n$RefreshReg$(_c, \"Episodes\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2NhdGlvbnMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFFQTtBQUNBOzs7QUFNQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0VBQ3ZCLE9BQU9DLEtBQUssQ0FBQywwQ0FBRCxFQUE2QztJQUNyREMsTUFBTSxFQUFFO0VBRDZDLENBQTdDLENBQUwsQ0FFSkMsSUFGSSxDQUVDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtFQUFBLENBRkosQ0FBUDtBQUdILENBSkQ7O0FBT0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtFQUFBOztFQUNuQixnQkFBMkJQLCtEQUFRLENBQTZCLENBQUMsV0FBRCxDQUE3QixFQUE0Q0MsWUFBNUMsQ0FBbkM7RUFBQSxJQUFhTyxTQUFiLGFBQU9DLElBQVA7O0VBRUEsSUFBRyxDQUFDRCxTQUFKLEVBQWU7SUFDWCxPQUFRLElBQVI7RUFDSDs7RUFFRCxJQUFNRSxZQUFZLEdBQUdGLFNBQVMsQ0FBQ0csT0FBVixDQUFrQkMsR0FBbEIsQ0FBc0IsVUFBQ0MsUUFBRCxFQUFjO0lBQ3JELG9CQUNJO01BQUEsVUFBd0JBLFFBQVEsQ0FBQ0M7SUFBakMsR0FBVUQsUUFBUSxDQUFDRSxFQUFuQjtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREo7RUFHSCxDQUpvQixDQUFyQjtFQU1BLG9CQUNJLDhEQUFDLDRFQUFEO0lBQUEsd0JBQ0ksOERBQUMsNkRBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURKLEVBRUtMLFlBRkw7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREo7QUFNSCxDQW5CRDs7R0FBTUg7VUFDeUJQOzs7S0FEekJPOztBQXFCTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2NhdGlvbnMvaW5kZXgudHN4PzIyNGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QVBJfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2FwaS9hcGlcIjtcclxuaW1wb3J0IHtMb2NhdGlvblR5cGUsIFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9hcGkvcmljay1hbmQtbW9ydHktYXBpXCI7XHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyXCI7XHJcblxyXG5pbXBvcnQge1BhZ2VXcmFwcGVyfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdlV3JhcHBlci9QYWdlV3JhcHBlclwiO1xyXG5pbXBvcnQge3VzZVF1ZXJ5fSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAgKCkgPT4ge1xyXG5cclxufVxyXG5cclxuY29uc3QgZ2V0TG9jYXRpb25zID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL3JpY2thbmRtb3J0eWFwaS5jb20vYXBpL2xvY2F0aW9uJywge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbn1cclxuXHJcblxyXG5jb25zdCBFcGlzb2RlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhOiBsb2NhdGlvbnN9ICA9IHVzZVF1ZXJ5PFJlc3BvbnNlVHlwZTxMb2NhdGlvblR5cGU+PihbJ2xvY2F0aW9ucyddLCBnZXRMb2NhdGlvbnMpXHJcblxyXG4gICAgaWYoIWxvY2F0aW9ucykge1xyXG4gICAgICAgIHJldHVybiAgbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uTGlzdCA9IGxvY2F0aW9ucy5yZXN1bHRzLm1hcCgobG9jYXRpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17bG9jYXRpb24uaWR9Pntsb2NhdGlvbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICB7bG9jYXRpb25MaXN0fVxyXG4gICAgICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXBpc29kZXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiUGFnZVdyYXBwZXIiLCJ1c2VRdWVyeSIsImdldExvY2F0aW9ucyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJFcGlzb2RlcyIsImxvY2F0aW9ucyIsImRhdGEiLCJsb2NhdGlvbkxpc3QiLCJyZXN1bHRzIiwibWFwIiwibG9jYXRpb24iLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/locations/index.tsx\n"));

/***/ })

});