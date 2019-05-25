/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ContactForm.ts":
/*!****************************!*\
  !*** ./src/ContactForm.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/// <reference path =\"../node_modules/@types/jquery/index.d.ts\"/> \r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//var WebApiClient = require('../src/new_WebApiClient.ts');\r\nvar ContactForm = /** @class */ (function () {\r\n    function ContactForm() {\r\n    }\r\n    ContactForm.onLoad = function (context) {\r\n        alert('onloadcontactform');\r\n    };\r\n    ContactForm.hasSomeProperty = function (callback) {\r\n        /*\r\n        WebApiClient.retrieveMultiple(\"contacts?$select=name,revenue\", function (data) {\r\n            var results = data.value;\r\n\r\n            callback(results.length > 0);\r\n\r\n        });\r\n\r\n        */\r\n        alert('hasSomeProperty');\r\n        callback(true);\r\n    };\r\n    ContactForm.hideTabs = function (callback) {\r\n        var contactid = Xrm.Page.data.entity.getId();\r\n        ContactForm.hasSomeProperty(function (result) {\r\n            Xrm.Page.ui.tabs.get('OtherDetails').setVisible(result);\r\n            callback();\r\n        });\r\n    };\r\n    return ContactForm;\r\n}());\r\nexports.ContactForm = ContactForm;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFjdEZvcm0udHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL0NvbnRhY3RGb3JtLnRzPzM5NWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aCA9XCIuLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIvPiBcclxuXHJcbi8vdmFyIFdlYkFwaUNsaWVudCA9IHJlcXVpcmUoJy4uL3NyYy9uZXdfV2ViQXBpQ2xpZW50LnRzJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGFjdEZvcm0ge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb25Mb2FkKGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIGFsZXJ0KCdvbmxvYWRjb250YWN0Zm9ybScpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBoYXNTb21lUHJvcGVydHkoY2FsbGJhY2s6IChyZXN1bHQ6IGJvb2xlYW4pID0+IHZvaWQpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgIFdlYkFwaUNsaWVudC5yZXRyaWV2ZU11bHRpcGxlKFwiY29udGFjdHM/JHNlbGVjdD1uYW1lLHJldmVudWVcIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdHMgPSBkYXRhLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0cy5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICovXHJcblxyXG4gICAgICAgYWxlcnQoJ2hhc1NvbWVQcm9wZXJ0eScpO1xyXG4gICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGhpZGVUYWJzKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhY3RpZCA9IFhybS5QYWdlLmRhdGEuZW50aXR5LmdldElkKCk7XHJcblxyXG4gICAgICAgIENvbnRhY3RGb3JtLmhhc1NvbWVQcm9wZXJ0eShmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIFhybS5QYWdlLnVpLnRhYnMuZ2V0KCdPdGhlckRldGFpbHMnKS5zZXRWaXNpYmxlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxufSJdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBO0FBRUE7QUFBQTtBQTRCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBNUJBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ContactForm.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ContactForm_1 = __webpack_require__(/*! ./ContactForm */ \"./src/ContactForm.ts\");\r\nwindow.DynamicsValue = {};\r\nwindow.DynamicsValue.ContactForm = ContactForm_1.ContactForm;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFjdEZvcm0gfSBmcm9tICcuL0NvbnRhY3RGb3JtJztcclxuXHJcbig8YW55PndpbmRvdykuRHluYW1pY3NWYWx1ZSA9IHt9O1xyXG4oPGFueT53aW5kb3cpLkR5bmFtaWNzVmFsdWUuQ29udGFjdEZvcm0gPSBDb250YWN0Rm9ybTtcclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFFQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });