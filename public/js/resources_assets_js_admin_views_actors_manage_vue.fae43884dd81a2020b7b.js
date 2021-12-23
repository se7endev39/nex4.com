"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_actors_manage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/actors/manage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/actors/manage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/loader */ "./resources/assets/js/admin/views/components/loader.vue");
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
var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      new_actor_name: "",
      show_key: null,
      button_loading: false,
      search_query: ""
    };
  },
  components: {
    Loader: _components_loader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    data: function data(state) {
      return state.actors.data;
    },
    data_search: function data_search(state) {
      return state.actors.data_search;
    },
    spinner_loading: function spinner_loading(state) {
      return state.actors.spinner_loading;
    }
  }),
  created: function created() {
    this.$store.commit("CLEAN_SEARCH_ACTORS");
    this.$store.dispatch("GET_ALL_ACTORS");
  },
  methods: {
    PAGINATION: function PAGINATION(path_url) {
      this.$store.dispatch("GET_ACTORS_PAGINATION", path_url);
    },
    SHOW_EDIT: function SHOW_EDIT(key) {
      if (this.show_key === key) {
        this.show_key = false;
      } else {
        this.show_key = key;
      }
    },
    UPDATE: function UPDATE(id, key) {
      var _this = this;

      this.button_loading = id;
      var formData = new FormData();
      var image = document.getElementById("image_" + id).files[0];

      if (image === undefined) {
        formData.append("id", id);
        formData.append("name", this.data.actors.data[key].name);
      } else {
        formData.append("id", id);
        formData.append("image", image);
        formData.append("name", this.data.actors.data[key].name);
      }

      axios.post("/api/admin/update/actors/", formData).then(function (response) {
        if (response.status === 200) {
          _this.data.actors.data[key].image = response.data.image;
          _this.data.actors.data[key].name = response.data.name;
          _this.show_key = false;
          _this.button_loading = false;
          alertify.logPosition("top right");
          alertify.success(response.data.message);
        }
      });
    },
    READ_IMAGE: function READ_IMAGE(id) {
      var img = document.getElementById("image_" + id);
      var tgt = img.target || window.event.srcElement,
          files = tgt.files; // FileReader support

      if (FileReader && files && files.length) {
        var fr = new FileReader();

        fr.onload = function () {
          var srcImage = document.getElementById("preview_" + id);
          srcImage.style.display = "block";
          srcImage.src = fr.result;
        };

        fr.readAsDataURL(files[0]);
      } else {// Not supported
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
      }
    },
    CREATE_ACTOR: function CREATE_ACTOR() {
      var _this2 = this;

      this.button_loading = true;
      var formData = new FormData();
      var photo = document.getElementById("photo").files[0];
      formData.append("photo", photo);
      formData.append("name", this.new_actor_name);
      this.$validator.validateAll().then(function (result) {
        axios.post("/api/admin/new/actor", formData).then(function (response) {
          if (response.data.status === "success") {
            alertify.logPosition("top right");
            alertify.success(response.data.message);

            if (_this2.data.actors === null) {
              _this2.data.actors = {
                data: []
              };

              _this2.data.actors.data.push(response.data.actor);
            } else {
              _this2.data.actors.data.push(response.data.actor);
            }

            _this2.button_loading = false;
          }
        }, function (error) {
          _this2.button_loading = false;
        });
      });
    },
    DELETE: function DELETE(id, key) {
      var _this3 = this;

      swal({
        title: "Are you sure to delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          _this3.$store.dispatch("DELETE_ACTOR", {
            id: id,
            key: key
          });
        }
      });
    },
    SEARCH: function SEARCH() {
      if (this.search_query !== "") {
        this.$store.dispatch("GET_ACTORS_SEARCH", this.search_query);
      } else {
        this.$store.commit("CLEAR_SEARCH");
      }
    },
    readImage: function readImage(id, outImage) {
      var img = document.getElementById(id);
      var tgt = img.target || window.event.srcElement,
          files = tgt.files; // FileReader support

      if (FileReader && files && files.length) {
        var fr = new FileReader();

        fr.onload = function () {
          var srcImage = document.getElementById(outImage);
          srcImage.style.display = "block";
          srcImage.src = fr.result;
        };

        fr.readAsDataURL(files[0]);
      } else {// Not supported
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nsvg[data-v-2dd876c9]{\nposition: absolute;\ntop: 0px;\nright: 0px;\nwidth: 80px;\nheight: 80px;\ndisplay: inline-block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_2dd876c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_2dd876c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_2dd876c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



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

/***/ "./resources/assets/js/admin/views/actors/manage.vue":
/*!***********************************************************!*\
  !*** ./resources/assets/js/admin/views/actors/manage.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manage_vue_vue_type_template_id_5bade2da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage.vue?vue&type=template&id=5bade2da& */ "./resources/assets/js/admin/views/actors/manage.vue?vue&type=template&id=5bade2da&");
/* harmony import */ var _manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/actors/manage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _manage_vue_vue_type_template_id_5bade2da___WEBPACK_IMPORTED_MODULE_0__.render,
  _manage_vue_vue_type_template_id_5bade2da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/actors/manage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/components/loader.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/admin/views/components/loader.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_vue_vue_type_template_id_2dd876c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.vue?vue&type=template&id=2dd876c9&scoped=true& */ "./resources/assets/js/admin/views/components/loader.vue?vue&type=template&id=2dd876c9&scoped=true&");
/* harmony import */ var _loader_vue_vue_type_style_index_0_id_2dd876c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& */ "./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _loader_vue_vue_type_template_id_2dd876c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _loader_vue_vue_type_template_id_2dd876c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2dd876c9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/components/loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/actors/manage.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/actors/manage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/actors/manage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_2dd876c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/admin/views/actors/manage.vue?vue&type=template&id=5bade2da&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/actors/manage.vue?vue&type=template&id=5bade2da& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_5bade2da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_5bade2da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manage_vue_vue_type_template_id_5bade2da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./manage.vue?vue&type=template&id=5bade2da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/actors/manage.vue?vue&type=template&id=5bade2da&");


