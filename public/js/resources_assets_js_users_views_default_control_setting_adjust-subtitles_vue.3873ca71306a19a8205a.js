(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_setting_adjust-subtitles_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-color */ "./node_modules/vue-color/dist/vue-color.min.js");
/* harmony import */ var vue_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_color__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_exit_button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/exit-button.vue */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      colors_font: {
        hex: '#ffffff',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      },
      colors_background: {
        hex: '#194d33',
        hsl: {
          h: 150,
          s: 0.5,
          l: 0.2,
          a: 1
        },
        hsv: {
          h: 150,
          s: 0.66,
          v: 0.30,
          a: 1
        },
        rgba: {
          r: 25,
          g: 77,
          b: 51,
          a: 1
        },
        a: 1
      },
      show_font_picker: false,
      show_background_picker: false,
      caption_style: {
        position: 'relative',
        left: '0',
        bottom: '0',
        fontSize: '15px',
        color: '#fff',
        width: '90%',
        display: 'inline',
        backgroundColor: 'transparent',
        fontWeight: '500'
      }
    };
  },
  components: {
    'exit-button': _utils_exit_button_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'chrome-picker': vue_color__WEBPACK_IMPORTED_MODULE_0__.Chrome
  },
  watch: {
    colors_font: function colors_font() {
      this.caption_style.color = this.colors_font.hex;
    },
    colors_background: function colors_background() {
      this.caption_style.backgroundColor = 'rgba(' + this.colors_background.rgba.r + ',' + this.colors_background.rgba.g + ',' + this.colors_background.rgba.b + ',' + this.colors_background.rgba.a + ')';
    }
  },
  methods: {
    CHANGE: function CHANGE() {
      var caption = {
        'font-size': this.caption_style.fontSize,
        'background-color': this.caption_style.backgroundColor,
        'font-weight': this.caption_style.fontWeight,
        'color': this.caption_style.color
      };
      localStorage.setItem('caption', JSON.stringify(caption));
      this.$store.dispatch('SET_CAPTION', caption);
    },
    SHOW_FONT_PICKER: function SHOW_FONT_PICKER() {
      this.show_font_picker = !this.show_font_picker;
    },
    SHOW_BACKGROUND_PICKER: function SHOW_BACKGROUND_PICKER() {
      this.show_background_picker = !this.show_background_picker;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    BACK: function BACK() {
      this.$store.commit("SHOW_SERIES_DETAILS_PAGE", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vc-chrome[data-v-bf2d34d4] {\n    position: absolute;\n    z-index: 1;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.exit-button[data-v-35af9539] {\n    width:20px;\n    transition: 300ms;\n}\n.exit-button[data-v-35af9539]:hover {\n    transform: scale(1.2);\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_style_index_0_id_bf2d34d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_style_index_0_id_bf2d34d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_style_index_0_id_bf2d34d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-color/dist/vue-color.min.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-color/dist/vue-color.min.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():0}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=60)}([function(e,t){function n(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(x){var o=h++;r=d||(d=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(b,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(64),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,h=0,p=!1,v=function(){},g=null,b="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,i){p=n,g=i||{};var o=l(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,n.push(s)}t?(o=l(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var l="function"==typeof s?s.options:s;t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var u;if(o?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=r),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(e,t){return u.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:l}}},function(e,t,n){"use strict";function r(e,t){var n,r=e&&e.a;!(n=e&&e.hsl?(0,o.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,o.default)(e.hex):e&&e.hsv?(0,o.default)(e.hsv):e&&e.rgba?(0,o.default)(e.rgba):e&&e.rgb?(0,o.default)(e.rgb):(0,o.default)(e))||void 0!==n._a&&null!==n._a||n.setAlpha(r||1);var i=n.toHsl(),a=n.toHsv();return 0===i.s&&(a.h=i.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:i,hex:n.toHexString().toUpperCase(),hex8:n.toHex8String().toUpperCase(),rgba:n.toRgb(),hsv:a,oldHue:e.h||t||i.h,source:e.source,a:e.a||n.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(65),o=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={props:["value"],data:function(){return{val:r(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=r(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=r(e,t||this.oldHue)},isValidHex:function(e){return(0,o.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],n=0,r=0,i=0;i<t.length;i++){var o=t[i];e[o]&&(n++,isNaN(e[o])||r++)}if(n===r)return e},paletteUpperCase:function(e){return e.map(function(e){return e.toUpperCase()})},isTransparent:function(e){return 0===(0,o.default)(e).getAlpha()}}}},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t,n){"use strict";function r(e){c||n(66)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(36),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(68),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/EditableInput.vue",t.default=f.exports},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(8),i=n(18);e.exports=n(9)?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(16),i=n(42),o=n(25),a=Object.defineProperty;t.f=n(9)?Object.defineProperty:function(e,t,n){if(r(e),t=o(t,!0),r(n),i)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){e.exports=!n(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(90),i=n(24);e.exports=function(e){return r(i(e))}},function(e,t,n){var r=n(29)("wks"),i=n(19),o=n(4).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){"use strict";function r(e){c||n(111)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(51),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(113),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Hue.vue",t.default=f.exports},function(e,t){e.exports=!0},function(e,t){var n=e.exports={version:"2.6.11"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(12);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},function(e,t,n){"use strict";function r(e){c||n(123)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(54),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(127),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Saturation.vue",t.default=f.exports},function(e,t,n){"use strict";function r(e){c||n(128)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(55),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(133),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Alpha.vue",t.default=f.exports},function(e,t,n){"use strict";function r(e){c||n(130)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(56),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(132),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/common/Checkboard.vue",t.default=f.exports},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var r=n(12);e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports={}},function(e,t,n){var r=n(46),i=n(30);e.exports=Object.keys||function(e){return r(e,i)}},function(e,t,n){var r=n(29)("keys"),i=n(19);e.exports=function(e){return r[e]||(r[e]=i(e))}},function(e,t,n){var r=n(15),i=n(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n(14)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(8).f,i=n(6),o=n(11)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},function(e,t,n){t.f=n(11)},function(e,t,n){var r=n(4),i=n(15),o=n(14),a=n(32),s=n(8).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[o.default],props:{palette:{type:Array,default:function(){return c}}},components:{"ed-in":s.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,labelText:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}},labelId:function(){return"input__label__"+this.label+"__"+Math.random().toString().slice(2,5)},labelSpanText:function(){return this.labelText||this.label}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown:function(e){var t=this.val,n=Number(t);if(n){var r=this.arrowOffset||1;38===e.keyCode&&(t=n+r,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=n-r,this.handleChange(t),e.preventDefault())}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[i.default],props:{palette:{type:Array,default:function(){return o}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(3),s=r(a);t.default={name:"Material",mixins:[s.default],components:{"ed-in":o.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(81),o=r(i),a=n(3),s=r(a),c=n(13),l=r(c);t.default={name:"Slider",mixins:[s.default],props:{swatches:{type:Array,default:function(){return[{s:.5,l:.8},{s:.5,l:.65},{s:.5,l:.5},{s:.5,l:.35},{s:.5,l:.2}]}}},components:{hue:l.default},computed:{normalizedSwatches:function(){return this.swatches.map(function(e){return"object"!==(void 0===e?"undefined":(0,o.default)(e))?{s:.5,l:e}:e})}},methods:{isActive:function(e,t){var n=this.colors.hsl;return 1===n.l&&1===e.l||(0===n.l&&0===e.l||Math.abs(n.l-e.l)<.01&&Math.abs(n.s-e.s)<.01)},hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:t.s,l:t.l,source:"hsl"})}}}},function(e,t,n){"use strict";var r=n(14),i=n(41),o=n(44),a=n(7),s=n(26),c=n(88),l=n(31),u=n(95),f=n(11)("iterator"),d=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,n,p,v,g,b){c(n,t,p);var x,m,_,w=function(e){if(!d&&e in F)return F[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},y=t+" Iterator",C="values"==v,k=!1,F=e.prototype,S=F[f]||F["@@iterator"]||v&&F[v],A=S||w(v),O=v?C?w("entries"):A:void 0,E="Array"==t?F.entries||S:S;if(E&&(_=u(E.call(new e)))!==Object.prototype&&_.next&&(l(_,y,!0),r||"function"==typeof _[f]||a(_,f,h)),C&&S&&"values"!==S.name&&(k=!0,A=function(){return S.call(this)}),r&&!b||!d&&!k&&F[f]||a(F,f,A),s[t]=A,s[y]=h,v)if(x={values:C?A:w("values"),keys:g?A:w("keys"),entries:O},b)for(m in x)m in F||o(F,m,x[m]);else i(i.P+i.F*(d||k),t,x);return x}},function(e,t,n){var r=n(4),i=n(15),o=n(86),a=n(7),s=n(6),c=function(e,t,n){var l,u,f,d=e&c.F,h=e&c.G,p=e&c.S,v=e&c.P,g=e&c.B,b=e&c.W,x=h?i:i[t]||(i[t]={}),m=x.prototype,_=h?r:p?r[t]:(r[t]||{}).prototype;h&&(n=t);for(l in n)(u=!d&&_&&void 0!==_[l])&&s(x,l)||(f=u?_[l]:n[l],x[l]=h&&"function"!=typeof _[l]?n[l]:g&&u?o(f,r):b&&_[l]==f?function(e){var t=function(t,n,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,r)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[l]=f,e&c.R&&m&&!m[l]&&a(m,l,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,e.exports=c},function(e,t,n){e.exports=!n(9)&&!n(17)(function(){return 7!=Object.defineProperty(n(43)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var r=n(12),i=n(4).document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,n){e.exports=n(7)},function(e,t,n){var r=n(16),i=n(89),o=n(30),a=n(28)("IE_PROTO"),s=function(){},c=function(){var e,t=n(43)("iframe"),r=o.length;for(t.style.display="none",n(94).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[o[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:i(n,t)}},function(e,t,n){var r=n(6),i=n(10),o=n(91)(!1),a=n(28)("IE_PROTO");e.exports=function(e,t){var n,s=i(e),c=0,l=[];for(n in s)n!=a&&r(s,n)&&l.push(n);for(;t.length>c;)r(s,n=t[c++])&&(~o(l,n)||l.push(n));return l}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(24);e.exports=function(e){return Object(r(e))}},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(46),i=n(30).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r,i,o=n.clientWidth,a=n.clientHeight,s=n.getBoundingClientRect().left+window.pageXOffset,c=n.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),f=l-s,d=u-c;"vertical"===this.direction?(d<0?r=360:d>a?r=0:(i=-100*d/a+100,r=360*i/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(f<0?r=0:f>o?r=360:(i=100*f/o,r=360*i/100),this.colors.hsl.h!==r&&this.$emit("change",{h:r,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))}},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(118),o=r(i),a=n(3),s=r(a),c=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],l=["900","700","500","300","100"],u=function(){var e=[];return c.forEach(function(t){var n=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?n=n.concat(["#000000","#FFFFFF"]):l.forEach(function(e){var r=o.default[t][e];n.push(r.toUpperCase())}),e.push(n)}),e}();t.default={name:"Swatches",mixins:[s.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d);t.default={name:"Photoshop",mixins:[o.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"},newLabel:{type:String,default:"new"},currentLabel:{type:String,default:"current"}},components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(125),o=r(i),a=n(126),s=r(a);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,s.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r=n.clientWidth,i=n.clientHeight,a=n.getBoundingClientRect().left+window.pageXOffset,s=n.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),l=e.pageY||(e.touches?e.touches[0].pageY:0),u=(0,o.default)(c-a,0,r),f=(0,o.default)(l-s,0,i),d=u/r,h=(0,o.default)(-f/i+1,0,1);this.throttle(this.onChange,{h:this.colors.hsv.h,s:d,v:h,a:this.colors.hsv.a,source:"hsva"})}},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),i=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:i.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var n=this.$refs.container;if(n){var r,i=n.clientWidth,o=n.getBoundingClientRect().left+window.pageXOffset,a=e.pageX||(e.touches?e.touches[0].pageX:0),s=a-o;r=s<0?0:s>i?1:Math.round(100*s/i)/100,this.colors.a!==r&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:r,source:"rgba"})}},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,n){"use strict";function r(e,t,n){if("undefined"==typeof document)return null;var r=document.createElement("canvas");r.width=r.height=2*n;var i=r.getContext("2d");return i?(i.fillStyle=e,i.fillRect(0,0,r.width,r.height),i.fillStyle=t,i.fillRect(0,0,n,n),i.translate(n,n),i.fillRect(0,0,n,n),r.toDataURL()):null}function i(e,t,n){var i=e+","+t+","+n;if(o[i])return o[i];var a=r(e,t,n);return o[i]=a,a}Object.defineProperty(t,"__esModule",{value:!0});var o={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+i(this.white,this.grey,this.size)+")"}}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d),p=n(22),v=r(p),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];t.default={name:"Sketch",mixins:[o.default],components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default,checkboard:v.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var e=void 0;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),o=r(i),a=n(5),s=r(a),c=n(20),l=r(c),u=n(13),f=r(u),d=n(21),h=r(d),p=n(22),v=r(p);t.default={name:"Chrome",mixins:[o.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:l.default,hue:f.default,alpha:h.default,"ed-in":s.default,checkboard:v.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,n=e.s,r=e.l;return{h:t.toFixed(),s:(100*n).toFixed()+"%",l:(100*r).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,n=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:n,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=r(i),a=n(3),s=r(a),c=["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"];t.default={name:"Twitter",mixins:[s.default],components:{editableInput:o.default},props:{width:{type:[String,Number],default:276},defaultColors:{type:Array,default:function(){return c}},triangle:{default:"top-left",validator:function(e){return["hide","top-left","top-right"].includes(e)}}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(61),o=r(i),a=n(70),s=r(a),c=n(74),l=r(c),u=n(78),f=r(u),d=n(115),h=r(d),p=n(120),v=r(p),g=n(135),b=r(g),x=n(139),m=r(x),_=n(143),w=r(_),y=n(21),C=r(y),k=n(22),F=r(k),S=n(5),A=r(S),O=n(13),E=r(O),M=n(20),j=r(M),L=n(3),P=r(L),R={version:"2.8.1",Compact:o.default,Grayscale:s.default,Twitter:w.default,Material:l.default,Slider:f.default,Swatches:h.default,Photoshop:v.default,Sketch:b.default,Chrome:m.default,Alpha:C.default,Checkboard:F.default,EditableInput:A.default,Hue:E.default,Saturation:j.default,ColorMixin:P.default};e.exports=R},function(e,t,n){"use strict";function r(e){c||n(62)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(35),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(69),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Compact.vue",t.default=f.exports},function(e,t,n){var r=n(63);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("6ce8a5a8",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 245px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],c=o[2],l=o[3],u={id:e+":"+i,css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(e,t,n){var r;!function(i){function o(e,t){if(e=e||"",t=t||{},e instanceof o)return e;if(!(this instanceof o))return new o(e,t);var n=a(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=G(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=G(this._r)),this._g<1&&(this._g=G(this._g)),this._b<1&&(this._b=G(this._b)),this._ok=n.ok,this._tc_id=U++}function a(e){var t={r:0,g:0,b:0},n=1,r=null,i=null,o=null,a=!1,c=!1;return"string"==typeof e&&(e=N(e)),"object"==typeof e&&(H(e.r)&&H(e.g)&&H(e.b)?(t=s(e.r,e.g,e.b),a=!0,c="%"===String(e.r).substr(-1)?"prgb":"rgb"):H(e.h)&&H(e.s)&&H(e.v)?(r=D(e.s),i=D(e.v),t=f(e.h,r,i),a=!0,c="hsv"):H(e.h)&&H(e.s)&&H(e.l)&&(r=D(e.s),o=D(e.l),t=l(e.h,r,o),a=!0,c="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=O(n),{ok:a,format:e.format||c,r:V(255,q(t.r,0)),g:V(255,q(t.g,0)),b:V(255,q(t.b,0)),a:n}}function s(e,t,n){return{r:255*E(e,255),g:255*E(t,255),b:255*E(n,255)}}function c(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,i,o=q(e,t,n),a=V(e,t,n),s=(o+a)/2;if(o==a)r=i=0;else{var c=o-a;switch(i=s>.5?c/(2-o-a):c/(o+a),o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,l:s}}function l(e,t,n){function r(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}var i,o,a;if(e=E(e,360),t=E(t,100),n=E(n,100),0===t)i=o=a=n;else{var s=n<.5?n*(1+t):n+t-n*t,c=2*n-s;i=r(c,s,e+1/3),o=r(c,s,e),a=r(c,s,e-1/3)}return{r:255*i,g:255*o,b:255*a}}function u(e,t,n){e=E(e,255),t=E(t,255),n=E(n,255);var r,i,o=q(e,t,n),a=V(e,t,n),s=o,c=o-a;if(i=0===o?0:c/o,o==a)r=0;else{switch(o){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:i,v:s}}function f(e,t,n){e=6*E(e,360),t=E(t,100),n=E(n,100);var r=i.floor(e),o=e-r,a=n*(1-t),s=n*(1-o*t),c=n*(1-(1-o)*t),l=r%6;return{r:255*[n,s,a,a,c,n][l],g:255*[c,n,n,s,a,a][l],b:255*[a,a,c,n,n,s][l]}}function d(e,t,n,r){var i=[R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function h(e,t,n,r,i){var o=[R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16)),R(B(r))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function p(e,t,n,r){return[R(B(r)),R(G(e).toString(16)),R(G(t).toString(16)),R(G(n).toString(16))].join("")}function v(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.s-=t/100,n.s=M(n.s),o(n)}function g(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.s+=t/100,n.s=M(n.s),o(n)}function b(e){return o(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.l+=t/100,n.l=M(n.l),o(n)}function m(e,t){t=0===t?0:t||10;var n=o(e).toRgb();return n.r=q(0,V(255,n.r-G(-t/100*255))),n.g=q(0,V(255,n.g-G(-t/100*255))),n.b=q(0,V(255,n.b-G(-t/100*255))),o(n)}function _(e,t){t=0===t?0:t||10;var n=o(e).toHsl();return n.l-=t/100,n.l=M(n.l),o(n)}function w(e,t){var n=o(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,o(n)}function y(e){var t=o(e).toHsl();return t.h=(t.h+180)%360,o(t)}function C(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+120)%360,s:t.s,l:t.l}),o({h:(n+240)%360,s:t.s,l:t.l})]}function k(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+90)%360,s:t.s,l:t.l}),o({h:(n+180)%360,s:t.s,l:t.l}),o({h:(n+270)%360,s:t.s,l:t.l})]}function F(e){var t=o(e).toHsl(),n=t.h;return[o(e),o({h:(n+72)%360,s:t.s,l:t.l}),o({h:(n+216)%360,s:t.s,l:t.l})]}function S(e,t,n){t=t||6,n=n||30;var r=o(e).toHsl(),i=360/n,a=[o(e)];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(o(r));return a}function A(e,t){t=t||6;for(var n=o(e).toHsv(),r=n.h,i=n.s,a=n.v,s=[],c=1/t;t--;)s.push(o({h:r,s:i,v:a})),a=(a+c)%1;return s}function O(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function E(e,t){L(e)&&(e="100%");var n=P(e);return e=V(t,q(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),i.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function M(e){return V(1,q(0,e))}function j(e){return parseInt(e,16)}function L(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function P(e){return"string"==typeof e&&-1!=e.indexOf("%")}function R(e){return 1==e.length?"0"+e:""+e}function D(e){return e<=1&&(e=100*e+"%"),e}function B(e){return i.round(255*parseFloat(e)).toString(16)}function T(e){return j(e)/255}function H(e){return!!J.CSS_UNIT.exec(e)}function N(e){e=e.replace(I,"").replace($,"").toLowerCase();var t=!1;if(W[e])e=W[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=J.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=J.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=J.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=J.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=J.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=J.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=J.hex8.exec(e))?{r:j(n[1]),g:j(n[2]),b:j(n[3]),a:T(n[4]),format:t?"name":"hex8"}:(n=J.hex6.exec(e))?{r:j(n[1]),g:j(n[2]),b:j(n[3]),format:t?"name":"hex"}:(n=J.hex4.exec(e))?{r:j(n[1]+""+n[1]),g:j(n[2]+""+n[2]),b:j(n[3]+""+n[3]),a:T(n[4]+""+n[4]),format:t?"name":"hex8"}:!!(n=J.hex3.exec(e))&&{r:j(n[1]+""+n[1]),g:j(n[2]+""+n[2]),b:j(n[3]+""+n[3]),format:t?"name":"hex"}}function z(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),"AA"!==t&&"AAA"!==t&&(t="AA"),"small"!==n&&"large"!==n&&(n="small"),{level:t,size:n}}var I=/^\s+/,$=/\s+$/,U=0,G=i.round,V=i.min,q=i.max,X=i.random;o.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r,o,a,s=this.toRgb();return e=s.r/255,t=s.g/255,n=s.b/255,r=e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4),o=t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4),a=n<=.03928?n/12.92:i.pow((n+.055)/1.055,2.4),.2126*r+.7152*o+.0722*a},setAlpha:function(e){return this._a=O(e),this._roundA=G(100*this._a)/100,this},toHsv:function(){var e=u(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=u(this._r,this._g,this._b),t=G(360*e.h),n=G(100*e.s),r=G(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=c(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=c(this._r,this._g,this._b),t=G(360*e.h),n=G(100*e.s),r=G(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return d(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return h(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:G(this._r),g:G(this._g),b:G(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+G(this._r)+", "+G(this._g)+", "+G(this._b)+")":"rgba("+G(this._r)+", "+G(this._g)+", "+G(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:G(100*E(this._r,255))+"%",g:G(100*E(this._g,255))+"%",b:G(100*E(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+G(100*E(this._r,255))+"%, "+G(100*E(this._g,255))+"%, "+G(100*E(this._b,255))+"%)":"rgba("+G(100*E(this._r,255))+"%, "+G(100*E(this._g,255))+"%, "+G(100*E(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(Y[d(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var i=o(e);n="#"+p(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return o(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(w,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(y,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(F,arguments)},triad:function(){return this._applyCombination(C,arguments)},tetrad:function(){return this._applyCombination(k,arguments)}},o.fromRatio=function(e,t){if("object"==typeof e){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]="a"===r?e[r]:D(e[r]));e=n}return o(e,t)},o.equals=function(e,t){return!(!e||!t)&&o(e).toRgbString()==o(t).toRgbString()},o.random=function(){return o.fromRatio({r:X(),g:X(),b:X()})},o.mix=function(e,t,n){n=0===n?0:n||50;var r=o(e).toRgb(),i=o(t).toRgb(),a=n/100;return o({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})},o.readability=function(e,t){var n=o(e),r=o(t);return(i.max(n.getLuminance(),r.getLuminance())+.05)/(i.min(n.getLuminance(),r.getLuminance())+.05)},o.isReadable=function(e,t,n){var r,i,a=o.readability(e,t);switch(i=!1,r=z(n),r.level+r.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7}return i},o.mostReadable=function(e,t,n){var r,i,a,s,c=null,l=0;n=n||{},i=n.includeFallbackColors,a=n.level,s=n.size;for(var u=0;u<t.length;u++)(r=o.readability(e,t[u]))>l&&(l=r,c=o(t[u]));return o.isReadable(e,c,{level:a,size:s})||!i?c:(n.includeFallbackColors=!1,o.mostReadable(e,["#fff","#000"],n))};var W=o.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Y=o.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(W),J=function(){var e="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",t="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?",n="[\\s|\\(]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")[,|\\s]+("+e+")\\s*\\)?";return{CSS_UNIT:new RegExp(e),rgb:new RegExp("rgb"+t),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+t),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+t),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();void 0!==e&&e.exports?e.exports=o:void 0!==(r=function(){return o}.call(t,n,t,e))&&(e.exports=r)}(Math)},function(e,t,n){var r=n(67);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("0f73e73c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-editable-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-labelledby":e.labelId},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),n("span",{staticClass:"vc-input__label",attrs:{for:e.label,id:e.labelId}},[e._v(e._s(e.labelSpanText))]),e._v(" "),n("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-compact",attrs:{role:"application","aria-label":"Compact color picker"}},[n("ul",{staticClass:"vc-compact-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},attrs:{role:"option","aria-label":"color:"+t,"aria-selected":t===e.pick},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(71)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(37),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(73),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Grayscale.vue",t.default=f.exports},function(e,t,n){var r=n(72);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("21ddbb74",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-grayscale",attrs:{role:"application","aria-label":"Grayscale color picker"}},[n("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"listbox"}},e._l(e.paletteUpperCase(e.palette),function(t){return n("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":t===e.pick},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(75)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(38),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(77),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Material.vue",t.default=f.exports},function(e,t,n){var r=n(76);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1ff3af73",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n',""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-material",attrs:{role:"application","aria-label":"Material color picker"}},[n("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.$set(e.colors,"hex",t)},expression:"colors.hex"}}),e._v(" "),n("div",{staticClass:"vc-material-split"},[n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.$set(e.colors.rgba,"r",t)},expression:"colors.rgba.r"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.$set(e.colors.rgba,"g",t)},expression:"colors.rgba.g"}})],1),e._v(" "),n("div",{staticClass:"vc-material-third"},[n("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.$set(e.colors.rgba,"b",t)},expression:"colors.rgba.b"}})],1)])],1)},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(79)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(39),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(114),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Slider.vue",t.default=f.exports},function(e,t,n){var r=n(80);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7982aa43",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 0.6px #ddd;\n}\n",""])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(82),o=r(i),a=n(100),s=r(a),c="function"==typeof s.default&&"symbol"==typeof o.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===c(o.default)?function(e){return void 0===e?"undefined":c(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":c(e)}},function(e,t,n){e.exports={default:n(83),__esModule:!0}},function(e,t,n){n(84),n(96),e.exports=n(32).f("iterator")},function(e,t,n){"use strict";var r=n(85)(!0);n(40)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var r=n(23),i=n(24);e.exports=function(e){return function(t,n){var o,a,s=String(i(t)),c=r(n),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}}},function(e,t,n){var r=n(87);e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){"use strict";var r=n(45),i=n(18),o=n(31),a={};n(7)(a,n(11)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},function(e,t,n){var r=n(8),i=n(16),o=n(27);e.exports=n(9)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),s=a.length,c=0;s>c;)r.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var r=n(47);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t,n){var r=n(10),i=n(92),o=n(93);e.exports=function(e){return function(t,n,a){var s,c=r(t),l=i(c.length),u=o(a,l);if(e&&n!=n){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}}},function(e,t,n){var r=n(23),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},function(e,t,n){var r=n(23),i=Math.max,o=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):o(e,t)}},function(e,t,n){var r=n(4).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(6),i=n(48),o=n(28)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){n(97);for(var r=n(4),i=n(7),o=n(26),a=n(11)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var l=s[c],u=r[l],f=u&&u.prototype;f&&!f[a]&&i(f,a,l),o[l]=o.Array}},function(e,t,n){"use strict";var r=n(98),i=n(99),o=n(26),a=n(10);e.exports=n(40)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,n):"values"==t?i(0,e[n]):i(0,[n,e[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){e.exports={default:n(101),__esModule:!0}},function(e,t,n){n(102),n(108),n(109),n(110),e.exports=n(15).Symbol},function(e,t,n){"use strict";var r=n(4),i=n(6),o=n(9),a=n(41),s=n(44),c=n(103).KEY,l=n(17),u=n(29),f=n(31),d=n(19),h=n(11),p=n(32),v=n(33),g=n(104),b=n(105),x=n(16),m=n(12),_=n(48),w=n(10),y=n(25),C=n(18),k=n(45),F=n(106),S=n(107),A=n(49),O=n(8),E=n(27),M=S.f,j=O.f,L=F.f,P=r.Symbol,R=r.JSON,D=R&&R.stringify,B=h("_hidden"),T=h("toPrimitive"),H={}.propertyIsEnumerable,N=u("symbol-registry"),z=u("symbols"),I=u("op-symbols"),$=Object.prototype,U="function"==typeof P&&!!A.f,G=r.QObject,V=!G||!G.prototype||!G.prototype.findChild,q=o&&l(function(){return 7!=k(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(e,t,n){var r=M($,t);r&&delete $[t],j(e,t,n),r&&e!==$&&j($,t,r)}:j,X=function(e){var t=z[e]=k(P.prototype);return t._k=e,t},W=U&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},Y=function(e,t,n){return e===$&&Y(I,t,n),x(e),t=y(t,!0),x(n),i(z,t)?(n.enumerable?(i(e,B)&&e[B][t]&&(e[B][t]=!1),n=k(n,{enumerable:C(0,!1)})):(i(e,B)||j(e,B,C(1,{})),e[B][t]=!0),q(e,t,n)):j(e,t,n)},J=function(e,t){x(e);for(var n,r=g(t=w(t)),i=0,o=r.length;o>i;)Y(e,n=r[i++],t[n]);return e},K=function(e,t){return void 0===t?k(e):J(k(e),t)},Z=function(e){var t=H.call(this,e=y(e,!0));return!(this===$&&i(z,e)&&!i(I,e))&&(!(t||!i(this,e)||!i(z,e)||i(this,B)&&this[B][e])||t)},Q=function(e,t){if(e=w(e),t=y(t,!0),e!==$||!i(z,t)||i(I,t)){var n=M(e,t);return!n||!i(z,t)||i(e,B)&&e[B][t]||(n.enumerable=!0),n}},ee=function(e){for(var t,n=L(w(e)),r=[],o=0;n.length>o;)i(z,t=n[o++])||t==B||t==c||r.push(t);return r},te=function(e){for(var t,n=e===$,r=L(n?I:w(e)),o=[],a=0;r.length>a;)!i(z,t=r[a++])||n&&!i($,t)||o.push(z[t]);return o};U||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(n){this===$&&t.call(I,n),i(this,B)&&i(this[B],e)&&(this[B][e]=!1),q(this,e,C(1,n))};return o&&V&&q($,e,{configurable:!0,set:t}),X(e)},s(P.prototype,"toString",function(){return this._k}),S.f=Q,O.f=Y,n(50).f=F.f=ee,n(34).f=Z,A.f=te,o&&!n(14)&&s($,"propertyIsEnumerable",Z,!0),p.f=function(e){return X(h(e))}),a(a.G+a.W+a.F*!U,{Symbol:P});for(var ne="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;ne.length>re;)h(ne[re++]);for(var ie=E(h.store),oe=0;ie.length>oe;)v(ie[oe++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return i(N,e+="")?N[e]:N[e]=P(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){V=!0},useSimple:function(){V=!1}}),a(a.S+a.F*!U,"Object",{create:K,defineProperty:Y,defineProperties:J,getOwnPropertyDescriptor:Q,getOwnPropertyNames:ee,getOwnPropertySymbols:te});var ae=l(function(){A.f(1)});a(a.S+a.F*ae,"Object",{getOwnPropertySymbols:function(e){return A.f(_(e))}}),R&&a(a.S+a.F*(!U||l(function(){var e=P();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,n,r=[e],i=1;arguments.length>i;)r.push(arguments[i++]);if(n=t=r[1],(m(t)||void 0!==e)&&!W(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!W(t))return t}),r[1]=t,D.apply(R,r)}}),P.prototype[T]||n(7)(P.prototype,T,P.prototype.valueOf),f(P,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(e,t,n){var r=n(19)("meta"),i=n(12),o=n(6),a=n(8).f,s=0,c=Object.isExtensible||function(){return!0},l=!n(17)(function(){return c(Object.preventExtensions({}))}),u=function(e){a(e,r,{value:{i:"O"+ ++s,w:{}}})},f=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,r)){if(!c(e))return"F";if(!t)return"E";u(e)}return e[r].i},d=function(e,t){if(!o(e,r)){if(!c(e))return!0;if(!t)return!1;u(e)}return e[r].w},h=function(e){return l&&p.NEED&&c(e)&&!o(e,r)&&u(e),e},p=e.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:h}},function(e,t,n){var r=n(27),i=n(49),o=n(34);e.exports=function(e){var t=r(e),n=i.f;if(n)for(var a,s=n(e),c=o.f,l=0;s.length>l;)c.call(e,a=s[l++])&&t.push(a);return t}},function(e,t,n){var r=n(47);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(10),i=n(50).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(r(e))}},function(e,t,n){var r=n(34),i=n(18),o=n(10),a=n(25),s=n(6),c=n(42),l=Object.getOwnPropertyDescriptor;t.f=n(9)?l:function(e,t){if(e=o(e),t=a(t,!0),c)try{return l(e,t)}catch(e){}if(s(e,t))return i(!r.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(33)("asyncIterator")},function(e,t,n){n(33)("observable")},function(e,t,n){var r=n(112);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7c5f1a1c",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-hue",e.directionClass]},[n("div",{ref:"container",staticClass:"vc-hue-container",attrs:{role:"slider","aria-valuenow":e.colors.hsl.h,"aria-valuemin":"0","aria-valuemax":"360"},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft},attrs:{role:"presentation"}},[n("div",{staticClass:"vc-hue-picker"})])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-slider",attrs:{role:"application","aria-label":"Slider color picker"}},[n("div",{staticClass:"vc-slider-hue-warp"},[n("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},e._l(e.normalizedSwatches,function(t,r){return n("div",{key:r,staticClass:"vc-slider-swatch",attrs:{"data-index":r,"aria-label":"color:"+e.colors.hex,role:"button"},on:{click:function(n){return e.handleSwClick(r,t)}}},[n("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":e.isActive(t,r),"vc-slider-swatch-picker--white":1===t.l},style:{background:"hsl("+e.colors.hsl.h+", "+100*t.s+"%, "+100*t.l+"%)"}})])}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(116)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(52),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(119),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Swatches.vue",t.default=f.exports},function(e,t,n){var r=n(117);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("10f839a2",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n",""])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"red",function(){return r}),n.d(t,"pink",function(){return i}),n.d(t,"purple",function(){return o}),n.d(t,"deepPurple",function(){return a}),n.d(t,"indigo",function(){return s}),n.d(t,"blue",function(){return c}),n.d(t,"lightBlue",function(){return l}),n.d(t,"cyan",function(){return u}),n.d(t,"teal",function(){return f}),n.d(t,"green",function(){return d}),n.d(t,"lightGreen",function(){return h}),n.d(t,"lime",function(){return p}),n.d(t,"yellow",function(){return v}),n.d(t,"amber",function(){return g}),n.d(t,"orange",function(){return b}),n.d(t,"deepOrange",function(){return x}),n.d(t,"brown",function(){return m}),n.d(t,"grey",function(){return _}),n.d(t,"blueGrey",function(){return w}),n.d(t,"darkText",function(){return y}),n.d(t,"lightText",function(){return C}),n.d(t,"darkIcons",function(){return k}),n.d(t,"lightIcons",function(){return F}),n.d(t,"white",function(){return S}),n.d(t,"black",function(){return A});var r={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},i={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},o={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},a={50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},s={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},c={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},l={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},u={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},f={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},d={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},h={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},p={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},v={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},g={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},b={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},x={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},m={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723"},_={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121"},w={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238"},y={primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",dividers:"rgba(0, 0, 0, 0.12)"},C={primary:"rgba(255, 255, 255, 1)",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",dividers:"rgba(255, 255, 255, 0.12)"},k={active:"rgba(0, 0, 0, 0.54)",inactive:"rgba(0, 0, 0, 0.38)"},F={active:"rgba(255, 255, 255, 1)",inactive:"rgba(255, 255, 255, 0.5)"},S="#ffffff",A="#000000";t.default={red:r,pink:i,purple:o,deepPurple:a,indigo:s,blue:c,lightBlue:l,cyan:u,teal:f,green:d,lightGreen:h,lime:p,yellow:v,amber:g,orange:b,deepOrange:x,brown:m,grey:_,blueGrey:w,darkText:y,lightText:C,darkIcons:k,lightIcons:F,white:S,black:A}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-swatches",attrs:{role:"application","aria-label":"Swatches color picker","data-pick":e.pick}},[n("div",{staticClass:"vc-swatches-box",attrs:{role:"listbox"}},e._l(e.palette,function(t,r){return n("div",{key:r,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return n("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{role:"option","aria-label":"Color:"+t,"aria-selected":e.equal(t),"data-color":t},on:{click:function(n){return e.handlerClick(t)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}),0)}),0)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(121)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(53),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(134),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Photoshop.vue",t.default=f.exports},function(e,t,n){var r=n(122);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("080365d4",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,'\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n',""])},function(e,t,n){var r=n(124);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("b5380e52",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n",""])},function(e,t){function n(e,t,n){return t<n?e<t?t:e>n?n:e:e<n?n:e>t?t:e}e.exports=n},function(e,t){function n(e,t,n){function r(t){var n=v,r=g;return v=g=void 0,k=t,x=e.apply(r,n)}function o(e){return k=e,m=setTimeout(u,t),F?r(e):x}function a(e){var n=e-_,r=e-k,i=t-n;return S?y(i,b-r):i}function l(e){var n=e-_,r=e-k;return void 0===_||n>=t||n<0||S&&r>=b}function u(){var e=C();if(l(e))return f(e);m=setTimeout(u,a(e))}function f(e){return m=void 0,A&&v?r(e):(v=g=void 0,x)}function d(){void 0!==m&&clearTimeout(m),k=0,v=_=g=m=void 0}function h(){return void 0===m?x:f(C())}function p(){var e=C(),n=l(e);if(v=arguments,g=this,_=e,n){if(void 0===m)return o(_);if(S)return m=setTimeout(u,t),r(_)}return void 0===m&&(m=setTimeout(u,t)),x}var v,g,b,x,m,_,k=0,F=!1,S=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,i(n)&&(F=!!n.leading,S="maxWait"in n,b=S?w(s(n.maxWait)||0,t):b,A="trailing"in n?!!n.trailing:A),p.cancel=d,p.flush=h,p}function r(e,t,r){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(r)&&(o="leading"in r?!!r.leading:o,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||o(e)&&_.call(e)==u}function s(e){if("number"==typeof e)return e;if(a(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=h.test(e);return n||p.test(e)?v(e.slice(2),n?2:8):d.test(e)?l:+e}var c="Expected a function",l=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,g="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,b="object"==typeof self&&self&&self.Object===Object&&self,x=g||b||Function("return this")(),m=Object.prototype,_=m.toString,w=Math.max,y=Math.min,C=function(){return x.Date.now()};e.exports=r},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-saturation--white"}),e._v(" "),n("div",{staticClass:"vc-saturation--black"}),e._v(" "),n("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[n("div",{staticClass:"vc-saturation-circle"})])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){var r=n(129);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("4dc1b086",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n",""])},function(e,t,n){var r=n(131);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("7e15c05b",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-alpha"},[n("div",{staticClass:"vc-alpha-checkboard-wrap"},[n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),n("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[n("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"}},[n("div",{staticClass:"vc-alpha-picker"})])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"application","aria-label":"PhotoShop color picker"}},[n("div",{staticClass:"vc-ps-head",attrs:{role:"heading"}},[e._v(e._s(e.head))]),e._v(" "),n("div",{staticClass:"vc-ps-body"},[n("div",{staticClass:"vc-ps-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-ps-hue-wrap"},[n("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[n("div",{staticClass:"vc-ps-hue-pointer"},[n("i",{staticClass:"vc-ps-hue-pointer--left"}),n("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),n("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[n("div",{staticClass:"vc-ps-previews"},[n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.newLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-previews__swatches"},[n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex},attrs:{"aria-label":"New color is "+e.colors.hex}}),e._v(" "),n("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},attrs:{"aria-label":"Current color is "+e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),n("div",{staticClass:"vc-ps-previews__label"},[e._v(e._s(e.currentLabel))])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-ps-actions"},[n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.acceptLabel},on:{click:e.handleAccept}},[e._v(e._s(e.acceptLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":e.cancelLabel},on:{click:e.handleCancel}},[e._v(e._s(e.cancelLabel))]),e._v(" "),n("div",{staticClass:"vc-ps-fields"},[n("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),n("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),e.hasResetButton?n("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:e.handleReset}},[e._v(e._s(e.resetLabel))]):e._e()])])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(136)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(57),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(138),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Sketch.vue",t.default=f.exports},function(e,t,n){var r=n(137);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("612c6604",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 90%;\n  padding: 4px 0 3px 10%;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 10px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch-presets-color .vc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  border-radius: 3px;\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"application","aria-label":"Sketch color picker"}},[n("div",{staticClass:"vc-sketch-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-controls"},[n("div",{staticClass:"vc-sketch-sliders"},[n("div",{staticClass:"vc-sketch-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-color-wrap"},[n("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor},attrs:{"aria-label":"Current color is "+e.activeColor}}),e._v(" "),n("checkboard")],1)]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-sketch-field"},[n("div",{staticClass:"vc-sketch-field--double"},[n("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-sketch-field--single"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-sketch-presets",attrs:{role:"group","aria-label":"A color preset, pick one to set as current color"}},[e._l(e.presetColors,function(t){return[e.isTransparent(t)?n("div",{key:t,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+t},on:{click:function(n){return e.handlePreset(t)}}},[n("checkboard")],1):n("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(n){return e.handlePreset(t)}}})]})],2)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(140)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(58),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(142),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Chrome.vue",t.default=f.exports},function(e,t,n){var r=n(141);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("1cd16048",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"application","aria-label":"Chrome color picker"}},[n("div",{staticClass:"vc-chrome-saturation-wrap"},[n("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-body"},[n("div",{staticClass:"vc-chrome-controls"},[n("div",{staticClass:"vc-chrome-color-wrap"},[n("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor},attrs:{"aria-label":"current color is "+e.colors.hex}}),e._v(" "),e.disableAlpha?e._e():n("checkboard")],1),e._v(" "),n("div",{staticClass:"vc-chrome-sliders"},[n("div",{staticClass:"vc-chrome-hue-wrap"},[n("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-alpha-wrap"},[n("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():n("div",{staticClass:"vc-chrome-fields-wrap"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[e.hasAlpha?e._e():n("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}}),e._v(" "),e.hasAlpha?n("ed-in",{attrs:{label:"hex",value:e.colors.hex8},on:{change:e.inputChange}}):e._e()],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():n("div",{staticClass:"vc-chrome-field"},[n("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),n("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:e.toggleViews}},[n("div",{staticClass:"vc-chrome-toggle-icon"},[n("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[n("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o},function(e,t,n){"use strict";function r(e){c||n(144)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(59),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);var s=n(146),c=!1,l=n(2),u=r,f=l(o.a,s.a,!1,u,null,null);f.options.__file="src/components/Twitter.vue",t.default=f.exports},function(e,t,n){var r=n(145);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(1)("669a48a5",r,!1,{})},function(e,t,n){t=e.exports=n(0)(!1),t.push([e.i,"\n.vc-twitter {\n  background: #fff;\n  border: 0 solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 4px;\n  position: relative;\n}\n.vc-twitter-triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent #fff transparent;\n  position: absolute;\n}\n.vc-twitter-triangle-shadow {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;\n  position: absolute;\n}\n.vc-twitter-body {\n  padding: 15px 9px 9px 15px;\n}\n.vc-twitter .vc-editable-input {\n  position: relative;\n}\n.vc-twitter .vc-editable-input input {\n  width: 100px;\n  font-size: 14px;\n  color: #666;\n  border: 0px;\n  outline: none;\n  height: 28px;\n  box-shadow: inset 0 0 0 1px #F0F0F0;\n  box-sizing: content-box;\n  border-radius: 0 4px 4px 0;\n  float: left;\n  padding: 1px;\n  padding-left: 8px;\n}\n.vc-twitter .vc-editable-input span {\n  display: none;\n}\n.vc-twitter-hash {\n  background: #F0F0F0;\n  height: 30px;\n  width: 30px;\n  border-radius: 4px 0 0 4px;\n  float: left;\n  color: #98A1A4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vc-twitter-swatch {\n  width: 30px;\n  height: 30px;\n  float: left;\n  border-radius: 4px;\n  margin: 0 6px 6px 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.vc-twitter-clear {\n  clear: both;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle {\n  display: none;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {\n  display: none;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle{\n  top: -10px;\n  left: 12px;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  left: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle{\n  top: -10px;\n  right: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  right: 12px;\n}\n",""])},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vc-twitter",class:{"vc-twitter-hide-triangle ":"hide"===e.triangle,"vc-twitter-top-left-triangle ":"top-left"===e.triangle,"vc-twitter-top-right-triangle ":"top-right"===e.triangle},style:{width:"number"==typeof e.width?e.width+"px":e.width}},[n("div",{staticClass:"vc-twitter-triangle-shadow"}),e._v(" "),n("div",{staticClass:"vc-twitter-triangle"}),e._v(" "),n("div",{staticClass:"vc-twitter-body"},[e._l(e.defaultColors,function(t,r){return n("span",{key:r,staticClass:"vc-twitter-swatch",style:{background:t,boxShadow:"0 0 4px "+(e.equal(t)?t:"transparent")},on:{click:function(n){return e.handlerClick(t)}}})}),e._v(" "),n("div",{staticClass:"vc-twitter-hash"},[e._v("#")]),e._v(" "),n("editable-input",{attrs:{label:"#",value:e.hex},on:{change:e.inputChange}}),e._v(" "),n("div",{staticClass:"vc-twitter-clear"})],2)])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};t.a=o}])});

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adjust_subtitles_vue_vue_type_template_id_bf2d34d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true& */ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true&");
/* harmony import */ var _adjust_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adjust-subtitles.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=script&lang=js&");
/* harmony import */ var _adjust_subtitles_vue_vue_type_style_index_0_id_bf2d34d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css& */ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _adjust_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adjust_subtitles_vue_vue_type_template_id_bf2d34d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _adjust_subtitles_vue_vue_type_template_id_bf2d34d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bf2d34d4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exit-button.vue?vue&type=template&id=35af9539&scoped=true& */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&");
/* harmony import */ var _exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exit-button.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&");
/* harmony import */ var _exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "35af9539",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/utils/exit-button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adjust-subtitles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_style_index_0_id_bf2d34d4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=style&index=0&id=bf2d34d4&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true& ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_template_id_bf2d34d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_template_id_bf2d34d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adjust_subtitles_vue_vue_type_template_id_bf2d34d4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=template&id=35af9539&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/setting/adjust-subtitles.vue?vue&type=template&id=bf2d34d4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "settings" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass: "exit-icon",
            on: {
              click: function($event) {
                return _vm.$Helper.home()
              }
            }
          },
          [_c("exit-button")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-12 col-sm-8 offset-sm-2 p-sm-3 mt-5 h-100" },
          [
            _c("div", { staticClass: "title" }, [
              _c("p", [_vm._v(_vm._s(_vm.$t("setting.adjust_subtitles")))])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "btn-group" }, [
              _c("div", { staticClass: "ml-3" }, [
                _c("div", { staticClass: "dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      attrs: {
                        id: "dropdownFontSize",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("setting.font_size")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu dropdown-menu-right",
                      attrs: { "aria-labelledby": "dropdownFontSize" }
                    },
                    [
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontSize = "15px"
                            }
                          }
                        },
                        [_vm._v("25%")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontSize = "20px"
                            }
                          }
                        },
                        [_vm._v("50%")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontSize = "25px"
                            }
                          }
                        },
                        [_vm._v("75%")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontSize = "30px"
                            }
                          }
                        },
                        [_vm._v("100%")]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "ml-3" }, [
                _c("div", { staticClass: "dropdown" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      attrs: {
                        id: "dropdownFontWeight",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("setting.font_weight")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu dropdown-menu-right",
                      attrs: { "aria-labelledby": "dropdownFontWeight" }
                    },
                    [
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontWeight = 500
                            }
                          }
                        },
                        [_vm._v("500")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontWeight = 600
                            }
                          }
                        },
                        [_vm._v("600")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontWeight = 700
                            }
                          }
                        },
                        [_vm._v("700")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontWeight = 800
                            }
                          }
                        },
                        [_vm._v("800")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontWeight = 900
                            }
                          }
                        },
                        [_vm._v("900")]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "dropdown-item",
                          on: {
                            click: function($event) {
                              _vm.caption_style.fontWeight = 100
                            }
                          }
                        },
                        [_vm._v("1000")]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ml-3" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.SHOW_FONT_PICKER }
                    },
                    [_vm._v(_vm._s(_vm.$t("setting.font_color")))]
                  ),
                  _vm._v(" "),
                  _vm.show_font_picker
                    ? _c("chrome-picker", {
                        model: {
                          value: _vm.colors_font,
                          callback: function($$v) {
                            _vm.colors_font = $$v
                          },
                          expression: "colors_font"
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ml-3" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.SHOW_BACKGROUND_PICKER }
                    },
                    [_vm._v(_vm._s(_vm.$t("setting.font_backgrond")))]
                  ),
                  _vm._v(" "),
                  _vm.show_background_picker
                    ? _c("chrome-picker", {
                        model: {
                          value: _vm.colors_background,
                          callback: function($$v) {
                            _vm.colors_background = $$v
                          },
                          expression: "colors_background"
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mt-5" }, [
              _c("img", {
                attrs: {
                  src: "/themes/default/img/background_caption.jpg",
                  alt: "caption_cover",
                  width: "100%"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "div",
                  {
                    staticStyle: {
                      "text-align": "center",
                      "font-style": "normal",
                      "font-variant-ligatures": "normal",
                      "font-variant-caps": "normal",
                      "font-weight": "normal",
                      "font-stretch": "normal",
                      "line-height": "normal",
                      "font-family": "sans-serif",
                      "white-space": "pre-line",
                      position: "absolute",
                      direction: "ltr",
                      "writing-mode": "horizontal-tb",
                      left: "0px",
                      bottom: "40px",
                      right: "0px",
                      height: "42px",
                      "background-color": "rgba(0, 0, 0, 0)"
                    }
                  },
                  [
                    _c("p", { style: _vm.caption_style }, [
                      _vm._v(
                        "Do not go gentle into that good night. Rage, rage against the dying of the light"
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mt-5" }, [
              _c(
                "button",
                { staticClass: "btn btn-warning", on: { click: _vm.CHANGE } },
                [_vm._v(_vm._s(_vm.$t("setting.update")))]
              )
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "exit-button" }, [
      _c("img", {
        attrs: {
          src: "/themes/default/img/exit-icon.svg",
          alt: "exit icon",
          width: "100%"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);