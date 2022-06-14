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

/***/ "./components/AuthContextProvider/AuthContext.ts":
/*!*******************************************************!*\
  !*** ./components/AuthContextProvider/AuthContext.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction noop() {}\nconst AuthContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    currentUser: null,\n    login: noop,\n    logout: noop\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhDb250ZXh0UHJvdmlkZXIvQXV0aENvbnRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBR3RDLFNBQVNDLElBQUksR0FBRyxFQUFFO0FBUVgsTUFBTUMsV0FBVyxHQUFHRixvREFBYSxDQUFRO0lBQzlDRyxXQUFXLEVBQUUsSUFBSTtJQUNqQkMsS0FBSyxFQUFFSCxJQUFJO0lBQ1hJLE1BQU0sRUFBRUosSUFBSTtDQUNiLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aENvbnRleHRQcm92aWRlci9BdXRoQ29udGV4dC50cz9hMGY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCI7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5pbnRlcmZhY2UgQXV0aEkge1xuICBjdXJyZW50VXNlcjogVXNlclR5cGU7XG4gIGxvZ2luOiAodXNlcjogVXNlclR5cGUpID0+IHZvaWQ7XG4gIGxvZ291dDogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxBdXRoST4oe1xuICBjdXJyZW50VXNlcjogbnVsbCxcbiAgbG9naW46IG5vb3AsXG4gIGxvZ291dDogbm9vcCxcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJub29wIiwiQXV0aENvbnRleHQiLCJjdXJyZW50VXNlciIsImxvZ2luIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AuthContextProvider/AuthContext.ts\n");

/***/ }),

/***/ "./components/AuthContextProvider/AuthContextProvider.tsx":
/*!****************************************************************!*\
  !*** ./components/AuthContextProvider/AuthContextProvider.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"useAuthContext\": () => (/* binding */ useAuthContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_auth_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/auth.hook */ \"./hooks/auth.hook.ts\");\n/* harmony import */ var _AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthContext */ \"./components/AuthContextProvider/AuthContext.ts\");\n\n\n\n\n\nconst AuthContextProvider = ({ children  })=>{\n    const { login , logout , currentUser , ready  } = (0,_hooks_auth_hook__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const isAuthenticated = Boolean(currentUser);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (ready) {\n            if (!isAuthenticated) {\n                router.replace(\"/\");\n            } else if (currentUser.role === \"user\" && !router.pathname.startsWith(\"/posts\")) {\n                router.replace(\"/posts\");\n            } else if (currentUser.role === \"admin\" && !router.pathname.startsWith(\"/admin\")) {\n                router.replace(\"/admin\");\n            }\n        }\n    }, [\n        isAuthenticated,\n        ready,\n        currentUser === null || currentUser === void 0 ? void 0 : currentUser.role\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext.Provider, {\n            value: {\n                login,\n                logout,\n                currentUser\n            },\n            children: ready && children\n        }, void 0, false, {\n            fileName: \"/Users/soledatore/git/kazien-next/components/AuthContextProvider/AuthContextProvider.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\nconst useAuthContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhDb250ZXh0UHJvdmlkZXIvQXV0aENvbnRleHRQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXdDO0FBQ1U7QUFDRjtBQUNKO0FBRXJDLE1BQU1LLG1CQUFtQixHQUFPLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDdkQsTUFBTSxFQUFFQyxLQUFLLEdBQUVDLE1BQU0sR0FBRUMsV0FBVyxHQUFFQyxLQUFLLEdBQUUsR0FBR1AseURBQU8sRUFBRTtJQUN2RCxNQUFNUSxNQUFNLEdBQUdYLHNEQUFTLEVBQUU7SUFDMUIsTUFBTVksZUFBZSxHQUFHQyxPQUFPLENBQUNKLFdBQVcsQ0FBQztJQUU1Q1AsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSVEsS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDRSxlQUFlLEVBQUU7Z0JBQ3BCRCxNQUFNLENBQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQixNQUFNLElBQ0xMLFdBQVcsQ0FBQ00sSUFBSSxLQUFLLE1BQU0sSUFDM0IsQ0FBQ0osTUFBTSxDQUFDSyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFDckM7Z0JBQ0FOLE1BQU0sQ0FBQ0csT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFCLE1BQU0sSUFDTEwsV0FBVyxDQUFDTSxJQUFJLEtBQUssT0FBTyxJQUM1QixDQUFDSixNQUFNLENBQUNLLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUNyQztnQkFDQU4sTUFBTSxDQUFDRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUI7U0FDRjtLQUNGLEVBQUU7UUFBQ0YsZUFBZTtRQUFFRixLQUFLO1FBQUVELFdBQVcsYUFBWEEsV0FBVyxXQUFNLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsV0FBVyxDQUFFTSxJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRWhELHFCQUNFO2tCQUNFLDRFQUFDWCw4REFBb0I7WUFDbkJlLEtBQUssRUFBRTtnQkFDTFosS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsV0FBVzthQUNaO3NCQUVBQyxLQUFLLElBQUlKLFFBQVE7Ozs7O3FCQUNHO3FCQUN0QixDQUNIO0NBQ0gsQ0FBQztBQUVLLE1BQU1jLGNBQWMsR0FBRyxJQUFNbkIsaURBQVUsQ0FBQ0cscURBQVcsQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhDb250ZXh0UHJvdmlkZXIvQXV0aENvbnRleHRQcm92aWRlci50c3g/NTY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZDLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vaG9va3MvYXV0aC5ob29rXCI7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuL0F1dGhDb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyOiBGQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBsb2dpbiwgbG9nb3V0LCBjdXJyZW50VXNlciwgcmVhZHkgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IEJvb2xlYW4oY3VycmVudFVzZXIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlYWR5KSB7XG4gICAgICBpZiAoIWlzQXV0aGVudGljYXRlZCkge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjdXJyZW50VXNlci5yb2xlID09PSBcInVzZXJcIiAmJlxuICAgICAgICAhcm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcG9zdHNcIilcbiAgICAgICkge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9wb3N0c1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGN1cnJlbnRVc2VyLnJvbGUgPT09IFwiYWRtaW5cIiAmJlxuICAgICAgICAhcm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYWRtaW5cIilcbiAgICAgICkge1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9hZG1pblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc0F1dGhlbnRpY2F0ZWQsIHJlYWR5LCBjdXJyZW50VXNlcj8ucm9sZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlclxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIGxvZ2luLFxuICAgICAgICAgIGxvZ291dCxcbiAgICAgICAgICBjdXJyZW50VXNlcixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3JlYWR5ICYmIGNoaWxkcmVufVxuICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VBdXRoIiwiQXV0aENvbnRleHQiLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2dpbiIsImxvZ291dCIsImN1cnJlbnRVc2VyIiwicmVhZHkiLCJyb3V0ZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJCb29sZWFuIiwicmVwbGFjZSIsInJvbGUiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQXV0aENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AuthContextProvider/AuthContextProvider.tsx\n");

/***/ }),

