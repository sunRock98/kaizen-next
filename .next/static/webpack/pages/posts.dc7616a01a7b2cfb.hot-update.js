"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts",{

/***/ "./components/FileUploader/FileUploader.tsx":
/*!**************************************************!*\
  !*** ./components/FileUploader/FileUploader.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileUploader\": function() { return /* binding */ FileUploader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar FileUploader = function(files) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(files), fileList = ref[0], setFileList = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Upload.Dragger, {\n        defaultFileList: fileList,\n        name: \"files\",\n        onChange: function(info) {\n            console.log(\"onChange\", info.file);\n        },\n        customRequest: function(uploadRequest) {\n            var file = uploadRequest.file;\n            var fr = new FileReader();\n            fr.readAsArrayBuffer(file);\n            fr.onload = function(f) {\n                var url = \"https://script.google.com/macros/s/AKfycbwkLg8q50D8PSL2qochasdTU4B04uuWdOlEGhkJb9J-1mQXjDKlE1C8qt4jNTkO4_A/exec\"; // <--- Please set the URL of Web Apps.\n                var qs = new URLSearchParams({\n                    filename: file === null || file === void 0 ? void 0 : file.name,\n                    mimeType: file === null || file === void 0 ? void 0 : file.type\n                });\n                fetch(\"\".concat(url, \"?\").concat(qs), {\n                    method: \"POST\",\n                    body: JSON.stringify(_toConsumableArray(new Int8Array(f.target.result)))\n                }).then(function(res) {\n                    console.log({\n                        res: res\n                    });\n                    return res.json();\n                }).then(function(e) {\n                    return console.log(e);\n                }) // <--- You can retrieve the returned value here.\n                .catch(function(err) {\n                    return console.log(err);\n                });\n            };\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"ant-upload-drag-icon\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.InboxOutlined, {}, void 0, false, {\n                    fileName: \"/Users/soledatore/git/kazien-next/components/FileUploader/FileUploader.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/soledatore/git/kazien-next/components/FileUploader/FileUploader.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"ant-upload-hint\",\n                children: \"\\u0421\\u044E\\u0434\\u0430 \\u0432\\u044B \\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u0432\\u043B\\u043E\\u0436\\u0438\\u0442\\u044C \\u0438\\u043B\\u0438 \\u043F\\u0435\\u0440\\u0435\\u0442\\u0430\\u0449\\u0438\\u0442\\u044C \\u0434\\u043B\\u044F \\u043D\\u0430\\u0433\\u043B\\u044F\\u0434\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0444\\u043E\\u0442\\u043E, \\u0433\\u0440\\u0430\\u0444\\u0438\\u043A \\u0438\\u043B\\u0438 \\u0442\\u0430\\u0431\\u043B\\u0438\\u0446\\u0443\"\n            }, void 0, false, {\n                fileName: \"/Users/soledatore/git/kazien-next/components/FileUploader/FileUploader.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soledatore/git/kazien-next/components/FileUploader/FileUploader.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(FileUploader, \"goY3uBa8hcQG3311Xky6dcIyazk=\");\n_c = FileUploader;\nFileUploader.displayName = \"FileUploader\";\nvar _c;\n$RefreshReg$(_c, \"FileUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbGVVcGxvYWRlci9GaWxlVXBsb2FkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ3BCO0FBQ1U7O0FBTWpDLElBQU1JLFlBQVksR0FBRyxTQUFDQyxLQUFZLEVBQUs7O0lBQzVDLElBQWdDRixHQUFrQyxHQUFsQ0EsK0NBQVEsQ0FBb0JFLEtBQUssQ0FBQyxFQVRwRSxRQVNpQixHQUFpQkYsR0FBa0MsR0FBbkQsRUFUakIsV0FTOEIsR0FBSUEsR0FBa0MsR0FBdEM7SUFFNUIscUJBQ0UsOERBQUNGLGdEQUFjO1FBQ2JRLGVBQWUsRUFBRUgsUUFBUTtRQUN6QkksSUFBSSxFQUFDLE9BQU87UUFDWkMsUUFBUSxFQUFFLFNBQUNDLElBQUksRUFBSztZQUNsQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFRixJQUFJLENBQUNHLElBQUksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0RDLGFBQWEsRUFBRSxTQUFDQyxhQUFhLEVBQUs7WUFDaEMsSUFBTUYsSUFBSSxHQUFHRSxhQUFhLENBQUNGLElBQUk7WUFDL0IsSUFBTUcsRUFBRSxHQUFHLElBQUlDLFVBQVUsRUFBRTtZQUMzQkQsRUFBRSxDQUFDRSxpQkFBaUIsQ0FBQ0wsSUFBSSxDQUFDLENBQUM7WUFDM0JHLEVBQUUsQ0FBQ0csTUFBTSxHQUFHLFNBQUNDLENBQUMsRUFBSztnQkFDakIsSUFBTUMsR0FBRyxHQUFHQyxpSEFBb0MsRUFBRSx1Q0FBdUM7Z0JBRXpGLElBQU1HLEVBQUUsR0FBRyxJQUFJQyxlQUFlLENBQUM7b0JBQzdCQyxRQUFRLEVBQUVkLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFTCxJQUFJO29CQUNwQm9CLFFBQVEsRUFBRWYsSUFBSSxhQUFKQSxJQUFJLFdBQU0sR0FBVkEsS0FBQUEsQ0FBVSxHQUFWQSxJQUFJLENBQUVnQixJQUFJO2lCQUNyQixDQUFDO2dCQUNGQyxLQUFLLENBQUMsRUFBQyxDQUFTTCxNQUFFLENBQVRKLEdBQUcsRUFBQyxHQUFDLENBQUssUUFBSEksRUFBRSxDQUFFLEVBQUU7b0JBQ3BCTSxNQUFNLEVBQUUsTUFBTTtvQkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBRSxtQkFBRyxJQUFJQyxTQUFTLENBQUNmLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLENBQTlCLENBQWdDO2lCQUMxRCxDQUFDLENBQ0NDLElBQUksQ0FBQyxTQUFDQyxHQUFHLEVBQUs7b0JBQ2I1QixPQUFPLENBQUNDLEdBQUcsQ0FBQzt3QkFBRTJCLEdBQUcsRUFBSEEsR0FBRztxQkFBRSxDQUFDLENBQUM7b0JBQ3JCLE9BQU9BLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7aUJBQ25CLENBQUMsQ0FDREYsSUFBSSxDQUFDLFNBQUNHLENBQUM7MkJBQUs5QixPQUFPLENBQUNDLEdBQUcsQ0FBQzZCLENBQUMsQ0FBQztpQkFBQSxDQUFDLENBQUMsaURBQWlEO2lCQUM3RUMsS0FBSyxDQUFDLFNBQUNDLEdBQUc7MkJBQUtoQyxPQUFPLENBQUNDLEdBQUcsQ0FBQytCLEdBQUcsQ0FBQztpQkFBQSxDQUFDLENBQUM7YUFDckMsQ0FBQztTQUNIOzswQkFFRCw4REFBQ0MsR0FBQztnQkFBQ0MsU0FBUyxFQUFDLHNCQUFzQjswQkFDakMsNEVBQUMvQyw0REFBYTs7Ozt5QkFBRzs7Ozs7cUJBQ2Y7MEJBQ0osOERBQUM4QyxHQUFDO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzBCQUFDLDBaQUcvQjs7Ozs7cUJBQUk7Ozs7OzthQUNXLENBQ2pCO0NBQ0gsQ0FBQztHQTNDVzNDLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQTZDekJBLFlBQVksQ0FBQzRDLFdBQVcsR0FBRyxjQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWxlVXBsb2FkZXIvRmlsZVVwbG9hZGVyLnRzeD81ZWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluYm94T3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IFVwbG9hZCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgZmlsZXM6IHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEZpbGVVcGxvYWRlciA9IChmaWxlczogUHJvcHMpID0+IHtcbiAgY29uc3QgW2ZpbGVMaXN0LCBzZXRGaWxlTGlzdF0gPSB1c2VTdGF0ZTxVcGxvYWRGaWxlPGFueT5bXT4oZmlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFVwbG9hZC5EcmFnZ2VyXG4gICAgICBkZWZhdWx0RmlsZUxpc3Q9e2ZpbGVMaXN0fVxuICAgICAgbmFtZT1cImZpbGVzXCJcbiAgICAgIG9uQ2hhbmdlPXsoaW5mbykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2hhbmdlXCIsIGluZm8uZmlsZSk7XG4gICAgICB9fVxuICAgICAgY3VzdG9tUmVxdWVzdD17KHVwbG9hZFJlcXVlc3QpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IHVwbG9hZFJlcXVlc3QuZmlsZSBhcyBCbG9iO1xuICAgICAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGZyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICBmci5vbmxvYWQgPSAoZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9EUklWRTsgLy8gPC0tLSBQbGVhc2Ugc2V0IHRoZSBVUkwgb2YgV2ViIEFwcHMuXG5cbiAgICAgICAgICBjb25zdCBxcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGU/Lm5hbWUsXG4gICAgICAgICAgICBtaW1lVHlwZTogZmlsZT8udHlwZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmZXRjaChgJHt1cmx9PyR7cXN9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFsuLi5uZXcgSW50OEFycmF5KGYudGFyZ2V0LnJlc3VsdCldKSxcbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IHJlcyB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGUpID0+IGNvbnNvbGUubG9nKGUpKSAvLyA8LS0tIFlvdSBjYW4gcmV0cmlldmUgdGhlIHJldHVybmVkIHZhbHVlIGhlcmUuXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgICAgIH07XG4gICAgICB9fVxuICAgID5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImFudC11cGxvYWQtZHJhZy1pY29uXCI+XG4gICAgICAgIDxJbmJveE91dGxpbmVkIC8+XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9XCJhbnQtdXBsb2FkLWhpbnRcIj5cbiAgICAgICAg0KHRjtC00LAg0LLRiyDQvNC+0LbQtdGC0LUg0LLQu9C+0LbQuNGC0Ywg0LjQu9C4INC/0LXRgNC10YLQsNGJ0LjRgtGMINC00LvRjyDQvdCw0LPQu9GP0LTQvdC+0YHRgtC4INGE0L7RgtC+LCDQs9GA0LDRhNC40Log0LjQu9C4XG4gICAgICAgINGC0LDQsdC70LjRhtGDXG4gICAgICA8L3A+XG4gICAgPC9VcGxvYWQuRHJhZ2dlcj5cbiAgKTtcbn07XG5cbkZpbGVVcGxvYWRlci5kaXNwbGF5TmFtZSA9IFwiRmlsZVVwbG9hZGVyXCI7XG4iXSwibmFtZXMiOlsiSW5ib3hPdXRsaW5lZCIsIlVwbG9hZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJGaWxlVXBsb2FkZXIiLCJmaWxlcyIsImZpbGVMaXN0Iiwic2V0RmlsZUxpc3QiLCJEcmFnZ2VyIiwiZGVmYXVsdEZpbGVMaXN0IiwibmFtZSIsIm9uQ2hhbmdlIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiY3VzdG9tUmVxdWVzdCIsInVwbG9hZFJlcXVlc3QiLCJmciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNBcnJheUJ1ZmZlciIsIm9ubG9hZCIsImYiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0RSSVZFIiwicXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmaWxlbmFtZSIsIm1pbWVUeXBlIiwidHlwZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbnQ4QXJyYXkiLCJ0YXJnZXQiLCJyZXN1bHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImUiLCJjYXRjaCIsImVyciIsInAiLCJjbGFzc05hbWUiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FileUploader/FileUploader.tsx\n");

/***/ })

});