/***/ }),

/***/ "./resources/assets/js/admin/views/components/loader.vue?vue&type=template&id=2dd876c9&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/components/loader.vue?vue&type=template&id=2dd876c9&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_2dd876c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_2dd876c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_2dd876c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=2dd876c9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=template&id=2dd876c9&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/actors/manage.vue?vue&type=template&id=5bade2da&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/actors/manage.vue?vue&type=template&id=5bade2da& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _c("div", { staticClass: "k1_manage_table" }, [
      _c("h5", { staticClass: "title p-2" }, [_vm._v("Actors")]),
      _vm._v(" "),
      _c("div", { staticClass: "my-2 p-3" }, [
        _c("div", { staticClass: "col-12 row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-6 pull-right" }, [
            _c("div", { staticClass: "pull-right", attrs: { id: "search" } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search_query,
                    expression: "search_query"
                  }
                ],
                staticClass: "form-control mr-sm-2",
                attrs: { type: "text", placeholder: "Search" },
                domProps: { value: _vm.search_query },
                on: {
                  keyup: _vm.SEARCH,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search_query = $event.target.value
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _vm.spinner_loading
          ? _c("div", { staticClass: "spinner-load" }, [_c("Loader")], 1)
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "CreateActorModal",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "CreateActorModalLabel",
              "aria-hidden": "true"
            }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-body" }, [
                    _c("div", { staticClass: "create-actor" }, [
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|max:60",
                              expression: "'required|max:60'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_actor_name,
                              expression: "new_actor_name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            id: "name",
                            name: "name",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.new_actor_name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.new_actor_name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("name"),
                                expression: "errors.has('name')"
                              }
                            ],
                            staticClass: "is-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("name")))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("div", { staticClass: "image-upload" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|image",
                                expression: "'required|image'"
                              }
                            ],
                            staticClass: "inputfile",
                            attrs: { type: "file", id: "photo", name: "photo" },
                            on: {
                              change: function($event) {
                                return _vm.readImage("photo", "posterFileImage")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("photo"),
                                  expression: "errors.has('photo')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("photo")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "modal-footer" }, [
                    !_vm.button_loading
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-warning",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.CREATE_ACTOR()
                              }
                            }
                          },
                          [_vm._v("Create")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.button_loading
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-warning",
                            attrs: { disabled: "" }
                          },
                          [
                            _c("i", { attrs: { id: "btn-progress" } }),
                            _vm._v(" Loading")
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.spinner_loading
          ? _c("div", [
              _vm.data.actors !== null
                ? _c("div", { staticClass: "m-2" }, [
                    _vm.data_search === null
                      ? _c(
                          "div",
                          { staticClass: "row" },
                          _vm._l(_vm.data.actors.data, function(item, index) {
                            return _c(
                              "div",
                              {
                                key: index,
                                staticClass:
                                  "col-8 col-sm-3 col-lg-2 mt-2 actor"
                              },
                              [
                                _c("div", { staticClass: "actor-image" }, [
                                  item.cloud == "local"
                                    ? _c("img", {
                                        attrs: {
                                          src: item.image,
                                          alt: item.name,
                                          width: "100%"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  item.cloud == "aws"
                                    ? _c("img", {
                                        attrs: {
                                          src: _vm.md_cast + item.image,
                                          alt: item.name,
                                          width: "100%"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "control" }, [
                                    _c("div", { staticClass: "row" }, [
                                      _c("i", {
                                        staticClass: "fa fa-pencil ml-2",
                                        attrs: { "aria-hidden": "true" },
                                        on: {
                                          click: function($event) {
                                            return _vm.SHOW_EDIT(index)
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("i", {
                                        staticClass: "fa fa-trash ml-2",
                                        attrs: { "aria-hidden": "true" },
                                        on: {
                                          click: function($event) {
                                            return _vm.DELETE(item.id, index)
                                          }
                                        }
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  index === _vm.show_key
                                    ? _c(
                                        "div",
                                        { staticClass: "image-upload" },
                                        [
                                          _c("img", {
                                            staticClass: "img-rounded",
                                            attrs: {
                                              src: item.image,
                                              id: "preview_" + item.id,
                                              width: "100%"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "image",
                                                expression: "'image'"
                                              }
                                            ],
                                            staticClass: "inputfile",
                                            attrs: {
                                              type: "file",
                                              name: "image_" + item.id,
                                              id: "image_" + item.id
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.READ_IMAGE(item.id)
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "label",
                                            {
                                              attrs: { for: "image_" + item.id }
                                            },
                                            [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-cloud-upload",
                                                attrs: { "aria-hidden": "true" }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "details" }, [
                                    index === _vm.show_key
                                      ? _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: item.name,
                                              expression: "item.name"
                                            },
                                            {
                                              name: "validate",
                                              rawName: "v-validate",
                                              value: "required|max:60",
                                              expression: "'required|max:60'"
                                            }
                                          ],
                                          attrs: { type: "text" },
                                          domProps: { value: item.name },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                item,
                                                "name",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    index === _vm.show_key &&
                                    !_vm.button_loading
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-warning",
                                            on: {
                                              click: function($event) {
                                                return _vm.UPDATE(
                                                  item.id,
                                                  index
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Update")]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.button_loading === item.id
                                      ? _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-warning",
                                            attrs: { disabled: "" }
                                          },
                                          [
                                            _c("i", {
                                              attrs: { id: "btn-progress" }
                                            }),
                                            _vm._v(" Loading")
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                index !== _vm.show_key
                                  ? _c("p", { staticClass: "mt-2" }, [
                                      _vm._v(_vm._s(item.name))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(item.name),
                                        expression: "errors.has(item.name)"
                                      }
                                    ],
                                    staticClass: " is-danger"
                                  },
                                  [_vm._v(_vm._s(_vm.errors.first(item.name)))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.errors.has(
                                          "image_" + item.id
                                        ),
                                        expression:
                                          "errors.has('image_'+item.id)"
                                      }
                                    ],
                                    staticClass: " is-danger"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.errors.first("image_" + item.id)
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      : _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _vm._l(_vm.data_search.actors, function(
                              item,
                              index
                            ) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass:
                                    "col-6 col-sm-4 col-lg-3 col-xl-2 mt-2 actor"
                                },
                                [
                                  _c("div", { staticClass: "actor-image" }, [
                                    item.cloud == "local"
                                      ? _c("img", {
                                          attrs: {
                                            src: item.image,
                                            alt: item.name,
                                            width: "100%"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.cloud == "aws"
                                      ? _c("img", {
                                          attrs: {
                                            src: _vm.md_cast + item.image,
                                            alt: item.name,
                                            width: "100%"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "control" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c("i", {
                                          staticClass: "fa fa-pencil ml-2",
                                          attrs: { "aria-hidden": "true" },
                                          on: {
                                            click: function($event) {
                                              return _vm.SHOW_EDIT(index)
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                          staticClass: "fa fa-trash ml-2",
                                          attrs: { "aria-hidden": "true" },
                                          on: {
                                            click: function($event) {
                                              return _vm.DELETE(item.id, index)
                                            }
                                          }
                                        })
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    index === _vm.show_key
                                      ? _c(
                                          "div",
                                          { staticClass: "image-upload" },
                                          [
                                            _c("img", {
                                              staticClass: "img-rounded",
                                              attrs: {
                                                src: item.image,
                                                id: "preview_" + item.id,
                                                width: "100%"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "image",
                                                  expression: "'image'"
                                                }
                                              ],
                                              staticClass: "inputfile",
                                              attrs: {
                                                type: "file",
                                                name: "image_" + item.id,
                                                id: "image_" + item.id
                                              },
                                              on: {
                                                change: function($event) {
                                                  return _vm.READ_IMAGE(item.id)
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "image_" + item.id
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-cloud-upload",
                                                  attrs: {
                                                    "aria-hidden": "true"
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "details" }, [
                                      index === _vm.show_key
                                        ? _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: item.name,
                                                expression: "item.name"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "required|max:60",
                                                expression: "'required|max:60'"
                                              }
                                            ],
                                            attrs: { type: "text" },
                                            domProps: { value: item.name },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "name",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      index === _vm.show_key &&
                                      !_vm.button_loading
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-warning",
                                              on: {
                                                click: function($event) {
                                                  return _vm.UPDATE(
                                                    item.id,
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Update")]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.button_loading === item.id
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-warning",
                                              attrs: { disabled: "" }
                                            },
                                            [
                                              _c("i", {
                                                attrs: { id: "btn-progress" }
                                              }),
                                              _vm._v(" Loading")
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  index !== _vm.show_key
                                    ? _c("p", { staticClass: "mt-2" }, [
                                        _vm._v(_vm._s(item.name))
                                      ])
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has(item.name),
                                          expression: "errors.has(item.name)"
                                        }
                                      ],
                                      staticClass: " is-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first(item.name))
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.errors.has(
                                            "image_" + item.id
                                          ),
                                          expression:
                                            "errors.has('image_'+item.id)"
                                        }
                                      ],
                                      staticClass: " is-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("image_" + item.id)
                                        )
                                      )
                                    ]
                                  )
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _vm.data_search === null
                              ? _c("div", [_vm._m(4)])
                              : _vm._e()
                          ],
                          2
                        ),
                    _vm._v(" "),
                    _vm.data.actors !== null && _vm.data_search === null
                      ? _c(
                          "nav",
                          {
                            staticClass: "m-4 p-1",
                            attrs: { "aria-label": "pagination" }
                          },
                          [
                            _c("ul", { staticClass: "pagination " }, [
                              _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  attrs: { id: "end" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      on: {
                                        click: function($event) {
                                          return _vm.PAGINATION(
                                            "/api/admin/get/actors"
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Begin")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  class: {
                                    disabled:
                                      _vm.data.actors.prev_page_url === null
                                  },
                                  attrs: { id: "prev" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      on: {
                                        click: function($event) {
                                          return _vm.PAGINATION(
                                            _vm.data.actors.prev_page_url
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Previous")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("li", { staticClass: "page-item" }, [
                                _c("a", { staticClass: "page-link" }, [
                                  _vm._v(
                                    _vm._s(_vm.data.actors.current_page) +
                                      "/" +
                                      _vm._s(_vm.data.actors.last_page)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  class: {
                                    disabled:
                                      _vm.data.actors.next_page_url === null
                                  },
                                  attrs: { id: "next" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      on: {
                                        click: function($event) {
                                          return _vm.PAGINATION(
                                            _vm.data.actors.next_page_url
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Next")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticClass: "page-item",
                                  attrs: { id: "end" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "page-link",
                                      on: {
                                        click: function($event) {
                                          return _vm.PAGINATION(
                                            "/api/admin/get/actors?page=" +
                                              _vm.data.actors.last_page
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("End")]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                : _c("div", [_vm._m(5)])
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("div", { staticClass: "group-btn" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-sm btn-warning",
            attrs: {
              type: "button",
              "data-toggle": "modal",
              "data-target": "#CreateActorModal"
            }
          },
          [_vm._v("\n              Create new actor\n            ")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "CreateActorModalLabel" } },
        [_vm._v("New actor")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "photoLabel", for: "photo" } }, [
      _vm._v("Choose a poster\n                      "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group col-md-12" }, [
      _c("img", {
        staticStyle: { display: "none" },
        attrs: { src: "", id: "posterFileImage", width: "200" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("No result were found")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("No result were found")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=template&id=2dd876c9&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=template&id=2dd876c9&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "loader-svg" }, [
    _c(
      "svg",
      {
        attrs: {
          version: "1.1",
          id: "L9",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100",
          "enable-background": "new 0 0 0 0",
          "xml:space": "preserve"
        }
      },
      [
        _c(
          "path",
          {
            attrs: {
              fill: "rgb(130, 138, 159)",
              d:
                "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            }
          },
          [
            _c("animateTransform", {
              attrs: {
                attributeName: "transform",
                attributeType: "XML",
                type: "rotate",
                dur: "1s",
                from: "0 50 50",
                to: "360 50 50",
                repeatCount: "indefinite"
              }
            })
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);