/***/ "./helpers/cookieManage.ts":
/*!*********************************!*\
  !*** ./helpers/cookieManage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie),\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"deleteCookie\": () => (/* binding */ deleteCookie)\n/* harmony export */ });\nconst setCookie = function(name, value, options = {}) {\n    options = {\n        path: \"/\",\n        ...options\n    };\n    if (options.expires instanceof Date) {\n        options.expires = options.expires.toUTCString();\n    }\n    let updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\n    for(let optionKey in options){\n        updatedCookie += \"; \" + optionKey;\n        let optionValue = options[optionKey];\n        if (optionValue !== true) {\n            updatedCookie += \"=\" + optionValue;\n        }\n    }\n    console.log({\n        updatedCookie\n    });\n    document.cookie = updatedCookie;\n};\nconst getCookie = function(cookie, name) {\n    let matches = cookie.match(new RegExp(\"(?:^|; )\" + name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, \"\\\\$1\") + \"=([^;]*)\"));\n    return matches ? decodeURIComponent(matches[1]) : undefined;\n};\nconst deleteCookie = function(name) {\n    setCookie(name, \"\", {\n        \"max-age\": -1\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2Nvb2tpZU1hbmFnZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxTQUFTLEdBQUcsU0FBVUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sR0FBRyxFQUFFLEVBQUU7SUFDNURBLE9BQU8sR0FBRztRQUNSQyxJQUFJLEVBQUUsR0FBRztRQUNULEdBQUdELE9BQU87S0FDWCxDQUFDO0lBRUYsSUFBSUEsT0FBTyxDQUFDRSxPQUFPLFlBQVlDLElBQUksRUFBRTtRQUNuQ0gsT0FBTyxDQUFDRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQ0UsT0FBTyxDQUFDRSxXQUFXLEVBQUUsQ0FBQztLQUNqRDtJQUVELElBQUlDLGFBQWEsR0FDZkMsa0JBQWtCLENBQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBR1Esa0JBQWtCLENBQUNQLEtBQUssQ0FBQztJQUU1RCxJQUFLLElBQUlRLFNBQVMsSUFBSVAsT0FBTyxDQUFFO1FBQzdCSyxhQUFhLElBQUksSUFBSSxHQUFHRSxTQUFTLENBQUM7UUFDbEMsSUFBSUMsV0FBVyxHQUFHUixPQUFPLENBQUNPLFNBQVMsQ0FBQztRQUNwQyxJQUFJQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3hCSCxhQUFhLElBQUksR0FBRyxHQUFHRyxXQUFXLENBQUM7U0FDcEM7S0FDRjtJQUNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQztRQUFFTCxhQUFhO0tBQUUsQ0FBQyxDQUFDO0lBRS9CTSxRQUFRLENBQUNDLE1BQU0sR0FBR1AsYUFBYSxDQUFDO0NBQ2pDLENBQUM7QUFFSyxNQUFNUSxTQUFTLEdBQUcsU0FBVUQsTUFBTSxFQUFFZCxJQUFJLEVBQUU7SUFDL0MsSUFBSWdCLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxLQUFLLENBQ3hCLElBQUlDLE1BQU0sQ0FDUixVQUFVLEdBQ1JsQixJQUFJLENBQUNtQixPQUFPLGlDQUFpQyxNQUFNLENBQUMsR0FDcEQsVUFBVSxDQUNiLENBQ0Y7SUFDRCxPQUFPSCxPQUFPLEdBQUdJLGtCQUFrQixDQUFDSixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0ssU0FBUyxDQUFDO0NBQzdELENBQUM7QUFFSyxNQUFNQyxZQUFZLEdBQUcsU0FBVXRCLElBQUksRUFBRTtJQUMxQ0QsU0FBUyxDQUFDQyxJQUFJLEVBQUUsRUFBRSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDZCxDQUFDLENBQUM7Q0FDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaGVscGVycy9jb29raWVNYW5hZ2UudHM/NmQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0Q29va2llID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvcHRpb25zID0ge30pIHtcbiAgb3B0aW9ucyA9IHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICAuLi5vcHRpb25zLFxuICB9O1xuXG4gIGlmIChvcHRpb25zLmV4cGlyZXMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgb3B0aW9ucy5leHBpcmVzID0gb3B0aW9ucy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gIH1cblxuICBsZXQgdXBkYXRlZENvb2tpZSA9XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gIGZvciAobGV0IG9wdGlvbktleSBpbiBvcHRpb25zKSB7XG4gICAgdXBkYXRlZENvb2tpZSArPSBcIjsgXCIgKyBvcHRpb25LZXk7XG4gICAgbGV0IG9wdGlvblZhbHVlID0gb3B0aW9uc1tvcHRpb25LZXldO1xuICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyh7IHVwZGF0ZWRDb29raWUgfSk7XG5cbiAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBmdW5jdGlvbiAoY29va2llLCBuYW1lKSB7XG4gIGxldCBtYXRjaGVzID0gY29va2llLm1hdGNoKFxuICAgIG5ldyBSZWdFeHAoXG4gICAgICBcIig/Ol58OyApXCIgK1xuICAgICAgICBuYW1lLnJlcGxhY2UoLyhbXFwuJD8qfHt9XFwoXFwpXFxbXFxdXFxcXFxcL1xcK15dKS9nLCBcIlxcXFwkMVwiKSArXG4gICAgICAgIFwiPShbXjtdKilcIlxuICAgIClcbiAgKTtcbiAgcmV0dXJuIG1hdGNoZXMgPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hlc1sxXSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29va2llID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgc2V0Q29va2llKG5hbWUsIFwiXCIsIHtcbiAgICBcIm1heC1hZ2VcIjogLTEsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJzZXRDb29raWUiLCJuYW1lIiwidmFsdWUiLCJvcHRpb25zIiwicGF0aCIsImV4cGlyZXMiLCJEYXRlIiwidG9VVENTdHJpbmciLCJ1cGRhdGVkQ29va2llIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3B0aW9uS2V5Iiwib3B0aW9uVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJnZXRDb29raWUiLCJtYXRjaGVzIiwibWF0Y2giLCJSZWdFeHAiLCJyZXBsYWNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidW5kZWZpbmVkIiwiZGVsZXRlQ29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/cookieManage.ts\n");

/***/ }),

