(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Fontsampler = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.FontsamplerSkin = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	//CommonJS2
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	//AMD
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	//CommonJS
	else if(typeof exports === 'object')
		exports["Choices"] = factory();
	//Window
	else
		root["Choices"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/public/assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = exports.cloneObject = exports.existsInArray = exports.isIE11 = exports.fetchFromObject = exports.getWindowHeight = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.calcWidthOfInput = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.findAncestorByAttrName = exports.wrap = exports.isElement = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;

var _this = void 0;

var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

exports.getRandomNumber = getRandomNumber;

var generateChars = function generateChars(length) {
  var chars = '';

  for (var i = 0; i < length; i++) {
    var randomChar = getRandomNumber(0, 36);
    chars += randomChar.toString(36);
  }

  return chars;
};

exports.generateChars = generateChars;

var generateId = function generateId(element, prefix) {
  var id = element.id || element.name && "".concat(element.name, "-").concat(generateChars(2)) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = "".concat(prefix, "-").concat(id);
  return id;
};

exports.generateId = generateId;

var getType = function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

exports.getType = getType;

var isType = function isType(type, obj) {
  return obj !== undefined && obj !== null && getType(obj) === type;
};

exports.isType = isType;

var isElement = function isElement(element) {
  return element instanceof Element;
};

exports.isElement = isElement;

var wrap = function wrap(element) {
  var wrapper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.createElement('div');

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};

exports.wrap = wrap;

var findAncestorByAttrName = function findAncestorByAttrName(el, attr) {
  var target = el;

  while (target) {
    if (target.hasAttribute(attr)) {
      return target;
    }

    target = target.parentElement;
  }

  return null;
};

exports.findAncestorByAttrName = findAncestorByAttrName;

var getAdjacentEl = function getAdjacentEl(startEl, className) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (!startEl || !className) {
    return;
  }

  var parent = startEl.parentNode.parentNode;
  var children = Array.from(parent.querySelectorAll(className));
  var startPos = children.indexOf(startEl);
  var operatorDirection = direction > 0 ? 1 : -1;
  return children[startPos + operatorDirection];
};

exports.getAdjacentEl = getAdjacentEl;

var isScrolledIntoView = function isScrolledIntoView(el, parent) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (!el) {
    return;
  }

  var isVisible;

  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= el.offsetTop + el.offsetHeight;
  } else {
    // In view from top
    isVisible = el.offsetTop >= parent.scrollTop;
  }

  return isVisible;
};

exports.isScrolledIntoView = isScrolledIntoView;

var sanitise = function sanitise(value) {
  if (!isType('String', value)) {
    return value;
  }

  return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};

exports.sanitise = sanitise;

var strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    tmpEl.innerHTML = cleanedInput;
    var firldChild = tmpEl.children[0];

    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }

    return firldChild;
  };
}();
/**
 * Determines the width of a passed input based on its value and passes
 * it to the supplied callback function.
 */


exports.strToEl = strToEl;

var calcWidthOfInput = function calcWidthOfInput(input, callback) {
  var value = input.value || input.placeholder;
  var width = input.offsetWidth;

  if (value) {
    var testEl = strToEl("<span>".concat(sanitise(value), "</span>"));
    testEl.style.position = 'absolute';
    testEl.style.padding = '0';
    testEl.style.top = '-9999px';
    testEl.style.left = '-9999px';
    testEl.style.width = 'auto';
    testEl.style.whiteSpace = 'pre';

    if (document.body.contains(input) && window.getComputedStyle) {
      var inputStyle = window.getComputedStyle(input);

      if (inputStyle) {
        testEl.style.fontSize = inputStyle.fontSize;
        testEl.style.fontFamily = inputStyle.fontFamily;
        testEl.style.fontWeight = inputStyle.fontWeight;
        testEl.style.fontStyle = inputStyle.fontStyle;
        testEl.style.letterSpacing = inputStyle.letterSpacing;
        testEl.style.textTransform = inputStyle.textTransform;
        testEl.style.padding = inputStyle.padding;
      }
    }

    document.body.appendChild(testEl);
    requestAnimationFrame(function () {
      if (value && testEl.offsetWidth !== input.offsetWidth) {
        width = testEl.offsetWidth + 4;
      }

      document.body.removeChild(testEl);
      callback.call(_this, "".concat(width, "px"));
    });
  } else {
    callback.call(_this, "".concat(width, "px"));
  }
};

exports.calcWidthOfInput = calcWidthOfInput;

var sortByAlpha = function sortByAlpha(a, b) {
  var labelA = "".concat(a.label || a.value).toLowerCase();
  var labelB = "".concat(b.label || b.value).toLowerCase();

  if (labelA < labelB) {
    return -1;
  }

  if (labelA > labelB) {
    return 1;
  }

  return 0;
};

exports.sortByAlpha = sortByAlpha;

var sortByScore = function sortByScore(a, b) {
  return a.score - b.score;
};

exports.sortByScore = sortByScore;

var dispatchEvent = function dispatchEvent(element, type) {
  var customArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};

exports.dispatchEvent = dispatchEvent;

var getWindowHeight = function getWindowHeight() {
  var body = document.body;
  var html = document.documentElement;
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};

exports.getWindowHeight = getWindowHeight;

var fetchFromObject = function fetchFromObject(object, path) {
  var index = path.indexOf('.');

  if (index > -1) {
    return fetchFromObject(object[path.substring(0, index)], path.substr(index + 1));
  }

  return object[path];
};

exports.fetchFromObject = fetchFromObject;

var isIE11 = function isIE11() {
  return !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
};

exports.isIE11 = isIE11;

var existsInArray = function existsInArray(array, value) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  return array.some(function (item) {
    if (isType('String', value)) {
      return item[key] === value.trim();
    }

    return item[key] === value;
  });
};

exports.existsInArray = existsInArray;

var cloneObject = function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};

exports.cloneObject = cloneObject;

var diff = function diff(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};

exports.diff = diff;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCROLLING_SPEED = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;

var _utils = __webpack_require__(0);

var DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  hiddenState: 'is-hidden',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};
exports.DEFAULT_CLASSNAMES = DEFAULT_CLASSNAMES;
var DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  addItemFilterFn: null,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sortFn: _utils.sortByAlpha,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function addItemText(value) {
    return "Press Enter to add <b>\"".concat((0, _utils.sanitise)(value), "\"</b>");
  },
  maxItemText: function maxItemText(maxItemCount) {
    return "Only ".concat(maxItemCount, " values can be added");
  },
  itemComparer: function itemComparer(choice, item) {
    return choice === item;
  },
  fuseOptions: {
    includeScore: true
  },
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: DEFAULT_CLASSNAMES
};
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;
var EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice'
};
exports.EVENTS = EVENTS;
var ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL'
};
exports.ACTION_TYPES = ACTION_TYPES;
var KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
exports.KEY_CODES = KEY_CODES;
var SCROLLING_SPEED = 4;
exports.SCROLLING_SPEED = SCROLLING_SPEED;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3), __webpack_require__(14)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WrappedElement =
/*#__PURE__*/
function () {
  function WrappedElement(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;

    _classCallCheck(this, WrappedElement);

    Object.assign(this, {
      element: element,
      classNames: classNames
    });

    if (!(0, _utils.isElement)(element)) {
      throw new TypeError('Invalid element passed');
    }

    this.isDisabled = false;
  }

  _createClass(WrappedElement, [{
    key: "conceal",
    value: function conceal() {
      // Hide passed input
      this.element.classList.add(this.classNames.input);
      this.element.classList.add(this.classNames.hiddenState); // Remove element from tab index

      this.element.tabIndex = '-1'; // Backup original styles if any

      var origStyle = this.element.getAttribute('style');

      if (origStyle) {
        this.element.setAttribute('data-choice-orig-style', origStyle);
      }

      this.element.setAttribute('aria-hidden', 'true');
      this.element.setAttribute('data-choice', 'active');
    }
  }, {
    key: "reveal",
    value: function reveal() {
      // Reinstate passed element
      this.element.classList.remove(this.classNames.input);
      this.element.classList.remove(this.classNames.hiddenState);
      this.element.removeAttribute('tabindex'); // Recover original styles if any

      var origStyle = this.element.getAttribute('data-choice-orig-style');

      if (origStyle) {
        this.element.removeAttribute('data-choice-orig-style');
        this.element.setAttribute('style', origStyle);
      } else {
        this.element.removeAttribute('style');
      }

      this.element.removeAttribute('aria-hidden');
      this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know

      this.element.value = this.element.value;
    }
  }, {
    key: "enable",
    value: function enable() {
      this.element.removeAttribute('disabled');
      this.element.disabled = false;
      this.isDisabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.element.setAttribute('disabled', '');
      this.element.disabled = true;
      this.isDisabled = true;
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent(eventType, data) {
      (0, _utils.dispatchEvent)(this.element, eventType, data);
    }
  }, {
    key: "value",
    get: function get() {
      return this.element.value;
    }
  }]);

  return WrappedElement;
}();

exports.default = WrappedElement;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TEMPLATES = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(27));

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TEMPLATES = {
  containerOuter: function containerOuter(globalClasses, direction, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
    var tabIndex = isSelectOneElement ? 'tabindex="0"' : '';
    var role = isSelectElement ? 'role="listbox"' : '';
    var ariaAutoComplete = '';

    if (isSelectElement && searchEnabled) {
      role = 'role="combobox"';
      ariaAutoComplete = 'aria-autocomplete="list"';
    }

    return (0, _utils.strToEl)("\n      <div\n        class=\"".concat(globalClasses.containerOuter, "\"\n        data-type=\"").concat(passedElementType, "\"\n        ").concat(role, "\n        ").concat(tabIndex, "\n        ").concat(ariaAutoComplete, "\n        aria-haspopup=\"true\"\n        aria-expanded=\"false\"\n        dir=\"").concat(direction, "\"\n        >\n      </div>\n    "));
  },
  containerInner: function containerInner(globalClasses) {
    return (0, _utils.strToEl)("\n      <div class=\"".concat(globalClasses.containerInner, "\"></div>\n    "));
  },
  itemList: function itemList(globalClasses, isSelectOneElement) {
    var _classNames;

    var localClasses = (0, _classnames.default)(globalClasses.list, (_classNames = {}, _defineProperty(_classNames, globalClasses.listSingle, isSelectOneElement), _defineProperty(_classNames, globalClasses.listItems, !isSelectOneElement), _classNames));
    return (0, _utils.strToEl)("\n      <div class=\"".concat(localClasses, "\"></div>\n    "));
  },
  placeholder: function placeholder(globalClasses, value) {
    return (0, _utils.strToEl)("\n      <div class=\"".concat(globalClasses.placeholder, "\">\n        ").concat(value, "\n      </div>\n    "));
  },
  item: function item(globalClasses, data, removeItemButton) {
    var _classNames2;

    var ariaSelected = data.active ? 'aria-selected="true"' : '';
    var ariaDisabled = data.disabled ? 'aria-disabled="true"' : '';
    var localClasses = (0, _classnames.default)(globalClasses.item, (_classNames2 = {}, _defineProperty(_classNames2, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames2, globalClasses.itemSelectable, !data.highlighted), _defineProperty(_classNames2, globalClasses.placeholder, data.placeholder), _classNames2));

    if (removeItemButton) {
      var _classNames3;

      localClasses = (0, _classnames.default)(globalClasses.item, (_classNames3 = {}, _defineProperty(_classNames3, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames3, globalClasses.itemSelectable, !data.disabled), _defineProperty(_classNames3, globalClasses.placeholder, data.placeholder), _classNames3));
      return (0, _utils.strToEl)("\n        <div\n          class=\"".concat(localClasses, "\"\n          data-item\n          data-id=\"").concat(data.id, "\"\n          data-value=\"").concat(data.value, "\"\n          data-custom-properties='").concat(data.customProperties, "'\n          data-deletable\n          ").concat(ariaSelected, "\n          ").concat(ariaDisabled, "\n          >\n          ").concat(data.label, "<!--\n       --><button\n            type=\"button\"\n            class=\"").concat(globalClasses.button, "\"\n            data-button\n            aria-label=\"Remove item: '").concat(data.value, "'\"\n            >\n            Remove item\n          </button>\n        </div>\n      "));
    }

    return (0, _utils.strToEl)("\n      <div\n        class=\"".concat(localClasses, "\"\n        data-item\n        data-id=\"").concat(data.id, "\"\n        data-value=\"").concat(data.value, "\"\n        ").concat(ariaSelected, "\n        ").concat(ariaDisabled, "\n        >\n        ").concat(data.label, "\n      </div>\n    "));
  },
  choiceList: function choiceList(globalClasses, isSelectOneElement) {
    var ariaMultiSelectable = !isSelectOneElement ? 'aria-multiselectable="true"' : '';
    return (0, _utils.strToEl)("\n      <div\n        class=\"".concat(globalClasses.list, "\"\n        dir=\"ltr\"\n        role=\"listbox\"\n        ").concat(ariaMultiSelectable, "\n        >\n      </div>\n    "));
  },
  choiceGroup: function choiceGroup(globalClasses, data) {
    var ariaDisabled = data.disabled ? 'aria-disabled="true"' : '';
    var localClasses = (0, _classnames.default)(globalClasses.group, _defineProperty({}, globalClasses.itemDisabled, data.disabled));
    return (0, _utils.strToEl)("\n      <div\n        class=\"".concat(localClasses, "\"\n        data-group\n        data-id=\"").concat(data.id, "\"\n        data-value=\"").concat(data.value, "\"\n        role=\"group\"\n        ").concat(ariaDisabled, "\n        >\n        <div class=\"").concat(globalClasses.groupHeading, "\">").concat(data.value, "</div>\n      </div>\n    "));
  },
  choice: function choice(globalClasses, data, itemSelectText) {
    var _classNames5;

    var role = data.groupId > 0 ? 'role="treeitem"' : 'role="option"';
    var localClasses = (0, _classnames.default)(globalClasses.item, globalClasses.itemChoice, (_classNames5 = {}, _defineProperty(_classNames5, globalClasses.itemDisabled, data.disabled), _defineProperty(_classNames5, globalClasses.itemSelectable, !data.disabled), _defineProperty(_classNames5, globalClasses.placeholder, data.placeholder), _classNames5));
    return (0, _utils.strToEl)("\n      <div\n        class=\"".concat(localClasses, "\"\n        data-select-text=\"").concat(itemSelectText, "\"\n        data-choice\n        data-id=\"").concat(data.id, "\"\n        data-value=\"").concat(data.value, "\"\n        ").concat(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable', "\n        id=\"").concat(data.elementId, "\"\n        ").concat(role, "\n        >\n        ").concat(data.label, "\n      </div>\n    "));
  },
  input: function input(globalClasses) {
    var localClasses = (0, _classnames.default)(globalClasses.input, globalClasses.inputCloned);
    return (0, _utils.strToEl)("\n      <input\n        type=\"text\"\n        class=\"".concat(localClasses, "\"\n        autocomplete=\"off\"\n        autocapitalize=\"off\"\n        spellcheck=\"false\"\n        role=\"textbox\"\n        aria-autocomplete=\"list\"\n        >\n    "));
  },
  dropdown: function dropdown(globalClasses) {
    var localClasses = (0, _classnames.default)(globalClasses.list, globalClasses.listDropdown);
    return (0, _utils.strToEl)("\n      <div\n        class=\"".concat(localClasses, "\"\n        aria-expanded=\"false\"\n        >\n      </div>\n    "));
  },
  notice: function notice(globalClasses, label) {
    var _classNames6;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var localClasses = (0, _classnames.default)(globalClasses.item, globalClasses.itemChoice, (_classNames6 = {}, _defineProperty(_classNames6, globalClasses.noResults, type === 'no-results'), _defineProperty(_classNames6, globalClasses.noChoices, type === 'no-choices'), _classNames6));
    return (0, _utils.strToEl)("\n      <div class=\"".concat(localClasses, "\">\n        ").concat(label, "\n      </div>\n    "));
  },
  option: function option(data) {
    return (0, _utils.strToEl)("\n      <option value=\"".concat(data.value, "\" ").concat(data.active ? 'selected' : '', " ").concat(data.disabled ? 'disabled' : '', " ").concat(data.customProperties ? "data-custom-properties=".concat(data.customProperties) : '', ">").concat(data.label, "</option>\n    "));
  }
};
exports.TEMPLATES = TEMPLATES;
var _default = TEMPLATES;
exports.default = _default;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/redux/es/createStore.js



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore_createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore_createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!lodash_es_isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}
// CONCATENATED MODULE: ./node_modules/redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/redux/es/combineReducers.js




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!lodash_es_isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {}

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
// CONCATENATED MODULE: ./node_modules/redux/es/bindActionCreators.js
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
// CONCATENATED MODULE: ./node_modules/redux/es/compose.js
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
// CONCATENATED MODULE: ./node_modules/redux/es/applyMiddleware.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
// CONCATENATED MODULE: ./node_modules/redux/es/index.js
/* concated harmony reexport createStore */__webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore_createStore; });
/* concated harmony reexport combineReducers */__webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* concated harmony reexport bindActionCreators */__webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* concated harmony reexport applyMiddleware */__webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* concated harmony reexport compose */__webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fuse = _interopRequireDefault(__webpack_require__(11));

var _deepmerge = _interopRequireDefault(__webpack_require__(12));

var _store = _interopRequireDefault(__webpack_require__(13));

var _components = __webpack_require__(20);

var _constants = __webpack_require__(1);

var _templates = __webpack_require__(5);

var _choices = __webpack_require__(28);

var _items = __webpack_require__(29);

var _groups = __webpack_require__(30);

var _misc = __webpack_require__(31);

