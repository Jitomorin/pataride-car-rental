"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register-car",{

/***/ "./utils/firebase/storage.tsx":
/*!************************************!*\
  !*** ./utils/firebase/storage.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uploadRentalImage: function() { return /* binding */ uploadRentalImage; }\n/* harmony export */ });\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firestore */ \"./utils/firebase/firestore.tsx\");\n\n\n\nconst uploadRentalImage = async (file, rentalUid, param)=>{\n    let { carName, carPrice, carModel, carYear, carMake, carSeats, carDescription, carFuel } = param;\n    const storageUID = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    // ... existing code ...\n    if (file) {\n        const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n        const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.ref)(storage, \"rentals/\".concat(rentalUid));\n        const uploadTask = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.uploadBytesResumable)(storageRef, file);\n        uploadTask.on(\"state_changed\", (snapshot)=>{\n            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;\n            console.log(\"Upload is \" + progress + \"% done\");\n        }, (error)=>{\n            console.log(error);\n        }, ()=>{\n            // Handle successful uploads on complete\n            // For instance, get the download URL: https://firebasestorage.googleapis.com/...\n            (0,firebase_storage__WEBPACK_IMPORTED_MODULE_0__.getDownloadURL)(uploadTask.snapshot.ref).then(async (downloadURL)=>{\n                console.log(\"File available at\", downloadURL);\n                await (0,_firestore__WEBPACK_IMPORTED_MODULE_1__.addRental)(rentalUid, carName, carPrice, downloadURL, carModel, carYear.toString(), carMake, carSeats.toString(), carDescription, carFuel);\n            });\n        });\n        return true;\n    }\n    return false;\n// ... existing code ...\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZS9zdG9yYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSzBCO0FBRVU7QUFDSTtBQUVqQyxNQUFNTyxvQkFBb0IsT0FDL0JDLE1BQ0FDO1FBQ0EsRUFDRUMsT0FBTyxFQUNQQyxRQUFRLEVBQ1JDLFFBQVEsRUFDUkMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BDLFFBQVEsRUFDUkMsY0FBYyxFQUNkQyxPQUFPLEVBQ0g7SUFFTixNQUFNQyxhQUFhYixnREFBTUE7SUFDekIsd0JBQXdCO0lBRXhCLElBQUlHLE1BQU07UUFDUixNQUFNVyxVQUFVbEIsNERBQVVBO1FBQzFCLE1BQU1tQixhQUFhbEIscURBQUdBLENBQUNpQixTQUFTLFdBQXFCLE9BQVZWO1FBQzNDLE1BQU1ZLGFBQWFsQixzRUFBb0JBLENBQUNpQixZQUFZWjtRQUNwRGEsV0FBV0MsRUFBRSxDQUNYLGlCQUNBLENBQUNDO1lBQ0MsTUFBTUMsV0FDSixTQUFVQyxnQkFBZ0IsR0FBR0YsU0FBU0csVUFBVSxHQUFJO1lBQ3REQyxRQUFRQyxHQUFHLENBQUMsZUFBZUosV0FBVztRQUN4QyxHQUNBLENBQUNLO1lBQ0NGLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDZCxHQUNBO1lBQ0Usd0NBQXdDO1lBQ3hDLGlGQUFpRjtZQUNqRjdCLGdFQUFjQSxDQUFDcUIsV0FBV0UsUUFBUSxDQUFDckIsR0FBRyxFQUFFNEIsSUFBSSxDQUFDLE9BQU9DO2dCQUNsREosUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkc7Z0JBQ2pDLE1BQU16QixxREFBU0EsQ0FDYkcsV0FDQUMsU0FDQUMsVUFDQW9CLGFBQ0FuQixVQUNBQyxRQUFRbUIsUUFBUSxJQUNoQmxCLFNBQ0FDLFNBQVNpQixRQUFRLElBQ2pCaEIsZ0JBQ0FDO1lBRUo7UUFDRjtRQUVGLE9BQU87SUFDVDtJQUNBLE9BQU87QUFFUCx3QkFBd0I7QUFDMUIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9maXJlYmFzZS9zdG9yYWdlLnRzeD83NTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldERvd25sb2FkVVJMLFxuICBnZXRTdG9yYWdlLFxuICByZWYsXG4gIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLFxufSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGFkZFJlbnRhbCB9IGZyb20gXCIuL2ZpcmVzdG9yZVwiO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkUmVudGFsSW1hZ2UgPSBhc3luYyAoXG4gIGZpbGU6IGFueSxcbiAgcmVudGFsVWlkOiBhbnksXG4gIHtcbiAgICBjYXJOYW1lLFxuICAgIGNhclByaWNlLFxuICAgIGNhck1vZGVsLFxuICAgIGNhclllYXIsXG4gICAgY2FyTWFrZSxcbiAgICBjYXJTZWF0cyxcbiAgICBjYXJEZXNjcmlwdGlvbixcbiAgICBjYXJGdWVsLFxuICB9OiBhbnlcbikgPT4ge1xuICBjb25zdCBzdG9yYWdlVUlEID0gdXVpZHY0KCk7XG4gIC8vIC4uLiBleGlzdGluZyBjb2RlIC4uLlxuXG4gIGlmIChmaWxlKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGByZW50YWxzLyR7cmVudGFsVWlkfWApO1xuICAgIGNvbnN0IHVwbG9hZFRhc2sgPSB1cGxvYWRCeXRlc1Jlc3VtYWJsZShzdG9yYWdlUmVmLCBmaWxlKTtcbiAgICB1cGxvYWRUYXNrLm9uKFxuICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXG4gICAgICAoc25hcHNob3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPVxuICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXBsb2FkIGlzIFwiICsgcHJvZ3Jlc3MgKyBcIiUgZG9uZVwiKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3NmdWwgdXBsb2FkcyBvbiBjb21wbGV0ZVxuICAgICAgICAvLyBGb3IgaW5zdGFuY2UsIGdldCB0aGUgZG93bmxvYWQgVVJMOiBodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS8uLi5cbiAgICAgICAgZ2V0RG93bmxvYWRVUkwodXBsb2FkVGFzay5zbmFwc2hvdC5yZWYpLnRoZW4oYXN5bmMgKGRvd25sb2FkVVJMKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIGF2YWlsYWJsZSBhdFwiLCBkb3dubG9hZFVSTCk7XG4gICAgICAgICAgYXdhaXQgYWRkUmVudGFsKFxuICAgICAgICAgICAgcmVudGFsVWlkLFxuICAgICAgICAgICAgY2FyTmFtZSxcbiAgICAgICAgICAgIGNhclByaWNlLFxuICAgICAgICAgICAgZG93bmxvYWRVUkwsXG4gICAgICAgICAgICBjYXJNb2RlbCxcbiAgICAgICAgICAgIGNhclllYXIudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGNhck1ha2UsXG4gICAgICAgICAgICBjYXJTZWF0cy50b1N0cmluZygpLFxuICAgICAgICAgICAgY2FyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBjYXJGdWVsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gLi4uIGV4aXN0aW5nIGNvZGUgLi4uXG59O1xuIl0sIm5hbWVzIjpbImdldERvd25sb2FkVVJMIiwiZ2V0U3RvcmFnZSIsInJlZiIsInVwbG9hZEJ5dGVzUmVzdW1hYmxlIiwidjQiLCJ1dWlkdjQiLCJhZGRSZW50YWwiLCJ1cGxvYWRSZW50YWxJbWFnZSIsImZpbGUiLCJyZW50YWxVaWQiLCJjYXJOYW1lIiwiY2FyUHJpY2UiLCJjYXJNb2RlbCIsImNhclllYXIiLCJjYXJNYWtlIiwiY2FyU2VhdHMiLCJjYXJEZXNjcmlwdGlvbiIsImNhckZ1ZWwiLCJzdG9yYWdlVUlEIiwic3RvcmFnZSIsInN0b3JhZ2VSZWYiLCJ1cGxvYWRUYXNrIiwib24iLCJzbmFwc2hvdCIsInByb2dyZXNzIiwiYnl0ZXNUcmFuc2ZlcnJlZCIsInRvdGFsQnl0ZXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ0aGVuIiwiZG93bmxvYWRVUkwiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/firebase/storage.tsx\n"));

/***/ })

});