/***/ "./hooks/auth.hook.ts":
/*!****************************!*\
  !*** ./hooks/auth.hook.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_cookieManage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/cookieManage */ \"./helpers/cookieManage.ts\");\n\n\nconst storageName = \"userData\";\nconst useAuth = ()=>{\n    const { 0: currentUser , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);\n    const { 0: ready , 1: setReady  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const updateAppState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((user)=>{\n        setUser(user);\n    }, []);\n    const updateLocalStorage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((obj)=>{\n        localStorage.setItem(storageName, JSON.stringify(obj));\n    }, []);\n    const login = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((user)=>{\n        updateAppState(user);\n        updateLocalStorage(user);\n    }, [\n        updateAppState,\n        updateLocalStorage\n    ]);\n    const logout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        console.log(\"logout fn\");\n        (0,_helpers_cookieManage__WEBPACK_IMPORTED_MODULE_1__.deleteCookie)(\"auth\");\n        updateAppState(null);\n        localStorage.removeItem(storageName);\n    }, [\n        _helpers_cookieManage__WEBPACK_IMPORTED_MODULE_1__.deleteCookie,\n        updateAppState,\n        _helpers_cookieManage__WEBPACK_IMPORTED_MODULE_1__.getCookie\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const data = JSON.parse(localStorage.getItem(storageName));\n        if (data && data.role) {\n            updateAppState(data);\n        }\n        setReady(true);\n    }, [\n        updateAppState\n    ]);\n    return {\n        login,\n        logout,\n        currentUser,\n        ready\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9hdXRoLmhvb2sudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5RDtBQUVTO0FBQ2xFLE1BQU1LLFdBQVcsR0FBRyxVQUFVO0FBRXZCLE1BQU1DLE9BQU8sR0FBRyxJQUFNO0lBQzNCLE1BQU0sRUFOUixHQU1TQyxXQUFXLEdBTnBCLEdBTXNCQyxPQUFPLE1BQUlQLCtDQUFRLENBQXVCUSxTQUFTLENBQUM7SUFDeEUsTUFBTSxFQVBSLEdBT1NDLEtBQUssR0FQZCxHQU9nQkMsUUFBUSxNQUFJViwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUV6QyxNQUFNVyxjQUFjLEdBQUdaLGtEQUFXLENBQUMsQ0FBQ2EsSUFBSSxHQUFLO1FBQzNDTCxPQUFPLENBQUNLLElBQUksQ0FBQyxDQUFDO0tBQ2YsRUFBRSxFQUFFLENBQUM7SUFFTixNQUFNQyxrQkFBa0IsR0FBR2Qsa0RBQVcsQ0FBQyxDQUFDZSxHQUFhLEdBQUs7UUFDeERDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDWixXQUFXLEVBQUVhLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3hELEVBQUUsRUFBRSxDQUFDO0lBRU4sTUFBTUssS0FBSyxHQUFHcEIsa0RBQVcsQ0FDdkIsQ0FBQ2EsSUFBYyxHQUFLO1FBQ2xCRCxjQUFjLENBQUNDLElBQUksQ0FBQyxDQUFDO1FBQ3JCQyxrQkFBa0IsQ0FBQ0QsSUFBSSxDQUFDLENBQUM7S0FDMUIsRUFDRDtRQUFDRCxjQUFjO1FBQUVFLGtCQUFrQjtLQUFDLENBQ3JDO0lBRUQsTUFBTU8sTUFBTSxHQUFHckIsa0RBQVcsQ0FBQyxJQUFNO1FBQy9Cc0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekJuQixtRUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCUSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckJJLFlBQVksQ0FBQ1EsVUFBVSxDQUFDbkIsV0FBVyxDQUFDLENBQUM7S0FDdEMsRUFBRTtRQUFDRCwrREFBWTtRQUFFUSxjQUFjO1FBQUVULDREQUFTO0tBQUMsQ0FBQztJQUU3Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTXVCLElBQUksR0FBR1AsSUFBSSxDQUFDUSxLQUFLLENBQUNWLFlBQVksQ0FBQ1csT0FBTyxDQUFDdEIsV0FBVyxDQUFDLENBQUM7UUFFMUQsSUFBSW9CLElBQUksSUFBSUEsSUFBSSxDQUFDRyxJQUFJLEVBQUU7WUFDckJoQixjQUFjLENBQUNhLElBQUksQ0FBQyxDQUFDO1NBQ3RCO1FBQ0RkLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNoQixFQUFFO1FBQUNDLGNBQWM7S0FBQyxDQUFDLENBQUM7SUFFckIsT0FBTztRQUFFUSxLQUFLO1FBQUVDLE1BQU07UUFBRWQsV0FBVztRQUFFRyxLQUFLO0tBQUUsQ0FBQztDQUM5QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9va3MvYXV0aC5ob29rLnRzPzhmZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgeyBnZXRDb29raWUsIGRlbGV0ZUNvb2tpZSB9IGZyb20gXCIuLi9oZWxwZXJzL2Nvb2tpZU1hbmFnZVwiO1xuY29uc3Qgc3RvcmFnZU5hbWUgPSBcInVzZXJEYXRhXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFVzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtyZWFkeSwgc2V0UmVhZHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHVwZGF0ZUFwcFN0YXRlID0gdXNlQ2FsbGJhY2soKHVzZXIpID0+IHtcbiAgICBzZXRVc2VyKHVzZXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gdXNlQ2FsbGJhY2soKG9iajogVXNlclR5cGUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dpbiA9IHVzZUNhbGxiYWNrKFxuICAgICh1c2VyOiBVc2VyVHlwZSkgPT4ge1xuICAgICAgdXBkYXRlQXBwU3RhdGUodXNlcik7XG4gICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodXNlcik7XG4gICAgfSxcbiAgICBbdXBkYXRlQXBwU3RhdGUsIHVwZGF0ZUxvY2FsU3RvcmFnZV1cbiAgKTtcblxuICBjb25zdCBsb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJsb2dvdXQgZm5cIik7XG5cbiAgICBkZWxldGVDb29raWUoXCJhdXRoXCIpO1xuICAgIHVwZGF0ZUFwcFN0YXRlKG51bGwpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VOYW1lKTtcbiAgfSwgW2RlbGV0ZUNvb2tpZSwgdXBkYXRlQXBwU3RhdGUsIGdldENvb2tpZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZU5hbWUpKSBhcyBVc2VyVHlwZTtcblxuICAgIGlmIChkYXRhICYmIGRhdGEucm9sZSkge1xuICAgICAgdXBkYXRlQXBwU3RhdGUoZGF0YSk7XG4gICAgfVxuICAgIHNldFJlYWR5KHRydWUpO1xuICB9LCBbdXBkYXRlQXBwU3RhdGVdKTtcblxuICByZXR1cm4geyBsb2dpbiwgbG9nb3V0LCBjdXJyZW50VXNlciwgcmVhZHkgfTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldENvb2tpZSIsImRlbGV0ZUNvb2tpZSIsInN0b3JhZ2VOYW1lIiwidXNlQXV0aCIsImN1cnJlbnRVc2VyIiwic2V0VXNlciIsInVuZGVmaW5lZCIsInJlYWR5Iiwic2V0UmVhZHkiLCJ1cGRhdGVBcHBTdGF0ZSIsInVzZXIiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJvYmoiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2luIiwibG9nb3V0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUl0ZW0iLCJkYXRhIiwicGFyc2UiLCJnZXRJdGVtIiwicm9sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/auth.hook.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_variable_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.variable.min.css */ \"./node_modules/antd/dist/antd.variable.min.css\");\n/* harmony import */ var antd_dist_antd_variable_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_variable_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AuthContextProvider_AuthContextProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AuthContextProvider/AuthContextProvider */ \"./components/AuthContextProvider/AuthContextProvider.tsx\");\n\n\n\n\n\n\nantd__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider.config({\n    theme: {\n        primaryColor: \"#7d58d1\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Kastamonu Kaizen\"\n                }, void 0, false, {\n                    fileName: \"/Users/soledatore/git/kazien-next/pages/_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soledatore/git/kazien-next/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthContextProvider_AuthContextProvider__WEBPACK_IMPORTED_MODULE_5__.AuthContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.ConfigProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/soledatore/git/kazien-next/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/soledatore/git/kazien-next/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soledatore/git/kazien-next/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QztBQUNmO0FBQ0c7QUFDUztBQUNzRDtBQUU1RkMsdURBQXFCLENBQUM7SUFDcEJHLEtBQUssRUFBRTtRQUFFQyxZQUFZLEVBQUUsU0FBUztLQUFFO0NBQ25DLENBQUMsQ0FBQztBQUVILFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFOzswQkFDRSw4REFBQ1Isa0RBQUk7MEJBQ0gsNEVBQUNTLE9BQUs7OEJBQUMsa0JBQWdCOzs7Ozt3QkFBUTs7Ozs7b0JBQzFCOzBCQUNQLDhEQUFDUCxvR0FBbUI7MEJBQ2xCLDRFQUFDRCxnREFBYzs4QkFDYiw0RUFBQ00sU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTs7Ozs7d0JBQ2I7Ozs7O29CQUNHOztvQkFDckIsQ0FDSDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQudmFyaWFibGUubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0F1dGhDb250ZXh0UHJvdmlkZXIvQXV0aENvbnRleHRQcm92aWRlclwiO1xuXG5Db25maWdQcm92aWRlci5jb25maWcoe1xuICB0aGVtZTogeyBwcmltYXJ5Q29sb3I6IFwiIzdkNThkMVwiIH0sXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+S2FzdGFtb251IEthaXplbjwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QXV0aENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPENvbmZpZ1Byb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Db25maWdQcm92aWRlcj5cbiAgICAgIDwvQXV0aENvbnRleHRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNvbmZpZ1Byb3ZpZGVyIiwiQXV0aENvbnRleHRQcm92aWRlciIsImNvbmZpZyIsInRoZW1lIiwicHJpbWFyeUNvbG9yIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/antd/dist/antd.variable.min.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/dist/antd.variable.min.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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