var _general = __webpack_require__(32);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var Choices =
/*#__PURE__*/
function () {
  function Choices() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-choice]';
    var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Choices);

    if ((0, _utils.isType)('String', element)) {
      var elements = Array.from(document.querySelectorAll(element)); // If there are multiple elements, create a new instance
      // for each element besides the first one (as that already has an instance)

      if (elements.length > 1) {
        return this._generateInstances(elements, userConfig);
      }
    }

    this.config = _deepmerge.default.all([_constants.DEFAULT_CONFIG, Choices.userDefaults, userConfig], // When merging array configs, replace with a copy of the userConfig array,
    // instead of concatenating with the default array
    {
      arrayMerge: function arrayMerge(destinationArray, sourceArray) {
        return [].concat(sourceArray);
      }
    });
    var invalidConfigOptions = (0, _utils.diff)(this.config, _constants.DEFAULT_CONFIG);

    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }

    if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
      this.config.renderSelectedChoices = 'auto';
    } // Retrieve triggering element (i.e. element with 'data-choice' trigger)


    var passedElement = (0, _utils.isType)('String', element) ? document.querySelector(element) : element;

    if (!passedElement) {
      return console.error('Could not find passed element or passed element was of an invalid type');
    }

    this._isTextElement = passedElement.type === 'text';
    this._isSelectOneElement = passedElement.type === 'select-one';
    this._isSelectMultipleElement = passedElement.type === 'select-multiple';
    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;

    if (this._isTextElement) {
      this.passedElement = new _components.WrappedInput({
        element: passedElement,
        classNames: this.config.classNames,
        delimiter: this.config.delimiter
      });
    } else if (this._isSelectElement) {
      this.passedElement = new _components.WrappedSelect({
        element: passedElement,
        classNames: this.config.classNames
      });
    }

    if (!this.passedElement) {
      return console.error('Passed element was of an invalid type');
    }

    if (this.config.shouldSortItems === true && this._isSelectOneElement && !this.config.silent) {
      console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.");
    }

    this.initialised = false;
    this._store = new _store.default(this.render);
    this._initialState = {};
    this._currentState = {};
    this._prevState = {};
    this._currentValue = '';
    this._canSearch = this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = (0, _utils.generateId)(this.passedElement.element, 'choices-');
    this._direction = this.passedElement.element.getAttribute('dir') || 'ltr';
    this._idNames = {
      itemChoice: 'item-choice'
    }; // Assign preset choices from passed object

    this._presetChoices = this.config.choices; // Assign preset items from passed object first

    this._presetItems = this.config.items; // Then add any values passed from attribute

    if (this.passedElement.value) {
      this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
    }

    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onAKey = this._onAKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

    if (this.passedElement.element.getAttribute('data-choice') === 'active') {
      console.warn('Trying to initialise Choices on element already initialised');
    } // Let's go


    this.init();
  }
  /* ========================================
  =            Public functions            =
  ======================================== */


  _createClass(Choices, [{
    key: "init",
    value: function init() {
      if (this.initialised) {
        return;
      }

      this._createTemplates();

      this._createElements();

      this._createStructure(); // Set initial state (We need to clone the state because some reducers
      // modify the inner objects properties in the state) 🤢


      this._initialState = (0, _utils.cloneObject)(this._store.state);

      this._store.subscribe(this._render);

      this._render();

      this._addEventListeners();

      var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

      if (shouldDisable) {
        this.disable();
      }

      this.initialised = true;
      var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

      if (callbackOnInit && (0, _utils.isType)('Function', callbackOnInit)) {
        callbackOnInit.call(this);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.initialised) {
        return;
      }

      this._removeEventListeners();

      this.passedElement.reveal();
      this.containerOuter.unwrap(this.passedElement.element);

      if (this._isSelectElement) {
        this.passedElement.options = this._presetChoices;
      }

      this.clearStore();
      this.config.templates = null;
      this.initialised = false;
    }
  }, {
    key: "enable",
    value: function enable() {
      if (this.passedElement.isDisabled) {
        this.passedElement.enable();
      }

      if (this.containerOuter.isDisabled) {
        this._addEventListeners();

        this.input.enable();
        this.containerOuter.enable();
      }

      return this;
    }
  }, {
    key: "disable",
    value: function disable() {
      if (!this.passedElement.isDisabled) {
        this.passedElement.disable();
      }

      if (!this.containerOuter.isDisabled) {
        this._removeEventListeners();

        this.input.disable();
        this.containerOuter.disable();
      }

      return this;
    }
  }, {
    key: "highlightItem",
    value: function highlightItem(item) {
      var runEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!item) {
        return this;
      }

      var id = item.id,
          _item$groupId = item.groupId,
          groupId = _item$groupId === void 0 ? -1 : _item$groupId,
          _item$value = item.value,
          value = _item$value === void 0 ? '' : _item$value,
          _item$label = item.label,
          label = _item$label === void 0 ? '' : _item$label;
      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

      this._store.dispatch((0, _items.highlightItem)(id, true));

      if (runEvent) {
        this.passedElement.triggerEvent(_constants.EVENTS.highlightItem, {
          id: id,
          value: value,
          label: label,
          groupValue: group && group.value ? group.value : null
        });
      }

      return this;
    }
  }, {
    key: "unhighlightItem",
    value: function unhighlightItem(item) {
      if (!item) {
        return this;
      }

      var id = item.id,
          _item$groupId2 = item.groupId,
          groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2,
          _item$value2 = item.value,
          value = _item$value2 === void 0 ? '' : _item$value2,
          _item$label2 = item.label,
          label = _item$label2 === void 0 ? '' : _item$label2;
      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

      this._store.dispatch((0, _items.highlightItem)(id, false));

      this.passedElement.triggerEvent(_constants.EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });
      return this;
    }
  }, {
    key: "highlightAll",
    value: function highlightAll() {
      var _this = this;

      this._store.items.forEach(function (item) {
        return _this.highlightItem(item);
      });

      return this;
    }
  }, {
    key: "unhighlightAll",
    value: function unhighlightAll() {
      var _this2 = this;

      this._store.items.forEach(function (item) {
        return _this2.unhighlightItem(item);
      });

      return this;
    }
  }, {
    key: "removeActiveItemsByValue",
    value: function removeActiveItemsByValue(value) {
      var _this3 = this;

      this._store.activeItems.filter(function (item) {
        return item.value === value;
      }).forEach(function (item) {
        return _this3._removeItem(item);
      });

      return this;
    }
  }, {
    key: "removeActiveItems",
    value: function removeActiveItems(excludedId) {
      var _this4 = this;

      this._store.activeItems.filter(function (_ref) {
        var id = _ref.id;
        return id !== excludedId;
      }).forEach(function (item) {
        return _this4._removeItem(item);
      });

      return this;
    }
  }, {
    key: "removeHighlightedItems",
    value: function removeHighlightedItems() {
      var _this5 = this;

      var runEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._store.highlightedActiveItems.forEach(function (item) {
        _this5._removeItem(item); // If this action was performed by the user
        // trigger the event


        if (runEvent) {
          _this5._triggerChange(item.value);
        }
      });

      return this;
    }
  }, {
    key: "showDropdown",
    value: function showDropdown(preventInputFocus) {
      var _this6 = this;

      if (this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this6.dropdown.show();

        _this6.containerOuter.open(_this6.dropdown.distanceFromTopWindow());

        if (!preventInputFocus && _this6._canSearch) {
          _this6.input.focus();
        }

        _this6.passedElement.triggerEvent(_constants.EVENTS.showDropdown, {});
      });
      return this;
    }
  }, {
    key: "hideDropdown",
    value: function hideDropdown(preventInputBlur) {
      var _this7 = this;

      if (!this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this7.dropdown.hide();

        _this7.containerOuter.close();

        if (!preventInputBlur && _this7._canSearch) {
          _this7.input.removeActiveDescendant();

          _this7.input.blur();
        }

        _this7.passedElement.triggerEvent(_constants.EVENTS.hideDropdown, {});
      });
      return this;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var valueOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var values = this._store.activeItems.reduce(function (selectedItems, item) {
        var itemValue = valueOnly ? item.value : item;
        selectedItems.push(itemValue);
        return selectedItems;
      }, []);

      return this._isSelectOneElement ? values[0] : values;
    }
  }, {
    key: "setValue",
    value: function setValue(args) {
      var _this8 = this;

      if (!this.initialised) {
        return this;
      }

      [].concat(args).forEach(function (value) {
        return _this8._setChoiceOrItem(value);
      });
      return this;
    }
  }, {
    key: "setChoiceByValue",
    value: function setChoiceByValue(value) {
      var _this9 = this;

      if (!this.initialised || this._isTextElement) {
        return this;
      } // If only one value has been passed, convert to array


      var choiceValue = (0, _utils.isType)('Array', value) ? value : [value]; // Loop through each value and

      choiceValue.forEach(function (val) {
        return _this9._findAndSelectChoiceByValue(val);
      });
      return this;
    }
  }, {
    key: "setChoices",
    value: function setChoices() {
      var _this10 = this;

      var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var replaceChoices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!this._isSelectElement || !value) {
        return this;
      } // Clear choices if needed


      if (replaceChoices) {
        this.clearChoices();
      }

      this.containerOuter.removeLoadingState();

      var addGroupsAndChoices = function addGroupsAndChoices(groupOrChoice) {
        if (groupOrChoice.choices) {
          _this10._addGroup({
            group: groupOrChoice,
            id: groupOrChoice.id || null,
            valueKey: value,
            labelKey: label
          });
        } else {
          _this10._addChoice({
            value: groupOrChoice[value],
            label: groupOrChoice[label],
            isSelected: groupOrChoice.selected,
            isDisabled: groupOrChoice.disabled,
            customProperties: groupOrChoice.customProperties,
            placeholder: groupOrChoice.placeholder
          });
        }
      };

      this._setLoading(true);

      choices.forEach(addGroupsAndChoices);

      this._setLoading(false);

      return this;
    }
  }, {
    key: "clearChoices",
    value: function clearChoices() {
      this._store.dispatch((0, _choices.clearChoices)());
    }
  }, {
    key: "clearStore",
    value: function clearStore() {
      this._store.dispatch((0, _misc.clearAll)());

      return this;
    }
  }, {
    key: "clearInput",
    value: function clearInput() {
      var shouldSetInputWidth = !this._isSelectOneElement;
      this.input.clear(shouldSetInputWidth);

      if (!this._isTextElement && this._canSearch) {
        this._isSearching = false;

        this._store.dispatch((0, _choices.activateChoices)(true));
      }

      return this;
    }
  }, {
    key: "ajax",
    value: function ajax(fn) {
      var _this11 = this;

      if (!this.initialised || !this._isSelectElement || !fn) {
        return this;
      }

      requestAnimationFrame(function () {
        return _this11._handleLoadingState(true);
      });
      fn(this._ajaxCallback());
      return this;
    }
    /* =====  End of Public functions  ====== */

    /* =============================================
    =                Private functions            =
    ============================================= */

  }, {
    key: "_render",
    value: function _render() {
      if (this._store.isLoading()) {
        return;
      }

      this._currentState = this._store.state;
      var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
      var shouldRenderChoices = this._isSelectElement;
      var shouldRenderItems = this._currentState.items !== this._prevState.items;

      if (!stateChanged) {
        return;
      }

      if (shouldRenderChoices) {
        this._renderChoices();
      }

      if (shouldRenderItems) {
        this._renderItems();
      }

      this._prevState = this._currentState;
    }
  }, {
    key: "_renderChoices",
    value: function _renderChoices() {
      var _this12 = this;

      var _this$_store = this._store,
          activeGroups = _this$_store.activeGroups,
          activeChoices = _this$_store.activeChoices;
      var choiceListFragment = document.createDocumentFragment();
      this.choiceList.clear();

      if (this.config.resetScrollPosition) {
        requestAnimationFrame(function () {
          return _this12.choiceList.scrollToTop();
        });
      } // If we have grouped options


      if (activeGroups.length >= 1 && !this._isSearching) {
        // If we have a placeholder choice along with groups
        var activePlaceholders = activeChoices.filter(function (activeChoice) {
          return activeChoice.placeholder === true && activeChoice.groupId === -1;
        });

        if (activePlaceholders.length >= 1) {
          choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
        }

        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
      } else if (activeChoices.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
      } // If we have choices to show


      if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
        var activeItems = this._store.activeItems;

        var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


        if (canAddItem.response) {
          // ...append them and highlight the first choice
          this.choiceList.append(choiceListFragment);

          this._highlightChoice();
        } else {
          // ...otherwise show a notice
          this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
        }
      } else {
        // Otherwise show a notice
        var dropdownItem;
        var notice;

        if (this._isSearching) {
          notice = (0, _utils.isType)('Function', this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText;
          dropdownItem = this._getTemplate('notice', notice, 'no-results');
        } else {
          notice = (0, _utils.isType)('Function', this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText;
          dropdownItem = this._getTemplate('notice', notice, 'no-choices');
        }

        this.choiceList.append(dropdownItem);
      }
    }
  }, {
    key: "_renderItems",
    value: function _renderItems() {
      var activeItems = this._store.activeItems || [];
      this.itemList.clear(); // Create a fragment to store our list items
      // (so we don't have to update the DOM for each item)

      var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


      if (itemListFragment.childNodes) {
        this.itemList.append(itemListFragment);
      }
    }
  }, {
    key: "_createGroupsFragment",
    value: function _createGroupsFragment(groups, choices, fragment) {
      var _this13 = this;

      var groupFragment = fragment || document.createDocumentFragment();

      var getGroupChoices = function getGroupChoices(group) {
        return choices.filter(function (choice) {
          if (_this13._isSelectOneElement) {
            return choice.groupId === group.id;
          }

          return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
        });
      }; // If sorting is enabled, filter groups


      if (this.config.shouldSort) {
        groups.sort(this.config.sortFn);
      }

      groups.forEach(function (group) {
        var groupChoices = getGroupChoices(group);

        if (groupChoices.length >= 1) {
          var dropdownGroup = _this13._getTemplate('choiceGroup', group);

          groupFragment.appendChild(dropdownGroup);

          _this13._createChoicesFragment(groupChoices, groupFragment, true);
        }
      });
      return groupFragment;
    }
  }, {
    key: "_createChoicesFragment",
    value: function _createChoicesFragment(choices, fragment) {
      var _this14 = this;

      var withinGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Create a fragment to store our list items (so we don't have to update the DOM for each item)
      var choicesFragment = fragment || document.createDocumentFragment();
      var _this$config = this.config,
          renderSelectedChoices = _this$config.renderSelectedChoices,
          searchResultLimit = _this$config.searchResultLimit,
          renderChoiceLimit = _this$config.renderChoiceLimit;
      var filter = this._isSearching ? _utils.sortByScore : this.config.sortFn;

      var appendChoice = function appendChoice(choice) {
        var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;

        if (shouldRender) {
          var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);

          choicesFragment.appendChild(dropdownItem);
        }
      };

      var rendererableChoices = choices;

      if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
        rendererableChoices = choices.filter(function (choice) {
          return !choice.selected;
        });
      } // Split array into placeholders and "normal" choices


      var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
        if (choice.placeholder) {
          acc.placeholderChoices.push(choice);
        } else {
          acc.normalChoices.push(choice);
        }

        return acc;
      }, {
        placeholderChoices: [],
        normalChoices: []
      }),
          placeholderChoices = _rendererableChoices$.placeholderChoices,
          normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices


      if (this.config.shouldSort || this._isSearching) {
        normalChoices.sort(filter);
      }

      var choiceLimit = rendererableChoices.length; // Prepend placeholeder

      var sortedChoices = [].concat(placeholderChoices, normalChoices);

      if (this._isSearching) {
        choiceLimit = searchResultLimit;
      } else if (renderChoiceLimit > 0 && !withinGroup) {
        choiceLimit = renderChoiceLimit;
      } // Add each choice to dropdown within range


      for (var i = 0; i < choiceLimit; i += 1) {
        if (sortedChoices[i]) {
          appendChoice(sortedChoices[i]);
        }
      }

      return choicesFragment;
    }
  }, {
    key: "_createItemsFragment",
    value: function _createItemsFragment(items) {
      var _this15 = this;

      var fragment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // Create fragment to add elements to
      var _this$config2 = this.config,
          shouldSortItems = _this$config2.shouldSortItems,
          sortFn = _this$config2.sortFn,
          removeItemButton = _this$config2.removeItemButton;
      var itemListFragment = fragment || document.createDocumentFragment(); // If sorting is enabled, filter items

      if (shouldSortItems && !this._isSelectOneElement) {
        items.sort(sortFn);
      }

      if (this._isTextElement) {
        // Update the value of the hidden input
        this.passedElement.value = items;
      } else {
        // Update the options of the hidden input
        this.passedElement.options = items;
      }

      var addItemToFragment = function addItemToFragment(item) {
        // Create new list element
        var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list


        itemListFragment.appendChild(listItem);
      }; // Add each list item to list


      items.forEach(function (item) {
        return addItemToFragment(item);
      });
      return itemListFragment;
    }
  }, {
    key: "_triggerChange",
    value: function _triggerChange(value) {
      if (value === undefined || value === null) {
        return;
      }

      this.passedElement.triggerEvent(_constants.EVENTS.change, {
        value: value
      });
    }
  }, {
    key: "_selectPlaceholderChoice",
    value: function _selectPlaceholderChoice() {
      var placeholderChoice = this._store.placeholderChoice;

      if (placeholderChoice) {
        this._addItem({
          value: placeholderChoice.value,
          label: placeholderChoice.label,
          choiceId: placeholderChoice.id,
          groupId: placeholderChoice.groupId,
          placeholder: placeholderChoice.placeholder
        });

        this._triggerChange(placeholderChoice.value);
      }
    }
  }, {
    key: "_handleButtonAction",
    value: function _handleButtonAction(activeItems, element) {
      if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
        return;
      }

      var itemId = element.parentNode.getAttribute('data-id');
      var itemToRemove = activeItems.find(function (item) {
        return item.id === parseInt(itemId, 10);
      }); // Remove item associated with button

      this._removeItem(itemToRemove);

      this._triggerChange(itemToRemove.value);

      if (this._isSelectOneElement) {
        this._selectPlaceholderChoice();
      }
    }
  }, {
    key: "_handleItemAction",
    value: function _handleItemAction(activeItems, element) {
      var _this16 = this;

      var hasShiftKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
        return;
      }

      var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
      // so we deselect any items that aren't the target
      // unless shift is being pressed

      activeItems.forEach(function (item) {
        if (item.id === parseInt(passedId, 10) && !item.highlighted) {
          _this16.highlightItem(item);
        } else if (!hasShiftKey && item.highlighted) {
          _this16.unhighlightItem(item);
        }
      }); // Focus input as without focus, a user cannot do anything with a
      // highlighted item

      this.input.focus();
    }
  }, {
    key: "_handleChoiceAction",
    value: function _handleChoiceAction(activeItems, element) {
      if (!activeItems || !element) {
        return;
      } // If we are clicking on an option


      var id = element.getAttribute('data-id');

      var choice = this._store.getChoiceById(id);

      var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
      var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

      choice.keyCode = passedKeyCode;
      this.passedElement.triggerEvent(_constants.EVENTS.choice, {
        choice: choice
      });

      if (choice && !choice.selected && !choice.disabled) {
        var canAddItem = this._canAddItem(activeItems, choice.value);

        if (canAddItem.response) {
          this._addItem({
            value: choice.value,
            label: choice.label,
            choiceId: choice.id,
            groupId: choice.groupId,
            customProperties: choice.customProperties,
            placeholder: choice.placeholder,
            keyCode: choice.keyCode
          });

          this._triggerChange(choice.value);
        }
      }

      this.clearInput(); // We wont to close the dropdown if we are dealing with a single select box

      if (hasActiveDropdown && this._isSelectOneElement) {
        this.hideDropdown(true);
        this.containerOuter.focus();
      }
    }
  }, {
    key: "_handleBackspace",
    value: function _handleBackspace(activeItems) {
      if (!this.config.removeItems || !activeItems) {
        return;
      }

      var lastItem = activeItems[activeItems.length - 1];
      var hasHighlightedItems = activeItems.some(function (item) {
        return item.highlighted;
      }); // If editing the last item is allowed and there are not other selected items,
      // we can edit the item value. Otherwise if we can remove items, remove all selected items

      if (this.config.editItems && !hasHighlightedItems && lastItem) {
        this.input.value = lastItem.value;
        this.input.setWidth();

        this._removeItem(lastItem);

        this._triggerChange(lastItem.value);
      } else {
        if (!hasHighlightedItems) {
          // Highlight last item if none already highlighted
          this.highlightItem(lastItem, false);
        }

        this.removeHighlightedItems(true);
      }
    }
  }, {
    key: "_setLoading",
    value: function _setLoading(isLoading) {
      this._store.dispatch((0, _general.setIsLoading)(isLoading));
    }
  }, {
    key: "_handleLoadingState",
    value: function _handleLoadingState() {
      var setLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));

      if (setLoading) {
        this.disable();
        this.containerOuter.addLoadingState();

        if (this._isSelectOneElement) {
          if (!placeholderItem) {
            placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
            this.itemList.append(placeholderItem);
          } else {
            placeholderItem.innerHTML = this.config.loadingText;
          }
        } else {
          this.input.placeholder = this.config.loadingText;
        }
      } else {
        this.enable();
        this.containerOuter.removeLoadingState();

        if (this._isSelectOneElement) {
          placeholderItem.innerHTML = this._placeholderValue || '';
        } else {
          this.input.placeholder = this._placeholderValue || '';
        }
      }
    }
  }, {
    key: "_handleSearch",
    value: function _handleSearch(value) {
      if (!value || !this.input.isFocussed) {
        return;
      }

      var choices = this._store.choices;
      var _this$config3 = this.config,
          searchFloor = _this$config3.searchFloor,
          searchChoices = _this$config3.searchChoices;
      var hasUnactiveChoices = choices.some(function (option) {
        return !option.active;
      }); // Check that we have a value to search and the input was an alphanumeric character

      if (value && value.length >= searchFloor) {
        var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

        this.passedElement.triggerEvent(_constants.EVENTS.search, {
          value: value,
          resultCount: resultCount
        });
      } else if (hasUnactiveChoices) {
        // Otherwise reset choices to active
        this._isSearching = false;

        this._store.dispatch((0, _choices.activateChoices)(true));
      }
    }
  }, {
    key: "_canAddItem",
    value: function _canAddItem(activeItems, value) {
      var canAddItem = true;
      var notice = (0, _utils.isType)('Function', this.config.addItemText) ? this.config.addItemText(value) : this.config.addItemText;

      if (!this._isSelectOneElement) {
        var isDuplicateValue = (0, _utils.existsInArray)(activeItems, value);

        if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
          // If there is a max entry limit and we have reached that limit
          // don't update
          canAddItem = false;
          notice = (0, _utils.isType)('Function', this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
        }

        if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
          canAddItem = false;
          notice = (0, _utils.isType)('Function', this.config.uniqueItemText) ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
        }

        if (this._isTextElement && this.config.addItems && canAddItem && (0, _utils.isType)('Function', this.config.addItemFilterFn) && !this.config.addItemFilterFn(value)) {
          canAddItem = false;
          notice = (0, _utils.isType)('Function', this.config.customAddItemText) ? this.config.customAddItemText(value) : this.config.customAddItemText;
        }
      }

      return {
        response: canAddItem,
        notice: notice
      };
    }
  }, {
    key: "_ajaxCallback",
    value: function _ajaxCallback() {
      var _this17 = this;

      return function (results, value, label) {
        if (!results || !value) {
          return;
        }

        var parsedResults = (0, _utils.isType)('Object', results) ? [results] : results;

        if (parsedResults && (0, _utils.isType)('Array', parsedResults) && parsedResults.length) {
          // Remove loading states/text
          _this17._handleLoadingState(false);

          _this17._setLoading(true); // Add each result as a choice


          parsedResults.forEach(function (result) {
            if (result.choices) {
              _this17._addGroup({
                group: result,
                id: result.id || null,
                valueKey: value,
                labelKey: label
              });
            } else {
              _this17._addChoice({
                value: (0, _utils.fetchFromObject)(result, value),
                label: (0, _utils.fetchFromObject)(result, label),
                isSelected: result.selected,
                isDisabled: result.disabled,
                customProperties: result.customProperties,
                placeholder: result.placeholder
              });
            }
          });

          _this17._setLoading(false);

          if (_this17._isSelectOneElement) {
            _this17._selectPlaceholderChoice();
          }
        } else {
          // No results, remove loading state
          _this17._handleLoadingState(false);
        }
      };
    }
  }, {
    key: "_searchChoices",
    value: function _searchChoices(value) {
      var newValue = (0, _utils.isType)('String', value) ? value.trim() : value;
      var currentValue = (0, _utils.isType)('String', this._currentValue) ? this._currentValue.trim() : this._currentValue;

      if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) {
        return 0;
      } // If new value matches the desired length and is not the same as the current value with a space


      var haystack = this._store.searchableChoices;
      var needle = newValue;
      var keys = [].concat(this.config.searchFields);
      var options = Object.assign(this.config.fuseOptions, {
        keys: keys
      });
      var fuse = new _fuse.default(haystack, options);
      var results = fuse.search(needle);
      this._currentValue = newValue;
      this._highlightPosition = 0;
      this._isSearching = true;

      this._store.dispatch((0, _choices.filterChoices)(results));

      return results.length;
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      document.addEventListener('keyup', this._onKeyUp);
      document.addEventListener('keydown', this._onKeyDown);
      document.addEventListener('click', this._onClick);
      document.addEventListener('touchmove', this._onTouchMove);
      document.addEventListener('touchend', this._onTouchEnd);
      document.addEventListener('mousedown', this._onMouseDown);
      document.addEventListener('mouseover', this._onMouseOver);

      if (this._isSelectOneElement) {
        this.containerOuter.element.addEventListener('focus', this._onFocus);
        this.containerOuter.element.addEventListener('blur', this._onBlur);
      }

      this.input.element.addEventListener('focus', this._onFocus);
      this.input.element.addEventListener('blur', this._onBlur);

      if (this.input.element.form) {
        this.input.element.form.addEventListener('reset', this._onFormReset);
      }

      this.input.addEventListeners();
    }
  }, {
    key: "_removeEventListeners",
    value: function _removeEventListeners() {
      document.removeEventListener('keyup', this._onKeyUp);
      document.removeEventListener('keydown', this._onKeyDown);
      document.removeEventListener('click', this._onClick);
      document.removeEventListener('touchmove', this._onTouchMove);
      document.removeEventListener('touchend', this._onTouchEnd);
      document.removeEventListener('mousedown', this._onMouseDown);
      document.removeEventListener('mouseover', this._onMouseOver);

      if (this._isSelectOneElement) {
        this.containerOuter.element.removeEventListener('focus', this._onFocus);
        this.containerOuter.element.removeEventListener('blur', this._onBlur);
      }

      this.input.element.removeEventListener('focus', this._onFocus);
      this.input.element.removeEventListener('blur', this._onBlur);

      if (this.input.element.form) {
        this.input.element.form.removeEventListener('reset', this._onFormReset);
      }

      this.input.removeEventListeners();
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      var _keyDownActions;

      var target = event.target,
          keyCode = event.keyCode,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;

      if (target !== this.input.element && !this.containerOuter.element.contains(target)) {
        return;
      }

      var activeItems = this._store.activeItems;
      var hasFocusedInput = this.input.isFocussed;
      var hasActiveDropdown = this.dropdown.isActive;
      var hasItems = this.itemList.hasChildren;
      var keyString = String.fromCharCode(keyCode);
      var BACK_KEY = _constants.KEY_CODES.BACK_KEY,
          DELETE_KEY = _constants.KEY_CODES.DELETE_KEY,
          ENTER_KEY = _constants.KEY_CODES.ENTER_KEY,
          A_KEY = _constants.KEY_CODES.A_KEY,
          ESC_KEY = _constants.KEY_CODES.ESC_KEY,
          UP_KEY = _constants.KEY_CODES.UP_KEY,
          DOWN_KEY = _constants.KEY_CODES.DOWN_KEY,
          PAGE_UP_KEY = _constants.KEY_CODES.PAGE_UP_KEY,
          PAGE_DOWN_KEY = _constants.KEY_CODES.PAGE_DOWN_KEY;
      var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active

      if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
        this.showDropdown();
      } // Map keys to key actions


      var keyDownActions = (_keyDownActions = {}, _defineProperty(_keyDownActions, A_KEY, this._onAKey), _defineProperty(_keyDownActions, ENTER_KEY, this._onEnterKey), _defineProperty(_keyDownActions, ESC_KEY, this._onEscapeKey), _defineProperty(_keyDownActions, UP_KEY, this._onDirectionKey), _defineProperty(_keyDownActions, PAGE_UP_KEY, this._onDirectionKey), _defineProperty(_keyDownActions, DOWN_KEY, this._onDirectionKey), _defineProperty(_keyDownActions, PAGE_DOWN_KEY, this._onDirectionKey), _defineProperty(_keyDownActions, DELETE_KEY, this._onDeleteKey), _defineProperty(_keyDownActions, BACK_KEY, this._onDeleteKey), _keyDownActions); // If keycode has a function, run it

      if (keyDownActions[keyCode]) {
        keyDownActions[keyCode]({
          event: event,
          target: target,
          keyCode: keyCode,
          metaKey: metaKey,
          activeItems: activeItems,
          hasFocusedInput: hasFocusedInput,
          hasActiveDropdown: hasActiveDropdown,
          hasItems: hasItems,
          hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
        });
      }
    }
  }, {
    key: "_onKeyUp",
    value: function _onKeyUp(_ref2) {
      var target = _ref2.target,
          keyCode = _ref2.keyCode;

      if (target !== this.input.element) {
        return;
      }

      var value = this.input.value;
      var activeItems = this._store.activeItems;

      var canAddItem = this._canAddItem(activeItems, value);

      var backKey = _constants.KEY_CODES.BACK_KEY,
          deleteKey = _constants.KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
      // notice. Otherwise hide the dropdown

      if (this._isTextElement) {
        var canShowDropdownNotice = canAddItem.notice && value;

        if (canShowDropdownNotice) {
          var dropdownItem = this._getTemplate('notice', canAddItem.notice);

          this.dropdown.element.innerHTML = dropdownItem.outerHTML;
          this.showDropdown(true);
        } else {
          this.hideDropdown(true);
        }
      } else {
        var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
        var canReactivateChoices = !this._isTextElement && this._isSearching;
        var canSearch = this._canSearch && canAddItem.response;

        if (userHasRemovedValue && canReactivateChoices) {
          this._isSearching = false;

          this._store.dispatch((0, _choices.activateChoices)(true));
        } else if (canSearch) {
          this._handleSearch(this.input.value);
        }
      }

      this._canSearch = this.config.searchEnabled;
    }
  }, {
    key: "_onAKey",
    value: function _onAKey(_ref3) {
      var hasItems = _ref3.hasItems,
          hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;

      // If CTRL + A or CMD + A have been pressed and there are items to select
      if (hasCtrlDownKeyPressed && hasItems) {
        this._canSearch = false;
        var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

        if (shouldHightlightAll) {
          this.highlightAll();
        }
      }
    }
  }, {
    key: "_onEnterKey",
    value: function _onEnterKey(_ref4) {
      var event = _ref4.event,
          target = _ref4.target,
          activeItems = _ref4.activeItems,
          hasActiveDropdown = _ref4.hasActiveDropdown;
      var enterKey = _constants.KEY_CODES.ENTER_KEY;
      var targetWasButton = target.hasAttribute('data-button');

      if (this._isTextElement && target.value) {
        var value = this.input.value;

        var canAddItem = this._canAddItem(activeItems, value);

        if (canAddItem.response) {
          this.hideDropdown(true);

          this._addItem({
            value: value
          });

          this._triggerChange(value);

          this.clearInput();
        }
      }

      if (targetWasButton) {
        this._handleButtonAction(activeItems, target);

        event.preventDefault();
      }

      if (hasActiveDropdown) {
        var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));

        if (highlightedChoice) {
          // add enter keyCode value
          if (activeItems[0]) {
            activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
          }

          this._handleChoiceAction(activeItems, highlightedChoice);
        }

        event.preventDefault();
      } else if (this._isSelectOneElement) {
        this.showDropdown();
        event.preventDefault();
      }
    }
  }, {
    key: "_onEscapeKey",
    value: function _onEscapeKey(_ref5) {
      var hasActiveDropdown = _ref5.hasActiveDropdown;

      if (hasActiveDropdown) {
        this.hideDropdown(true);
        this.containerOuter.focus();
      }
    }
  }, {
    key: "_onDirectionKey",
    value: function _onDirectionKey(_ref6) {
      var event = _ref6.event,
          hasActiveDropdown = _ref6.hasActiveDropdown,
          keyCode = _ref6.keyCode,
          metaKey = _ref6.metaKey;
      var downKey = _constants.KEY_CODES.DOWN_KEY,
          pageUpKey = _constants.KEY_CODES.PAGE_UP_KEY,
          pageDownKey = _constants.KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

      if (hasActiveDropdown || this._isSelectOneElement) {
        this.showDropdown();
        this._canSearch = false;
        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
        var selectableChoiceIdentifier = '[data-choice-selectable]';
        var nextEl;

        if (skipKey) {
          if (directionInt > 0) {
            nextEl = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier)).pop();
          } else {
            nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
          }
        } else {
          var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));

          if (currentEl) {
            nextEl = (0, _utils.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
          } else {
            nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
          }
        }

        if (nextEl) {
          // We prevent default to stop the cursor moving
          // when pressing the arrow
          if (!(0, _utils.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
            this.choiceList.scrollToChoice(nextEl, directionInt);
          }

          this._highlightChoice(nextEl);
        } // Prevent default to maintain cursor position whilst
        // traversing dropdown options


        event.preventDefault();
      }
    }
  }, {
    key: "_onDeleteKey",
    value: function _onDeleteKey(_ref7) {
      var event = _ref7.event,
          target = _ref7.target,
          hasFocusedInput = _ref7.hasFocusedInput,
          activeItems = _ref7.activeItems;

      // If backspace or delete key is pressed and the input has no value
      if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
        this._handleBackspace(activeItems);

        event.preventDefault();
      }
    }
  }, {
    key: "_onTouchMove",
    value: function _onTouchMove() {
      if (this._wasTap) {
        this._wasTap = false;
      }
    }
  }, {
    key: "_onTouchEnd",
    value: function _onTouchEnd(event) {
      var _ref8 = event || event.touches[0],
          target = _ref8.target;

      var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

      if (touchWasWithinContainer) {
        var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

        if (containerWasExactTarget) {
          if (this._isTextElement) {
            this.input.focus();
          } else if (this._isSelectMultipleElement) {
            this.showDropdown();
          }
        } // Prevents focus event firing


        event.stopPropagation();
      }

      this._wasTap = true;
    }
  }, {
    key: "_onMouseDown",
    value: function _onMouseDown(event) {
      var target = event.target,
          shiftKey = event.shiftKey; // If we have our mouse down on the scrollbar and are on IE11...

      if (this.choiceList.element.contains(target) && (0, _utils.isIE11)()) {
        this._isScrollingOnIe = true;
      }

      if (!this.containerOuter.element.contains(target) || target === this.input.element) {
        return;
      }

      var activeItems = this._store.activeItems;
      var hasShiftKey = shiftKey;
      var buttonTarget = (0, _utils.findAncestorByAttrName)(target, 'data-button');
      var itemTarget = (0, _utils.findAncestorByAttrName)(target, 'data-item');
      var choiceTarget = (0, _utils.findAncestorByAttrName)(target, 'data-choice');

      if (buttonTarget) {
        this._handleButtonAction(activeItems, buttonTarget);
      } else if (itemTarget) {
        this._handleItemAction(activeItems, itemTarget, hasShiftKey);
      } else if (choiceTarget) {
        this._handleChoiceAction(activeItems, choiceTarget);
      }

      event.preventDefault();
    }
  }, {
    key: "_onMouseOver",
    value: function _onMouseOver(_ref9) {
      var target = _ref9.target;
      var targetWithinDropdown = target === this.dropdown || this.dropdown.element.contains(target);
      var shouldHighlightChoice = targetWithinDropdown && target.hasAttribute('data-choice');

      if (shouldHighlightChoice) {
        this._highlightChoice(target);
      }
    }
  }, {
    key: "_onClick",
    value: function _onClick(_ref10) {
      var target = _ref10.target;
      var clickWasWithinContainer = this.containerOuter.element.contains(target);

      if (clickWasWithinContainer) {
        if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
          if (this._isTextElement) {
            if (document.activeElement !== this.input.element) {
              this.input.focus();
            }
          } else {
            this.showDropdown();
            this.containerOuter.focus();
          }
        } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
          this.hideDropdown();
        }
      } else {
        var hasHighlightedItems = this._store.highlightedActiveItems;

        if (hasHighlightedItems) {
          this.unhighlightAll();
        }

        this.containerOuter.removeFocusState();
        this.hideDropdown(true);
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus(_ref11) {
      var _this18 = this;

      var target = _ref11.target;
      var focusWasWithinContainer = this.containerOuter.element.contains(target);

      if (!focusWasWithinContainer) {
        return;
      }

      var focusActions = {
        text: function text() {
          if (target === _this18.input.element) {
            _this18.containerOuter.addFocusState();
          }
        },
        'select-one': function selectOne() {
          _this18.containerOuter.addFocusState();

          if (target === _this18.input.element) {
            _this18.showDropdown(true);
          }
        },
        'select-multiple': function selectMultiple() {
          if (target === _this18.input.element) {
            _this18.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
            // isn't already open, focus and show dropdown


            _this18.containerOuter.addFocusState();
          }
        }
      };
      focusActions[this.passedElement.element.type]();
    }
  }, {
    key: "_onBlur",
    value: function _onBlur(_ref12) {
      var _this19 = this;

      var target = _ref12.target;
      var blurWasWithinContainer = this.containerOuter.element.contains(target);

      if (blurWasWithinContainer && !this._isScrollingOnIe) {
        var activeItems = this._store.activeItems;
        var hasHighlightedItems = activeItems.some(function (item) {
          return item.highlighted;
        });
        var blurActions = {
          text: function text() {
            if (target === _this19.input.element) {
              _this19.containerOuter.removeFocusState();

              if (hasHighlightedItems) {
                _this19.unhighlightAll();
              }

              _this19.hideDropdown(true);
            }
          },
          'select-one': function selectOne() {
            _this19.containerOuter.removeFocusState();

            if (target === _this19.input.element || target === _this19.containerOuter.element && !_this19._canSearch) {
              _this19.hideDropdown(true);
            }
          },
          'select-multiple': function selectMultiple() {
            if (target === _this19.input.element) {
              _this19.containerOuter.removeFocusState();

              _this19.hideDropdown(true);

              if (hasHighlightedItems) {
                _this19.unhighlightAll();
              }
            }
          }
        };
        blurActions[this.passedElement.element.type]();
      } else {
        // On IE11, clicking the scollbar blurs our input and thus
        // closes the dropdown. To stop this, we refocus our input
        // if we know we are on IE *and* are scrolling.
        this._isScrollingOnIe = false;
        this.input.element.focus();
      }
    }
  }, {
    key: "_onFormReset",
    value: function _onFormReset() {
      this._store.dispatch((0, _misc.resetTo)(this._initialState));
    }
  }, {
    key: "_highlightChoice",
    value: function _highlightChoice() {
      var _this20 = this;

      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

      if (!choices.length) {
        return;
      }

      var passedEl = el;
      var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState))); // Remove any highlighted choices

      highlightedChoices.forEach(function (choice) {
        choice.classList.remove(_this20.config.classNames.highlightedState);
        choice.setAttribute('aria-selected', 'false');
      });

      if (passedEl) {
        this._highlightPosition = choices.indexOf(passedEl);
      } else {
        // Highlight choice based on last known highlight location
        if (choices.length > this._highlightPosition) {
          // If we have an option to highlight
          passedEl = choices[this._highlightPosition];
        } else {
          // Otherwise highlight the option before
          passedEl = choices[choices.length - 1];
        }

        if (!passedEl) {
          passedEl = choices[0];
        }
      }

      passedEl.classList.add(this.config.classNames.highlightedState);
      passedEl.setAttribute('aria-selected', 'true');
      this.passedElement.triggerEvent(_constants.EVENTS.highlightChoice, {
        el: passedEl
      });

      if (this.dropdown.isActive) {
        // IE11 ignores aria-label and blocks virtual keyboard
        // if aria-activedescendant is set without a dropdown
        this.input.setActiveDescendant(passedEl.id);
        this.containerOuter.setActiveDescendant(passedEl.id);
      }
    }
  }, {
    key: "_addItem",
    value: function _addItem(_ref13) {
      var value = _ref13.value,
          _ref13$label = _ref13.label,
          label = _ref13$label === void 0 ? null : _ref13$label,
          _ref13$choiceId = _ref13.choiceId,
          choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId,
          _ref13$groupId = _ref13.groupId,
          groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId,
          _ref13$customProperti = _ref13.customProperties,
          customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti,
          _ref13$placeholder = _ref13.placeholder,
          placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder,
          _ref13$keyCode = _ref13.keyCode,
          keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
      var passedValue = (0, _utils.isType)('String', value) ? value.trim() : value;
      var passedKeyCode = keyCode;
      var passedCustomProperties = customProperties;
      var items = this._store.items;
      var passedLabel = label || passedValue;
      var passedOptionId = parseInt(choiceId, 10) || -1;
      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
      var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

      if (this.config.prependValue) {
        passedValue = this.config.prependValue + passedValue.toString();
      } // If an appended value has been passed, append it


      if (this.config.appendValue) {
        passedValue += this.config.appendValue.toString();
      }

      this._store.dispatch((0, _items.addItem)({
        value: passedValue,
        label: passedLabel,
        id: id,
        choiceId: passedOptionId,
        groupId: groupId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: passedKeyCode
      }));

      if (this._isSelectOneElement) {
        this.removeActiveItems(id);
      } // Trigger change event


      this.passedElement.triggerEvent(_constants.EVENTS.addItem, {
        id: id,
        value: passedValue,
        label: passedLabel,
        customProperties: passedCustomProperties,
        groupValue: group && group.value ? group.value : undefined,
        keyCode: passedKeyCode
      });
      return this;
    }
  }, {
    key: "_removeItem",
    value: function _removeItem(item) {
      if (!item || !(0, _utils.isType)('Object', item)) {
        return this;
      }

      var id = item.id,
          value = item.value,
          label = item.label,
          choiceId = item.choiceId,
          groupId = item.groupId;
      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

      this._store.dispatch((0, _items.removeItem)(id, choiceId));

      if (group && group.value) {
        this.passedElement.triggerEvent(_constants.EVENTS.removeItem, {
          id: id,
          value: value,
          label: label,
          groupValue: group.value
        });
      } else {
        this.passedElement.triggerEvent(_constants.EVENTS.removeItem, {
          id: id,
          value: value,
          label: label
        });
      }

      return this;
    }
  }, {
    key: "_addChoice",
    value: function _addChoice(_ref14) {
      var value = _ref14.value,
          _ref14$label = _ref14.label,
          label = _ref14$label === void 0 ? null : _ref14$label,
          _ref14$isSelected = _ref14.isSelected,
          isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected,
          _ref14$isDisabled = _ref14.isDisabled,
          isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled,
          _ref14$groupId = _ref14.groupId,
          groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId,
          _ref14$customProperti = _ref14.customProperties,
          customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti,
          _ref14$placeholder = _ref14.placeholder,
          placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder,
          _ref14$keyCode = _ref14.keyCode,
          keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;

      if (typeof value === 'undefined' || value === null) {
        return;
      } // Generate unique id


      var choices = this._store.choices;
      var choiceLabel = label || value;
      var choiceId = choices ? choices.length + 1 : 1;
      var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);

      this._store.dispatch((0, _choices.addChoice)({
        value: value,
        label: choiceLabel,
        id: choiceId,
        groupId: groupId,
        disabled: isDisabled,
        elementId: choiceElementId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      }));

      if (isSelected) {
        this._addItem({
          value: value,
          label: choiceLabel,
          choiceId: choiceId,
          customProperties: customProperties,
          placeholder: placeholder,
          keyCode: keyCode
        });
      }
    }
  }, {
    key: "_addGroup",
    value: function _addGroup(_ref15) {
      var _this21 = this;

      var group = _ref15.group,
          id = _ref15.id,
          _ref15$valueKey = _ref15.valueKey,
          valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey,
          _ref15$labelKey = _ref15.labelKey,
          labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
      var groupChoices = (0, _utils.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
      var groupId = id || Math.floor(new Date().valueOf() * Math.random());
      var isDisabled = group.disabled ? group.disabled : false;

      if (groupChoices) {
        this._store.dispatch((0, _groups.addGroup)(group.label, groupId, true, isDisabled));

        var addGroupChoices = function addGroupChoices(choice) {
          var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

          _this21._addChoice({
            value: choice[valueKey],
            label: (0, _utils.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
            isSelected: choice.selected,
            isDisabled: isOptDisabled,
            groupId: groupId,
            customProperties: choice.customProperties,
            placeholder: choice.placeholder
          });
        };

        groupChoices.forEach(addGroupChoices);
      } else {
        this._store.dispatch((0, _groups.addGroup)(group.label, group.id, false, group.disabled));
      }
    }
  }, {
    key: "_getTemplate",
    value: function _getTemplate(template) {
      var _templates$template;

      if (!template) {
        return null;
      }

      var _this$config4 = this.config,
          templates = _this$config4.templates,
          classNames = _this$config4.classNames;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_templates$template = templates[template]).call.apply(_templates$template, [this, classNames].concat(args));
    }
  }, {
    key: "_createTemplates",
    value: function _createTemplates() {
      var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
      var userTemplates = {};

      if (callbackOnCreateTemplates && (0, _utils.isType)('Function', callbackOnCreateTemplates)) {
        userTemplates = callbackOnCreateTemplates.call(this, _utils.strToEl);
      }

      this.config.templates = (0, _deepmerge.default)(_templates.TEMPLATES, userTemplates);
    }
  }, {
    key: "_createElements",
    value: function _createElements() {
      this.containerOuter = new _components.Container({
        element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
        classNames: this.config.classNames,
        type: this.passedElement.element.type,
        position: this.config.position
      });
      this.containerInner = new _components.Container({
        element: this._getTemplate('containerInner'),
        classNames: this.config.classNames,
        type: this.passedElement.element.type,
        position: this.config.position
      });
      this.input = new _components.Input({
        element: this._getTemplate('input'),
        classNames: this.config.classNames,
        type: this.passedElement.element.type
      });
      this.choiceList = new _components.List({
        element: this._getTemplate('choiceList', this._isSelectOneElement)
      });
      this.itemList = new _components.List({
        element: this._getTemplate('itemList', this._isSelectOneElement)
      });
      this.dropdown = new _components.Dropdown({
        element: this._getTemplate('dropdown'),
        classNames: this.config.classNames,
        type: this.passedElement.element.type
      });
    }
  }, {
    key: "_createStructure",
    value: function _createStructure() {
      // Hide original element
      this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

      this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

      this.containerOuter.wrap(this.containerInner.element);

      if (this._isSelectOneElement) {
        this.input.placeholder = this.config.searchPlaceholderValue || '';
      } else if (this._placeholderValue) {
        this.input.placeholder = this._placeholderValue;
        this.input.setWidth(true);
      }

      this.containerOuter.element.appendChild(this.containerInner.element);
      this.containerOuter.element.appendChild(this.dropdown.element);
      this.containerInner.element.appendChild(this.itemList.element);

      if (!this._isTextElement) {
        this.dropdown.element.appendChild(this.choiceList.element);
      }

      if (!this._isSelectOneElement) {
        this.containerInner.element.appendChild(this.input.element);
      } else if (this.config.searchEnabled) {
        this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
      }

      if (this._isSelectElement) {
        this._addPredefinedChoices();
      } else if (this._isTextElement) {
        this._addPredefinedItems();
      }
    }
  }, {
    key: "_addPredefinedChoices",
    value: function _addPredefinedChoices() {
      var _this22 = this;

      var passedGroups = this.passedElement.optionGroups;
      this._highlightPosition = 0;
      this._isSearching = false;

      this._setLoading(true);

      if (passedGroups && passedGroups.length) {
        // If we have a placeholder option
        var placeholderChoice = this.passedElement.placeholderOption;

        if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
          this._addChoice({
            value: placeholderChoice.value,
            label: placeholderChoice.innerHTML,
            isSelected: placeholderChoice.selected,
            isDisabled: placeholderChoice.disabled,
            placeholder: true
          });
        }

        passedGroups.forEach(function (group) {
          return _this22._addGroup({
            group: group,
            id: group.id || null
          });
        });
      } else {
        var passedOptions = this.passedElement.options;
        var filter = this.config.sortFn;
        var allChoices = this._presetChoices; // Create array of options from option elements

        passedOptions.forEach(function (o) {
          allChoices.push({
            value: o.value,
            label: o.innerHTML,
            selected: o.selected,
            disabled: o.disabled || o.parentNode.disabled,
            placeholder: o.hasAttribute('placeholder'),
            customProperties: o.getAttribute('data-custom-properties')
          });
        }); // If sorting is enabled or the user is searching, filter choices

        if (this.config.shouldSort) allChoices.sort(filter); // Determine whether there is a selected choice

        var hasSelectedChoice = allChoices.some(function (choice) {
          return choice.selected;
        });

        var handleChoice = function handleChoice(choice, index) {
          var value = choice.value,
              label = choice.label,
              customProperties = choice.customProperties,
              placeholder = choice.placeholder;

          if (_this22._isSelectElement) {
            // If the choice is actually a group
            if (choice.choices) {
              _this22._addGroup({
                group: choice,
                id: choice.id || null
              });
            } else {
              // If there is a selected choice already or the choice is not
              // the first in the array, add each choice normally
              // Otherwise pre-select the first choice in the array if it's a single select
              var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === 0;
              var isSelected = shouldPreselect ? true : choice.selected;
              var isDisabled = shouldPreselect ? false : choice.disabled;

              _this22._addChoice({
                value: value,
                label: label,
                isSelected: isSelected,
                isDisabled: isDisabled,
                customProperties: customProperties,
                placeholder: placeholder
              });
            }
          } else {
            _this22._addChoice({
              value: value,
              label: label,
              isSelected: choice.selected,
              isDisabled: choice.disabled,
              customProperties: customProperties,
              placeholder: placeholder
            });
          }
        }; // Add each choice


        allChoices.forEach(function (choice, index) {
          return handleChoice(choice, index);
        });
      }

      this._setLoading(false);
    }
  }, {
    key: "_addPredefinedItems",
    value: function _addPredefinedItems() {
      var _this23 = this;

      var handlePresetItem = function handlePresetItem(item) {
        var itemType = (0, _utils.getType)(item);

        if (itemType === 'Object' && item.value) {
          _this23._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else if (itemType === 'String') {
          _this23._addItem({
            value: item
          });
        }
      };

      this._presetItems.forEach(function (item) {
        return handlePresetItem(item);
      });
    }
  }, {
    key: "_setChoiceOrItem",
    value: function _setChoiceOrItem(item) {
      var _this24 = this;

      var itemType = (0, _utils.getType)(item).toLowerCase();
      var handleType = {
        object: function object() {
          if (!item.value) {
            return;
          } // If we are dealing with a select input, we need to create an option first
          // that is then selected. For text inputs we can just add items normally.


          if (!_this24._isTextElement) {
            _this24._addChoice({
              value: item.value,
              label: item.label,
              isSelected: true,
              isDisabled: false,
              customProperties: item.customProperties,
              placeholder: item.placeholder
            });
          } else {
            _this24._addItem({
              value: item.value,
              label: item.label,
              choiceId: item.id,
              customProperties: item.customProperties,
              placeholder: item.placeholder
            });
          }
        },
        string: function string() {
          if (!_this24._isTextElement) {
            _this24._addChoice({
              value: item,
              label: item,
              isSelected: true,
              isDisabled: false
            });
          } else {
            _this24._addItem({
              value: item
            });
          }
        }
      };
      handleType[itemType]();
    }
  }, {
    key: "_findAndSelectChoiceByValue",
    value: function _findAndSelectChoiceByValue(val) {
      var _this25 = this;

      var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

      var foundChoice = choices.find(function (choice) {
        return _this25.config.itemComparer(choice.value, val);
      });

      if (foundChoice && !foundChoice.selected) {
        this._addItem({
          value: foundChoice.value,
          label: foundChoice.label,
          choiceId: foundChoice.id,
          groupId: foundChoice.groupId,
          customProperties: foundChoice.customProperties,
          placeholder: foundChoice.placeholder,
          keyCode: foundChoice.keyCode
        });
      }
    }
  }, {
    key: "_generateInstances",
    value: function _generateInstances(elements, config) {
      return elements.reduce(function (instances, element) {
        instances.push(new Choices(element, config));
        return instances;
      }, [this]);
    }
  }, {
    key: "_generatePlaceholderValue",
    value: function _generatePlaceholderValue() {
      if (this._isSelectOneElement) {
        return false;
      }

      return this.config.placeholder ? this.config.placeholderValue || this.passedElement.element.getAttribute('placeholder') : false;
    }
    /* =====  End of Private functions  ====== */

  }]);

  return Choices;
}();

Choices.userDefaults = {}; // We cannot export default here due to Webpack: https://github.com/webpack/webpack/issues/3929

module.exports = Choices;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bitap/bitap_matched_indices.js":
/*!********************************************!*\
  !*** ./src/bitap/bitap_matched_indices.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];

    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;

      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }

      start = -1;
    }
  } // (i-1 - start) + 1 => i - start


  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),

/***/ "./src/bitap/bitap_pattern_alphabet.js":
/*!*********************************************!*\
  !*** ./src/bitap/bitap_pattern_alphabet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),

/***/ "./src/bitap/bitap_regex_search.js":
/*!*****************************************!*\
  !*** ./src/bitap/bitap_regex_search.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;
  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),

/***/ "./src/bitap/bitap_score.js":
/*!**********************************!*\
  !*** ./src/bitap/bitap_score.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 100 : _ref$distance;
  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),

/***/ "./src/bitap/bitap_search.js":
/*!***********************************!*\
  !*** ./src/bitap/bitap_search.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bitapScore = __webpack_require__(/*! ./bitap_score */ "./src/bitap/bitap_score.js");

var matchedIndices = __webpack_require__(/*! ./bitap_matched_indices */ "./src/bitap/bitap_matched_indices.js");

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === void 0 ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng;
  var expectedLocation = location; // Set starting location at beginning text and initialize the alphabet.

  var textLen = text.length; // Highest score beyond which we give up.

  var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

  var bestLocation = text.indexOf(pattern, expectedLocation);
  var patternLen = pattern.length; // a mask of the matches

  var matchMask = [];

  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold); // What about in the other direction? (speed up)

    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });

      currentThreshold = Math.min(_score, currentThreshold);
    }
  } // Reset the best location


  bestLocation = -1;
  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;
  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    } // Use the result from this iteration as the maximum for the next.


    binMax = binMid;
    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

    var bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      } // First pass: exact match


      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        }); // This match will almost certainly be better than any existing match.
        // But check anyway.

        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

          if (bestLocation <= expectedLocation) {
            break;
          } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    } // No hope for a (better) match at greater error levels.


    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    }); // console.log('score', score, finalScore)


    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  } // console.log('FINAL SCORE', finalScore)
  // Count exact matches (those with a score of 0) to be "almost" exact


  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),

/***/ "./src/bitap/index.js":
/*!****************************!*\
  !*** ./src/bitap/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bitapRegexSearch = __webpack_require__(/*! ./bitap_regex_search */ "./src/bitap/bitap_regex_search.js");

var bitapSearch = __webpack_require__(/*! ./bitap_search */ "./src/bitap/bitap_search.js");

var patternAlphabet = __webpack_require__(/*! ./bitap_pattern_alphabet */ "./src/bitap/bitap_pattern_alphabet.js");

var Bitap =
/*#__PURE__*/
function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === void 0 ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === void 0 ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === void 0 ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === void 0 ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };
    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: "search",
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      } // Exact match


      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      } // When pattern length is greater than the machine word length, just do a a regex comparison


      var _this$options = this.options,
          maxPatternLength = _this$options.maxPatternLength,
          tokenSeparator = _this$options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      } // Otherwise, use Bitap algorithm


      var _this$options2 = this.options,
          location = _this$options2.location,
          distance = _this$options2.distance,
          threshold = _this$options2.threshold,
          findAllMatches = _this$options2.findAllMatches,
          minMatchCharLength = _this$options2.minMatchCharLength;
      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}(); // let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)


module.exports = Bitap;

/***/ }),

/***/ "./src/helpers/deep_value.js":
/*!***********************************!*\
  !*** ./src/helpers/deep_value.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./is_array */ "./src/helpers/is_array.js");

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),

/***/ "./src/helpers/is_array.js":
/*!*********************************!*\
  !*** ./src/helpers/is_array.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bitap = __webpack_require__(/*! ./bitap */ "./src/bitap/index.js");

var deepValue = __webpack_require__(/*! ./helpers/deep_value */ "./src/helpers/deep_value.js");

var isArray = __webpack_require__(/*! ./helpers/is_array */ "./src/helpers/is_array.js");

var Fuse =
/*#__PURE__*/
function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === void 0 ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === void 0 ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === void 0 ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === void 0 ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === void 0 ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === void 0 ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === void 0 ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === void 0 ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === void 0 ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === void 0 ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === void 0 ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };
    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: "setCollection",
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: "search",
    value: function search(pattern) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        limit: false
      };

      this._log("---------\nSearch pattern: \"".concat(pattern, "\""));

      var _this$_prepareSearche = this._prepareSearchers(pattern),
          tokenSearchers = _this$_prepareSearche.tokenSearchers,
          fullSearcher = _this$_prepareSearche.fullSearcher;

      var _this$_search = this._search(tokenSearchers, fullSearcher),
          weights = _this$_search.weights,
          results = _this$_search.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      if (opts.limit && typeof opts.limit === 'number') {
        results = results.slice(0, opts.limit);
      }

      return this._format(results);
    }
  }, {
    key: "_prepareSearchers",
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);

        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);
      return {
        tokenSearchers: tokenSearchers,
        fullSearcher: fullSearcher
      };
    }
  }, {
    key: "_search",
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments.length > 1 ? arguments[1] : undefined;
      var list = this.list;
      var resultMap = {};
      var results = []; // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.

      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return {
          weights: null,
          results: results
        };
      } // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.


      var weights = {};

      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i]; // Iterate over every key

        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];

          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };

            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }

            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return {
        weights: weights,
        results: results
      };
    }
  }, {
    key: "_analyze",
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === void 0 ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === void 0 ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === void 0 ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === void 0 ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === void 0 ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log("\nKey: ".concat(key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);

        this._log("Full text: \"".concat(value, "\", score: ").concat(mainSearchResult.score));

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log("\nPattern: \"".concat(tokenSearcher.pattern, "\"")); // let tokenScores = []


            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};

              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;

                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }

              this._log("Token: \"".concat(word, "\", score: ").concat(obj[word])); // tokenScores.push(obj)

            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;

          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }

          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;

        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log("\nCheck Matches: ".concat(checkTextMatches)); // If a match is found, add the item to <rawResults>, including its score


        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];

          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };
            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: "_computeScore",
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;
        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: "_sort",
    value: function _sort(results) {
      this._log('\n\nSorting....');

      results.sort(this.options.sortFn);
    }
  }, {
    key: "_format",
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        var cache = [];

        this._log('\n\nOutput:\n\n', JSON.stringify(results, function (key, value) {
          if (_typeof(value) === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            } // Store value in our collection


            cache.push(value);
          }

          return value;
        }));

        cache = null;
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };

            if (item.key) {
              obj.key = item.key;
            }

            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }

            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: "_log",
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })

/******/ });
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(6);

var _index = _interopRequireDefault(__webpack_require__(15));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Store =
/*#__PURE__*/
function () {
  function Store() {
    _classCallCheck(this, Store);

    this._store = (0, _redux.createStore)(_index.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  /**
   * Subscribe store to function call (wrapped Redux method)
   * @param  {Function} onChange Function to trigger when state changes
   * @return
   */


  _createClass(Store, [{
    key: "subscribe",
    value: function subscribe(onChange) {
      this._store.subscribe(onChange);
    }
    /**
     * Dispatch event to store (wrapped Redux method)
     * @param  {Function} action Action function to trigger
     * @return
     */

  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this._store.dispatch(action);
    }
    /**
     * Get store object (wrapping Redux method)
     * @return {Object} State
     */

  }, {
    key: "isLoading",

    /**
     * Get loading state from store
     * @return {Boolean} Loading State
     */
    value: function isLoading() {
      return this.state.general.loading;
    }
    /**
     * Get single choice by it's ID
     * @return {Object} Found choice
     */

  }, {
    key: "getChoiceById",
    value: function getChoiceById(id) {
      if (id) {
        var choices = this.activeChoices;
        var foundChoice = choices.find(function (choice) {
          return choice.id === parseInt(id, 10);
        });
        return foundChoice;
      }

      return false;
    }
    /**
     * Get group by group id
     * @param  {Number} id Group ID
     * @return {Object}    Group data
     */

  }, {
    key: "getGroupById",
    value: function getGroupById(id) {
      return this.groups.find(function (group) {
        return group.id === parseInt(id, 10);
      });
    }
  }, {
    key: "state",
    get: function get() {
      return this._store.getState();
    }
    /**
     * Get items from store
     * @return {Array} Item objects
     */

  }, {
    key: "items",
    get: function get() {
      return this.state.items;
    }
    /**
     * Get active items from store
     * @return {Array} Item objects
     */

  }, {
    key: "activeItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    }
    /**
     * Get highlighted items from store
     * @return {Array} Item objects
     */

  }, {
    key: "highlightedActiveItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    }
    /**
     * Get choices from store
     * @return {Array} Option objects
     */

  }, {
    key: "choices",
    get: function get() {
      return this.state.choices;
    }
    /**
     * Get active choices from store
     * @return {Array} Option objects
     */

  }, {
    key: "activeChoices",
    get: function get() {
      var choices = this.choices;
      var values = choices.filter(function (choice) {
        return choice.active === true;
      });
      return values;
    }
    /**
     * Get selectable choices from store
     * @return {Array} Option objects
     */

  }, {
    key: "selectableChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    }
    /**
     * Get choices that can be searched (excluding placeholders)
     * @return {Array} Option objects
     */

  }, {
    key: "searchableChoices",
    get: function get() {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    }
    /**
     * Get placeholder choice from store
     * @return {Object} Found placeholder
     */

  }, {
    key: "placeholderChoice",
    get: function get() {
      return [].concat(this.choices).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    }
    /**
     * Get groups from store
     * @return {Array} Group objects
     */

  }, {
    key: "groups",
    get: function get() {
      return this.state.groups;
    }
    /**
     * Get active groups from store
     * @return {Array} Group objects
     */

  }, {
    key: "activeGroups",
    get: function get() {
      var groups = this.groups;
      var choices = this.choices;
      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(6);

var _items = _interopRequireDefault(__webpack_require__(16));

var _groups = _interopRequireDefault(__webpack_require__(17));

var _choices = _interopRequireDefault(__webpack_require__(18));

var _general = _interopRequireDefault(__webpack_require__(19));

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
  items: _items.default,
  groups: _groups.default,
  choices: _choices.default,
  general: _general.default
});

var rootReducer = function rootReducer(passedState, action) {
  var state = passedState; // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992

  if (action.type === 'CLEAR_ALL') {
    state = undefined;
  } else if (action.type === 'RESET_TO') {
    return (0, _utils.cloneObject)(action.state);
  }

  return appReducer(state, action);
};

var _default = rootReducer;
exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = items;
exports.defaultState = void 0;
var defaultState = [];
exports.defaultState = defaultState;

function items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_ITEM':
      {
        // Add object to items array
        var newState = [].concat(state, [{
          id: action.id,
          choiceId: action.choiceId,
          groupId: action.groupId,
          value: action.value,
          label: action.label,
          active: true,
          highlighted: false,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }

    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.active = false;
          }

          return item;
        });
      }

    case 'HIGHLIGHT_ITEM':
      {
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.highlighted = action.highlighted;
          }

          return item;
        });
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groups;
exports.defaultState = void 0;
var defaultState = [];
exports.defaultState = defaultState;

function groups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_GROUP':
      {
        return [].concat(state, [{
          id: action.id,
          value: action.value,
          active: action.active,
          disabled: action.disabled
        }]);
      }

    case 'CLEAR_CHOICES':
      {
        return [];
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = choices;
exports.defaultState = void 0;
var defaultState = [];
exports.defaultState = defaultState;

function choices() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_CHOICE':
      {
        /*
            A disabled choice appears in the choice dropdown but cannot be selected
            A selected choice has been added to the passed input's value (added as an item)
            An active choice appears within the choice dropdown
         */
        return [].concat(state, [{
          id: action.id,
          elementId: action.elementId,
          groupId: action.groupId,
          value: action.value,
          label: action.label || action.value,
          disabled: action.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
      }

    case 'ADD_ITEM':
      {
        // If all choices need to be activated
        if (action.activateOptions) {
          return state.map(function (obj) {
            var choice = obj;
            choice.active = action.active;
            return choice;
          });
        } // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again


        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = true;
            }

            return choice;
          });
        }

        return state;
      }

    case 'REMOVE_ITEM':
      {
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = false;
            }

            return choice;
          });
        }

        return state;
      }

    case 'FILTER_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj; // Set active state based on whether choice is
          // within filtered results

          choice.active = action.results.some(function (_ref) {
            var item = _ref.item,
                score = _ref.score;

            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }

            return false;
          });
          return choice;
        });
      }

    case 'ACTIVATE_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj;
          choice.active = action.active;
          return choice;
        });
      }

    case 'CLEAR_CHOICES':
      {
        return defaultState;
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultState = void 0;
var defaultState = {
  loading: false
};
exports.defaultState = defaultState;

var general = function general() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_IS_LOADING':
      {
        return {
          loading: action.isLoading
        };
      }

    default:
      {
        return state;
      }
  }
};

var _default = general;
exports.default = _default;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _dropdown.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function get() {
    return _container.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _input.default;
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _list.default;
  }
});
Object.defineProperty(exports, "WrappedInput", {
  enumerable: true,
  get: function get() {
    return _wrappedInput.default;
  }
});
Object.defineProperty(exports, "WrappedSelect", {
  enumerable: true,
  get: function get() {
    return _wrappedSelect.default;
  }
});

var _dropdown = _interopRequireDefault(__webpack_require__(21));

var _container = _interopRequireDefault(__webpack_require__(22));

var _input = _interopRequireDefault(__webpack_require__(23));

var _list = _interopRequireDefault(__webpack_require__(24));

var _wrappedInput = _interopRequireDefault(__webpack_require__(25));

var _wrappedSelect = _interopRequireDefault(__webpack_require__(26));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames;

    _classCallCheck(this, Dropdown);

    Object.assign(this, {
      element: element,
      type: type,
      classNames: classNames
    });
    this.isActive = false;
  }
  /**
   * Determine how far the top of our element is from
   * the top of the window
   * @return {Number} Vertical position
   */


  _createClass(Dropdown, [{
    key: "distanceFromTopWindow",
    value: function distanceFromTopWindow() {
      this.dimensions = this.element.getBoundingClientRect();
      this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight);
      return this.position;
    }
    /**
     * Find element that matches passed selector
     * @return {HTMLElement}
     */

  }, {
    key: "getChild",
    value: function getChild(selector) {
      return this.element.querySelector(selector);
    }
    /**
     * Show dropdown to user by adding active state class
     * @return {Object} Class instance
     * @public
     */

  }, {
    key: "show",
    value: function show() {
      this.element.classList.add(this.classNames.activeState);
      this.element.setAttribute('aria-expanded', 'true');
      this.isActive = true;
      return this;
    }
    /**
     * Hide dropdown from user
     * @return {Object} Class instance
     * @public
     */

  }, {
    key: "hide",
    value: function hide() {
      this.element.classList.remove(this.classNames.activeState);
      this.element.setAttribute('aria-expanded', 'false');
      this.isActive = false;
      return this;
    }
  }]);

  return Dropdown;
}();

exports.default = Dropdown;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container =
/*#__PURE__*/
function () {
  function Container(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        position = _ref.position;

    _classCallCheck(this, Container);

    Object.assign(this, {
      element: element,
      classNames: classNames,
      type: type,
      position: position
    });
    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  /**
   * Add event listeners
   */


  _createClass(Container, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      this.element.addEventListener('focus', this._onFocus);
      this.element.addEventListener('blur', this._onBlur);
    }
    /**
     * Remove event listeners
     */

    /** */

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.element.removeEventListener('focus', this._onFocus);
      this.element.removeEventListener('blur', this._onBlur);
    }
    /**
     * Determine whether container should be flipped
     * based on passed dropdown position
     * @param {Number} dropdownPos
     * @returns
     */

  }, {
    key: "shouldFlip",
    value: function shouldFlip(dropdownPos) {
      var windowHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.getWindowHeight)();

      if (dropdownPos === undefined) {
        return false;
      } // If flip is enabled and the dropdown bottom position is
      // greater than the window height flip the dropdown.


      var shouldFlip = false;

      if (this.position === 'auto') {
        shouldFlip = dropdownPos >= windowHeight;
      } else if (this.position === 'top') {
        shouldFlip = true;
      }

      return shouldFlip;
    }
    /**
     * Set active descendant attribute
     * @param {Number} activeDescendant ID of active descendant
     */

  }, {
    key: "setActiveDescendant",
    value: function setActiveDescendant(activeDescendantID) {
      this.element.setAttribute('aria-activedescendant', activeDescendantID);
    }
    /**
     * Remove active descendant attribute
     */

  }, {
    key: "removeActiveDescendant",
    value: function removeActiveDescendant() {
      this.element.removeAttribute('aria-activedescendant');
    }
  }, {
    key: "open",
    value: function open(dropdownPos) {
      this.element.classList.add(this.classNames.openState);
      this.element.setAttribute('aria-expanded', 'true');
      this.isOpen = true;

      if (this.shouldFlip(dropdownPos)) {
        this.element.classList.add(this.classNames.flippedState);
        this.isFlipped = true;
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.element.classList.remove(this.classNames.openState);
      this.element.setAttribute('aria-expanded', 'false');
      this.removeActiveDescendant();
      this.isOpen = false; // A dropdown flips if it does not have space within the page

      if (this.isFlipped) {
        this.element.classList.remove(this.classNames.flippedState);
        this.isFlipped = false;
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (!this.isFocussed) {
        this.element.focus();
      }
    }
  }, {
    key: "addFocusState",
    value: function addFocusState() {
      this.element.classList.add(this.classNames.focusState);
    }
  }, {
    key: "removeFocusState",
    value: function removeFocusState() {
      this.element.classList.remove(this.classNames.focusState);
    }
    /**
     * Remove disabled state
     */

  }, {
    key: "enable",
    value: function enable() {
      this.element.classList.remove(this.classNames.disabledState);
      this.element.removeAttribute('aria-disabled');

      if (this.type === 'select-one') {
        this.element.setAttribute('tabindex', '0');
      }

      this.isDisabled = false;
    }
    /**
     * Set disabled state
     */

  }, {
    key: "disable",
    value: function disable() {
      this.element.classList.add(this.classNames.disabledState);
      this.element.setAttribute('aria-disabled', 'true');

      if (this.type === 'select-one') {
        this.element.setAttribute('tabindex', '-1');
      }

      this.isDisabled = true;
    }
  }, {
    key: "wrap",
    value: function wrap(element) {
      (0, _utils.wrap)(element, this.element);
    }
  }, {
    key: "unwrap",
    value: function unwrap(element) {
      // Move passed element outside this element
      this.element.parentNode.insertBefore(element, this.element); // Remove this element

      this.element.parentNode.removeChild(this.element);
    }
    /**
     * Add loading state to element
     */

  }, {
    key: "addLoadingState",
    value: function addLoadingState() {
      this.element.classList.add(this.classNames.loadingState);
      this.element.setAttribute('aria-busy', 'true');
      this.isLoading = true;
    }
    /**
     * Remove loading state from element
     */

  }, {
    key: "removeLoadingState",
    value: function removeLoadingState() {
      this.element.classList.remove(this.classNames.loadingState);
      this.element.removeAttribute('aria-busy');
      this.isLoading = false;
    }
    /**
     * Set focussed state
     */

  }, {
    key: "_onFocus",
    value: function _onFocus() {
      this.isFocussed = true;
    }
    /**
     * Remove blurred state
     */

  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this.isFocussed = false;
    }
  }]);

  return Container;
}();

exports.default = Container;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Input =
/*#__PURE__*/
function () {
  function Input(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        placeholderValue = _ref.placeholderValue;

    _classCallCheck(this, Input);

    Object.assign(this, {
      element: element,
      type: type,
      classNames: classNames,
      placeholderValue: placeholderValue
    });
    this.element = element;
    this.classNames = classNames;
    this.isFocussed = this.element === document.activeElement;
    this.isDisabled = false;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _createClass(Input, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      this.element.addEventListener('input', this._onInput);
      this.element.addEventListener('paste', this._onPaste);
      this.element.addEventListener('focus', this._onFocus);
      this.element.addEventListener('blur', this._onBlur);

      if (this.element.form) {
        this.element.form.addEventListener('reset', this._onFormReset);
      }
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      this.element.removeEventListener('input', this._onInput);
      this.element.removeEventListener('paste', this._onPaste);
      this.element.removeEventListener('focus', this._onFocus);
      this.element.removeEventListener('blur', this._onBlur);

      if (this.element.form) {
        this.element.form.removeEventListener('reset', this._onFormReset);
      }
    }
  }, {
    key: "enable",
    value: function enable() {
      this.element.removeAttribute('disabled');
      this.isDisabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      this.element.setAttribute('disabled', '');
      this.isDisabled = true;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (!this.isFocussed) {
        this.element.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.isFocussed) {
        this.element.blur();
      }
    }
    /**
     * Set value of input to blank
     * @return {Object} Class instance
     * @public
     */

  }, {
    key: "clear",
    value: function clear() {
      var setWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.element.value) {
        this.element.value = '';
      }

      if (setWidth) {
        this.setWidth();
      }

      return this;
    }
    /**
     * Set the correct input width based on placeholder
     * value or input value
     * @return
     */

  }, {
    key: "setWidth",
    value: function setWidth(enforceWidth) {
      var _this = this;

      var callback = function callback(width) {
        _this.element.style.width = width;
      };

      if (this._placeholderValue) {
        // If there is a placeholder, we only want to set the width of the input when it is a greater
        // length than 75% of the placeholder. This stops the input jumping around.
        var valueHasDesiredLength = this.element.value.length >= this._placeholderValue.length / 1.25;

        if (this.element.value && valueHasDesiredLength || enforceWidth) {
          this.calcWidth(callback);
        }
      } else {
        // If there is no placeholder, resize input to contents
        this.calcWidth(callback);
      }
    }
  }, {
    key: "calcWidth",
    value: function calcWidth(callback) {
      return (0, _utils.calcWidthOfInput)(this.element, callback);
    }
  }, {
    key: "setActiveDescendant",
    value: function setActiveDescendant(activeDescendantID) {
      this.element.setAttribute('aria-activedescendant', activeDescendantID);
    }
  }, {
    key: "removeActiveDescendant",
    value: function removeActiveDescendant() {
      this.element.removeAttribute('aria-activedescendant');
    }
  }, {
    key: "_onInput",
    value: function _onInput() {
      if (this.type !== 'select-one') {
        this.setWidth();
      }
    }
  }, {
    key: "_onPaste",
    value: function _onPaste(event) {
      var target = event.target;

      if (target === this.element && this.preventPaste) {
        event.preventDefault();
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      this.isFocussed = true;
    }
  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this.isFocussed = false;
    }
  }, {
    key: "placeholder",
    set: function set(placeholder) {
      this.element.placeholder = placeholder;
    }
  }, {
    key: "value",
    set: function set(value) {
      this.element.value = value;
    },
    get: function get() {
      return (0, _utils.sanitise)(this.element.value);
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List(_ref) {
    var element = _ref.element;

    _classCallCheck(this, List);

    Object.assign(this, {
      element: element
    });
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
    this.hasChildren = !!this.element.children;
  }

  _createClass(List, [{
    key: "clear",
    value: function clear() {
      this.element.innerHTML = '';
    }
  }, {
    key: "append",
    value: function append(node) {
      this.element.appendChild(node);
    }
  }, {
    key: "getChild",
    value: function getChild(selector) {
      return this.element.querySelector(selector);
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.element.scrollTop = 0;
    }
  }, {
    key: "scrollToChoice",
    value: function scrollToChoice(choice, direction) {
      var _this = this;

      if (!choice) {
        return;
      }

      var dropdownHeight = this.element.offsetHeight;
      var choiceHeight = choice.offsetHeight; // Distance from bottom of element to top of parent

      var choicePos = choice.offsetTop + choiceHeight; // Scroll position of dropdown

      var containerScrollPos = this.element.scrollTop + dropdownHeight; // Difference between the choice and scroll position

      var endpoint = direction > 0 ? this.element.scrollTop + choicePos - containerScrollPos : choice.offsetTop;
      requestAnimationFrame(function (time) {
        _this._animateScroll(time, endpoint, direction);
      });
    }
  }, {
    key: "_scrollDown",
    value: function _scrollDown(scrollPos, strength, endpoint) {
      var easing = (endpoint - scrollPos) / strength;
      var distance = easing > 1 ? easing : 1;
      this.element.scrollTop = scrollPos + distance;
    }
  }, {
    key: "_scrollUp",
    value: function _scrollUp(scrollPos, strength, endpoint) {
      var easing = (scrollPos - endpoint) / strength;
      var distance = easing > 1 ? easing : 1;
      this.element.scrollTop = scrollPos - distance;
    }
  }, {
    key: "_animateScroll",
    value: function _animateScroll(time, endpoint, direction) {
      var _this2 = this;

      var strength = _constants.SCROLLING_SPEED;
      var choiceListScrollTop = this.element.scrollTop;
      var continueAnimation = false;

      if (direction > 0) {
        this._scrollDown(choiceListScrollTop, strength, endpoint);

        if (choiceListScrollTop < endpoint) {
          continueAnimation = true;
        }
      } else {
        this._scrollUp(choiceListScrollTop, strength, endpoint);

        if (choiceListScrollTop > endpoint) {
          continueAnimation = true;
        }
      }

      if (continueAnimation) {
        requestAnimationFrame(function () {
          _this2._animateScroll(time, endpoint, direction);
        });
      }
    }
  }]);

  return List;
}();

exports.default = List;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wrappedElement = _interopRequireDefault(__webpack_require__(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WrappedInput =
/*#__PURE__*/
function (_WrappedElement) {
  _inherits(WrappedInput, _WrappedElement);

  function WrappedInput(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        delimiter = _ref.delimiter;

    _classCallCheck(this, WrappedInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedInput).call(this, {
      element: element,
      classNames: classNames
    }));
    _this.delimiter = delimiter;
    return _this;
  }

  _createClass(WrappedInput, [{
    key: "value",
    set: function set(items) {
      var itemValues = items.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });
      var joinedValues = itemValues.join(this.delimiter);
      this.element.setAttribute('value', joinedValues);
      this.element.value = joinedValues;
    } // @todo figure out why we need this? Perhaps a babel issue
    ,
    get: function get() {
      return _get(_getPrototypeOf(WrappedInput.prototype), "value", this);
    }
  }]);

  return WrappedInput;
}(_wrappedElement.default);

exports.default = WrappedInput;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wrappedElement = _interopRequireDefault(__webpack_require__(4));

var _templates = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var WrappedSelect =
/*#__PURE__*/
function (_WrappedElement) {
  _inherits(WrappedSelect, _WrappedElement);

  function WrappedSelect(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;

    _classCallCheck(this, WrappedSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(WrappedSelect).call(this, {
      element: element,
      classNames: classNames
    }));
  }

  _createClass(WrappedSelect, [{
    key: "appendDocFragment",
    value: function appendDocFragment(fragment) {
      this.element.innerHTML = '';
      this.element.appendChild(fragment);
    }
  }, {
    key: "placeholderOption",
    get: function get() {
      return this.element.querySelector('option[placeholder]');
    }
  }, {
    key: "optionGroups",
    get: function get() {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    }
  }, {
    key: "options",
    get: function get() {
      return Array.from(this.element.options);
    },
    set: function set(options) {
      var fragment = document.createDocumentFragment();

      var addOptionToFragment = function addOptionToFragment(data) {
        // Create a standard select option
        var template = _templates.default.option(data); // Append it to fragment


        fragment.appendChild(template);
      }; // Add each list item to list


      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });
      this.appendDocFragment(fragment);
    }
  }]);

  return WrappedSelect;
}(_wrappedElement.default);

exports.default = WrappedSelect;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;

var _constants = __webpack_require__(1);

var addChoice = function addChoice(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      groupId = _ref.groupId,
      disabled = _ref.disabled,
      elementId = _ref.elementId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: _constants.ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};

exports.addChoice = addChoice;

var filterChoices = function filterChoices(results) {
  return {
    type: _constants.ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};

exports.filterChoices = filterChoices;

var activateChoices = function activateChoices() {
  var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: _constants.ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};

exports.activateChoices = activateChoices;

var clearChoices = function clearChoices() {
  return {
    type: _constants.ACTION_TYPES.CLEAR_CHOICES
  };
};

exports.clearChoices = clearChoices;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highlightItem = exports.removeItem = exports.addItem = void 0;

var _constants = __webpack_require__(1);

var addItem = function addItem(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      choiceId = _ref.choiceId,
      groupId = _ref.groupId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: _constants.ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};

exports.addItem = addItem;

var removeItem = function removeItem(id, choiceId) {
  return {
    type: _constants.ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};

exports.removeItem = removeItem;

var highlightItem = function highlightItem(id, highlighted) {
  return {
    type: _constants.ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};

exports.highlightItem = highlightItem;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroup = void 0;

var _constants = __webpack_require__(1);

/* eslint-disable import/prefer-default-export */
var addGroup = function addGroup(value, id, active, disabled) {
  return {
    type: _constants.ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};

exports.addGroup = addGroup;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetTo = exports.clearAll = void 0;

var clearAll = function clearAll() {
  return {
    type: 'CLEAR_ALL'
  };
};

exports.clearAll = clearAll;

var resetTo = function resetTo(state) {
  return {
    type: 'RESET_TO',
    state: state
  };
};

exports.resetTo = resetTo;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIsLoading = void 0;

/* eslint-disable import/prefer-default-export */
var setIsLoading = function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    isLoading: isLoading
  };
};

exports.setIsLoading = setIsLoading;

/***/ })
/******/ ]);
});
},{}],2:[function(_dereq_,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rangeSlider", [], factory);
	else if(typeof exports === 'object')
		exports["rangeSlider"] = factory();
	else
		root["rangeSlider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/range-slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/range-slider.css":
/*!******************************!*\
  !*** ./src/range-slider.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/range-slider.js":
/*!*****************************!*\
  !*** ./src/range-slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = __webpack_require__(/*! ./utils/dom */ "./src/utils/dom.js");

var dom = _interopRequireWildcard(_dom);

var _functions = __webpack_require__(/*! ./utils/functions */ "./src/utils/functions.js");

var func = _interopRequireWildcard(_functions);

__webpack_require__(/*! ./range-slider.css */ "./src/range-slider.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newLineAndTabRegexp = new RegExp('/[\\n\\t]/', 'g');
var MAX_SET_BY_DEFAULT = 100;
var HANDLE_RESIZE_DELAY = 300;
var HANDLE_RESIZE_DEBOUNCE = 50;

var pluginName = 'rangeSlider';
var inputrange = dom.supportsRange();
var defaults = {
  polyfill: true,
  rangeClass: 'rangeSlider',
  disabledClass: 'rangeSlider--disabled',
  fillClass: 'rangeSlider__fill',
  bufferClass: 'rangeSlider__buffer',
  handleClass: 'rangeSlider__handle',
  startEvent: ['mousedown', 'touchstart', 'pointerdown'],
  moveEvent: ['mousemove', 'touchmove', 'pointermove'],
  endEvent: ['mouseup', 'touchend', 'pointerup'],
  min: null,
  max: null,
  step: null,
  value: null,
  buffer: null,
  stick: null,
  borderRadius: 10,
  vertical: false
};

/**
 * Plugin
 * @param {HTMLElement} element
 * @param {this} options
 */

var RangeSlider = function () {
  function RangeSlider(element, options) {
    _classCallCheck(this, RangeSlider);

    var minSetByDefault = void 0;
    var maxSetByDefault = void 0;
    var stepSetByDefault = void 0;
    var stickAttribute = void 0;
    var stickValues = void 0;

    this.element = element;
    this.options = func.simpleExtend(defaults, options);
    this.polyfill = this.options.polyfill;
    this.vertical = this.options.vertical;
    this.onInit = this.options.onInit;
    this.onSlide = this.options.onSlide;
    this.onSlideStart = this.options.onSlideStart;
    this.onSlideEnd = this.options.onSlideEnd;
    this.onSlideEventsCount = -1;
    this.isInteractsNow = false;
    this.needTriggerEvents = false;

    // Plugin should only be used as a polyfill
    if (!this.polyfill) {
      // Input range support?
      if (inputrange) {
        return;
      }
    }

    this.options.buffer = this.options.buffer || parseFloat(this.element.getAttribute('data-buffer'));

    this.identifier = 'js-' + pluginName + '-' + func.uuid();

    this.min = func.getFirsNumberLike(this.options.min, parseFloat(this.element.getAttribute('min')), minSetByDefault = 0);

    this.max = func.getFirsNumberLike(this.options.max, parseFloat(this.element.getAttribute('max')), maxSetByDefault = MAX_SET_BY_DEFAULT);

    this.value = func.getFirsNumberLike(this.options.value, this.element.value, parseFloat(this.element.value || this.min + (this.max - this.min) / 2));

    this.step = func.getFirsNumberLike(this.options.step, parseFloat(this.element.getAttribute('step')) || (stepSetByDefault = 1));

    this.percent = null;

    if (func.isArray(this.options.stick) && this.options.stick.length >= 1) {
      this.stick = this.options.stick;
    } else if (stickAttribute = this.element.getAttribute('stick')) {
      stickValues = stickAttribute.split(' ');
      if (stickValues.length >= 1) {
        this.stick = stickValues.map(parseFloat);
      }
    }
    if (this.stick && this.stick.length === 1) {
      this.stick.push(this.step * 1.5);
    }
    this._updatePercentFromValue();

    this.toFixed = this._toFixed(this.step);

    var directionClass = void 0;

    this.container = document.createElement('div');
    dom.addClass(this.container, this.options.fillClass);

    directionClass = this.vertical ? this.options.fillClass + '__vertical' : this.options.fillClass + '__horizontal';
    dom.addClass(this.container, directionClass);

    this.handle = document.createElement('div');
    dom.addClass(this.handle, this.options.handleClass);

    directionClass = this.vertical ? this.options.handleClass + '__vertical' : this.options.handleClass + '__horizontal';
    dom.addClass(this.handle, directionClass);

    this.range = document.createElement('div');
    dom.addClass(this.range, this.options.rangeClass);
    this.range.id = this.identifier;

    if (this.options.bufferClass) {
      this.buffer = document.createElement('div');
      dom.addClass(this.buffer, this.options.bufferClass);
      this.range.appendChild(this.buffer);

      directionClass = this.vertical ? this.options.bufferClass + '__vertical' : this.options.bufferClass + '__horizontal';
      dom.addClass(this.buffer, directionClass);
    }

    this.range.appendChild(this.container);
    this.range.appendChild(this.handle);

    directionClass = this.vertical ? this.options.rangeClass + '__vertical' : this.options.rangeClass + '__horizontal';
    dom.addClass(this.range, directionClass);

    if (func.isNumberLike(this.options.value)) {
      this._setValue(this.options.value, true);
      this.element.value = this.options.value;
    }

    if (func.isNumberLike(this.options.buffer)) {
      this.element.setAttribute('data-buffer', this.options.buffer);
    }

    if (func.isNumberLike(this.options.min) || minSetByDefault) {
      this.element.setAttribute('min', '' + this.min);
    }

    if (func.isNumberLike(this.options.max) || maxSetByDefault) {
      this.element.setAttribute('max', '' + this.max);
    }

    if (func.isNumberLike(this.options.step) || stepSetByDefault) {
      this.element.setAttribute('step', '' + this.step);
    }

    dom.insertAfter(this.element, this.range);

    // hide the input visually
    dom.setCss(this.element, {
      'position': 'absolute',
      'width': '1px',
      'height': '1px',
      'overflow': 'hidden',
      'opacity': '0'
    });

    // Store context
    this._handleDown = this._handleDown.bind(this);
    this._handleMove = this._handleMove.bind(this);
    this._handleEnd = this._handleEnd.bind(this);
    this._startEventListener = this._startEventListener.bind(this);
    this._changeEventListener = this._changeEventListener.bind(this);
    this._handleResize = this._handleResize.bind(this);

    this._init();

    // Attach Events
    window.addEventListener('resize', this._handleResize, false);

    dom.addEventListeners(document, this.options.startEvent, this._startEventListener);

    // Listen to programmatic value changes
    this.element.addEventListener('change', this._changeEventListener, false);
  }

  /* public methods */

  /**
   * @param {Object} obj like {min : Number, max : Number, value : Number, step : Number, buffer : [String|Number]}
   * @param {Boolean} triggerEvents
   * @returns {RangeSlider}
   */


  _createClass(RangeSlider, [{
    key: 'update',
    value: function update(obj, triggerEvents) {
      if (triggerEvents) {
        this.needTriggerEvents = true;
      }
      if (func.isObject(obj)) {
        if (func.isNumberLike(obj.min)) {
          this.element.setAttribute('min', '' + obj.min);
          this.min = obj.min;
        }

        if (func.isNumberLike(obj.max)) {
          this.element.setAttribute('max', '' + obj.max);
          this.max = obj.max;
        }

        if (func.isNumberLike(obj.step)) {
          this.element.setAttribute('step', '' + obj.step);
          this.step = obj.step;
          this.toFixed = this._toFixed(obj.step);
        }

        if (func.isNumberLike(obj.buffer)) {
          this._setBufferPosition(obj.buffer);
        }

        if (func.isNumberLike(obj.value)) {
          this._setValue(obj.value);
        }
      }
      this._update();
      this.onSlideEventsCount = 0;
      this.needTriggerEvents = false;
      return this;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      dom.removeAllListenersFromEl(this, document);
      window.removeEventListener('resize', this._handleResize, false);
      this.element.removeEventListener('change', this._changeEventListener, false);

      this.element.style.cssText = '';
      delete this.element[pluginName];

      // Remove the generated markup
      if (this.range) {
        this.range.parentNode.removeChild(this.range);
      }
    }

    /**
     * A lightweight plugin wrapper around the constructor,preventing against multiple instantiations
     * @param {Element} el
     * @param {Object} options
     */

  }, {
    key: '_toFixed',


    /* private methods */

    value: function _toFixed(step) {
      return (step + '').replace('.', '').length - 1;
    }
  }, {
    key: '_init',
    value: function _init() {
      if (this.onInit && typeof this.onInit === 'function') {
        this.onInit();
      }
      this._update();
    }
  }, {
    key: '_updatePercentFromValue',
    value: function _updatePercentFromValue() {
      this.percent = (this.value - this.min) / (this.max - this.min);
    }

    /**
     * This method check if this.identifier exists in ev.target's ancestors
     * @param ev
     * @param data
     */

  }, {
    key: '_startEventListener',
    value: function _startEventListener(ev, data) {
      var _this = this;

      var el = ev.target;
      var isEventOnSlider = false;

      if (ev.which !== 1 && !('touches' in ev)) {
        return;
      }

      dom.forEachAncestors(el, function (el) {
        return isEventOnSlider = el.id === _this.identifier && !dom.hasClass(el, _this.options.disabledClass);
      }, true);

      if (isEventOnSlider) {
        this._handleDown(ev, data);
      }
    }
  }, {
    key: '_changeEventListener',
    value: function _changeEventListener(ev, data) {
      if (data && data.origin === this.identifier) {
        return;
      }

      var value = ev.target.value;
      var pos = this._getPositionFromValue(value);

      this._setPosition(pos);
    }
  }, {
    key: '_update',
    value: function _update() {
      var sizeProperty = this.vertical ? 'offsetHeight' : 'offsetWidth';

      this.handleSize = dom.getDimension(this.handle, sizeProperty);
      this.rangeSize = dom.getDimension(this.range, sizeProperty);
      this.maxHandleX = this.rangeSize - this.handleSize;
      this.grabX = this.handleSize / 2;
      this.position = this._getPositionFromValue(this.value);

      // Consider disabled state
      if (this.element.disabled) {
        dom.addClass(this.range, this.options.disabledClass);
      } else {
        dom.removeClass(this.range, this.options.disabledClass);
      }

      this._setPosition(this.position);
      if (this.options.bufferClass && this.options.buffer) {
        this._setBufferPosition(this.options.buffer);
      }
      this._updatePercentFromValue();
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      var _this2 = this;

      return func.debounce(function () {
        // Simulate resizeEnd event.
        func.delay(function () {
          _this2._update();
        }, HANDLE_RESIZE_DELAY);
      }, HANDLE_RESIZE_DEBOUNCE)();
    }
  }, {
    key: '_handleDown',
    value: function _handleDown(e) {
      this.isInteractsNow = true;
      e.preventDefault();
      dom.addEventListeners(document, this.options.moveEvent, this._handleMove);
      dom.addEventListeners(document, this.options.endEvent, this._handleEnd);

      // If we click on the handle don't set the new position
      if ((' ' + e.target.className + ' ').replace(newLineAndTabRegexp, ' ').indexOf(this.options.handleClass) > -1) {
        return;
      }

      var boundingClientRect = this.range.getBoundingClientRect();

      var posX = this._getRelativePosition(e);
      var rangeX = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var handleX = this._getPositionFromNode(this.handle) - rangeX;
      var position = posX - this.grabX;

      this._setPosition(position);

      if (posX >= handleX && posX < handleX + this.options.borderRadius * 2) {
        this.grabX = posX - handleX;
      }
      this._updatePercentFromValue();
    }
  }, {
    key: '_handleMove',
    value: function _handleMove(e) {
      var posX = this._getRelativePosition(e);

      this.isInteractsNow = true;
      e.preventDefault();
      this._setPosition(posX - this.grabX);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd(e) {
      e.preventDefault();
      dom.removeEventListeners(document, this.options.moveEvent, this._handleMove);
      dom.removeEventListeners(document, this.options.endEvent, this._handleEnd);

      // Ok we're done fire the change event
      dom.triggerEvent(this.element, 'change', { origin: this.identifier });

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideEnd && typeof this.onSlideEnd === 'function') {
          this.onSlideEnd(this.value, this.percent, this.position);
        }
      }
      this.onSlideEventsCount = 0;
      this.isInteractsNow = false;
    }
  }, {
    key: '_setPosition',
    value: function _setPosition(pos) {
      var position = void 0;
      var stickRadius = void 0;
      var restFromValue = void 0;
      var stickTo = void 0;

      // Snapping steps
      var value = this._getValueFromPosition(func.between(pos, 0, this.maxHandleX));

      // Stick to stick[0] in radius stick[1]
      if (this.stick) {
        stickTo = this.stick[0];
        stickRadius = this.stick[1] || 0.1;
        restFromValue = value % stickTo;
        if (restFromValue < stickRadius) {
          value = value - restFromValue;
        } else if (Math.abs(stickTo - restFromValue) < stickRadius) {
          value = value - restFromValue + stickTo;
        }
      }
      position = this._getPositionFromValue(value);

      // Update ui
      if (this.vertical) {
        this.container.style.height = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style['msTransform'] = 'translateY(-' + position + 'px)';
        this.handle.style.transform = 'translateY(-' + position + 'px)';
      } else {
        this.container.style.width = position + this.grabX + 'px';
        this.handle.style['webkitTransform'] = 'translateX(' + position + 'px)';
        this.handle.style['msTransform'] = 'translateX(' + position + 'px)';
        this.handle.style.transform = 'translateX(' + position + 'px)';
      }

      this._setValue(value);

      // Update globals
      this.position = position;
      this.value = value;
      this._updatePercentFromValue();

      if (this.isInteractsNow || this.needTriggerEvents) {
        if (this.onSlideStart && typeof this.onSlideStart === 'function' && this.onSlideEventsCount === 0) {
          this.onSlideStart(this.value, this.percent, this.position);
        }

        if (this.onSlide && typeof this.onSlide === 'function') {
          this.onSlide(this.value, this.percent, this.position);
        }
      }

      this.onSlideEventsCount++;
    }
  }, {
    key: '_setBufferPosition',
    value: function _setBufferPosition(pos) {
      var isPercent = true;

      if (isFinite(pos)) {
        pos = parseFloat(pos);
      } else if (func.isString(pos)) {
        if (pos.indexOf('px') > 0) {
          isPercent = false;
        }
        pos = parseFloat(pos);
      } else {
        console.warn('New position must be XXpx or XX%');
        return;
      }

      if (isNaN(pos)) {
        console.warn('New position is NaN');
        return;
      }
      if (!this.options.bufferClass) {
        console.warn('You disabled buffer, it\'s className is empty');
        return;
      }
      var bufferSize = isPercent ? pos : pos / this.rangeSize * 100;

      if (bufferSize < 0) {
        bufferSize = 0;
      }
      if (bufferSize > 100) {
        bufferSize = 100;
      }
      this.options.buffer = bufferSize;

      var paddingSize = this.options.borderRadius / this.rangeSize * 100;
      var bufferSizeWithPadding = bufferSize - paddingSize;

      if (bufferSizeWithPadding < 0) {
        bufferSizeWithPadding = 0;
      }

      if (this.vertical) {
        this.buffer.style.height = bufferSizeWithPadding + '%';
        this.buffer.style.bottom = paddingSize * 0.5 + '%';
      } else {
        this.buffer.style.width = bufferSizeWithPadding + '%';
        this.buffer.style.left = paddingSize * 0.5 + '%';
      }

      this.element.setAttribute('data-buffer', bufferSize);
    }

    /**
     *
     * @param {Element} node
     * @returns {*} Returns element position relative to the parent
     * @private
     */

  }, {
    key: '_getPositionFromNode',
    value: function _getPositionFromNode(node) {
      var i = this.vertical ? this.maxHandleX : 0;

      while (node !== null) {
        i += this.vertical ? node.offsetTop : node.offsetLeft;
        node = node.offsetParent;
      }
      return i;
    }

    /**
     *
     * @param {(MouseEvent|TouchEvent)}e
     * @returns {number}
     */

  }, {
    key: '_getRelativePosition',
    value: function _getRelativePosition(e) {
      var boundingClientRect = this.range.getBoundingClientRect();

      // Get the offset relative to the viewport
      var rangeSize = this.vertical ? boundingClientRect.bottom : boundingClientRect.left;
      var pageOffset = 0;

      var pagePositionProperty = this.vertical ? 'pageY' : 'pageX';

      if (typeof e[pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches && e.touches.length ? e.touches[0][pagePositionProperty] : e[pagePositionProperty];
      } else if (typeof e.originalEvent !== 'undefined') {
        if (typeof e.originalEvent[pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent[pagePositionProperty];
        } else if (e.originalEvent.touches && e.originalEvent.touches[0] && typeof e.originalEvent.touches[0][pagePositionProperty] !== 'undefined') {
          pageOffset = e.originalEvent.touches[0][pagePositionProperty];
        }
      } else if (e.touches && e.touches[0] && typeof e.touches[0][pagePositionProperty] !== 'undefined') {
        pageOffset = e.touches[0][pagePositionProperty];
      } else if (e.currentPoint && (typeof e.currentPoint.x !== 'undefined' || typeof e.currentPoint.y !== 'undefined')) {
        pageOffset = this.vertical ? e.currentPoint.y : e.currentPoint.x;
      }

      if (this.vertical) {
        pageOffset -= window.pageYOffset;
      }

      return this.vertical ? rangeSize - pageOffset : pageOffset - rangeSize;
    }
  }, {
    key: '_getPositionFromValue',
    value: function _getPositionFromValue(value) {
      var percentage = (value - this.min) / (this.max - this.min);
      var pos = percentage * this.maxHandleX;

      return isNaN(pos) ? 0 : pos;
    }
  }, {
    key: '_getValueFromPosition',
    value: function _getValueFromPosition(pos) {
      var percentage = pos / (this.maxHandleX || 1);
      var value = this.step * Math.round(percentage * (this.max - this.min) / this.step) + this.min;

      return Number(value.toFixed(this.toFixed));
    }
  }, {
    key: '_setValue',
    value: function _setValue(value, force) {
      if (value === this.value && !force) {
        return;
      }

      // Set the new value and fire the `input` event
      this.element.value = value;
      this.value = value;
      dom.triggerEvent(this.element, 'input', { origin: this.identifier });
    }
  }], [{
    key: 'create',
    value: function create(el, options) {
      var createInstance = function createInstance(el) {
        var data = el[pluginName];

        // Create a new instance.
        if (!data) {
          data = new RangeSlider(el, options);
          el[pluginName] = data;
        }
      };

      if (el.length) {
        Array.prototype.slice.call(el).forEach(function (el) {
          createInstance(el);
        });
      } else {
        createInstance(el);
      }
    }
  }]);

  return RangeSlider;
}();

exports.default = RangeSlider;
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsRange = exports.removeAllListenersFromEl = exports.removeEventListeners = exports.addEventListeners = exports.insertAfter = exports.triggerEvent = exports.forEachAncestors = exports.removeClass = exports.addClass = exports.hasClass = exports.setCss = exports.getDimension = exports.getHiddenParentNodes = exports.isHidden = exports.detectIE = undefined;

var _functions = __webpack_require__(/*! ./functions */ "./src/utils/functions.js");

var func = _interopRequireWildcard(_functions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var EVENT_LISTENER_LIST = 'eventListenerList';

var detectIE = exports.detectIE = function detectIE() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    var rv = ua.indexOf('rv:');

    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  return false;
};

var ieVersion = detectIE();
var eventCaptureParams = window.PointerEvent && !ieVersion ? { passive: false } : false;

/**
 * Check if a `element` is visible in the DOM
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
var isHidden = exports.isHidden = function isHidden(element) {
  return element.offsetWidth === 0 || element.offsetHeight === 0 || element.open === false;
};

/**
 * Get hidden parentNodes of an `element`
 *
 * @param {Element} element
 * @return {Element[]}
 */
var getHiddenParentNodes = exports.getHiddenParentNodes = function getHiddenParentNodes(element) {
  var parents = [];
  var node = element.parentNode;

  while (isHidden(node)) {
    parents.push(node);
    node = node.parentNode;
  }
  return parents;
};

/**
 * Returns dimensions for an element even if it is not visible in the DOM.
 *
 * @param  {Element} element
 * @param  {string}  key     (e.g. offsetWidth …)
 * @return {Number}
 */
var getDimension = exports.getDimension = function getDimension(element, key) {
  var hiddenParentNodes = getHiddenParentNodes(element);
  var hiddenParentNodesLength = hiddenParentNodes.length;
  var hiddenParentNodesStyle = [];
  var dimension = element[key];

  // Used for native `<details>` elements
  var toggleOpenProperty = function toggleOpenProperty(element) {
    if (typeof element.open !== 'undefined') {
      element.open = !element.open;
    }
  };

  if (hiddenParentNodesLength) {
    for (var i = 0; i < hiddenParentNodesLength; i++) {
      // Cache the styles to restore then later.
      hiddenParentNodesStyle.push({
        display: hiddenParentNodes[i].style.display,
        height: hiddenParentNodes[i].style.height,
        overflow: hiddenParentNodes[i].style.overflow,
        visibility: hiddenParentNodes[i].style.visibility
      });

      hiddenParentNodes[i].style.display = 'block';
      hiddenParentNodes[i].style.height = '0';
      hiddenParentNodes[i].style.overflow = 'hidden';
      hiddenParentNodes[i].style.visibility = 'hidden';
      toggleOpenProperty(hiddenParentNodes[i]);
    }

    dimension = element[key];

    for (var j = 0; j < hiddenParentNodesLength; j++) {
      toggleOpenProperty(hiddenParentNodes[j]);
      hiddenParentNodes[j].style.display = hiddenParentNodesStyle[j].display;
      hiddenParentNodes[j].style.height = hiddenParentNodesStyle[j].height;
      hiddenParentNodes[j].style.overflow = hiddenParentNodesStyle[j].overflow;
      hiddenParentNodes[j].style.visibility = hiddenParentNodesStyle[j].visibility;
    }
  }
  return dimension;
};

/**
 *
 * @param {HTMLElement} el
 * @param {Object} cssObj
 * @returns {*}
 */
var setCss = exports.setCss = function setCss(el, cssObj) {
  for (var key in cssObj) {
    el.style[key] = cssObj[key];
  }
  return el.style;
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var hasClass = exports.hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var addClass = exports.addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

/**
 *
 * @param {HTMLElement} elem
 * @param {string} className
 */
var removeClass = exports.removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';

  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

/**
 *
 * @param {HTMLElement} el
 * @param {Function} callback
 * @param {boolean} andForElement - apply callback for el
 * @returns {HTMLElement}
 */
var forEachAncestors = exports.forEachAncestors = function forEachAncestors(el, callback, andForElement) {
  if (andForElement) {
    callback(el);
  }

  while (el.parentNode && !callback(el)) {
    el = el.parentNode;
  }

  return el;
};

/**
 *
 * @param {HTMLElement} el
 * @param {string} name event name
 * @param {Object} data
 */
var triggerEvent = exports.triggerEvent = function triggerEvent(el, name, data) {
  if (!func.isString(name)) {
    throw new TypeError('event name must be String');
  }
  if (!(el instanceof HTMLElement)) {
    throw new TypeError('element must be HTMLElement');
  }
  name = name.trim();
  var event = document.createEvent('CustomEvent');

  event.initCustomEvent(name, false, false, data);
  el.dispatchEvent(event);
};

/**
 * @param {Object} referenceNode after this
 * @param {Object} newNode insert this
 */
var insertAfter = exports.insertAfter = function insertAfter(referenceNode, newNode) {
  return referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
};

/**
 * Add event listeners and push them to el[EVENT_LISTENER_LIST]
 * @param {HTMLElement|Node|Document} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var addEventListeners = exports.addEventListeners = function addEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    if (!el[EVENT_LISTENER_LIST]) {
      el[EVENT_LISTENER_LIST] = {};
    }
    if (!el[EVENT_LISTENER_LIST][eventName]) {
      el[EVENT_LISTENER_LIST][eventName] = [];
    }

    el.addEventListener(eventName, listener, eventCaptureParams);
    if (el[EVENT_LISTENER_LIST][eventName].indexOf(listener) < 0) {
      el[EVENT_LISTENER_LIST][eventName].push(listener);
    }
  });
};

/**
 * Remove event listeners and remove them from el[EVENT_LISTENER_LIST]
 * @param {HTMLElement} el DOM element
 * @param {Array} events
 * @param {Function} listener
 */
var removeEventListeners = exports.removeEventListeners = function removeEventListeners(el, events, listener) {
  events.forEach(function (eventName) {
    var index = void 0;

    el.removeEventListener(eventName, listener, false);

    if (el[EVENT_LISTENER_LIST] && el[EVENT_LISTENER_LIST][eventName] && (index = el[EVENT_LISTENER_LIST][eventName].indexOf(listener)) > -1) {
      el[EVENT_LISTENER_LIST][eventName].splice(index, 1);
    }
  });
};

/**
 * Remove ALL event listeners which exists in el[EVENT_LISTENER_LIST]
 * @param instance
 * @param {HTMLElement} el DOM element
 */
var removeAllListenersFromEl = exports.removeAllListenersFromEl = function removeAllListenersFromEl(instance, el) {
  if (!el[EVENT_LISTENER_LIST]) {
    return;
  }

  /* jshint ignore:start */

  /**
   *
   * @callback listener
   * @this {Object} event name
   */
  function rm(listener) {
    if (listener === instance._startEventListener) {
      this.el.removeEventListener(this.eventName, listener, false);
    }
  }

  for (var eventName in el[EVENT_LISTENER_LIST]) {
    el[EVENT_LISTENER_LIST][eventName].forEach(rm, { eventName: eventName, el: el });
  }

  el[EVENT_LISTENER_LIST] = {};
  /* jshint ignore:end */
};

/**
 * Range feature detection
 * @return {Boolean}
 */
var supportsRange = exports.supportsRange = function supportsRange() {
  var input = document.createElement('input');

  input.setAttribute('type', 'range');
  return input.type !== 'text';
};

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Create a random uuid
 */
var uuid = exports.uuid = function uuid() {
  var s4 = function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

/**
 * Delays a function for the given number of milliseconds, and then calls
 * it with the arguments supplied.
 *
 * @param  {Function} fn   function
 * @param  {Number}   wait delay
 * @param  {Number}   args arguments
 * @return {Function}
 */
var delay = exports.delay = function delay(fn, wait) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  return setTimeout(function () {
    return fn.apply(null, args);
  }, wait);
};

/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn Function to debounce.
 * @param  {Number}   debounceDuration OPTIONAL. The amount of time in milliseconds for which we will debounce the
 *         function. (defaults to 100ms)
 * @return {Function}
 */
var debounce = exports.debounce = function debounce(fn) {
  var debounceDuration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (!fn.debouncing) {
      fn.lastReturnVal = fn.apply(window, args);
      fn.debouncing = true;
    }
    clearTimeout(fn.debounceTimeout);
    fn.debounceTimeout = setTimeout(function () {
      fn.debouncing = false;
    }, debounceDuration);
    return fn.lastReturnVal;
  };
};

var isString = exports.isString = function isString(obj) {
  return obj === '' + obj;
};

var isArray = exports.isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

var isNumberLike = exports.isNumberLike = function isNumberLike(obj) {
  return obj !== null && obj !== undefined && (isString(obj) && isFinite(parseFloat(obj)) || isFinite(obj));
};

var getFirsNumberLike = exports.getFirsNumberLike = function getFirsNumberLike() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return null;
  }

  for (var i = 0, len = args.length; i < len; i++) {
    if (isNumberLike(args[i])) {
      return args[i];
    }
  }

  return null;
};

var isObject = exports.isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

var simpleExtend = exports.simpleExtend = function simpleExtend(defaultOpt, options) {
  var opt = {};

  for (var key in defaultOpt) {
    opt[key] = defaultOpt[key];
  }
  for (var _key4 in options) {
    opt[_key4] = options[_key4];
  }

  return opt;
};

var between = exports.between = function between(pos, min, max) {
  if (pos < min) {
    return min;
  }
  if (pos > max) {
    return max;
  }
  return pos;
};

/***/ })

/******/ });
});

},{}],3:[function(_dereq_,module,exports){
var events = {
    "init": "fontsampler.events.init"
}

module.exports = events
},{}],4:[function(_dereq_,module,exports){
function pruneClass(className, classNames) {
    if (!classNames) {
        return ""
    }

    classNames = classNames.trim()

    if (!className) {
        return classNames
    }

    className = className.trim()

    var classes = classNames.split(" "),
        classIndex = classes.indexOf(className)

    if (classIndex !== -1) {
        classes.splice(classIndex, 1)
    }

    if (classes.length > 0) {
        return classes.join(" ")
    } else {
        return ""
    }
}

function addClass(className, classNames) {
    if (!classNames) {
        classNames = ""
    }

    classNames = classNames.trim()

    if (!className) {
        return classNames
    }

    className = className.trim()

    var classes = classNames.split(" "),
        classIndex = classes.indexOf(className)

    if (classIndex === -1) {
        if (classNames) {
            return classNames + " " + className
        } else {
            return className
        }
    } else {
        return classNames
    }
}

function nodeAddClass(node, className) {
    if (!isNode(node) || typeof(className) !== "string") {
        return false
    }

    node.className = addClass(className, node.className)

    return true
}

function nodeAddClasses(node, classes) {
    if (!isNode(node) || !Array.isArray(classes) || classes.length < 1) {
        return false
    }

    for (var c = 0; c < classes.length; c++) {
        node.className = addClass(classes[c], node.className)
    }

    return true
}

function nodeRemoveClass(node, className) {
    if (!isNode(node) || typeof(className) !== "string") {
        return false
    }

    node.className = pruneClass(className, node.className)

    return true
}

/**
 * Really just an approximation of a check
 * 
 * @param {*} node 
 */
function isNode(node) {
    return typeof(node) === "object" && node !== null && "nodeType" in node
}

module.exports = {
    nodeAddClass: nodeAddClass,
    nodeAddClasses: nodeAddClasses,
    nodeRemoveClass: nodeRemoveClass,
    isNode: isNode
}
},{}],5:[function(_dereq_,module,exports){
var rangeSlider = _dereq_("../node_modules/rangeslider-pure/dist/range-slider")
var Choices = _dereq_("../node_modules/choices.js/public/assets/scripts/choices")
var events = _dereq_("./events")
var helpers = _dereq_("./helpers")

function Skin(FS) {
    
    FS.registerEventhandler(events.init, init)

    function init() {
        console.debug("Skin.init()", FS, FS.initialized)

        if (FS.initialized === true) {
            console.error(FS.root)
            throw new Error("FontsamplerSkin: Cannot apply skin to a Fontsampler that is already initialized.")
        }

        helpers.nodeAddClass(FS.root, "fsjs-skin")

        var rangeInputs = FS.root.querySelectorAll("input[type=range][data-fsjs]")
        if (rangeInputs.length) {
            rangeSlider.create(rangeInputs, {
                polyfill: true,
                onSlide: updateSlider,
                onSlideEnd: updateSlider
            })
        }

        var selectInputs = FS.root.querySelectorAll("select[data-fsjs]")
        if (selectInputs.length) {
            for (var i in selectInputs) {
                if (selectInputs.hasOwnProperty(i)) {
                    var element = selectInputs[i]
                    new Choices(element, {
                        searchEnabled: false,
                        searchChoices: false,
                        maxItemCount: 1,
                        itemSelectText: "",
                        shouldSort: false,
                        shouldSortItems: false
                    })
                }

            }
        }
    }

    function updateSlider(position /*, value*/) {
        var key = this.element.dataset.fsjs,
            label = FS.root.querySelector("[data-fsjs-for='" + key + "'] .fsjs-label-value")

        FS.root.dispatchEvent(new CustomEvent("fontsampler.on" + key + "changed"))

        if (label) {
            label.textContent = position
        }
    }

}

module.exports = Skin 
},{"../node_modules/choices.js/public/assets/scripts/choices":1,"../node_modules/rangeslider-pure/dist/range-slider":2,"./events":3,"./helpers":4}]},{},[5])(5)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Fontsampler = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

},{}],2:[function(_dereq_,module,exports){
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());

},{}],3:[function(_dereq_,module,exports){

module.exports = {
    "noFonts": "Fontsampler: No fonts were passed in.",
    "initFontFormatting": "Fontsampler: Passed in fonts are not in expected format. Expected [ { name: 'Font Name', files: [ 'fontfile.woff', 'fontfile.woff2' ] }, … ]",
    "fileNotfound": "Fontsampler: The passed in file could not be found: ",
    "missingRoot": "Fontsampler: Passed in root element invalid: ",
    "tooManyFiles": "Fontsampler: Supplied more than one woff or woff2 for a font: ",
    "invalidUIItem": "Fontsampler: The supplied UI item is not supported: ",
    "invalidEvent": "Fontsampler: Invalid event type. You can only register Fontsampler events on the Fontsampler instance.",
    "newInit": "Fontsampler: Instantiated Fontsampler without 'new' keyword. Create Fontsamplers using new Fontsampler(…)",
    "dataFontsJsonInvalid": "Fontsampler: The data-fonts JSON failed to parse."
}


},{}],4:[function(_dereq_,module,exports){
var events = {
    "init": "fontsampler.events.init"
}

module.exports = events
},{}],5:[function(_dereq_,module,exports){
var FontFaceObserver = _dereq_("../node_modules/fontfaceobserver/fontfaceobserver.standalone")

var errors = _dereq_("./errors")

// supportsWoff2 manually copied from npm woff2-feature-test
var supportsWoff2 = (function() {
    if (!("FontFace" in window)) {
        return false;
    }

    var f = new FontFace('t', 'url( "data:application/font-woff2;base64,d09GMgABAAAAAADwAAoAAAAAAiQAAACoAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAALAogOAE2AiQDBgsGAAQgBSAHIBuDAciO1EZ3I/mL5/+5/rfPnTt9/9Qa8H4cUUZxaRbh36LiKJoVh61XGzw6ufkpoeZBW4KphwFYIJGHB4LAY4hby++gW+6N1EN94I49v86yCpUdYgqeZrOWN34CMQg2tAmthdli0eePIwAKNIIRS4AGZFzdX9lbBUAQlm//f262/61o8PlYO/D1/X4FrWFFgdCQD9DpGJSxmFyjOAGUU4P0qigcNb82GAAA" ) format( "woff2" )', {});
    f.load()['catch'](function() {});

    return f.status === 'loading' || f.status === 'loaded';
})();

function getExtension(path) {
    return path.substring(path.lastIndexOf(".") + 1)
}

function bestWoff(files) {
    if (typeof(files) !== "object" || !Array.isArray(files)) {
        return false
    }

    var woffs = files.filter(function(value) {
            return getExtension(value) === "woff"
        }),
        woff2s = files.filter(function(value) {
            return getExtension(value) === "woff2"
        })

    if (woffs.length > 1 || woff2s.length > 1) {
        throw new Error(errors.tooManyFiles + files)
    }

    if (woff2s.length > 0 && supportsWoff2) {
        return woff2s.shift()
    }

    if (woffs.length > 0) {
        return woffs.shift()
    }

    return false
}

function loadFont(file, callback) {
    if (!file) {
        return false
    }
    var family = file.substring(file.lastIndexOf("/") + 1)
    family = family.substring(0, family.lastIndexOf("."))
    family = family.replace(/\W/gm, "")

    var font = new FontFaceObserver(family)
    font.load().then(function(f) {
        if (typeof(callback) === "function") {
            callback(f)
        }
    })

    if (FontFace) {
        var ff = new FontFace(family, "url(" + file + ")")
        ff.load().then(function() {
            document.fonts.add(ff)
        }).catch(function() {
            throw new Error(errors.fileNotfound + file)
        })
    } else {
        var newStyle = document.createElement("style");
        newStyle.appendChild(document.createTextNode("@font-face { font-family: '" + family + "'; src: url('" + file + "'); }"));
        document.head.appendChild(newStyle);
    }
}

function fromFiles(files, callback) {
    font = bestWoff(files)
    loadFont(font, callback)
}

module.exports = {
    "loadFont": loadFont,
    "fromFiles": fromFiles
}
},{"../node_modules/fontfaceobserver/fontfaceobserver.standalone":2,"./errors":3}],6:[function(_dereq_,module,exports){
/**
 * Fontsampler.js
 * 
 * A configurable standalone webfont type tester for displaying and manipulating sample text.
 * 
 * @author Johannes Neumeier <hello@underscoretype.com>
 * @copyright 2019 Johannes Neumeier
 * @license GNU GPLv3
 */

// var rangeSlider = require("../node_modules/rangeslider-pure/dist/range-slider")
var extend = _dereq_("../node_modules/extend")

var Fontloader = _dereq_("./fontloader")
var Interface = _dereq_("./interface")
var Preloader = _dereq_("./preloader")
var errors = _dereq_("./errors")
var events = _dereq_("./events")
var helpers = _dereq_("./helpers")

function Fontsampler(root, fonts, opt) {

    console.debug("Fontsampler()", root, fonts, opt, this)

    if (this === window) {
        throw new Error(errors.newInit)
    }

    var extractedFonts,
        interface,
        preloader = new Preloader(),
        defaults
        
    this.initialized = false
    
    // Check for a root element to render to
    if (!root) {
        throw new Error(errors.missingRoot + root)
    }

    // A minimal default setup requiring only passed in font(s) and not generating any
    // interface elements except a tester input
    defaults = {
        initialText: "",
        multiline: true,
        lazyload: false,
        generate: false,
        classes: {
            rootClass: "fontsamplerjs",
            initClass: "fsjs-initialized",
            loadingClass: "fsjs-loading",
            preloadingClass: "fsjs-preloading",
            wrapperClass: "fsjs-wrapper",
            blockClass: "fsjs-block",
            elementClass: "fsjs-element",
            labelClass: "fsjs-label",
            labelTextClass: "fsjs-label-text",
            labelValueClass: "fsjs-label-value",
            labelUnitClass: "fsjs-label-unit",
            buttonSelected: "fsjs-button-selected",
        },
        order: [
            ["fontsize", "lineheight", "letterspacing"],
            ["fontfamily", "language"],
            ["alignment", "direction", "opentype"], 
            "tester"
        ],
        ui: {
            tester: {
                editable: true,
                label: false
            },
            fontfamily: {
                label: "Font"
            },
            fontsize: {
                unit: "px",
                init: 36,
                min: 8,
                max: 96,
                step: 1,
                label: "Size"
            },
            lineheight: {
                unit: "%",
                init: 100,
                min: 60,
                max: 120,
                step: 5,
                label: "Leading"
            },
            letterspacing: {
                unit: "em",
                init: 0,
                min: -0.1,
                max: 0.1,
                step: 0.01,
                label: "Letterspacing"
            },
            alignment: {
                choices: ["left|Left", "center|Centered", "right|Right"],
                init: "left",
                label: "Alignment"
            },
            direction: {
                choices: ["ltr|Left to right", "rtl|Right to left"],
                init: "ltr",
                label: "Direction"
            },
            language: {
                choices: ["en-GB|English", "de-De|Deutsch", "nl-NL|Dutch"],
                init: "en-Gb",
                label: "Language"
            },
            opentype: {
                choices: ["liga|Ligatures", "frac|Fractions"],
                init: ["liga"],
                label: "Opentype features"
            }
        }
    }

    this.root = root

    // defaults.ui.fontsize.render = false if not passed in
    // etc.
    for (var key in defaults.ui) {
        if (opt && "generate" in opt) {
            defaults.ui[key].render = opt.generate
        } else {
            defaults.ui[key].render = !!(opt && opt.ui && key in opt.ui)
        }
    }
    // Always render a tester by default!
    defaults.ui.tester.render = true

    // Extend or use the default options
    if (typeof opt === "object") {
        options = extend(true, defaults, opt)
    } else {
        options = defaults
    }

    // A passed in UI order superseeds, not extends!, the default
    if (typeof opt === "object" && "order" in opt && Array.isArray(opt.order) && opt.order.length) {
        options.order = opt.order
    }

    // Extract fonts; Look first on root element, then on select, then in
    // passed in fonts Array
    extractedFonts = extractFontsFromDOM()
    if ((!fonts || fonts.length < 1) && extractedFonts) {
        fonts = extractedFonts
    }
    if (!fonts) {
        throw new Error(errors.noFonts)
    }
    if (!validateFontsFormatting(fonts)) {
        console.error(fonts)
        throw new Error(errors.initFontFormatting)
    }

    interface = Interface(root, fonts, options)

    // Setup the interface listeners and delegate events back to the interface
    function setupUIEvents() {
        // sliders
        this.root.addEventListener("fontsampler.onfontsizechanged", function() {
            var val = interface.getCssValue("fontsize")
            interface.setInputCss(interface.getCssAttrForKey("fontsize"), val)
        })
        this.root.addEventListener("fontsampler.onlineheightchanged", function() {
            var val = interface.getCssValue("lineheight")
            interface.setInputCss(interface.getCssAttrForKey("lineheight"), val)
        })
        this.root.addEventListener("fontsampler.onletterspacingchanged", function() {
            var val = interface.getCssValue("letterspacing")
            interface.setInputCss(interface.getCssAttrForKey("letterspacing"), val)
        })

        // checkbox
        this.root.addEventListener("fontsampler.onopentypechanged", function() {
            var val = interface.getOpentype()
            interface.setInputOpentype(val)
        })

        // dropdowns
        this.root.addEventListener("fontsampler.onfontfamilychanged", function() {
            var val = interface.getValue("fontfamily")
            loadFont(val)
        })
        this.root.addEventListener("fontsampler.onlanguagechanged", function() {
            var val = interface.getValue("language")
            interface.setInputAttr("lang", val)
        })

        // buttongroups
        this.root.addEventListener("fontsampler.onalignmentchanged", function() {
            var val = interface.getButtongroupValue("alignment")
            interface.setInputCss("textAlign", val)
        })
        this.root.addEventListener("fontsampler.ondirectionchanged", function() {
            var val = interface.getButtongroupValue("direction")
            interface.setInputAttr("dir", val)
        })
    }

    /**
     * Check fonts are passed in with correct structure, e.g.
     * fonts: [ { "Font Name" : [ "fontfile.woff", "fontfile.woff2" ] } ]
     * 
     * TODO: Check that at most only one woff and one woff2 is passed in
     * 
     * @param {*} fonts 
     */
    function validateFontsFormatting(fonts) {
        if (typeof(fonts) !== "object" || !Array.isArray(fonts)) {
            return false
        }

        for (var i = 0; i < fonts.length; i++) {
            var font = fonts[i]
            if (typeof(font) !== "object") {
                return false
            }

            if (!font.name || !font.files || !Array.isArray(font.files) || font.files.length <= 0) {
                return false
            }
        }

        return true
    }

    function extractFontsFromDOM() {
        var select = root.querySelector("[data-property='fontfamily']"),
            options = [],
            fonts = []

        // First try to get data-fonts or data-woff/2 on the root element
        // If such are found, return them
        var rootFonts = extractFontsFromNode(root, true)
        if (rootFonts) {
            return rootFonts
        }

        // Otherwise check if there is a dropdown with options that have
        // data-woff/2 elements
        if (!select) {
            return false
        }

        options = select.querySelectorAll("option")
        for (i = 0; i < options.length; i++) {
            var opt = options[i],
                extractedFonts = extractFontsFromNode(opt, false)

            if (fonts) {
                fonts = fonts.concat(extractedFonts)
            }
        }

        if (fonts) {
            return fonts
        }

        return false
    }

    function extractFontsFromNode(node, ignoreName) {
        var fonts = [],
            singleFont = {
                "name": "Default",
                "files": []
            }

        // prever a data-fonts json_encoded array
        if (node.dataset.fonts) {
            try {
                fonts = JSON.parse(node.dataset.fonts)
                return fonts
            } catch (error) {
                console.error(node.dataset.fonts)
                throw new Error(errors.dataFontsJsonInvalid)
            }
        }

        // else see if a single font can be extracted
        if (node.dataset.name) {
            singleFont.name = node.dataset.name
        }

        if (node.dataset.woff) {
            singleFont.files.push(node.dataset.woff)
        }

        if (node.dataset.woff2) {
            singleFont.files.push(node.dataset.woff2)
        }

        if ((singleFont.name || (!singleFont.name && ignoreName)) && singleFont.files.length > 0) {
            return [singleFont]
        }

        return false
    }

    function loadFont(indexOrKey) {
        console.debug("Fontsampler.loadFont", indexOrKey)

        preloader.pause()

        interface.setStatusClass(options.loadingClass, true)
        files = []
        if (typeof(indexOrKey) === "string") {
            files = fonts.filter(function(value, index) {
                return fonts[index].name === indexOrKey
            }).pop().files
        } else if (typeof(indexOrKey) === "number" && indexOrKey >= 0 && indexOrKey <= fonts.length) {
            files = fonts[indexOrKey].files
        }

        Fontloader.fromFiles(files, function(f) {
            interface.setInputCss("fontFamily", f.family)
            interface.setStatusClass(options.loadingClass, false)

            preloader.resume()
        })
    }

    /**
     * PUBLIC API
     */

    this.init = function() {
        console.debug("Fontsampler.init()", this, this.root)
        interface.init()
        setupUIEvents.call(this)
        loadFont(0)

        if (options.lazyload) {
            interface.setStatusClass(options.preloadingClass, true)
            preloader.load(fonts, function() {
                interface.setStatusClass(options.preloadingClass, false)
            })
        }

        this.initalized = true
        helpers.nodeAddClass(root, options.classes.initClass)


        root.dispatchEvent(new CustomEvent(events.init))

        // For convenience also have the init method return the instance
        // This way you can create the object and init it, e.g.
        // var fs = new Fontsampler().init()
        return this
    }

    this.lazyload = function() {
        if (this.initialized && fonts) {
            preloader.load(fonts)
        }
    }

    this.registerEventhandler = function(event, callback) {
        // Validate that only fontsampler.events.… are passed in
        if (Object.values(events).indexOf(event) === -1) {
            throw new Error(errors.invalidEvent)
        }

        // Only act if there is a valid callback
        if (typeof(callback) === "function") {
            root.addEventListener(event, callback)
        }
    }

    this.setText = function (text) {
        interface.setInputText(text)
    }

    return this
}

module.exports = Fontsampler
},{"../node_modules/extend":1,"./errors":3,"./events":4,"./fontloader":5,"./helpers":7,"./interface":8,"./preloader":9}],7:[function(_dereq_,module,exports){
function pruneClass(className, classNames) {
    if (!classNames) {
        return ""
    }

    classNames = classNames.trim()

    if (!className) {
        return classNames
    }

    className = className.trim()

    var classes = classNames.split(" "),
        classIndex = classes.indexOf(className)

    if (classIndex !== -1) {
        classes.splice(classIndex, 1)
    }

    if (classes.length > 0) {
        return classes.join(" ")
    } else {
        return ""
    }
}

function addClass(className, classNames) {
    if (!classNames) {
        classNames = ""
    }

    classNames = classNames.trim()

    if (!className) {
        return classNames
    }

    className = className.trim()

    var classes = classNames.split(" "),
        classIndex = classes.indexOf(className)

    if (classIndex === -1) {
        if (classNames) {
            return classNames + " " + className
        } else {
            return className
        }
    } else {
        return classNames
    }
}

function nodeAddClass(node, className) {
    if (!isNode(node) || typeof(className) !== "string") {
        return false
    }

    node.className = addClass(className, node.className)

    return true
}

function nodeAddClasses(node, classes) {
    if (!isNode(node) || !Array.isArray(classes) || classes.length < 1) {
        return false
    }

    for (var c = 0; c < classes.length; c++) {
        node.className = addClass(classes[c], node.className)
    }

    return true
}

function nodeRemoveClass(node, className) {
    if (!isNode(node) || typeof(className) !== "string") {
        return false
    }

    node.className = pruneClass(className, node.className)

    return true
}

/**
 * Really just an approximation of a check
 * 
 * @param {*} node 
 */
function isNode(node) {
    return typeof(node) === "object" && node !== null && "nodeType" in node
}

module.exports = {
    nodeAddClass: nodeAddClass,
    nodeAddClasses: nodeAddClasses,
    nodeRemoveClass: nodeRemoveClass,
    isNode: isNode
}
},{}],8:[function(_dereq_,module,exports){
/**
 * A wrapper around the Fontsampler interface
 * 
 * 
 * Generally, the DOM is structured in such a way:
 * 
 * Each nested Array in ´order´ is enclosed in a
 * 
 * .fsjs-wrapper
 * 
 * In each (optional, e.g. without Array straight output) wrapper one more more:
 * 
 *  [data-fsjs-block=_property_].fsjs-block .fsjs-block-_property_ .fsjs-block-type-_type_
 * 
 * Nested in each block a variety of sub elements:
 *      Optional label with:
 *      [data-fsjs-for=_property_].fsjs-label
 *          [data-label-text=_property_].fsjs-label-text
 *          [data-label-value=_property_].fsjs-label-value (optional)
 *          [data-label-unit=_property_].fsjs-label-unit (optional)
 * 
 *      The actual ui control (input, select, buttongroup)
 *      [data-fsjs=_property_].fsjs-element-_property_
 * 
 */

var UIElements = _dereq_("./uielements")
var helpers = _dereq_("./helpers")
var errors = _dereq_("./errors")
var selection = _dereq_("./selection")

function Interface(_root, fonts, options) {

    var ui = {
            tester: "textfield",
            fontsize: "slider",
            lineheight: "slider",
            letterspacing: "slider",
            fontfamily: "dropdown",
            alignment: "buttongroup",
            direction: "buttongroup",
            language: "dropdown",
            opentype: "checkboxes"
        },
        keyToCss = {
            "fontsize": "fontSize",
            "lineheight": "lineHeight",
            "letterspacing": "letterSpacing"
        },
        blocks = {},
        root = null,
        uifactory = null,
        input = null,
        originalText = ""

    function init() {
        console.debug("Fontsampler.Interface.init()", _root, fonts, options)

        root = _root
        helpers.nodeAddClass(root, options.classes.rootClass)
        uifactory = UIElements(root, options)

        // The fontfamily is just being defined without the options, which
        // are the fonts passed in. let’s make this transformation behind
        // the scenes so we can use the re-usable "dropdown" ui
        options.ui.fontfamily.choices = fonts.map(function(value) {
            return value.name
        })

        // Before modifying the root node, detect if it is containing only
        // text, and if so, store it to the options for later use
        if (root.childNodes.length === 1 && root.childNodes[0].nodeType === Node.TEXT_NODE) {
            originalText = root.childNodes[0].textContent
            root.removeChild(root.childNodes[0])
        }
        options.originalText = originalText

        // If no valid UI order is passed in fall back to the ui elements
        // Their order might be random, but it ensures each required element
        // is at least present
        if (!options.order || !Array.isArray(options.order)) {
            options.order = Object.keys(ui)
        }

        // Process the possible nested arrays in order one by one
        // · Existing DOM nodes will be validated and initiated
        // · UI elements defined via options but missing from the DOM will be created
        // · UI elements defined in ui option but not in order option will be 
        //   appended in the end
        // · Items neither in the DOM nor in options are skipped
        for (var i = 0; i < options.order.length; i++) {
            var elementA = parseOrder(options.order[i])
            if (helpers.isNode(elementA) && elementA.childNodes.length > 0) {
                root.appendChild(elementA)
            }
        }
        for (var keyB in options.ui) {
            if (options.ui.hasOwnProperty(keyB)) {
                if (keyB in blocks === false) {
                    var elementB = parseOrder(options.ui[keyB])
                    if (helpers.isNode(elementB) && elementB.childNodes.length > 0) {
                        root.appendChild(elementB)
                    }
                }
            }
        }

        input = getElement("tester", blocks.tester)

        // after all nodes are instantiated, update the tester to reflect
        // the current state
        for (var keyC in blocks) {
            if (blocks.hasOwnProperty(keyC)) {
                initBlock(keyC)
            }
        }

        // prevent line breaks on single line instances
        if (!options.multiline) {
            var typeEvents = ["keypress", "keyup", "change", "paste"]
            for (var e in typeEvents) {
                if (typeEvents.hasOwnProperty(e)) {
                    blocks.tester.addEventListener(typeEvents[e], onKey)
                }
            }
        }

        // prevent pasting styled content
        blocks.tester.addEventListener('paste', function(e) {
            e.preventDefault();
            var text = '';
            if (e.clipboardData || e.originalEvent.clipboardData) {
                text = (e.originalEvent || e).clipboardData.getData('text/plain');
            } else if (window.clipboardData) {
                text = window.clipboardData.getData('Text');
            }

            if (!options.multiline) {
                text = text.replace(/(?:\r\n|\r|\n|<br>)/g, ' ')
            }

            if (document.queryCommandSupported('insertText')) {
                document.execCommand('insertText', false, text);
            } else {
                document.execCommand('paste', false, text);
            }
        });
    }

    /**
     * Recursively go through an element in the options.order
     * @param string key
     * @param node parent
     */
    function parseOrder(key) {
        var child, wrapper

        if (typeof(key) === "string") {
            var block = parseBlock(key)
            if (block) {
                blocks[key] = block
            }

            return block
        } else if (Array.isArray(key)) {
            wrapper = document.createElement("div")
            wrapper.className = options.classes.wrapperClass

            for (var i = 0; i < key.length; i++) {
                child = parseOrder(key[i])
                if (child) {
                    wrapper.appendChild(child)
                }
            }

            return wrapper
        } else {
            // Skipping not defined UI element

            return false
        }
    }

    /**
     * Parse an UI element from DOM or options
     * @param string item 
     * @return node || boolean (true = in DOM, false = invalid item)
     */
    function parseBlock(key) {
        if (key in ui === false) {
            throw new Error(errors.invalidUIItem + key)
        }

        var block = getBlock(key),
            element = false,
            label = false,
            opt = options.ui[key]

        if (block) {
            // if a block is found, try get its element and optional label
            element = getElement(key, block)
            label = getLabel(key, block)

            if (options.ui[key].label && !label) {
                // create a label if needed
                label = uifactory.label(opt.label, opt.unit, opt.init, key)
                block.appendChild(label)
                sanitizeLabel(label, key)
            } else if (label) {
                // or check the existing label
                sanitizeLabel(label, key)
            }
            if (!element) {
                // create and check the element
                element = createElement(key)
                block.appendChild(element)
                sanitizeElement(element, key)
            } else {
                // or check the existing element
                sanitizeElement(element, key)
            }

            // check the block itself
            sanitizeBlock(block, key)

            return block
        } else if (!block && options.generate || !block && key === "tester") {
            // for missing blocks that should get rendered create them

            return createBlock(key)
        }

        return false
    }

    function createBlock(key) {
        var block = document.createElement("div"),
            element = createElement(key),
            label = false
            opt = options.ui[key]

        if (opt.label) {
            label = uifactory.label(opt.label, opt.unit, opt.init, key)
            block.append(label)
            sanitizeLabel(label, key)
        }
        
        block.append(element)
        sanitizeElement(element, key)
        
        sanitizeBlock(block, key)
        
        return block
    }

    function createElement(key) {
        var element = uifactory[ui[key]](key, options.ui[key])
        sanitizeElement(element, key)

        return element
    }

    function sanitizeBlock(block, key) {
        var classes = [
            options.classes.blockClass,
            options.classes.blockClass + "-" + key,
            options.classes.blockClass + "-type-" + ui[key]
        ]

        helpers.nodeAddClasses(block, classes)
        block.dataset.fsjsBlock = key
    }

    function sanitizeElement(element, key) {
        var element = uifactory[ui[key]](key, options.ui[key], element)

        helpers.nodeAddClass(element, options.classes.elementClass)
        element.dataset.fsjs = key
    }

    function sanitizeLabel(label, key) {
        var text = label.querySelector("." + options.classes.labelTextClass),
            value = label.querySelector("." + options.classes.labelValueClass),
            unit = label.querySelector("." + options.classes.labelUnitClass),
            element = getElement(key)

        if (text && text.textContent === "") {
            text.textContent = options.ui[key].label
        }

        if (value && value.textContent === "") {
            // If set in already set in DOM the above validate will have set it
            value.textContent = element.value
        }

        if (unit && unit.textContent === "") {
            // If set in already set in DOM the above validate will have set it
            unit.textContent = element.dataset.unit
        }

        helpers.nodeAddClass(label, options.classes.labelClass)
        label.dataset.fsjsFor = key
    }

    /**
     * Init a UI element with values (update DOM to options)
     * @param node node 
     * @param object opt 
     * @return boolean
     */
    function initBlock(key) {
        // TODO set values if passed in and different on node
        var block = getBlock(key),
            element = getElement(key, block),
            type = ui[key],
            opt = options.ui[key]

        if (type === "slider") {
            element.addEventListener("change", onChange)
            element.val = opt.init
            setInputCss(keyToCss[key], opt.init + opt.unit)
        } else if (type === "dropdown") {
            element.addEventListener("change", onChange)
            // TODO init values to tester
        } else if (type === "buttongroup") {
            var buttons = element.querySelectorAll("[data-choice]")

            if (buttons.length > 0) {
                for (var b = 0; b < buttons.length; b++) {
                    buttons[b].addEventListener("click", onClick)
                }
            }

            // TODO init values to tester
        } else if (type === "checkboxes") {
            var checkboxes = element.querySelectorAll("[data-feature]")
            if (checkboxes.length > 0) {
                for (var c = 0; c < checkboxes.length; c++) {
                    checkboxes[c].addEventListener("change", onCheck)
                }
            }

            // TODO init values to tester
        }

        return true
    }

    function getElement(key, node) {
        if (typeof(node) === "undefined") {
            node = root
        }
        var element = root.querySelector("[data-fsjs='" + key + "']")

        return helpers.isNode(element) ? element : false
    }

    function getBlock(key, node) {
        if (typeof(node) === "undefined") {
            node = root
        }
        var block = root.querySelector("[data-fsjs-block='" + key + "']")

        return helpers.isNode(block) ? block : false
    }

    function getLabel(key, node) {
        if (typeof(node) === "undefined") {
            node = root
        }
        var block = root.querySelector("[data-fsjs-for='" + key + "']")

        return helpers.isNode(block) ? block : false
    }

    /**
     * Catch-all UI element event listener firing a scoped CustomEvent based
     * on the element’s property
     * @param {*} e 
     */
    function onChange(e) {
        var property = e.target.dataset.fsjs

        sendEvent(property)
    }

    function onCheck() {
        // Currently this is only used for opentype checkboxes
        var property = "opentype"

        sendEvent(property)
    }

    /**
     * Currently only reacting to buttongroup nested buttons’ clicks
     * @param {*} e 
     */
    function onClick(e) {
        var parent = e.currentTarget.parentNode,
            property = parent.dataset.fsjs,
            // customEvent = new CustomEvent("fontsampler.on" + property + "clicked"),
            buttons = parent.querySelectorAll("[data-choice]")

        if (property in ui && ui[property] === "buttongroup") {
            for (var b = 0; b < buttons.length; b++) {
                helpers.nodeRemoveClass(buttons[b], options.classes.buttonSelected)
            }
            helpers.nodeAddClass(e.currentTarget, options.classes.buttonSelected)

            sendEvent(property)
        }
    }

    function sendEvent(type) {
        root.dispatchEvent(new CustomEvent("fontsampler.on" + type + "changed"))
    }

    function onKey(event) {
        if (event.type === "keypress") {
            // for keypress events immediately block pressing enter for line break
            if (event.keyCode === 13) {
                event.preventDefault()
                return false;
            }
        } else {
            // allow other events, filter any html with $.text() and replace linebreaks
            // TODO fix paste event from setting the caret to the front of the non-input non-textarea
            var text = blocks.tester.textContent,
                hasLinebreaks = text.indexOf("\n")

            if (-1 !== hasLinebreaks) {
                blocks.tester.innerHTML(text.replace('/\n/gi', ''));
                selection.setCaret(blocks.tester, blocks.tester.textContent.length, 0);
            }
        }
    }

    /**
     * Get a UI element value
     * @param {*} property 
     */
    function getValue(property) {
        var element = getElement(property)

        if (element) {
            return element.value
        } else {
            return false
        }
    }

    /**
     * Get a UI element value with CSS unit
     * @param {*} property 
     */
    function getCssValue(property) {
        var element = getElement(property)

        return element ? element.value + element.dataset.unit : ""
    }

    function getOpentype() {
        if (!blocks.opentype) {
            return false
        }

        var features = blocks.opentype.querySelectorAll("[data-feature]")

        if (features) {
            var re = {}

            for (var f = 0; f < features.length; f++) {
                var input = features[f]
                re[input.dataset.feature] = input.checked
            }

            return re
        }
    }

    function getButtongroupValue(key) {
        var element = getElement(key),
            selected

        if (element) {
            selected = element.querySelector("." + options.classes.buttonSelected)
        }

        if (selected) {
            return selected.dataset.choice
        } else {
            return ""
        }
    }

    function getCssAttrForKey(key) {
        if (key in keyToCss) {
            return keyToCss[key]
        }

        return false
    }

    function getKeyForCssAttr(attr) {
        for (var key in keyToCss) {
            if (keyToCss.hasOwnProperty(key)) {
                if (keyToCss[key] === attr) {
                    return key
                }
            }
        }

        return false
    }

    /**
     * Set the tester’s text
     * @param {*} attr 
     * @param {*} val 
     */
    function setInputCss(attr, val) {
        input.style[attr] = val
    }

    function setInputAttr(attr, val) {
        input.setAttribute(attr, val)
    }

    function setInputOpentype(features) {
        var parsed = [],
            val
        for (var key in features) {
            if (features.hasOwnProperty(key)) {
                parsed.push('"' + key + '" ' + (features[key] ? "1" : "0"))
            }
        }
        val = parsed.join(",")

        input.style["font-feature-settings"] = val
    }

    function setInputText(text) {
        if (text && input) {
            input.textContent = text
        }
    }

    function setStatusClass(classString, status) {
        if (status === true) {
            helpers.nodeAddClass(root, classString)
        } else if (status === false) {
            helpers.nodeRemoveClass(root, classString)
        }
    }

    return {
        init: init,
        getValue: getValue,
        getCssValue: getCssValue,
        getButtongroupValue: getButtongroupValue,
        getOpentype: getOpentype,
        getCssAttrForKey: getCssAttrForKey,
        getKeyForCssAttr: getKeyForCssAttr,
        setInputCss: setInputCss,
        setInputAttr: setInputAttr,
        setInputOpentype: setInputOpentype,
        setInputText: setInputText,
        setStatusClass: setStatusClass
    }
}
module.exports = Interface
},{"./errors":3,"./helpers":7,"./selection":10,"./uielements":11}],9:[function(_dereq_,module,exports){
var Fontloader = _dereq_("./fontloader")

function Preloader() {

    var queue = [],
        autoload = true,
        finishedCallback = null

    function load(fonts, callback) {

        // clone the fonts array
        queue = fonts.slice(0)
        autoload = true

        if (typeof(callback) === "function") {
            finishedCallback = callback
        }

        loadNext()
    }

    function pause() {
        autoload = false
    }

    function resume() {
        autoload = true
        if (queue.length > 0) {
            loadNext()
        } else {
            if (finishedCallback) {
                finishedCallback()
            }
        }
    }

    function loadNext() {
        if (queue.length > 0 && autoload) {
            Fontloader.fromFiles(queue[0].files, function () {
                queue.shift()

                if (queue.length === 0 && finishedCallback) {
                    finishedCallback()
                }
                
                if (queue.length > 0 && autoload) {
                    loadNext()
                }
            })
        }
    }

    return {
        load: load,
        pause: pause,
        resume: resume
    }
}


module.exports = Preloader
},{"./fontloader":5}],10:[function(_dereq_,module,exports){
/**
 * Helper module to deal with caret position
 */
function Selection () {

    // from https://stackoverflow.com/a/4812022/999162
    var setSelectionByCharacterOffsets = null;

    if (window.getSelection && document.createRange) {
        setSelectionByCharacterOffsets = function (containerEl, start, end) {
            var charIndex = 0,
                range = document.createRange();
            range.setStart(containerEl, 0);
            range.collapse(true);
            var nodeStack = [containerEl],
                node, foundStart = false,
                stop = false;

            while (!stop && (node = nodeStack.pop())) {
                if (node.nodeType == 3) {
                    var nextCharIndex = charIndex + node.length;
                    if (!foundStart && start >= charIndex && start <= nextCharIndex) {
                        range.setStart(node, start - charIndex);
                        foundStart = true;
                    }
                    if (foundStart && end >= charIndex && end <= nextCharIndex) {
                        range.setEnd(node, end - charIndex);
                        stop = true;
                    }
                    charIndex = nextCharIndex;
                } else {
                    var i = node.childNodes.length;
                    while (i--) {
                        nodeStack.push(node.childNodes[i]);
                    }
                }
            }

            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        };
    } else if (document.selection) {
        setSelectionByCharacterOffsets = function (containerEl, start, end) {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(containerEl);
            textRange.collapse(true);
            textRange.moveEnd("character", end);
            textRange.moveStart("character", start);
            textRange.select();
        };
    }


    // From https://stackoverflow.com/a/4812022/999162
    function getCaretCharacterOffsetWithin(element) {
        var caretOffset = 0;
        var doc = element.ownerDocument || element.document;
        var win = doc.defaultView || doc.parentWindow;
        var sel;
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset);
                caretOffset = preCaretRange.toString().length;
            }
        } else if ((sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
        }
        return caretOffset;
    }

    return {
        setCaret: setSelectionByCharacterOffsets,
        getCaret: getCaretCharacterOffsetWithin
    };

}

