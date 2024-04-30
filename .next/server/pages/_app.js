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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./assets/hooks/useLoader.ts":
/*!***********************************!*\
  !*** ./assets/hooks/useLoader.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLoader\": () => (/* binding */ useLoader)\n/* harmony export */ });\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst useLoader = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    const startLoading = () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();\n\n    const endLoading = () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();\n\n    router.events.on('routeChangeStart', startLoading);\n    router.events.on('routeChangeComplete', endLoading);\n    router.events.on('routeChangeError', endLoading);\n    return () => {\n      router.events.off('routeChangeStart', startLoading);\n      router.events.off('routeChangeComplete', endLoading);\n      router.events.off('routeChangeError', endLoading);\n    };\n  }, [router]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvaG9va3MvdXNlTG9hZGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxNQUFNRyxTQUFTLEdBQUcsTUFBTTtFQUMzQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCO0VBRUFFLGdEQUFTLENBQUMsTUFBSTtJQUNWLE1BQU1HLFlBQVksR0FBRyxNQUFNSixzREFBQSxFQUEzQjs7SUFDQSxNQUFNTSxVQUFVLEdBQUcsTUFBTU4scURBQUEsRUFBekI7O0lBRUFHLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsWUFBckM7SUFDQUQsTUFBTSxDQUFDSyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDSCxVQUF4QztJQUNBSCxNQUFNLENBQUNLLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNILFVBQXJDO0lBR0EsT0FBTyxNQUFNO01BQ1RILE1BQU0sQ0FBQ0ssTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ04sWUFBdEM7TUFDQUQsTUFBTSxDQUFDSyxNQUFQLENBQWNFLEdBQWQsQ0FBa0IscUJBQWxCLEVBQXlDSixVQUF6QztNQUNBSCxNQUFNLENBQUNLLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NKLFVBQXRDO0lBQ0gsQ0FKRDtFQUtILENBZFEsRUFjUCxDQUFDSCxNQUFELENBZE8sQ0FBVDtBQWdCSCxDQW5CTSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1tYXN0ZXItY2xhc3MvLi9hc3NldHMvaG9va3MvdXNlTG9hZGVyLnRzP2QyM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXHJcbiAgICAgICAgY29uc3QgZW5kTG9hZGluZyA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcclxuXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIHN0YXJ0TG9hZGluZylcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgZW5kTG9hZGluZylcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgZW5kTG9hZGluZylcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0Jywgc3RhcnRMb2FkaW5nKVxyXG4gICAgICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGVuZExvYWRpbmcpXHJcbiAgICAgICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUVycm9yJywgZW5kTG9hZGluZylcclxuICAgICAgICB9XHJcbiAgICB9LFtyb3V0ZXJdKVxyXG5cclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJ1c2VFZmZlY3QiLCJ1c2VMb2FkZXIiLCJyb3V0ZXIiLCJzdGFydExvYWRpbmciLCJzdGFydCIsImVuZExvYWRpbmciLCJkb25lIiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/hooks/useLoader.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/query-core */ \"@tanstack/query-core\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _assets_hooks_useLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hooks/useLoader */ \"./assets/hooks/useLoader.ts\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/nprogress.css */ \"./styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__]);\n([_tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"C:\\\\IT\\\\school\\\\next\\\\nextjs-lesson\\\\pages\\\\_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const {\n    0: queryClient\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_1__.QueryClient());\n  (0,_assets_hooks_useLoader__WEBPACK_IMPORTED_MODULE_3__.useLoader)();\n\n  const getLayout = Component.getLayout ?? (page => page);\n\n  return getLayout( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n    client: queryClient,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.Hydrate, {\n      state: pageProps.dehydrateState,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, this));\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVVlLFNBQVNLLEdBQVQsQ0FBYTtFQUFDQyxTQUFEO0VBQVlDO0FBQVosQ0FBYixFQUF5RDtFQUVwRSxNQUFNO0lBQUEsR0FBQ0M7RUFBRCxJQUFnQlIsK0NBQVEsQ0FBQyxNQUFNLElBQUlDLDZEQUFKLEVBQVAsQ0FBOUI7RUFDQUcsa0VBQVM7O0VBQ1QsTUFBTUssU0FBUyxHQUFHSCxTQUFTLENBQUNHLFNBQVYsS0FBeUJDLElBQUQsSUFBVUEsSUFBbEMsQ0FBbEI7O0VBRUEsT0FBT0QsU0FBUyxlQUNaLDhEQUFDLHNFQUFEO0lBQXFCLE1BQU0sRUFBRUQsV0FBN0I7SUFBQSx1QkFDSSw4REFBQywwREFBRDtNQUFTLEtBQUssRUFBRUQsU0FBUyxDQUFDSSxjQUExQjtNQUFBLHVCQUNJLDhEQUFDLFNBQUQsb0JBQWVKLFNBQWY7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFESjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBRFksQ0FBaEI7QUFNSCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLW1hc3Rlci1jbGFzcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FwcFByb3BzfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7UmVhY3RFbGVtZW50LCBSZWFjdE5vZGUsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQge1F1ZXJ5Q2xpZW50fSBmcm9tIFwiQHRhbnN0YWNrL3F1ZXJ5LWNvcmVcIjtcclxuaW1wb3J0IHtIeWRyYXRlLCBRdWVyeUNsaWVudFByb3ZpZGVyfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7dXNlTG9hZGVyfSBmcm9tIFwiLi4vYXNzZXRzL2hvb2tzL3VzZUxvYWRlclwiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJ1xyXG5cclxuZXhwb3J0IHR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0PFAgPSB7fT4gPSBOZXh0UGFnZTxQPiAmIHtcclxuICAgIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XHJcbiAgICBDb21wb25lbnQ6IE5leHRQYWdlV2l0aExheW91dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcclxuXHJcbiAgICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFF1ZXJ5Q2xpZW50KVxyXG4gICAgdXNlTG9hZGVyKClcclxuICAgIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgPz8gKChwYWdlKSA9PiBwYWdlKTtcclxuXHJcbiAgICByZXR1cm4gZ2V0TGF5b3V0KFxyXG4gICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZVN0YXRlfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9IeWRyYXRlPlxyXG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj4pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlF1ZXJ5Q2xpZW50IiwiSHlkcmF0ZSIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJ1c2VMb2FkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsImdldExheW91dCIsInBhZ2UiLCJkZWh5ZHJhdGVTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/nprogress.css":
/*!******************************!*\
  !*** ./styles/nprogress.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/query-core":
/*!***************************************!*\
  !*** external "@tanstack/query-core" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/query-core");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();