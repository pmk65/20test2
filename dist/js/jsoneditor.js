/*!
 * /**
 * * @name JSON Editor
 * * @description JSON Schema Based Editor
 * * This library is the continuation of jdorn's great work (see also https://github.com/jdorn/json-editor/issues/800)
 * * @version "2.0.0-alpha.0"
 * * @author Jeremy Dorn
 * * @see https://github.com/jdorn/json-editor/
 * * @see https://github.com/json-editor/json-editor
 * * @license MIT
 * * @example see README.md and docs/ for requirements, examples and usage info
 * * /
 */
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/choices.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/choices.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".choices > * {\n  box-sizing: border-box;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/starrating.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/starrating.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".starrating {\n  direction: rtl;\n  display: inline-block;\n  white-space:nowrap;\n}\n.starrating > input {\n  display: none;\n}  /* Remove radio buttons */\n.starrating > label:before {\n  content: '\\2606'; /* Empty Star */\n  margin: 1px;\n  font-size: 18px;\n  font-style:normal;\n  font-weight:400;\n  line-height:1;\n  font-family: 'Arial';\n  display: inline-block;\n}\n.starrating > label {\n  color: #888; /* Start color when not clicked */\n  cursor: pointer;\n  margin: 0;\n  margin: 8px 0 2px 0;\n}\n.starrating > label.starrating-display-enabled {\n  margin: 1px 0 0 0;\n}\n.starrating > input:checked ~ label,\n.starrating:not(.readonly) > input:hover ~ label {\n  color: #ffca08; /* Set yellow color when star checked/hover */\n}\n.starrating > input:checked ~ label:before,\n.starrating:not(.readonly) > input:hover ~ label:before {\n  content: '\\2605'; /* Filled Star when star checked/hover */\n  text-shadow: 0 0 1px rgba(0,20,20,1);\n}\n.starrating .starrating-display {\n  position: relative;\n  direction: rtl;     \n  text-align: center;\n  font-size: 10px;\n  line-height: 0px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/*! exports provided: Class */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Class", function() { return Class; });
/* jshint loopfunc: true */
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
var Class =
(function () {
  var initializing = false; var fnTest = /xyz/.test(function () { window.postMessage('xyz') }) ? /\b_super\b/ : /.*/

  // The base Class implementation (does nothing)
  Class = function () {}

  // Create a new Class that inherits from this class
  Class.extend = function extend (prop) {
    var _super = this.prototype

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true
    var prototype = new this()
    initializing = false

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] === 'function' &&
        typeof _super[name] === 'function' && fnTest.test(prop[name])
        ? (function (name, fn) {
          return function () {
            var tmp = this._super

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name]

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments)
            this._super = tmp

            return ret
          }
        })(name, prop[name])
        : prop[name]
    }

    // The dummy class constructor
    function Class () {
      // All construction is actually done in the init method
      if (!initializing && this.init) { this.init.apply(this, arguments) }
    }

    // Populate our constructed prototype object
    Class.prototype = prototype

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class

    // And make this class extendable
    Class.extend = extend

    return Class
  }

  return Class
})()


/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: JSONEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONEditor", function() { return JSONEditor; });
/* harmony import */ var _styles_choices_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/choices.css */ "./src/styles/choices.css");
/* harmony import */ var _styles_choices_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_choices_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_starrating_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/starrating.css */ "./src/styles/starrating.css");
/* harmony import */ var _styles_starrating_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_starrating_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaults */ "./src/defaults.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "./src/validator.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/* harmony import */ var _themes_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themes/html */ "./src/themes/html.js");
/* harmony import */ var _themes_bootstrap2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./themes/bootstrap2 */ "./src/themes/bootstrap2.js");
/* harmony import */ var _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themes/bootstrap3 */ "./src/themes/bootstrap3.js");
/* harmony import */ var _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./themes/bootstrap4 */ "./src/themes/bootstrap4.js");
/* harmony import */ var _themes_foundation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themes/foundation */ "./src/themes/foundation.js");
/* harmony import */ var _themes_jqueryui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./themes/jqueryui */ "./src/themes/jqueryui.js");
/* harmony import */ var _themes_barebones__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./themes/barebones */ "./src/themes/barebones.js");
/* harmony import */ var _themes_materialize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./themes/materialize */ "./src/themes/materialize.js");
/* harmony import */ var _themes_spectre__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./themes/spectre */ "./src/themes/spectre.js");
/* harmony import */ var _themes_tailwind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./themes/tailwind */ "./src/themes/tailwind.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./editor */ "./src/editor.js");
/* harmony import */ var _editors_ace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editors/ace */ "./src/editors/ace.js");
/* harmony import */ var _editors_array__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editors/array */ "./src/editors/array.js");
/* harmony import */ var _editors_array_choices__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./editors/array/choices */ "./src/editors/array/choices.js");
/* harmony import */ var _editors_array_select2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editors/array/select2 */ "./src/editors/array/select2.js");
/* harmony import */ var _editors_array_selectize__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./editors/array/selectize */ "./src/editors/array/selectize.js");
/* harmony import */ var _editors_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editors/autocomplete */ "./src/editors/autocomplete.js");
/* harmony import */ var _editors_base64__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editors/base64 */ "./src/editors/base64.js");
/* harmony import */ var _editors_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./editors/button */ "./src/editors/button.js");
/* harmony import */ var _editors_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editors/checkbox */ "./src/editors/checkbox.js");
/* harmony import */ var _editors_choices__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./editors/choices */ "./src/editors/choices.js");
/* harmony import */ var _editors_datetime__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./editors/datetime */ "./src/editors/datetime.js");
/* harmony import */ var _editors_describedby__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editors/describedby */ "./src/editors/describedby.js");
/* harmony import */ var _editors_enum__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./editors/enum */ "./src/editors/enum.js");
/* harmony import */ var _editors_hidden__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./editors/hidden */ "./src/editors/hidden.js");
/* harmony import */ var _editors_info__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./editors/info */ "./src/editors/info.js");
/* harmony import */ var _editors_integer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./editors/integer */ "./src/editors/integer.js");
/* harmony import */ var _editors_ip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./editors/ip */ "./src/editors/ip.js");
/* harmony import */ var _editors_jodit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./editors/jodit */ "./src/editors/jodit.js");
/* harmony import */ var _editors_multiple__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./editors/multiple */ "./src/editors/multiple.js");
/* harmony import */ var _editors_multiselect__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./editors/multiselect */ "./src/editors/multiselect.js");
/* harmony import */ var _editors_null__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./editors/null */ "./src/editors/null.js");
/* harmony import */ var _editors_number__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./editors/number */ "./src/editors/number.js");
/* harmony import */ var _editors_object__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./editors/object */ "./src/editors/object.js");
/* harmony import */ var _editors_radio__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./editors/radio */ "./src/editors/radio.js");
/* harmony import */ var _editors_sceditor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./editors/sceditor */ "./src/editors/sceditor.js");
/* harmony import */ var _editors_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./editors/select */ "./src/editors/select.js");
/* harmony import */ var _editors_select2__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./editors/select2 */ "./src/editors/select2.js");
/* harmony import */ var _editors_selectize__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./editors/selectize */ "./src/editors/selectize.js");
/* harmony import */ var _editors_signature__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./editors/signature */ "./src/editors/signature.js");
/* harmony import */ var _editors_simplemde__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./editors/simplemde */ "./src/editors/simplemde.js");
/* harmony import */ var _editors_starrating__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./editors/starrating */ "./src/editors/starrating.js");
/* harmony import */ var _editors_string__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./editors/string */ "./src/editors/string.js");
/* harmony import */ var _editors_table__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./editors/table */ "./src/editors/table.js");
/* harmony import */ var _editors_upload__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./editors/upload */ "./src/editors/upload.js");
/* harmony import */ var _editors_uuid__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./editors/uuid */ "./src/editors/uuid.js");
/* harmony import */ var _editors_colorpicker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./editors/colorpicker */ "./src/editors/colorpicker.js");
/* harmony import */ var _templates_default__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./templates/default */ "./src/templates/default.js");
/* harmony import */ var _templates_ejs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./templates/ejs */ "./src/templates/ejs.js");
/* harmony import */ var _templates_handlebars__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./templates/handlebars */ "./src/templates/handlebars.js");
/* harmony import */ var _templates_hogan__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./templates/hogan */ "./src/templates/hogan.js");
/* harmony import */ var _templates_lodash__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./templates/lodash */ "./src/templates/lodash.js");
/* harmony import */ var _templates_markup__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./templates/markup */ "./src/templates/markup.js");
/* harmony import */ var _templates_mustache__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./templates/mustache */ "./src/templates/mustache.js");
/* harmony import */ var _templates_swig__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./templates/swig */ "./src/templates/swig.js");
/* harmony import */ var _templates_underscore__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./templates/underscore */ "./src/templates/underscore.js");
/* harmony import */ var _iconlibs_bootstrap2__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./iconlibs/bootstrap2 */ "./src/iconlibs/bootstrap2.js");
/* harmony import */ var _iconlibs_bootstrap3__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./iconlibs/bootstrap3 */ "./src/iconlibs/bootstrap3.js");
/* harmony import */ var _iconlibs_fontawesome3__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./iconlibs/fontawesome3 */ "./src/iconlibs/fontawesome3.js");
/* harmony import */ var _iconlibs_fontawesome4__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./iconlibs/fontawesome4 */ "./src/iconlibs/fontawesome4.js");
/* harmony import */ var _iconlibs_fontawesome5__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./iconlibs/fontawesome5 */ "./src/iconlibs/fontawesome5.js");
/* harmony import */ var _iconlibs_foundation2__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./iconlibs/foundation2 */ "./src/iconlibs/foundation2.js");
/* harmony import */ var _iconlibs_foundation3__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./iconlibs/foundation3 */ "./src/iconlibs/foundation3.js");
/* harmony import */ var _iconlibs_jqueryui__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./iconlibs/jqueryui */ "./src/iconlibs/jqueryui.js");
/* harmony import */ var _iconlibs_materialicons__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./iconlibs/materialicons */ "./src/iconlibs/materialicons.js");
/* harmony import */ var _iconlibs_spectre__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./iconlibs/spectre */ "./src/iconlibs/spectre.js");













































































var assignIconlibs = function (iconlibs) {
  iconlibs.bootstrap2 = _iconlibs_bootstrap2__WEBPACK_IMPORTED_MODULE_61__["bootstrap2Iconlib"]
  iconlibs.bootstrap3 = _iconlibs_bootstrap3__WEBPACK_IMPORTED_MODULE_62__["bootstrap3Iconlib"]
  iconlibs.fontawesome3 = _iconlibs_fontawesome3__WEBPACK_IMPORTED_MODULE_63__["fontawesome3Iconlib"]
  iconlibs.fontawesome4 = _iconlibs_fontawesome4__WEBPACK_IMPORTED_MODULE_64__["fontawesome4Iconlib"]
  iconlibs.fontawesome5 = _iconlibs_fontawesome5__WEBPACK_IMPORTED_MODULE_65__["fontawesome5Iconlib"]
  iconlibs.foundation2 = _iconlibs_foundation2__WEBPACK_IMPORTED_MODULE_66__["foundation2Iconlib"]
  iconlibs.foundation3 = _iconlibs_foundation3__WEBPACK_IMPORTED_MODULE_67__["foundation3Iconlib"]
  iconlibs.jqueryui = _iconlibs_jqueryui__WEBPACK_IMPORTED_MODULE_68__["jqueryuiIconlib"]
  iconlibs.materialicons = _iconlibs_materialicons__WEBPACK_IMPORTED_MODULE_69__["materialiconsIconlib"]
  iconlibs.spectre = _iconlibs_spectre__WEBPACK_IMPORTED_MODULE_70__["spectreIconlib"]
}

var assignThemes = function (themes) {
  themes.html = _themes_html__WEBPACK_IMPORTED_MODULE_5__["htmlTheme"]
  themes.bootstrap2 = _themes_bootstrap2__WEBPACK_IMPORTED_MODULE_6__["bootstrap2Theme"]
  themes.bootstrap3 = _themes_bootstrap3__WEBPACK_IMPORTED_MODULE_7__["bootstrap3Theme"]
  themes.bootstrap4 = _themes_bootstrap4__WEBPACK_IMPORTED_MODULE_8__["bootstrap4Theme"]
  themes.foundation = _themes_foundation__WEBPACK_IMPORTED_MODULE_9__["foundationTheme"]
  themes.foundation3 = _themes_foundation__WEBPACK_IMPORTED_MODULE_9__["foundation3Theme"]
  themes.foundation4 = _themes_foundation__WEBPACK_IMPORTED_MODULE_9__["foundation4Theme"]
  themes.foundation5 = _themes_foundation__WEBPACK_IMPORTED_MODULE_9__["foundation5Theme"]
  themes.foundation6 = _themes_foundation__WEBPACK_IMPORTED_MODULE_9__["foundation6Theme"]
  themes.jqueryui = _themes_jqueryui__WEBPACK_IMPORTED_MODULE_10__["jqueryuiTheme"]
  themes.barebones = _themes_barebones__WEBPACK_IMPORTED_MODULE_11__["barebonesTheme"]
  themes.materialize = _themes_materialize__WEBPACK_IMPORTED_MODULE_12__["materializeTheme"]
  themes.spectre = _themes_spectre__WEBPACK_IMPORTED_MODULE_13__["spectreTheme"]
  themes.tailwind = _themes_tailwind__WEBPACK_IMPORTED_MODULE_14__["tailwindTheme"]
}

// Internal helper function called only here so we won't export as part of class
// Previously the assignment to the JSONEditor.defaults.editors was done in each of the editor
// files but doing it this way removes each of the editors' dependency on JSONEditor
var assignDefaultEditors = function (editors) {
  editors.ace = _editors_ace__WEBPACK_IMPORTED_MODULE_16__["AceEditor"]
  editors.array = _editors_array__WEBPACK_IMPORTED_MODULE_17__["ArrayEditor"]
  editors.arrayChoices = _editors_array_choices__WEBPACK_IMPORTED_MODULE_18__["ArrayChoicesEditor"]
  editors.arraySelect2 = _editors_array_select2__WEBPACK_IMPORTED_MODULE_19__["ArraySelect2Editor"]
  editors.arraySelectize = _editors_array_selectize__WEBPACK_IMPORTED_MODULE_20__["ArraySelectizeEditor"]
  editors.autocomplete = _editors_autocomplete__WEBPACK_IMPORTED_MODULE_21__["AutocompleteEditor"]
  editors.base64 = _editors_base64__WEBPACK_IMPORTED_MODULE_22__["Base64Editor"]
  editors.button = _editors_button__WEBPACK_IMPORTED_MODULE_23__["ButtonEditor"]
  editors.checkbox = _editors_checkbox__WEBPACK_IMPORTED_MODULE_24__["CheckboxEditor"]
  editors.choices = _editors_choices__WEBPACK_IMPORTED_MODULE_25__["ChoicesEditor"]
  editors.datetime = _editors_datetime__WEBPACK_IMPORTED_MODULE_26__["DatetimeEditor"]
  editors.describedBy = _editors_describedby__WEBPACK_IMPORTED_MODULE_27__["DescribedByEditor"]
  editors.enum = _editors_enum__WEBPACK_IMPORTED_MODULE_28__["EnumEditor"]
  editors.hidden = _editors_hidden__WEBPACK_IMPORTED_MODULE_29__["HiddenEditor"]
  editors.info = _editors_info__WEBPACK_IMPORTED_MODULE_30__["InfoEditor"]
  editors.integer = _editors_integer__WEBPACK_IMPORTED_MODULE_31__["IntegerEditor"]
  editors.ip = _editors_ip__WEBPACK_IMPORTED_MODULE_32__["IpEditor"]
  editors.jodit = _editors_jodit__WEBPACK_IMPORTED_MODULE_33__["JoditEditor"]
  editors.multiple = _editors_multiple__WEBPACK_IMPORTED_MODULE_34__["MultipleEditor"]
  editors.multiselect = _editors_multiselect__WEBPACK_IMPORTED_MODULE_35__["MultiSelectEditor"]
  editors.null = _editors_null__WEBPACK_IMPORTED_MODULE_36__["NullEditor"]
  editors.number = _editors_number__WEBPACK_IMPORTED_MODULE_37__["NumberEditor"]
  editors.object = _editors_object__WEBPACK_IMPORTED_MODULE_38__["ObjectEditor"]
  editors.radio = _editors_radio__WEBPACK_IMPORTED_MODULE_39__["RadioEditor"]
  editors.sceditor = _editors_sceditor__WEBPACK_IMPORTED_MODULE_40__["ScEditor"]
  editors.select = _editors_select__WEBPACK_IMPORTED_MODULE_41__["SelectEditor"]
  editors.select2 = _editors_select2__WEBPACK_IMPORTED_MODULE_42__["Select2Editor"]
  editors.selectize = _editors_selectize__WEBPACK_IMPORTED_MODULE_43__["SelectizeEditor"]
  editors.signature = _editors_signature__WEBPACK_IMPORTED_MODULE_44__["SignatureEditor"]
  editors.simplemde = _editors_simplemde__WEBPACK_IMPORTED_MODULE_45__["SimplemdeEditor"]
  editors.starrating = _editors_starrating__WEBPACK_IMPORTED_MODULE_46__["StarratingEditor"]
  editors.string = _editors_string__WEBPACK_IMPORTED_MODULE_47__["StringEditor"]
  editors.table = _editors_table__WEBPACK_IMPORTED_MODULE_48__["TableEditor"]
  editors.upload = _editors_upload__WEBPACK_IMPORTED_MODULE_49__["UploadEditor"]
  editors.uuid = _editors_uuid__WEBPACK_IMPORTED_MODULE_50__["UuidEditor"]
  editors.colorpicker = _editors_colorpicker__WEBPACK_IMPORTED_MODULE_51__["ColorEditor"]
}

var assignTemplates = function (templates) {
  templates.default = _templates_default__WEBPACK_IMPORTED_MODULE_52__["defaultTemplate"]
  templates.ejs = _templates_ejs__WEBPACK_IMPORTED_MODULE_53__["ejsTemplate"]
  templates.handlebars = _templates_handlebars__WEBPACK_IMPORTED_MODULE_54__["handlebarsTemplate"]
  templates.hogan = _templates_hogan__WEBPACK_IMPORTED_MODULE_55__["hoganTemplate"]
  templates.hogan = _templates_lodash__WEBPACK_IMPORTED_MODULE_56__["lodashTemplate"]
  templates.markup = _templates_markup__WEBPACK_IMPORTED_MODULE_57__["markupTemplate"]
  templates.mustache = _templates_mustache__WEBPACK_IMPORTED_MODULE_58__["mustacheTemplate"]
  templates.swig = _templates_swig__WEBPACK_IMPORTED_MODULE_59__["swigTemplate"]
  templates.underscore = _templates_underscore__WEBPACK_IMPORTED_MODULE_60__["underscoreTemplate"]
}

var JSONEditor = function (element, options) {
  // eslint-disable-next-line no-undef
  if (!(element instanceof Element)) {
    throw new Error('element should be an instance of Element')
  }
  options = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, JSONEditor.defaults.options, options || {})
  this.element = element
  this.options = options
  this.init()
}
JSONEditor.prototype = {
  // necessary since we remove the ctor property by doing a literal assignment. Without this
  // the $isplainobject function will think that this is a plain object.
  constructor: JSONEditor,
  init: function () {
    var self = this

    this.ready = false
    this.copyClipboard = null
    // full references info
    this.refs_with_info = {}
    this.refs_prefix = '#/counter/'
    this.refs_counter = 1

    var themeName = this.options.theme || JSONEditor.defaults.theme
    var themeClass = JSONEditor.defaults.themes[themeName]
    if (!themeClass) throw new Error('Unknown theme ' + themeName)

    this.schema = this.options.schema
    // eslint-disable-next-line new-cap
    this.theme = new themeClass(this)

    this.element.setAttribute('data-theme', themeName)
    if (!this.theme.options.disable_theme_rules) this.addNewStyleRules(themeName, this.theme.rules)

    this.template = this.options.template
    this.refs = this.options.refs || {}
    this.uuid = 0
    this.__data = {}

    var iconClass = JSONEditor.defaults.iconlibs[this.options.iconlib || JSONEditor.defaults.iconlib]
    // eslint-disable-next-line new-cap
    if (iconClass) this.iconlib = new iconClass()

    this.root_container = this.theme.getContainer()

    this.element.appendChild(this.root_container)

    this.translate = this.options.translate || JSONEditor.defaults.translate

    // Fetch all external refs via ajax
    var fetchUrl = document.location.origin + document.location.pathname.toString()
    var fileBase = this._getFileBase()
    this._loadExternalRefs(this.schema, function () {
      self._getDefinitions(self.schema, fetchUrl + '#/definitions/')

      // Validator options
      var validatorOptions = {}
      if (self.options.custom_validators) {
        validatorOptions.custom_validators = self.options.custom_validators
      }
      self.validator = new _validator__WEBPACK_IMPORTED_MODULE_3__["Validator"](self, null, validatorOptions, JSONEditor.defaults)

      // Create the root editor
      var schema = self.expandRefs(self.schema)
      var editorClass = self.getEditorClass(schema)
      self.root = self.createEditor(editorClass, {
        jsoneditor: self,
        schema: schema,
        required: true,
        container: self.root_container
      })

      self.root.preBuild()
      self.root.build()
      self.root.postBuild()

      // Starting data
      if (self.options.hasOwnProperty('startval')) self.root.setValue(self.options.startval)

      self.validation_results = self.validator.validate(self.root.getValue())
      self.root.showValidationErrors(self.validation_results)
      self.ready = true

      // Fire ready event asynchronously
      window.requestAnimationFrame(function () {
        if (!self.ready) return
        self.validation_results = self.validator.validate(self.root.getValue())
        self.root.showValidationErrors(self.validation_results)
        self.trigger('ready')
        self.trigger('change')
      })
    }, fetchUrl, fileBase)
  },

  getValue: function () {
    if (!this.ready) throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before getting the value")

    return this.root.getValue()
  },
  setValue: function (value) {
    if (!this.ready) throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before setting the value")

    this.root.setValue(value)
    return this
  },
  validate: function (value) {
    if (!this.ready) throw new Error("JSON Editor not ready yet.  Listen for 'ready' event before validating")

    // Custom value
    if (arguments.length === 1) {
      return this.validator.validate(value)
    // Current value (use cached result)
    } else {
      return this.validation_results
    }
  },
  destroy: function () {
    if (this.destroyed) return
    if (!this.ready) return

    this.schema = null
    this.options = null
    this.root.destroy()
    this.root = null
    this.root_container = null
    this.validator = null
    this.validation_results = null
    this.theme = null
    this.iconlib = null
    this.template = null
    this.__data = null
    this.ready = false
    this.element.innerHTML = ''
    this.element.removeAttribute('data-theme')

    this.destroyed = true
  },
  on: function (event, callback) {
    this.callbacks = this.callbacks || {}
    this.callbacks[event] = this.callbacks[event] || []
    this.callbacks[event].push(callback)

    return this
  },
  off: function (event, callback) {
    // Specific callback
    if (event && callback) {
      this.callbacks = this.callbacks || {}
      this.callbacks[event] = this.callbacks[event] || []
      var newcallbacks = []
      for (var i = 0; i < this.callbacks[event].length; i++) {
        if (this.callbacks[event][i] === callback) continue
        newcallbacks.push(this.callbacks[event][i])
      }
      this.callbacks[event] = newcallbacks
    } else if (event) {
    // All callbacks for a specific event
      this.callbacks = this.callbacks || {}
      this.callbacks[event] = []
    } else {
    // All callbacks for all events
      this.callbacks = {}
    }

    return this
  },
  trigger: function (event, editor) {
    if (this.callbacks && this.callbacks[event] && this.callbacks[event].length) {
      for (var i = 0; i < this.callbacks[event].length; i++) {
        this.callbacks[event][i].apply(this, [editor])
      }
    }

    return this
  },
  setOption: function (option, value) {
    if (option === 'show_errors') {
      this.options.show_errors = value
      this.onChange()
    } else {
    // Only the `show_errors` option is supported for now
      throw new Error('Option ' + option + ' must be set during instantiation and cannot be changed later')
    }

    return this
  },
  getEditorClass: function (schema) {
    var classname

    schema = this.expandSchema(schema)

    Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(JSONEditor.defaults.resolvers, function (i, resolver) {
      var tmp = resolver(schema)
      if (tmp) {
        if (JSONEditor.defaults.editors[tmp]) {
          classname = tmp
          return false
        }
      }
    })

    if (!classname) throw new Error('Unknown editor for schema ' + JSON.stringify(schema))
    if (!JSONEditor.defaults.editors[classname]) throw new Error('Unknown editor ' + classname)

    return JSONEditor.defaults.editors[classname]
  },
  createEditor: function (editorClass, options) {
    options = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, editorClass.options || {}, options)
    // eslint-disable-next-line new-cap
    return new editorClass(options, JSONEditor.defaults)
  },
  onChange: function () {
    if (!this.ready) return

    if (this.firing_change) return
    this.firing_change = true

    var self = this

    window.requestAnimationFrame(function () {
      self.firing_change = false
      if (!self.ready) return

      // Validate and cache results
      self.validation_results = self.validator.validate(self.root.getValue())

      if (self.options.show_errors !== 'never') {
        self.root.showValidationErrors(self.validation_results)
      } else {
        self.root.showValidationErrors([])
      }

      // Fire change event
      self.trigger('change')
    })

    return this
  },
  compileTemplate: function (template, name) {
    name = name || JSONEditor.defaults.template

    var engine

    // Specifying a preset engine
    if (typeof name === 'string') {
      if (!JSONEditor.defaults.templates[name]) throw new Error('Unknown template engine ' + name)
      engine = JSONEditor.defaults.templates[name]()

      if (!engine) throw new Error('Template engine ' + name + ' missing required library.')
    } else {
    // Specifying a custom engine
      engine = name
    }

    if (!engine) throw new Error('No template engine set')
    if (!engine.compile) throw new Error('Invalid template engine set')

    return engine.compile(template)
  },
  _data: function (el, key, value) {
    // Setting data
    if (arguments.length === 3) {
      var uuid
      if (el.hasAttribute('data-jsoneditor-' + key)) {
        uuid = el.getAttribute('data-jsoneditor-' + key)
      } else {
        uuid = this.uuid++
        el.setAttribute('data-jsoneditor-' + key, uuid)
      }

      this.__data[uuid] = value
    } else {
    // Getting data
      // No data stored
      if (!el.hasAttribute('data-jsoneditor-' + key)) return null

      return this.__data[el.getAttribute('data-jsoneditor-' + key)]
    }
  },
  registerEditor: function (editor) {
    this.editors = this.editors || {}
    this.editors[editor.path] = editor
    return this
  },
  unregisterEditor: function (editor) {
    this.editors = this.editors || {}
    this.editors[editor.path] = null
    return this
  },
  getEditor: function (path) {
    if (!this.editors) return
    return this.editors[path]
  },
  watch: function (path, callback) {
    this.watchlist = this.watchlist || {}
    this.watchlist[path] = this.watchlist[path] || []
    this.watchlist[path].push(callback)

    return this
  },
  unwatch: function (path, callback) {
    if (!this.watchlist || !this.watchlist[path]) return this
    // If removing all callbacks for a path
    if (!callback) {
      this.watchlist[path] = null
      return this
    }

    var newlist = []
    for (var i = 0; i < this.watchlist[path].length; i++) {
      if (this.watchlist[path][i] === callback) continue
      else newlist.push(this.watchlist[path][i])
    }
    this.watchlist[path] = newlist.length ? newlist : null
    return this
  },
  notifyWatchers: function (path) {
    if (!this.watchlist || !this.watchlist[path]) return this
    for (var i = 0; i < this.watchlist[path].length; i++) {
      this.watchlist[path][i]()
    }
  },
  isEnabled: function () {
    return !this.root || this.root.isEnabled()
  },
  enable: function () {
    this.root.enable()
  },
  disable: function () {
    this.root.disable()
  },
  _getDefinitions: function (schema, path) {
    if (schema.definitions) {
      for (var i in schema.definitions) {
        if (!schema.definitions.hasOwnProperty(i)) continue
        this.refs[path + i] = schema.definitions[i]
        if (schema.definitions[i].definitions) {
          this._getDefinitions(schema.definitions[i], path + i + '/definitions/')
        }
      }
    }
  },
  _getExternalRefs: function (schema, fetchUrl) {
    var refs = {}
    var mergeRefs = function (newrefs) {
      for (var i in newrefs) {
        if (newrefs.hasOwnProperty(i)) {
          refs[i] = true
        }
      }
    }

    if (schema.$ref && typeof schema.$ref !== 'object') {
      var refCounter = this.refs_prefix + this.refs_counter++
      if (schema.$ref.substr(0, 1) !== '#' && !this.refs[schema.$ref]) {
        refs[schema.$ref] = true
      }
      this.refs_with_info[refCounter] = { fetchUrl: fetchUrl, '$ref': schema.$ref }
      schema.$ref = refCounter
    }

    for (var i in schema) {
      if (!schema.hasOwnProperty(i)) continue
      if (!schema[i] || typeof schema[i] !== 'object') continue
      if (Array.isArray(schema[i])) {
        for (var j = 0; j < schema[i].length; j++) {
          if (schema[i][j] && typeof schema[i][j] === 'object') {
            mergeRefs(this._getExternalRefs(schema[i][j], fetchUrl))
          }
        }
      } else {
        mergeRefs(this._getExternalRefs(schema[i], fetchUrl))
      }
    }
    return refs
  },
  _getFileBase: function () {
    var fileBase = this.options.ajaxBase
    if (typeof fileBase === 'undefined') {
      fileBase = this._getFileBaseFromFileLocation(document.location.toString())
    }
    return fileBase
  },
  _getFileBaseFromFileLocation: function (fileLocationString) {
    var pathItems = fileLocationString.split('/')
    pathItems.pop()
    return pathItems.join('/') + '/'
  },
  _loadExternalRefs: function (schema, callback, fetchUrl, fileBase) {
    var self = this
    var refs = this._getExternalRefs(schema, fetchUrl)
    var done = 0; var waiting = 0; var callbackFired = false

    Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(refs, function (url) {
      if (self.refs[url]) return
      if (!self.options.ajax) throw new Error('Must set ajax option to true to load external ref ' + url)
      self.refs[url] = 'loading'
      waiting++

      var fetchUrl = url
      if (fileBase !== url.substr(0, fileBase.length) && url.substr(0, 4) !== 'http' && url.substr(0, 1) !== '/') fetchUrl = fileBase + url

      // eslint-disable-next-line no-undef
      var r = new XMLHttpRequest()
      r.overrideMimeType('application/json')
      r.open('GET', fetchUrl, true)
      if (self.options.ajaxCredentials) r.withCredentials = self.options.ajaxCredentials
      r.onreadystatechange = function () {
        if (r.readyState !== 4) return
        // Request succeeded
        if (r.status === 200) {
          var response
          try {
            response = JSON.parse(r.responseText)
          } catch (e) {
            window.console.log(e)
            throw new Error('Failed to parse external ref ' + fetchUrl)
          }
          if (!(typeof response === 'boolean' || typeof response === 'object') || response === null || Array.isArray(response)) {
            throw new Error('External ref does not contain a valid schema - ' + fetchUrl)
          }

          self.refs[url] = response
          var fileBase = self._getFileBaseFromFileLocation(fetchUrl)
          self._getDefinitions(response, fetchUrl + '#/definitions/')
          self._loadExternalRefs(response, function () {
            done++
            if (done >= waiting && !callbackFired) {
              callbackFired = true
              callback()
            }
          }, fetchUrl, fileBase)
        } else {
        // Request failed
          window.console.log(r)
          throw new Error('Failed to fetch ref via ajax- ' + url)
        }
      }
      r.send()
    })

    if (!waiting) {
      callback()
    }
  },
  expandRefs: function (schema, recurseAllOf) {
    schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, schema)

    while (schema.$ref) {
      var refObj = this.refs_with_info[schema.$ref]
      delete schema.$ref
      var fetchUrl = ''
      if (refObj.$ref.startsWith('#')) {
        fetchUrl = refObj.fetchUrl
      }
      var ref = fetchUrl + refObj.$ref
      if (!this.refs[ref]) ref = fetchUrl + decodeURIComponent(refObj.$ref)
      if (recurseAllOf) {
        if (this.refs[ref].hasOwnProperty('allOf')) {
          var allOf = this.refs[ref].allOf
          for (var i = 0; i < allOf.length; i++) {
            allOf[i] = this.expandRefs(allOf[i], true)
          }
        }
      }
      schema = this.extendSchemas(schema, Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, this.refs[ref]))
    }
    return schema
  },
  expandSchema: function (schema, fileBase) {
    var self = this
    var extended = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, schema)
    var i

    // Version 3 `type`
    if (typeof schema.type === 'object') {
      // Array of types
      if (Array.isArray(schema.type)) {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(schema.type, function (key, value) {
          // Schema
          if (typeof value === 'object') {
            schema.type[key] = self.expandSchema(value)
          }
        })
      } else {
      // Schema
        schema.type = self.expandSchema(schema.type)
      }
    }
    // Version 3 `disallow`
    if (typeof schema.disallow === 'object') {
      // Array of types
      if (Array.isArray(schema.disallow)) {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(schema.disallow, function (key, value) {
          // Schema
          if (typeof value === 'object') {
            schema.disallow[key] = self.expandSchema(value)
          }
        })
      } else {
        // Schema
        schema.disallow = self.expandSchema(schema.disallow)
      }
    }
    // Version 4 `anyOf`
    if (schema.anyOf) {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(schema.anyOf, function (key, value) {
        schema.anyOf[key] = self.expandSchema(value)
      })
    }
    // Version 4 `dependencies` (schema dependencies)
    if (schema.dependencies) {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(schema.dependencies, function (key, value) {
        if (typeof value === 'object' && !(Array.isArray(value))) {
          schema.dependencies[key] = self.expandSchema(value)
        }
      })
    }
    // Version 4 `not`
    if (schema.not) {
      schema.not = this.expandSchema(schema.not)
    }

    // allOf schemas should be merged into the parent
    if (schema.allOf) {
      for (i = 0; i < schema.allOf.length; i++) {
        schema.allOf[i] = this.expandRefs(schema.allOf[i], true)
        extended = this.extendSchemas(extended, this.expandSchema(schema.allOf[i]))
      }
      delete extended.allOf
    }
    // extends schemas should be merged into parent
    if (schema['extends']) {
      // If extends is a schema
      if (!(Array.isArray(schema['extends']))) {
        extended = this.extendSchemas(extended, this.expandSchema(schema['extends']))
      } else {
      // If extends is an array of schemas
        for (i = 0; i < schema['extends'].length; i++) {
          extended = this.extendSchemas(extended, this.expandSchema(schema['extends'][i]))
        }
      }
      delete extended['extends']
    }
    // parent should be merged into oneOf schemas
    if (schema.oneOf) {
      var tmp = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, extended)
      delete tmp.oneOf
      for (i = 0; i < schema.oneOf.length; i++) {
        extended.oneOf[i] = this.extendSchemas(this.expandSchema(schema.oneOf[i]), tmp)
      }
    }

    return this.expandRefs(extended)
  },
  extendSchemas: function (obj1, obj2) {
    obj1 = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, obj1)
    obj2 = Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$extend"])({}, obj2)

    var self = this
    var extended = {}
    Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(obj1, function (prop, val) {
      // If this key is also defined in obj2, merge them
      if (typeof obj2[prop] !== 'undefined') {
        // Required and defaultProperties arrays should be unioned together
        if ((prop === 'required' || prop === 'defaultProperties') && typeof val === 'object' && Array.isArray(val)) {
          // Union arrays and unique
          extended[prop] = val.concat(obj2[prop]).reduce(function (p, c) {
            if (p.indexOf(c) < 0) p.push(c)
            return p
          }, [])
        } else if (prop === 'type' && (typeof val === 'string' || Array.isArray(val))) {
        // Type should be intersected and is either an array or string
          // Make sure we're dealing with arrays
          if (typeof val === 'string') val = [val]
          if (typeof obj2.type === 'string') obj2.type = [obj2.type]

          // If type is only defined in the first schema, keep it
          if (!obj2.type || !obj2.type.length) {
            extended.type = val
          } else {
          // If type is defined in both schemas, do an intersect
            extended.type = val.filter(function (n) {
              return obj2.type.indexOf(n) !== -1
            })
          }

          // If there's only 1 type and it's a primitive, use a string instead of array
          if (extended.type.length === 1 && typeof extended.type[0] === 'string') {
            extended.type = extended.type[0]
          } else if (extended.type.length === 0) {
          // Remove the type property if it's empty
            delete extended.type
          }
        } else if (typeof val === 'object' && Array.isArray(val)) {
          // All other arrays should be intersected (enum, etc.)
          extended[prop] = val.filter(function (n) {
            return obj2[prop].indexOf(n) !== -1
          })
        } else if (typeof val === 'object' && val !== null) {
        // Objects should be recursively merged
          extended[prop] = self.extendSchemas(val, obj2[prop])
        } else {
          // Otherwise, use the first value
          extended[prop] = val
        }
      } else {
        // Otherwise, just use the one in obj1
        extended[prop] = val
      }
    })
    // Properties in obj2 that aren't in obj1
    Object(_utilities__WEBPACK_IMPORTED_MODULE_4__["$each"])(obj2, function (prop, val) {
      if (typeof obj1[prop] === 'undefined') {
        extended[prop] = val
      }
    })

    return extended
  },
  setCopyClipboardContents: function (value) {
    this.copyClipboard = value
  },
  getCopyClipboardContents: function () {
    return this.copyClipboard
  },
  addNewStyleRules: function (themeName, rules) {
    var styleTag = document.querySelector('#theme-' + themeName)
    if (!styleTag) {
      styleTag = document.createElement('style')
      styleTag.setAttribute('id', 'theme-' + themeName)
      styleTag.appendChild(document.createTextNode(''))
      document.head.appendChild(styleTag)
    }

    var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet
    var qualifier = this.element.nodeName.toLowerCase()

    for (var selector in rules) {
      if (!rules.hasOwnProperty(selector)) continue
      var sel = qualifier + '[data-theme="' + themeName + '"] ' + selector
      // all browsers, except IE before version 9
      if (sheet.insertRule) sheet.insertRule(sel + ' {' + rules[selector] + '}', 0)
      // Internet Explorer before version 9
      else if (sheet.addRule) sheet.addRule(sel, rules[selector], 0)
    }
  }
}

JSONEditor.defaults = Object(_defaults__WEBPACK_IMPORTED_MODULE_2__["getDefaults"])()
assignThemes(JSONEditor.defaults.themes)
JSONEditor.AbstractEditor = _editor__WEBPACK_IMPORTED_MODULE_15__["AbstractEditor"]
assignDefaultEditors(JSONEditor.defaults.editors)
assignTemplates(JSONEditor.defaults.templates)
assignIconlibs(JSONEditor.defaults.iconlibs)

window.JSONEditor = JSONEditor


/***/ }),

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! exports provided: getDefaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaults", function() { return getDefaults; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


function getDefaults () {
// To aid modularity and avoicd circular references, We are now returning defaults to the JSONEditor object in core
  // raher than editing it here but
  // I've created this local object (and will return the defaults property) to make it easier to merge the PR
  // Once the merge has been carried out, I recommend changing `JSONEditor.defaults` to `retval`
  var JSONEditor = {}

  // This assignment was previously in core.js but makes more sense here
  JSONEditor.defaults = {
    themes: {},
    templates: {},
    iconlibs: {},
    editors: {},
    languages: {},
    resolvers: [],
    custom_validators: []
  }

  // Set the default theme
  JSONEditor.defaults.theme = 'html'

  // Set the default template engine
  JSONEditor.defaults.template = 'default'

  // Default options when initializing JSON Editor
  JSONEditor.defaults.options = {}

  JSONEditor.defaults.options.prompt_before_delete = true

  JSONEditor.defaults.options.upload = function (type, file, cbs) {
    console.log('Upload handler required for upload editor')
  }

  // String translate function
  JSONEditor.defaults.translate = function (key, variables) {
    var lang = JSONEditor.defaults.languages[JSONEditor.defaults.language]
    if (!lang) throw new Error('Unknown language ' + JSONEditor.defaults.language)

    var string = lang[key] || JSONEditor.defaults.languages[JSONEditor.defaults.default_language][key]

    if (typeof string === 'undefined') throw new Error('Unknown translate string ' + key)

    if (variables) {
      for (var i = 0; i < variables.length; i++) {
        string = string.replace(new RegExp('\\{\\{' + i + '}}', 'g'), variables[i])
      }
    }

    return string
  }

  // Translation strings and default languages
  JSONEditor.defaults.default_language = 'en'
  JSONEditor.defaults.language = JSONEditor.defaults.default_language
  JSONEditor.defaults.languages.en = {
  /**
   * When a property is not set
   */
    error_notset: 'Property must be set',
    /**
   * When a string must not be empty
   */
    error_notempty: 'Value required',
    /**
   * When a value is not one of the enumerated values
   */
    error_enum: 'Value must be one of the enumerated values',
    /**
   * When a value doesn't validate any schema of a 'anyOf' combination
   */
    error_anyOf: 'Value must validate against at least one of the provided schemas',
    /**
   * When a value doesn't validate
   * @variables This key takes one variable: The number of schemas the value does not validate
   */
    error_oneOf: 'Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.',
    /**
   * When a value does not validate a 'not' schema
   */
    error_not: 'Value must not validate against the provided schema',
    /**
   * When a value does not match any of the provided types
   */
    error_type_union: 'Value must be one of the provided types',
    /**
   * When a value does not match the given type
   * @variables This key takes one variable: The type the value should be of
   */
    error_type: 'Value must be of type {{0}}',
    /**
   *  When the value validates one of the disallowed types
   */
    error_disallow_union: 'Value must not be one of the provided disallowed types',
    /**
   *  When the value validates a disallowed type
   * @variables This key takes one variable: The type the value should not be of
   */
    error_disallow: 'Value must not be of type {{0}}',
    /**
   * When a value is not a multiple of or divisible by a given number
   * @variables This key takes one variable: The number mentioned above
   */
    error_multipleOf: 'Value must be a multiple of {{0}}',
    /**
   * When a value is greater than it's supposed to be (exclusive)
   * @variables This key takes one variable: The maximum
   */
    error_maximum_excl: 'Value must be less than {{0}}',
    /**
   * When a value is greater than it's supposed to be (inclusive
   * @variables This key takes one variable: The maximum
   */
    error_maximum_incl: 'Value must be at most {{0}}',
    /**
   * When a value is lesser than it's supposed to be (exclusive)
   * @variables This key takes one variable: The minimum
   */
    error_minimum_excl: 'Value must be greater than {{0}}',
    /**
   * When a value is lesser than it's supposed to be (inclusive)
   * @variables This key takes one variable: The minimum
   */
    error_minimum_incl: 'Value must be at least {{0}}',
    /**
   * When a value have too many characters
   * @variables This key takes one variable: The maximum character count
   */
    error_maxLength: 'Value must be at most {{0}} characters long',
    /**
   * When a value does not have enough characters
   * @variables This key takes one variable: The minimum character count
   */
    error_minLength: 'Value must be at least {{0}} characters long',
    /**
   * When a value does not match a given pattern
   */
    error_pattern: 'Value must match the pattern {{0}}',
    /**
   * When an array has additional items whereas it is not supposed to
   */
    error_additionalItems: 'No additional items allowed in this array',
    /**
   * When there are to many items in an array
   * @variables This key takes one variable: The maximum item count
   */
    error_maxItems: 'Value must have at most {{0}} items',
    /**
   * When there are not enough items in an array
   * @variables This key takes one variable: The minimum item count
   */
    error_minItems: 'Value must have at least {{0}} items',
    /**
   * When an array is supposed to have unique items but has duplicates
   */
    error_uniqueItems: 'Array must have unique items',
    /**
   * When there are too many properties in an object
   * @variables This key takes one variable: The maximum property count
   */
    error_maxProperties: 'Object must have at most {{0}} properties',
    /**
   * When there are not enough properties in an object
   * @variables This key takes one variable: The minimum property count
   */
    error_minProperties: 'Object must have at least {{0}} properties',
    /**
   * When a required property is not defined
   * @variables This key takes one variable: The name of the missing property
   */
    error_required: "Object is missing the required property '{{0}}'",
    /**
   * When there is an additional property is set whereas there should be none
   * @variables This key takes one variable: The name of the additional property
   */
    error_additional_properties: 'No additional properties allowed, but property {{0}} is set',
    /**
   * When a dependency is not resolved
   * @variables This key takes one variable: The name of the missing property for the dependency
   */
    error_dependency: 'Must have property {{0}}',
    /**
   * When a date is in incorrect format
   * @variables This key takes one variable: The valid format
   */
    error_date: 'Date must be in the format {{0}}',
    /**
   * When a time is in incorrect format
   * @variables This key takes one variable: The valid format
   */
    error_time: 'Time must be in the format {{0}}',
    /**
   * When a datetime-local is in incorrect format
   * @variables This key takes one variable: The valid format
   */
    error_datetime_local: 'Datetime must be in the format {{0}}',
    /**
   * When a integer date is less than 1 January 1970
   */
    error_invalid_epoch: 'Date must be greater than 1 January 1970',
    /**
   * When an IPv4 is in incorrect format
   */
    error_ipv4: 'Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots',
    /**
   * When an IPv6 is in incorrect format
   */
    error_ipv6: 'Value must be a valid IPv6 address',
    /**
   * When a hostname is in incorrect format
   */
    error_hostname: 'The hostname has the wrong format',
    /**
   * Text on Delete All buttons
   */
    button_delete_all: 'All',
    /**
   * Title on Delete All buttons
   */
    button_delete_all_title: 'Delete All',
    /**
    * Text on Delete Last buttons
    * @variable This key takes one variable: The title of object to delete
    */
    button_delete_last: 'Last {{0}}',
    /**
    * Title on Delete Last buttons
    * @variable This key takes one variable: The title of object to delete
    */
    button_delete_last_title: 'Delete Last {{0}}',
    /**
    * Title on Add Row buttons
    * @variable This key takes one variable: The title of object to add
    */
    button_add_row_title: 'Add {{0}}',
    /**
    * Title on Move Down buttons
    */
    button_move_down_title: 'Move down',
    /**
    * Title on Move Up buttons
    */
    button_move_up_title: 'Move up',
    /**
    * Title on Object Properties buttons
    */
    button_object_properties: 'Object Properties',
    /**
    * Title on Delete Row buttons
    * @variable This key takes one variable: The title of object to delete
    */
    button_delete_row_title: 'Delete {{0}}',
    /**
    * Title on Delete Row buttons, short version (no parameter with the object title)
    */
    button_delete_row_title_short: 'Delete',
    /**
    * Title on Collapse buttons
    */
    button_collapse: 'Collapse',
    /**
    * Title on Expand buttons
    */
    button_expand: 'Expand',
    /**
    * Title on Flatpickr toggle buttons
    */
    flatpickr_toggle_button: 'Toggle',
    /**
    * Title on Flatpickr clear buttons
    */
    flatpickr_clear_button: 'Clear',
    /**
    * Choices input field placeholder text
    */
    choices_placeholder_text: 'Start typing to add value',
    /**
    * Default title for array items
    */
    default_array_item_title: 'item'
  }

  // Global callback list
  JSONEditor.defaults.callbacks = {

  }

  // Default per-editor options
  Object(_utilities__WEBPACK_IMPORTED_MODULE_0__["$each"])(JSONEditor.defaults.editors, function (i, editor) {
    JSONEditor.defaults.editors[i].options = editor.options || {}
  })

  // Set the default resolvers
  // Use "multiple" as a fall back for everything
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (typeof schema.type !== 'string') return 'multiple'
  })
  // If the type is not set but properties are defined, we can infer the type is actually object
  JSONEditor.defaults.resolvers.unshift(function (schema) {
  // If the schema is a simple type
    if (!schema.type && schema.properties) return 'object'
  })
  // If the type is set and it's a basic type, use the primitive editor
  JSONEditor.defaults.resolvers.unshift(function (schema) {
  // If the schema is a simple type
    if (typeof schema.type === 'string') return schema.type
  })
  // Use specialized editor for signatures
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'signature') return 'signature'
  })
  // Use the select editor for all boolean values
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'boolean') {
    // If explicitly set to 'checkbox', use that
      if (schema.format === 'checkbox' || (schema.options && schema.options.checkbox)) {
        return 'checkbox'
      }
      // Otherwise, default to select menu
      if (schema.format === 'select2') {
        return 'select2'
      }
      if (schema.format === 'selectize') {
        return 'selectize'
      }
      if (schema.format === 'choices') {
        return 'choices'
      }
      return 'select'
    }
  })
  // Use the multiple editor for schemas where the `type` is set to "any"
  JSONEditor.defaults.resolvers.unshift(function (schema) {
  // If the schema can be of any type
    if (schema.type === 'any') return 'multiple'
  })
  // Editor for base64 encoded files
  JSONEditor.defaults.resolvers.unshift(function (schema) {
  // If the schema can be of any type
    if (schema.type === 'string' && schema.media && schema.media.binaryEncoding === 'base64') {
      return 'base64'
    }
  })
  // Editor for uploading files
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'url' && window.FileReader && schema.options && schema.options.upload === Object(schema.options.upload)) {
      return 'upload'
    }
  })
  // Use the table editor for arrays with the format set to `table`
  JSONEditor.defaults.resolvers.unshift(function (schema) {
  // Type `array` with format set to `table`
    if (schema.type === 'array' && schema.format === 'table') {
      return 'table'
    }
  })
  // Use the `select` editor for dynamic enumSource enums
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.enumSource) {
      if (schema.format === 'radio') {
        return 'radio'
      }
      if (schema.format === 'select2') {
        return 'select2'
      }

      if (schema.format === 'selectize') {
        return 'selectize'
      }
      if (schema.format === 'choices') {
        return 'choices'
      }
      return 'select'
    }
  })
  // Use the `enum` or `select` editors for schemas with enumerated properties
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema['enum']) {
      if (schema.type === 'array' || schema.type === 'object') {
        return 'enum'
      } else if (schema.type === 'number' || schema.type === 'integer' || schema.type === 'string') {
        if (schema.format === 'radio') {
          return 'radio'
        }

        if (schema.format === 'select2') {
          return 'select2'
        }

        if (schema.format === 'selectize') {
          return 'selectize'
        }

        if (schema.format === 'choices') {
          return 'choices'
        }
        return 'select'
      }
    }
  })
  // Specialized editors for arrays of strings
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'array' && schema.items && !(Array.isArray(schema.items)) && ['string', 'number', 'integer'].indexOf(schema.items.type) >= 0) {
      if (schema.format === 'choices') {
        return 'arrayChoices'
      }
      if (schema.uniqueItems) {
      // if 'selectize' enabled it is expected to be selectized control
        if (schema.format === 'selectize') return 'arraySelectize'
        else if (schema.format === 'select2') return 'arraySelect2'
        else if (schema.format !== 'table') return 'multiselect' // otherwise it is select
      }
    }
  })
  // Use the multiple editor for schemas with `oneOf` set
  JSONEditor.defaults.resolvers.unshift(function (schema) {
  // If this schema uses `oneOf` or `anyOf`
    if (schema.oneOf || schema.anyOf) return 'multiple'
  })
  // Specialized editor for date, time and datetime-local formats
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (['string', 'integer'].indexOf(schema.type) !== -1 && ['date', 'time', 'datetime-local'].indexOf(schema.format) !== -1) {
      return 'datetime'
    }
  })
  // Use a specialized editor for starratings
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (['string', 'integer'].indexOf(schema.type) !== -1 && ['starrating', 'rating'].indexOf(schema.format) !== -1) return 'starrating'
  })

  // hyper-link describeBy Resolver
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.links) {
      for (var i = 0; i < schema.links.length; i++) {
        if (schema.links[i].rel && schema.links[i].rel.toLowerCase() === 'describedby') {
          return 'describedBy'
        }
      }
    }
  })
  // Enable custom editor type
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.format === 'button') return 'button'
  })
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.format === 'info') return 'info'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'uuid') return 'uuid'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'autocomplete') return 'autocomplete'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'jodit') return 'jodit'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'markdown') return 'simplemde'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && ['xhtml', 'bbcode'].indexOf(schema.format) !== -1) return 'sceditor'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && ['actionscript',
      'batchfile',
      'c',
      'c++',
      'cpp',
      'coffee',
      'csharp',
      'css',
      'dart',
      'django',
      'ejs',
      'erlang',
      'golang',
      'groovy',
      'handlebars',
      'haskell',
      'haxe',
      'html',
      'ini',
      'jade',
      'java',
      'javascript',
      'json',
      'less',
      'lisp',
      'lua',
      'makefile',
      'matlab',
      'mysql',
      'objectivec',
      'pascal',
      'perl',
      'pgsql',
      'php',
      'python',
      'r',
      'ruby',
      'sass',
      'scala',
      'scss',
      'smarty',
      'sql',
      'sqlserver',
      'stylus',
      'svg',
      'twig',
      'vbscript',
      'xml',
      'yaml'
    ].indexOf(schema.format) !== -1) return 'ace'
  })

  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && ['ip', 'ipv4', 'ipv6', 'hostname'].indexOf(schema.format) !== -1) return 'ip'
  })
  JSONEditor.defaults.resolvers.unshift(function (schema) {
    if (schema.type === 'string' && schema.format === 'color') {
      return 'colorpicker'
    }
  })

  return JSONEditor.defaults
};


/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! exports provided: AbstractEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEditor", function() { return AbstractEditor; });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");
/**
 * All editors should extend from this class
 */



var AbstractEditor = _class__WEBPACK_IMPORTED_MODULE_0__["Class"].extend({
  onChildEditorChange: function (editor) {
    this.onChange(true)
  },
  notify: function () {
    if (this.path) this.jsoneditor.notifyWatchers(this.path)
  },
  change: function () {
    if (this.parent) this.parent.onChildEditorChange(this)
    else if (this.jsoneditor) this.jsoneditor.onChange()
  },
  onChange: function (bubble) {
    this.notify()
    if (this.watch_listener) this.watch_listener()
    if (bubble) this.change()
  },
  register: function () {
    this.jsoneditor.registerEditor(this)
    this.onChange()
  },
  unregister: function () {
    if (!this.jsoneditor) return
    this.jsoneditor.unregisterEditor(this)
  },
  getNumColumns: function () {
    return 12
  },
  isActive: function () {
    return this.active
  },
  activate: function () {
    this.active = true
    this.optInCheckbox.checked = true
    this.enable()
    this.change()
  },
  deactivate: function () {
    // only non required properties can be deactivated.
    if (!this.isRequired()) {
      this.active = false
      this.optInCheckbox.checked = false
      this.disable()
      this.change()
    }
  },
  init: function (options, defaults) {
    this.defaults = defaults

    this.jsoneditor = options.jsoneditor

    this.theme = this.jsoneditor.theme
    this.template_engine = this.jsoneditor.template
    this.iconlib = this.jsoneditor.iconlib

    this.translate = this.jsoneditor.translate || this.defaults.translate

    this.original_schema = options.schema
    this.schema = this.jsoneditor.expandSchema(this.original_schema)

    this.active = true

    this.options = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, (this.options || {}), (this.schema.options || {}), (options.schema.options || {}), options)

    if (!options.path && !this.schema.id) this.schema.id = 'root'
    this.path = options.path || 'root'
    this.formname = options.formname || this.path.replace(/\.([^.]+)/g, '[$1]')
    if (this.jsoneditor.options.form_name_root) this.formname = this.formname.replace(/^root\[/, this.jsoneditor.options.form_name_root + '[')
    this.parent = options.parent
    this.key = this.parent !== undefined ? this.path.split('.').slice(this.parent.path.split('.').length).join('.') : this.path

    this.link_watchers = []
    this.watchLoop = false

    if (options.container) this.setContainer(options.container)
    this.registerDependencies()
  },
  registerDependencies: function () {
    this.dependenciesFulfilled = true
    var deps = this.options.dependencies
    if (!deps) {
      return
    }

    var self = this
    Object.keys(deps).forEach(function (dependency) {
      var path = self.path.split('.')
      path[path.length - 1] = dependency
      path = path.join('.')
      var choices = deps[dependency]
      self.jsoneditor.watch(path, function () {
        self.checkDependency(path, choices)
      })
    })
  },
  checkDependency: function (path, choices) {
    var wrapper = this.container || this.control
    if (this.path === path || !wrapper || this.jsoneditor === null) {
      return
    }

    var self = this
    var editor = this.jsoneditor.getEditor(path)
    var value = editor ? editor.getValue() : undefined
    var previousStatus = this.dependenciesFulfilled
    this.dependenciesFulfilled = false

    if (!editor || !editor.dependenciesFulfilled) {
      this.dependenciesFulfilled = false
    } else if (Array.isArray(choices)) {
      choices.some(function (choice) {
        if (value === choice) {
          self.dependenciesFulfilled = true
          return true
        }
      })
    } else if (typeof choices === 'object') {
      if (typeof value !== 'object') {
        this.dependenciesFulfilled = choices === value
      } else {
        Object.keys(choices).some(function (key) {
          if (!choices.hasOwnProperty(key)) {
            return false
          }
          if (!value.hasOwnProperty(key) || choices[key] !== value[key]) {
            self.dependenciesFulfilled = false
            return true
          }
          self.dependenciesFulfilled = true
        })
      }
    } else if (typeof choices === 'string' || typeof choices === 'number') {
      this.dependenciesFulfilled = value === choices
    } else if (typeof choices === 'boolean') {
      if (choices) {
        this.dependenciesFulfilled = value || value.length > 0
      } else {
        this.dependenciesFulfilled = !value || value.length === 0
      }
    }

    if (this.dependenciesFulfilled !== previousStatus) {
      this.notify()
    }

    var displayMode = this.dependenciesFulfilled ? 'block' : 'none'
    if (wrapper.tagName === 'TD') {
      for (var child in wrapper.childNodes) {
        if (wrapper.childNodes.hasOwnProperty(child)) wrapper.childNodes[child].style.display = displayMode
      }
    } else wrapper.style.display = displayMode
  },
  setContainer: function (container) {
    this.container = container
    if (this.schema.id) this.container.setAttribute('data-schemaid', this.schema.id)
    if (this.schema.type && typeof this.schema.type === 'string') this.container.setAttribute('data-schematype', this.schema.type)
    this.container.setAttribute('data-schemapath', this.path)
  },
  setOptInCheckbox: function (header) {
    // the active/deactive checbox control.
    var self = this
    this.optInCheckbox = document.createElement('input')
    this.optInCheckbox.setAttribute('type', 'checkbox')
    this.optInCheckbox.setAttribute('style', 'margin: 0 10px 0 0;')
    this.optInCheckbox.classList.add('json-editor-opt-in')

    this.optInCheckbox.addEventListener('click', function () {
      if (self.isActive()) {
        self.deactivate()
      } else {
        self.activate()
      }
    })

    // append active/deactive checkbox if show_opt_in is true
    if (this.jsoneditor.options.show_opt_in || this.options.show_opt_in) {
      // and control to type object editors if they are not required
      if (this.parent && this.parent.schema.type === 'object' && !this.isRequired() && this.header) {
        this.header.appendChild(this.optInCheckbox)
        this.header.insertBefore(this.optInCheckbox, this.header.firstChild)
      }
    }
  },
  preBuild: function () {

  },
  build: function () {

  },
  postBuild: function () {
    this.setupWatchListeners()
    this.addLinks()
    this.setValue(this.getDefault(), true)
    this.updateHeaderText()
    this.register()
    this.onWatchedFieldChange()
  },
  setupWatchListeners: function () {
    var self = this

    // Watched fields
    this.watched = {}
    if (this.schema.vars) this.schema.watch = this.schema.vars
    this.watched_values = {}
    this.watch_listener = function () {
      if (self.refreshWatchedFieldValues()) {
        self.onWatchedFieldChange()
      }
    }

    if (this.schema.hasOwnProperty('watch')) {
      var path; var pathParts; var first; var root; var adjustedPath
      var myPath = self.container.getAttribute('data-schemapath')

      for (var name in this.schema.watch) {
        if (!this.schema.watch.hasOwnProperty(name)) continue
        path = this.schema.watch[name]

        if (Array.isArray(path)) {
          if (path.length < 2) continue
          pathParts = [path[0]].concat(path[1].split('.'))
        } else {
          pathParts = path.split('.')
          if (!self.theme.closest(self.container, '[data-schemaid="' + pathParts[0] + '"]')) pathParts.unshift('#')
        }
        first = pathParts.shift()

        if (first === '#') first = self.jsoneditor.schema.id || 'root'

        // Find the root node for this template variable
        root = self.theme.closest(self.container, '[data-schemaid="' + first + '"]')
        if (!root) throw new Error('Could not find ancestor node with id ' + first)

        // Keep track of the root node and path for use when rendering the template
        adjustedPath = root.getAttribute('data-schemapath') + '.' + pathParts.join('.')

        if (myPath.startsWith(adjustedPath)) self.watchLoop = true
        self.jsoneditor.watch(adjustedPath, self.watch_listener)

        self.watched[name] = adjustedPath
      }
    }

    // Dynamic header
    if (this.schema.headerTemplate) {
      this.header_template = this.jsoneditor.compileTemplate(this.schema.headerTemplate, this.template_engine)
    }
  },

  addLinks: function () {
    // Add links
    if (!this.no_link_holder) {
      this.link_holder = this.theme.getLinksHolder()
      this.container.appendChild(this.link_holder)
      if (this.schema.links) {
        for (var i = 0; i < this.schema.links.length; i++) {
          this.addLink(this.getLink(this.schema.links[i]))
        }
      }
    }
  },
  onMove: function () {},
  getButton: function (text, icon, title) {
    var btnClass = 'json-editor-btn-' + icon
    if (!this.iconlib) icon = null
    else icon = this.iconlib.getIcon(icon)

    if (!icon && title) {
      text = title
      title = null
    }

    var btn = this.theme.getButton(text, icon, title)
    btn.classList.add(btnClass)
    return btn
  },
  setButtonText: function (button, text, icon, title) {
    if (!this.iconlib) icon = null
    else icon = this.iconlib.getIcon(icon)

    if (!icon && title) {
      text = title
      title = null
    }

    return this.theme.setButtonText(button, text, icon, title)
  },
  addLink: function (link) {
    if (this.link_holder) this.link_holder.appendChild(link)
  },
  getLink: function (data) {
    var holder, link

    // Get mime type of the link
    var mime = data.mediaType || 'application/javascript'
    var type = mime.split('/')[0]

    // Template to generate the link href
    var href = this.jsoneditor.compileTemplate(data.href, this.template_engine)
    var relTemplate = this.jsoneditor.compileTemplate(data.rel ? data.rel : data.href, this.template_engine)

    // Template to generate the link's download attribute
    var download = null
    if (data.download) download = data.download

    if (download && download !== true) {
      download = this.jsoneditor.compileTemplate(download, this.template_engine)
    }

    // Image links
    if (type === 'image') {
      holder = this.theme.getBlockLinkHolder()
      link = document.createElement('a')
      link.setAttribute('target', '_blank')
      var image = document.createElement('img')

      this.theme.createImageLink(holder, link, image)

      // When a watched field changes, update the url
      this.link_watchers.push(function (vars) {
        var url = href(vars)
        var rel = relTemplate(vars)
        link.setAttribute('href', url)
        link.setAttribute('title', rel || url)
        image.setAttribute('src', url)
      })
    // Audio/Video links
    } else if (['audio', 'video'].indexOf(type) >= 0) {
      holder = this.theme.getBlockLinkHolder()

      link = this.theme.getBlockLink()
      link.setAttribute('target', '_blank')

      var media = document.createElement(type)
      media.setAttribute('controls', 'controls')

      this.theme.createMediaLink(holder, link, media)

      // When a watched field changes, update the url
      this.link_watchers.push(function (vars) {
        var url = href(vars)
        var rel = relTemplate(vars)
        link.setAttribute('href', url)
        link.textContent = rel || url
        media.setAttribute('src', url)
      })
    // Text links or blank link
    } else {
      link = holder = this.theme.getBlockLink()
      holder.setAttribute('target', '_blank')
      holder.textContent = data.rel
      holder.style.display = 'none' // Prevent blank links from showing up when using custom view

      // When a watched field changes, update the url
      this.link_watchers.push(function (vars) {
        var url = href(vars)
        var rel = relTemplate(vars)
        if (url) holder.style.display = ''
        holder.setAttribute('href', url)
        holder.textContent = rel || url
      })
    }

    if (download && link) {
      if (download === true) {
        link.setAttribute('download', '')
      } else {
        this.link_watchers.push(function (vars) {
          link.setAttribute('download', download(vars))
        })
      }
    }

    if (data.class) link.classList.add(data.class)

    return holder
  },
  refreshWatchedFieldValues: function () {
    if (!this.watched_values) return
    var watched = {}
    var changed = false
    var self = this

    if (this.watched) {
      var val, editor
      for (var name in this.watched) {
        if (!this.watched.hasOwnProperty(name)) continue
        editor = self.jsoneditor.getEditor(this.watched[name])
        val = editor ? editor.getValue() : null
        if (self.watched_values[name] !== val) changed = true
        watched[name] = val
      }
    }

    watched.self = this.getValue()
    if (this.watched_values.self !== watched.self) changed = true

    this.watched_values = watched

    return changed
  },
  getWatchedFieldValues: function () {
    return this.watched_values
  },
  updateHeaderText: function () {
    if (this.header) {
      var headerText = this.getHeaderText()
      // If the header has children, only update the text node's value
      if (this.header.children.length) {
        for (var i = 0; i < this.header.childNodes.length; i++) {
          if (this.header.childNodes[i].nodeType === 3) {
            this.header.childNodes[i].nodeValue = this.cleanText(headerText)
            break
          }
        }
      // Otherwise, just update the entire node
      } else {
        if (window.DOMPurify) this.header.innerHTML = window.DOMPurify.sanitize(headerText)
        else this.header.textContent = this.cleanText(headerText)
      }
    }
  },
  getHeaderText: function (titleOnly) {
    if (this.header_text) return this.header_text
    else if (titleOnly) return this.schema.title
    else return this.getTitle()
  },
  cleanText: function (txt) {
    // Clean out HTML tags from txt
    var tmp = document.createElement('div')
    tmp.innerHTML = txt
    return (tmp.textContent || tmp.innerText)
  },
  onWatchedFieldChange: function () {
    var vars
    if (this.header_template) {
      vars = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])(this.getWatchedFieldValues(), {
        key: this.key,
        i: this.key,
        i0: (this.key * 1),
        i1: (this.key * 1 + 1),
        title: this.getTitle()
      })
      var headerText = this.header_template(vars)

      if (headerText !== this.header_text) {
        this.header_text = headerText
        this.updateHeaderText()
        this.notify()
        // this.fireChangeHeaderEvent();
      }
    }
    if (this.link_watchers.length) {
      vars = this.getWatchedFieldValues()
      for (var i = 0; i < this.link_watchers.length; i++) {
        this.link_watchers[i](vars)
      }
    }
  },
  setValue: function (value) {
    this.value = value
  },
  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return this.value
  },
  refreshValue: function () {

  },
  getChildEditors: function () {
    return false
  },
  destroy: function () {
    var self = this
    this.unregister(this)
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.watched, function (name, adjustedPath) {
      self.jsoneditor.unwatch(adjustedPath, self.watch_listener)
    })

    this.watched = null
    this.watched_values = null
    this.watch_listener = null
    this.header_text = null
    this.header_template = null
    this.value = null
    if (this.container && this.container.parentNode) this.container.parentNode.removeChild(this.container)
    this.container = null
    this.jsoneditor = null
    this.schema = null
    this.path = null
    this.key = null
    this.parent = null
  },
  getDefault: function () {
    if (typeof this.schema['default'] !== 'undefined') {
      return this.schema['default']
    }

    if (typeof this.schema['enum'] !== 'undefined') {
      return this.schema['enum'][0]
    }

    var type = this.schema.type || this.schema.oneOf
    if (type && Array.isArray(type)) type = type[0]
    if (type && typeof type === 'object') type = type.type
    if (type && Array.isArray(type)) type = type[0]

    if (typeof type === 'string') {
      if (type === 'number') return 0.0
      if (type === 'boolean') return false
      if (type === 'integer') return 0
      if (type === 'string') return ''
      if (type === 'object') return {}
      if (type === 'array') return []
    }

    return null
  },
  getTitle: function () {
    return this.schema.title || this.key
  },
  enable: function () {
    this.disabled = false
  },
  disable: function () {
    this.disabled = true
  },
  isEnabled: function () {
    return !this.disabled
  },
  isRequired: function () {
    if (typeof this.schema.required === 'boolean') return this.schema.required
    else if (this.parent && this.parent.schema && Array.isArray(this.parent.schema.required)) return this.parent.schema.required.indexOf(this.key) > -1
    else if (this.jsoneditor.options.required_by_default) return true
    else return false
  },
  getDisplayText: function (arr) {
    var disp = []
    var used = {}

    // Determine how many times each attribute name is used.
    // This helps us pick the most distinct display text for the schemas.
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(arr, function (i, el) {
      if (el.title) {
        used[el.title] = used[el.title] || 0
        used[el.title]++
      }
      if (el.description) {
        used[el.description] = used[el.description] || 0
        used[el.description]++
      }
      if (el.format) {
        used[el.format] = used[el.format] || 0
        used[el.format]++
      }
      if (el.type) {
        used[el.type] = used[el.type] || 0
        used[el.type]++
      }
    })

    // Determine display text for each element of the array
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(arr, function (i, el) {
      var name

      // If it's a simple string
      if (typeof el === 'string') name = el
      // Object
      else if (el.title && used[el.title] <= 1) name = el.title
      else if (el.format && used[el.format] <= 1) name = el.format
      else if (el.type && used[el.type] <= 1) name = el.type
      else if (el.description && used[el.description] <= 1) name = el.descripton
      else if (el.title) name = el.title
      else if (el.format) name = el.format
      else if (el.type) name = el.type
      else if (el.description) name = el.description
      else if (JSON.stringify(el).length < 500) name = JSON.stringify(el)
      else name = 'type'

      disp.push(name)
    })

    // Replace identical display text with "text 1", "text 2", etc.
    var inc = {}
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(disp, function (i, name) {
      inc[name] = inc[name] || 0
      inc[name]++

      if (used[name] > 1) disp[i] = name + ' ' + inc[name]
    })

    return disp
  },

  // Replace space(s) with "-" to create valid id value
  getValidId: function (id) {
    id = id === undefined ? '' : id.toString()
    return id.replace(/\s+/g, '-')
  },
  setInputAttributes: function (inputAttribute) {
    if (this.schema.options && this.schema.options.inputAttributes) {
      var inputAttributes = this.schema.options.inputAttributes
      var protectedAttributes = ['name', 'type'].concat(inputAttribute)
      for (var key in inputAttributes) {
        if (inputAttributes.hasOwnProperty(key) && protectedAttributes.indexOf(key.toLowerCase()) === -1) {
          this.input.setAttribute(key, inputAttributes[key])
        }
      }
    }
  },
  expandCallbacks: function (scope, options) {
    for (var i in options) {
      if (options.hasOwnProperty(i) && typeof options[i] === 'string' && typeof this.defaults.callbacks[scope] === 'object' && typeof this.defaults.callbacks[scope][options[i]] === 'function') {
        options[i] = this.defaults.callbacks[scope][options[i]].bind(null, this)// .bind(this);
      }
    }
    return options
  },
  showValidationErrors: function (errors) {

  }
})


/***/ }),

/***/ "./src/editors/ace.js":
/*!****************************!*\
  !*** ./src/editors/ace.js ***!
  \****************************/
/*! exports provided: AceEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceEditor", function() { return AceEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var AceEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  setValue: function (value, initial, fromTemplate) {
    var res = this._super(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.ace_editor_instance) {
      this.ace_editor_instance.setValue(res.value)
      this.ace_editor_instance.session.getSelection().clearSelection()
      this.ace_editor_instance.resize()
    }
  },
  build: function () {
    this.options.format = 'textarea' // Force format into "textarea"
    this._super()
    this.input_type = this.schema.format // Restore original format
    this.input.setAttribute('data-schemaformat', this.input_type)
  },
  afterInputReady: function () {
    var self = this; var options

    if (window.ace) {
      var mode = this.input_type
      // aliases for c/cpp
      if (mode === 'cpp' || mode === 'c++' || mode === 'c') mode = 'c_cpp'

      // Get options, either global options from "this.defaults.options.ace" or
      // single property options from schema "options.ace"
      options = this.expandCallbacks('ace', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        selectionStyle: 'text',
        minLines: 30,
        maxLines: 30
      }, this.defaults.options.ace || {}, this.options.ace || {}, {
        mode: 'ace/mode/' + mode
      }))

      this.ace_container = document.createElement('div')
      this.ace_container.style.width = '100%'
      this.ace_container.style.position = 'relative'
      // this.ace_container.style.height = '400px';
      this.input.parentNode.insertBefore(this.ace_container, this.input)
      this.input.style.display = 'none'

      this.ace_editor_instance = window.ace.edit(this.ace_container, options)

      this.ace_editor_instance.setValue(this.getValue())
      this.ace_editor_instance.session.getSelection().clearSelection()
      this.ace_editor_instance.resize()

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.ace_editor_instance.setReadOnly(true)
      }

      // Listen for changes
      this.ace_editor_instance.on('change', function () {
        self.input.value = self.ace_editor_instance.getValue()
        self.refreshValue()
        self.is_dirty = true
        self.onChange(true)
      })

      this.theme.afterInputReady(self.input)
    } else this._super() // Library not loaded, so just treat this as a string
  },
  getNumColumns: function () {
    return 6
  },
  enable: function () {
    if (!this.always_disabled && this.ace_editor_instance) this.ace_editor_instance.setReadOnly(false)
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.ace_editor_instance) this.ace_editor_instance.setReadOnly(true)
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.ace_editor_instance) {
      this.ace_editor_instance.destroy()
      this.ace_editor_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/array.js":
/*!******************************!*\
  !*** ./src/editors/array.js ***!
  \******************************/
/*! exports provided: ArrayEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayEditor", function() { return ArrayEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var ArrayEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({
  askConfirmation: function () {
    if (this.jsoneditor.options.prompt_before_delete === true) {
      if (window.confirm('Are you sure you want to remove this node?') === false) {
        return false
      }
    }
    return true
  },
  getDefault: function () {
    return this.schema['default'] || []
  },
  register: function () {
    this._super()
    if (this.rows) {
      for (var i = 0; i < this.rows.length; i++) {
        this.rows[i].register()
      }
    }
  },
  unregister: function () {
    this._super()
    if (this.rows) {
      for (var i = 0; i < this.rows.length; i++) {
        this.rows[i].unregister()
      }
    }
  },
  getNumColumns: function () {
    var info = this.getItemInfo(0)
    // Tabs require extra horizontal space
    if (this.tabs_holder && this.schema.format !== 'tabs-top') {
      return Math.max(Math.min(12, info.width + 2), 4)
    } else {
      return info.width
    }
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.add_row_button) this.add_row_button.disabled = false
      if (this.remove_all_rows_button) this.remove_all_rows_button.disabled = false
      if (this.delete_last_row_button) this.delete_last_row_button.disabled = false
      if (this.copy_button) this.copy_button.disabled = false
      // if(this.toggle_button) this.toggle_button.disabled = false;
      if (this.delete_button) this.delete_button.disabled = false
      if (this.moveup_button) this.moveup_button.disabled = false
      if (this.movedown_button) this.movedown_button.disabled = false

      if (this.rows) {
        for (var i = 0; i < this.rows.length; i++) {
          this.rows[i].enable()

          if (this.rows[i].add_row_button) this.rows[i].add_row_button.disabled = false
          if (this.rows[i].remove_all_rows_button) this.rows[i].remove_all_rows_button.disabled = false
          if (this.rows[i].delete_last_row_button) this.rows[i].delete_last_row_button.disabled = false
          if (this.rows[i].copy_button) this.rows[i].copy_button.disabled = false
          // if(this.rows[i].toggle_button) this.rows[i].toggle_button.disabled = false;
          if (this.rows[i].delete_button) this.rows[i].delete_button.disabled = false
          if (this.rows[i].moveup_button) this.rows[i].moveup_button.disabled = false
          if (this.rows[i].movedown_button) this.rows[i].movedown_button.disabled = false
        }
      }
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.add_row_button) this.add_row_button.disabled = true
    if (this.remove_all_rows_button) this.remove_all_rows_button.disabled = true
    if (this.delete_last_row_button) this.delete_last_row_button.disabled = true
    if (this.copy_button) this.copy_button.disabled = true
    // if(this.toggle_button) this.toggle_button.disabled = true;
    if (this.delete_button) this.delete_button.disabled = true
    if (this.moveup_button) this.moveup_button.disabled = true
    if (this.movedown_button) this.movedown_button.disabled = true

    if (this.rows) {
      for (var i = 0; i < this.rows.length; i++) {
        this.rows[i].disable(alwaysDisabled)

        if (this.rows[i].add_row_button) this.rows[i].add_row_button.disabled = true
        if (this.rows[i].remove_all_rows_button) this.rows[i].remove_all_rows_button.disabled = true
        if (this.rows[i].delete_last_row_button) this.rows[i].delete_last_row_button.disabled = true
        if (this.rows[i].copy_button) this.rows[i].copy_button.disabled = true
        // if(this.rows[i].toggle_button) this.rows[i].toggle_button.disabled = true;
        if (this.rows[i].delete_button) this.rows[i].delete_button.disabled = true
        if (this.rows[i].moveup_button) this.rows[i].moveup_button.disabled = true
        if (this.rows[i].movedown_button) this.rows[i].movedown_button.disabled = true
      }
    }
    this._super()
  },
  preBuild: function () {
    this._super()

    this.rows = []
    this.row_cache = []

    this.hide_delete_buttons = this.options.disable_array_delete || this.jsoneditor.options.disable_array_delete
    this.hide_delete_all_rows_buttons = this.hide_delete_buttons || this.options.disable_array_delete_all_rows || this.jsoneditor.options.disable_array_delete_all_rows
    this.hide_delete_last_row_buttons = this.hide_delete_buttons || this.options.disable_array_delete_last_row || this.jsoneditor.options.disable_array_delete_last_row
    this.hide_move_buttons = this.options.disable_array_reorder || this.jsoneditor.options.disable_array_reorder
    this.hide_add_button = this.options.disable_array_add || this.jsoneditor.options.disable_array_add
    this.show_copy_button = this.options.enable_array_copy || this.jsoneditor.options.enable_array_copy
    this.array_controls_top = this.options.array_controls_top || this.jsoneditor.options.array_controls_top
  },
  build: function () {
    if (!this.options.compact) {
      this.header = document.createElement('label')
      this.header.textContent = this.getTitle()
      this.title = this.theme.getHeader(this.header)
      this.container.appendChild(this.title)
      this.title_controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.title_controls)
      if (this.schema.description) {
        this.description = this.theme.getDescription(this.schema.description)
        this.container.appendChild(this.description)
      }
      this.error_holder = document.createElement('div')
      this.container.appendChild(this.error_holder)

      if (this.schema.format === 'tabs-top') {
        this.controls = this.theme.getHeaderButtonHolder()
        this.title.appendChild(this.controls)
        this.tabs_holder = this.theme.getTopTabHolder(this.getValidId(this.getItemTitle()))
        this.container.appendChild(this.tabs_holder)
        this.row_holder = this.theme.getTopTabContentHolder(this.tabs_holder)

        this.active_tab = null
      } else if (this.schema.format === 'tabs') {
        this.controls = this.theme.getHeaderButtonHolder()
        this.title.appendChild(this.controls)
        this.tabs_holder = this.theme.getTabHolder(this.getValidId(this.getItemTitle()))
        this.container.appendChild(this.tabs_holder)
        this.row_holder = this.theme.getTabContentHolder(this.tabs_holder)

        this.active_tab = null
      } else {
        this.panel = this.theme.getIndentedPanel()
        this.container.appendChild(this.panel)
        this.row_holder = document.createElement('div')
        this.panel.appendChild(this.row_holder)
        this.controls = this.theme.getButtonHolder()
        if (this.array_controls_top) {
          this.title.appendChild(this.controls)
        } else {
          this.panel.appendChild(this.controls)
        }
      }
    } else {
      // compact mode
      this.title = this.theme.getHeader('')
      this.container.appendChild(this.title)
      this.panel = this.theme.getIndentedPanel()
      this.container.appendChild(this.panel)
      this.title_controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.title_controls)
      this.controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.controls)
      this.row_holder = document.createElement('div')
      this.panel.appendChild(this.row_holder)
    }

    // Add controls
    this.addControls()
  },
  onChildEditorChange: function (editor) {
    this.refreshValue()
    this.refreshTabs(true)
    this._super(editor)
  },
  getItemTitle: function () {
    if (!this.item_title) {
      if (this.schema.items && !Array.isArray(this.schema.items)) {
        var tmp = this.jsoneditor.expandRefs(this.schema.items)
        this.item_title = tmp.title || this.translate('default_array_item_title')
      } else {
        this.item_title = this.translate('default_array_item_title')
      }
    }
    return this.cleanText(this.item_title)
  },
  getItemSchema: function (i) {
    if (Array.isArray(this.schema.items)) {
      if (i >= this.schema.items.length) {
        if (this.schema.additionalItems === true) {
          return {}
        } else if (this.schema.additionalItems) {
          return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema.additionalItems)
        }
      } else {
        return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema.items[i])
      }
    } else if (this.schema.items) {
      return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema.items)
    } else {
      return {}
    }
  },
  getItemInfo: function (i) {
    var schema = this.getItemSchema(i)

    // Check if it's cached
    this.item_info = this.item_info || {}
    var stringified = JSON.stringify(schema)
    if (typeof this.item_info[stringified] !== 'undefined') return this.item_info[stringified]

    // Get the schema for this item
    schema = this.jsoneditor.expandRefs(schema)

    this.item_info[stringified] = {
      title: schema.title || this.translate('default_array_item_title'),
      'default': schema['default'],
      width: 12,
      child_editors: schema.properties || schema.items
    }

    return this.item_info[stringified]
  },
  getElementEditor: function (i) {
    var itemInfo = this.getItemInfo(i)
    var schema = this.getItemSchema(i)
    schema = this.jsoneditor.expandRefs(schema)
    schema.title = itemInfo.title + ' ' + (i + 1)

    var editor = this.jsoneditor.getEditorClass(schema)

    var holder
    if (this.tabs_holder) {
      if (this.schema.format === 'tabs-top') {
        holder = this.theme.getTopTabContent()
      } else {
        holder = this.theme.getTabContent()
      }
      holder.id = this.path + '.' + i
    } else if (itemInfo.child_editors) {
      holder = this.theme.getChildEditorHolder()
    } else {
      holder = this.theme.getIndentedPanel()
    }

    this.row_holder.appendChild(holder)

    var ret = this.jsoneditor.createEditor(editor, {
      jsoneditor: this.jsoneditor,
      schema: schema,
      container: holder,
      path: this.path + '.' + i,
      parent: this,
      required: true
    })
    ret.preBuild()
    ret.build()
    ret.postBuild()

    if (!ret.title_controls) {
      ret.array_controls = this.theme.getButtonHolder()
      holder.appendChild(ret.array_controls)
    }

    return ret
  },
  destroy: function () {
    this.empty(true)
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    if (this.row_holder && this.row_holder.parentNode) this.row_holder.parentNode.removeChild(this.row_holder)
    if (this.controls && this.controls.parentNode) this.controls.parentNode.removeChild(this.controls)
    if (this.panel && this.panel.parentNode) this.panel.parentNode.removeChild(this.panel)

    this.rows = this.row_cache = this.title = this.description = this.row_holder = this.panel = this.controls = null

    this._super()
  },
  empty: function (hard) {
    if (!this.rows) return
    var self = this
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, row) {
      if (hard) {
        if (row.tab && row.tab.parentNode) row.tab.parentNode.removeChild(row.tab)
        self.destroyRow(row, true)
        self.row_cache[i] = null
      }
      self.rows[i] = null
    })
    self.rows = []
    if (hard) self.row_cache = []
  },
  destroyRow: function (row, hard) {
    var holder = row.container
    if (hard) {
      row.destroy()
      if (holder.parentNode) holder.parentNode.removeChild(holder)
      if (row.tab && row.tab.parentNode) row.tab.parentNode.removeChild(row.tab)
    } else {
      if (row.tab) row.tab.style.display = 'none'
      holder.style.display = 'none'
      row.unregister()
    }
  },
  getMax: function () {
    if ((Array.isArray(this.schema.items)) && this.schema.additionalItems === false) {
      return Math.min(this.schema.items.length, this.schema.maxItems || Infinity)
    } else {
      return this.schema.maxItems || Infinity
    }
  },
  refreshTabs: function (refreshHeaders) {
    var self = this
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, row) {
      if (!row.tab) return

      if (refreshHeaders) {
        row.tab_text.textContent = row.getHeaderText()
      } else {
        if (row.tab === self.active_tab) {
          self.theme.markTabActive(row)
        } else {
          self.theme.markTabInactive(row)
        }
      }
    })
  },
  setValue: function (value, initial) {
    // Update the array's value, adding/removing rows when necessary
    value = value || []

    if (!(Array.isArray(value))) value = [value]

    var serialized = JSON.stringify(value)
    if (serialized === this.serialized) return

    // Make sure value has between minItems and maxItems items in it
    if (this.schema.minItems) {
      while (value.length < this.schema.minItems) {
        value.push(this.getItemInfo(value.length)['default'])
      }
    }
    if (this.getMax() && value.length > this.getMax()) {
      value = value.slice(0, this.getMax())
    }

    var self = this
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(value, function (i, val) {
      if (self.rows[i]) {
        // TODO: don't set the row's value if it hasn't changed
        self.rows[i].setValue(val, initial)
      } else if (self.row_cache[i]) {
        self.rows[i] = self.row_cache[i]
        self.rows[i].setValue(val, initial)
        self.rows[i].container.style.display = ''
        if (self.rows[i].tab) self.rows[i].tab.style.display = ''
        self.rows[i].register()
        self.jsoneditor.trigger('addRow', self.rows[i])
      } else {
        var editor = self.addRow(val, initial)
        self.jsoneditor.trigger('addRow', editor)
      }
    })

    for (var j = value.length; j < self.rows.length; j++) {
      self.destroyRow(self.rows[j])
      self.rows[j] = null
    }
    self.rows = self.rows.slice(0, value.length)

    // Set the active tab
    var newActiveTab = null
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(self.rows, function (i, row) {
      if (row.tab === self.active_tab) {
        newActiveTab = row.tab
        return false
      }
    })
    if (!newActiveTab && self.rows.length) newActiveTab = self.rows[0].tab

    self.active_tab = newActiveTab

    self.refreshValue(initial)
    self.refreshTabs(true)
    self.refreshTabs()

    self.onChange()

    // TODO: sortable
  },
  refreshValue: function (force) {
    var self = this
    var oldi = this.value ? this.value.length : 0
    this.value = []

    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, editor) {
      // Get the value for this editor
      self.value[i] = editor.getValue()
    })

    if (oldi !== this.value.length || force) {
      // If we currently have minItems items in the array
      var minItems = this.schema.minItems && this.schema.minItems >= this.rows.length

      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, editor) {
        // Hide the move down button for the last row
        if (editor.movedown_button) {
          if (i === self.rows.length - 1) {
            editor.movedown_button.style.display = 'none'
          } else {
            editor.movedown_button.style.display = ''
          }
        }

        // Hide the delete button if we have minItems items
        if (editor.delete_button) {
          if (minItems) {
            editor.delete_button.style.display = 'none'
          } else {
            editor.delete_button.style.display = ''
          }
        }

        // Get the value for this editor
        self.value[i] = editor.getValue()
      })

      var controlsNeeded = false

      if (!this.value.length) {
        this.delete_last_row_button.style.display = 'none'
        this.remove_all_rows_button.style.display = 'none'
      } else if (this.value.length === 1) {
        this.remove_all_rows_button.style.display = 'none'

        // If there are minItems items in the array, or configured to hide the delete_last_row button, hide the delete button beneath the rows
        if (minItems || this.hide_delete_last_row_buttons) {
          this.delete_last_row_button.style.display = 'none'
        } else {
          this.delete_last_row_button.style.display = ''
          controlsNeeded = true
        }
      } else {
        if (minItems || this.hide_delete_last_row_buttons) {
          this.delete_last_row_button.style.display = 'none'
        } else {
          this.delete_last_row_button.style.display = ''
          controlsNeeded = true
        }

        if (minItems || this.hide_delete_all_rows_buttons) {
          this.remove_all_rows_button.style.display = 'none'
        } else {
          this.remove_all_rows_button.style.display = ''
          controlsNeeded = true
        }
      }

      // If there are maxItems in the array, hide the add button beneath the rows
      if ((this.getMax() && this.getMax() <= this.rows.length) || this.hide_add_button) {
        this.add_row_button.style.display = 'none'
      } else {
        this.add_row_button.style.display = ''
        controlsNeeded = true
      }

      if (!this.collapsed && controlsNeeded) {
        this.controls.style.display = 'inline-block'
      } else {
        this.controls.style.display = 'none'
      }
    }
  },
  addRow: function (value, initial) {
    var self = this
    var i = this.rows.length

    self.rows[i] = this.getElementEditor(i)
    self.row_cache[i] = self.rows[i]

    if (self.tabs_holder) {
      self.rows[i].tab_text = document.createElement('span')
      self.rows[i].tab_text.textContent = self.rows[i].getHeaderText()
      if (self.schema.format === 'tabs-top') {
        self.rows[i].tab = self.theme.getTopTab(self.rows[i].tab_text, this.getValidId(self.rows[i].path))
        self.theme.addTopTab(self.tabs_holder, self.rows[i].tab)
      } else {
        self.rows[i].tab = self.theme.getTab(self.rows[i].tab_text, this.getValidId(self.rows[i].path))
        self.theme.addTab(self.tabs_holder, self.rows[i].tab)
      }
      self.rows[i].tab.addEventListener('click', function (e) {
        self.active_tab = self.rows[i].tab
        self.refreshTabs()
        e.preventDefault()
        e.stopPropagation()
      })
    }

    var controlsHolder = self.rows[i].title_controls || self.rows[i].array_controls

    // Buttons to delete row, move row up, and move row down
    if (!self.hide_delete_buttons) {
      self.rows[i].delete_button = this.getButton(self.getItemTitle(), 'delete', this.translate('button_delete_row_title', [self.getItemTitle()]))
      self.rows[i].delete_button.classList.add('delete', 'json-editor-btntype-delete')
      self.rows[i].delete_button.setAttribute('data-i', i)
      self.rows[i].delete_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if (!self.askConfirmation()) {
          return false
        }

        var i = this.getAttribute('data-i') * 1
        var value = self.getValue()
        var newval = []
        var newActiveTab = null

        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(value, function (j, row) {
          if (j !== i) {
            newval.push(row)
          }
        })

        var editor = self.rows[i]

        self.setValue(newval)

        if (self.rows[i]) {
          newActiveTab = self.rows[i].tab
        } else if (self.rows[i - 1]) {
          newActiveTab = self.rows[i - 1].tab
        }

        if (newActiveTab) {
          self.active_tab = newActiveTab
          self.refreshTabs()
        }

        self.onChange(true)
        self.jsoneditor.trigger('deleteRow', editor)
      })

      if (controlsHolder) {
        controlsHolder.appendChild(self.rows[i].delete_button)
      }
    }

    // Button to copy an array element and add it as last element
    if (self.show_copy_button) {
      self.rows[i].copy_button = this.getButton(self.getItemTitle(), 'copy', 'Copy ' + self.getItemTitle())
      self.rows[i].copy_button.classList.add('copy', 'json-editor-btntype-copy')
      self.rows[i].copy_button.setAttribute('data-i', i)
      self.rows[i].copy_button.addEventListener('click', function (e) {
        var value = self.getValue()
        e.preventDefault()
        e.stopPropagation()
        var i = this.getAttribute('data-i') * 1

        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(value, function (j, row) {
          if (j === i) {
            value.push(row)
          }
        })

        self.setValue(value)
        self.refreshValue(true)
        self.onChange(true)
      })

      controlsHolder.appendChild(self.rows[i].copy_button)
    }

    if (i && !self.hide_move_buttons) {
      self.rows[i].moveup_button = this.getButton('', (this.schema.format === 'tabs-top' ? 'moveleft' : 'moveup'), this.translate('button_move_up_title'))
      self.rows[i].moveup_button.classList.add('moveup', 'json-editor-btntype-move')
      self.rows[i].moveup_button.setAttribute('data-i', i)
      self.rows[i].moveup_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var i = this.getAttribute('data-i') * 1

        if (i <= 0) return
        var rows = self.getValue()
        var tmp = rows[i - 1]
        rows[i - 1] = rows[i]
        rows[i] = tmp

        self.setValue(rows)
        self.active_tab = self.rows[i - 1].tab
        self.refreshTabs()

        self.onChange(true)

        self.jsoneditor.trigger('moveRow', self.rows[i - 1])
      })

      if (controlsHolder) {
        controlsHolder.appendChild(self.rows[i].moveup_button)
      }
    }

    if (!self.hide_move_buttons) {
      self.rows[i].movedown_button = this.getButton('', (this.schema.format === 'tabs-top' ? 'moveright' : 'movedown'), this.translate('button_move_down_title'))
      self.rows[i].movedown_button.classList.add('movedown', 'json-editor-btntype-move')
      self.rows[i].movedown_button.setAttribute('data-i', i)
      self.rows[i].movedown_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var i = this.getAttribute('data-i') * 1

        var rows = self.getValue()
        if (i >= rows.length - 1) return
        var tmp = rows[i + 1]
        rows[i + 1] = rows[i]
        rows[i] = tmp

        self.setValue(rows)
        self.active_tab = self.rows[i + 1].tab
        self.refreshTabs()
        self.onChange(true)

        self.jsoneditor.trigger('moveRow', self.rows[i + 1])
      })

      if (controlsHolder) {
        controlsHolder.appendChild(self.rows[i].movedown_button)
      }
    }

    if (value) self.rows[i].setValue(value, initial)
    self.refreshTabs()

    return self.rows[i]
  },
  addControls: function () {
    var self = this

    this.collapsed = false
    this.toggle_button = this.getButton('', 'collapse', this.translate('button_collapse'))
    this.toggle_button.classList.add('json-editor-btntype-toggle')
    this.toggle_button.style.margin = '0 10px 0 0'
    this.title.insertBefore(this.toggle_button, this.title.childNodes[0])

    var rowHolderDisplay = self.row_holder.style.display
    var controlsDisplay = self.controls.style.display
    this.toggle_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      if (self.collapsed) {
        self.collapsed = false
        if (self.panel) self.panel.style.display = ''
        self.row_holder.style.display = rowHolderDisplay
        if (self.tabs_holder) self.tabs_holder.style.display = ''
        self.controls.style.display = controlsDisplay
        self.setButtonText(this, '', 'collapse', self.translate('button_collapse'))
      } else {
        self.collapsed = true
        self.row_holder.style.display = 'none'
        if (self.tabs_holder) self.tabs_holder.style.display = 'none'
        self.controls.style.display = 'none'
        if (self.panel) self.panel.style.display = 'none'
        self.setButtonText(this, '', 'expand', self.translate('button_expand'))
      }
    })

    // If it should start collapsed
    if (this.options.collapsed) {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$trigger"])(this.toggle_button, 'click')
    }

    // Collapse button disabled
    if (this.schema.options && typeof this.schema.options.disable_collapse !== 'undefined') {
      if (this.schema.options.disable_collapse) this.toggle_button.style.display = 'none'
    } else if (this.jsoneditor.options.disable_collapse) {
      this.toggle_button.style.display = 'none'
    }

    // Add "new row" and "delete last" buttons below editor
    this.add_row_button = this.getButton(this.getItemTitle(), 'add', this.translate('button_add_row_title', [this.getItemTitle()]))
    this.add_row_button.classList.add('json-editor-btntype-add')
    this.add_row_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      var i = self.rows.length
      var editor
      if (self.row_cache[i]) {
        editor = self.rows[i] = self.row_cache[i]
        self.rows[i].setValue(self.rows[i].getDefault(), true)
        self.rows[i].container.style.display = ''
        if (self.rows[i].tab) self.rows[i].tab.style.display = ''
        self.rows[i].register()
      } else {
        editor = self.addRow()
      }
      self.active_tab = self.rows[i].tab
      self.refreshTabs()
      self.refreshValue()
      self.onChange(true)
      self.jsoneditor.trigger('addRow', editor)
    })
    self.controls.appendChild(this.add_row_button)

    this.delete_last_row_button = this.getButton(this.translate('button_delete_last', [this.getItemTitle()]), 'subtract', this.translate('button_delete_last_title', [this.getItemTitle()]))
    this.delete_last_row_button.classList.add('json-editor-btntype-deletelast')
    this.delete_last_row_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()

      if (!self.askConfirmation()) {
        return false
      }

      var rows = self.getValue()
      var newActiveTab = null

      var editor = rows.pop()

      self.setValue(rows)

      if (self.rows[self.rows.length - 1]) {
        newActiveTab = self.rows[self.rows.length - 1].tab
      }

      if (newActiveTab) {
        self.active_tab = newActiveTab
        self.refreshTabs()
      }

      self.onChange(true)
      self.jsoneditor.trigger('deleteRow', editor)
    })
    self.controls.appendChild(this.delete_last_row_button)

    this.remove_all_rows_button = this.getButton(this.translate('button_delete_all'), 'delete', this.translate('button_delete_all_title'))
    this.remove_all_rows_button.classList.add('json-editor-btntype-deleteall')
    this.remove_all_rows_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()

      if (!self.askConfirmation()) {
        return false
      }

      self.empty(true)
      self.setValue([])
      self.onChange(true)
      self.jsoneditor.trigger('deleteAllRows')
    })
    self.controls.appendChild(this.remove_all_rows_button)

    if (self.tabs) {
      this.add_row_button.style.width = '100%'
      this.add_row_button.style.textAlign = 'left'
      this.add_row_button.style.marginBottom = '3px'

      this.delete_last_row_button.style.width = '100%'
      this.delete_last_row_button.style.textAlign = 'left'
      this.delete_last_row_button.style.marginBottom = '3px'

      this.remove_all_rows_button.style.width = '100%'
      this.remove_all_rows_button.style.textAlign = 'left'
      this.remove_all_rows_button.style.marginBottom = '3px'
    }
  },
  showValidationErrors: function (errors) {
    var self = this

    // Get all the errors that pertain to this editor
    var myErrors = []
    var otherErrors = []
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path === self.path) {
        myErrors.push(error)
      } else {
        otherErrors.push(error)
      }
    })

    // Show errors for this editor
    if (this.error_holder) {
      if (myErrors.length) {
        this.error_holder.innerHTML = ''
        this.error_holder.style.display = ''
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(myErrors, function (i, error) {
          self.error_holder.appendChild(self.theme.getErrorMessage(error.message))
        })
      // Hide error area
      } else {
        this.error_holder.style.display = 'none'
      }
    }

    // Show errors for child editors
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, row) {
      row.showValidationErrors(otherErrors)
    })
  }
})


/***/ }),

/***/ "./src/editors/array/choices.js":
/*!**************************************!*\
  !*** ./src/editors/array/choices.js ***!
  \**************************************/
/*! exports provided: ArrayChoicesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayChoicesEditor", function() { return ArrayChoicesEditor; });
/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiselect */ "./src/editors/multiselect.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./src/utilities.js");


var ArrayChoicesEditor = _multiselect__WEBPACK_IMPORTED_MODULE_0__["MultiSelectEditor"].extend({
  setValue: function (value, initial) {
    if (this.choices_instance) {
      // Make sure we are dealing with an array of strings so we can check for strict equality
      value = [].concat(value).map(function (e) { return e + '' })

      this.updateValue(value) // Sets this.value to sanitized value

      this.choices_instance.removeActiveItems() // Remove existing selection
      this.choices_instance.setChoiceByValue(this.value) // Set new selection

      this.onChange(true)
    } else this._super(value, initial)
  },
  afterInputReady: function () {
    if (window.Choices && !this.choices_instance) {
      var options; var self = this
      // Get options, either global options from "this.defaults.options.choices" or
      // single property options from schema "options.choices"
      options = this.expandCallbacks('choices', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        removeItems: true,
        removeItemButton: true
      }, this.defaults.options.choices || {}, this.options.choices || {}, {
        addItems: true,
        editItems: false,
        duplicateItemsAllowed: false
      }))

      // New items are allowed if option "addItems" is true and items type is "string"
      // this.newEnumAllowed = options.addItems = !!options.addItems && this.schema.items && this.schema.items.type == 'string';

      // Choices doesn't support adding new items to select type input
      this.newEnumAllowed = false

      this.choices_instance = new window.Choices(this.input, options)

      // Remove change handler set in parent class (src/multiselect.js)
      this.control.removeEventListener('change', this.multiselectChangeHandler)

      // Create a new change handler
      this.multiselectChangeHandler = function (e) {
        var value = self.choices_instance.getValue(true)
        self.updateValue(value)
        self.onChange(true)
      }
      this.control.addEventListener('change', this.multiselectChangeHandler, false)
    }
    this._super()
  },
  updateValue: function (value) {
    value = [].concat(value)
    var changed = false; var newValue = []
    for (var i = 0; i < value.length; i++) {
      if (!this.select_values[value[i] + '']) {
        changed = true
        if (this.newEnumAllowed) {
          if (!this.addNewOption(value[i])) continue
        } else continue
      }
      var sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  },
  addNewOption: function (value) {
    // Add new value and label
    this.option_keys.push(value + '')
    this.option_titles.push(value + '')
    this.select_values[value + ''] = value
    // Update Schema enum to prevent triggering "Value must be one of the enumerated values"
    this.schema.items.enum.push(value)
    // Add new value and label to choices
    this.choices_instance.setChoices([{value: value + '', label: value + ''}], 'value', 'label', false)

    return true
  },
  enable: function () {
    if (!this.always_disabled && this.choices_instance) this.choices_instance.enable()
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.choices_instance) this.choices_instance.disable()
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.choices_instance) {
      this.choices_instance.destroy()
      this.choices_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/array/select2.js":
/*!**************************************!*\
  !*** ./src/editors/array/select2.js ***!
  \**************************************/
/*! exports provided: ArraySelect2Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySelect2Editor", function() { return ArraySelect2Editor; });
/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiselect */ "./src/editors/multiselect.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./src/utilities.js");


var ArraySelect2Editor = _multiselect__WEBPACK_IMPORTED_MODULE_0__["MultiSelectEditor"].extend({

  setValue: function (value, initial) {
    if (this.select2_instance) {
      // Make sure we are dealing with an array of strings so we can check for strict equality
      value = [].concat(value).map(function (e) { return e + '' })

      this.updateValue(value) // Sets this.value to sanitized value

      if (this.select2v4) this.select2_instance.val(this.value).change()
      else this.select2_instance.select2('val', this.value)

      this.onChange(true)
    } else this._super(value, initial)
  },
  afterInputReady: function () {
    var options; var self = this

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2 && !this.select2_instance) {
      // Get options, either global options from "this.defaults.options.select2" or
      // single property options from schema "options.select2"
      options = this.expandCallbacks('select2', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        tags: true,
        width: '100%'
      }, this.defaults.options.select2 || {}, this.options.select2 || {}))

      // New items are allowed if option "tags" is true and items type is "string"
      this.newEnumAllowed = options.tags = !!options.tags && this.schema.items && this.schema.items.type === 'string'

      this.select2_instance = window.jQuery(this.input).select2(options)
      this.select2v4 = this.select2_instance.select2.hasOwnProperty('amd')

      this.selectChangeHandler = function () {
        var value = self.select2v4 ? self.select2_instance.val() : self.select2_instance.select2('val')
        self.updateValue(value)
        self.onChange(true)
      }

      // Add event handler.
      // Note: Must use the "on()" method and not addEventListener()
      this.select2_instance.on('select2-blur', this.selectChangeHandler)
      this.select2_instance.on('change', this.selectChangeHandler)
    }
    this._super()
  },
  updateValue: function (value) {
    value = [].concat(value)
    var changed = false; var newValue = []
    for (var i = 0; i < value.length; i++) {
      //      if (!this.select_options[value[i]+'']) {
      if (!this.select_values[value[i] + '']) {
        changed = true
        if (this.newEnumAllowed) {
          if (!this.addNewOption(value[i])) continue
        } else continue
      }
      var sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  },
  addNewOption: function (value) {
    // Add new value and label
    this.option_keys.push(value + '')
    this.option_titles.push(value + '')
    this.select_values[value + ''] = value
    // Update Schema enum to prevent triggering "Value must be one of the enumerated values"
    this.schema.items.enum.push(value)

    var optionTag = this.input.querySelector('option[value="' + value + '"]')
    // Remove data attribute to make option tag permanent. (user input)
    if (optionTag) optionTag.removeAttribute('data-select2-tag')
    // Create new option tag (setValue)
    // eslint-disable-next-line no-undef
    else this.input.appendChild(new Option(value, value, false, false)).trigger('change')

    return true
  },
  enable: function () {
    if (!this.always_disabled && this.select2_instance) {
      if (this.select2v4) this.select2_instance.prop('disabled', false)
      else this.select2_instance.select2('enable', true)
    }
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.select2_instance) {
      if (this.select2v4) this.select2_instance.prop('disabled', true)
      else this.select2_instance.select2('enable', false)
    }
    this._super()
  },
  destroy: function () {
    if (this.select2_instance) {
      this.select2_instance.select2('destroy')
      this.select2_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/array/selectize.js":
/*!****************************************!*\
  !*** ./src/editors/array/selectize.js ***!
  \****************************************/
/*! exports provided: ArraySelectizeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySelectizeEditor", function() { return ArraySelectizeEditor; });
/* harmony import */ var _multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../multiselect */ "./src/editors/multiselect.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities */ "./src/utilities.js");


var ArraySelectizeEditor = _multiselect__WEBPACK_IMPORTED_MODULE_0__["MultiSelectEditor"].extend({

  setValue: function (value, initial) {
    if (this.selectize_instance) {
      // Make sure we are dealing with an array of strings so we can check for strict equality
      value = [].concat(value).map(function (e) { return e + '' })

      this.updateValue(value) // Sets this.value to sanitized value

      this.selectize_instance.setValue(this.value)

      this.onChange(true)
    } else this._super(value, initial)
  },
  afterInputReady: function () {
    var options; var self = this

    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.selectize && !this.selectize_instance) {
      // Get options, either global options from "this.defaults.options.selectize" or
      // single property options from schema "options.selectize"
      options = this.expandCallbacks('selectize', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        plugins: ['remove_button'],
        delimiter: false,
        createOnBlur: true,
        create: true
      }, this.defaults.options.selectize || {}, this.options.selectize || {}))

      // New items are allowed if option "create" is true and items type is "string"
      this.newEnumAllowed = options.create = !!options.create && this.schema.items && this.schema.items.type === 'string'

      this.selectize_instance = (window.jQuery(this.input).selectize(options))[0].selectize

      // Remove change handler set in parent class (src/multiselect.js)
      this.control.removeEventListener('change', this.multiselectChangeHandler)

      // Create a new change handler
      this.multiselectChangeHandler = function (e) {
        var value = self.selectize_instance.getValue()
        self.updateValue(value)
        self.onChange(true)
      }

      // Add new event handler.
      // Note: Must use the "on()" method and not addEventListener()
      this.selectize_instance.on('change', this.multiselectChangeHandler)
    }
    this._super()
  },
  updateValue: function (value) {
    value = [].concat(value)
    var changed = false; var newValue = []
    for (var i = 0; i < value.length; i++) {
      //      if (!this.select_options[value[i]+'']) {
      if (!this.select_values[value[i] + '']) {
        changed = true
        if (this.newEnumAllowed) {
          if (!this.addNewOption(value[i])) continue
        } else continue
      }
      var sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  },
  addNewOption: function (value) {
    // Add new value and label
    this.option_keys.push(value + '')
    this.option_titles.push(value + '')
    this.select_values[value + ''] = value
    // Update Schema enum to prevent triggering "Value must be one of the enumerated values"
    this.schema.items.enum.push(value)
    // Add new value and label to selectize
    this.selectize_instance.addOption({text: value, value: value})

    return true
  },
  enable: function () {
    if (!this.always_disabled && this.selectize_instance) this.selectize_instance.unlock()
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.selectize_instance) this.selectize_instance.lock()
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.selectize_instance) {
      this.selectize_instance.destroy()
      this.selectize_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/autocomplete.js":
/*!*************************************!*\
  !*** ./src/editors/autocomplete.js ***!
  \*************************************/
/*! exports provided: AutocompleteEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteEditor", function() { return AutocompleteEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var AutocompleteEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({
  postBuild: function () {
    if (window.Autocomplete) {
      // create wrapper container
      this.autocomplete_wrapper = document.createElement('div')

      // insert wrapper after this.input in the DOM tree
      this.input.parentNode.insertBefore(this.autocomplete_wrapper, this.input.nextSibling)

      // move this.input into wrapper
      this.autocomplete_wrapper.appendChild(this.input)

      // create dropdown container
      this.autocomplete_dropdown = document.createElement('ul')

      // insert dropdown after this.input in the DOM tree
      this.input.parentNode.insertBefore(this.autocomplete_dropdown, this.input.nextSibling)
    }
    this._super()
  },
  afterInputReady: function () {
    var options

    if (window.Autocomplete && !this.autocomplete_instance) {
      // Get options, either global options from "this.defaults.options.autocomplete" or
      // single property options from schema "options.autocomplete"
      options = this.expandCallbacks('autocomplete', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        'search': function (jseditor, input) {
          console.log('No "search" callback defined for autocomplete in property "' + jseditor.key + '"')
          return []
        }.bind(null, this),
        'baseClass': 'autocomplete'
      }, this.defaults.options.autocomplete || {}, this.options.autocomplete || {}))

      this.autocomplete_wrapper.classList.add(options.baseClass)
      this.autocomplete_dropdown.classList.add(options.baseClass + '-result-list')
      // this.input.classList.add(options.baseClass + '-input');

      this.autocomplete_instance = new window.Autocomplete(this.autocomplete_wrapper, options)
    }
    this._super()
  },
  destroy: function () {
    if (this.autocomplete_instance) {
      if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
      if (this.autocomplete_dropdown && this.autocomplete_dropdown.parentNode) this.autocomplete_dropdown.parentNode.removeChild(this.autocomplete_dropdown)
      if (this.autocomplete_wrapper && this.autocomplete_wrapper.parentNode) this.autocomplete_wrapper.parentNode.removeChild(this.autocomplete_wrapper)
      this.autocomplete_instance = null
    }
    this._super()
  }

})


/***/ }),

/***/ "./src/editors/base64.js":
/*!*******************************!*\
  !*** ./src/editors/base64.js ***!
  \*******************************/
/*! exports provided: Base64Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64Editor", function() { return Base64Editor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");


var Base64Editor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  getNumColumns: function () {
    return 4
  },
  setFileReaderListener: function (frMultiple) {
    var self = this
    frMultiple.addEventListener('load', function (event) {
      if (self.count === self.current_item_index) {
        // Overwrite existing file by default, leave other properties unchanged
        self.value[self.count][self.key] = event.target.result
      } else {
        var tempObject = {}
        // Create empty object
        for (var key in self.parent.schema.properties) {
          tempObject[key] = ''
        }
        // Set object media file
        tempObject[self.key] = event.target.result
        self.value.splice(self.count, 0, tempObject) // insert new file object
      }

      // Increment using the listener and not the 'for' loop as the listener will be processed asynchronously
      self.count += 1
      // When all files have been processed, update the value of the editor
      if (self.count === (self.total + self.current_item_index)) {
        self.arrayEditor.setValue(self.value)
      }
    })
  },
  build: function () {
    var self = this
    this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)

    // Input that holds the base64 string
    this.input = this.theme.getFormInputField('hidden')
    this.container.appendChild(this.input)

    // Don't show uploader if this is readonly
    if (!this.schema.readOnly && !this.schema.readonly) {
      if (!window.FileReader) throw new Error('FileReader required for base64 editor')

      // File uploader
      this.uploader = this.theme.getFormInputField('file')

      // Set attribute of file input field to 'multiple' if:
      // 'multiple' key has been set to 'true' in the schema
      // and the parent object is of type 'object'
      // and the parent of the parent type has been set to 'array'
      if (self.schema.options && self.schema.options.multiple && self.schema.options.multiple === true && self.parent && self.parent.schema.type === 'object' && self.parent.parent && self.parent.parent.schema.type === 'array') {
        this.uploader.setAttribute('multiple', '')
      }

      this.uploader.addEventListener('change', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if (this.files && this.files.length) {
          // Check the amount of files uploaded.
          // If 1, use the regular upload, otherwise use the multiple upload method
          if (this.files.length > 1 && self.schema.options && self.schema.options.multiple && self.schema.options.multiple === true && self.parent && self.parent.schema.type === 'object' && self.parent.parent && self.parent.parent.schema.type === 'array') {
            // Load editor of parent.parent to get the array
            self.arrayEditor = self.jsoneditor.getEditor(self.parent.parent.path)
            // Check the current value of this editor
            self.value = self.arrayEditor.getValue()
            // Set variables for amount of files, index of current array item and
            // count value containing current status of processed files
            self.total = this.files.length
            self.current_item_index = parseInt(self.parent.key)
            self.count = self.current_item_index

            for (var i = 0; i < self.total; i++) {
              // eslint-disable-next-line no-undef
              var frMultiple = new FileReader()
              self.setFileReaderListener(frMultiple)
              frMultiple.readAsDataURL(this.files[i])
            }
          } else {
            // eslint-disable-next-line no-undef
            var fr = new FileReader()
            fr.onload = function (evt) {
              self.value = evt.target.result
              self.refreshPreview()
              self.onChange(true)
              fr = null
            }
            fr.readAsDataURL(this.files[0])
          }
        }
      })
    }

    this.preview = this.theme.getFormInputDescription(this.schema.description)
    this.container.appendChild(this.preview)

    this.control = this.theme.getFormControl(this.label, this.uploader || this.input, this.preview, this.infoButton)
    this.container.appendChild(this.control)
  },
  refreshPreview: function () {
    if (this.last_preview === this.value) return
    this.last_preview = this.value

    this.preview.innerHTML = ''

    if (!this.value) return

    var mime = this.value.match(/^data:([^;,]+)[;,]/)
    if (mime) mime = mime[1]

    if (!mime) {
      this.preview.innerHTML = '<em>Invalid data URI</em>'
    } else {
      this.preview.innerHTML = '<strong>Type:</strong> ' + mime + ', <strong>Size:</strong> ' + Math.floor((this.value.length - this.value.split(',')[0].length - 1) / 1.33333) + ' bytes'
      if (mime.substr(0, 5) === 'image') {
        this.preview.innerHTML += '<br>'
        var img = document.createElement('img')
        img.style.maxWidth = '100%'
        img.style.maxHeight = '100px'
        img.src = this.value
        this.preview.appendChild(img)
      }
    }
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.uploader) this.uploader.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.uploader) this.uploader.disabled = true
    this._super()
  },
  setValue: function (val) {
    if (this.value !== val) {
      this.value = val
      this.input.value = this.value
      this.refreshPreview()
      this.onChange()
    }
  },
  destroy: function () {
    if (this.preview && this.preview.parentNode) this.preview.parentNode.removeChild(this.preview)
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    if (this.uploader && this.uploader.parentNode) this.uploader.parentNode.removeChild(this.uploader)

    this._super()
  }
})


/***/ }),

/***/ "./src/editors/button.js":
/*!*******************************!*\
  !*** ./src/editors/button.js ***!
  \*******************************/
/*! exports provided: ButtonEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonEditor", function() { return ButtonEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
// Non-Active editor for displaying buttons in form


var ButtonEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({
  init: function (options, defaults) {
    this._super(options, defaults)
    this.active = false

    // Set field to required in schema otherwise it will not be displayed
    if (this.parent && this.parent.schema) {
      if (Array.isArray(this.parent.schema.required)) {
        if (this.parent.schema.required.indexOf(this.key) === -1) {
          this.parent.schema.required.push(this.key)
        }
      } else {
        this.parent.schema.required = [this.key]
      }
    }
  },
  build: function () {
    this.options.compact = true

    // Get options, either global options from "this.defaults.options.button" or
    // single property options from schema "options.button"
    var title = this.schema.title || this.key
    var options = this.expandCallbacks('button', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
      'icon': '',
      'validated': false,
      'align': 'left',
      'action': function (jseditor, e) {
        window.alert('No button action defined for "' + jseditor.path + '"')
      }.bind(null, this)
    }, this.defaults.options.button || {}, this.options.button || {}))

    this.input = this.theme.getFormButton(title, options.icon, title)
    this.input.addEventListener('click', options.action, false)

    if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
      this.always_disabled = true
      this.input.setAttribute('readonly', 'true')
    }

    // Set custom attributes on input element. Parameter is array of protected keys. Empty array if none.
    this.setInputAttributes(['readonly'])

    this.control = this.theme.getFormButtonHolder(options.align)
    this.control.appendChild(this.input)

    this.container.appendChild(this.control)

    var self = this
    this.changeHandler = function () {
      if (self.jsoneditor.validate(self.jsoneditor.getValue()).length > 0) self.disable()
      else self.enable()
    }

    // Enable/disable the button depending on form validation
    if (options.validated) this.jsoneditor.on('change', this.changeHandler)
  },
  enable: function () {
    if (!this.always_disabled) {
      this.input.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    this._super()
  },
  getNumColumns: function () {
    return 2
  },
  activate: function () {
    this.active = false
    this.enable()
  },
  deactivate: function () {
    // only non required properties can be deactivated.
    if (!this.isRequired()) {
      this.active = false
      this.disable()
    }
  },
  destroy: function () {
    this.jsoneditor.off('change', this.changeHandler)
    this.changeHandler = null
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/checkbox.js":
/*!*********************************!*\
  !*** ./src/editors/checkbox.js ***!
  \*********************************/
/*! exports provided: CheckboxEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxEditor", function() { return CheckboxEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");



var CheckboxEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  setValue: function (value, initial) {
    value = !!value
    var changed = this.getValue() !== value
    this.value = value
    this.input.checked = this.value
    this.onChange(changed)
  },
  register: function () {
    this._super()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  },
  unregister: function () {
    this._super()
    if (!this.input) return
    this.input.removeAttribute('name')
  },
  getNumColumns: function () {
    return Math.min(12, Math.max(this.getTitle().length / 7, 2))
  },
  build: function () {
    var self = this
    this.label = this.header = this.theme.getCheckboxLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText && !this.options.compact) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.input = this.theme.getCheckbox()
    this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton)

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      this.input.disabled = true
    }

    this.input.addEventListener('change', function (e) {
      e.preventDefault()
      e.stopPropagation()
      self.value = this.checked
      self.onChange(true)
    })

    this.container.appendChild(this.control)
  },
  enable: function () {
    if (!this.always_disabled) {
      this.input.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    this._super()
  },
  destroy: function () {
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    this._super()
  },
  showValidationErrors: function (errors) {
    var self = this

    if (this.jsoneditor.options.show_errors === 'always') {} else if (!this.is_dirty && this.previous_error_setting === this.jsoneditor.options.show_errors) {
      return
    }

    this.previous_error_setting = this.jsoneditor.options.show_errors

    var messages = []
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path === self.path) {
        messages.push(error.message)
      }
    })

    this.input.controlgroup = this.control

    if (messages.length) {
      this.theme.addInputError(this.input, messages.join('. ') + '.')
    } else {
      this.theme.removeInputError(this.input)
    }
  }
})


/***/ }),

/***/ "./src/editors/choices.js":
/*!********************************!*\
  !*** ./src/editors/choices.js ***!
  \********************************/
/*! exports provided: ChoicesEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoicesEditor", function() { return ChoicesEditor; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./src/editors/select.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var ChoicesEditor = _select__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"].extend({

  setValue: function (value, initial) {
    if (this.choices_instance) {
      // Sanitize value before setting it
      var sanitized = this.typecast(value || '')

      if (this.enum_values.indexOf(sanitized) < 0) sanitized = this.enum_values[0]

      if (this.value === sanitized) return

      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      this.input.value = this.enum_options[this.enum_values.indexOf(sanitized)]

      this.choices_instance.setChoiceByValue(this.input.value)

      this.value = sanitized
      this.onChange()
    } else this._super(value, initial)
  },
  afterInputReady: function () {
    if (window.Choices && !this.choices_instance) {
      var options
      // Get options, either global options from "this.defaults.options.choices" or
      // single property options from schema "options.choices"
      options = this.expandCallbacks('choices', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.defaults.options.choices || {}, this.options.choices || {}))

      this.choices_instance = new window.Choices(this.input, options)
    }
    this._super()
  },
  onWatchedFieldChange: function () {
    this._super()
    if (this.choices_instance) {
      var self = this; var choicesList = this.enum_options.map(function (v, i) { return {value: v, label: self.enum_display[i]} })
      this.choices_instance.setChoices(choicesList, 'value', 'label', true)
      this.choices_instance.setChoiceByValue(this.value + '') // Set new selection
    }
  },
  enable: function () {
    if (!this.always_disabled && this.choices_instance) this.choices_instance.enable()
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.choices_instance) this.choices_instance.disable()
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.choices_instance) {
      this.choices_instance.destroy()
      this.choices_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/colorpicker.js":
/*!************************************!*\
  !*** ./src/editors/colorpicker.js ***!
  \************************************/
/*! exports provided: ColorEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorEditor", function() { return ColorEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
/*

Edtended handling of  oolor type fields.

Has optional support for using https://github.com/Sphinxxxx/vanilla-picker.

*/



var ColorEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({
  afterInputReady: function () {
    this._super()
    this.createPicker(true)
  },
  disable: function () {
    this._super()
    this.createPicker(false)
  },
  enable: function () {
    this._super()
    this.createPicker(true)
  },
  destroy: function () {
    this.createPicker(false)
    this._super()
  },
  // helper functions
  createPicker: function (create) {
    if (create) { // create vanilla-picker
      if (window.Picker && !this.picker_instance) { // do when vanilla-picker loaded
        const self = this
        var options = this.expandCallbacks('colorpicker', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
          editor: false, // default no editor
          alpha: false, // default no alpha
          color: this.value,
          popup: 'bottom' // show in the bottom
        }, this.defaults.options.colorpicker || {}, this.options.colorpicker || {}, {
          parent: this.container,
          onChange: function (color) {
            const format = this.settings.editorFormat
            const isAlpha = this.settings.alpha
            self.setValue(format === 'hex' ? (isAlpha ? color.hex : color.hex.slice(0, 7)) : color[format + (isAlpha ? 'a' : '') + 'String'])
          }
        }))
        this.input.type = 'text'
        this.picker_instance = new window.Picker(options)
        // this.picker_instance.openHandler()
        if (!options.popup) { // use inline colorPicker
          this.input.style.display = 'none'
          this.theme.afterInputReady(this.picker_instance.domElement)
        }
      }
    } else { // destroy vanilla-picker
      if (this.picker_instance) {
        this.picker_instance.destroy()
        this.picker_instance = null
        this.input.style.display = ''
      }
    }
  }
})


/***/ }),

/***/ "./src/editors/datetime.js":
/*!*********************************!*\
  !*** ./src/editors/datetime.js ***!
  \*********************************/
/*! exports provided: DatetimeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimeEditor", function() { return DatetimeEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/*

Edtended handling of date, time and datetime-local type fields.

Works with both string and integer data types. (default only support string type)

Has optional support for using flatpickr datepicker.
All flatpickr options is supported with a few minor differences.
- "enableTime" and "noCalendar" are set automatically, based on the data type.
- Extra config option "errorDateFormat". If this is set, it will replace the format displayed in error messages.
- It is not possible to use "inline" and "wrap" options together.
- When using the "wrap" option, "toggle" and "clear" buttons are automatically added to markup. 2 extra boolean options ("showToggleButton" and "showClearButton") are available to control which buttons to display. Note: not all frameworks supports this. (Works in: Bootstrap and Foundation)
- When using the "inline" option, an extra boolean option ("inlineHideInput") is available to hide the original input field.
- If "mode" is set to either "multiple" or "range", only string data type is supported. Also the result from these is returned as a string not an array.

ToDo:
 - Improve Handling of flatpicker "multiple" and "range" modes. (Currently the values are just added as string values, but the optimal scenario would be to save those as array if possible)

*/


var DatetimeEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  build: function () {
    this._super()
    if (!this.input) return

    if (window.flatpickr && typeof this.options.flatpickr === 'object') {
      // Make sure that flatpickr settings matches the input type
      this.options.flatpickr.enableTime = this.schema.format !== 'date'
      this.options.flatpickr.noCalendar = this.schema.format === 'time'

      // Curently only string can contain range or multiple values
      if (this.schema.type === 'integer') this.options.flatpickr.mode = 'single'

      // Attribute for flatpicker
      this.input.setAttribute('data-input', '')

      var input = this.input

      if (this.options.flatpickr.wrap === true) {
        // Create buttons for input group
        var buttons = []
        if (this.options.flatpickr.showToggleButton !== false) {
          var toggleButton = this.getButton('', this.schema.format === 'time' ? 'time' : 'calendar', this.translate('flatpickr_toggle_button'))
          // Attribute for flatpicker
          toggleButton.setAttribute('data-toggle', '')
          buttons.push(toggleButton)
        }
        if (this.options.flatpickr.showClearButton !== false) {
          var clearButton = this.getButton('', 'clear', this.translate('flatpickr_clear_button'))
          // Attribute for flatpicker
          clearButton.setAttribute('data-clear', '')
          buttons.push(clearButton)
        }

        // Save position of input field
        var parentNode = this.input.parentNode; var nextSibling = this.input.nextSibling

        var buttonContainer = this.theme.getInputGroup(this.input, buttons)
        if (buttonContainer !== undefined) {
          // Make sure "inline" option is turned off
          this.options.flatpickr.inline = false

          // Insert container at same position as input field
          parentNode.insertBefore(buttonContainer, nextSibling)

          input = buttonContainer
        } else {
          this.options.flatpickr.wrap = false
        }
      }

      this.flatpickr = window.flatpickr(input, this.options.flatpickr)

      if (this.options.flatpickr.inline === true && this.options.flatpickr.inlineHideInput === true) {
        this.input.setAttribute('type', 'hidden')
      }
    }
  },
  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    if (this.schema.type === 'string') {
      return this.value
    }
    if (this.value === '' || this.value === undefined) {
      return undefined
    }

    var value = this.schema.format === 'time' ? '1970-01-01 ' + this.value : this.value
    return parseInt(new Date(value).getTime() / 1000)
  },
  setValue: function (value, initial, fromTemplate) {
    if (this.schema.type === 'string') {
      this._super(value, initial, fromTemplate)
      if (this.flatpickr) this.flatpickr.setDate(value)
    } else if (value > 0) {
      var dateObj = new Date(value * 1000)
      var year = dateObj.getFullYear()
      var month = this.zeroPad(dateObj.getMonth() + 1)
      var day = this.zeroPad(dateObj.getDate())
      var hour = this.zeroPad(dateObj.getHours())
      var min = this.zeroPad(dateObj.getMinutes())
      var sec = this.zeroPad(dateObj.getSeconds())
      var date = [year, month, day].join('-')
      var time = [hour, min, sec].join(':')
      var dateValue = date + 'T' + time

      if (this.schema.format === 'date') dateValue = date
      else if (this.schema.format === 'time') dateValue = time

      this.input.value = dateValue
      this.refreshValue()
      if (this.flatpickr) this.flatpickr.setDate(dateValue)
    }
  },
  destroy: function () {
    if (this.flatpickr) this.flatpickr.destroy()
    this.flatpickr = null
    this._super()
  },
  // helper function
  zeroPad: function (value) {
    return ('0' + value).slice(-2)
  }
})


/***/ }),

/***/ "./src/editors/describedby.js":
/*!************************************!*\
  !*** ./src/editors/describedby.js ***!
  \************************************/
/*! exports provided: DescribedByEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescribedByEditor", function() { return DescribedByEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
// hyper-link describeBy Editor


var DescribedByEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  register: function () {
    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }

      if (this.editors[this.currentEditor]) this.editors[this.currentEditor].register()
    }

    this._super()
  },
  unregister: function () {
    this._super()

    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }
    }
  },
  getNumColumns: function () {
    if (!this.editors[this.currentEditor]) return 4
    return Math.max(this.editors[this.currentEditor].getNumColumns(), 4)
  },
  enable: function () {
    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].enable()
      }
    }

    this._super()
  },
  disable: function () {
    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].disable()
      }
    }

    this._super()
  },
  switchEditor: function () {
    var self = this
    var vars = this.getWatchedFieldValues()

    if (!vars) return

    // var ref = this.template.fillFromObject(vars);
    // var ref = this.template(vars);
    var ref = document.location.origin + document.location.pathname + this.template(vars)

    if (this.jsoneditor.refs.hasOwnProperty(ref) && !this.editors[this.refs[ref]]) {
      this.buildChildEditor(ref)
    }

    this.currentEditor = this.refs[ref]

    this.register()

    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (ref, editor) {
      if (!editor) return
      if (self.currentEditor === ref) {
        editor.container.style.display = ''
      } else {
        editor.container.style.display = 'none'
      }
    })

    this.refreshValue()
    this.onChange(true)
  },
  buildChildEditor: function (ref) {
    this.refs[ref] = this.editors.length

    var holder = this.theme.getChildEditorHolder()
    this.editor_holder.appendChild(holder)

    var schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema, this.jsoneditor.refs[ref])

    var editorClass = this.jsoneditor.getEditorClass(schema, this.jsoneditor)

    var editor = this.jsoneditor.createEditor(editorClass, {
      jsoneditor: this.jsoneditor,
      schema: schema,
      container: holder,
      path: this.path,
      parent: this,
      required: true
    }
    )

    this.editors.push(editor)

    editor.preBuild()
    editor.build()
    editor.postBuild()
  },
  preBuild: function () {
    this.refs = {}
    this.editors = []
    this.currentEditor = ''
    var i
    for (i = 0; i < this.schema.links.length; i++) {
      if (this.schema.links[i].rel.toLowerCase() === 'describedby') {
        // this.template = new UriTemplate(this.schema.links[i].href);
        this.template = this.jsoneditor.compileTemplate(this.schema.links[i].href, this.template_engine)
        break
      }
    }

    /* this.template.fill(function(varName) {
      self.schema.watch = self.schema.watch || {};
      self.schema.watch[varName] = varName;
      return '';
    }); */

    this.schema.links = this.schema.links.slice(0, i).concat(this.schema.links.slice(i + 1))
    if (this.schema.links.length === 0) delete this.schema.links
    this.baseSchema = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema)
  },
  build: function () {
    this.editor_holder = document.createElement('div')
    this.container.appendChild(this.editor_holder)
    this.switchEditor()
  },
  onWatchedFieldChange: function () {
    this.switchEditor()
  },
  onChildEditorChange: function (editor) {
    if (this.editors[this.currentEditor]) {
      this.refreshValue()
    }

    this._super(editor)
  },
  refreshValue: function () {
    if (this.editors[this.currentEditor]) {
      this.value = this.editors[this.currentEditor].getValue()
    }
  },
  setValue: function (val, initial) {
    if (this.editors[this.currentEditor]) {
      this.editors[this.currentEditor].setValue(val, initial)
      this.refreshValue()
      this.onChange()
    }
  },
  destroy: function () {
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (i, editor) {
      if (editor) editor.destroy()
    })

    if (this.editor_holder && this.editor_holder.parentNode) {
      this.editor_holder.parentNode.removeChild(this.editor_holder)
    }

    this._super()
  },
  showValidationErrors: function (errors) {
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (i, editor) {
      if (!editor) return
      editor.showValidationErrors(errors)
    })
  }
})


/***/ }),

/***/ "./src/editors/enum.js":
/*!*****************************!*\
  !*** ./src/editors/enum.js ***!
  \*****************************/
/*! exports provided: EnumEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEditor", function() { return EnumEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
// Enum Editor (used for objects and arrays with enumerated values)



var EnumEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({
  getNumColumns: function () {
    return 4
  },
  build: function () {
    this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    this.container.appendChild(this.title)

    this.options.enum_titles = this.options.enum_titles || []

    this['enum'] = this.schema['enum']
    this.selected = 0
    this.select_options = []
    this.html_values = []

    var self = this
    for (var i = 0; i < this['enum'].length; i++) {
      this.select_options[i] = this.options.enum_titles[i] || 'Value ' + (i + 1)
      this.html_values[i] = this.getHTML(this['enum'][i])
    }

    // Switcher
    this.switcher = this.theme.getSwitcher(this.select_options)
    this.container.appendChild(this.switcher)

    // Display area
    this.display_area = this.theme.getIndentedPanel()
    this.container.appendChild(this.display_area)

    if (this.options.hide_display) this.display_area.style.display = 'none'

    this.switcher.addEventListener('change', function () {
      self.selected = self.select_options.indexOf(this.value)
      self.value = self['enum'][self.selected]
      self.refreshValue()
      self.onChange(true)
    })
    this.value = this['enum'][0]
    this.refreshValue()

    if (this['enum'].length === 1) this.switcher.style.display = 'none'
  },
  refreshValue: function () {
    var self = this
    self.selected = -1
    var stringified = JSON.stringify(this.value)
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this['enum'], function (i, el) {
      if (stringified === JSON.stringify(el)) {
        self.selected = i
        return false
      }
    })

    if (self.selected < 0) {
      self.setValue(self['enum'][0])
      return
    }

    this.switcher.value = this.select_options[this.selected]
    this.display_area.innerHTML = this.html_values[this.selected]
  },
  enable: function () {
    if (!this.always_disabled) {
      this.switcher.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.switcher.disabled = true
    this._super()
  },
  getHTML: function (el) {
    var self = this

    if (el === null) {
      return '<em>null</em>'
    // Array or Object
    } else if (typeof el === 'object') {
      // TODO: use theme
      var ret = ''

      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(el, function (i, child) {
        var html = self.getHTML(child)

        // Add the keys to object children
        if (!(Array.isArray(el))) {
          // TODO: use theme
          html = '<div><em>' + i + '</em>: ' + html + '</div>'
        }

        // TODO: use theme
        ret += '<li>' + html + '</li>'
      })

      if (Array.isArray(el)) ret = '<ol>' + ret + '</ol>'
      else ret = "<ul style='margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;'>" + ret + '</ul>'

      return ret
    // Boolean
    } else if (typeof el === 'boolean') {
      return el ? 'true' : 'false'
    // String
    } else if (typeof el === 'string') {
      return el.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    // Number
    } else {
      return el
    }
  },
  setValue: function (val) {
    if (this.value !== val) {
      this.value = val
      this.refreshValue()
      this.onChange()
    }
  },
  destroy: function () {
    if (this.display_area && this.display_area.parentNode) this.display_area.parentNode.removeChild(this.display_area)
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.switcher && this.switcher.parentNode) this.switcher.parentNode.removeChild(this.switcher)

    this._super()
  }
})


/***/ }),

/***/ "./src/editors/hidden.js":
/*!*******************************!*\
  !*** ./src/editors/hidden.js ***!
  \*******************************/
/*! exports provided: HiddenEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenEditor", function() { return HiddenEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/**
 * Created by Mehmet Baker on 12.04.2017
 */


var HiddenEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  register: function () {
    this._super()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  },
  unregister: function () {
    this._super()
    if (!this.input) return
    this.input.removeAttribute('name')
  },
  setValue: function (value, initial, fromTemplate) {
    if (this.template && !fromTemplate) {
      return
    }

    if (value === null || typeof value === 'undefined') value = ''
    else if (typeof value === 'object') value = JSON.stringify(value)
    else if (typeof value !== 'string') value = '' + value

    if (value === this.serialized) return

    // Sanitize value before setting it
    var sanitized = this.sanitize(value)

    if (this.input.value === sanitized) {
      return
    }

    this.input.value = sanitized

    var changed = fromTemplate || this.getValue() !== value

    this.refreshValue()

    if (initial) this.is_dirty = false
    else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

    if (this.adjust_height) this.adjust_height(this.input)

    // Bubble this setValue to parents if the value changed
    this.onChange(changed)
  },
  getNumColumns: function () {
    return 2
  },
  enable: function () {
    this._super()
  },
  disable: function () {
    this._super()
  },
  refreshValue: function () {
    this.value = this.input.value
    if (typeof this.value !== 'string') this.value = ''
    this.serialized = this.value
  },
  destroy: function () {
    this.template = null
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)

    this._super()
  },
  /**
   * This is overridden in derivative editors
   */
  sanitize: function (value) {
    return value
  },
  /**
   * Re-calculates the value if needed
   */
  onWatchedFieldChange: function () {
    var vars

    // If this editor needs to be rendered by a macro template
    if (this.template) {
      vars = this.getWatchedFieldValues()
      this.setValue(this.template(vars), false, true)
    }

    this._super()
  },
  build: function () {
    this.format = this.schema.format
    if (!this.format && this.options.default_format) {
      this.format = this.options.default_format
    }
    if (this.options.format) {
      this.format = this.options.format
    }

    this.input_type = 'hidden'
    this.input = this.theme.getFormInputField(this.input_type)

    if (this.format) this.input.setAttribute('data-schemaformat', this.format)

    this.container.appendChild(this.input)

    // Compile and store the template
    if (this.schema.template) {
      var callback = this.expandCallbacks('template', {template: this.schema.template})
      if (typeof callback.template === 'function') this.template = callback.template
      else this.template = this.jsoneditor.compileTemplate(this.schema.template, this.template_engine)
      this.refreshValue()
    } else {
      this.refreshValue()
    }
  }
})


/***/ }),

/***/ "./src/editors/info.js":
/*!*****************************!*\
  !*** ./src/editors/info.js ***!
  \*****************************/
/*! exports provided: InfoEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoEditor", function() { return InfoEditor; });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/editors/button.js");
// Non-Active editor for displaying text blocks in form


var InfoEditor = _button__WEBPACK_IMPORTED_MODULE_0__["ButtonEditor"].extend({

  build: function () {
    this.options.compact = false
    this.header = this.label = this.theme.getFormInputLabel(this.getTitle())
    this.description = this.theme.getDescription(this.schema.description || '')
    this.control = this.theme.getFormControl(this.label, this.description, null)
    this.container.appendChild(this.control)
  },
  getTitle: function () {
    return this.schema.title
  },
  getNumColumns: function () {
    return 12
  }
})


/***/ }),

/***/ "./src/editors/integer.js":
/*!********************************!*\
  !*** ./src/editors/integer.js ***!
  \********************************/
/*! exports provided: IntegerEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegerEditor", function() { return IntegerEditor; });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./src/editors/number.js");


var IntegerEditor = _number__WEBPACK_IMPORTED_MODULE_0__["NumberEditor"].extend({

  sanitize: function (value) {
    value = value + ''
    // eslint-disable-next-line no-useless-escape
    return value.replace(/[^0-9\-]/g, '')
  },
  getNumColumns: function () {
    return 2
  }
})


/***/ }),

/***/ "./src/editors/ip.js":
/*!***************************!*\
  !*** ./src/editors/ip.js ***!
  \***************************/
/*! exports provided: IpEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpEditor", function() { return IpEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");



var IpEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  preBuild: function () {
    this._super()

    // Create schema options object if deesn't exist
    if (!this.schema.options) {
      this.schema.options = {}
    }

    // Create cleave options if they don't exist
    if (!this.schema.options.cleave) {
      switch (this.format) {
        case 'ipv6':
          this.schema.options.cleave = {
            delimiters: [':'],
            blocks: [4, 4, 4, 4, 4, 4, 4, 4],
            uppercase: true
          }
          break
        case 'ipv4':
          this.schema.options.cleave = {
            delimiters: ['.'],
            blocks: [3, 3, 3, 3],
            numericOnly: true
          }
          break
      }
    }

    // Update options object
    this.options = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])(this.options, this.schema.options || {})
  }
})


/***/ }),

/***/ "./src/editors/jodit.js":
/*!******************************!*\
  !*** ./src/editors/jodit.js ***!
  \******************************/
/*! exports provided: JoditEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoditEditor", function() { return JoditEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var JoditEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  setValue: function (value, initial, fromTemplate) {
    var res = this._super(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.jodit_instance) this.jodit_instance.setEditorValue(res.value)
  },
  build: function () {
    this.options.format = 'textarea' // Force format into "textarea"
    this._super()
    this.input_type = this.schema.format // Restore original format
    this.input.setAttribute('data-schemaformat', this.input_type)
  },
  afterInputReady: function () {
    var self = this; var options

    if (window.Jodit) {
      // Get options, either global options from "this.defaults.options.jodit" or
      // single property options from schema "options.jodit"
      options = this.expandCallbacks('jodit', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        height: 300
      }, this.defaults.options.jodit || {}, this.options.jodit || {}))

      this.jodit_instance = new window.Jodit(this.input, options)

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.jodit_instance.setReadOnly(true)
      }

      this.jodit_instance.events.on('change', function () {
        self.value = self.jodit_instance.getEditorValue()
        self.is_dirty = true
        self.onChange(true)
      })

      this.theme.afterInputReady(self.input)
    } else this._super() // Library not loaded, so just treat this as a string
  },
  getNumColumns: function () {
    return 6
  },
  enable: function () {
    if (!this.always_disabled && this.jodit_instance) this.jodit_instance.setReadOnly(false)
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.jodit_instance) this.jodit_instance.setReadOnly(true)
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.jodit_instance) {
      this.jodit_instance.destruct()
      this.jodit_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/multiple.js":
/*!*********************************!*\
  !*** ./src/editors/multiple.js ***!
  \*********************************/
/*! exports provided: MultipleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleEditor", function() { return MultipleEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validator */ "./src/validator.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
// Multiple Editor (for when `type` is an array, also when `oneOf` is present)



var MultipleEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  register: function () {
    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }
      if (this.editors[this.type]) this.editors[this.type].register()
    }
    this._super()
  },
  unregister: function () {
    this._super()
    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].unregister()
      }
    }
  },
  getNumColumns: function () {
    if (!this.editors[this.type]) return 4
    return Math.max(this.editors[this.type].getNumColumns(), 4)
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.editors) {
        for (var i = 0; i < this.editors.length; i++) {
          if (!this.editors[i]) continue
          this.editors[i].enable()
        }
      }
      this.switcher.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.editors) {
      for (var i = 0; i < this.editors.length; i++) {
        if (!this.editors[i]) continue
        this.editors[i].disable(alwaysDisabled)
      }
    }
    this.switcher.disabled = true
    this._super()
  },
  switchEditor: function (i) {
    var self = this

    if (!this.editors[i]) {
      this.buildChildEditor(i)
    }

    var currentValue = self.getValue()

    self.type = i

    self.register()

    Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(self.editors, function (type, editor) {
      if (!editor) return
      if (self.type === type) {
        if (self.keep_values) editor.setValue(currentValue, true)
        editor.container.style.display = ''
      } else editor.container.style.display = 'none'
    })
    self.refreshValue()
    self.refreshHeaderText()
  },
  buildChildEditor: function (i) {
    var self = this
    var type = this.types[i]
    var holder = self.theme.getChildEditorHolder()
    self.editor_holder.appendChild(holder)

    var schema

    if (typeof type === 'string') {
      schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, self.schema)
      schema.type = type
    } else {
      schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, self.schema, type)
      schema = self.jsoneditor.expandRefs(schema)

      // If we need to merge `required` arrays
      if (type && type.required && Array.isArray(type.required) && self.schema.required && Array.isArray(self.schema.required)) {
        schema.required = self.schema.required.concat(type.required)
      }
    }

    var editor = self.jsoneditor.getEditorClass(schema)

    self.editors[i] = self.jsoneditor.createEditor(editor, {
      jsoneditor: self.jsoneditor,
      schema: schema,
      container: holder,
      path: self.path,
      parent: self,
      required: true
    })
    self.editors[i].preBuild()
    self.editors[i].build()
    self.editors[i].postBuild()

    if (self.editors[i].header) self.editors[i].header.style.display = 'none'

    self.editors[i].option = self.switcher_options[i]

    holder.addEventListener('change_header_text', function () {
      self.refreshHeaderText()
    })

    if (i !== self.type) holder.style.display = 'none'
  },
  preBuild: function () {
    this.types = []
    this.type = 0
    this.editors = []
    this.validators = []

    this.keep_values = true
    if (typeof this.jsoneditor.options.keep_oneof_values !== 'undefined') this.keep_values = this.jsoneditor.options.keep_oneof_values
    if (typeof this.options.keep_oneof_values !== 'undefined') this.keep_values = this.options.keep_oneof_values

    if (this.schema.oneOf) {
      this.oneOf = true
      this.types = this.schema.oneOf
      delete this.schema.oneOf
    } else if (this.schema.anyOf) {
      this.anyOf = true
      this.types = this.schema.anyOf
      delete this.schema.anyOf
    } else {
      if (!this.schema.type || this.schema.type === 'any') {
        this.types = ['string', 'number', 'integer', 'boolean', 'object', 'array', 'null']

        // If any of these primitive types are disallowed
        if (this.schema.disallow) {
          var disallow = this.schema.disallow
          if (typeof disallow !== 'object' || !(Array.isArray(disallow))) {
            disallow = [disallow]
          }
          var allowedTypes = []
          Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.types, function (i, type) {
            if (disallow.indexOf(type) === -1) allowedTypes.push(type)
          })
          this.types = allowedTypes
        }
      } else if (Array.isArray(this.schema.type)) {
        this.types = this.schema.type
      } else {
        this.types = [this.schema.type]
      }
      delete this.schema.type
    }

    this.display_text = this.getDisplayText(this.types)
  },
  build: function () {
    var self = this
    var container = this.container

    this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    this.container.appendChild(this.header)

    this.switcher = this.theme.getSwitcher(this.display_text)
    container.appendChild(this.switcher)
    this.switcher.addEventListener('change', function (e) {
      e.preventDefault()
      e.stopPropagation()

      self.switchEditor(self.display_text.indexOf(this.value))
      self.onChange(true)
    })

    this.editor_holder = document.createElement('div')
    container.appendChild(this.editor_holder)

    var validatorOptions = {}
    if (self.jsoneditor.options.custom_validators) {
      validatorOptions.custom_validators = self.jsoneditor.options.custom_validators
    }

    this.switcher_options = this.theme.getSwitcherOptions(this.switcher)
    Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.types, function (i, type) {
      self.editors[i] = false

      var schema

      if (typeof type === 'string') {
        schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, self.schema)
        schema.type = type
      } else {
        schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, self.schema, type)

        // If we need to merge `required` arrays
        if (type.required && Array.isArray(type.required) && self.schema.required && Array.isArray(self.schema.required)) {
          schema.required = self.schema.required.concat(type.required)
        }
      }

      self.validators[i] = new _validator__WEBPACK_IMPORTED_MODULE_1__["Validator"](self.jsoneditor, schema, validatorOptions, self.defaults)
    })

    this.switchEditor(0)
  },
  onChildEditorChange: function (editor) {
    if (this.editors[this.type]) {
      this.refreshValue()
      this.refreshHeaderText()
    }

    this._super()
  },
  refreshHeaderText: function () {
    var displayText = this.getDisplayText(this.types)
    Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.switcher_options, function (i, option) {
      option.textContent = displayText[i]
    })
  },
  refreshValue: function () {
    this.value = this.editors[this.type].getValue()
  },
  setValue: function (val, initial) {
    // Determine type by getting the first one that validates
    var self = this
    var prevType = this.type
    // find the best match one
    var fitTestVal = {
      match: 0,
      extra: 0,
      i: this.type
    }
    var validVal = {
      match: 0,
      i: null
    }
    Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.validators, function (i, validator) {
      var fitTestResult = null
      if (typeof self.anyOf !== 'undefined' && self.anyOf) {
        fitTestResult = validator.fitTest(val)
        if (fitTestVal.match < fitTestResult.match) {
          fitTestVal = fitTestResult
          fitTestVal.i = i
        } else if (fitTestVal.match === fitTestResult.match) {
          if (fitTestVal.extra > fitTestResult.extra) {
            fitTestVal = fitTestResult
            fitTestVal.i = i
          }
        }
      }
      if (!validator.validate(val).length && validVal.i === null) {
        validVal.i = i
        if (fitTestResult !== null) {
          validVal.match = fitTestResult.match
        }
      }
    })
    var finalI = validVal.i
    // if the best fit schema has more match properties, then use the best fit schema.
    // usually the value could be
    if (typeof self.anyOf !== 'undefined' && self.anyOf) {
      if (validVal.match < fitTestVal.match) {
        finalI = fitTestVal.i
      }
    }
    if (finalI === null) {
      finalI = this.type
    }
    this.type = finalI
    this.switcher.value = this.display_text[finalI]

    var typeChanged = this.type !== prevType
    if (typeChanged) {
      this.switchEditor(this.type)
    }

    this.editors[this.type].setValue(val, initial)

    this.refreshValue()
    self.onChange(typeChanged)
  },
  destroy: function () {
    Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.editors, function (type, editor) {
      if (editor) editor.destroy()
    })
    if (this.editor_holder && this.editor_holder.parentNode) this.editor_holder.parentNode.removeChild(this.editor_holder)
    if (this.switcher && this.switcher.parentNode) this.switcher.parentNode.removeChild(this.switcher)
    this._super()
  },
  showValidationErrors: function (errors) {
    var self = this

    // oneOf and anyOf error paths need to remove the oneOf[i] part before passing to child editors
    if (this.oneOf || this.anyOf) {
      var checkPart = this.oneOf ? 'oneOf' : 'anyOf'
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.editors, function (i, editor) {
        if (!editor) return
        var check = self.path + '.' + checkPart + '[' + i + ']'
        var newErrors = []
        Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(errors, function (j, error) {
          if (error.path === check.substr(0, error.path.length)) {
            var newError = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, error)
            newError.path = self.path + newError.path.substr(check.length)
            newErrors.push(newError)
          }
        })

        editor.showValidationErrors(newErrors)
      })
    } else {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.editors, function (type, editor) {
        if (!editor) return
        editor.showValidationErrors(errors)
      })
    }
  }
})


/***/ }),

/***/ "./src/editors/multiselect.js":
/*!************************************!*\
  !*** ./src/editors/multiselect.js ***!
  \************************************/
/*! exports provided: MultiSelectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectEditor", function() { return MultiSelectEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");



var MultiSelectEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({
  onInputChange: function () {
    this.value = this.input.value
    this.onChange(true)
  },
  register: function () {
    this._super()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  },
  unregister: function () {
    this._super()
    if (!this.input) return
    this.input.removeAttribute('name')
  },
  getNumColumns: function () {
    var longestText = this.getTitle().length
    for (var i in this.select_values) {
      if (!this.select_values.hasOwnProperty(i)) continue
      longestText = Math.max(longestText, (this.select_values[i] + '').length + 4)
    }

    return Math.min(12, Math.max(longestText / 7, 2))
  },
  preBuild: function () {
    this._super()

    this.select_options = {}
    this.select_values = {}
    this.option_keys = []
    this.option_titles = []

    var i
    var itemsSchema = this.jsoneditor.expandRefs(this.schema.items || {})
    var e = itemsSchema['enum'] || []
    var t = itemsSchema.options ? itemsSchema.options.enum_titles || [] : []

    for (i = 0; i < e.length; i++) {
      // If the sanitized value is different from the enum value, don't include it
      if (this.sanitize(e[i]) !== e[i]) continue

      this.option_keys.push(e[i] + '')
      this.option_titles.push((t[i] || e[i]) + '')
      this.select_values[e[i] + ''] = e[i]
    }
  },
  build: function () {
    var self = this; var i
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    if ((!this.schema.format && this.option_keys.length < 8) || this.schema.format === 'checkbox') {
      this.input_type = 'checkboxes'

      this.inputs = {}
      this.controls = {}
      for (i = 0; i < this.option_keys.length; i++) {
        this.inputs[this.option_keys[i]] = this.theme.getCheckbox()
        this.select_options[this.option_keys[i]] = this.inputs[this.option_keys[i]]
        var label = this.theme.getCheckboxLabel(this.option_titles[i])
        this.controls[this.option_keys[i]] = this.theme.getFormControl(label, this.inputs[this.option_keys[i]])
      }

      this.control = this.theme.getMultiCheckboxHolder(this.controls, this.label, this.description, this.infoButton)
      this.inputs.controlgroup = this.inputs.controls = this.control // Enable error messages for checkboxes
    } else {
      this.input_type = 'select'
      this.input = this.theme.getSelectInput(this.option_keys, true)
      this.theme.setSelectOptions(this.input, this.option_keys, this.option_titles)
      // this.input.multiple = true;
      this.input.setAttribute('multiple', 'multiple')
      this.input.size = Math.min(10, this.option_keys.length)
      for (i = 0; i < this.option_keys.length; i++) {
        this.select_options[this.option_keys[i]] = this.input.children[i]
      }

      this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton)
    }

    if (this.schema.readOnly || this.schema.readonly) this.disable(true)

    this.container.appendChild(this.control)

    this.multiselectChangeHandler = function (e) {
      var newValue = []
      for (i = 0; i < self.option_keys.length; i++) {
        if (self.select_options[self.option_keys[i]] && (self.select_options[self.option_keys[i]].selected || self.select_options[self.option_keys[i]].checked)) newValue.push(self.select_values[self.option_keys[i]])
      }
      self.updateValue(newValue)
      self.onChange(true)
    }

    this.control.addEventListener('change', this.multiselectChangeHandler, false)

    // Any special formatting that needs to happen after the input is added to the dom
    window.requestAnimationFrame(function () {
      self.afterInputReady()
    })
  },
  postBuild: function () {
    this._super()
    // this.theme.afterInputReady(this.input || this.inputs);
  },
  afterInputReady: function () {
    var self = this
    this.theme.afterInputReady(self.input || self.inputs)
  },
  setValue: function (value, initial) {
    var i
    value = value || []
    if (!(Array.isArray(value))) value = [value]

    // Make sure we are dealing with an array of strings so we can check for strict equality
    value = value.map(function (e) { return e + '' })

    // Update selected status of options
    for (i in this.select_options) {
      if (!this.select_options.hasOwnProperty(i)) continue
      this.select_options[i][this.input_type === 'select' ? 'selected' : 'checked'] = (value.indexOf(i) !== -1)
    }

    this.updateValue(value)
    this.onChange(true)
  },
  removeValue: function (value) {
    // Remove from existing value(s)
    value = [].concat(value)
    this.setValue(this.getValue().filter(function (item) { return value.indexOf(item) === -1 }))
  },
  addValue: function (value) {
    // Add to existing value(s)
    this.setValue(this.getValue().concat(value))
  },
  updateValue: function (value) {
    var changed = false
    var newValue = []
    for (var i = 0; i < value.length; i++) {
      if (!this.select_options[value[i] + '']) {
        changed = true
        continue
      }
      var sanitized = this.sanitize(this.select_values[value[i]])
      newValue.push(sanitized)
      if (sanitized !== value[i]) changed = true
    }
    this.value = newValue

    return changed
  },
  sanitize: function (value) {
    if (this.schema.items.type === 'boolean') return !!value
    else if (this.schema.items.type === 'number') return 1 * value || 0
    else if (this.schema.items.type === 'integer') return Math.floor(value * 1 || 0)
    else return '' + value
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.input) {
        this.input.disabled = false
      } else if (this.inputs) {
        for (var i in this.inputs) {
          if (!this.inputs.hasOwnProperty(i)) continue
          this.inputs[i].disabled = false
        }
      }
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.input) {
      this.input.disabled = true
    } else if (this.inputs) {
      for (var i in this.inputs) {
        if (!this.inputs.hasOwnProperty(i)) continue
        this.inputs[i].disabled = true
      }
    }
    this._super()
  },
  destroy: function () {
    this._super()
  },
  escapeRegExp: function (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  },
  showValidationErrors: function (errors) {
    var regexPath = new RegExp('^' + this.escapeRegExp(this.path) + '(\\.\\d+)?$')
    var messages = []

    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path.match(regexPath)) {
        messages.push(error.message)
      }
    })

    if (messages.length) {
      this.theme.addInputError(this.input || this.inputs, messages.join('. ') + '.')
    } else {
      this.theme.removeInputError(this.input || this.inputs)
    }
  }
})


/***/ }),

/***/ "./src/editors/null.js":
/*!*****************************!*\
  !*** ./src/editors/null.js ***!
  \*****************************/
/*! exports provided: NullEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullEditor", function() { return NullEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");


var NullEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return null
  },
  setValue: function () {
    this.onChange()
  },
  getNumColumns: function () {
    return 2
  }
})


/***/ }),

/***/ "./src/editors/number.js":
/*!*******************************!*\
  !*** ./src/editors/number.js ***!
  \*******************************/
/*! exports provided: NumberEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberEditor", function() { return NumberEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");


var NumberEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  build: function () {
    this._super()

    if (typeof this.schema.minimum !== 'undefined') {
      var minimum = this.schema.minimum

      if (typeof this.schema.exclusiveMinimum !== 'undefined') {
        minimum += 1
      }

      this.input.setAttribute('min', minimum)
    }

    if (typeof this.schema.maximum !== 'undefined') {
      var maximum = this.schema.maximum

      if (typeof this.schema.exclusiveMaximum !== 'undefined') {
        maximum -= 1
      }

      this.input.setAttribute('max', maximum)
    }

    if (typeof this.schema.step !== 'undefined') {
      var step = this.schema.step || 1
      this.input.setAttribute('step', step)
    }

    // Set custom attributes on input element. Parameter is array of protected keys. Empty array if none.
    this.setInputAttributes(['maxlength', 'pattern', 'readonly', 'min', 'max', 'step'])
  },
  sanitize: function (value) {
    // eslint says the first escape is useless but removing it breaks e2e tests
    // eslint-disable-next-line no-useless-escape
    return (value + '').replace(/[^0-9\.\-eE]/g, '')
  },
  getNumColumns: function () {
    return 2
  },
  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return this.value === '' ? undefined : this.value * 1
  }
})


/***/ }),

/***/ "./src/editors/object.js":
/*!*******************************!*\
  !*** ./src/editors/object.js ***!
  \*******************************/
/*! exports provided: ObjectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectEditor", function() { return ObjectEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var ObjectEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  getDefault: function () {
    return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema['default'] || {})
  },
  getChildEditors: function () {
    return this.editors
  },
  register: function () {
    this._super()
    if (this.editors) {
      for (var i in this.editors) {
        if (!this.editors.hasOwnProperty(i)) continue
        this.editors[i].register()
      }
    }
  },
  unregister: function () {
    this._super()
    if (this.editors) {
      for (var i in this.editors) {
        if (!this.editors.hasOwnProperty(i)) continue
        this.editors[i].unregister()
      }
    }
  },
  getNumColumns: function () {
    return Math.max(Math.min(12, this.maxwidth), 3)
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.editjson_control) this.editjson_control.disabled = false
      if (this.addproperty_button) this.addproperty_button.disabled = false

      this._super()
      if (this.editors) {
        for (var i in this.editors) {
          if (!this.editors.hasOwnProperty(i)) continue
          if (this.editors[i].isActive()) {
            this.editors[i].enable()
          }
          this.editors[i].optInCheckbox.disabled = false
        }
      }
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.editjson_control) this.editjson_control.disabled = true
    if (this.addproperty_button) this.addproperty_button.disabled = true
    this.hideEditJSON()

    this._super()
    if (this.editors) {
      for (var i in this.editors) {
        if (!this.editors.hasOwnProperty(i)) continue
        if (this.editors[i].isActive()) {
          this.editors[i].disable(alwaysDisabled)
        }
        this.editors[i].optInCheckbox.disabled = true
      }
    }
  },
  layoutEditors: function () {
    var self = this; var i; var j

    if (!this.row_container) return

    // Sort editors by propertyOrder
    this.property_order = Object.keys(this.editors)
    this.property_order = this.property_order.sort(function (a, b) {
      var ordera = self.editors[a].schema.propertyOrder
      var orderb = self.editors[b].schema.propertyOrder
      if (typeof ordera !== 'number') ordera = 1000
      if (typeof orderb !== 'number') orderb = 1000

      return ordera - orderb
    })

    var container
    var isCategoriesFormat = (this.format === 'categories')
    var rows = []
    var key = null
    var editor = null
    var row

    if (this.format === 'grid-strict') {
      var rowIndex = 0
      row = []

      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.property_order, function (j, key) {
        var editor = self.editors[key]
        if (editor.property_removed) {
          return
        }
        var width = editor.options.hidden ? 0 : (editor.options.grid_columns || editor.getNumColumns())
        var offset = editor.options.hidden ? 0 : (editor.options.grid_offset || 0)
        var gridBreak = editor.options.hidden ? false : (editor.options.grid_break || false)
        var height = editor.options.hidden ? 0 : editor.container.offsetHeight

        var column = {
          key: key,
          width: width,
          offset: offset,
          height: height
        }

        row.push(column)

        rows[rowIndex] = row

        if (gridBreak) {
          rowIndex++
          row = []
        }
      })

      // layout hasn't changed
      if (this.layout === JSON.stringify(rows)) return false
      this.layout = JSON.stringify(rows)

      // Layout the form
      container = document.createElement('div')
      for (i = 0; i < rows.length; i++) {
        row = this.theme.getGridRow()
        container.appendChild(row)
        for (j = 0; j < rows[i].length; j++) {
          key = rows[i][j].key
          editor = this.editors[key]
          if (editor.options.hidden) {
            editor.container.style.display = 'none'
          } else {
            this.theme.setGridColumnSize(editor.container, rows[i][j].width, rows[i][j].offset)
          }
          row.appendChild(editor.container)
        }
      }
    } else if (this.format === 'grid') {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.property_order, function (j, key) {
        var editor = self.editors[key]
        if (editor.property_removed) return
        var found = false
        var width = editor.options.hidden ? 0 : (editor.options.grid_columns || editor.getNumColumns())
        var height = editor.options.hidden ? 0 : editor.container.offsetHeight
        // See if the editor will fit in any of the existing rows first
        for (var i = 0; i < rows.length; i++) {
          // If the editor will fit in the row horizontally
          if (rows[i].width + width <= 12) {
            // If the editor is close to the other elements in height
            // i.e. Don't put a really tall editor in an otherwise short row or vice versa
            if (!height || (rows[i].minh * 0.5 < height && rows[i].maxh * 2 > height)) {
              found = i
            }
          }
        }

        // If there isn't a spot in any of the existing rows, start a new row
        if (found === false) {
          rows.push({
            width: 0,
            minh: 999999,
            maxh: 0,
            editors: []
          })
          found = rows.length - 1
        }

        rows[found].editors.push({
          key: key,
          // editor: editor,
          width: width,
          height: height
        })
        rows[found].width += width
        rows[found].minh = Math.min(rows[found].minh, height)
        rows[found].maxh = Math.max(rows[found].maxh, height)
      })

      // Make almost full rows width 12
      // Do this by increasing all editors' sizes proprotionately
      // Any left over space goes to the biggest editor
      // Don't touch rows with a width of 6 or less
      for (i = 0; i < rows.length; i++) {
        if (rows[i].width < 12) {
          var biggest = false
          var newWidth = 0
          for (j = 0; j < rows[i].editors.length; j++) {
            if (biggest === false) biggest = j
            else if (rows[i].editors[j].width > rows[i].editors[biggest].width) biggest = j
            rows[i].editors[j].width *= 12 / rows[i].width
            rows[i].editors[j].width = Math.floor(rows[i].editors[j].width)
            newWidth += rows[i].editors[j].width
          }
          if (newWidth < 12) rows[i].editors[biggest].width += 12 - newWidth
          rows[i].width = 12
        }
      }

      // layout hasn't changed
      if (this.layout === JSON.stringify(rows)) return false
      this.layout = JSON.stringify(rows)

      // Layout the form
      container = document.createElement('div')
      for (i = 0; i < rows.length; i++) {
        row = this.theme.getGridRow()
        container.appendChild(row)
        for (j = 0; j < rows[i].editors.length; j++) {
          key = rows[i].editors[j].key
          editor = this.editors[key]

          if (editor.options.hidden) editor.container.style.display = 'none'
          else this.theme.setGridColumnSize(editor.container, rows[i].editors[j].width)
          row.appendChild(editor.container)
        }
      }
    // Normal layout
    } else {
      container = document.createElement('div')

      if (isCategoriesFormat) {
        // A container for properties not object nor arrays
        var containerSimple = document.createElement('div')
        // This will be the place to (re)build tabs and panes
        // tabs_holder has 2 childs, [0]: ul.nav.nav-tabs and [1]: div.tab-content
        var newTabsHolder = this.theme.getTopTabHolder(this.schema.title)
        // child [1] of previous, stores panes
        var newTabPanesContainer = this.theme.getTopTabContentHolder(newTabsHolder)

        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.property_order, function (i, key) {
          var editor = self.editors[key]
          if (editor.property_removed) return
          var aPane = self.theme.getTabContent()
          var isObjOrArray = editor.schema && (editor.schema.type === 'object' || editor.schema.type === 'array')
          // mark the pane
          aPane.isObjOrArray = isObjOrArray
          var gridRow = self.theme.getGridRow()

          // this happens with added properties, they don't have a tab
          if (!editor.tab) {
            // Pass the pane which holds the editor
            if (typeof self.basicPane === 'undefined') {
              // There is no basicPane yet, so aPane will be it
              self.addRow(editor, newTabsHolder, aPane)
            } else {
              self.addRow(editor, newTabsHolder, self.basicPane)
            }
          }

          aPane.id = self.getValidId(editor.tab_text.textContent)

          // For simple properties, add them on the same panel (Basic)
          if (!isObjOrArray) {
            containerSimple.appendChild(gridRow)
            // There are already some panes
            if (newTabPanesContainer.childElementCount > 0) {
              // If first pane is object or array, insert before a simple pane
              if (newTabPanesContainer.firstChild.isObjOrArray) {
                // Append pane for simple properties
                aPane.appendChild(containerSimple)
                newTabPanesContainer.insertBefore(aPane, newTabPanesContainer.firstChild)
                // Add "Basic" tab
                self.theme.insertBasicTopTab(editor.tab, newTabsHolder)
                // newTabs_holder.firstChild.insertBefore(editor.tab,newTabs_holder.firstChild.firstChild);
                // Update the basicPane
                editor.basicPane = aPane
              } else {
                // We already have a first "Basic" pane, just add the new property to it, so
                // do nothing;
              }
            // There is no pane, so add the first (simple) pane
            } else {
              // Append pane for simple properties
              aPane.appendChild(containerSimple)
              newTabPanesContainer.appendChild(aPane)
              // Add "Basic" tab
              // newTabs_holder.firstChild.appendChild(editor.tab);
              self.theme.addTopTab(newTabsHolder, editor.tab)
              // Update the basicPane
              editor.basicPane = aPane
            }
          // Objects and arrays earn their own panes
          } else {
            aPane.appendChild(gridRow)
            newTabPanesContainer.appendChild(aPane)
            // newTabs_holder.firstChild.appendChild(editor.tab);
            self.theme.addTopTab(newTabsHolder, editor.tab)
          }

          if (editor.options.hidden) editor.container.style.display = 'none'
          else self.theme.setGridColumnSize(editor.container, 12)
          // Now, add the property editor to the row
          gridRow.appendChild(editor.container)
          // Update the rowPane (same as self.rows[x].rowPane)
          editor.rowPane = aPane
        })

        // Erase old panes
        while (this.tabPanesContainer.firstChild) {
          this.tabPanesContainer.removeChild(this.tabPanesContainer.firstChild)
        }

        // Erase old tabs and set the new ones
        var parentTabsHolder = this.tabs_holder.parentNode
        parentTabsHolder.removeChild(parentTabsHolder.firstChild)
        parentTabsHolder.appendChild(newTabsHolder)

        this.tabPanesContainer = newTabPanesContainer
        this.tabs_holder = newTabsHolder

        // Activate the first tab
        var firstTab = this.theme.getFirstTab(this.tabs_holder)
        if (firstTab) {
          Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$trigger"])(firstTab, 'click')
        }
        return
      // Normal layout
      } else {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.property_order, function (i, key) {
          var editor = self.editors[key]
          if (editor.property_removed) return
          row = self.theme.getGridRow()
          container.appendChild(row)

          if (editor.options.hidden) editor.container.style.display = 'none'
          else self.theme.setGridColumnSize(editor.container, 12)
          row.appendChild(editor.container)
        })
      }
    }
    // for grid and normal layout
    while (this.row_container.firstChild) {
      this.row_container.removeChild(this.row_container.firstChild)
    }
    this.row_container.appendChild(container)
  },
  getPropertySchema: function (key) {
    // Schema declared directly in properties
    var schema = this.schema.properties[key] || {}
    schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, schema)
    var matched = !!this.schema.properties[key]

    // Any matching patternProperties should be merged in
    if (this.schema.patternProperties) {
      for (var i in this.schema.patternProperties) {
        if (!this.schema.patternProperties.hasOwnProperty(i)) continue
        var regex = new RegExp(i)
        if (regex.test(key)) {
          schema.allOf = schema.allOf || []
          schema.allOf.push(this.schema.patternProperties[i])
          matched = true
        }
      }
    }

    // Hasn't matched other rules, use additionalProperties schema
    if (!matched && this.schema.additionalProperties && typeof this.schema.additionalProperties === 'object') {
      schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema.additionalProperties)
    }

    return schema
  },
  preBuild: function () {
    this._super()

    this.editors = {}
    this.cached_editors = {}
    var self = this

    this.format = this.options.layout || this.options.object_layout || this.schema.format || this.jsoneditor.options.object_layout || 'normal'

    this.schema.properties = this.schema.properties || {}

    this.minwidth = 0
    this.maxwidth = 0

    // If the object should be rendered as a table row
    if (this.options.table_row) {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.schema.properties, function (key, schema) {
        var editor = self.jsoneditor.getEditorClass(schema)
        self.editors[key] = self.jsoneditor.createEditor(editor, {
          jsoneditor: self.jsoneditor,
          schema: schema,
          path: self.path + '.' + key,
          parent: self,
          compact: true,
          required: true
        })
        self.editors[key].preBuild()

        var width = self.editors[key].options.hidden ? 0 : (self.editors[key].options.grid_columns || self.editors[key].getNumColumns())

        self.minwidth += width
        self.maxwidth += width
      })
      this.no_link_holder = true
    // If the object should be rendered as a table
    } else if (this.options.table) {
      // TODO: table display format
      throw new Error('Not supported yet')
    // If the object should be rendered as a div
    } else {
      if (!this.schema.defaultProperties) {
        if (this.jsoneditor.options.display_required_only || this.options.display_required_only) {
          this.schema.defaultProperties = []
          Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.schema.properties, function (k, s) {
            if (self.isRequired({key: k, schema: s})) {
              self.schema.defaultProperties.push(k)
            }
          })
        } else {
          self.schema.defaultProperties = Object.keys(self.schema.properties)
        }
      }

      // Increase the grid width to account for padding
      self.maxwidth += 1

      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.schema.defaultProperties, function (i, key) {
        self.addObjectProperty(key, true)

        if (self.editors[key]) {
          self.minwidth = Math.max(self.minwidth, (self.editors[key].options.grid_columns || self.editors[key].getNumColumns()))
          self.maxwidth += (self.editors[key].options.grid_columns || self.editors[key].getNumColumns())
        }
      })
    }

    // Sort editors by propertyOrder
    this.property_order = Object.keys(this.editors)
    this.property_order = this.property_order.sort(function (a, b) {
      var ordera = self.editors[a].schema.propertyOrder
      var orderb = self.editors[b].schema.propertyOrder
      if (typeof ordera !== 'number') ordera = 1000
      if (typeof orderb !== 'number') orderb = 1000

      return ordera - orderb
    })
  },
  // "Borrow" from arrays code
  addTab: function (idx) {
    var self = this
    var isObjOrArray = self.rows[idx].schema && (self.rows[idx].schema.type === 'object' || self.rows[idx].schema.type === 'array')
    if (self.tabs_holder) {
      self.rows[idx].tab_text = document.createElement('span')

      if (!isObjOrArray) {
        self.rows[idx].tab_text.textContent = (typeof self.schema.basicCategoryTitle === 'undefined') ? 'Basic' : self.schema.basicCategoryTitle
      } else {
        self.rows[idx].tab_text.textContent = self.rows[idx].getHeaderText()
      }
      self.rows[idx].tab = self.theme.getTopTab(self.rows[idx].tab_text, this.getValidId(self.rows[idx].tab_text.textContent))
      self.rows[idx].tab.addEventListener('click', function (e) {
        self.active_tab = self.rows[idx].tab
        self.refreshTabs()
        e.preventDefault()
        e.stopPropagation()
      })
    }
  },
  addRow: function (editor, tabHolder, aPane) {
    var self = this
    var rowsLen = this.rows.length
    var isObjOrArray = editor.schema.type === 'object' || editor.schema.type === 'array'

    // Add a row
    self.rows[rowsLen] = editor
    // rowPane stores the editor corresponding pane to set the display style when refreshing Tabs
    self.rows[rowsLen].rowPane = aPane

    if (!isObjOrArray) {
      // This is the first simple property to be added,
      // add a ("Basic") tab for it and save it's row number
      if (typeof self.basicTab === 'undefined') {
        self.addTab(rowsLen)
        // Store the index row of the first simple property added
        self.basicTab = rowsLen
        self.basicPane = aPane
        self.theme.addTopTab(tabHolder, self.rows[rowsLen].tab)
      } else {
        // Any other simple property gets the same tab (and the same pane) as the first one,
        // so, when 'click' event is fired from a row, it gets the correct ("Basic") tab
        self.rows[rowsLen].tab = self.rows[self.basicTab].tab
        self.rows[rowsLen].tab_text = self.rows[self.basicTab].tab_text
        self.rows[rowsLen].rowPane = self.rows[self.basicTab].rowPane
      }
    } else {
      self.addTab(rowsLen)
      self.theme.addTopTab(tabHolder, self.rows[rowsLen].tab)
    }
  },
  // Mark the active tab and make visible the corresponding pane, hide others
  refreshTabs: function (refreshHeaders) {
    var self = this
    var basicTabPresent = typeof self.basicTab !== 'undefined'
    var basicTabRefreshed = false

    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, row) {
      // If it's an orphan row (some property which has been deleted), return
      if (!row.tab || !row.rowPane || !row.rowPane.parentNode) return

      if (basicTabPresent && row.tab === self.rows[self.basicTab].tab && basicTabRefreshed) return

      if (refreshHeaders) {
        row.tab_text.textContent = row.getHeaderText()
      } else {
        // All rows of simple properties point to the same tab, so refresh just once
        if (basicTabPresent && row.tab === self.rows[self.basicTab].tab) basicTabRefreshed = true

        if (row.tab === self.active_tab) {
          self.theme.markTabActive(row)
        } else {
          self.theme.markTabInactive(row)
        }
      }
    })
  },
  build: function () {
    var self = this

    var isCategoriesFormat = (this.format === 'categories')
    this.rows = []
    this.active_tab = null

    // If the object should be rendered as a table row
    if (this.options.table_row) {
      this.editor_holder = this.container
      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (key, editor) {
        var holder = self.theme.getTableCell()
        self.editor_holder.appendChild(holder)

        editor.setContainer(holder)
        editor.build()
        editor.postBuild()
        editor.setOptInCheckbox(editor.header)

        if (self.editors[key].options.hidden) {
          holder.style.display = 'none'
        }
        if (self.editors[key].options.input_width) {
          holder.style.width = self.editors[key].options.input_width
        }
      })
    // If the object should be rendered as a table
    } else if (this.options.table) {
      // TODO: table display format
      throw new Error('Not supported yet')
    // If the object should be rendered as a div
    } else {
      this.header = ''
      if (!this.options.compact) {
        this.header = document.createElement('label')
        this.header.textContent = this.getTitle()
      }
      this.title = this.theme.getHeader(this.header)
      this.controls = this.theme.getButtonHolder()
      this.controls.style.margin = '0 0 0 10px'

      this.container.appendChild(this.title)
      this.title.appendChild(this.controls)
      this.container.style.position = 'relative'

      // Edit JSON modal
      this.editjson_holder = this.theme.getModal()
      this.editjson_textarea = this.theme.getTextareaInput()
      this.editjson_textarea.style.height = '170px'
      this.editjson_textarea.style.width = '300px'
      this.editjson_textarea.style.display = 'block'
      this.editjson_save = this.getButton('Save', 'save', 'Save')
      this.editjson_save.classList.add('json-editor-btntype-save')
      this.editjson_save.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        self.saveJSON()
      })
      this.editjson_copy = this.getButton('Copy', 'copy', 'Copy')
      this.editjson_copy.classList.add('json-editor-btntype-copy')
      this.editjson_copy.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        self.copyJSON()
      })
      this.editjson_cancel = this.getButton('Cancel', 'cancel', 'Cancel')
      this.editjson_cancel.classList.add('json-editor-btntype-cancel')
      this.editjson_cancel.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        self.hideEditJSON()
      })
      this.editjson_holder.appendChild(this.editjson_textarea)
      this.editjson_holder.appendChild(this.editjson_save)
      this.editjson_holder.appendChild(this.editjson_copy)
      this.editjson_holder.appendChild(this.editjson_cancel)

      // Manage Properties modal
      this.addproperty_holder = this.theme.getModal()
      this.addproperty_list = document.createElement('div')
      this.addproperty_list.style.width = '295px'
      this.addproperty_list.style.maxHeight = '160px'
      this.addproperty_list.style.padding = '5px 0'
      this.addproperty_list.style.overflowY = 'auto'
      this.addproperty_list.style.overflowX = 'hidden'
      this.addproperty_list.style.paddingLeft = '5px'
      this.addproperty_list.setAttribute('class', 'property-selector')
      this.addproperty_add = this.getButton('add', 'add', 'add')
      this.addproperty_add.classList.add('json-editor-btntype-add')
      this.addproperty_input = this.theme.getFormInputField('text')
      this.addproperty_input.setAttribute('placeholder', 'Property name...')
      this.addproperty_input.style.width = '220px'
      this.addproperty_input.style.marginBottom = '0'
      this.addproperty_input.style.display = 'inline-block'
      this.addproperty_add.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (self.addproperty_input.value) {
          if (self.editors[self.addproperty_input.value]) {
            window.alert('there is already a property with that name')
            return
          }

          self.addObjectProperty(self.addproperty_input.value)
          if (self.editors[self.addproperty_input.value]) {
            self.editors[self.addproperty_input.value].disable()
          }
          self.onChange(true)
        }
      })
      this.addproperty_input.addEventListener('input', function (e) {
        e.target.previousSibling.childNodes.forEach(function (value) {
          if (value.innerText.indexOf(e.target.value) >= 0) {
            value.style.display = ''
          } else {
            value.style.display = 'none'
          }
        })
      })
      this.addproperty_holder.appendChild(this.addproperty_list)
      this.addproperty_holder.appendChild(this.addproperty_input)
      this.addproperty_holder.appendChild(this.addproperty_add)
      var spacer = document.createElement('div')
      spacer.style.clear = 'both'
      this.addproperty_holder.appendChild(spacer)

      // Close properties modal if clicked outside modal
      document.addEventListener('click', this.onOutsideModalClick)

      // Description
      if (this.schema.description) {
        this.description = this.theme.getDescription(this.schema.description)
        this.container.appendChild(this.description)
      }

      // Validation error placeholder area
      this.error_holder = document.createElement('div')
      this.container.appendChild(this.error_holder)

      // Container for child editor area
      this.editor_holder = this.theme.getIndentedPanel()
      this.container.appendChild(this.editor_holder)

      // Container for rows of child editors
      this.row_container = this.theme.getGridContainer()

      if (isCategoriesFormat) {
        this.tabs_holder = this.theme.getTopTabHolder(this.getValidId(this.schema.title))
        this.tabPanesContainer = this.theme.getTopTabContentHolder(this.tabs_holder)
        this.editor_holder.appendChild(this.tabs_holder)
      } else {
        this.tabs_holder = this.theme.getTabHolder(this.getValidId(this.schema.title))
        this.tabPanesContainer = this.theme.getTabContentHolder(this.tabs_holder)
        this.editor_holder.appendChild(this.row_container)
      }

      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (key, editor) {
        var aPane = self.theme.getTabContent()
        var holder = self.theme.getGridColumn()
        var isObjOrArray = !!((editor.schema && (editor.schema.type === 'object' || editor.schema.type === 'array')))
        aPane.isObjOrArray = isObjOrArray

        if (isCategoriesFormat) {
          if (isObjOrArray) {
            var singleRowContainer = self.theme.getGridContainer()
            singleRowContainer.appendChild(holder)
            aPane.appendChild(singleRowContainer)
            self.tabPanesContainer.appendChild(aPane)
            self.row_container = singleRowContainer
          } else {
            if (typeof self.row_container_basic === 'undefined') {
              self.row_container_basic = self.theme.getGridContainer()
              aPane.appendChild(self.row_container_basic)
              if (self.tabPanesContainer.childElementCount === 0) {
                self.tabPanesContainer.appendChild(aPane)
              } else {
                self.tabPanesContainer.insertBefore(aPane, self.tabPanesContainer.childNodes[1])
              }
            }
            self.row_container_basic.appendChild(holder)
          }

          self.addRow(editor, self.tabs_holder, aPane)

          aPane.id = self.getValidId(editor.schema.title) // editor.schema.path//tab_text.textContent
        } else {
          self.row_container.appendChild(holder)
        }

        editor.setContainer(holder)
        editor.build()
        editor.postBuild()
        editor.setOptInCheckbox(editor.header)
      })

      if (this.rows[0]) {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$trigger"])(this.rows[0].tab, 'click')
      }

      // Show/Hide button
      this.collapsed = false
      this.collapse_control = this.getButton('', 'collapse', this.translate('button_collapse'))
      this.collapse_control.style.margin = '0 10px 0 0'
      this.collapse_control.classList.add('json-editor-btntype-toggle')
      this.title.insertBefore(this.collapse_control, this.title.childNodes[0])

      this.collapse_control.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (self.collapsed) {
          self.editor_holder.style.display = ''
          self.collapsed = false
          self.setButtonText(self.collapse_control, '', 'collapse', self.translate('button_collapse'))
        } else {
          self.editor_holder.style.display = 'none'
          self.collapsed = true
          self.setButtonText(self.collapse_control, '', 'expand', self.translate('button_expand'))
        }
      })

      // If it should start collapsed
      if (this.options.collapsed) {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$trigger"])(this.collapse_control, 'click')
      }

      // Collapse button disabled
      if (this.schema.options && typeof this.schema.options.disable_collapse !== 'undefined') {
        if (this.schema.options.disable_collapse) this.collapse_control.style.display = 'none'
      } else if (this.jsoneditor.options.disable_collapse) {
        this.collapse_control.style.display = 'none'
      }

      // Edit JSON Button
      this.editjson_control = this.getButton('JSON', 'edit', 'Edit JSON')
      this.editjson_control.classList.add('json-editor-btntype-editjson')
      this.editjson_control.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        self.toggleEditJSON()
      })
      this.controls.appendChild(this.editjson_control)
      this.controls.insertBefore(this.editjson_holder, this.controls.childNodes[1])

      // Edit JSON Buttton disabled
      if (this.schema.options && typeof this.schema.options.disable_edit_json !== 'undefined') {
        if (this.schema.options.disable_edit_json) this.editjson_control.style.display = 'none'
      } else if (this.jsoneditor.options.disable_edit_json) {
        this.editjson_control.style.display = 'none'
      }

      // Object Properties Button
      this.addproperty_button = this.getButton('Properties', 'edit_properties', self.translate('button_object_properties'))
      this.addproperty_button.classList.add('json-editor-btntype-properties')
      this.addproperty_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        self.toggleAddProperty()
      })
      this.controls.appendChild(this.addproperty_button)
      this.controls.insertBefore(this.addproperty_holder, this.controls.childNodes[1])

      this.refreshAddProperties()

      // non required properties start deactivated
      this.deactivateNonRequiredProperties()
    }

    // Fix table cell ordering
    if (this.options.table_row) {
      this.editor_holder = this.container
      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.property_order, function (i, key) {
        self.editor_holder.appendChild(self.editors[key].container)
      })
    // Layout object editors in grid if needed
    } else {
      // Initial layout
      this.layoutEditors()
      // Do it again now that we know the approximate heights of elements
      this.layoutEditors()
    }
  },
  deactivateNonRequiredProperties: function () {
    var self = this
    // the show_opt_in editor option is for backward compatibility
    if (this.jsoneditor.options.show_opt_in || this.options.show_opt_in) {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (key, editor) {
        if (!self.isRequired(editor)) {
          self.editors[key].deactivate()
        }
      })
    }
  },
  showEditJSON: function () {
    if (!this.editjson_holder) return
    this.hideAddProperty()

    // Position the form directly beneath the button
    // TODO: edge detection
    this.editjson_holder.style.left = this.editjson_control.offsetLeft + 'px'
    this.editjson_holder.style.top = this.editjson_control.offsetTop + this.editjson_control.offsetHeight + 'px'

    // Start the textarea with the current value
    this.editjson_textarea.value = JSON.stringify(this.getValue(), null, 2)

    // Disable the rest of the form while editing JSON
    this.disable()

    this.editjson_holder.style.display = ''
    this.editjson_control.disabled = false
    this.editing_json = true
  },
  hideEditJSON: function () {
    if (!this.editjson_holder) return
    if (!this.editing_json) return

    this.editjson_holder.style.display = 'none'
    this.enable()
    this.editing_json = false
  },
  copyJSON: function () {
    if (!this.editjson_holder) return
    var ta = document.createElement('textarea')
    ta.value = this.editjson_textarea.value
    ta.setAttribute('readonly', '')
    ta.style.position = 'absolute'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  },
  saveJSON: function () {
    if (!this.editjson_holder) return

    try {
      var json = JSON.parse(this.editjson_textarea.value)
      this.setValue(json)
      this.hideEditJSON()
      this.onChange(true)
    } catch (e) {
      window.alert('invalid JSON')
      throw e
    }
  },
  toggleEditJSON: function () {
    if (this.editing_json) this.hideEditJSON()
    else this.showEditJSON()
  },
  insertPropertyControlUsingPropertyOrder: function (property, control, container) {
    var propertyOrder
    if (this.schema.properties[property]) { propertyOrder = this.schema.properties[property].propertyOrder }
    if (typeof propertyOrder !== 'number') propertyOrder = 1000
    control.propertyOrder = propertyOrder

    for (var i = 0; i < container.childNodes.length; i++) {
      var child = container.childNodes[i]
      if (control.propertyOrder < child.propertyOrder) {
        this.addproperty_list.insertBefore(control, child)
        control = null
        break
      }
    }
    if (control) {
      this.addproperty_list.appendChild(control)
    }
  },
  addPropertyCheckbox: function (key) {
    var self = this
    var checkbox, label, labelText, control

    checkbox = self.theme.getCheckbox()
    checkbox.style.width = 'auto'

    if (this.schema.properties[key] && this.schema.properties[key].title) { labelText = this.schema.properties[key].title } else { labelText = key }

    label = self.theme.getCheckboxLabel(labelText)

    control = self.theme.getFormControl(label, checkbox)
    control.style.paddingBottom = control.style.marginBottom = control.style.paddingTop = control.style.marginTop = 0
    control.style.height = 'auto'
    // control.style.overflowY = 'hidden';

    this.insertPropertyControlUsingPropertyOrder(key, control, this.addproperty_list)

    checkbox.checked = key in this.editors
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        self.addObjectProperty(key)
      } else {
        self.removeObjectProperty(key)
      }
      self.onChange(true)
    })
    self.addproperty_checkboxes[key] = checkbox

    return checkbox
  },
  showAddProperty: function () {
    if (!this.addproperty_holder) return
    this.hideEditJSON()

    // Position the form directly beneath the button
    // TODO: edge detection
    this.addproperty_holder.style.left = this.addproperty_button.offsetLeft + 'px'
    this.addproperty_holder.style.top = this.addproperty_button.offsetTop + this.addproperty_button.offsetHeight + 'px'

    // Disable the rest of the form while editing JSON
    this.disable()

    this.adding_property = true
    this.addproperty_button.disabled = false
    this.addproperty_holder.style.display = ''
    this.refreshAddProperties()
  },
  hideAddProperty: function () {
    if (!this.addproperty_holder) return
    if (!this.adding_property) return

    this.addproperty_holder.style.display = 'none'
    this.enable()

    this.adding_property = false
  },
  toggleAddProperty: function () {
    if (this.adding_property) this.hideAddProperty()
    else this.showAddProperty()
  },
  removeObjectProperty: function (property) {
    if (this.editors[property]) {
      this.editors[property].unregister()
      delete this.editors[property]

      this.refreshValue()
      this.layoutEditors()
    }
  },
  addObjectProperty: function (name, prebuildOnly) {
    var self = this

    // Property is already added
    if (this.editors[name]) return

    // Property was added before and is cached
    if (this.cached_editors[name]) {
      this.editors[name] = this.cached_editors[name]
      if (prebuildOnly) return
      this.editors[name].register()
    // New property
    } else {
      if (!this.canHaveAdditionalProperties() && (!this.schema.properties || !this.schema.properties[name])) {
        return
      }

      var schema = self.getPropertySchema(name)
      if (typeof schema.propertyOrder !== 'number') {
        // if the propertyOrder undefined, then set a smart default value.
        schema.propertyOrder = Object.keys(self.editors).length + 1000
      }

      // Add the property
      var editor = self.jsoneditor.getEditorClass(schema)

      self.editors[name] = self.jsoneditor.createEditor(editor, {
        jsoneditor: self.jsoneditor,
        schema: schema,
        path: self.path + '.' + name,
        parent: self
      })
      self.editors[name].preBuild()

      if (!prebuildOnly) {
        var holder = self.theme.getChildEditorHolder()
        self.editor_holder.appendChild(holder)
        self.editors[name].setContainer(holder)
        self.editors[name].build()
        self.editors[name].postBuild()
        self.editors[name].setOptInCheckbox(editor.header)
        self.editors[name].activate()
      }

      self.cached_editors[name] = self.editors[name]
    }

    // If we're only prebuilding the editors, don't refresh values
    if (!prebuildOnly) {
      self.refreshValue()
      self.layoutEditors()
    }
  },
  onOutsideModalClick: function (e) {
    if (this.addproperty_holder && !this.addproperty_holder.contains(e.target) && this.adding_property) {
      e.preventDefault()
      e.stopPropagation()
      this.toggleAddProperty()
    }
  },
  onChildEditorChange: function (editor) {
    this.refreshValue()
    this._super(editor)
  },
  canHaveAdditionalProperties: function () {
    if (typeof this.schema.additionalProperties === 'boolean') {
      return this.schema.additionalProperties
    }
    return !this.jsoneditor.options.no_additional_properties
  },
  destroy: function () {
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.cached_editors, function (i, el) {
      el.destroy()
    })
    if (this.editor_holder) this.editor_holder.innerHTML = ''
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.error_holder && this.error_holder.parentNode) this.error_holder.parentNode.removeChild(this.error_holder)

    this.editors = null
    this.cached_editors = null
    if (this.editor_holder && this.editor_holder.parentNode) this.editor_holder.parentNode.removeChild(this.editor_holder)
    this.editor_holder = null
    document.removeEventListener('click', this.onOutsideModalClick)

    this._super()
  },
  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    var result = this._super()
    if (this.jsoneditor.options.remove_empty_properties || this.options.remove_empty_properties) {
      for (var i in result) {
        if (result.hasOwnProperty(i)) {
          if ((typeof result[i] === 'undefined' || result[i] === '' || result[i] === Object(result[i])) && Object.keys(result[i]).length === 0 && result[i].constructor === Object) {
            delete result[i]
          }
        }
      }
    }

    return result
  },
  refreshValue: function () {
    this.value = {}

    for (var i in this.editors) {
      if (!this.editors.hasOwnProperty(i)) continue
      if (this.editors[i].isActive()) {
        this.value[i] = this.editors[i].getValue()
      }
    }

    if (this.adding_property) this.refreshAddProperties()
  },
  refreshAddProperties: function () {
    if (this.options.disable_properties || (this.options.disable_properties !== false && this.jsoneditor.options.disable_properties)) {
      this.addproperty_button.style.display = 'none'
      return
    }

    var canAdd = false; var numProps = 0; var i; var showModal = false

    // Get number of editors
    for (i in this.editors) {
      if (!this.editors.hasOwnProperty(i)) continue
      numProps++
    }

    // Determine if we can add back removed properties
    canAdd = this.canHaveAdditionalProperties() && !(typeof this.schema.maxProperties !== 'undefined' && numProps >= this.schema.maxProperties)

    if (this.addproperty_checkboxes) {
      this.addproperty_list.innerHTML = ''
    }
    this.addproperty_checkboxes = {}

    // Check for which editors can't be removed or added back
    for (i in this.cached_editors) {
      if (!this.cached_editors.hasOwnProperty(i)) continue

      this.addPropertyCheckbox(i)

      if (this.isRequired(this.cached_editors[i]) && i in this.editors) {
        this.addproperty_checkboxes[i].disabled = true
      }

      if (typeof this.schema.minProperties !== 'undefined' && numProps <= this.schema.minProperties) {
        this.addproperty_checkboxes[i].disabled = this.addproperty_checkboxes[i].checked
        if (!this.addproperty_checkboxes[i].checked) showModal = true
      } else if (!(i in this.editors)) {
        if (!canAdd && !this.schema.properties.hasOwnProperty(i)) {
          this.addproperty_checkboxes[i].disabled = true
        } else {
          this.addproperty_checkboxes[i].disabled = false
          showModal = true
        }
      } else {
        showModal = true
      }
    }

    if (this.canHaveAdditionalProperties()) {
      showModal = true
    }

    // Additional addproperty checkboxes not tied to a current editor
    for (i in this.schema.properties) {
      if (!this.schema.properties.hasOwnProperty(i)) continue
      if (this.cached_editors[i]) continue
      showModal = true
      this.addPropertyCheckbox(i)
    }

    // If no editors can be added or removed, hide the modal button
    if (!showModal) {
      this.hideAddProperty()
      this.addproperty_button.style.display = 'none'
    // If additional properties are disabled
    } else if (!this.canHaveAdditionalProperties()) {
      this.addproperty_add.style.display = 'none'
      this.addproperty_input.style.display = 'none'
    // If no new properties can be added
    } else if (!canAdd) {
      this.addproperty_add.disabled = true
    // If new properties can be added
    } else {
      this.addproperty_add.disabled = false
    }
  },
  isRequired: function (editor) {
    if (!editor) {
      return
    }
    if (typeof editor.schema.required === 'boolean') return editor.schema.required
    else if (Array.isArray(this.schema.required)) return this.schema.required.indexOf(editor.key) > -1
    else if (this.jsoneditor.options.required_by_default) return true
    else return false
  },
  setValue: function (value, initial) {
    var self = this
    value = value || {}

    if (typeof value !== 'object' || Array.isArray(value)) value = {}

    // First, set the values for all of the defined properties
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.cached_editors, function (i, editor) {
      // Value explicitly set
      if (typeof value[i] !== 'undefined') {
        self.addObjectProperty(i)
        editor.setValue(value[i], initial)
      // Otherwise, remove value unless this is the initial set or it's required
      } else if (!initial && !self.isRequired(editor)) {
        self.removeObjectProperty(i)
      // Otherwise, set the value to the default
      } else {
        editor.setValue(editor.getDefault(), initial)
      }
    })

    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(value, function (i, val) {
      if (!self.cached_editors[i]) {
        self.addObjectProperty(i)
        if (self.editors[i]) self.editors[i].setValue(val, initial)
      }
    })

    this.refreshValue()
    this.layoutEditors()
    this.onChange()
  },
  showValidationErrors: function (errors) {
    var self = this

    // Get all the errors that pertain to this editor
    var myErrors = []
    var otherErrors = []
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path === self.path) {
        myErrors.push(error)
      } else {
        otherErrors.push(error)
      }
    })

    // Show errors for this editor
    if (this.error_holder) {
      if (myErrors.length) {
        this.error_holder.innerHTML = ''
        this.error_holder.style.display = ''
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(myErrors, function (i, error) {
          if (error.errorcount && error.errorcount > 1) error.message += ' (' + error.errorcount + ' errors)'
          self.error_holder.appendChild(self.theme.getErrorMessage(error.message))
        })
      // Hide error area
      } else {
        this.error_holder.style.display = 'none'
      }
    }

    // Show error for the table row if this is inside a table
    if (this.options.table_row) {
      if (myErrors.length) {
        this.theme.addTableRowError(this.container)
      } else {
        this.theme.removeTableRowError(this.container)
      }
    }

    // Show errors for child editors
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.editors, function (i, editor) {
      editor.showValidationErrors(otherErrors)
    })
  }
})


/***/ }),

/***/ "./src/editors/radio.js":
/*!******************************!*\
  !*** ./src/editors/radio.js ***!
  \******************************/
/*! exports provided: RadioEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioEditor", function() { return RadioEditor; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./src/editors/select.js");


var RadioEditor = _select__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"].extend({

  preBuild: function () {
    this.schema.required = true // force editor into required mode to prevent creation of empty radio button
    this._super()
  },
  build: function () {
    var self = this
    this.label = ''
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.radioContainer = document.createElement('div')

    this.radioGroup = []

    var radioInputEventhandler = function (e) {
      self.setValue(this.value)
      self.onChange(true)
    }

    for (var i = 0; i < this.enum_values.length; i++) {
      // form radio elements
      this.input = this.theme.getFormRadio({
        name: this.formname,
        id: this.formname + '[' + i + ']',
        value: this.enum_values[i]
      })

      // Set custom attributes on input element. Parameter is array of protected keys. Empty array if none.
      this.setInputAttributes(['id', 'value', 'name'])

      this.input.addEventListener('change', radioInputEventhandler, false)
      this.radioGroup.push(this.input)

      // form-label for radio elements
      var radioLabel = this.theme.getFormRadioLabel(this.enum_display[i])
      radioLabel.htmlFor = this.input.id

      var control = this.theme.getFormRadioControl(radioLabel, this.input, !!(this.options.layout === 'horizontal' || this.options.compact))

      this.radioContainer.appendChild(control)
    }

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      for (var j = 0; j < this.radioGroup.length; j++) {
        this.radioGroup[j].disabled = true
      }
      this.radioContainer.classList.add('readonly')
    }

    var radioContainerWrapper = this.theme.getContainer()
    radioContainerWrapper.appendChild(this.radioContainer)
    radioContainerWrapper.dataset.containerFor = 'radio'

    this.input = radioContainerWrapper

    this.control = this.theme.getFormControl(this.label, radioContainerWrapper, this.description, this.infoButton)
    this.container.appendChild(this.control)

    // Any special formatting that needs to happen after the input is added to the dom
    window.requestAnimationFrame(function () {
      if (self.input.parentNode) self.afterInputReady()
    })
  },
  enable: function () {
    if (!this.always_disabled) {
      for (var i = 0; i < this.radioGroup.length; i++) {
        this.radioGroup[i].disabled = false
      }
      this.radioContainer.classList.remove('readonly')
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    for (var i = 0; i < this.radioGroup.length; i++) {
      this.radioGroup[i].disabled = true
    }
    this.radioContainer.classList.add('readonly')
    this._super()
  },
  destroy: function () {
    if (this.radioContainer.parentNode && this.radioContainer.parentNode.parentNode) this.radioContainer.parentNode.parentNode.removeChild(this.radioContainer.parentNode)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    this._super()
  },
  getNumColumns: function () {
    return 2
  },
  setValue: function (val) {
    for (var i = 0; i < this.radioGroup.length; i++) {
      if (this.radioGroup[i].value === val) {
        this.radioGroup[i].checked = true
        this.value = val
        this.onChange()
        break
      }
    }
  }
})


/***/ }),

/***/ "./src/editors/sceditor.js":
/*!*********************************!*\
  !*** ./src/editors/sceditor.js ***!
  \*********************************/
/*! exports provided: ScEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScEditor", function() { return ScEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var ScEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  setValue: function (value, initial, fromTemplate) {
    var res = this._super(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.sceditor_instance) this.sceditor_instance.val(res.value)
  },
  build: function () {
    this.options.format = 'textarea' // Force format into "textarea"
    this._super()
    this.input_type = this.schema.format // Restore original format
    this.input.setAttribute('data-schemaformat', this.input_type)
  },
  afterInputReady: function () {
    if (window.sceditor) {
      // Get options, either global options from "this.defaults.options.sceditor" or
      // single property options from schema "options.sceditor"
      var options = this.expandCallbacks('sceditor', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        format: this.input_type,
        emoticonsEnabled: false,
        width: '100%',
        height: 300,
        readOnly: this.schema.readOnly || this.schema.readonly || this.schema.template
      }, this.defaults.options.sceditor || {}, this.options.sceditor || {}, {
        element: this.input
      }))

      var instance = window.sceditor.instance(this.input)

      if (instance === undefined) {
        window.sceditor.create(this.input, options) // Create doesn't return instance.
      }

      this.sceditor_instance = instance || window.sceditor.instance(this.input)

      // Listen for changes
      this.sceditor_instance.blur(function () {
        this.value = this.sceditor_instance.val()
        this.sceditor_instance.updateOriginal()
        this.is_dirty = true
        this.onChange(true)
      }.bind(this))

      this.theme.afterInputReady(this.input)
    } else this._super() // Library not loaded, so just treat this as a string
  },
  getNumColumns: function () {
    return 6
  },
  enable: function () {
    if (!this.always_disabled && this.sceditor_instance) this.sceditor_instance.readOnly(false)
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.sceditor_instance) this.sceditor_instance.readOnly(true)
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.sceditor_instance) {
      this.sceditor_instance.destroy()
      this.sceditor_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/select.js":
/*!*******************************!*\
  !*** ./src/editors/select.js ***!
  \*******************************/
/*! exports provided: SelectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEditor", function() { return SelectEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var SelectEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  setValue: function (value, initial) {
    // Sanitize value before setting it
    var sanitized = this.typecast(value || '')

    if (this.enum_values.indexOf(sanitized) < 0) sanitized = this.enum_values[0]

    if (this.value === sanitized) return

    if (initial) this.is_dirty = false
    else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

    this.input.value = this.enum_options[this.enum_values.indexOf(sanitized)]

    this.value = sanitized
    this.onChange()
    this.change()
  },
  register: function () {
    this._super()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  },
  unregister: function () {
    this._super()
    if (!this.input) return
    this.input.removeAttribute('name')
  },
  getNumColumns: function () {
    if (!this.enum_options) return 3
    var longestText = this.getTitle().length
    for (var i = 0; i < this.enum_options.length; i++) {
      longestText = Math.max(longestText, this.enum_options[i].length + 4)
    }
    return Math.min(12, Math.max(longestText / 7, 2))
  },
  typecast: function (value) {
    if (this.schema.type === 'boolean') return value === 'undefined' || value === undefined ? undefined : !!value
    else if (this.schema.type === 'number') return 1 * value || 0
    else if (this.schema.type === 'integer') return Math.floor(value * 1 || 0)
    else return '' + value
  },
  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    return this.typecast(this.value)
  },
  preBuild: function () {
    var self = this
    this.input_type = 'select'
    this.enum_options = []
    this.enum_values = []
    this.enum_display = []
    var i
    var callback

    // Enum options enumerated
    if (this.schema['enum']) {
      var display = (this.schema.options && this.schema.options.enum_titles) || []

      Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.schema['enum'], function (i, option) {
        self.enum_options[i] = '' + option
        self.enum_display[i] = '' + (display[i] || option)
        self.enum_values[i] = self.typecast(option)
      })

      if (!this.isRequired()) {
        self.enum_display.unshift(' ')
        self.enum_options.unshift('undefined')
        self.enum_values.unshift(undefined)
      }
    // Boolean
    } else if (this.schema.type === 'boolean') {
      self.enum_display = (this.schema.options && this.schema.options.enum_titles) || ['true', 'false']
      self.enum_options = ['1', '']
      self.enum_values = [true, false]

      if (!this.isRequired()) {
        self.enum_display.unshift(' ')
        self.enum_options.unshift('undefined')
        self.enum_values.unshift(undefined)
      }
    // Dynamic Enum
    } else if (this.schema.enumSource) {
      this.enumSource = []
      this.enum_display = []
      this.enum_options = []
      this.enum_values = []

      // Shortcut declaration for using a single array
      if (!(Array.isArray(this.schema.enumSource))) {
        if (this.schema.enumValue) {
          this.enumSource = [
            {
              source: this.schema.enumSource,
              value: this.schema.enumValue
            }
          ]
        } else {
          this.enumSource = [
            {
              source: this.schema.enumSource
            }
          ]
        }
      } else {
        for (i = 0; i < this.schema.enumSource.length; i++) {
          // Shorthand for watched variable
          if (typeof this.schema.enumSource[i] === 'string') {
            this.enumSource[i] = {
              source: this.schema.enumSource[i]
            }
          // Make a copy of the schema
          } else if (!(Array.isArray(this.schema.enumSource[i]))) {
            this.enumSource[i] = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema.enumSource[i])
          } else {
            this.enumSource[i] = this.schema.enumSource[i]
          }
        }
      }
      // Now, enumSource is an array of sources
      // Walk through this array and fix up the values
      for (i = 0; i < this.enumSource.length; i++) {
        if (this.enumSource[i].value) {
          callback = this.expandCallbacks('template', {template: this.enumSource[i].value})
          if (typeof callback.template === 'function') this.enumSource[i].value = callback.template
          else this.enumSource[i].value = this.jsoneditor.compileTemplate(this.enumSource[i].value, this.template_engine)
        }
        if (this.enumSource[i].title) {
          callback = this.expandCallbacks('template', {template: this.enumSource[i].title})
          if (typeof callback.template === 'function') this.enumSource[i].title = callback.template
          else this.enumSource[i].title = this.jsoneditor.compileTemplate(this.enumSource[i].title, this.template_engine)
        }
        if (this.enumSource[i].filter && this.enumSource[i].value) {
          callback = this.expandCallbacks('template', {template: this.enumSource[i].filter})
          if (typeof callback.template === 'function') this.enumSource[i].filter = callback.template
          else this.enumSource[i].filter = this.jsoneditor.compileTemplate(this.enumSource[i].filter, this.template_engine)
        }
      }
    // Other, not supported
    } else {
      throw new Error("'select' editor requires the enum property to be set.")
    }
  },
  build: function () {
    var self = this
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.input = this.theme.getSelectInput(this.enum_options, false)
    this.theme.setSelectOptions(this.input, this.enum_options, this.enum_display)

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      this.input.disabled = true
    }

    // Set custom attributes on input element. Parameter is array of protected keys. Empty array if none.
    this.setInputAttributes([])

    this.input.addEventListener('change', function (e) {
      e.preventDefault()
      e.stopPropagation()
      self.onInputChange()
    })

    this.control = this.theme.getFormControl(this.label, this.input, this.description, this.infoButton)
    this.container.appendChild(this.control)

    this.value = this.enum_values[0]

    // Any special formatting that needs to happen after the input is added to the dom
    window.requestAnimationFrame(function () {
      if (self.input.parentNode) self.afterInputReady()
    })
  },
  afterInputReady: function () {
    var self = this
    self.theme.afterInputReady(self.input)
  },
  onInputChange: function () {
    var val = this.typecast(this.input.value)

    var newVal
    // Invalid option, use first option instead
    if (this.enum_values.indexOf(val) === -1) {
      newVal = this.enum_values[0]
    } else {
      newVal = this.enum_values[this.enum_values.indexOf(val)]
    }

    // If valid hasn't changed
    if (newVal === this.value) return

    this.is_dirty = true

    // Store new value and propogate change event
    this.value = newVal
    this.onChange(true)
  },
  onWatchedFieldChange: function () {
    var vars; var j
    var selectOptions = []; var selectTitles = []

    // If this editor uses a dynamic select box
    if (this.enumSource) {
      vars = this.getWatchedFieldValues()

      for (var i = 0; i < this.enumSource.length; i++) {
        // Constant values
        if (Array.isArray(this.enumSource[i])) {
          selectOptions = selectOptions.concat(this.enumSource[i])
          selectTitles = selectTitles.concat(this.enumSource[i])
        } else {
          var items = []
          // Static list of items
          if (Array.isArray(this.enumSource[i].source)) {
            items = this.enumSource[i].source
          // A watched field
          } else {
            items = vars[this.enumSource[i].source]
          }

          if (items) {
            // Only use a predefined part of the array
            if (this.enumSource[i].slice) {
              items = Array.prototype.slice.apply(items, this.enumSource[i].slice)
            }
            // Filter the items
            if (this.enumSource[i].filter) {
              var newItems = []
              for (j = 0; j < items.length; j++) {
                if (this.enumSource[i].filter({i: j, item: items[j], watched: vars})) newItems.push(items[j])
              }
              items = newItems
            }

            var itemTitles = []
            var itemValues = []
            for (j = 0; j < items.length; j++) {
              var item = items[j]

              // Rendered value
              if (this.enumSource[i].value) {
                itemValues[j] = this.typecast(this.enumSource[i].value({
                  i: j,
                  item: item
                }))
              // Use value directly
              } else {
                itemValues[j] = items[j]
              }

              // Rendered title
              if (this.enumSource[i].title) {
                itemTitles[j] = this.enumSource[i].title({
                  i: j,
                  item: item
                })
              // Use value as the title also
              } else {
                itemTitles[j] = itemValues[j]
              }
            }

            if (this.enumSource[i].sort) {
              (function (itemValues, itemTitles, order) {
                itemValues.map(function (v, i) {
                  return { v: v, t: itemTitles[i] }
                }).sort(function (a, b) {
                  return ((a.v < b.v) ? -order : ((a.v === b.v) ? 0 : order))
                }).forEach(function (v, i) {
                  itemValues[i] = v.v
                  itemTitles[i] = v.t
                })
              }.bind(null, itemValues, itemTitles, this.enumSource[i].sort === 'desc' ? 1 : -1))()
            }

            selectOptions = selectOptions.concat(itemValues)
            selectTitles = selectTitles.concat(itemTitles)
          }
        }
      }

      var prevValue = this.value

      this.theme.setSelectOptions(this.input, selectOptions, selectTitles)
      this.enum_options = selectOptions
      this.enum_display = selectTitles
      this.enum_values = selectOptions

      // If the previous value is still in the new select options, stick with it
      if (selectOptions.indexOf(prevValue) !== -1) {
        this.input.value = prevValue
        this.value = prevValue
      // Otherwise, set the value to the first select option
      } else {
        this.input.value = selectOptions[0]
        this.value = this.typecast(selectOptions[0] || '')
        if (this.parent && !this.watchLoop) this.parent.onChildEditorChange(this)
        else this.jsoneditor.onChange()
        this.jsoneditor.notifyWatchers(this.path)
      }
    }

    this._super()
  },
  enable: function () {
    if (!this.always_disabled) {
      this.input.disabled = false
    }
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)

    this._super()
  },
  showValidationErrors: function (errors) {
    var self = this

    this.previous_error_setting = this.jsoneditor.options.show_errors

    var messages = []
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path === self.path) {
        messages.push(error.message)
      }
    })

    if (messages.length) {
      this.theme.addInputError(this.input, messages.join('. ') + '.')
    } else {
      this.theme.removeInputError(this.input)
    }
  }
})


/***/ }),

/***/ "./src/editors/select2.js":
/*!********************************!*\
  !*** ./src/editors/select2.js ***!
  \********************************/
/*! exports provided: Select2Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Editor", function() { return Select2Editor; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./src/editors/select.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var Select2Editor = _select__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"].extend({

  setValue: function (value, initial) {
    if (this.select2_instance) {
      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      var sanitized = this.updateValue(value) // Sets this.value to sanitized value

      this.input.value = sanitized

      if (this.select2v4) this.select2_instance.val(sanitized).trigger('change')
      else this.select2_instance.select2('val', sanitized)

      this.onChange(true)
    } else this._super(value, initial)
  },
  afterInputReady: function () {
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.select2 && !this.select2_instance) {
      // Get options, either global options from "this.defaults.options.select2" or
      // single property options from schema "options.select2"
      var self = this; var options = this.expandCallbacks('select2', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.defaults.options.select2 || {}, this.options.select2 || {}))

      // New items are allowed if option "tags" is true and type is "string"
      this.newEnumAllowed = options.tags = !!options.tags && this.schema.type === 'string'

      this.select2_instance = window.jQuery(this.input).select2(options)
      this.select2v4 = this.select2_instance.select2.hasOwnProperty('amd')

      // Create change handler
      this.selectChangeHandler = function () {
        var value = self.select2v4 ? self.select2_instance.val() : self.select2_instance.select2('val')
        self.updateValue(value)
        self.onChange(true)
      }

      // Add event handler.
      // Note: Must use the "on()" method and not addEventListener()
      this.select2_instance.on('change', this.selectChangeHandler)
      this.select2_instance.on('select2-blur', this.selectChangeHandler)
    }
    this._super()
  },
  updateValue: function (value) {
    var sanitized = this.enum_values[0]
    value = this.typecast(value || '')
    if (this.enum_values.indexOf(value) === -1) {
      if (this.newEnumAllowed) {
        sanitized = this.addNewOption(value) ? value : sanitized
      }
    } else sanitized = value
    this.value = sanitized
    return sanitized
  },
  addNewOption: function (value) {
    var sanitized = this.typecast(value); var res = false; var optionTag

    if (this.enum_values.indexOf(sanitized) < 0 && sanitized !== '') {
      // Add to list of valid enum values
      this.enum_options.push('' + sanitized)
      this.enum_display.push('' + sanitized)
      this.enum_values.push(sanitized)
      // Update Schema enum to prevent triggering error
      // "Value must be one of the enumerated values"
      this.schema.enum.push(sanitized)

      optionTag = this.input.querySelector('option[value="' + sanitized + '"]')
      if (optionTag) {
        // Remove data attribute to make option tag permanent.
        optionTag.removeAttribute('data-select2-tag')
      } else {
        // eslint-disable-next-line no-undef
        this.input.appendChild(new Option(sanitized, sanitized, false, false)).trigger('change')
      }

      res = true
    }
    return res
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.select2_instance) {
        if (this.select2v4) this.select2_instance.prop('disabled', false)
        else this.select2_instance.select2('enable', true)
      }
    }
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.select2_instance) {
      if (this.select2v4) this.select2_instance.prop('disabled', true)
      else this.select2_instance.select2('enable', false)
    }
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.select2_instance) {
      this.select2_instance.select2('destroy')
      this.select2_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/selectize.js":
/*!**********************************!*\
  !*** ./src/editors/selectize.js ***!
  \**********************************/
/*! exports provided: SelectizeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectizeEditor", function() { return SelectizeEditor; });
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select */ "./src/editors/select.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var SelectizeEditor = _select__WEBPACK_IMPORTED_MODULE_0__["SelectEditor"].extend({

  setValue: function (value, initial) {
    if (this.selectize_instance) {
      if (initial) this.is_dirty = false
      else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

      var sanitized = this.updateValue(value) // Sets this.value to sanitized value

      this.input.value = sanitized

      this.selectize_instance.clear(true)
      this.selectize_instance.setValue(sanitized)

      this.onChange(true)
    } else this._super(value, initial)
  },
  afterInputReady: function () {
    if (window.jQuery && window.jQuery.fn && window.jQuery.fn.selectize && !this.selectize_instance) {
      // Get options, either global options from "this.defaults.options.selectize" or
      // single property options from schema "options.selectize"
      var self = this; var options = this.expandCallbacks('selectize', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.defaults.options.selectize || {}, this.options.selectize || {}))

      // New items are allowed if option "create" is true and type is "string"
      this.newEnumAllowed = options.create = !!options.create && this.schema.type === 'string'

      this.selectize_instance = (window.jQuery(this.input).selectize(options))[0].selectize

      // Remove change handler set in parent class (src/multiselect.js)
      this.control.removeEventListener('change', this.multiselectChangeHandler)

      // Create a new change handler
      this.multiselectChangeHandler = function (value) {
        // var value = self.selectize_instance.getValue(true);
        // self.value = value;
        self.updateValue(value)
        self.onChange(true)
      }

      // Add new event handler.
      // Note: Must use the "on()" method and not addEventListener()
      this.selectize_instance.on('change', this.multiselectChangeHandler)
    }
    this._super()
  },
  updateValue: function (value) {
    var sanitized = this.enum_values[0]
    value = this.typecast(value || '')
    if (this.enum_values.indexOf(value) === -1) {
      if (this.newEnumAllowed) {
        sanitized = this.addNewOption(value) ? value : sanitized
      }
    } else sanitized = value
    this.value = sanitized
    return sanitized
  },
  addNewOption: function (value) {
    var sanitized = this.typecast(value); var res = false

    if (this.enum_values.indexOf(sanitized) < 0 && sanitized !== '') {
      // Add to list of valid enum values
      this.enum_options.push('' + sanitized)
      this.enum_display.push('' + sanitized)
      this.enum_values.push(sanitized)
      // Update Schema enum to prevent triggering error
      // "Value must be one of the enumerated values"
      this.schema.enum.push(sanitized)

      // Add selectize item
      this.selectize_instance.addItem(sanitized)
      this.selectize_instance.refreshOptions(false)

      res = true
    }
    return res
  },
  onWatchedFieldChange: function () {
    this._super()
    if (this.selectize_instance) {
      var self = this
      this.selectize_instance.clear(true) // Clear selection
      this.selectize_instance.clearOptions(true) // Remove all options
      this.enum_options.forEach(function (value, i) {
        self.selectize_instance.addOption({value: value, text: self.enum_display[i]})
      })
      this.selectize_instance.addItem(this.value + '', true) // Set new selection
    }
  },
  enable: function () {
    if (!this.always_disabled && this.selectize_instance) this.selectize_instance.unlock()
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.selectize_instance) this.selectize_instance.lock()
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.selectize_instance) {
      this.selectize_instance.destroy()
      this.selectize_instance = null
    }
    this._super()
  }
})


/***/ }),

/***/ "./src/editors/signature.js":
/*!**********************************!*\
  !*** ./src/editors/signature.js ***!
  \**********************************/
/*! exports provided: SignatureEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureEditor", function() { return SignatureEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
// This editor is using the signature pad editor from https://github.com/szimek/signature_pad
// Credits for the pad itself go to https://github.com/szimek




var SignatureEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  build: function () {
    var self = this

    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    var formname = this.formname.replace(/\W/g, '')

    if (typeof SignaturePad === 'function') {
      // Dynamically add the required CSS the first time this editor is used
      this.input = this.theme.getFormInputField('hidden')
      this.container.appendChild(this.input)

      // Required to keep height
      var signatureContainer = document.createElement('div')
      signatureContainer.classList.add('signature-container')

      // Create canvas for signature pad
      var canvas = document.createElement('canvas')
      canvas.setAttribute('name', formname)
      canvas.classList.add('signature')
      signatureContainer.appendChild(canvas)

      self.signaturePad = new window.SignaturePad(canvas, {
        onEnd: function () {
          // check if the signature is not empty before setting a value
          if (!self.signaturePad.isEmpty()) {
            self.input.value = self.signaturePad.toDataURL()
          } else {
            self.input.value = ''
          }

          self.is_dirty = true
          self.refreshValue()
          self.watch_listener()
          self.jsoneditor.notifyWatchers(self.path)
          if (self.parent) self.parent.onChildEditorChange(self)
          else self.jsoneditor.onChange()
        }
      })

      // create button containers and add clear signature button
      var buttons = document.createElement('div')
      var clearButton = document.createElement('button')
      clearButton.classList.add('tiny', 'button')
      clearButton.innerHTML = 'Clear signature'
      buttons.appendChild(clearButton)
      signatureContainer.appendChild(buttons)

      if (this.options.compact) this.container.setAttribute('class', this.container.getAttribute('class') + ' compact')

      if (this.schema.readOnly || this.schema.readonly) {
        this.always_disabled = true
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.inputs, function (i, input) {
          canvas.setAttribute('readOnly', 'readOnly')
          input.disabled = true
        })
      }
      // add listener to the clear button. when clicked, trigger a canvas change after emptying the canvas
      clearButton.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        self.signaturePad.clear()
        // trigger stroke end to let signaturePad update the dataURL
        self.signaturePad.strokeEnd()
      })

      this.control = this.theme.getFormControl(this.label, signatureContainer, this.description)
      this.container.appendChild(this.control)
      this.refreshValue()

      // signature canvas will stretch to signatureContainer width
      canvas.width = signatureContainer.offsetWidth
      if (self.options && self.options.canvas_height) {
        canvas.height = self.options.canvas_height
      } else {
        canvas.height = '300' // Set to default height of 300px;
      }
    } else {
      var message = document.createElement('p')
      message.innerHTML = 'Signature pad is not available, please include SignaturePad from https://github.com/szimek/signature_pad'
      this.container.appendChild(message)
    }
  },
  setValue: function (val) {
    var self = this
    if (typeof SignaturePad === 'function') {
      var sanitized = this.sanitize(val)
      if (this.value === sanitized) {
        return
      }
      self.value = sanitized
      self.input.value = self.value
      self.signaturePad.clear()
      // only set contents if value != ''
      if (val && val !== '') {
        self.signaturePad.fromDataURL(val)
      }
      self.watch_listener()
      self.jsoneditor.notifyWatchers(self.path)
      return false
    }
  },
  destroy: function () {
    var self = this
    self.signaturePad.off()
    delete self.signaturePad
  }
})


/***/ }),

/***/ "./src/editors/simplemde.js":
/*!**********************************!*\
  !*** ./src/editors/simplemde.js ***!
  \**********************************/
/*! exports provided: SimplemdeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplemdeEditor", function() { return SimplemdeEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var SimplemdeEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  setValue: function (value, initial, fromTemplate) {
    var res = this._super(value, initial, fromTemplate)
    if (res !== undefined && res.changed && this.simplemde_instance) this.simplemde_instance.value(res.value)
  },
  build: function () {
    this.options.format = 'textarea' // Force format into "textarea"
    this._super()
    this.input_type = this.schema.format // Restore original format
    this.input.setAttribute('data-schemaformat', this.input_type)
  },
  afterInputReady: function () {
    var self = this; var options

    if (window.SimpleMDE) {
      // Get options, either global options from "this.defaults.options.simplemde" or
      // single property options from schema "options.simplemde"
      options = this.expandCallbacks('simplemde', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
        height: 300
      }, this.defaults.options.simplemde || {}, this.options.simplemde || {}, {
        element: this.input
      }))

      this.simplemde_instance = new window.SimpleMDE(options)

      if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
        this.simplemde_instance.codemirror.options.readOnly = true
      }

      // Listen for changes
      this.simplemde_instance.codemirror.on('change', function () {
        self.value = self.simplemde_instance.value()
        self.is_dirty = true
        self.onChange(true)
      })

      // This will prevent SimpleMDE content from being hidden until focus in Chrome
      // if SimpleMDE is not visible (Like when placed inside Tabs)
      if (options.autorefresh) {
        this.startListening(this.simplemde_instance.codemirror, this.simplemde_instance.codemirror.state.autoRefresh = {delay: 250})
      }

      this.theme.afterInputReady(self.input)
    } else this._super() // Library not loaded, so just treat this as a string
  },
  getNumColumns: function () {
    return 6
  },
  enable: function () {
    if (!this.always_disabled && this.simplemde_instance) this.simplemde_instance.codemirror.options.readOnly = false
    this._super()
  },
  disable: function (alwaysDisabled) {
    if (this.simplemde_instance) this.simplemde_instance.codemirror.options.readOnly = true
    this._super(alwaysDisabled)
  },
  destroy: function () {
    if (this.simplemde_instance) {
      this.simplemde_instance.toTextArea()
      this.simplemde_instance = null
    }
    this._super()
  },
  // Ported from https://codemirror.net/addon/display/autorefresh.js
  startListening: function (cm, state) {
    var self = this
    function check () {
      if (cm.display.wrapper.offsetHeight) {
        self.stopListening(cm, state)
        if (cm.display.lastWrapHeight !== cm.display.wrapper.clientHeight) {
          cm.refresh()
        }
      } else {
        state.timeout = window.setTimeout(check, state.delay)
      }
    }
    state.timeout = window.setTimeout(check, state.delay)
    state.hurry = function () {
      window.clearTimeout(state.timeout)
      state.timeout = window.setTimeout(check, 50)
    }
    cm.on(window, 'mouseup', state.hurry)
    cm.on(window, 'keyup', state.hurry)
  },
  stopListening: function (cm, state) {
    window.clearTimeout(state.timeout)
    cm.off(window, 'mouseup', state.hurry)
    cm.off(window, 'keyup', state.hurry)
  }
})


/***/ }),

/***/ "./src/editors/starrating.js":
/*!***********************************!*\
  !*** ./src/editors/starrating.js ***!
  \***********************************/
/*! exports provided: StarratingEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarratingEditor", function() { return StarratingEditor; });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./src/editors/string.js");


var StarratingEditor = _string__WEBPACK_IMPORTED_MODULE_0__["StringEditor"].extend({

  build: function () {
    var self = this

    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)
    if (this.options.compact) this.container.classList.add('compact')

    this.ratingContainer = document.createElement('div')
    this.ratingContainer.classList.add('starrating')

    // Emulate the old "rating" editor parameters
    if (this.schema.enum === undefined) {
      var max = this.schema.maximum ? this.schema.maximum : 5
      if (this.schema.exclusiveMaximum) max--
      this.enum_values = []
      for (var k = 0; k < max; k++) this.enum_values.push(k + 1)
    } else this.enum_values = this.schema.enum

    this.radioGroup = []

    var radioInputEventhandler = function (e) {
      e.preventDefault()
      e.stopPropagation()
      self.setValue(this.value)
      self.onChange(true)
    }

    for (var i = this.enum_values.length - 1; i > -1; i--) {
      var id = this.formname + (i + 1)

      // form radio elements
      var radioInput = this.theme.getFormInputField('radio')
      radioInput.name = this.formname + '[starrating]'
      radioInput.value = this.enum_values[i]
      radioInput.id = id
      radioInput.addEventListener('change', radioInputEventhandler, false)
      this.radioGroup.push(radioInput)

      // form-label for radio elements
      var radioLabel = document.createElement('label')
      radioLabel.htmlFor = id
      radioLabel.title = this.enum_values[i]
      if (this.options.displayValue) {
        radioLabel.classList.add('starrating-display-enabled')
      }

      this.ratingContainer.appendChild(radioInput)
      this.ratingContainer.appendChild(radioLabel)
    }

    if (this.options.displayValue) {
      this.displayRating = document.createElement('div')
      this.displayRating.classList.add('starrating-display')
      this.displayRating.innerText = this.enum_values[0]
      this.ratingContainer.appendChild(this.displayRating)
    }

    if (this.schema.readOnly || this.schema.readonly) {
      this.always_disabled = true
      for (var j = 0; j < this.radioGroup.length; j++) {
        this.radioGroup[j].disabled = true
      }
      this.ratingContainer.classList.add('readonly')
    }

    var ratingsContainerWrapper = this.theme.getContainer()
    ratingsContainerWrapper.appendChild(this.ratingContainer)

    this.input = ratingsContainerWrapper

    this.control = this.theme.getFormControl(this.label, ratingsContainerWrapper, this.description, this.infoButton)
    this.container.appendChild(this.control)

    this.refreshValue()
  },
  enable: function () {
    if (!this.always_disabled) {
      for (var i = 0; i < this.radioGroup.length; i++) {
        this.radioGroup[i].disabled = false
      }
      this.ratingContainer.classList.remove('readonly')
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    for (var i = 0; i < this.radioGroup.length; i++) {
      this.radioGroup[i].disabled = true
    }
    this.ratingContainer.classList.add('readonly')
    this._super()
  },
  destroy: function () {
    if (this.ratingContainer.parentNode && this.ratingContainer.parentNode.parentNode) this.ratingContainer.parentNode.parentNode.removeChild(this.ratingContainer.parentNode)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    this._super()
  },
  getNumColumns: function () {
    return 2
  },
  getValue: function () {
    if (!this.dependenciesFulfilled) {
      return undefined
    }
    if (this.schema.type === 'integer') {
      return this.value === '' ? undefined : this.value * 1
    }
    return this.value
  },
  setValue: function (val) {
    for (var i = 0; i < this.radioGroup.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (this.radioGroup[i].value == val) {
        this.radioGroup[i].checked = true
        this.value = val
        if (this.options.displayValue) {
          this.displayRating.innerHTML = this.value
        }
        this.onChange(true)
        break
      }
    }
  }
})


/***/ }),

/***/ "./src/editors/string.js":
/*!*******************************!*\
  !*** ./src/editors/string.js ***!
  \*******************************/
/*! exports provided: StringEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringEditor", function() { return StringEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var StringEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({
  register: function () {
    this._super()
    if (!this.input) return
    this.input.setAttribute('name', this.formname)
  },
  unregister: function () {
    this._super()
    if (!this.input) return
    this.input.removeAttribute('name')
  },
  setValue: function (value, initial, fromTemplate) {
    if (this.template && !fromTemplate) {
      return
    }

    if (value === null || typeof value === 'undefined') value = ''
    else if (typeof value === 'object') value = JSON.stringify(value)
    else if (typeof value !== 'string') value = '' + value

    if (value === this.serialized) return

    // Sanitize value before setting it
    var sanitized = this.sanitize(value)

    if (this.input.value === sanitized) {
      return
    }

    this.input.value = sanitized

    var changed = fromTemplate || this.getValue() !== value

    this.refreshValue()

    if (initial) this.is_dirty = false
    else if (this.jsoneditor.options.show_errors === 'change') this.is_dirty = true

    if (this.adjust_height) this.adjust_height(this.input)

    // Bubble this setValue to parents if the value changed
    this.onChange(changed)

    // Return object with changed state and sanitized value for use in editors that extend this
    return {changed: changed, value: sanitized}
  },
  getNumColumns: function () {
    var min = Math.ceil(Math.max(this.getTitle().length, this.schema.maxLength || 0, this.schema.minLength || 0) / 5)
    var num

    if (this.input_type === 'textarea') num = 6
    else if (['text', 'email'].indexOf(this.input_type) >= 0) num = 4
    else num = 2

    return Math.min(12, Math.max(min, num))
  },
  build: function () {
    var self = this
    if (!this.options.compact) this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())
    if (this.schema.description) this.description = this.theme.getFormInputDescription(this.schema.description)
    if (this.options.infoText) this.infoButton = this.theme.getInfoButton(this.options.infoText)

    this.format = this.schema.format
    if (!this.format && this.schema.media && this.schema.media.type) {
      this.format = this.schema.media.type.replace(/(^(application|text)\/(x-)?(script\.)?)|(-source$)/g, '')
    }
    if (!this.format && this.options.default_format) {
      this.format = this.options.default_format
    }
    if (this.options.format) {
      this.format = this.options.format
    }

    // Specific format
    if (this.format) {
      // Text Area
      if (this.format === 'textarea') {
        this.input_type = 'textarea'
        this.input = this.theme.getTextareaInput()
      // Range Input
      } else if (this.format === 'range') {
        this.input_type = 'range'
        var min = this.schema.minimum || 0
        var max = this.schema.maximum || Math.max(100, min + 1)
        var step = 1
        if (this.schema.multipleOf) {
          if (min % this.schema.multipleOf) min = Math.ceil(min / this.schema.multipleOf) * this.schema.multipleOf
          if (max % this.schema.multipleOf) max = Math.floor(max / this.schema.multipleOf) * this.schema.multipleOf
          step = this.schema.multipleOf
        }

        this.input = this.theme.getRangeInput(min, max, step)
      // HTML5 Input type
      } else {
        this.input_type = 'text'
        if (['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'].indexOf(this.format) > -1) {
          this.input_type = this.format
        }
        this.input = this.theme.getFormInputField(this.input_type)
      }
    // Normal text input
    } else {
      this.input_type = 'text'
      this.input = this.theme.getFormInputField(this.input_type)
    }

    // minLength, maxLength, and pattern
    if (typeof this.schema.maxLength !== 'undefined') this.input.setAttribute('maxlength', this.schema.maxLength)
    if (typeof this.schema.pattern !== 'undefined') this.input.setAttribute('pattern', this.schema.pattern)
    else if (typeof this.schema.minLength !== 'undefined') this.input.setAttribute('pattern', '.{' + this.schema.minLength + ',}')

    if (this.options.compact) {
      this.container.classList.add('compact')
    } else {
      if (this.options.input_width) this.input.style.width = this.options.input_width
    }

    if (this.schema.readOnly || this.schema.readonly || this.schema.template) {
      this.always_disabled = true
      this.input.setAttribute('readonly', 'true')
    }

    // Set custom attributes on input element. Parameter is array of protected keys. Empty array if none.
    this.setInputAttributes(['maxlength', 'pattern', 'readonly', 'min', 'max', 'step'])

    this.input
      .addEventListener('change', function (e) {
        e.preventDefault()
        e.stopPropagation()

        // Don't allow changing if this field is a template
        if (self.schema.template) {
          this.value = self.value
          return
        }

        var val = this.value

        // sanitize value
        var sanitized = self.sanitize(val)
        if (val !== sanitized) {
          this.value = sanitized
        }

        self.is_dirty = true

        self.refreshValue()
        self.onChange(true)
      })

    if (this.options.input_height) this.input.style.height = this.options.input_height
    if (this.options.expand_height) {
      this.adjust_height = function (el) {
        if (!el) return
        var i; var ch = el.offsetHeight
        // Input too short
        if (el.offsetHeight < el.scrollHeight) {
          i = 0
          while (el.offsetHeight < el.scrollHeight + 3) {
            if (i > 100) break
            i++
            ch++
            el.style.height = ch + 'px'
          }
        } else {
          i = 0
          while (el.offsetHeight >= el.scrollHeight + 3) {
            if (i > 100) break
            i++
            ch--
            el.style.height = ch + 'px'
          }
          el.style.height = (ch + 1) + 'px'
        }
      }

      this.input.addEventListener('keyup', function (e) {
        self.adjust_height(this)
      })
      this.input.addEventListener('change', function (e) {
        self.adjust_height(this)
      })
      this.adjust_height()
    }

    if (this.format) this.input.setAttribute('data-schemaformat', this.format)

    var input = this.input
    if (this.format === 'range') {
      input = this.theme.getRangeControl(this.input, this.theme.getRangeOutput(this.input, this.schema.default || Math.max(this.schema.minimum || 0, 0)))
    }

    this.control = this.theme.getFormControl(this.label, input, this.description, this.infoButton)
    this.container.appendChild(this.control)

    // Any special formatting that needs to happen after the input is added to the dom
    window.requestAnimationFrame(function () {
      // Skip in case the input is only a temporary editor,
      // otherwise, in the case of an ace_editor creation,
      // it will generate an error trying to append it to the missing parentNode
      if (self.input.parentNode) self.afterInputReady()
      if (self.adjust_height) self.adjust_height(self.input)
    })

    // Compile and store the template
    if (this.schema.template) {
      var callback = this.expandCallbacks('template', {template: this.schema.template})
      if (typeof callback.template === 'function') this.template = callback.template
      else this.template = this.jsoneditor.compileTemplate(this.schema.template, this.template_engine)
      this.refreshValue()
    } else {
      this.refreshValue()
    }
  },
  setupCleave: function (el) {
    // Enable cleave.js support if library is loaded and config is available
    var options = this.expandCallbacks('cleave', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.defaults.options.cleave || {}, this.options.cleave || {}))
    if (typeof options === 'object' && Object.keys(options).length > 0) {
      this.cleave_instance = new window.Cleave(el, options)
    }
  },
  setupImask: function (el) {
    // Enable imask.js support if library is loaded and config is available
    var options = this.expandCallbacks('imask', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.defaults.options.imask || {}, this.options.imask || {}))
    if (typeof options === 'object' && Object.keys(options).length > 0) {
      this.imask_instance = window.IMask(el, options)
    }
  },
  enable: function () {
    if (!this.always_disabled) {
      this.input.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    this.input.disabled = true
    this._super()
  },
  afterInputReady: function () {
    var self = this
    self.theme.afterInputReady(self.input)
    if (window.Cleave && !self.cleave_instance) self.setupCleave(self.input)
    if (window.IMask && !self.imask_instance) self.setupImask(self.input)
  },
  refreshValue: function () {
    this.value = this.input.value
    if (typeof this.value !== 'string') this.value = ''
    this.serialized = this.value
  },
  destroy: function () {
    if (this.cleave_instance) this.cleave_instance.destroy()
    if (this.imask_instance) this.imask_instance.destroy()

    this.template = null
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)
    if (this.label && this.label.parentNode) this.label.parentNode.removeChild(this.label)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)

    this._super()
  },
  /**
   * This is overridden in derivative editors
   */
  sanitize: function (value) {
    return value
  },
  /**
   * Re-calculates the value if needed
   */
  onWatchedFieldChange: function () {
    var vars

    // If this editor needs to be rendered by a macro template
    if (this.template) {
      vars = this.getWatchedFieldValues()
      this.setValue(this.template(vars), false, true)
    }

    this._super()
  },
  showValidationErrors: function (errors) {
    var self = this

    if (this.jsoneditor.options.show_errors === 'always') {} else if (!this.is_dirty && this.previous_error_setting === this.jsoneditor.options.show_errors) return

    this.previous_error_setting = this.jsoneditor.options.show_errors

    var messages = []
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path === self.path) {
        messages.push(error.message)
      }
    })

    if (messages.length) {
      this.theme.addInputError(this.input, messages.join('. ') + '.')
    } else {
      this.theme.removeInputError(this.input)
    }
  }
})


/***/ }),

/***/ "./src/editors/table.js":
/*!******************************!*\
  !*** ./src/editors/table.js ***!
  \******************************/
/*! exports provided: TableEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditor", function() { return TableEditor; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./src/editors/array.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");


var TableEditor = _array__WEBPACK_IMPORTED_MODULE_0__["ArrayEditor"].extend({

  register: function () {
    this._super()
    if (this.rows) {
      for (var i = 0; i < this.rows.length; i++) {
        this.rows[i].register()
      }
    }
  },
  unregister: function () {
    this._super()
    if (this.rows) {
      for (var i = 0; i < this.rows.length; i++) {
        this.rows[i].unregister()
      }
    }
  },
  getNumColumns: function () {
    return Math.max(Math.min(12, this.width), 3)
  },
  preBuild: function () {
    var itemSchema = this.jsoneditor.expandRefs(this.schema.items || {})

    this.item_title = itemSchema.title || 'row'
    this.item_default = itemSchema['default'] || null
    this.item_has_child_editors = itemSchema.properties || itemSchema.items
    this.width = 12
    this._super()
  },
  build: function () {
    var self = this
    this.table = this.theme.getTable()
    this.container.appendChild(this.table)
    this.thead = this.theme.getTableHead()
    this.table.appendChild(this.thead)
    this.header_row = this.theme.getTableRow()
    this.thead.appendChild(this.header_row)
    this.row_holder = this.theme.getTableBody()
    this.table.appendChild(this.row_holder)

    // Determine the default value of array element
    var tmp = this.getElementEditor(0, true)
    this.item_default = tmp.getDefault()
    this.width = tmp.getNumColumns() + 2

    if (!this.options.compact) {
      this.header = document.createElement('label')
      this.header.textContent = this.getTitle()
      this.title = this.theme.getHeader(this.header)
      this.container.appendChild(this.title)
      this.title_controls = this.theme.getHeaderButtonHolder()
      this.title.appendChild(this.title_controls)
      if (this.schema.description) {
        this.description = this.theme.getDescription(this.schema.description)
        this.container.appendChild(this.description)
      }
      this.panel = this.theme.getIndentedPanel()
      this.container.appendChild(this.panel)
      this.error_holder = document.createElement('div')
      this.panel.appendChild(this.error_holder)
    } else {
      this.panel = document.createElement('div')
      this.container.appendChild(this.panel)
    }

    this.panel.appendChild(this.table)
    this.controls = this.theme.getButtonHolder()
    this.panel.appendChild(this.controls)

    if (this.item_has_child_editors) {
      var ce = tmp.getChildEditors()
      var order = tmp.property_order || Object.keys(ce)
      for (var i = 0; i < order.length; i++) {
        var th = self.theme.getTableHeaderCell(ce[order[i]].getTitle())
        if (ce[order[i]].options.hidden) th.style.display = 'none'
        self.header_row.appendChild(th)
      }
    } else {
      self.header_row.appendChild(self.theme.getTableHeaderCell(this.item_title))
    }

    tmp.destroy()
    this.row_holder.innerHTML = ''

    // Row Controls column
    this.controls_header_cell = self.theme.getTableHeaderCell(' ')
    self.header_row.appendChild(this.controls_header_cell)

    // Add controls
    this.addControls()
  },
  onChildEditorChange: function (editor) {
    this.refreshValue()
    this._super()
  },
  getItemDefault: function () {
    return Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {'default': this.item_default})['default']
  },
  getItemTitle: function () {
    return this.item_title
  },
  getElementEditor: function (i, ignore) {
    var schemaCopy = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, this.schema.items)
    var editor = this.jsoneditor.getEditorClass(schemaCopy, this.jsoneditor)
    var row = this.row_holder.appendChild(this.theme.getTableRow())
    var holder = row
    if (!this.item_has_child_editors) {
      holder = this.theme.getTableCell()
      row.appendChild(holder)
    }

    var ret = this.jsoneditor.createEditor(editor, {
      jsoneditor: this.jsoneditor,
      schema: schemaCopy,
      container: holder,
      path: this.path + '.' + i,
      parent: this,
      compact: true,
      table_row: true
    })

    ret.preBuild()
    if (!ignore) {
      ret.build()
      ret.postBuild()

      ret.controls_cell = row.appendChild(this.theme.getTableCell())
      ret.row = row
      ret.table_controls = this.theme.getButtonHolder()
      ret.controls_cell.appendChild(ret.table_controls)
      ret.table_controls.style.margin = 0
      ret.table_controls.style.padding = 0
    }

    return ret
  },
  destroy: function () {
    this.innerHTML = ''
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.description && this.description.parentNode) this.description.parentNode.removeChild(this.description)
    if (this.row_holder && this.row_holder.parentNode) this.row_holder.parentNode.removeChild(this.row_holder)
    if (this.table && this.table.parentNode) this.table.parentNode.removeChild(this.table)
    if (this.panel && this.panel.parentNode) this.panel.parentNode.removeChild(this.panel)

    this.rows = this.title = this.description = this.row_holder = this.table = this.panel = null

    this._super()
  },
  setValue: function (value, initial) {
    // Update the array's value, adding/removing rows when necessary
    value = value || []

    // Make sure value has between minItems and maxItems items in it
    if (this.schema.minItems) {
      while (value.length < this.schema.minItems) {
        value.push(this.getItemDefault())
      }
    }
    if (this.schema.maxItems && value.length > this.schema.maxItems) {
      value = value.slice(0, this.schema.maxItems)
    }

    var serialized = JSON.stringify(value)
    if (serialized === this.serialized) return

    var numrowsChanged = false

    var self = this
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(value, function (i, val) {
      if (self.rows[i]) {
        // TODO: don't set the row's value if it hasn't changed
        self.rows[i].setValue(val)
      } else {
        self.addRow(val)
        numrowsChanged = true
      }
    })

    for (var j = value.length; j < self.rows.length; j++) {
      var holder = self.rows[j].container
      if (!self.item_has_child_editors) {
        self.rows[j].row.parentNode.removeChild(self.rows[j].row)
      }
      self.rows[j].destroy()
      if (holder.parentNode) holder.parentNode.removeChild(holder)
      self.rows[j] = null
      numrowsChanged = true
    }
    self.rows = self.rows.slice(0, value.length)

    self.refreshValue()
    if (numrowsChanged || initial) self.refreshRowButtons()

    self.onChange()

    // TODO: sortable
  },
  refreshRowButtons: function () {
    var self = this

    // If we currently have minItems items in the array
    var minItems = this.schema.minItems && this.schema.minItems >= this.rows.length

    var needRowButtons = false
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, editor) {
      // Hide the move down button for the last row
      if (editor.movedown_button) {
        if (i === self.rows.length - 1) {
          editor.movedown_button.style.display = 'none'
        } else {
          needRowButtons = true
          editor.movedown_button.style.display = ''
        }
      }

      // Hide the delete button if we have minItems items
      if (editor.delete_button) {
        if (minItems) {
          editor.delete_button.style.display = 'none'
        } else {
          needRowButtons = true
          editor.delete_button.style.display = ''
        }
      }

      if (editor.moveup_button) {
        needRowButtons = true
      }
    })

    // Show/hide controls column in table
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, editor) {
      if (needRowButtons) {
        editor.controls_cell.style.display = ''
      } else {
        editor.controls_cell.style.display = 'none'
      }
    })
    if (needRowButtons) {
      this.controls_header_cell.style.display = ''
    } else {
      this.controls_header_cell.style.display = 'none'
    }

    var controlsNeeded = false

    if (!this.value.length) {
      this.delete_last_row_button.style.display = 'none'
      this.remove_all_rows_button.style.display = 'none'
      this.table.style.display = 'none'
    } else if (this.value.length === 1) {
      this.table.style.display = ''
      this.remove_all_rows_button.style.display = 'none'

      // If there are minItems items in the array, or configured to hide the delete_last_row button, hide the delete button beneath the rows
      if (minItems || this.hide_delete_last_row_buttons) {
        this.delete_last_row_button.style.display = 'none'
      } else {
        this.delete_last_row_button.style.display = ''
        controlsNeeded = true
      }
    } else {
      this.table.style.display = ''

      if (minItems || this.hide_delete_last_row_buttons) {
        this.delete_last_row_button.style.display = 'none'
      } else {
        this.delete_last_row_button.style.display = ''
        controlsNeeded = true
      }

      if (minItems || this.hide_delete_all_rows_buttons) {
        this.remove_all_rows_button.style.display = 'none'
      } else {
        this.remove_all_rows_button.style.display = ''
        controlsNeeded = true
      }
    }

    // If there are maxItems in the array, hide the add button beneath the rows
    if ((this.schema.maxItems && this.schema.maxItems <= this.rows.length) || this.hide_add_button) {
      this.add_row_button.style.display = 'none'
    } else {
      this.add_row_button.style.display = ''
      controlsNeeded = true
    }

    if (!controlsNeeded) {
      this.controls.style.display = 'none'
    } else {
      this.controls.style.display = ''
    }
  },
  refreshValue: function () {
    var self = this
    this.value = []

    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(this.rows, function (i, editor) {
      // Get the value for this editor
      self.value[i] = editor.getValue()
    })
    this.serialized = JSON.stringify(this.value)
  },
  addRow: function (value) {
    var self = this
    var i = this.rows.length

    self.rows[i] = this.getElementEditor(i)

    var controlsHolder = self.rows[i].table_controls

    // Buttons to delete row, move row up, and move row down
    if (!this.hide_delete_buttons) {
      self.rows[i].delete_button = this.getButton('', 'delete', this.translate('button_delete_row_title_short'))
      self.rows[i].delete_button.classList.add('delete', 'json-editor-btntype-delete')
      self.rows[i].delete_button.setAttribute('data-i', i)
      self.rows[i].delete_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if (!self.askConfirmation()) {
          return false
        }

        var i = this.getAttribute('data-i') * 1

        var value = self.getValue()

        var newval = []
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(value, function (j, row) {
          if (j === i) return // If this is the one we're deleting
          newval.push(row)
        })
        self.setValue(newval)
        self.onChange(true)
        self.jsoneditor.trigger('deleteRow', self.rows[i])
      })
      controlsHolder.appendChild(self.rows[i].delete_button)
    }

    if (i && !this.hide_move_buttons) {
      self.rows[i].moveup_button = this.getButton('', 'moveup', this.translate('button_move_up_title'))
      self.rows[i].moveup_button.classList.add('moveup', 'json-editor-btntype-move')
      self.rows[i].moveup_button.setAttribute('data-i', i)
      self.rows[i].moveup_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var i = this.getAttribute('data-i') * 1

        if (i <= 0) return
        var rows = self.getValue()
        var tmp = rows[i - 1]
        rows[i - 1] = rows[i]
        rows[i] = tmp

        self.setValue(rows)
        self.onChange(true)
        self.jsoneditor.trigger('moveRow', self.rows[i - 1])
      })
      controlsHolder.appendChild(self.rows[i].moveup_button)
    }

    if (!this.hide_move_buttons) {
      self.rows[i].movedown_button = this.getButton('', 'movedown', this.translate('button_move_down_title'))
      self.rows[i].movedown_button.classList.add('movedown', 'json-editor-btntype-move')
      self.rows[i].movedown_button.setAttribute('data-i', i)
      self.rows[i].movedown_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        var i = this.getAttribute('data-i') * 1
        var rows = self.getValue()
        if (i >= rows.length - 1) return
        var tmp = rows[i + 1]
        rows[i + 1] = rows[i]
        rows[i] = tmp

        self.setValue(rows)
        self.onChange(true)
        self.jsoneditor.trigger('moveRow', self.rows[i + 1])
      })
      controlsHolder.appendChild(self.rows[i].movedown_button)
    }

    if (value) self.rows[i].setValue(value)
  },
  addControls: function () {
    var self = this

    this.collapsed = false
    this.toggle_button = this.getButton('', 'collapse', this.translate('button_collapse'))
    this.toggle_button.classList.add('json-editor-btntype-toggle')
    this.toggle_button.style.margin = '0 10px 0 0'
    if (this.title_controls) {
      this.title.insertBefore(this.toggle_button, this.title.childNodes[0])
      this.toggle_button.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()

        if (self.collapsed) {
          self.collapsed = false
          self.panel.style.display = ''
          self.setButtonText(this, '', 'collapse', self.translate('button_collapse'))
        } else {
          self.collapsed = true
          self.panel.style.display = 'none'
          self.setButtonText(this, '', 'expand', self.translate('button_expand'))
        }
      })

      // If it should start collapsed
      if (this.options.collapsed) {
        Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$trigger"])(this.toggle_button, 'click')
      }

      // Collapse button disabled
      if (this.schema.options && typeof this.schema.options.disable_collapse !== 'undefined') {
        if (this.schema.options.disable_collapse) this.toggle_button.style.display = 'none'
      } else if (this.jsoneditor.options.disable_collapse) {
        this.toggle_button.style.display = 'none'
      }
    }

    // Add "new row" and "delete last" buttons below editor
    this.add_row_button = this.getButton(this.getItemTitle(), 'add', this.translate('button_add_row_title', [this.getItemTitle()]))
    this.add_row_button.classList.add('json-editor-btntype-add')
    this.add_row_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()

      var editor = self.addRow()
      self.refreshValue()
      self.refreshRowButtons()
      self.onChange(true)
      self.jsoneditor.trigger('addRow', editor)
    })
    self.controls.appendChild(this.add_row_button)

    this.delete_last_row_button = this.getButton(this.translate('button_delete_last', [this.getItemTitle()]), 'subtract', this.translate('button_delete_last_title', [this.getItemTitle()]))
    this.delete_last_row_button.classList.add('json-editor-btntype-deletelast')
    this.delete_last_row_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()

      if (!self.askConfirmation()) {
        return false
      }

      var rows = self.getValue()
      var editor = rows.pop()
      self.setValue(rows)
      self.onChange(true)
      self.jsoneditor.trigger('deleteRow', editor)
    })
    self.controls.appendChild(this.delete_last_row_button)

    this.remove_all_rows_button = this.getButton(this.translate('button_delete_all'), 'delete', this.translate('button_delete_all_title'))
    this.remove_all_rows_button.classList.add('json-editor-btntype-deleteall')
    this.remove_all_rows_button.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()

      if (!self.askConfirmation()) {
        return false
      }

      self.setValue([])
      self.onChange(true)
      self.jsoneditor.trigger('deleteAllRows')
    })
    self.controls.appendChild(this.remove_all_rows_button)
  }
})


/***/ }),

/***/ "./src/editors/upload.js":
/*!*******************************!*\
  !*** ./src/editors/upload.js ***!
  \*******************************/
/*! exports provided: UploadEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadEditor", function() { return UploadEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");



var UploadEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  getNumColumns: function () {
    return 4
  },
  build: function () {
    var self = this
    this.title = this.header = this.label = this.theme.getFormInputLabel(this.getTitle(), this.isRequired())

    // Editor options
    this.options = this.expandCallbacks('upload', Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$extend"])({}, {
      'title': 'Browse',
      'icon': '',
      'auto_upload': false, // Trigger file upload button automatically
      'hide_input': false, // Hide the Browse button and name display (Only works if 'enable_drag_drop' is true)
      'enable_drag_drop': false, // Enable Drag&Drop uploading
      'drop_zone_text': 'Drag & Drop file here', // Text displayed in dropzone box
      'drop_zone_top': false, // Position of dropzone. true=before button input, false=after button input
      'alt_drop_zone_id': '', // Alternate DropZone ID (Can be created inside another property)
      'mime_type': '', // If set, restricts to mime type(s). Can be either a string or an array
      'max_upload_size': 0, // Maximum file size allowed. 0 = no limit
      'allow_reupload': false, // Allow reupload of file (prevents property from being readonly)
      'upload_handler': function (jseditor, type, file, cbs) {
        // Default dummy test upload handler
        window.alert('No upload_handler defined for "' + jseditor.path + '". You must create your own handler to enable upload to server')
      }.bind(null, this)
    }, this.defaults.options.upload || {}, this.options.upload || {}))

    this.options.mime_type = this.options.mime_type ? [].concat(this.options.mime_type) : []

    // Input that holds the base64 string
    this.input = this.theme.getFormInputField('hidden')
    this.container.appendChild(this.input)

    // Don't show uploader if this is readonly
    if ((!this.schema.readOnly && !this.schema.readonly) || this.options.allow_reupload === true) {
      if (typeof this.options.upload_handler !== 'function') throw new Error('Upload handler required for upload editor')

      // File uploader
      this.uploader = this.theme.getFormInputField('file')
      this.uploader.style.display = 'none'
      if (this.options.mime_type.length) this.uploader.setAttribute('accept', this.options.mime_type)

      if (!(this.options.enable_drag_drop === true && this.options.hide_input === true)) {
        // Pass click to this.uploader element
        this.clickHandler = function (e) {
          self.uploader.dispatchEvent(new window.MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
          }))
        }

        // Browse button
        this.browseButton = this.getButton(this.options.title, this.options.icon, this.options.title)
        this.browseButton.addEventListener('click', this.clickHandler)

        // Display field
        this.fileDisplay = this.theme.getFormInputField('input')
        this.fileDisplay.setAttribute('readonly', true)
        this.fileDisplay.value = 'No file selected.'
        this.fileDisplay.addEventListener('dblclick', this.clickHandler)

        this.fileUploadGroup = this.theme.getInputGroup(this.fileDisplay, [this.browseButton])
      }

      // Drag&Drop upload enabled
      if (this.options.enable_drag_drop === true) {
        // Alternate DropZone defined
        if (this.options.alt_drop_zone_id !== '') {
          if (this.options.alt_drop_zone_id.substr(0, 1) !== '#') this.options.alt_drop_zone_id = '#' + this.options.alt_drop_zone_id
          this.dropZone = document.querySelector(this.options.alt_drop_zone_id)
        } else {
          this.dropZone = document.createElement('div')
          this.dropZone.classList.add('je-dropzone')
          this.dropZone.setAttribute('data-text', this.options.drop_zone_text)
          this.container.appendChild(this.dropZone)

          // The Style Rules should be placed in theme once we have theme functions to render the dropzone
          this.jsoneditor.addNewStyleRules(this.jsoneditor.options.theme || window.JSONEditor.defaults.theme, {
            '.je-dropzone': 'position:relative;margin:0.5rem 0;border 2px dashed black;width:100%;height:60px;background:teal;transition: all 0.5s',
            '.je-dropzone:before': 'position:absolute;content:attr(data-text);left:50%;top:50%;transform: translate(-50%,-50%)',
            '.je-dropzone.active-dropzone': 'background:green'
          })
        }
        if (this.dropZone) this.dropZone.classList.add('upload-dropzone')
      }

      // Triggered after file have been selected
      this.uploadHandler = function (e) {
        e.preventDefault()
        e.stopPropagation()
        var files = e.target.files || e.dataTransfer.files
        if (files && files.length) {
          var errors = []
          // size of uploaded file is too big
          if (self.options.max_upload_size !== 0 && files[0].size > self.options.max_upload_size) {
            errors.push({
              path: self.path,
              property: 'size',
              message: 'Filesize too large. Max size is ' + self.options.max_upload_size
            })
          }
          // wrong file/mime type
          if (self.options.mime_type.length !== 0 && !self.isValidMimeType(files[0].type, self.options.mime_type)) {
            errors.push({
              path: self.path,
              property: 'format',
              message: 'Wrong file format. Allowed format(s): ' + self.options.mime_type.toString()
            })
          }
          if (errors.length > 0) {
            self.is_dirty = true
            self.showValidationErrors(errors)
          } else {
            if (self.fileDisplay) self.fileDisplay.value = files[0].name
            var fr = new window.FileReader()
            fr.onload = function (evt) {
              self.preview_value = evt.target.result
              self.refreshPreview(e)
              self.onChange(true)
              fr = null
            }
            fr.readAsDataURL(files[0])
          }
        }
      }

      this.uploader.addEventListener('change', this.uploadHandler)

      // Drag&Drop Event Handler
      this.dragHandler = function (e) {
        var files = e.dataTransfer.items || e.dataTransfer.files
        var validType = files && files.length && (self.options.mime_type.length === 0 || self.isValidMimeType(files[0].type, self.options.mime_type))
        var validZone = e.currentTarget.classList && e.currentTarget.classList.contains('upload-dropzone') && validType
        switch ((this === window ? 'w_' : 'e_') + e.type) {
          case 'w_drop':
          case 'w_dragover':
            if (!validZone) e.dataTransfer.dropEffect = 'none'
            break
          case 'e_dragenter': {
            if (validZone) {
              self.dropZone.classList.add('active-dropzone')
              e.dataTransfer.dropEffect = 'copy'
            }
            break
          }
          case 'e_dragleave':
            if (validZone) self.dropZone.classList.remove('active-dropzone')
            break
          case 'e_dragover': {
            if (validZone) {
              e.dataTransfer.dropEffect = 'copy'
              self.dropZone.classList.add('active-dropzone')
            }
            break
          }
          case 'e_drop': {
            if (validZone) self.uploadHandler(e)
            self.dropZone.classList.remove('active-dropzone')
            break
          }
        }
        if (!validZone) e.preventDefault()
      }

      // Set Drag'n'Drop handlers
      if (this.options.enable_drag_drop === true) {
        ['dragover', 'drop'].forEach(function (ev) {
          window.addEventListener(ev, self.dragHandler, true)
        });
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (ev) {
          self.dropZone.addEventListener(ev, self.dragHandler, true)
        })
      }
    }

    var description = this.schema.description || ''

    this.preview = this.theme.getFormInputDescription(description)

    this.control = this.theme.getFormControl(this.label, this.uploader || this.input, this.preview)
    this.container.appendChild(this.control)
    if (this.dropZone && this.options.alt_drop_zone_id === '' && this.options.drop_zone_top === true) this.container.appendChild(this.dropZone)
    if (this.fileUploadGroup) this.container.appendChild(this.fileUploadGroup)
    if (this.dropZone && this.options.alt_drop_zone_id === '' && this.options.drop_zone_top !== true) this.container.appendChild(this.dropZone)
    this.container.appendChild(this.preview)

    // Any special formatting that needs to happen after the input is added to the dom
    window.requestAnimationFrame(function () {
      self.afterInputReady()
    })
  },
  afterInputReady: function () {
    var self = this
    if (self.value) {
      var img = document.createElement('img')
      img.style.maxWidth = '100%'
      img.style.maxHeight = '100px'
      img.onload = function (event) {
        self.preview.appendChild(img)
      }
      img.onerror = function (error) {
        console.error('upload error', error, this)
      }
      img.src = self.container.querySelector('a').href
    }
    self.theme.afterInputReady(self.input)
  },
  refreshPreview: function (e) {
    if (this.last_preview === this.preview_value) return
    this.last_preview = this.preview_value

    this.preview.innerHTML = ''

    if (!this.preview_value) return

    var self = this

    var mime = this.preview_value.match(/^data:([^;,]+)[;,]/)
    if (mime) mime = mime[1]
    if (!mime) mime = 'unknown'

    var files = e.target.files || e.dataTransfer.files
    var file = files[0]

    this.preview.innerHTML = '<strong>Type:</strong> ' + mime + ', <strong>Size:</strong> ' + file.size + ' bytes'
    if (mime.substr(0, 5) === 'image') {
      this.preview.innerHTML += '<br>'
      var img = document.createElement('img')
      img.style.maxWidth = '100%'
      img.style.maxHeight = '100px'
      img.src = this.preview_value
      this.preview.appendChild(img)
    }

    this.preview.innerHTML += '<br>'
    var uploadButton = this.getButton('Upload', 'upload', 'Upload')
    this.preview.appendChild(uploadButton)
    uploadButton.addEventListener('click', function (event) {
      event.preventDefault()

      uploadButton.setAttribute('disabled', 'disabled')
      self.theme.removeInputError(self.uploader)

      if (self.theme.getProgressBar) {
        self.progressBar = self.theme.getProgressBar()
        self.preview.appendChild(self.progressBar)
      }

      self.options.upload_handler(self.path, file, {
        success: function (url) {
          self.setValue(url)

          if (self.parent) self.parent.onChildEditorChange(self)
          else self.jsoneditor.onChange()

          if (self.progressBar) self.preview.removeChild(self.progressBar)
          uploadButton.removeAttribute('disabled')
        },
        failure: function (error) {
          self.theme.addInputError(self.uploader, error)
          if (self.progressBar) self.preview.removeChild(self.progressBar)
          uploadButton.removeAttribute('disabled')
        },
        updateProgress: function (progress) {
          if (self.progressBar) {
            if (progress) self.theme.updateProgressBar(self.progressBar, progress)
            else self.theme.updateProgressBarUnknown(self.progressBar)
          }
        }
      })
    })

    if (this.options.auto_upload) {
      uploadButton.dispatchEvent(new window.MouseEvent('click'))
      this.preview.removeChild(uploadButton)
    }
  },
  enable: function () {
    if (!this.always_disabled) {
      if (this.uploader) this.uploader.disabled = false
      this._super()
    }
  },
  disable: function (alwaysDisabled) {
    if (alwaysDisabled) this.always_disabled = true
    if (this.uploader) this.uploader.disabled = true
    this._super()
  },
  setValue: function (val) {
    if (this.value !== val) {
      this.value = val
      this.input.value = this.value
      this.onChange()
    }
  },
  destroy: function () {
    var self = this
    if (this.uploader && this.uploader.parentNode) {
      this.uploader.removeEventListener('change', this.uploadHandler)
      this.uploader.parentNode.removeChild(this.uploader)
    }
    if (this.browseButton && this.browseButton.parentNode) {
      this.browseButton.removeEventListener('click', this.clickHandler)
      this.browseButton.parentNode.removeChild(this.browseButton)
    }
    if (this.fileDisplay && this.fileDisplay.parentNode) {
      this.fileDisplay.removeEventListener('dblclick', this.clickHandler)
      this.fileDisplay.parentNode.removeChild(this.fileDisplay)
    }
    if (this.fileUploadGroup && this.fileUploadGroup.parentNode) this.fileUploadGroup.parentNode.removeChild(this.fileUploadGroup)

    // Remove Drag'n'Drop handlers
    if (this.options.enable_drag_drop === true) {
      ['dragover', 'drop'].forEach(function (ev) {
        window.removeEventListener(ev, self.dragHandler, true)
      });
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (ev) {
        self.dropZone.removeEventListener(ev, self.dragHandler, true)
      })
    }

    if (this.preview && this.preview.parentNode) this.preview.parentNode.removeChild(this.preview)
    if (this.title && this.title.parentNode) this.title.parentNode.removeChild(this.title)
    if (this.input && this.input.parentNode) this.input.parentNode.removeChild(this.input)

    this._super()
  },
  isValidMimeType: function (mimeType, mimeTypesList) {
    return mimeTypesList.reduce(function (a, v) {
      return a || new RegExp(v.replace(/\*/g, '.*'), 'gi').test(mimeType)
    }, false)
  },
  showValidationErrors: function (errors) {
    var self = this
    if (this.jsoneditor.options.show_errors === 'always') {
    } else if (!this.is_dirty && this.previous_error_setting === this.jsoneditor.options.show_errors) {
      return
    }

    this.previous_error_setting = this.jsoneditor.options.show_errors

    var messages = []
    Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(errors, function (i, error) {
      if (error.path === self.path) {
        messages.push(error.message)
      }
    })
    this.input.controlgroup = this.control

    if (messages.length) {
      this.theme.addInputError(this.input, messages.join('. ') + '.')
    } else {
      this.theme.removeInputError(this.input)
    }
  }
})


/***/ }),

/***/ "./src/editors/uuid.js":
/*!*****************************!*\
  !*** ./src/editors/uuid.js ***!
  \*****************************/
/*! exports provided: UuidEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UuidEditor", function() { return UuidEditor; });
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor */ "./src/editor.js");


var UuidEditor = _editor__WEBPACK_IMPORTED_MODULE_0__["AbstractEditor"].extend({

  preBuild: function () {
    this._super()

    // Use Schema "default" for setting autogenerated uuid
    this.schema['default'] = this.uuid = this.getUuid()

    // Force pattern validation
    this.jsoneditor.validator.schema.properties[this.key].pattern = this.schema.pattern = '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$'

    // Set cleave options if no existing options is present
    if (!this.schema.options) this.schema.options = {}
    if (!this.schema.options.cleave) {
      this.schema.options.cleave = {
        delimiters: ['-'],
        blocks: [8, 4, 4, 4, 12]
      }
    }

    // Set field to readonly and hide field, label and description
    // this.schema.readonly = this.options.compact = this.options.hidden = true;
  },
  sanitize: function (value) {
    if (!this.testUuid(value)) value = this.uuid
    return value
  },
  setValue: function (value, initial, fromTemplate) {
    if (!this.testUuid(value)) value = this.uuid
    this.uuid = value
    this._super(value, initial, fromTemplate)
  },
  getUuid: function () {
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    var d = new Date().getTime()
    // eslint-disable-next-line no-undef
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      // eslint-disable-next-line no-undef
      d += performance.now() // use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
  },
  testUuid: function (value) {
    return (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value))
  }
})


/***/ }),

/***/ "./src/iconlib.js":
/*!************************!*\
  !*** ./src/iconlib.js ***!
  \************************/
/*! exports provided: AbstractIconLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractIconLib", function() { return AbstractIconLib; });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");


var AbstractIconLib = _class__WEBPACK_IMPORTED_MODULE_0__["Class"].extend({
  mapping: {
    collapse: '',
    expand: '',
    'delete': '',
    edit: '',
    add: '',
    cancel: '',
    save: '',
    moveup: '',
    movedown: ''
  },
  icon_prefix: '',
  getIconClass: function (key) {
    if (this.mapping[key]) return this.icon_prefix + this.mapping[key]
    else return null
  },
  getIcon: function (key) {
    var iconclass = this.getIconClass(key)

    if (!iconclass) return null

    var i = document.createElement('i')
    i.classList.add.apply(i.classList, iconclass.split(' '))

    return i
  }
})


/***/ }),

/***/ "./src/iconlibs/bootstrap2.js":
/*!************************************!*\
  !*** ./src/iconlibs/bootstrap2.js ***!
  \************************************/
/*! exports provided: bootstrap2Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap2Iconlib", function() { return bootstrap2Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var bootstrap2Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'chevron-down',
    expand: 'chevron-up',
    'delete': 'trash',
    edit: 'pencil',
    add: 'plus',
    subtract: 'minus',
    cancel: 'ban-circle',
    save: 'ok',
    moveup: 'arrow-up',
    moveright: 'arrow-right',
    movedown: 'arrow-down',
    moveleft: 'arrow-left',
    copy: 'copy',
    clear: 'remove-circle',
    time: 'time',
    calendar: 'calendar',
    edit_properties: 'list'
  },
  icon_prefix: 'icon-'
})


/***/ }),

/***/ "./src/iconlibs/bootstrap3.js":
/*!************************************!*\
  !*** ./src/iconlibs/bootstrap3.js ***!
  \************************************/
/*! exports provided: bootstrap3Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap3Iconlib", function() { return bootstrap3Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var bootstrap3Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'chevron-down',
    expand: 'chevron-right',
    'delete': 'trash',
    edit: 'pencil',
    add: 'plus',
    subtract: 'minus',
    cancel: 'floppy-remove',
    save: 'floppy-saved',
    moveup: 'arrow-up',
    moveright: 'arrow-right',
    movedown: 'arrow-down',
    moveleft: 'arrow-left',
    copy: 'copy',
    clear: 'remove-circle',
    time: 'time',
    calendar: 'calendar',
    edit_properties: 'list'
  },
  icon_prefix: 'glyphicon glyphicon-'
})


/***/ }),

/***/ "./src/iconlibs/fontawesome3.js":
/*!**************************************!*\
  !*** ./src/iconlibs/fontawesome3.js ***!
  \**************************************/
/*! exports provided: fontawesome3Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontawesome3Iconlib", function() { return fontawesome3Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var fontawesome3Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'chevron-down',
    expand: 'chevron-right',
    'delete': 'trash',
    edit: 'pencil',
    add: 'plus',
    subtract: 'minus',
    cancel: 'ban-circle',
    save: 'save',
    moveup: 'arrow-up',
    moveright: 'arrow-right',
    movedown: 'arrow-down',
    moveleft: 'arrow-left',
    copy: 'copy',
    clear: 'remove-circle',
    time: 'time',
    calendar: 'calendar',
    edit_properties: 'list'
  },
  icon_prefix: 'icon-'
})


/***/ }),

/***/ "./src/iconlibs/fontawesome4.js":
/*!**************************************!*\
  !*** ./src/iconlibs/fontawesome4.js ***!
  \**************************************/
/*! exports provided: fontawesome4Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontawesome4Iconlib", function() { return fontawesome4Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var fontawesome4Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'caret-square-o-down',
    expand: 'caret-square-o-right',
    'delete': 'times',
    edit: 'pencil',
    add: 'plus',
    subtract: 'minus',
    cancel: 'ban',
    save: 'save',
    moveup: 'arrow-up',
    moveright: 'arrow-right',
    movedown: 'arrow-down',
    moveleft: 'arrow-left',
    copy: 'files-o',
    clear: 'times-circle-o',
    time: 'clock-o',
    calendar: 'calendar',
    edit_properties: 'list'
  },
  icon_prefix: 'fa fa-'
})


/***/ }),

/***/ "./src/iconlibs/fontawesome5.js":
/*!**************************************!*\
  !*** ./src/iconlibs/fontawesome5.js ***!
  \**************************************/
/*! exports provided: fontawesome5Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontawesome5Iconlib", function() { return fontawesome5Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var fontawesome5Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'caret-down',
    expand: 'caret-right',
    'delete': 'trash',
    edit: 'pen',
    add: 'plus',
    subtract: 'minus',
    cancel: 'ban',
    save: 'save',
    moveup: 'arrow-up',
    moveright: 'arrow-right',
    movedown: 'arrow-down',
    moveleft: 'arrow-left',
    copy: 'copy',
    clear: 'times-circle',
    time: 'clock',
    calendar: 'calendar',
    edit_properties: 'list'
  },
  icon_prefix: 'fas fa-'
})


/***/ }),

/***/ "./src/iconlibs/foundation2.js":
/*!*************************************!*\
  !*** ./src/iconlibs/foundation2.js ***!
  \*************************************/
/*! exports provided: foundation2Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundation2Iconlib", function() { return foundation2Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var foundation2Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'minus',
    expand: 'plus',
    'delete': 'remove',
    edit: 'edit',
    add: 'add-doc',
    cancel: 'error',
    save: 'checkmark',
    moveup: 'up-arrow',
    movedown: 'down-arrow',
    copy: 'page-copy',
    clear: 'remove',
    time: 'clock',
    calendar: 'calendar'
  },
  icon_prefix: 'foundicon-'
})


/***/ }),

/***/ "./src/iconlibs/foundation3.js":
/*!*************************************!*\
  !*** ./src/iconlibs/foundation3.js ***!
  \*************************************/
/*! exports provided: foundation3Iconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundation3Iconlib", function() { return foundation3Iconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var foundation3Iconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'minus',
    expand: 'plus',
    'delete': 'trash',
    edit: 'pencil',
    add: 'plus',
    subtract: 'minus',
    cancel: 'x-circle',
    save: 'save',
    moveup: 'arrow-up',
    moveright: 'arrow-right',
    movedown: 'arrow-down',
    moveleft: 'arrow-left',
    copy: 'page-copy',
    clear: 'x-circle',
    time: 'clock',
    calendar: 'calendar',
    edit_properties: 'list'
  },
  icon_prefix: 'fi-'
})


/***/ }),

/***/ "./src/iconlibs/jqueryui.js":
/*!**********************************!*\
  !*** ./src/iconlibs/jqueryui.js ***!
  \**********************************/
/*! exports provided: jqueryuiIconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuiIconlib", function() { return jqueryuiIconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var jqueryuiIconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'triangle-1-s',
    expand: 'triangle-1-e',
    'delete': 'trash',
    edit: 'pencil',
    add: 'plusthick',
    subtract: 'minusthick',
    cancel: 'closethick',
    save: 'disk',
    moveup: 'arrowthick-1-n',
    moveright: 'arrowthick-1-e',
    movedown: 'arrowthick-1-s',
    moveleft: 'arrowthick-1-w',
    copy: 'copy',
    clear: 'circle-close',
    time: 'time',
    calendar: 'calendar',
    edit_properties: 'note'
  },
  icon_prefix: 'ui-icon ui-icon-'
})


/***/ }),

/***/ "./src/iconlibs/materialicons.js":
/*!***************************************!*\
  !*** ./src/iconlibs/materialicons.js ***!
  \***************************************/
/*! exports provided: materialiconsIconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialiconsIconlib", function() { return materialiconsIconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var materialiconsIconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'arrow_drop_up',
    expand: 'arrow_drop_down',
    'delete': 'delete',
    edit: 'edit',
    add: 'add',
    subtract: 'remove',
    cancel: 'cancel',
    save: 'save',
    moveup: 'arrow_upward',
    movedown: 'arrow_downward',
    moveright: 'arrow_forward',
    moveleft: 'arrow_back',
    copy: 'content_copy',
    clear: 'highlight_off',
    time: 'access_time',
    calendar: 'calendar_today',
    upload: 'cloud_upload',
    edit_properties: 'list'
  },

  icon_class: 'material-icons',
  icon_prefix: '',

  getIconClass: function (key) {
    // This method is unused.

    return this.icon_class
  },

  getIcon: function (key) {
    // Get the mapping.
    var mapping = this.mapping[key]
    if (!mapping) return null

    // @see http://materializecss.com/icons.html
    var i = document.createElement('i')
    i.classList.add(this.icon_class)
    var t = document.createTextNode(mapping)
    i.appendChild(t)
    return i
  }
})


/***/ }),

/***/ "./src/iconlibs/spectre.js":
/*!*********************************!*\
  !*** ./src/iconlibs/spectre.js ***!
  \*********************************/
/*! exports provided: spectreIconlib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectreIconlib", function() { return spectreIconlib; });
/* harmony import */ var _iconlib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconlib */ "./src/iconlib.js");


var spectreIconlib = _iconlib__WEBPACK_IMPORTED_MODULE_0__["AbstractIconLib"].extend({
  mapping: {
    collapse: 'arrow-down',
    expand: 'arrow-right',
    'delete': 'delete',
    edit: 'edit',
    add: 'plus',
    subtract: 'minus',
    cancel: 'cross',
    save: 'check',
    moveup: 'upward',
    moveright: 'forward',
    movedown: 'downward',
    moveleft: 'back',
    copy: 'copy',
    clear: 'close',
    time: 'time',
    calendar: 'bookmark',
    edit_properties: 'menu'
  },
  icon_prefix: 'icon icon-'
})


/***/ }),

/***/ "./src/styles/choices.css":
/*!********************************!*\
  !*** ./src/styles/choices.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./choices.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/choices.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/styles/starrating.css":
/*!***********************************!*\
  !*** ./src/styles/starrating.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./starrating.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/starrating.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/templates/default.js":
/*!**********************************!*\
  !*** ./src/templates/default.js ***!
  \**********************************/
/*! exports provided: defaultTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTemplate", function() { return defaultTemplate; });
var defaultTemplate = function () {
  return {
    compile: function (template) {
      var matches = template.match(/{{\s*([a-zA-Z0-9\-_ .]+)\s*}}/g)
      var l = matches && matches.length

      // Shortcut if the template contains no variables
      if (!l) return function () { return template }

      // Pre-compute the search/replace functions
      // This drastically speeds up template execution
      var replacements = []
      var getReplacement = function (i) {
        var p = matches[i].replace(/[{}]+/g, '').trim().split('.')
        var n = p.length
        var func

        if (n > 1) {
          var cur
          func = function (vars) {
            cur = vars
            for (i = 0; i < n; i++) {
              cur = cur[p[i]]
              if (!cur) break
            }
            return cur
          }
        } else {
          p = p[0]
          func = function (vars) {
            return vars[p]
          }
        }

        replacements.push({
          s: matches[i],
          r: func
        })
      }
      for (var i = 0; i < l; i++) {
        getReplacement(i)
      }

      // The compiled function
      return function (vars) {
        var ret = template + ''
        var r
        for (i = 0; i < l; i++) {
          r = replacements[i]
          ret = ret.replace(r.s, r.r(vars))
        }
        return ret
      }
    }
  }
}


/***/ }),

/***/ "./src/templates/ejs.js":
/*!******************************!*\
  !*** ./src/templates/ejs.js ***!
  \******************************/
/*! exports provided: ejsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ejsTemplate", function() { return ejsTemplate; });
var ejsTemplate = function () {
  if (!window.EJS) return false

  return {
    compile: function (template) {
      var compiled = new window.EJS({
        text: template
      })

      return function (context) {
        return compiled.render(context)
      }
    }
  }
}


/***/ }),

/***/ "./src/templates/handlebars.js":
/*!*************************************!*\
  !*** ./src/templates/handlebars.js ***!
  \*************************************/
/*! exports provided: handlebarsTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlebarsTemplate", function() { return handlebarsTemplate; });
var handlebarsTemplate = function () {
  return window.Handlebars
}


/***/ }),

/***/ "./src/templates/hogan.js":
/*!********************************!*\
  !*** ./src/templates/hogan.js ***!
  \********************************/
/*! exports provided: hoganTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoganTemplate", function() { return hoganTemplate; });
var hoganTemplate = function () {
  if (!window.Hogan) return false

  return {
    compile: function (template) {
      var compiled = window.Hogan.compile(template)
      return function (context) {
        return compiled.render(context)
      }
    }
  }
}


/***/ }),

/***/ "./src/templates/lodash.js":
/*!*********************************!*\
  !*** ./src/templates/lodash.js ***!
  \*********************************/
/*! exports provided: lodashTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lodashTemplate", function() { return lodashTemplate; });
var lodashTemplate = function () {
  if (!window._) return false

  return {
    compile: function (template) {
      return function (context) {
        return window._.template(template)(context)
      }
    }
  }
}


/***/ }),

/***/ "./src/templates/markup.js":
/*!*********************************!*\
  !*** ./src/templates/markup.js ***!
  \*********************************/
/*! exports provided: markupTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markupTemplate", function() { return markupTemplate; });
var markupTemplate = function () {
  if (!window.Mark || !window.Mark.up) return false

  return {
    compile: function (template) {
      return function (context) {
        return window.Mark.up(template, context)
      }
    }
  }
}


/***/ }),

/***/ "./src/templates/mustache.js":
/*!***********************************!*\
  !*** ./src/templates/mustache.js ***!
  \***********************************/
/*! exports provided: mustacheTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mustacheTemplate", function() { return mustacheTemplate; });
var mustacheTemplate = function () {
  if (!window.Mustache) return false

  return {
    compile: function (template) {
      return function (view) {
        return window.Mustache.render(template, view)
      }
    }
  }
}


/***/ }),

/***/ "./src/templates/swig.js":
/*!*******************************!*\
  !*** ./src/templates/swig.js ***!
  \*******************************/
/*! exports provided: swigTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swigTemplate", function() { return swigTemplate; });
var swigTemplate = function () {
  return window.swig
}


/***/ }),

/***/ "./src/templates/underscore.js":
/*!*************************************!*\
  !*** ./src/templates/underscore.js ***!
  \*************************************/
/*! exports provided: underscoreTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underscoreTemplate", function() { return underscoreTemplate; });
var underscoreTemplate = function () {
  if (!window._) return false

  return {
    compile: function (template) {
      return function (context) {
        return window._.template(template)(context)
      }
    }
  }
}


/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: AbstractTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractTheme", function() { return AbstractTheme; });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");



var matchKey = (function () {
  var elem = document.documentElement

  if (elem.matches) return 'matches'
  else if (elem.webkitMatchesSelector) return 'webkitMatchesSelector'
  else if (elem.mozMatchesSelector) return 'mozMatchesSelector'
  else if (elem.msMatchesSelector) return 'msMatchesSelector'
  else if (elem.oMatchesSelector) return 'oMatchesSelector'
})()

var AbstractTheme = _class__WEBPACK_IMPORTED_MODULE_0__["Class"].extend({

  init: function (jsoneditor) {
    this.jsoneditor = jsoneditor
  },

  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {},
  getContainer: function () {
    return document.createElement('div')
  },
  getFloatRightLinkHolder: function () {
    var el = document.createElement('div')
    el.style = el.style || {}
    el.style.cssFloat = 'right'
    el.style.marginLeft = '10px'
    return el
  },
  getModal: function () {
    var el = document.createElement('div')
    el.style.backgroundColor = 'white'
    el.style.border = '1px solid black'
    el.style.boxShadow = '3px 3px black'
    el.style.position = 'absolute'
    el.style.zIndex = '10'
    el.style.display = 'none'
    return el
  },
  getGridContainer: function () {
    var el = document.createElement('div')
    return el
  },
  getGridRow: function () {
    var el = document.createElement('div')
    el.classList.add('row')
    return el
  },
  getGridColumn: function () {
    var el = document.createElement('div')
    return el
  },
  setGridColumnSize: function (el, size) {

  },
  getLink: function (text) {
    var el = document.createElement('a')
    el.setAttribute('href', '#')
    el.appendChild(document.createTextNode(text))
    return el
  },
  disableHeader: function (header) {
    header.style.color = '#ccc'
  },
  disableLabel: function (label) {
    label.style.color = '#ccc'
  },
  enableHeader: function (header) {
    header.style.color = ''
  },
  enableLabel: function (label) {
    label.style.color = ''
  },
  getInfoButton: function (text) {
    var icon = document.createElement('span')
    icon.innerText = 'ⓘ'
    icon.style.fontSize = '16px'
    icon.style.fontWeight = 'bold'
    icon.style.padding = '.25rem'
    icon.style.position = 'relative'
    icon.style.display = 'inline-block'

    var tooltip = document.createElement('span')
    tooltip.style.fontSize = '12px'
    icon.style.fontWeight = 'normal'
    tooltip.style['font-family'] = 'sans-serif'
    tooltip.style.visibility = 'hidden'
    tooltip.style['background-color'] = 'rgba(50, 50, 50, .75)'
    tooltip.style.margin = '0 .25rem'
    tooltip.style.color = '#FAFAFA'
    tooltip.style.padding = '.5rem 1rem'
    tooltip.style['border-radius'] = '.25rem'
    tooltip.style.width = '20rem'
    tooltip.style.position = 'absolute'
    tooltip.innerText = text
    icon.onmouseover = function () {
      tooltip.style.visibility = 'visible'
    }
    icon.onmouseleave = function () {
      tooltip.style.visibility = 'hidden'
    }

    icon.appendChild(tooltip)

    return icon
  },
  getFormInputLabel: function (text, req) {
    var el = document.createElement('label')
    el.appendChild(document.createTextNode(text))
    if (req) el.classList.add('required')
    return el
  },
  getHeader: function (text) {
    var el = document.createElement('h3')
    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }

    return el
  },
  getCheckbox: function () {
    var el = this.getFormInputField('checkbox')
    el.style.display = 'inline-block'
    el.style.width = 'auto'
    return el
  },
  getCheckboxLabel: function (text, req) {
    var el = document.createElement('label')
    el.appendChild(document.createTextNode('\u00A0' + text))
    if (req) el.classList.add('required')
    return el
  },
  getMultiCheckboxHolder: function (controls, label, description, infoText) {
    var el = document.createElement('div')
    el.classList.add('control-group')

    if (label) {
      label.style.display = 'block'
      el.appendChild(label)
      if (infoText) label.appendChild(infoText)
    }

    for (var i in controls) {
      if (!controls.hasOwnProperty(i)) continue
      controls[i].style.display = 'inline-block'
      controls[i].style.marginRight = '20px'
      el.appendChild(controls[i])
    }

    if (description) el.appendChild(description)

    return el
  },
  getFormCheckboxControl: function (label, input, compact) {
    var el = document.createElement('div')
    el.appendChild(label)
    input.style.width = 'auto'
    label.insertBefore(input, label.firstChild)
    if (compact) {
      this.applyStyles(el, {
        display: 'inline-block',
        marginRight: '1rem'
      })
    }

    return el
  },

  getFormRadio: function (attributes) {
    var el = this.getFormInputField('radio')
    for (var key in attributes) {
      el.setAttribute(key, attributes[key])
    }
    el.style.display = 'inline-block'
    el.style.width = 'auto'
    return el
  },
  getFormRadioLabel: function (text, req) {
    var el = document.createElement('label')
    el.appendChild(document.createTextNode('\u00A0' + text))
    if (req) el.classList.add('required')
    return el
  },
  getFormRadioControl: function (label, input, compact) {
    var el = document.createElement('div')
    el.appendChild(label)
    input.style.width = 'auto'
    label.insertBefore(input, label.firstChild)
    if (compact) {
      this.applyStyles(el, {
        display: 'inline-block',
        marginRight: '1rem'
      })
    }

    return el
  },
  getSelectInput: function (options, multiple) {
    var select = document.createElement('select')
    if (options) this.setSelectOptions(select, options)
    return select
  },
  getSwitcher: function (options) {
    var switcher = this.getSelectInput(options, false)
    switcher.style.backgroundColor = 'transparent'
    switcher.style.display = 'inline-block'
    switcher.style.fontStyle = 'italic'
    switcher.style.fontWeight = 'normal'
    switcher.style.height = 'auto'
    switcher.style.marginBottom = 0
    switcher.style.marginLeft = '5px'
    switcher.style.padding = '0 0 0 3px'
    switcher.style.width = 'auto'
    return switcher
  },
  getSwitcherOptions: function (switcher) {
    return switcher.getElementsByTagName('option')
  },
  setSwitcherOptions: function (switcher, options, titles) {
    this.setSelectOptions(switcher, options, titles)
  },
  setSelectOptions: function (select, options, titles) {
    titles = titles || []
    select.innerHTML = ''
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement('option')
      option.setAttribute('value', options[i])
      option.textContent = titles[i] || options[i]
      select.appendChild(option)
    }
  },
  getTextareaInput: function () {
    var el = document.createElement('textarea')
    el.style = el.style || {}
    el.style.width = '100%'
    el.style.height = '300px'
    el.style.boxSizing = 'border-box'
    return el
  },
  getRangeInput: function (min, max, step) {
    var el = this.getFormInputField('range')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  },
  getRangeOutput: function (input, startvalue) {
    var output = document.createElement('output')
    output.value = startvalue || 0

    var updateOutput = function () { output.value = this.value }
    input.addEventListener('change', updateOutput, false)
    input.addEventListener('input', updateOutput, false)
    return output
  },
  getRangeControl: function (input, output) {
    var el = document.createElement('div')
    el.style.textAlign = 'center'
    if (output) el.appendChild(output)
    el.appendChild(input)
    return el
  },
  getFormInputField: function (type) {
    var el = document.createElement('input')
    el.setAttribute('type', type)
    return el
  },
  afterInputReady: function (input) {

  },
  getFormControl: function (label, input, description, infoText) {
    var el = document.createElement('div')
    el.classList.add('form-control')
    if (label) el.appendChild(label)
    if ((input.type === 'checkbox' || input.type === 'radio') && label) {
      input.style.width = 'auto'
      label.insertBefore(input, label.firstChild)
      if (infoText) label.appendChild(infoText)
    } else {
      if (infoText && label) label.appendChild(infoText)
      el.appendChild(input)
    }

    if (description) el.appendChild(description)
    return el
  },
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.style = el.style || {}
    el.style.paddingLeft = '10px'
    el.style.marginLeft = '10px'
    el.style.borderLeft = '1px solid #ccc'
    return el
  },
  getTopIndentedPanel: function () {
    var el = document.createElement('div')
    el.style = el.style || {}
    el.style.paddingLeft = '10px'
    el.style.marginLeft = '10px'
    return el
  },
  getChildEditorHolder: function () {
    return document.createElement('div')
  },
  getDescription: function (text) {
    var el = document.createElement('p')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  },
  getCheckboxDescription: function (text) {
    return this.getDescription(text)
  },
  getFormInputDescription: function (text) {
    return this.getDescription(text)
  },
  getButtonHolder: function () {
    return document.createElement('span')
  },
  getHeaderButtonHolder: function () {
    return this.getButtonHolder()
  },
  getFormButtonHolder: function (buttonAlign) {
    return this.getButtonHolder()
  },
  getButton: function (text, icon, title) {
    var el = document.createElement('button')
    el.type = 'button'
    this.setButtonText(el, text, icon, title)
    return el
  },
  getFormButton: function (text, icon, title) {
    return this.getButton(text, icon, title)
  },
  setButtonText: function (button, text, icon, title) {
    // Clear previous contents. https://jsperf.com/innerhtml-vs-removechild/37
    while (button.firstChild) {
      button.removeChild(button.firstChild)
    }
    if (icon) {
      button.appendChild(icon)
      text = ' ' + text
    }
    if (!this.jsoneditor.options.iconlib || !this.jsoneditor.options.remove_button_labels || !icon) {
      var spanEl = document.createElement('span')
      spanEl.appendChild(document.createTextNode(text))
      button.appendChild(spanEl)
    }
    if (title) button.setAttribute('title', title)
  },

  // Table functions
  getTable: function () {
    return document.createElement('table')
  },
  getTableRow: function () {
    return document.createElement('tr')
  },
  getTableHead: function () {
    return document.createElement('thead')
  },
  getTableBody: function () {
    return document.createElement('tbody')
  },
  getTableHeaderCell: function (text) {
    var el = document.createElement('th')
    el.textContent = text
    return el
  },
  getTableCell: function () {
    var el = document.createElement('td')
    return el
  },
  getErrorMessage: function (text) {
    var el = document.createElement('p')
    el.style = el.style || {}
    el.style.color = 'red'
    el.appendChild(document.createTextNode(text))
    return el
  },
  addInputError: function (input, text) {
  },
  removeInputError: function (input) {
  },
  addTableRowError: function (row) {
  },
  removeTableRowError: function (row) {
  },
  getTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = "<div style='float: left; width: 130px;' class='tabs'></div><div class='content' style='margin-left: 120px;' id='" + pName + "'></div><div style='clear:both;'></div>"
    return el
  },
  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = "<div class='tabs' style='margin-left: 10px;'></div><div style='clear:both;'></div><div class='content' id='" + pName + "'></div>"
    return el
  },
  applyStyles: function (el, styles) {
    for (var i in styles) {
      if (!styles.hasOwnProperty(i)) continue
      el.style[i] = styles[i]
    }
  },
  closest: function (elem, selector) {
    while (elem && elem !== document) {
      if (elem[matchKey]) {
        if (elem[matchKey](selector)) {
          return elem
        } else {
          elem = elem.parentNode
        }
      } else {
        return false
      }
    }
    return false
  },
  insertBasicTopTab: function (tab, newTabsHolder) {
    newTabsHolder.firstChild.insertBefore(tab, newTabsHolder.firstChild.firstChild)
  },
  getTab: function (span, tabId) {
    var el = document.createElement('div')
    el.appendChild(span)
    el.id = tabId
    el.style = el.style || {}
    this.applyStyles(el, {
      border: '1px solid #ccc',
      borderWidth: '1px 0 1px 1px',
      textAlign: 'center',
      lineHeight: '30px',
      borderRadius: '5px',
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      fontWeight: 'bold',
      cursor: 'pointer'
    })
    return el
  },
  getTopTab: function (span, tabId) {
    var el = document.createElement('div')
    el.id = tabId
    el.appendChild(span)
    el.style = el.style || {}
    this.applyStyles(el, {
      float: 'left',
      border: '1px solid #ccc',
      borderWidth: '1px 1px 0px 1px',
      textAlign: 'center',
      lineHeight: '30px',
      borderRadius: '5px',
      paddingLeft: '5px',
      paddingRight: '5px',
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
      fontWeight: 'bold',
      cursor: 'pointer'
    })
    return el
  },
  getTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTopTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTabContent: function () {
    return this.getIndentedPanel()
  },
  getTopTabContent: function () {
    return this.getTopIndentedPanel()
  },
  markTabActive: function (row) {
    this.applyStyles(row.tab, {
      opacity: 1,
      background: 'white'
    })
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  },
  markTabInactive: function (row) {
    this.applyStyles(row.tab, {
      opacity: 0.5,
      background: ''
    })
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  },
  addTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  },
  addTopTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  },
  getBlockLink: function () {
    var link = document.createElement('a')
    link.style.display = 'block'
    return link
  },
  getBlockLinkHolder: function () {
    var el = document.createElement('div')
    return el
  },
  getLinksHolder: function () {
    var el = document.createElement('div')
    return el
  },
  createMediaLink: function (holder, link, media) {
    holder.appendChild(link)
    media.style.width = '100%'
    holder.appendChild(media)
  },
  createImageLink: function (holder, link, image) {
    holder.appendChild(link)
    link.appendChild(image)
  },
  getFirstTab: function (holder) {
    return holder.firstChild.firstChild
  },
  getInputGroup: function (input, buttons) {
    return undefined
  },
  cleanText: function (txt) {
    // Clean out HTML tags from txt
    var tmp = document.createElement('div')
    tmp.innerHTML = txt
    return (tmp.textContent || tmp.innerText)
  },
  getProgressBar: function () {
    var max = 100; var start = 0

    var progressBar = document.createElement('progress')
    progressBar.setAttribute('max', max)
    progressBar.setAttribute('value', start)
    return progressBar
  },
  updateProgressBar: function (progressBar, progress) {
    if (!progressBar) return
    progressBar.setAttribute('value', progress)
  },
  updateProgressBarUnknown: function (progressBar) {
    if (!progressBar) return
    progressBar.removeAttribute('value')
  }
})


/***/ }),

/***/ "./src/themes/barebones.js":
/*!*********************************!*\
  !*** ./src/themes/barebones.js ***!
  \*********************************/
/*! exports provided: barebonesTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barebonesTheme", function() { return barebonesTheme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var barebonesTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
  },
  addInputError: function (input, text) {
    if (!input.errmsg) {
      var group = this.closest(input, '.form-control')
      input.errmsg = document.createElement('div')
      input.errmsg.setAttribute('class', 'errmsg')
      group.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = 'block'
    }

    input.errmsg.innerHTML = ''
    input.errmsg.appendChild(document.createTextNode(text))
  },
  removeInputError: function (input) {
    if (input.style) {
      input.style.borderColor = ''
    }
    if (input.errmsg) input.errmsg.style.display = 'none'
  }
})


/***/ }),

/***/ "./src/themes/bootstrap2.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap2.js ***!
  \**********************************/
/*! exports provided: bootstrap2Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap2Theme", function() { return bootstrap2Theme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var bootstrap2Theme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
    'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'
  },
  getRangeInput: function (min, max, step) {
    // TODO: use bootstrap slider
    return this._super(min, max, step)
  },
  getGridContainer: function () {
    var el = document.createElement('div')
    el.classList.add('container-fluid')
    return el
  },
  getGridRow: function () {
    var el = document.createElement('div')
    el.classList.add('row-fluid')
    return el
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    el.style.display = 'inline-block'
    el.style.fontWeight = 'bold'
    return el
  },
  setGridColumnSize: function (el, size) {
    el.classList.add('span' + size)
  },
  getSelectInput: function (options, multiple) {
    var input = this._super(options)
    input.style.width = 'auto'
    input.style.maxWidth = '98%'
    return input
  },
  getFormInputField: function (type) {
    var el = this._super(type)
    el.style.width = '98%'
    return el
  },
  afterInputReady: function (input) {
    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.control-group')
    input.controls = this.closest(input, '.controls')
    if (this.closest(input, '.compact')) {
      input.controlgroup.className = input.controlgroup.className.replace(/control-group/g, '').replace(/[ ]{2,}/g, ' ')
      input.controls.className = input.controlgroup.className.replace(/controls/g, '').replace(/[ ]{2,}/g, ' ')
      input.style.marginBottom = 0
    }
    if (this.queuedInputErrorText) {
      var text = this.queuedInputErrorText
      delete this.queuedInputErrorText
      this.addInputError(input, text)
    }

    // TODO: use bootstrap slider
  },
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('well', 'well-small')
    el.style.paddingBottom = 0
    return el
  },
  getInfoButton: function (text) {
    var icon = document.createElement('span')
    icon.classList.add('icon-info-sign', 'pull-right')
    icon.style.padding = '.25rem'
    icon.style.position = 'relative'
    icon.style.display = 'inline-block'

    var tooltip = document.createElement('span')
    tooltip.style['font-family'] = 'sans-serif'
    tooltip.style.visibility = 'hidden'
    tooltip.style['background-color'] = 'rgba(50, 50, 50, .75)'
    tooltip.style.margin = '0 .25rem'
    tooltip.style.color = '#FAFAFA'
    tooltip.style.padding = '.5rem 1rem'
    tooltip.style['border-radius'] = '.25rem'
    tooltip.style.width = '25rem'
    tooltip.style.transform = 'translateX(-27rem) translateY(-.5rem)'
    tooltip.style.position = 'absolute'
    tooltip.innerText = text
    icon.onmouseover = function () {
      tooltip.style.visibility = 'visible'
    }
    icon.onmouseleave = function () {
      tooltip.style.visibility = 'hidden'
    }

    icon.appendChild(tooltip)

    return icon
  },
  getFormInputDescription: function (text) {
    var el = document.createElement('p')
    el.classList.add('help-inline')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  },
  getFormControl: function (label, input, description, infoText) {
    var ret = document.createElement('div')

    var controls = document.createElement('div')

    if (label && (input.getAttribute('type') === 'checkbox' || input.getAttribute('type') === 'radio')) {
      ret.appendChild(controls)
      controls.classList.add('form-check')
      label.classList.add('form-check-label')
      input.classList.add('form-check-input')
      input.style.margin = '0 4px 4px 0'
      input.style.width = 'auto'
      controls.appendChild(input)
      controls.appendChild(label)
      if (infoText) controls.appendChild(infoText)
      controls.style.height = '30px'
    } else {
      ret.classList.add('control-group')
      if (label) {
        label.classList.add('control-label')
        ret.appendChild(label)
      }
      if (infoText) controls.appendChild(infoText)
      controls.appendChild(input)
      ret.appendChild(controls)
    }

    if (description) controls.appendChild(description)

    return ret
  },
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    el.style.marginLeft = '10px'
    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('div')
    el.classList.add('btn-group')
    return el
  },
  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('btn', 'btn-default')
    return el
  },
  getTable: function () {
    var el = document.createElement('table')
    el.classList.add('table', 'table-bordered')
    el.style.width = 'auto'
    el.style.maxWidth = 'none'
    return el
  },
  addInputError: function (input, text) {
    if (!input.controlgroup) {
      this.queuedInputErrorText = text
      return
    }
    if (!input.controlgroup || !input.controls) return
    input.controlgroup.classList.add('error')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('help-block', 'errormsg')
      input.controls.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.controlgroup) {
      delete this.queuedInputErrorText
    }
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.controlgroup.classList.remove('error')
  },
  getTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('tabbable', 'tabs-left')
    el.innerHTML = "<ul class='nav nav-tabs'  id='" + pName + "'></ul><div class='tab-content well well-small' id='" + pName + "'></div>"
    return el
  },
  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('tabbable', 'tabs-over')
    el.innerHTML = "<ul class='nav nav-tabs' id='" + pName + "'></ul><div class='tab-content well well-small'  id='" + pName + "'></div>"
    return el
  },
  getTab: function (text, tabId) {
    var el = document.createElement('li')
    el.classList.add('nav-item')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTopTab: function (text, tabId) {
    var el = document.createElement('li')
    el.classList.add('nav-item')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTopTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-pane')
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-pane')
    return el
  },
  markTabActive: function (row) {
    row.tab.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.add('active')
    } else {
      row.container.classList.add('active')
    }
  },
  markTabInactive: function (row) {
    row.tab.classList.remove('active')
    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.remove('active')
    } else {
      row.container.classList.remove('active')
    }
  },
  addTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  },
  addTopTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  },
  getProgressBar: function () {
    var container = document.createElement('div')
    container.classList.add('progress')

    var bar = document.createElement('div')
    bar.classList.add('bar')
    bar.style.width = '0%'
    container.appendChild(bar)

    return container
  },
  updateProgressBar: function (progressBar, progress) {
    if (!progressBar) return

    progressBar.firstChild.style.width = progress + '%'
  },
  updateProgressBarUnknown: function (progressBar) {
    if (!progressBar) return

    progressBar.classList.add('progress', 'progress-striped', 'active')
    progressBar.firstChild.style.width = '100%'
  },
  getInputGroup: function (input, buttons) {
    if (!input) return

    var inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-append')
    inputGroupContainer.appendChild(input)

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('btn')
      inputGroupContainer.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
})


/***/ }),

/***/ "./src/themes/bootstrap3.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap3.js ***!
  \**********************************/
/*! exports provided: bootstrap3Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap3Theme", function() { return bootstrap3Theme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var bootstrap3Theme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
    'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'
  },
  getSelectInput: function (options, multiple) {
    var el = this._super(options)
    el.classList.add('form-control')
    // el.style.width = 'auto';
    return el
  },
  setGridColumnSize: function (el, size, offset) {
    el.classList.add('col-md-' + size)
    if (offset) {
      el.classList.add('col-md-offset-' + offset)
    }
  },
  afterInputReady: function (input) {
    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.form-group')
    if (this.closest(input, '.compact')) {
      input.controlgroup.style.marginBottom = 0
    }
    if (this.queuedInputErrorText) {
      var text = this.queuedInputErrorText
      delete this.queuedInputErrorText
      this.addInputError(input, text)
    }

    // TODO: use bootstrap slider
  },
  getTextareaInput: function () {
    var el = document.createElement('textarea')
    el.classList.add('form-control')
    return el
  },
  getRangeInput: function (min, max, step) {
    // TODO: use better slider
    return this._super(min, max, step)
  },
  getFormInputField: function (type) {
    var el = this._super(type)
    if (type !== 'checkbox' && type !== 'radio') {
      el.classList.add('form-control')
    }
    return el
  },
  getFormControl: function (label, input, description) {
    var group = document.createElement('div')

    if (label && (input.type === 'checkbox' || input.type === 'radio')) {
      group.classList.add(input.type)
      label.insertBefore(input, label.firstChild)
      group.appendChild(label)
    } else {
      group.classList.add('form-group')
      if (label) {
        label.classList.add('control-label')
        group.appendChild(label)
      }
      group.appendChild(input)
    }

    if (description) group.appendChild(description)

    return group
  },
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('well', 'well-sm')
    el.style.paddingBottom = 0
    return el
  },
  getInfoButton: function (text) {
    var icon = document.createElement('span')
    icon.classList.add('glyphicon', 'glyphicon-info-sign', 'pull-right')
    icon.style.padding = '.25rem'
    icon.style.position = 'relative'
    icon.style.display = 'inline-block'

    var tooltip = document.createElement('span')
    tooltip.style['font-family'] = 'sans-serif'
    tooltip.style.visibility = 'hidden'
    tooltip.style['background-color'] = 'rgba(50, 50, 50, .75)'
    tooltip.style.margin = '0 .25rem'
    tooltip.style.color = '#FAFAFA'
    tooltip.style.padding = '.5rem 1rem'
    tooltip.style['border-radius'] = '.25rem'
    tooltip.style.width = '25rem'
    tooltip.style.transform = 'translateX(-27rem) translateY(-.5rem)'
    tooltip.style.position = 'absolute'
    tooltip.innerText = text
    icon.onmouseover = function () {
      tooltip.style.visibility = 'visible'
    }
    icon.onmouseleave = function () {
      tooltip.style.visibility = 'hidden'
    }

    icon.appendChild(tooltip)

    return icon
  },
  getFormInputDescription: function (text) {
    var el = document.createElement('p')
    el.classList.add('help-block')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  },
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    el.style.marginLeft = '10px'
    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('span')
    el.classList.add('btn-group')
    return el
  },
  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('btn', 'btn-default')
    return el
  },
  getTable: function () {
    var el = document.createElement('table')
    el.classList.add('table', 'table-bordered')
    el.style.width = 'auto'
    el.style.maxWidth = 'none'
    return el
  },

  addInputError: function (input, text) {
    if (!input.controlgroup) {
      this.queuedInputErrorText = text
      return
    }
    input.controlgroup.classList.add('has-error')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('help-block', 'errormsg')
      input.controlgroup.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.controlgroup) {
      delete this.queuedInputErrorText
    }
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.controlgroup.classList.remove('has-error')
  },
  getTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = "<ul class='col-md-2 nav nav-pills nav-stacked' id='" + pName + "' role='tablist'></ul>" +
      "<div class='col-md-10 tab-content well well-small'  id='" + pName + "'></div>"
    return el
  },
  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = "<ul class='nav nav-tabs' id='" + pName + "' role='tablist'></ul>" +
      "<div class='tab-content well well-small'  id='" + pName + "'></div>"
    return el
  },
  getTab: function (text, tabId) {
    var li = document.createElement('li')
    li.setAttribute('role', 'presentation')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    a.setAttribute('aria-controls', tabId)
    a.setAttribute('role', 'tab')
    a.setAttribute('data-toggle', 'tab')
    li.appendChild(a)
    return li
  },
  getTopTab: function (text, tabId) {
    var li = document.createElement('li')
    li.setAttribute('role', 'presentation')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    a.setAttribute('aria-controls', tabId)
    a.setAttribute('role', 'tab')
    a.setAttribute('data-toggle', 'tab')
    li.appendChild(a)
    return li
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  },
  markTabActive: function (row) {
    row.tab.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.add('active')
    } else {
      row.container.classList.add('active')
    }
  },
  markTabInactive: function (row) {
    row.tab.classList.remove('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.remove('active')
    } else {
      row.container.classList.remove('active')
    }
  },
  getProgressBar: function () {
    var min = 0; var max = 100; var start = 0

    var container = document.createElement('div')
    container.classList.add('progress')

    var bar = document.createElement('div')
    bar.classList.add('progress-bar')
    bar.setAttribute('role', 'progressbar')
    bar.setAttribute('aria-valuenow', start)
    bar.setAttribute('aria-valuemin', min)
    bar.setAttribute('aria-valuenax', max)
    bar.innerHTML = start + '%'
    container.appendChild(bar)

    return container
  },
  updateProgressBar: function (progressBar, progress) {
    if (!progressBar) return

    var bar = progressBar.firstChild
    var percentage = progress + '%'
    bar.setAttribute('aria-valuenow', progress)
    bar.style.width = percentage
    bar.innerHTML = percentage
  },
  updateProgressBarUnknown: function (progressBar) {
    if (!progressBar) return

    var bar = progressBar.firstChild
    progressBar.classList.add('progress', 'progress-striped', 'active')
    bar.removeAttribute('aria-valuenow')
    bar.style.width = '100%'
    bar.innerHTML = ''
  },
  getInputGroup: function (input, buttons) {
    if (!input) return

    var inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-group')
    inputGroupContainer.appendChild(input)

    var inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group-btn')
    inputGroupContainer.appendChild(inputGroup)

    for (var i = 0; i < buttons.length; i++) {
      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
})


/***/ }),

/***/ "./src/themes/bootstrap4.js":
/*!**********************************!*\
  !*** ./src/themes/bootstrap4.js ***!
  \**********************************/
/*! exports provided: bootstrap4Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap4Theme", function() { return bootstrap4Theme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var bootstrap4Theme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    disable_theme_rules: false,
    input_size: 'normal', // Size of input and select elements. "small", "normal", "large"
    custom_forms: false, // use twbs custom form stylings
    object_indent: true, // Indent nested object elements (use nested .card layout)
    object_background: 'bg-light', // Bootstrap 4 card background modifier class (https://getbootstrap.com/docs/4.1/getting-started/introduction/)
    object_text: '', // Bootstrap 4 card tect color modifier class (https://getbootstrap.com/docs/4.1/getting-started/introduction/)
    table_border: false, // Add border to array "table" row and cells
    table_zebrastyle: false, // Add "zebra style" to array "table" rows
    tooltip: 'bootstrap' // how to display tooltips (infoText). Can be `browser` for native `title`, `css` for simple CSS Styling, or `bootstrap` for TWBS/Popper.js handling
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
    '.jsoneditor-twbs4-text-button': 'background: none;padding: 0;border: 0;color: currentColor;',
    'td>.form-group': 'margin-bottom: 0',
    '.json-editor-btn-upload': 'margin-top: 1rem',
    '.je-noindent .card': 'padding: 0; border: 0', // Option: object_indent

    // no-js handling of tooltips. Option: tooltip = 'css'

    '.je-tooltip:hover::before, .je-tooltip:hover::after': 'display:block;position:absolute;font-size:0.8em;color:#fff',
    '.je-tooltip:hover::before': 'border-radius:0.2em; content:attr(title);background-color:#000; margin-top:-2.5em;padding:0.3em',

    // bring select2 input size to default twbs4 size (only matched size for input_size: normal)
    '.select2-container--default .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__arrow': 'height: calc(1.5em + .75rem + 2px)',
    '.select2-container--default .select2-selection--single .select2-selection__rendered': 'line-height: calc(1.5em + .75rem + 2px);',

    // selectize
    '.selectize-control.form-control': 'padding: 0',
    '.selectize-dropdown.form-control': 'padding: 0;height: auto' // this cut off options can also be prohibited by setting `copyClassesToDropdown: true` in the slectize options
  },

  getSelectInput: function (options, multiple) {
    var el = this._super(options)
    el.classList.add('form-control')

    if (this.options.custom_forms === false) {
      if (this.options.input_size === 'small') el.classList.add('form-control-sm')
      if (this.options.input_size === 'large') el.classList.add('form-control-lg')
    } else {
      el.classList.remove('form-control')
      el.classList.add('custom-select')
      if (this.options.input_size === 'small') el.classList.add('custom-select-sm')
      if (this.options.input_size === 'large') el.classList.add('custom-select-lg')
    }

    return el
  },

  getContainer: function () {
    var el = document.createElement('div')
    if (!this.options.object_indent) el.classList.add('je-noindent')
    return el
  },

  setGridColumnSize: function (el, size, offset) {
    el.classList.add('col-md-' + size)

    if (offset) {
      el.classList.add('offset-md-' + offset)
    }
  },

  afterInputReady: function (input) {
    if (input.controlgroup) return

    // set id/for
    // is not working for: [type=file], [type=checkbox]
    var id = input.name
    input.id = id
    // 2x parentNode, b/c range input has an <div> wrapper
    var label = input.parentNode.parentNode.getElementsByTagName('label')[0]
    if (label) {
      label.htmlFor = id
    }

    input.controlgroup = this.closest(input, '.form-group')
  },

  getTextareaInput: function () {
    var el = document.createElement('textarea')
    el.classList.add('form-control')
    if (this.options.input_size === 'small') el.classList.add('form-control-sm')
    if (this.options.input_size === 'large') el.classList.add('form-control-lg')
    return el
  },

  getRangeInput: function (min, max, step) {
    var el = this._super(min, max, step)

    if (this.options.custom_forms === true) {
      el.classList.remove('form-control')
      el.classList.add('custom-range')
    }

    return el
  },

  getFormInputField: function (type) {
    var el = this._super(type)
    if (type !== 'checkbox' && type !== 'radio' && type !== 'file') {
      el.classList.add('form-control')
      if (this.options.input_size === 'small') el.classList.add('form-control-sm')
      if (this.options.input_size === 'large') el.classList.add('form-control-lg')
    }

    if (type === 'file') {
      // custom_form is not used on files, would be a bit ticky since we need more
      // markup. Also it contains language strings which would need be translateable?
      // and most of all, w/o JavaScript teh name of the file can't be displayed.
      el.classList.add('form-control-file')
    }

    return el
  },

  getFormControl: function (label, input, description, infoText) {
    var group = document.createElement('div')
    group.classList.add('form-group')

    if (label && (input.type === 'checkbox' || input.type === 'radio')) {
      var check = document.createElement('div')

      if (this.options.custom_forms === false) {
        check.classList.add('form-check')
        input.classList.add('form-check-input')
        label.classList.add('form-check-label')
      } else {
        check.classList.add('custom-control')
        input.classList.add('custom-control-input')
        label.classList.add('custom-control-label')

        if (input.type === 'checkbox') {
          check.classList.add('custom-checkbox')
        } else {
          check.classList.add('custom-radio')
        }
      }

      check.appendChild(input)
      check.appendChild(label)
      if (infoText) check.appendChild(infoText)

      group.appendChild(check)
    } else {
      if (label) {
        group.appendChild(label)

        if (infoText) group.appendChild(infoText)
      }

      group.appendChild(input)
    }

    if (description) {
      group.appendChild(description)
    }

    return group
  },

  getInfoButton: function (text) {
    var button = document.createElement('button') // shoud be a <button> but no fitting tbws style...
    button.type = 'button'
    button.classList.add('ml-3', 'jsoneditor-twbs4-text-button')
    button.setAttribute('data-toggle', 'tooltip')
    button.setAttribute('data-placement', 'auto')
    button.title = text

    var icon = document.createTextNode('ⓘ')
    button.appendChild(icon)

    if (this.options.tooltip === 'bootstrap') {
      if (window.jQuery && window.jQuery().tooltip) {
        window.jQuery(button).tooltip()
      } else {
        console.warn('Could not find popper jQuery plugin of Bootstrap.')
      }
    } else if (this.options.tooltip === 'css') {
      button.classList.add('je-tooltip')
    } // else -> nothing todo for native [title] handling

    return button
  },

  /**
   * Generates a checkbox...
   *
   * Overwriten from master theme to get rid of inline styles.
   */
  getCheckbox: function () {
    var el = this.getFormInputField('checkbox')
    return el
  },

  /**
   * Multiple checkboxes in a row.
   *
   */
  getMultiCheckboxHolder: function (controls, label, description, infoText) {
    var el = document.createElement('div')
    el.classList.add('form-group')

    if (label) {
      el.appendChild(label)

      if (infoText) {
        label.appendChild(infoText)
      }
    }

    // for inline view we need an container so it doesnt wrap in the "row" of the <label>
    var container = document.createElement('div')

    for (var i in controls) {
      if (!controls.hasOwnProperty(i)) {
        continue
      }

      // controls are already parsed by getFormControl() so they have an .form-group
      // wrapper we need to get rid of...
      var ctrl = controls[i].firstChild

      // we don't know if this should be an normal / compact view
      /* if (this.options.custom_forms === false) {
        ctrl.classList.add('form-check-inline')
      } else {
        ctrl.classList.add('custom-control-inline')
      } */

      container.appendChild(ctrl)
    }

    el.appendChild(container)

    if (description) el.appendChild(description)

    return el
  },

  /**
   * Single radio element
   */
  getFormRadio: function (attributes) {
    var el = this.getFormInputField('radio')

    for (var key in attributes) {
      el.setAttribute(key, attributes[key])
    }

    if (this.options.custom_forms === false) {
      el.classList.add('form-check-input')
    } else {
      el.classList.add('custom-control-input')
    }

    return el
  },

  /**
   * Add the <label> for the single radio from getFormRadio()
   *
   */
  getFormRadioLabel: function (text, req) {
    var el = document.createElement('label')

    if (this.options.custom_forms === false) {
      el.classList.add('form-check-label')
    } else {
      el.classList.add('custom-control-label')
    }

    el.appendChild(document.createTextNode(text))
    return el
  },

  /**
   * Stack the radios from getFormRadio()/getFormRadioLabel()
   *
   */
  getFormRadioControl: function (label, input, compact) {
    var el = document.createElement('div')

    if (this.options.custom_forms === false) {
      el.classList.add('form-check')
    } else {
      el.classList.add('custom-control', 'custom-radio')
    }

    el.appendChild(input)
    el.appendChild(label)

    if (compact) {
      if (this.options.custom_forms === false) {
        el.classList.add('form-check-inline')
      } else {
        el.classList.add('custom-control-inline')
      }
    }

    return el
  },

  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('card', 'card-body', 'mb-3')

    if (this.options.object_background) {
      el.classList.add(this.options.object_background)
    }

    if (this.options.object_text) {
      el.classList.add(this.options.object_text)
    }

    // for better twbs card styling we should be able to return a nested div

    return el
  },

  getFormInputDescription: function (text) {
    var el = document.createElement('small')
    el.classList.add('form-text')

    if (window.DOMPurify) {
      el.innerHTML = window.DOMPurify.sanitize(text)
    } else {
      el.textContent = this.cleanText(text)
    }

    return el
  },

  getHeader: function (text) {
    // var cardHeader = document.createElement('div')
    // cardHeader.classList.add('card-header')

    var el = document.createElement('h3')
    el.classList.add('card-title')

    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }

    // cardHeader.appendChild(el)

    return el
  },

  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()

    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('span')
    el.classList.add('btn-group')
    return el
  },

  getFormButtonHolder: function (buttonAlign) {
    var el = this.getButtonHolder()
    el.classList.add('d-block')

    if (buttonAlign === 'center') el.classList.add('text-center')
    else if (buttonAlign === 'right') el.classList.add('text-right')

    return el
  },

  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('btn', 'btn-secondary', 'btn-sm')
    return el
  },

  getTable: function () {
    var el = document.createElement('table')
    el.classList.add('table', 'table-sm')

    if (this.options.table_border) {
      el.classList.add('table-bordered')
    }

    if (this.options.table_zebrastyle) {
      el.classList.add('table-striped')
    }

    return el
  },

  getErrorMessage: function (text) {
    var el = document.createElement('div')
    el.classList.add('alert', 'alert-danger')
    el.setAttribute('role', 'alert')
    el.appendChild(document.createTextNode(text))
    return el
  },

  /**
   * input validation on <input>
   */
  addInputError: function (input, text) {
    if (!input.controlgroup) return

    input.classList.add('is-invalid')

    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('invalid-feedback')
      input.controlgroup.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.classList.remove('is-invalid')
  },

  getTabHolder: function (propertyName) {
    var el = document.createElement('div')
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    el.innerHTML = "<div class='col-md-2' id='" + pName + "'><ul class='nav flex-column nav-pills'></ul></div><div class='col-md-10'><div class='tab-content' id='" + pName + "'></div></div>"
    el.classList.add('row')
    return el
  },
  addTab: function (holder, tab) {
    holder.children[0].children[0].appendChild(tab)
  },
  getTabContentHolder: function (tabHolder) {
    return tabHolder.children[1].children[0]
  },

  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName

    var el = document.createElement('div')
    el.classList.add('card')

    el.innerHTML = "<div class='card-header'><ul class='nav nav-tabs card-header-tabs' id='" + pName + "'></ul></div><div class='card-body'><div class='tab-content' id='" + pName + "'></div></div>"

    return el
  },
  getTab: function (text, tabId) {
    var liel = document.createElement('li')
    liel.classList.add('nav-item')

    var ael = document.createElement('a')
    ael.classList.add('nav-link')
    ael.setAttribute('href', '#' + tabId)
    ael.setAttribute('data-toggle', 'tab')
    ael.appendChild(text)

    liel.appendChild(ael)

    return liel
  },
  getTopTab: function (text, tabId) {
    var el = document.createElement('li')
    el.classList.add('nav-item')

    var a = document.createElement('a')
    a.classList.add('nav-link')
    a.setAttribute('href', '#' + tabId)
    a.setAttribute('data-toggle', 'tab')
    a.appendChild(text)

    el.appendChild(a)

    return el
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-pane')
    el.setAttribute('role', 'tabpanel')
    return el
  },
  markTabActive: function (row) {
    row.tab.firstChild.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.add('active')
    } else {
      row.container.classList.add('active')
    }
  },
  markTabInactive: function (row) {
    row.tab.firstChild.classList.remove('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.remove('active')
    } else {
      row.container.classList.remove('active')
    }
  },

  addTopTab: function (holder, tab) {
    holder.children[0].children[0].appendChild(tab)
  },

  getTopTabContentHolder: function (tabHolder) {
    return tabHolder.children[1].children[0]
  },

  getProgressBar: function () {
    var min = 0
    var max = 100
    var start = 0

    var container = document.createElement('div')
    container.classList.add('progress')

    var bar = document.createElement('div')
    bar.classList.add('progress-bar')
    bar.setAttribute('role', 'progressbar')
    bar.setAttribute('aria-valuenow', start)
    bar.setAttribute('aria-valuemin', min)
    bar.setAttribute('aria-valuenax', max)
    bar.innerHTML = start + '%'
    container.appendChild(bar)

    return container
  },
  updateProgressBar: function (progressBar, progress) {
    if (!progressBar) return

    var bar = progressBar.firstChild
    var percentage = progress + '%'
    bar.setAttribute('aria-valuenow', progress)
    bar.style.width = percentage
    bar.innerHTML = percentage
  },
  updateProgressBarUnknown: function (progressBar) {
    if (!progressBar) return

    var bar = progressBar.firstChild
    progressBar.classList.add('progress', 'progress-striped', 'active')
    bar.removeAttribute('aria-valuenow')
    bar.style.width = '100%'
    bar.innerHTML = ''
  },

  getBlockLink: function () {
    var link = document.createElement('a')
    link.classList.add('mb-3', 'd-inline-block')
    return link
  },

  /**
   * Link after successfull upload
   */
  getLinksHolder: function () {
    var el = document.createElement('div')
    return el
  },

  getInputGroup: function (input, buttons) {
    if (!input) return

    var inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-group')

    inputGroupContainer.appendChild(input)

    var inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group-append')
    inputGroupContainer.appendChild(inputGroup)

    for (var i = 0; i < buttons.length; i++) {
      // this uses the getButton() wrapper, so we have to remove the panel/ctrl spacing for this case
      buttons[i].classList.remove('mr-2', 'btn-secondary')
      buttons[i].classList.add('btn-outline-secondary')

      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
})


/***/ }),

/***/ "./src/themes/foundation.js":
/*!**********************************!*\
  !*** ./src/themes/foundation.js ***!
  \**********************************/
/*! exports provided: foundationTheme, foundation3Theme, foundation4Theme, foundation5Theme, foundation6Theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundationTheme", function() { return foundationTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundation3Theme", function() { return foundation3Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundation4Theme", function() { return foundation4Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundation5Theme", function() { return foundation5Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foundation6Theme", function() { return foundation6Theme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");
// Base Foundation theme


var foundationTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
    'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'
  },
  getChildEditorHolder: function () {
    var el = document.createElement('div')
    el.style.marginBottom = '15px'
    return el
  },
  getSelectInput: function (options, multiple) {
    var el = this._super(options)
    el.style.minWidth = 'none'
    el.style.padding = '5px'
    el.style.marginTop = '3px'
    return el
  },
  getSwitcher: function (options) {
    var el = this._super(options)
    el.style.paddingRight = '8px'
    return el
  },
  afterInputReady: function (input) {
    if (input.group) return
    if (this.closest(input, '.compact')) {
      input.style.marginBottom = 0
    }
    input.group = this.closest(input, '.form-control')
    if (this.queuedInputErrorText) {
      var text = this.queuedInputErrorText
      delete this.queuedInputErrorText
      this.addInputError(input, text)
    }
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    el.style.display = 'inline-block'
    return el
  },
  getFormInputField: function (type) {
    var el = this._super(type)
    el.style.width = '100%'
    el.style.marginBottom = (type === 'checkbox' || type === 'radio') ? '0' : '12px'
    return el
  },
  getFormInputDescription: function (text) {
    var el = document.createElement('p')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    el.style.marginTop = '-10px'
    el.style.fontStyle = 'italic'
    return el
  },
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('panel')
    el.style.paddingBottom = 0
    return el
  },
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    el.style.display = 'inline-block'
    el.style.marginLeft = '10px'
    el.style.verticalAlign = 'middle'
    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('span')
    el.classList.add('button-group')
    return el
  },
  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('small', 'button')
    return el
  },
  addInputError: function (input, text) {
    if (!input.group) {
      this.queuedInputErrorText = text
      return
    }
    input.group.classList.add('error')

    if (!input.errmsg) {
      input.insertAdjacentHTML('afterend', '<small class="error"></small>')
      input.errmsg = input.parentNode.getElementsByClassName('error')[0]
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.group) {
      delete this.queuedInputErrorText
    }
    if (!input.errmsg) return
    input.group.classList.remove('error')
    input.errmsg.style.display = 'none'
  },
  getProgressBar: function () {
    var progressBar = document.createElement('div')
    progressBar.classList.add('progress')

    var meter = document.createElement('span')
    meter.classList.add('meter')
    meter.style.width = '0%'
    progressBar.appendChild(meter)
    return progressBar
  },
  updateProgressBar: function (progressBar, progress) {
    if (!progressBar) return
    progressBar.firstChild.style.width = progress + '%'
  },
  updateProgressBarUnknown: function (progressBar) {
    if (!progressBar) return
    progressBar.firstChild.style.width = '100%'
  },
  getInputGroup: function (input, buttons) {
    if (!input) return undefined

    var inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('input-group')
    input.classList.add('input-group-field')
    inputGroupContainer.appendChild(input)

    for (var i = 0; i < buttons.length; i++) {
      var inputGroup = document.createElement('div')
      inputGroup.classList.add('input-group-button')
      inputGroup.style.verticalAlign = 'top'
      buttons[i].classList.remove('small')
      inputGroup.appendChild(buttons[i])
      inputGroupContainer.appendChild(inputGroup)
    }

    return inputGroupContainer
  }
})

// Foundation 3 Specific Theme
var foundation3Theme = foundationTheme.extend({
  getHeaderButtonHolder: function () {
    var el = this._super()
    el.style.fontSize = '.6em'
    return el
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    el.style.fontWeight = 'bold'
    return el
  },
  getTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('row')
    el.innerHTML = '<dl class="tabs vertical two columns" id="' + pName + '"></dl><div class="tabs-content ten columns" id="' + pName + '"></div>'
    return el
  },
  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('row')
    el.innerHTML = '<dl class="tabs horizontal" style="padding-left: 10px; margin-left: 10px;" id="' + pName + '"></dl><div class="tabs-content twelve columns" style="padding: 10px; margin-left: 10px;" id="' + pName + '"></div>'
    return el
  },
  setGridColumnSize: function (el, size, offset) {
    var sizes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
    el.classList.add('columns', sizes[size])
    if (offset && offset < 11) {
      el.classList.add('offset-by-' + sizes[offset])
    }
  },
  getTab: function (text, tabId) {
    var el = document.createElement('dd')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTopTab: function (text, tabId) {
    var el = document.createElement('dd')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTopTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('content', 'active')
    el.style.paddingLeft = '5px'
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('content', 'active')
    el.style.paddingLeft = '5px'
    return el
  },
  markTabActive: function (row) {
    row.tab.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  },
  markTabInactive: function (row) {
    row.tab.classList.remove('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  },
  addTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  },
  addTopTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  }
})

// Foundation 4 Specific Theme
var foundation4Theme = foundationTheme.extend({
  getHeaderButtonHolder: function () {
    var el = this._super()
    el.style.fontSize = '.6em'
    return el
  },
  setGridColumnSize: function (el, size, offset) {
    el.classList.add('columns', 'large-' + size)
    if (offset) {
      el.classList.add('large-offset-' + offset)
    }
  },
  getFormInputDescription: function (text) {
    var el = this._super(text)
    el.style.fontSize = '.8rem'
    return el
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    el.style.fontWeight = 'bold'
    return el
  }
})

// Foundation 5 Specific Theme
var foundation5Theme = foundationTheme.extend({
  getFormInputDescription: function (text) {
    var el = this._super(text)
    el.style.fontSize = '.8rem'
    return el
  },
  setGridColumnSize: function (el, size, offset) {
    el.classList.add('columns', 'medium-' + size)
    if (offset) {
      el.classList.add('medium-offset-' + offset)
    }
  },
  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.className = el.className.replace(/\s*small/g, '') + ' tiny'
    return el
  },
  getTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = '<dl class="tabs vertical" id="' + pName + '"></dl><div class="tabs-content vertical" id="' + pName + '"></div>'
    return el
  },
  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('row')
    el.innerHTML = '<dl class="tabs horizontal" style="padding-left: 10px;" id="' + pName + '"></dl><div class="tabs-content horizontal" style="padding: 10px;" id="' + pName + '"></div>'
    return el
  },
  getTab: function (text, tabId) {
    var el = document.createElement('dd')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTopTab: function (text, tabId) {
    var el = document.createElement('dd')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTopTabContentHolder: function (tabHolder) {
    return tabHolder.children[1]
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-content', 'active')
    el.style.paddingLeft = '5px'
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tab-content', 'active')
    el.style.paddingLeft = '5px'
    return el
  },
  markTabActive: function (row) {
    row.tab.classList.add('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  },
  markTabInactive: function (row) {
    row.tab.classList.remove('active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  },
  addTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  },
  addTopTab: function (holder, tab) {
    holder.children[0].appendChild(tab)
  }

})

var foundation6Theme = foundation5Theme.extend({
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('callout', 'secondary')
    el.style = 'padding-left: 10px; margin-left: 10px;'
    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('span')
    el.classList.add('button-group', 'tiny')
    el.style.marginBottom = 0
    return el
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    el.style.display = 'block'
    return el
  },
  getFormControl: function (label, input, description, infoText) {
    var el = document.createElement('div')
    el.classList.add('form-control')
    if (label) el.appendChild(label)
    if (input.type === 'checkbox' || input.type === 'radio') {
      input.style.width = 'auto'
      label.insertBefore(input, label.firstChild)
    } else if (label) {
      if (infoText) label.appendChild(infoText)
      label.appendChild(input)
    } else {
      if (infoText) el.appendChild(infoText)
      el.appendChild(input)
    }

    if (description && label) label.appendChild(description)
    return el
  },
  addInputError: function (input, text) {
    if (!input.group) return
    input.group.classList.add('error')

    if (!input.errmsg) {
      var errorEl = document.createElement('span')
      errorEl.classList.add('form-error', 'is-visible')
      input.group.getElementsByTagName('label')[0].appendChild(errorEl)

      input.classList.add('is-invalid-input')

      input.errmsg = errorEl
    } else {
      input.errmsg.style.display = ''
      input.className = ''
    }

    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.errmsg) return
    input.classList.remove('is-invalid-input')
    if (input.errmsg.parentNode) {
      input.errmsg.parentNode.removeChild(input.errmsg)
    }
  },
  getTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('grid-x')
    el.innerHTML = '<div class="medium-2 cell" style="float: left;"><ul class="vertical tabs" data-tabs id="' + pName + '"></ul></div><div class="medium-10 cell" style="float: left;"><div class="tabs-content" data-tabs-content="' + pName + '"></div></div>'
    return el
  },
  getTopTabHolder: function (propertyName) {
    var pName = (typeof propertyName === 'undefined') ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('grid-y')
    el.innerHTML = '<div className="cell"><ul class="tabs" data-tabs id="' + pName + '"></ul><div class="tabs-content" data-tabs-content="' + pName + '"></div></div>'
    return el
  },
  insertBasicTopTab: function (tab, newTabsHolder) {
    newTabsHolder.firstChild.firstChild.insertBefore(tab, newTabsHolder.firstChild.firstChild.firstChild)
  },
  getTab: function (text, tabId) {
    var el = document.createElement('li')
    el.classList.add('tabs-title')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTopTab: function (text, tabId) {
    var el = document.createElement('li')
    el.classList.add('tabs-title')
    var a = document.createElement('a')
    a.setAttribute('href', '#' + tabId)
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTabContentHolder: function (tabHolder) {
    return tabHolder.children[1].firstChild
  },
  getTopTabContentHolder: function (tabHolder) {
    return tabHolder.firstChild.children[1]
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tabs-panel')
    el.style.paddingLeft = '5px'
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.classList.add('tabs-panel')
    el.style.paddingLeft = '5px'
    return el
  },
  markTabActive: function (row) {
    row.tab.classList.add('is-active')
    row.tab.firstChild.setAttribute('aria-selected', 'true')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.add('is-active')
      row.rowPane.setAttribute('aria-selected', 'true')
    } else {
      row.container.classList.add('is-active')
      row.container.setAttribute('aria-selected', 'true')
    }
  },
  markTabInactive: function (row) {
    row.tab.classList.remove('is-active')
    row.tab.firstChild.removeAttribute('aria-selected')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.classList.remove('is-active')
      row.rowPane.removeAttribute('aria-selected')
    } else {
      row.container.classList.remove('is-active')
      row.container.removeAttribute('aria-selected')
    }
  },
  addTab: function (holder, tab) {
    holder.children[0].firstChild.appendChild(tab)
  },
  addTopTab: function (holder, tab) {
    holder.firstChild.children[0].appendChild(tab)
  },
  getFirstTab: function (holder) {
    return holder.firstChild.firstChild.firstChild
  }
})


/***/ }),

/***/ "./src/themes/html.js":
/*!****************************!*\
  !*** ./src/themes/html.js ***!
  \****************************/
/*! exports provided: htmlTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlTheme", function() { return htmlTheme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var htmlTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
    'je-form-input-label': 'display:block;margin-bottom:3px;font-weight:bold;',
    'je-form-input-description': 'display:inline-block;margin:0;font-size:.8em;font-style:italic;',
    'je-indented-panel': 'padding:5px;margin:10px;border-radius:3px;border:1px solid #ddd;',
    'je-child-editor-holder': 'margin-bottom:8px;',
    'je-header-button-holder': 'display:inline-block;margin-left:10px;font-size:.8em;vertical-align:middle;',
    'je-table': 'margin-bottom:5px;border-bottom:1px solid #ccc;'
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    el.classList.add('je-form-input-label')
    return el
  },
  getFormInputDescription: function (text) {
    var el = this._super(text)
    el.classList.add('je-form-input-label')
    return el
  },
  getIndentedPanel: function () {
    var el = this._super()
    el.classList.add('je-indented-panel')
    return el
  },
  getTopIndentedPanel: function () {
    return this.getIndentedPanel()
  },
  getChildEditorHolder: function () {
    var el = this._super()
    el.classList.add('je-child-editor-holder')
    return el
  },
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    el.classList.add('je-header-button-holder')
    return el
  },
  getTable: function () {
    var el = this._super()
    el.classList.add('je-table')
    return el
  },
  addInputError: function (input, text) {
    input.style.borderColor = 'red'

    if (!input.errmsg) {
      var group = this.closest(input, '.form-control')
      input.errmsg = document.createElement('div')
      input.errmsg.setAttribute('class', 'errmsg')
      input.errmsg.style = input.errmsg.style || {}
      input.errmsg.style.color = 'red'
      group.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = 'block'
    }

    input.errmsg.innerHTML = ''
    input.errmsg.appendChild(document.createTextNode(text))
  },
  removeInputError: function (input) {
    if (input.style) {
      input.style.borderColor = ''
    }
    if (input.errmsg) input.errmsg.style.display = 'none'
  }
})


/***/ }),

/***/ "./src/themes/jqueryui.js":
/*!********************************!*\
  !*** ./src/themes/jqueryui.js ***!
  \********************************/
/*! exports provided: jqueryuiTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryuiTheme", function() { return jqueryuiTheme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var jqueryuiTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  /* Theme config options that allows changing various aspects of the output */
  options: {
    'disable_theme_rules': false
  },
  /* Custom stylesheet rules. format: "selector" : "CSS rules" */
  rules: {
    'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'
  },
  getTable: function () {
    var el = this._super()
    el.setAttribute('cellpadding', 5)
    el.setAttribute('cellspacing', 0)
    return el
  },
  getTableHeaderCell: function (text) {
    var el = this._super(text)
    el.classList.add('ui-state-active')
    el.style.fontWeight = 'bold'
    return el
  },
  getTableCell: function () {
    var el = this._super()
    el.classList.add('ui-widget-content')
    return el
  },
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    el.style.marginLeft = '10px'
    el.style.fontSize = '.6em'
    el.style.display = 'inline-block'
    return el
  },
  getFormInputDescription: function (text) {
    var el = this.getDescription(text)
    el.style.marginLeft = '10px'
    el.style.display = 'inline-block'
    return el
  },
  getFormControl: function (label, input, description, infoText) {
    var el = this._super(label, input, description, infoText)
    if (input.type === 'checkbox') {
      el.style.lineHeight = '25px'

      el.style.padding = '3px 0'
    } else {
      el.style.padding = '4px 0 8px 0'
    }
    return el
  },
  getDescription: function (text) {
    var el = document.createElement('span')
    el.style.fontSize = '.8em'
    el.style.fontStyle = 'italic'
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('div')
    el.classList.add('ui-buttonset')
    el.style.fontSize = '.7em'
    return el
  },
  getFormInputLabel: function (text, req) {
    var el = document.createElement('label')
    el.style.fontWeight = 'bold'
    el.style.display = 'block'
    el.textContent = text
    if (req) el.classList.add('required')
    return el
  },
  getButton: function (text, icon, title) {
    var button = document.createElement('button')
    button.classList.add('ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all')

    // Icon only
    if (icon && !text) {
      button.classList.add('ui-button-icon-only')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
    // Icon and Text
    } else if (icon) {
      button.classList.add('ui-button-text-icon-primary')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
    // Text only
    } else {
      button.classList.add('ui-button-text-only')
    }

    var el = document.createElement('span')
    el.classList.add('ui-button-text')
    el.textContent = text || title || '.'
    button.appendChild(el)

    button.setAttribute('title', title)

    return button
  },
  setButtonText: function (button, text, icon, title) {
    button.innerHTML = ''
    button.classList.add('ui-button', 'ui-widget', 'ui-state-default', 'ui-corner-all')

    // Icon only
    if (icon && !text) {
      button.classList.add('ui-button-icon-only')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
    // Icon and Text
    } else if (icon) {
      button.classList.add('ui-button-text-icon-primary')
      icon.classList.add('ui-button-icon-primary', 'ui-icon-primary')
      button.appendChild(icon)
    // Text only
    } else {
      button.classList.add('ui-button-text-only')
    }

    var el = document.createElement('span')
    el.classList.add('ui-button-text')
    el.textContent = text || title || '.'
    button.appendChild(el)

    button.setAttribute('title', title)
  },
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('ui-widget-content', 'ui-corner-all')
    el.style.padding = '1em 1.4em'
    el.style.marginBottom = '20px'
    return el
  },
  afterInputReady: function (input) {
    if (input.controls) return
    input.controls = this.closest(input, '.form-control')
    if (this.queuedInputErrorText) {
      var text = this.queuedInputErrorText
      delete this.queuedInputErrorText
      this.addInputError(input, text)
    }
  },
  addInputError: function (input, text) {
    if (!input.controls) {
      this.queuedInputErrorText = text
      return
    }
    if (!input.errmsg) {
      input.errmsg = document.createElement('div')
      input.errmsg.classList.add('ui-state-error')
      input.controls.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }

    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.controls) {
      delete this.queuedInputErrorText
    }
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
  },
  markTabActive: function (row) {
    row.tab.classList.remove('ui-widget-header')
    row.tab.classList.add('ui-state-active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = ''
    } else {
      row.container.style.display = ''
    }
  },
  markTabInactive: function (row) {
    row.tab.classList.add('ui-widget-header')
    row.tab.classList.remove('ui-state-active')

    if (typeof row.rowPane !== 'undefined') {
      row.rowPane.style.display = 'none'
    } else {
      row.container.style.display = 'none'
    }
  }
})


/***/ }),

/***/ "./src/themes/materialize.js":
/*!***********************************!*\
  !*** ./src/themes/materialize.js ***!
  \***********************************/
/*! exports provided: materializeTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materializeTheme", function() { return materializeTheme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var materializeTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend(
  {
  /* Theme config options that allows changing various aspects of the output */
    options: {
      'disable_theme_rules': false
    },
    /* Custom stylesheet rules. format: "selector" : "CSS rules" */
    rules: {
      'div[data-schemaid="root"]:after': 'position:relative;color:red;margin:10px 0;font-weight:600;display:block;width:100%;text-align:center;content:"This is an old JSON-Editor 1.x Theme and might not display elements correctly when used with the 2.x version"'
    },
    /**
   * Applies grid size to specified element.
   *
   * @param {HTMLElement} el The DOM element to have specified size applied.
   * @param {int} size The grid column size.
   * @see http://materializecss.com/grid.html
   */
    setGridColumnSize: function (el, size) {
      el.classList.add('col')
      el.classList.add('s' + size)
    },

    /**
   * Gets a wrapped button element for a header.
   *
   * @returns {HTMLElement} The wrapped button element.
   */
    getHeaderButtonHolder: function () {
      return this.getButtonHolder()
    },

    /**
   * Gets a wrapped button element.
   *
   * @returns {HTMLElement} The wrapped button element.
   */
    getButtonHolder: function () {
      return document.createElement('span')
    },

    /**
   * Gets a single button element.
   *
   * @param {string} text The button text.
   * @param {HTMLElement} icon The icon object.
   * @param {string} title The button title.
   * @returns {HTMLElement} The button object.
   * @see http://materializecss.com/buttons.html
   */
    getButton: function (text, icon, title) {
      // Prepare icon.
      if (icon) {
        icon.classList.add('left')
        icon.style.marginRight = '5px'
      }

      // Create and return button.
      var el = this._super(text, icon, title)
      el.classList.add('waves-effect', 'waves-light', 'btn')
      el.style.fontSize = '0.75rem'
      el.style.height = '24px'
      el.style.lineHeight = '24px'
      el.style.marginLeft = '5px'
      el.style.padding = '0 0.5rem'
      return el
    },

    afterInputReady: function (input) {
      var label = input.previousSibling

      if (input.type && input.type === 'range') {
        label = input.parentElement.previousSibling
      }

      if (input.value || (input.dataset && input.dataset.containerFor && input.dataset.containerFor === 'radio')) {
        if (label && label.localName === 'label') {
          label.classList.add('active')
        }
      }
    },

    /**
   * Gets a form control object consisiting of several sub objects.
   *
   * @param {HTMLElement} label The label element.
   * @param {HTMLElement} input The input element.
   * @param {string} description The element description.
   * @param {string} infoText The element information text.
   * @returns {HTMLElement} The assembled DOM element.
   * @see http://materializecss.com/forms.html
   */
    getFormControl: function (label, input, description, infoText) {
      var ctrl
      var type = input.type

      // Checkboxes get wrapped in p elements.
      if (type && (type === 'checkbox' || type === 'radio')) {
        ctrl = document.createElement('p')
        if (label) {
          var span = document.createElement('span')
          span.innerHTML = label.innerHTML
          label.innerHTML = ''
          label.setAttribute('for', input.id)
          ctrl.appendChild(label)
          label.appendChild(input)
          label.appendChild(span)
        } else {
          ctrl.appendChild(input)
        }

        return ctrl
      }

      // Anything else gets wrapped in divs.
      ctrl = this._super(label, input, description, infoText)

      // Color needs special attention.
      if (type && type === 'color') {
        input.style.height = '3rem'
        input.style.width = '100%'
        input.style.margin = '5px 0 20px 0'
        input.style.padding = '3px'

        if (label) {
          label.style.transform = 'translateY(-14px) scale(0.8)'
          label.style['-webkit-transform'] = 'translateY(-14px) scale(0.8)'
          label.style['-webkit-transform-origin'] = '0 0'
          label.style['transform-origin'] = '0 0'
        }
      }

      return ctrl
    },

    getDescription: function (text) {
      var el = document.createElement('div')
      el.classList.add('grey-text')
      // el.style.marginTop = '-15px'
      if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
      else el.textContent = this.cleanText(text)
      return el
    },

    /**
   * Gets a header element.
   *
   * @param {string|HTMLElement} text The header text or element.
   * @returns {HTMLElement} The header element.
   */
    getHeader: function (text) {
      var el = document.createElement('h5')

      if (typeof text === 'string') {
        el.textContent = text
      } else {
        el.appendChild(text)
      }

      return el
    },

    getChildEditorHolder: function () {
      var el = document.createElement('div')
      el.marginBottom = '10px'
      return el
    },

    getIndentedPanel: function () {
      var el = document.createElement('div')
      el.classList.add('card-panel')
      return el
    },

    getTable: function () {
      var el = document.createElement('table')
      el.classList.add('striped', 'bordered')
      el.style.marginBottom = '10px'
      return el
    },

    getTableRow: function () {
      return document.createElement('tr')
    },

    getTableHead: function () {
      return document.createElement('thead')
    },

    getTableBody: function () {
      return document.createElement('tbody')
    },

    getTableHeaderCell: function (text) {
      var el = document.createElement('th')
      el.textContent = text
      return el
    },

    getTableCell: function () {
      var el = document.createElement('td')
      return el
    },

    /**
   * Gets the tab holder element.
   *
   * @returns {HTMLElement} The tab holder component.
   * @see https://github.com/Dogfalo/materialize/issues/2542#issuecomment-233458602
   */
    getTabHolder: function () {
      var html = [
        '<div class="col s2">',
        '   <ul class="tabs" style="height: auto; margin-top: 0.82rem; -ms-flex-direction: column; -webkit-flex-direction: column; flex-direction: column; display: -webkit-flex; display: flex;">',
        '   </ul>',
        '</div>',
        '<div class="col s10">',
        '<div>'
      ].join('\n')

      var el = document.createElement('div')
      el.classList.add('row', 'card-panel')
      el.innerHTML = html
      return el
    },

    /**
   * Add specified tab to specified holder element.
   *
   * @param {HTMLElement} holder The tab holder element.
   * @param {HTMLElement} tab The tab to add.
   */
    addTab: function (holder, tab) {
      holder.children[0].children[0].appendChild(tab)
    },

    /**
   * Gets a single tab element.
   *
   * @param {HTMLElement} span The tab's content.
   * @returns {HTMLElement} The tab element.
   * @see https://github.com/Dogfalo/materialize/issues/2542#issuecomment-233458602
   */
    getTab: function (span) {
      var el = document.createElement('li')
      el.classList.add('tab')
      el.style = el.style || {}
      this.applyStyles(el,
        {
          width: '100%',
          textAlign: 'left',
          lineHeight: '24px',
          height: '24px',
          fontSize: '14px',
          cursor: 'pointer'
        }
      )
      el.appendChild(span)
      return el
    },

    /**
   * Marks specified tab as active.
   *
   * @returns {HTMLElement} The tab element.
   * @see https://github.com/Dogfalo/materialize/issues/2542#issuecomment-233458602
   */
    markTabActive: function (tab) {
      tab.style = tab.style || {}
      this.applyStyles(tab,
        {
          width: '100%',
          textAlign: 'left',
          lineHeight: '24px',
          height: '24px',
          fontSize: '14px',
          cursor: 'pointer',
          color: 'rgba(238,110,115,1)',
          transition: 'border-color .5s ease',
          borderRight: '3px solid #424242'
        }
      )
    },

    /**
   * Marks specified tab as inactive.
   *
   * @returns {HTMLElement} The tab element.
   * @see https://github.com/Dogfalo/materialize/issues/2542#issuecomment-233458602
   */
    markTabInactive: function (tab) {
      tab.style = tab.style || {}
      this.applyStyles(tab,
        {
          width: '100%',
          textAlign: 'left',
          lineHeight: '24px',
          height: '24px',
          fontSize: '14px',
          cursor: 'pointer',
          color: 'rgba(238,110,115,0.7)'
        }
      )
    },

    /**
   * Returns the element that holds the tab contents.
   *
   * @param {HTMLElement} tabHolder The full tab holder element.
   * @returns {HTMLElement} The content element inside specified tab holder.
   */
    getTabContentHolder: function (tabHolder) {
      return tabHolder.children[1]
    },

    /**
   * Creates and returns a tab content element.
   *
   * @returns {HTMLElement} The new tab content element.
   */
    getTabContent: function () {
      return document.createElement('div')
    },

    /**
   * Adds an error message to the specified input element.
   *
   * @param {HTMLElement} input The input element that caused the error.
   * @param {string} text The error message.
   */
    addInputError: function (input, text) {
      // Get the parent element. Should most likely be a <div class="input-field" ... />.
      var parent = input.parentNode
      var el

      if (!parent) return

      // Remove any previous error.
      this.removeInputError(input)

      // Append an error message div.
      el = document.createElement('div')
      el.classList.add('error-text', 'red-text')
      el.textContent = text
      parent.appendChild(el)
    },

    /**
   * Removes any error message from the specified input element.
   *
   * @param {HTMLElement} input The input element that previously caused the error.
   */
    removeInputError: function (input) {
      // Get the parent element. Should most likely be a <div class="input-field" ... />.
      var parent = input.parentElement
      var els

      if (!parent) return

      // Remove all elements having class .error-text.
      els = parent.getElementsByClassName('error-text')
      for (var i = 0; i < els.length; i++) { parent.removeChild(els[i]) }
    },

    addTableRowError: function (row) {
    },

    removeTableRowError: function (row) {
    },

    /**
   * Gets a select DOM element.
   *
   * @param {object} options The option values.
   * @return {HTMLElement} The DOM element.
   * @see http://materializecss.com/forms.html#select
   */
    getSelectInput: function (options, multiple) {
      var select = this._super(options)
      select.classList.add('browser-default')
      return select
    },

    /**
   * Gets a textarea DOM element.
   *
   * @returns {HTMLElement} The DOM element.
   * @see http://materializecss.com/forms.html#textarea
   */
    getTextareaInput: function () {
      var el = document.createElement('textarea')
      el.style.marginBottom = '5px'
      el.style.fontSize = '1rem'
      el.style.fontFamily = 'monospace'
      return el
    },

    getCheckbox: function () {
      var el = this.getFormInputField('checkbox')
      el.id = this.createUuid()
      return el
    },

    /**
   * Gets the modal element for displaying Edit JSON and Properties dialogs.
   *
   * @returns {HTMLElement} The modal DOM element.
   * @see http://materializecss.com/cards.html
   */
    getModal: function () {
      var el = document.createElement('div')
      el.classList.add('card-panel', 'z-depth-3')
      el.style.padding = '5px'
      el.style.position = 'absolute'
      el.style.zIndex = '10'
      el.style.display = 'none'
      return el
    },

    /**
   * Creates and returns a RFC4122 version 4 compliant unique id.
   *
   * @returns {string} A GUID.
   * @see https://stackoverflow.com/a/2117523
   */
    createUuid: function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      }
      )
    }

  }
)


/***/ }),

/***/ "./src/themes/spectre.js":
/*!*******************************!*\
  !*** ./src/themes/spectre.js ***!
  \*******************************/
/*! exports provided: spectreTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spectreTheme", function() { return spectreTheme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./src/utilities.js");
// Spectre Theme using Spectre CSS framework. <https://picturepan2.github.io/spectre/index.html>




var spectreTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  // Config options that allows changing various aspects of the output
  options: {
    disable_theme_rules: false, // Disable creation of Inline Style Rules
    label_bold: true, // Element labels bold
    align_bottom: false, // Align elements to bottom of flex container
    object_indent: false, // Indent nested object elements
    object_border: false, // Add border around object elements
    table_border: false, // Add border to array "table" row and cells
    table_zebrastyle: false, // Add "zebra style" to array "table" rows
    input_size: 'normal' // Size of input and select elements. "small", "normal", "large"
  },
  // Custom stylesheet rules. (Does not suppert comma separated selectors)
  //  Will create a stylesheet in document head with the id "theme-spectre" if not exists.
  rules: {
    '*': '--primary-color:#5755d9;--gray-color:#bcc3ce;--light-color:#fff', // CSS variables
    '.slider:focus': 'box-shadow: none', // Remove slider focus shadow
    'h4>label+.btn-group': 'margin-left:1rem', // Add margin between header and top buttons
    '.text-right>button': 'margin-right: 0 !important', // Remove right margin on right-aligned button
    '.text-left>button': 'margin-left: 0 !important', // Remove left margin on left-aligned button
    '.property-selector': 'font-size: .7rem;font-weight: normal; max-height:260px!important;width:395px!important', // Fix fontsize in Properties modal and increase size of modal box
    '.property-selector .form-checkbox': 'margin:0', // Remove checkbox margins in Properties modal
    'textarea': 'width:100%;min-height: 2rem;resize:vertical', // Prevent textarea from being resized horizontally
    'table': 'border-collapse: collapse;', // Remove gap between table element borders
    '.table td': 'padding: .4rem .4rem;', // reduce table padding
    '.mr-5': 'margin-right: 1rem !important;', // margin for checkbox label
    'div[data-schematype]:not([data-schematype="object"])': 'transition:.5s', // Hover on input block (Should be removed in final version)
    'div[data-schematype]:not([data-schematype="object"]):hover': 'background-color: #eee', // Hover on input block (Should be removed in final version)
    '.je-table-border td': 'border: .05rem solid #dadee4 !important', // Option: table_border
    '.btn-info': 'font-size:.5rem;font-weight:bold;height:.8rem;padding:.15rem 0;line-height:.8;margin:.3rem 0 .3rem .1rem;', // Infobutton
    '.je-label+select': 'min-width: 5rem', // Select box for oneOf, anyOf and allOf
    '.je-label': 'font-weight: 600', // Option: label_bold
    '.btn-action.btn-info': 'width: .8rem;', // Infobutton
    '.je-border': 'border:.05rem solid #dadee4', // Option: object_border
    '.je-panel': 'padding:.2rem;margin:.2rem;background-color: rgba(218,222,228,.1)',
    '.je-panel-top': 'padding:.2rem;margin:.2rem;background-color: rgba(218,222,228,.1)',
    '.required:after': 'content: " *";color: red;font:inherit', // Red * after label if field is required
    '.je-align-bottom': 'margin-top: auto', // option: align_bottom
    '.je-desc': 'font-size: smaller;margin: .2rem 0;', // Description
    /*    '.columns': 'border:1px solid rgba(255,0,0,.5);',
    '.columns .columns': 'border:1px solid rgba(0,255,0,.5);', */
    '.columns .container.je-noindent': 'padding-left:0;padding-right:0;', // Option: object_indent
    // Adjustments for Selectize styling
    '.selectize-control.multi .item': 'background: var(--primary-color) !important;',
    // Adjustments for Select2 styling
    '.select2-container--default .select2-selection--single .select2-selection__arrow': 'display: none',
    '.select2-container--default .select2-selection--single': 'border: none;',
    '.select2-container .select2-selection--single .select2-selection__rendered': 'padding: 0; ',
    '.select2-container .select2-search--inline .select2-search__field': 'margin-top: 0;',
    '.select2-container--default.select2-container--focus .select2-selection--multiple': 'border: .05rem solid var(--gray-color);',
    '.select2-container--default .select2-selection--multiple .select2-selection__choice': 'margin:.4rem .2rem .2rem 0;padding:2px 5px;background-color:var(--primary-color);color:var(--light-color)',
    '.select2-container--default .select2-search--inline .select2-search__field': 'line-height: normal;',
    // Adjustment styling for Choices
    '.choices': 'margin-bottom: auto',
    '.choices__list--multiple .choices__item': 'border:none;background-color:var(--primary-color);color:var(--light-color)',
    '.choices[data-type*="select-multiple"] .choices__button': 'border-left:.05rem solid #2826A6',
    '.choices__inner': 'font-size: inherit;min-height: 20px;padding: 4px 7.5px 4px 3.75px',
    '.choices[data-type*="select-one"] .choices__inner': 'padding-bottom: 4px',
    '.choices__list--dropdown .choices__item': 'font-size:inherit'
  },
  // Functions for setting up the grid container, row and columns
  setGridColumnSize: function (el, size, offset) {
    el.classList.add('col-' + size)
    if (offset) el.classList.add('col-mx-auto')
  },
  getGridContainer: function () {
    var el = document.createElement('div')
    el.classList.add('container')
    if (!this.options.object_indent) el.classList.add('je-noindent')
    return el
  },
  getGridRow: function () {
    var el = document.createElement('div')
    el.classList.add('columns')
    return el
  },
  getGridColumn: function () {
    var el = document.createElement('div')
    el.classList.add('column')
    if (this.options.align_bottom) el.classList.add('je-align-bottom')
    return el
  },

  // Used for "type: object" or "type: array" (except if "format: tabs-top")
  getIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('je-panel')
    if (this.options.object_border) el.classList.add('je-border')
    return el
  },

  // Used for "type: array" with "format: tabs-top"
  getTopIndentedPanel: function () {
    var el = document.createElement('div')
    el.classList.add('je-panel-top')
    if (this.options.object_border) el.classList.add('je-border')
    return el
  },

  // Button functions
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    return el
  },
  // Button holder for the buttons
  getButtonHolder: function () {
    var el = this._super()
    el.classList.add('btn-group')
    return el
  },
  getFormButtonHolder: function (buttonAlign) {
    var el = this._super()
    el.classList.remove('btn-group')
    el.classList.add('d-block')
    if (buttonAlign === 'center') el.classList.add('text-center')
    else if (buttonAlign === 'right') el.classList.add('text-right')
    else el.classList.add('text-left')
    return el
  },
  getFormButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('btn', 'btn-primary', 'mx-2', 'my-1')
    if (this.options.input_size !== 'small') el.classList.remove('btn-sm')
    if (this.options.input_size === 'large') el.classList.add('btn-lg')
    return el
  },
  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('btn', 'btn-sm', 'btn-primary', 'mr-2', 'my-1')
    return el
  },

  getHeader: function (text) {
    var el = document.createElement('h4')
    if (typeof text === 'string') {
      el.textContent = text
    } else {
      el.appendChild(text)
    }

    return el
  },

  getFormInputDescription: function (text) {
    var el = this._super(text)
    el.classList.add('je-desc', 'hide-sm')
    return el
  },

  /* Label for all elements except checkbox and radio */
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    if (this.options.label_bold) el.classList.add('je-label')
    return el
  },

  // Checkbox elements
  // ToDo: Rename function names for consistency
  getCheckbox: function () {
    var el = this.getFormInputField('checkbox')
    return el
  },
  getCheckboxLabel: function (text, req) {
    var el = this._super(text, req); var icon = document.createElement('i')
    icon.classList.add('form-icon')
    el.classList.add('form-checkbox', 'mr-5')
    el.insertBefore(icon, el.firstChild)
    return el
  },
  getFormCheckboxControl: function (label, input, compact) {
    label.insertBefore(input, label.firstChild) // Move input into label element
    if (compact) label.classList.add('form-inline')
    return label
  },
  getMultiCheckboxHolder: function (controls, label, description, infoText) {
    console.log('mul')
    return this._super(controls, label, description, infoText)
  },
  // Radio elements
  getFormRadio: function (attributes) {
    var el = this.getFormInputField('radio')
    for (var key in attributes) {
      el.setAttribute(key, attributes[key])
    }
    return el
  },
  getFormRadioLabel: function (text, req) {
    var el = this._super(text, req); var icon = document.createElement('i')
    icon.classList.add('form-icon')
    el.classList.add('form-radio')
    el.insertBefore(icon, el.firstChild)
    return el
  },
  getFormRadioControl: function (label, input, compact) {
    label.insertBefore(input, label.firstChild) // Move input into label element
    if (compact) label.classList.add('form-inline')
    return label
  },

  // Create input field
  getFormInputField: function (type) {
    var el = this._super(type)
    if (['checkbox', 'radio'].indexOf(type) < 0) {
      el.classList.add('form-input')
    }
    return el
  },
  // Create input field for type="range"
  getRangeInput: function (min, max, step) {
    var el = this.getFormInputField('range')
    el.classList.add('slider')
    el.classList.remove('form-input')
    el.setAttribute('oninput', 'this.setAttribute("value", this.value)')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  },
  getRangeControl: function (input, output) {
    var el = this._super(input, output)
    el.classList.add('text-center')
    return el
  },

  // Create select box field
  getSelectInput: function (options, multiple) {
    var el = this._super(options)
    el.classList.add('form-select')
    return el
  },
  // Create textarea field
  getTextareaInput: function () {
    var el = document.createElement('textarea')
    el.classList.add('form-input')
    return el
  },

  getFormControl: function (label, input, description, infoText) {
    var group = document.createElement('div')
    group.classList.add('form-group')

    if (label) {
      if (input.type === 'checkbox') {
        label = this.getFormCheckboxControl(label, input, false)
      }
      label.classList.add('form-label')
      group.appendChild(label)
      if (infoText) group.insertBefore(infoText, group.firstChild)
    }

    if (this.options.input_size === 'small') input.classList.add('input-sm', 'select-sm')
    else if (this.options.input_size === 'large') input.classList.add('input-lg', 'select-lg')
    if (input.type !== 'checkbox') group.appendChild(input)

    if (description) group.appendChild(description)

    return group
  },

  // Create input group (input field with buttons)
  getInputGroup: function (input, buttons) {
    if (!input) return

    var inputGroup = document.createElement('div')
    inputGroup.classList.add('input-group')
    inputGroup.appendChild(input)
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('input-group-btn')
      buttons[i].classList.remove('btn-sm', 'mr-2', 'my-1')
      inputGroup.appendChild(buttons[i])
    }

    return inputGroup
  },

  // Create button for displaying infotext tooltip
  getInfoButton: function (text) {
    var popover = document.createElement('div')
    popover.classList.add('popover', 'popover-left', 'float-right')

    var button = document.createElement('button')
    button.classList.add('btn', 'btn-secondary', 'btn-info', 'btn-action', 's-circle')
    button.setAttribute('tabindex', '-1') // exclude element from tab order
    popover.appendChild(button)

    var icon = document.createTextNode('I')
    button.appendChild(icon)

    var container = document.createElement('div')
    container.classList.add('popover-container')
    popover.appendChild(container)

    var card = document.createElement('div')
    card.classList.add('card')
    container.appendChild(card)

    var cardbody = document.createElement('div')
    cardbody.classList.add('card-body')
    cardbody.innerHTML = text
    card.appendChild(cardbody)

    return popover
  },

  // Functions for rendering array with format: "table"
  getTable: function () {
    var el = this._super()
    el.classList.add('table', 'table-scroll')
    if (this.options.table_border) el.classList.add('je-table-border')
    if (this.options.table_zebrastyle) el.classList.add('table-striped')
    return el
  },

  // Containers for array with format: "tab"
  getTabHolder: function (propertyName) {
    var pName = typeof propertyName === 'undefined' ? '' : propertyName
    var el = document.createElement('div')
    el.classList.add('columns')
    el.innerHTML = '<div class="column col-2"></div><div class="column col-10 content" id="' + pName + '"></div>'
    return el
  },
  // Containers for array with format: "tab-top"
  getTopTabHolder: function (propertyName) {
    var pName = typeof propertyName === 'undefined' ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = '<ul class="tab"></ul><div class="content" id="' + pName + '"></div>'
    return el
  },
  // Tab button for array with format: "tab"
  getTab: function (span, tabId) {
    var el = document.createElement('a')
    el.classList.add('btn', 'btn-secondary', 'btn-block')
    el.id = tabId
    el.innerHTML = span.innerHTML

    return el
  },
  // Tab button for array with format: "tab-top"
  getTopTab: function (span, tabId) {
    var el = document.createElement('li')
    el.id = tabId
    el.classList.add('tab-item')

    // Spectre needs an a tag inside the tab item, not a span
    var a = document.createElement('a')
    a.href = '#'
    a.innerHTML = span.innerHTML
    el.appendChild(a)
    return el
  },
  markTabActive: function (row) {
    row.tab.classList.add('active')
    if (typeof row.rowPane !== 'undefined') row.rowPane.style.display = ''
    else row.container.style.display = ''
  },
  markTabInactive: function (row) {
    row.tab.classList.remove('active')
    if (typeof row.rowPane !== 'undefined') row.rowPane.style.display = 'none'
    else row.container.style.display = 'none'
  },

  afterInputReady: function (input) {
    if (input.localName === 'select') {
      // Selectize adjustments
      if (input.classList.contains('selectized')) {
        var selectized = input.nextSibling
        if (selectized) {
          // Remove Spectre class 'form-select' as this conflicts with Selectize styling
          selectized.classList.remove('form-select')
          Object(_utilities__WEBPACK_IMPORTED_MODULE_1__["$each"])(selectized.querySelectorAll('.form-select'), function (i, el) {
            el.classList.remove('form-select')
          })
        }
      // Select2 ajustments
      } else if (input.classList.contains('select2-hidden-accessible')) {
        var select2 = input.nextSibling
        var single = select2 && select2.querySelector('.select2-selection--single')
        // Add Spectre 'form-select' to single-select2 elements
        if (single) select2.classList.add('form-select')
      }
    }

    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.form-group')
    if (this.closest(input, '.compact')) {
      input.controlgroup.style.marginBottom = 0
    }
  },
  // Controls output of errormessages displayed in form
  addInputError: function (input, text) {
    if (!input.controlgroup) return
    input.controlgroup.classList.add('has-error')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('form-input-hint')
      input.controlgroup.appendChild(input.errmsg)
    }
    input.errmsg.classList.remove('d-hide')
    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.errmsg) return
    input.errmsg.classList.add('d-hide')
    input.controlgroup.classList.remove('has-error')
  }

})


/***/ }),

/***/ "./src/themes/tailwind.js":
/*!********************************!*\
  !*** ./src/themes/tailwind.js ***!
  \********************************/
/*! exports provided: tailwindTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tailwindTheme", function() { return tailwindTheme; });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme */ "./src/theme.js");


var tailwindTheme = _theme__WEBPACK_IMPORTED_MODULE_0__["AbstractTheme"].extend({
  // Config options that allows changing various aspects of the output
  options: {
    disable_theme_rules: false, // Disable creation of Inline Style Rules
    label_bold: false, // Element labels bold
    object_panel_default: true, // Indicates whether to use rules as default or alternate style
    object_indent: true, // Indent nested object elements
    object_border: false, // Add border around object elements
    table_border: false, // Add border to array "table" row and cells
    table_hdiv: false, // Add bottom-border to array "table" cells
    table_zebrastyle: false, // Add "zebra style" to array "table" rows
    input_size: 'small', // Size of input and select elements. "small", "normal", "large"
    enable_compact: false
  },
  // Custom stylesheet rules. (Does not suppert comma separated selectors)
  //  Will create a stylesheet in document head with the id "theme-spectre" if not exists.
  rules: {
    '.slider': '-webkit-appearance: none;-moz-appearance: none;appearance: none;background: transparent;display: block;border: none;height: 1.2rem;width: 100%;',
    '.slider:focus': 'box-shadow: 0 0 0 0 rgba(87, 85, 217, .2); outline: none;',
    '.slider.tooltip:not([data-tooltip])::after': 'content: attr(value);',
    '.slider::-webkit-slider-thumb': '-webkit-appearance: none;background: #F17405;border-radius: 100%;height: .6rem;margin-top: -.25rem;transition: transform .2s;width: .6rem;',
    '.slider:active::-webkit-slider-thumb': 'transform: scale(1.25); outline: none;',
    '.slider::-webkit-slider-runnable-track': 'background: #B2B4B6;border-radius: .1rem;height: .1rem;width: 100%;',

    'a.tooltips': 'position: relative;display: inline;',
    'a.tooltips span': 'position: absolute; white-space: nowrap; width:auto;padding-left:1rem;padding-right:1rem;color: #FFFFFF;background: rgba(56, 56, 56, 0.85);height:1.5rem;line-height: 1.5rem;text-align: center;visibility: hidden;border-radius: 3px;',
    'a.tooltips span:after': "content: '';position: absolute;top: 50%;left: 100%;margin-top: -5px;width: 0; height: 0;border-left: 5px solid rgba(56, 56, 56, 0.85);border-top: 5px solid transparent;border-bottom: 5px solid transparent;",
    'a:hover.tooltips span': 'visibility: visible;opacity: 0.9;font-size:0.8rem;right: 100%;top: 50%;margin-top: -12px;margin-right: 10px;z-index: 999;',

    '.json-editor-btntype-properties+div': 'font-size: .8rem;font-weight: normal;', // Fix fontsize in Properties modal
    textarea: 'width:100%;min-height: 2rem;resize:vertical', // Prevent textarea from being resized horizontally
    table: 'width:100%;border-collapse: collapse;', // Remove gap between table element borders
    '.table td': 'padding: .0rem .0rem;', // reduce table padding
    'div[data-schematype]:not([data-schematype="object"])': 'transition:.5s',
    'div[data-schematype]:not([data-schematype="object"]):hover': 'background-color: #E6F4FE',
    'div[data-schemaid="root"]': 'position: relative;width:inherit;display:inherit;overflow-x: hidden;z-index:10',
    'select[multiple]': 'height:auto;',
    'select[multiple].from-select': 'height:auto;',
    '.je-table-zebra:nth-child(even)': 'background-color: #f2f2f2;',
    '.je-table-border': 'border: 0.5px solid black;',
    '.je-table-hdiv': 'border-bottom: 1px solid black;',
    '.je-border': 'border:.05rem solid #3182CE',
    '.je-panel': 'width:inherit; padding:.2rem;margin:.2rem;background-color: rgba(218,222,228,.1)',
    '.je-panel-top': 'width:100%; padding:.2rem;margin:.2rem;background-color: rgba(218,222,228,.1)',
    '.required:after': 'content: " *";color: red;font:inherit;font-weight: bold;',
    '.je-desc': 'font-size: smaller;margin: .2rem 0;',
    '.container-xl.je-noindent': 'padding-left:0;padding-right:0;',
    '.json-editor-btntype-add': 'color: white; margin:.3rem; padding: 0.3rem .8rem; background-color: #4299E1; box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-webkit-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-moz-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);',
    '.json-editor-btntype-deletelast': 'color: white;margin:.3rem; padding: 0.3rem .8rem; background-color: #E53E3E; box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-webkit-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-moz-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);',
    '.json-editor-btntype-deleteall': 'color: white;margin:.3rem; padding: 0.3rem .8rem; background-color: #000000; box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-webkit-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-moz-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);',
    '.json-editor-btn-save': 'float:right; color: white; margin: 0.3rem; padding: 0.3rem .8rem; background-color: #2B6CB0; box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-webkit-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-moz-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);',
    '.json-editor-btn-back': 'color: white; margin:.3rem; padding: 0.3rem .8rem; background-color: #2B6CB0; box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-webkit-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);-moz-box-shadow: 3px 3px 5px 1px rgba(4,4,4,0.2);',
    '.json-editor-btntype-delete': 'color: #E53E3E; background-color: rgba(218,222,228,.1);margin:.03rem; padding: 0.1rem;',
    '.json-editor-btntype-move': 'color: #000000; background-color: rgba(218,222,228,.1);margin:.03rem; padding: 0.1rem;',
    '.json-editor-btn-collapse': 'padding: 0em .8rem;font-size:1.3rem;color: #E53E3E;background-color: rgba(218,222,228,.1);'
  },

  getGridContainer: function () {
    var el = document.createElement('div')
    el.classList.add('flex', 'flex-col', 'w-full')
    if (!this.options.object_indent) el.classList.add('je-noindent')
    return el
  },
  getGridRow: function () {
    var el = document.createElement('div')
    el.classList.add('flex', 'flex-wrap', 'w-full')
    return el
  },
  getGridColumn: function () {
    var el = document.createElement('div')
    el.classList.add('flex', 'flex-col')
    return el
  },
  setGridColumnSize: function (el, size, offset) {
    if (size > 0 && size < 12) { el.classList.add('w-' + size + '/12', 'px-1') } else el.classList.add('w-full', 'px-1')

    if (offset) el.style.marginLeft = (100 / 12) * offset + '%'
  },
  getIndentedPanel: function () {
    var el = document.createElement('div')
    if (this.options.object_panel_default) { el.classList.add('w-full', 'p-1') } else { el.classList.add('relative', 'flex', 'flex-col', 'rounded', 'break-words', 'border', 'bg-white', 'border-0', 'border-blue-400', 'p-1', 'shadow-md') }
    if (this.options.object_border) el.classList.add('je-border')
    return el
  },
  // Used for "type: array" with "format: tabs-top"
  getTopIndentedPanel: function () {
    var el = document.createElement('div')
    if (this.options.object_panel_default) { el.classList.add('w-full', 'm-2') } else { el.classList.add('relative', 'flex', 'flex-col', 'rounded', 'break-words', 'border', 'bg-white', 'border-0', 'border-blue-400', 'p-1', 'shadow-md') }
    if (this.options.object_border) el.classList.add('je-border')
    return el
  },
  getTitle: function () {
    return this.schema.title
  },
  getSelectInput: function (options, multiple) {
    var el = this._super(options)
    if (multiple) el.classList.add('form-multiselect', 'block', 'py-0', 'h-auto', 'w-full', 'px-1', 'text-sm', 'text-black', 'leading-normal', 'bg-white', 'border', 'border-grey', 'rounded')
    else el.classList.add('form-select', 'block', 'py-0', 'h-6', 'w-full', 'px-1', 'text-sm', 'text-black', 'leading-normal', 'bg-white', 'border', 'border-grey', 'rounded')
    if (this.options.enable_compact) el.classList.add('compact')
    return el
  },
  afterInputReady: function (input) {
    if (input.controlgroup) return
    input.controlgroup = this.closest(input, '.form-group')
    if (this.closest(input, '.compact')) {
      input.controlgroup.style.marginBottom = 0
    }
  },
  getTextareaInput: function () {
    var el = this._super()
    el.classList.add('block', 'w-full', 'px-1', 'text-sm', 'leading-normal', 'bg-white', 'text-black', 'border', 'border-grey', 'rounded')
    if (this.options.enable_compact) el.classList.add('compact')
    el.style.height = 0
    return el
  },
  // Create input field for type="range"
  getRangeInput: function (min, max, step) {
    var el = this.getFormInputField('range')
    el.classList.add('slider')
    if (this.options.enable_compact) el.classList.add('compact')
    el.setAttribute('oninput', 'this.setAttribute("value", this.value)')
    el.setAttribute('min', min)
    el.setAttribute('max', max)
    el.setAttribute('step', step)
    return el
  },
  getRangeControl: function (input, output) {
    var el = this._super(input, output)
    el.classList.add('text-center', 'text-black')
    return el
  },
  // Checkbox elements
  getCheckbox: function () {
    var el = this.getFormInputField('checkbox')
    el.classList.add('form-checkbox', 'text-red-600')
    return el
  },
  getCheckboxLabel: function (text, req) {
    var el = this._super(text, req)
    el.classList.add('inline-flex', 'items-center')
    return el
  },
  getFormCheckboxControl: function (label, input, compact) {
    label.insertBefore(input, label.firstChild) // Move input into label element
    if (compact) label.classList.add('inline-flex flex-row')
    return label
  },
  getMultiCheckboxHolder: function (controls, label, description, infoText) {
    var el = this._super(controls, label, description, infoText)
    el.classList.add('inline-flex', 'flex-col')
    return el
  },
  // Radio elements
  getFormRadio: function (attributes) {
    var el = this.getFormInputField('radio')
    el.classList.add('form-radio', 'text-red-600')
    for (var key in attributes) {
      el.setAttribute(key, attributes[key])
    }
    return el
  },
  getFormRadioLabel: function (text, req) {
    var el = this._super(text, req)
    el.classList.add('inline-flex', 'items-center', 'mr-2')
    return el
  },
  getFormRadioControl: function (label, input, compact) {
    label.insertBefore(input, label.firstChild) // Move input into label element
    if (compact) label.classList.add('form-radio')
    return label
  },
  getRadioHolder: function (schema, controls, label, description, infoText) {
    var el = this._super(controls, label, description, infoText)
    if (schema.options.layout === 'h') el.classList.add('inline-flex', 'flex-row')
    else el.classList.add('inline-flex', 'flex-col')
    return el
  },
  getFormInputLabel: function (text, req) {
    var el = this._super(text, req)
    if (this.options.label_bold) el.classList.add('font-bold')
    else el.classList.add('required')
    return el
  },
  getFormInputField: function (type) {
    var el = this._super(type)
    if (['checkbox', 'radio'].indexOf(type) < 0) el.classList.add('block', 'w-full', 'px-1', 'text-black', 'text-sm', 'leading-normal', 'bg-white', 'border', 'border-grey', 'rounded')
    if (this.options.enable_compact) el.classList.add('compact')
    return el
  },
  getFormInputDescription: function (text) {
    var el = document.createElement('p')
    el.classList.add('block', 'mt-1', 'text-xs')
    if (window.DOMPurify) el.innerHTML = window.DOMPurify.sanitize(text)
    else el.textContent = this.cleanText(text)
    return el
  },
  getFormControl: function (label, input, description, infoText) {
    var group = document.createElement('div')
    group.classList.add('form-group', 'mb-1', 'w-full')
    if (label) {
      label.classList.add('text-xs')

      if (input.type === 'checkbox') {
        input.classList.add('form-checkbox', 'text-xs', 'text-red-600', 'mr-1')
        label.classList.add('items-center', 'flex')
        label = this.getFormCheckboxControl(label, input, false, infoText)
      }

      if (input.type === 'radio') {
        input.classList.add('form-radio', 'text-red-600', 'mr-1')
        label.classList.add('items-center', 'flex')
        label = this.getFormRadioControl(label, input, false, infoText)
      }
      group.appendChild(label)

      if (['checkbox', 'radio'].indexOf(input.type) < 0 && infoText) group.appendChild(infoText)
    }
    if (['checkbox', 'radio'].indexOf(input.type) < 0) {
      if (this.options.input_size === 'small') input.classList.add('text-xs')
      else if (this.options.input_size === 'normal') input.classList.add('text-base')
      else if (this.options.input_size === 'large') input.classList.add('text-xl')
      group.appendChild(input)
    }

    if (description) group.appendChild(description)

    return group
  },
  getHeaderButtonHolder: function () {
    var el = this.getButtonHolder()
    el.classList.add('text-sm')
    return el
  },
  getButtonHolder: function () {
    var el = document.createElement('div')
    el.classList.add('flex', 'relative', 'inline-flex', 'align-middle')
    return el
  },
  getButton: function (text, icon, title) {
    var el = this._super(text, icon, title)
    el.classList.add('inline-block', 'align-middle', 'text-center', 'text-sm', 'bg-blue-700', 'text-white', 'py-1', 'pr-1', 'm-2', 'shadow', 'select-none', 'whitespace-no-wrap', 'rounded')
    return el
  },
  // Button for displaying infotext tooltip
  getInfoButton: function (text) {
    var tooltip = document.createElement('a')
    tooltip.classList.add('tooltips', 'float-right')
    tooltip.innerHTML = 'ⓘ'
    var span = document.createElement('span')
    span.innerHTML = text
    tooltip.appendChild(span)

    return tooltip
  },
  getTable: function () {
    var el = this._super()
    if (this.options.table_border) el.classList.add('je-table-border')
    else el.classList.add('table', 'border', 'p-0')
    return el
  },
  getTableRow: function () {
    var el = this._super()
    if (this.options.table_border) el.classList.add('je-table-border')
    if (this.options.table_zebrastyle) el.classList.add('je-table-zebra')
    return el
  },
  getTableHeaderCell: function (text) {
    var el = this._super(text)
    if (this.options.table_border) el.classList.add('je-table-border')
    else if (this.options.table_hdiv) el.classList.add('je-table-hdiv')
    else el.classList.add('text-xs', 'border', 'p-0', 'm-0')
    return el
  },
  getTableCell: function () {
    var el = this._super()
    if (this.options.table_border) el.classList.add('je-table-border')
    else if (this.options.table_hdiv) el.classList.add('je-table-hdiv')
    else el.classList.add('border-0', 'p-0', 'm-0')
    return el
  },
  addInputError: function (input, text) {
    if (!input.controlgroup) return
    input.controlgroup.classList.add('has-error')
    input.classList.add('bg-red-600')
    if (!input.errmsg) {
      input.errmsg = document.createElement('p')
      input.errmsg.classList.add('block', 'mt-1', 'text-xs', 'text-red')
      input.controlgroup.appendChild(input.errmsg)
    } else {
      input.errmsg.style.display = ''
    }
    input.errmsg.textContent = text
  },
  removeInputError: function (input) {
    if (!input.errmsg) return
    input.errmsg.style.display = 'none'
    input.classList.remove('bg-red-600')
    input.controlgroup.classList.remove('has-error')
  },
  getTabHolder: function (propertyName) {
    var el = document.createElement('div')
    var pName = typeof propertyName === 'undefined' ? '' : propertyName
    el.innerHTML = "<div class='w-2/12' id='" + pName + "'><ul class='list-reset pl-0 mb-0'></ul></div><div class='w-10/12' id='" + pName + "'></div>"
    el.classList.add('flex')
    return el
  },
  addTab: function (holder, tab) {
    holder.children[0].children[0].appendChild(tab)
  },
  getTopTabHolder: function (propertyName) {
    var pName = typeof propertyName === 'undefined' ? '' : propertyName
    var el = document.createElement('div')
    el.innerHTML = "<ul class='nav-tabs flex list-reset pl-0 mb-0 border-b border-grey-light' id='" + pName + "'></ul><div class='p-6 block' id='" + pName + "'></div>"
    return el
  },
  getTab: function (text, tabId) {
    var liel = document.createElement('li')
    liel.classList.add('nav-item', 'flex-col', 'text-center', 'text-white', 'bg-blue-500', 'shadow-md', 'border', 'p-2', 'mb-2', 'mr-2', 'hover:bg-blue-400', 'rounded')
    var ael = document.createElement('a')
    ael.classList.add('nav-link', 'text-center')
    ael.setAttribute('href', '#' + tabId)
    ael.setAttribute('data-toggle', 'tab')
    ael.appendChild(text)
    liel.appendChild(ael)
    return liel
  },
  getTopTab: function (text, tabId) {
    var el = document.createElement('li')
    el.classList.add('nav-item', 'flex', 'border-l', 'border-t', 'border-r')
    var a = document.createElement('a')
    a.classList.add('nav-link', '-mb-px', 'flex-row', 'text-center', 'bg-white', 'p-2', 'hover:bg-blue-400', 'rounded-t')
    a.setAttribute('href', '#' + tabId)
    a.setAttribute('data-toggle', 'tab')
    a.appendChild(text)
    el.appendChild(a)
    return el
  },
  getTabContent: function () {
    var el = document.createElement('div')
    el.setAttribute('role', 'tabpanel')
    return el
  },
  getTopTabContent: function () {
    var el = document.createElement('div')
    el.setAttribute('role', 'tabpanel')
    return el
  },
  markTabActive: function (row) {
    row.tab.firstChild.classList.add('block')
    if (row.tab.firstChild.classList.contains('border-b') === true) {
      row.tab.firstChild.classList.add('border-b-0')
      row.tab.firstChild.classList.remove('border-b')
    } else {
      row.tab.firstChild.classList.add('border-b-0')
    }
    if (row.container.classList.contains('hidden') === true) {
      row.container.classList.remove('hidden')
      row.container.classList.add('block')
    } else {
      row.container.classList.add('block')
    }
  },
  markTabInactive: function (row) {
    if (row.tab.firstChild.classList.contains('border-b-0') === true) {
      row.tab.firstChild.classList.add('border-b')
      row.tab.firstChild.classList.remove('border-b-0')
    } else {
      row.tab.firstChild.classList.add('border-b')
    }
    if (row.container.classList.contains('block') === true) {
      row.container.classList.remove('block')
      row.container.classList.add('hidden')
    }
  },
  getProgressBar: function () {
    var min = 0
    var max = 100
    var start = 0

    var container = document.createElement('div')
    container.classList.add('progress')

    var bar = document.createElement('div')
    bar.classList.add('bg-blue', 'leading-none', 'py-1', 'text-xs', 'text-center', 'text-white')
    bar.setAttribute('role', 'progressbar')
    bar.setAttribute('aria-valuenow', start)
    bar.setAttribute('aria-valuemin', min)
    bar.setAttribute('aria-valuenax', max)
    bar.innerHTML = start + '%'
    container.appendChild(bar)

    return container
  },
  updateProgressBar: function (progressBar, progress) {
    if (!progressBar) return

    var bar = progressBar.firstChild
    var percentage = progress + '%'
    bar.setAttribute('aria-valuenow', progress)
    bar.style.width = percentage
    bar.innerHTML = percentage
  },
  updateProgressBarUnknown: function (progressBar) {
    if (!progressBar) return

    var bar = progressBar.firstChild
    progressBar.classList.add('progress', 'bg-blue', 'leading-none', 'py-1', 'text-xs', 'text-center', 'text-white', 'block')
    bar.removeAttribute('aria-valuenow')
    bar.classList.add('w-full')
    bar.innerHTML = ''
  },
  getInputGroup: function (input, buttons) {
    if (!input) return

    var inputGroupContainer = document.createElement('div')
    inputGroupContainer.classList.add('relative', 'items-stretch', 'w-full')
    inputGroupContainer.appendChild(input)

    var inputGroup = document.createElement('div')
    inputGroup.classList.add('-mr-1')
    inputGroupContainer.appendChild(inputGroup)

    for (var i = 0; i < buttons.length; i++) {
      inputGroup.appendChild(buttons[i])
    }

    return inputGroupContainer
  }
})


/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: $isplainobject, $extend, $each, $trigger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$isplainobject", function() { return $isplainobject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$extend", function() { return $extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$each", function() { return $each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$trigger", function() { return $trigger; });
/**
 * Taken from jQuery 2.1.3
 *
 * @param obj
 * @returns {boolean}
 */
var $isplainobject = function (obj) {
  // Not plain objects:
  // - Any object or value whose internal [[Class]] property is not "[object Object]"
  // - DOM nodes
  // - window
  if (typeof obj !== 'object' || obj.nodeType || (obj !== null && obj === obj.window)) {
    return false
  }

  if (obj.constructor && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
    return false
  }

  // If the function hasn't returned already, we're confident that
  // |obj| is a plain object, created by {} or constructed with new Object
  return true
}

var $extend = function (destination) {
  var source, i, property
  for (i = 1; i < arguments.length; i++) {
    source = arguments[i]
    for (property in source) {
      if (!source.hasOwnProperty(property)) continue
      if (source[property] && $isplainobject(source[property])) {
        if (!destination.hasOwnProperty(property)) destination[property] = {}
        $extend(destination[property], source[property])
      } else {
        destination[property] = source[property]
      }
    }
  }
  return destination
}

var $each = function (obj, callback) {
  if (!obj || typeof obj !== 'object') return
  var i
  if (Array.isArray(obj) || (typeof obj.length === 'number' && obj.length > 0 && (obj.length - 1) in obj)) {
    for (i = 0; i < obj.length; i++) {
      if (callback(i, obj[i]) === false) return
    }
  } else {
    if (Object.keys) {
      var keys = Object.keys(obj)
      for (i = 0; i < keys.length; i++) {
        if (callback(keys[i], obj[keys[i]]) === false) return
      }
    } else {
      for (i in obj) {
        if (!obj.hasOwnProperty(i)) continue
        if (callback(i, obj[i]) === false) return
      }
    }
  }
}

var $trigger = function (el, event) {
  var e = document.createEvent('HTMLEvents')
  e.initEvent(event, true, true)
  el.dispatchEvent(e)
}


/***/ }),

/***/ "./src/validator.js":
/*!**************************!*\
  !*** ./src/validator.js ***!
  \**************************/
/*! exports provided: Validator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/class.js");
/* harmony import */ var _validators_ip_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validators/ip-validator */ "./src/validators/ip-validator.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");




const Validator = _class__WEBPACK_IMPORTED_MODULE_0__["Class"].extend({
  init: function (jsoneditor, schema, options, defaults) {
    this.jsoneditor = jsoneditor
    this.schema = schema || this.jsoneditor.schema
    this.options = options || {}
    this.translate = this.jsoneditor.translate || defaults.translate
    this.defaults = defaults
  },
  fitTest: function (value, givenSchema, weight) {
    weight = typeof weight === 'undefined' ? 10000000 : weight
    var matchedProperties = 0
    var extraProperties = 0
    if (typeof value === 'object' && value !== null) {
      // Work on a copy of the schema
      var schema = typeof givenSchema === 'undefined' ? Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, this.jsoneditor.expandRefs(this.schema)) : givenSchema

      for (var i in schema.properties) {
        if (!schema.properties.hasOwnProperty(i)) {
          extraProperties += weight
          continue
        }
        if (typeof value[i] === 'object' && typeof schema.properties[i] === 'object' && typeof schema.properties[i].properties === 'object') {
          var result = this.fitTest(value[i], schema.properties[i], weight / 100)
          matchedProperties += result.match
          extraProperties += result.extra
        }
        if (typeof value[i] !== 'undefined') {
          matchedProperties += weight
        }
      }
    }
    return {match: matchedProperties, extra: extraProperties}
  },
  validate: function (value) {
    return this._validateSchema(this.schema, value)
  },
  _validateSchema: function (schema, value, path) {
    var self = this
    var errors = []
    var valid, i, j
    var stringified = JSON.stringify(value)

    path = path || 'root'

    // Work on a copy of the schema
    schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, this.jsoneditor.expandRefs(schema))

    /*
     * Type Agnostic Validation
     */

    // Version 3 `required` and `required_by_default`
    if (typeof value === 'undefined') {
      if ((typeof schema.required !== 'undefined' && schema.required === true) || (typeof schema.required === 'undefined' && this.jsoneditor.options.required_by_default === true)) {
        errors.push({
          path: path,
          property: 'required',
          message: this.translate('error_notset')
        })
      }

      return errors
    }

    // `enum`
    if (schema['enum']) {
      valid = false
      for (i = 0; i < schema['enum'].length; i++) {
        if (stringified === JSON.stringify(schema['enum'][i])) valid = true
      }
      if (!valid) {
        errors.push({
          path: path,
          property: 'enum',
          message: this.translate('error_enum')
        })
      }
    }

    // `extends` (version 3)
    if (schema['extends']) {
      for (i = 0; i < schema['extends'].length; i++) {
        errors = errors.concat(this._validateSchema(schema['extends'][i], value, path))
      }
    }

    // `allOf`
    if (schema.allOf) {
      for (i = 0; i < schema.allOf.length; i++) {
        errors = errors.concat(this._validateSchema(schema.allOf[i], value, path))
      }
    }

    // `anyOf`
    if (schema.anyOf) {
      valid = false
      for (i = 0; i < schema.anyOf.length; i++) {
        if (!this._validateSchema(schema.anyOf[i], value, path).length) {
          valid = true
          break
        }
      }
      if (!valid) {
        errors.push({
          path: path,
          property: 'anyOf',
          message: this.translate('error_anyOf')
        })
      }
    }

    // `oneOf`
    if (schema.oneOf) {
      valid = 0
      var oneofErrors = []
      for (i = 0; i < schema.oneOf.length; i++) {
        // Set the error paths to be path.oneOf[i].rest.of.path
        var tmp = this._validateSchema(schema.oneOf[i], value, path)
        if (!tmp.length) {
          valid++
        }

        for (j = 0; j < tmp.length; j++) {
          tmp[j].path = path + '.oneOf[' + i + ']' + tmp[j].path.substr(path.length)
        }
        oneofErrors = oneofErrors.concat(tmp)
      }
      if (valid !== 1) {
        errors.push({
          path: path,
          property: 'oneOf',
          message: this.translate('error_oneOf', [valid])
        })
        errors = errors.concat(oneofErrors)
      }
    }

    // `not`
    if (schema.not) {
      if (!this._validateSchema(schema.not, value, path).length) {
        errors.push({
          path: path,
          property: 'not',
          message: this.translate('error_not')
        })
      }
    }

    // `type` (both Version 3 and Version 4 support)
    if (schema.type) {
      // Union type
      if (Array.isArray(schema.type)) {
        valid = false
        for (i = 0; i < schema.type.length; i++) {
          if (this._checkType(schema.type[i], value)) {
            valid = true
            break
          }
        }
        if (!valid) {
          errors.push({
            path: path,
            property: 'type',
            message: this.translate('error_type_union')
          })
        }
      } else {
      // Simple type
        if (['date', 'time', 'datetime-local'].indexOf(schema.format) !== -1 && schema.type === 'integer') {
          // Hack to get validator to validate as string even if value is integer
          // As validation of 'date', 'time', 'datetime-local' is done in separate validator
          if (!this._checkType('string', '' + value)) {
            errors.push({
              path: path,
              property: 'type',
              message: this.translate('error_type', [schema.format])
            })
          }
        } else if (!this._checkType(schema.type, value)) {
          errors.push({
            path: path,
            property: 'type',
            message: this.translate('error_type', [schema.type])
          })
        }
      }
    }

    // `disallow` (version 3)
    if (schema.disallow) {
      // Union type
      if (Array.isArray(schema.disallow)) {
        valid = true
        for (i = 0; i < schema.disallow.length; i++) {
          if (this._checkType(schema.disallow[i], value)) {
            valid = false
            break
          }
        }
        if (!valid) {
          errors.push({
            path: path,
            property: 'disallow',
            message: this.translate('error_disallow_union')
          })
        }
      } else {
        // Simple type
        if (this._checkType(schema.disallow, value)) {
          errors.push({
            path: path,
            property: 'disallow',
            message: this.translate('error_disallow', [schema.disallow])
          })
        }
      }
    }

    /*
     * Type Specific Validation
     */

    // Number Specific Validation
    if (typeof value === 'number') {
      // `multipleOf` and `divisibleBy`
      if (schema.multipleOf || schema.divisibleBy) {
        var divisor = schema.multipleOf || schema.divisibleBy
        // Vanilla JS, prone to floating point rounding errors (e.g. 1.14 / .01 == 113.99999)
        valid = (value / divisor === Math.floor(value / divisor))

        // Use math.js is available
        if (window.math) {
          valid = window.math.mod(window.math.bignumber(value), window.math.bignumber(divisor)).equals(0)
        } else if (window.Decimal) {
          // Use decimal.js is available
          valid = (new window.Decimal(value)).mod(new window.Decimal(divisor)).equals(0)
        }

        if (!valid) {
          errors.push({
            path: path,
            property: schema.multipleOf ? 'multipleOf' : 'divisibleBy',
            message: this.translate('error_multipleOf', [divisor])
          })
        }
      }

      // `maximum`
      if (schema.hasOwnProperty('maximum')) {
        // Vanilla JS, prone to floating point rounding errors (e.g. .999999999999999 == 1)
        valid = schema.exclusiveMaximum ? (value < schema.maximum) : (value <= schema.maximum)

        // Use math.js is available
        if (window.math) {
          valid = window.math[schema.exclusiveMaximum ? 'smaller' : 'smallerEq'](
            window.math.bignumber(value),
            window.math.bignumber(schema.maximum)
          )
        } else if (window.Decimal) {
          // Use Decimal.js if available
          valid = (new window.Decimal(value))[schema.exclusiveMaximum ? 'lt' : 'lte'](new window.Decimal(schema.maximum))
        }

        if (!valid) {
          errors.push({
            path: path,
            property: 'maximum',
            message: this.translate(
              (schema.exclusiveMaximum ? 'error_maximum_excl' : 'error_maximum_incl'),
              [schema.maximum]
            )
          })
        }
      }

      // `minimum`
      if (schema.hasOwnProperty('minimum')) {
        // Vanilla JS, prone to floating point rounding errors (e.g. .999999999999999 == 1)
        valid = schema.exclusiveMinimum ? (value > schema.minimum) : (value >= schema.minimum)

        // Use math.js is available
        if (window.math) {
          valid = window.math[schema.exclusiveMinimum ? 'larger' : 'largerEq'](
            window.math.bignumber(value),
            window.math.bignumber(schema.minimum)
          )
        // Use Decimal.js if available
        } else if (window.Decimal) {
          valid = (new window.Decimal(value))[schema.exclusiveMinimum ? 'gt' : 'gte'](new window.Decimal(schema.minimum))
        }

        if (!valid) {
          errors.push({
            path: path,
            property: 'minimum',
            message: this.translate(
              (schema.exclusiveMinimum ? 'error_minimum_excl' : 'error_minimum_incl'),
              [schema.minimum]
            )
          })
        }
      }
    // String specific validation
    } else if (typeof value === 'string') {
      // `maxLength`
      if (schema.maxLength) {
        if ((value + '').length > schema.maxLength) {
          errors.push({
            path: path,
            property: 'maxLength',
            message: this.translate('error_maxLength', [schema.maxLength])
          })
        }
      }

      // `minLength`
      if (schema.minLength) {
        if ((value + '').length < schema.minLength) {
          errors.push({
            path: path,
            property: 'minLength',
            message: this.translate((schema.minLength === 1 ? 'error_notempty' : 'error_minLength'), [schema.minLength])
          })
        }
      }

      // `pattern`
      if (schema.pattern) {
        if (!(new RegExp(schema.pattern)).test(value)) {
          errors.push({
            path: path,
            property: 'pattern',
            message: (schema.options && schema.options.patternmessage) ? schema.options.patternmessage : this.translate('error_pattern', [schema.pattern])
          })
        }
      }
    // Array specific validation
    } else if (typeof value === 'object' && value !== null && Array.isArray(value)) {
      // `items` and `additionalItems`
      if (schema.items) {
        // `items` is an array
        if (Array.isArray(schema.items)) {
          for (i = 0; i < value.length; i++) {
            // If this item has a specific schema tied to it
            // Validate against it
            if (schema.items[i]) {
              errors = errors.concat(this._validateSchema(schema.items[i], value[i], path + '.' + i))
            // If all additional items are allowed
            } else if (schema.additionalItems === true) {
              break
            // If additional items is a schema
            // TODO: Incompatibility between version 3 and 4 of the spec
            } else if (schema.additionalItems) {
              errors = errors.concat(this._validateSchema(schema.additionalItems, value[i], path + '.' + i))
            // If no additional items are allowed
            } else if (schema.additionalItems === false) {
              errors.push({
                path: path,
                property: 'additionalItems',
                message: this.translate('error_additionalItems')
              })
              break
            // Default for `additionalItems` is an empty schema
            } else {
              break
            }
          }
        // `items` is a schema
        } else {
          // Each item in the array must validate against the schema
          for (i = 0; i < value.length; i++) {
            errors = errors.concat(this._validateSchema(schema.items, value[i], path + '.' + i))
          }
        }
      }

      // `maxItems`
      if (schema.maxItems) {
        if (value.length > schema.maxItems) {
          errors.push({
            path: path,
            property: 'maxItems',
            message: this.translate('error_maxItems', [schema.maxItems])
          })
        }
      }

      // `minItems`
      if (schema.minItems) {
        if (value.length < schema.minItems) {
          errors.push({
            path: path,
            property: 'minItems',
            message: this.translate('error_minItems', [schema.minItems])
          })
        }
      }

      // `uniqueItems`
      if (schema.uniqueItems) {
        var seen = {}
        for (i = 0; i < value.length; i++) {
          valid = JSON.stringify(value[i])
          if (seen[valid]) {
            errors.push({
              path: path,
              property: 'uniqueItems',
              message: this.translate('error_uniqueItems')
            })
            break
          }
          seen[valid] = true
        }
      }
    // Object specific validation
    } else if (typeof value === 'object' && value !== null) {
      // `maxProperties`
      if (schema.maxProperties) {
        valid = 0
        for (i in value) {
          if (!value.hasOwnProperty(i)) continue
          valid++
        }
        if (valid > schema.maxProperties) {
          errors.push({
            path: path,
            property: 'maxProperties',
            message: this.translate('error_maxProperties', [schema.maxProperties])
          })
        }
      }

      // `minProperties`
      if (schema.minProperties) {
        valid = 0
        for (i in value) {
          if (!value.hasOwnProperty(i)) continue
          valid++
        }
        if (valid < schema.minProperties) {
          errors.push({
            path: path,
            property: 'minProperties',
            message: this.translate('error_minProperties', [schema.minProperties])
          })
        }
      }

      // Version 4 `required`
      if (typeof schema.required !== 'undefined' && Array.isArray(schema.required)) {
        for (i = 0; i < schema.required.length; i++) {
          if (typeof value[schema.required[i]] === 'undefined') {
            var editor = this.jsoneditor.getEditor(path + '.' + schema.required[i])
            // Ignore required error if editor is of type "button" or "info"
            if (editor && ['button', 'info'].indexOf(editor.schema.format || editor.schema.type) !== -1) continue
            errors.push({
              path: path,
              property: 'required',
              message: this.translate('error_required', [schema.required[i]])
            })
          }
        }
      }

      // `properties`
      var validatedProperties = {}
      for (i in schema.properties) {
        if (!schema.properties.hasOwnProperty(i)) continue
        validatedProperties[i] = true
        errors = errors.concat(this._validateSchema(schema.properties[i], value[i], path + '.' + i))
      }

      // `patternProperties`
      if (schema.patternProperties) {
        for (i in schema.patternProperties) {
          if (!schema.patternProperties.hasOwnProperty(i)) continue
          var regex = new RegExp(i)

          // Check which properties match
          for (j in value) {
            if (!value.hasOwnProperty(j)) continue
            if (regex.test(j)) {
              validatedProperties[j] = true
              errors = errors.concat(this._validateSchema(schema.patternProperties[i], value[j], path + '.' + j))
            }
          }
        }
      }

      // The no_additional_properties option currently doesn't work with extended schemas that use oneOf or anyOf
      if (typeof schema.additionalProperties === 'undefined' && this.jsoneditor.options.no_additional_properties && !schema.oneOf && !schema.anyOf) {
        schema.additionalProperties = false
      }

      // `additionalProperties`
      if (typeof schema.additionalProperties !== 'undefined') {
        for (i in value) {
          if (!value.hasOwnProperty(i)) continue
          if (!validatedProperties[i]) {
            // No extra properties allowed
            if (!schema.additionalProperties) {
              errors.push({
                path: path,
                property: 'additionalProperties',
                message: this.translate('error_additional_properties', [i])
              })
              break
            // Allowed
            } else if (schema.additionalProperties === true) {
              break
            // Must match schema
            // TODO: incompatibility between version 3 and 4 of the spec
            } else {
              errors = errors.concat(this._validateSchema(schema.additionalProperties, value[i], path + '.' + i))
            }
          }
        }
      }

      // `dependencies`
      if (schema.dependencies) {
        for (i in schema.dependencies) {
          if (!schema.dependencies.hasOwnProperty(i)) continue

          // Doesn't need to meet the dependency
          if (typeof value[i] === 'undefined') continue

          // Property dependency
          if (Array.isArray(schema.dependencies[i])) {
            for (j = 0; j < schema.dependencies[i].length; j++) {
              if (typeof value[schema.dependencies[i][j]] === 'undefined') {
                errors.push({
                  path: path,
                  property: 'dependencies',
                  message: this.translate('error_dependency', [schema.dependencies[i][j]])
                })
              }
            }
          // Schema dependency
          } else {
            errors = errors.concat(this._validateSchema(schema.dependencies[i], value, path))
          }
        }
      }
    }

    if (schema.links) {
      for (var m = 0; m < schema.links.length; m++) {
        if (schema.links[m].rel && schema.links[m].rel.toLowerCase() === 'describedby') {
          var href = schema.links[m].href
          var data = this.jsoneditor.root.getValue()
          // var template = new UriTemplate(href); //preprocessURI(href));
          // var ref = template.fillFromObject(data);
          var template = this.jsoneditor.compileTemplate(href, this.jsoneditor.template)
          var ref = document.location.origin + document.location.pathname + template(data)

          schema.links = schema.links.slice(0, m).concat(schema.links.slice(m + 1))

          schema = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$extend"])({}, schema, this.jsoneditor.refs[ref])

          errors = errors.concat(this._validateSchema(schema, value, path, this.translate))
        }
      }
    }

    // date, time and datetime-local validation
    if (['date', 'time', 'datetime-local'].indexOf(schema.format) !== -1) {
      var validatorRx = {
        'date': /^(\d{4}\D\d{2}\D\d{2})?$/,
        'time': /^(\d{2}:\d{2}(?::\d{2})?)?$/,
        'datetime-local': /^(\d{4}\D\d{2}\D\d{2}[ T]\d{2}:\d{2}(?::\d{2})?)?$/
      }
      var format = {
        'date': '"YYYY-MM-DD"',
        'time': '"HH:MM"',
        'datetime-local': '"YYYY-MM-DD HH:MM"'
      }

      var ed = this.jsoneditor.getEditor(path)
      var dateFormat = (ed && ed.flatpickr) ? ed.flatpickr.config.dateFormat : format[schema.format]

      if (schema.type === 'integer') {
        // The value is a timestamp
        if (value * 1 < 1) {
          // If value is less than 1, then it's an invalid epoch date before 00:00:00 UTC Thursday, 1 January 1970
          errors.push({
            path: path,
            property: 'format',
            message: this.translate('error_invalid_epoch')
          })
        } else if (value !== Math.abs(parseInt(value))) {
          // not much to check for, so we assume value is ok if it's a positive number
          errors.push({
            path: path,
            property: 'format',
            message: this.translate('error_' + schema.format.replace(/-/g, '_'), [dateFormat])
          })
        }
      } else if (!ed || !ed.flatpickr) {
        // Standard string input, without flatpickr
        if (!validatorRx[schema.format].test(value)) {
          errors.push({
            path: path,
            property: 'format',
            message: this.translate('error_' + schema.format.replace(/-/g, '_'), [dateFormat])
          })
        }
      } else if (ed) {
        // Flatpickr validation
        if (value !== '') {
          var compareValue
          if (ed.flatpickr.config.mode !== 'single') {
            var seperator = ed.flatpickr.config.mode === 'range' ? ed.flatpickr.l10n.rangeSeparator : ', '
            var selectedDates = ed.flatpickr.selectedDates.map(function (val) {
              return ed.flatpickr.formatDate(val, ed.flatpickr.config.dateFormat)
            })
            compareValue = selectedDates.join(seperator)
          }

          try {
            if (compareValue) {
              // Not the best validation method, but range and multiple mode are special
              // Optimal solution would be if it is possible to change the return format from string/integer to array
              if (compareValue !== value) throw new Error(ed.flatpickr.config.mode + ' mismatch')
            } else if (ed.flatpickr.formatDate(ed.flatpickr.parseDate(value, ed.flatpickr.config.dateFormat), ed.flatpickr.config.dateFormat) !== value) {
              throw new Error('mismatch')
            }
          } catch (err) {
            var errorDateFormat = ed.flatpickr.config.errorDateFormat !== undefined ? ed.flatpickr.config.errorDateFormat : ed.flatpickr.config.dateFormat
            errors.push({
              path: path,
              property: 'format',
              message: this.translate('error_' + ed.format.replace(/-/g, '_'), [errorDateFormat])
            })
          }
        }
      }
    }

    // Internal validators using the custom validator format
    errors = errors.concat(_validators_ip_validator__WEBPACK_IMPORTED_MODULE_1__["ipValidator"].call(self, schema, value, path, self.translate))

    // Custom type validation (global)
    Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(self.defaults.custom_validators, function (i, validator) {
      errors = errors.concat(validator.call(self, schema, value, path))
    })
    // Custom type validation (instance specific)
    if (this.options.custom_validators) {
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["$each"])(this.options.custom_validators, function (i, validator) {
        errors = errors.concat(validator.call(self, schema, value, path))
      })
    }

    // Remove duplicate errors and add "errorcount" property
    errors = this._removeDuplicateErrors(errors)

    return errors
  },
  _removeDuplicateErrors: function (errors) {
    return errors.reduce(function (err, obj) {
      var first = true
      if (!err) err = []
      err.forEach(function (a) {
        if (a.message === obj.message && a.path === obj.path && a.property === obj.property) {
          a.errorcount++
          first = false
        }
      })
      if (first) {
        obj.errorcount = 1
        err.push(obj)
      }
      return err
    }, [])
  },
  _checkType: function (type, value) {
    // Simple types
    if (typeof type === 'string') {
      if (type === 'string') return typeof value === 'string'
      else if (type === 'number') return typeof value === 'number'
      else if (type === 'integer') return typeof value === 'number' && value === Math.floor(value)
      else if (type === 'boolean') return typeof value === 'boolean'
      else if (type === 'array') return Array.isArray(value)
      else if (type === 'object') return value !== null && !(Array.isArray(value)) && typeof value === 'object'
      else if (type === 'null') return value === null
      else return true
    // Schema
    } else {
      return !this._validateSchema(type, value).length
    }
  }
})


/***/ }),

/***/ "./src/validators/ip-validator.js":
/*!****************************************!*\
  !*** ./src/validators/ip-validator.js ***!
  \****************************************/
/*! exports provided: ipValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipValidator", function() { return ipValidator; });
// Implements ipv4, ipv6 and hostname format validations as per https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-7.3.4
var validateIpv4 = function (value) {
  var parts = value.split('.')
  if (parts.length !== 4) {
    throw new Error('error_ipv4')
  }
  parts.forEach(function (part) {
    if (isNaN(+part) || +part < 0 || +part > 255) {
      throw new Error('error_ipv4')
    }
  })
}

var validateIpv6 = function (value) {
  if (!value.match(
    '^(?:(?:(?:[a-fA-F0-9]{1,4}:){6}|(?=(?:[a-fA-F0-9]{0,4}:){2,6}(?:[0-9]{1,3}.){3}[0-9]{1,3}$)(([0-9a-fA-F]{1,4}:){1,5}|:)((:[0-9a-fA-F]{1,4}){1,5}:|:)|::(?:[a-fA-F0-9]{1,4}:){5})(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9]).){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])|(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?=(?:[a-fA-F0-9]{0,4}:){0,7}[a-fA-F0-9]{0,4}$)(([0-9a-fA-F]{1,4}:){1,7}|:)((:[0-9a-fA-F]{1,4}){1,7}|:)|(?:[a-fA-F0-9]{1,4}:){7}:|:(:[a-fA-F0-9]{1,4}){7})$'
  )) {
    throw new Error('error_ipv6')
  }
}

var validateHostname = function (value) {
  if (!value.match(
    '(?=^.{4,253}$)(^((?!-)[a-zA-Z0-9-]{0,62}[a-zA-Z0-9].)+[a-zA-Z]{2,63}$)'
  )) {
    throw new Error('error_hostname')
  }
}

function ipValidator (schema, value, path, translate) {
  try {
    switch (schema.format) {
      case 'ipv4':
        validateIpv4(value)
        break
      case 'ipv6':
        validateIpv6(value)
        break
      case 'hostname':
        validateHostname(value)
        break
    }
    return []
  } catch (err) {
    return [{
      path: path,
      property: 'format',
      message: translate(err.message)
    }]
  }
}


/***/ })

/******/ });
/*
//@ sourceMappingURL=jsoneditor.js.map
*/