module.exports = Selection
},{}],11:[function(_dereq_,module,exports){

var helpers = _dereq_("./helpers")
/**
 * Wrapper to provide global root, options and fonts to all methods (UI Elements)
 * 
 * @param {*} root 
 * @param {*} options 
 * @param {*} fonts 
 */
function UIElements(root, options) {

    function label(labelText, labelUnit, labelValue, relatedInput) {
        var label = document.createElement("label"),
            text = document.createElement("span"),
            val, unit

        label.dataset.for = relatedInput
        helpers.nodeAddClass(label, options.classes.labelClass)

        text.className = options.classes.labelTextClass
        text.appendChild(document.createTextNode(labelText))
        label.appendChild(text)

        if (typeof(labelUnit) === "string" && labelValue !== "") {
            val = document.createElement("span")
            val.className = options.classes.labelValueClass
            val.appendChild(document.createTextNode(labelValue))
            label.appendChild(val)

            unit = document.createElement("span")
            unit.className = options.classes.labelUnitClass
            unit.appendChild(document.createTextNode(labelUnit))
            label.appendChild(unit)
        }

        return label
    }

    function slider(key, opt, node) {
        var input = helpers.isNode(node) ? node : document.createElement("input")

        var attributes = {
            type: "range",
            min: opt.min,
            max: opt.max,
            step: opt.step
        }

        input.setAttribute("autocomplete", "off")
        setMissingAttributes(input, attributes)

        if (typeof(input.val) === "undefined") {
            input.value = opt.init
        }

        if ("unit" in input.dataset === false) {
            input.dataset.unit = opt.unit
        }
        if ("init" in input.dataset === false) {
            input.dataset.init = opt.init
        }

        input.dataset.fsjs = key

        return input
    }

    function dropdown(key, opt) {
        var dropdown = document.createElement("select")
        dropdown.dataset.fsjs = key

        for (var o in opt.choices) {
            var option = document.createElement("option"),
                choice = parseChoice(opt.choices[o])

            option.value = choice.val
            option.appendChild(document.createTextNode(choice.text))
            dropdown.appendChild(option)
        }

        return dropdown
    }

    function textfield(key, opt, node) {
        var tester = typeof(node) === "undefined" || node === null ? document.createElement("div") : node,
            attr = {
                autocomplete: "off",
                autocorrect: "off",
                autocapitalize: "off",
                spellcheck: "false",
                contenteditable: opt.editable
            }

        setMissingAttributes(tester, attr)

        tester.dataset.fsjs = key

        // If the original root element was a single DOM element with some text, copy that
        // text into the tester
        // TODO move this to interface and on tester node init
        if (options.initialText) {
            tester.append(document.createTextNode(options.initialText))
        } else if (!options.initialText && options.originalText) {
            tester.append(document.createTextNode(options.originalText))
        }

        return tester
    }

    function buttongroup(key, opt) {
        var group = document.createElement("div")

        group.dataset.fsjs = key

        for (var o in opt.choices) {
            var button = document.createElement("button"),
                choice = parseChoice(opt.choices[o])

            button.dataset.choice = choice.val
            button.appendChild(document.createTextNode(choice.text))
            if (opt.init === choice.val) {
                button.className = options.classes.buttonSelected
            }
            group.appendChild(button)
        }

        return group
    }

    function checkboxes(key, opt) {
        var group = document.createElement("div")

        group.dataset.fsjs = key

        for (var o in opt.choices) {
            var choice = parseChoice(opt.choices[o]),
                label = document.createElement("label"),
                checkbox = document.createElement("input"),
                text = document.createElement("span")

            checkbox.setAttribute("type", "checkbox")
            checkbox.dataset.feature = choice.val

            text.appendChild(document.createTextNode(choice.text))

            label.appendChild(checkbox)
            label.appendChild(text)

            group.append(label)
        }

        return group
    }

    /**
     * Split an input choice into value and text or return only the value as 
     * both if no separator is used to provide a readable label
     * e.g. "ltr|Left" to right becomes { val: "ltr", text: "Left to right"}
     * but: "left" becomes { val: "left", text: "left"}
     * @param string choice 
     * @return obj {val, text}
     */
    function parseChoice(choice) {
        var parts, val, text

        if (choice.indexOf("|") !== -1) {
            parts = choice.split("|")
            val = parts[0]
            text = parts[1]
        } else {
            val = choice
            text = choice
        }

        return {
            val: val,
            text: text
        }
    }

    function setMissingAttributes(node, attributes) {
        if (typeof(node) === "undefined" || node === null || typeof(attributes) !== "object") {
            return
        }

        for (var a in attributes) {
            if (attributes.hasOwnProperty(a)) {
                if (!node.hasAttribute(a)) {
                    node.setAttribute(a, attributes[a])
                }
            }
        }
    }

    return {
        dropdown: dropdown,
        slider: slider,
        label: label,
        textfield: textfield,
        buttongroup: buttongroup,
        checkboxes: checkboxes
    }
}

module.exports = UIElements
},{"./helpers":7}]},{},[6])(6)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
var Fontsampler = require("fontsampler-js/dist/fontsampler")
var FontsamplerSkin = require("fontsampler-js/dist/fontsampler-skin")

window.addEventListener("load", function () {

    var fontsamplers = document.querySelectorAll(".fontsampler-wrapper")
    var options = {
        rootClass: "fontsampler-wrapper",
        generate: false,
        lazyload: true,
        // ui: {
        // }
    }


    // store this method globally, so it can be called again
    window.fontsamplers = []
    window.fontsamplerSetup = function (node) {
        // return
        var fs = new Fontsampler(node, false, options).init()
            FontsamplerSkin(fs)
            fs.init()

            // additional UI setup specific to Fontsampler WP
            var sampleTextSelect = fs.root.querySelector("select[name='sample-text']")
            if (sampleTextSelect) {
                sampleTextSelect.addEventListener("change", function () {
                    fs.setText(sampleTextSelect.value)
                })
            }

            var invertButtons = fs.root.querySelectorAll("[data-fsjs-block='invert'] button")
            if (invertButtons) {
                for (var b = 0; b < invertButtons.length; b++) {
                    invertButtons[b].addEventListener("click", onInvertClicked)
                }
            }
            function onInvertClicked (e) {
                // var selectedClass = fs.getOption(classes.buttonSelected)
                var selectedClass = "fsjs-button-selected"

                // jquery, bad, sad, mad
                jQuery(e.currentTarget).addClass(selectedClass).siblings().removeClass(selectedClass)
                jQuery(fs.root.querySelector(".fsjs-block-tester .current-font"))
                    .toggleClass("invert", e.currentTarget.dataset.choice === "negative")
            }

            window.fontsamplers.push(fs)
    }

    if (fontsamplers.length > 0) {
        for (var i = 0; i < fontsamplers.length; i++) {
            window.fontsamplerSetup(fontsamplers[i])
        }
    }

});
},{"fontsampler-js/dist/fontsampler":2,"fontsampler-js/dist/fontsampler-skin":1}]},{},[3])(3)
});