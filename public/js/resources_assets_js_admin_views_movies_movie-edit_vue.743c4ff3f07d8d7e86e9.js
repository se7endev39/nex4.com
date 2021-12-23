"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_movies_movie-edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      genres: [],
      showProgress: false,
      movieedit: false,
      embedCode: "",
      search_query: "",
      percentCompleted: 0,
      selectedCast3: null,
      error_message_edit: "",
      success_message_edit: ""
    };
  },
  components: {
    Loader: _components_loader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    data: function data(state) {
      return state.movies.data;
    },
    genre_list: function genre_list(state) {
      return state.genres.data;
    },
    data_actors: function data_actors(state) {
      return state.actors.data;
    },
    data_actors_search: function data_actors_search(state) {
      return state.actors.data_search;
    },
    button_loading: function button_loading(state) {
      return state.movies.button_loading;
    },
    spinner_loading: function spinner_loading(state) {
      return state.movies.spinner_loading;
    },
    spinner_loading_actor: function spinner_loading_actor(state) {
      return state.actors.spinner_loading;
    },
    categories_list: function categories_list(state) {
      return state.categories.data;
    }
  }),
  created: function created() {
    this.$store.dispatch('GET_CATEGORIES_BY_SORT', 'movie');
    this.$store.dispatch("GET_ALL_GENRES");
  },
  watch: {
    search_query: function search_query(val) {
      if (val !== "") {
        this.$store.dispatch("GET_ACTORS_SEARCH", val);
      } else {
        this.$store.commit("CLEAR_SEARCH");
      }
    }
  },
  mounted: function mounted() {
    this.$store.dispatch("GET_MOVIE", this.$route.params.id);
    this.$store.dispatch("GET_ALL_ACTORS");
  },
  methods: {
    UPDATE: function UPDATE(id) {
      var _this = this;

      var poster = document.querySelector("#poster");
      var backdrop = document.querySelector("#backdrop");
      var formData = new FormData();
      formData.append("id", this.data.movie.id);
      formData.append("name", this.data.movie.name);
      formData.append("year", this.data.movie.year);
      formData.append("age", this.data.movie.age);
      formData.append("genres", this.genres);
      formData.append("overview", this.data.movie.overview);
      formData.append("runtime", this.data.movie.runtime);
      formData.append("rate", this.data.movie.rate);
      formData.append("youtube", this.data.movie.youtube);
      formData.append("poster", poster.files[0]);
      formData.append("backdrop", backdrop.files[0]);
      formData.append("cast", JSON.stringify(this.data.cast));
      formData.append("category", this.data.movie.category);
      formData.append("videos", JSON.stringify(this.data.videos));
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.showProgress = true;
          _this.movieedit = true;
          var progress = {
            headers: {
              "content-type": "multipart/form-data"
            },
            onUploadProgress: function onUploadProgress(progressEvent) {
              _this.percentCompleted = Math.round(progressEvent.loaded * 100.0 / progressEvent.total);
            }
          };
          var _self = _this;
          axios.post("api/admin/update/movie", formData, progress).then(function (response) {
            if (response.status === 200) {
              _this.success_message_edit = response.data.message;
              setTimeout(function () {
                _this.$router.go(-1);
              }, 2000);
            }
          });
        }
      }, function (error) {
        _this.error_message_edit = response.data.message;
      });
    },
    ADD_ACTOR: function ADD_ACTOR(key, type) {
      if (type === "default") {
        this.data.cast.push(this.data_actors.actors.data[key]);
        alertify.logPosition("top right");
        alertify.success(this.data_actors.actors.data[key].name + " has been added to cast");
      } else if (type === "search") {
        this.data.cast.push(this.data_actors_search.actors[key]);
        alertify.logPosition("top right");
        alertify.success(this.data_actors_search.actors[key].name + " has been added to cast");
      }
    },
    DELETE_ACTOR: function DELETE_ACTOR(key) {
      this.data.cast.splice(key, 1);
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

/***/ "./resources/assets/js/admin/views/movies/movie-edit.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/movie-edit.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movie_edit_vue_vue_type_template_id_49f2ba20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-edit.vue?vue&type=template&id=49f2ba20& */ "./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=template&id=49f2ba20&");
/* harmony import */ var _movie_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-edit.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _movie_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _movie_edit_vue_vue_type_template_id_49f2ba20___WEBPACK_IMPORTED_MODULE_0__.render,
  _movie_edit_vue_vue_type_template_id_49f2ba20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/movies/movie-edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./movie-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_2dd876c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/components/loader.vue?vue&type=style&index=0&id=2dd876c9&scoped=true&lang=css&");


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

/***/ "./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=template&id=49f2ba20&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=template&id=49f2ba20& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_edit_vue_vue_type_template_id_49f2ba20___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_edit_vue_vue_type_template_id_49f2ba20___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_edit_vue_vue_type_template_id_49f2ba20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./movie-edit.vue?vue&type=template&id=49f2ba20& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=template&id=49f2ba20&");


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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=template&id=49f2ba20&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movie-edit.vue?vue&type=template&id=49f2ba20& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _vm.spinner_loading
      ? _c("div", { staticClass: "spinner-load" }, [_c("Loader")], 1)
      : _vm._e(),
    _vm._v(" "),
    !_vm.spinner_loading
      ? _c("div", { staticClass: "k1_manage_table" }, [
          _c("h5", { staticClass: "title p-2" }, [
            _vm._v(_vm._s(_vm.data.movie.name))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "actor-modal" }, [
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "GetActorModal",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "GetActorModalLabel",
                  "aria-hidden": "true"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "modal-dialog modal-lg",
                    attrs: { role: "document" }
                  },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-body" }, [
                        _vm.spinner_loading_actor
                          ? _c(
                              "div",
                              { staticClass: "spinner-load" },
                              [_c("Loader")],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v("Search")]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search_query,
                                  expression: "search_query"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "search",
                                type: "text",
                                placeholder: "Search By Name"
                              },
                              domProps: { value: _vm.search_query },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.search_query = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm.data_actors.actors !== null
                            ? _c("div", { staticClass: "col-12" }, [
                                _vm.data_actors_search === null
                                  ? _c(
                                      "div",
                                      { staticClass: "row" },
                                      _vm._l(
                                        _vm.data_actors.actors.data,
                                        function(item, index) {
                                          return _c(
                                            "div",
                                            {
                                              key: index,
                                              staticClass:
                                                "col-8 col-sm-3 mt-2 add-actor",
                                              on: {
                                                click: function($event) {
                                                  return _vm.ADD_ACTOR(
                                                    index,
                                                    "default"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "image" },
                                                [
                                                  item.cloud == "local"
                                                    ? _c("img", {
                                                        staticClass:
                                                          "img-rounded",
                                                        attrs: {
                                                          src: item.image,
                                                          id:
                                                            "preview_" +
                                                            item.id,
                                                          width: "100%"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  item.cloud == "aws"
                                                    ? _c("img", {
                                                        staticClass:
                                                          "img-rounded",
                                                        attrs: {
                                                          src:
                                                            _vm.md_cast +
                                                            item.image,
                                                          id:
                                                            "preview_" +
                                                            item.id,
                                                          width: "100%"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("p", [
                                                    _vm._v(_vm._s(item.name))
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    )
                                  : _c(
                                      "div",
                                      { staticClass: "row" },
                                      _vm._l(
                                        _vm.data_actors_search.actors,
                                        function(item, index) {
                                          return _c(
                                            "div",
                                            {
                                              key: index,
                                              staticClass:
                                                "col-8 col-sm-3 mt-2 add-actor",
                                              on: {
                                                click: function($event) {
                                                  return _vm.ADD_ACTOR(
                                                    index,
                                                    "search"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "image" },
                                                [
                                                  item.cloud == "local" ||
                                                  item.cloud == null
                                                    ? _c("img", {
                                                        staticClass:
                                                          "img-rounded",
                                                        attrs: {
                                                          src: item.image,
                                                          id:
                                                            "preview_" +
                                                            item.id,
                                                          width: "100%"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  item.cloud == "aws"
                                                    ? _c("img", {
                                                        staticClass:
                                                          "img-rounded",
                                                        attrs: {
                                                          src:
                                                            _vm.md_cast +
                                                            item.image,
                                                          id:
                                                            "preview_" +
                                                            item.id,
                                                          width: "100%"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("p", [
                                                    _vm._v(_vm._s(item.name))
                                                  ])
                                                ]
                                              )
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    )
                              ])
                            : _c("div", [_vm._m(1)])
                        ])
                      ])
                    ])
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-md-6" }, [
              _c("div", { staticClass: "form-group" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|max:30",
                        expression: "'required|max:30'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.movie.name,
                        expression: "data.movie.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "name", type: "text", placeholder: "Name" },
                    domProps: { value: _vm.data.movie.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data.movie, "name", $event.target.value)
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
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric|max:4",
                        expression: "'required|numeric|max:4'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.movie.year,
                        expression: "data.movie.year"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "year", type: "text", placeholder: "Years" },
                    domProps: { value: _vm.data.movie.year },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data.movie, "year", $event.target.value)
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
                          value: _vm.errors.has("year"),
                          expression: "errors.has('year')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("year")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.genres,
                          expression: "genres"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { multiple: "", name: "genres" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.genres = $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        }
                      }
                    },
                    _vm._l(_vm.genre_list, function(item, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item.name } },
                        [_vm._v(_vm._s(item.name))]
                      )
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.movie.category,
                          expression: "data.movie.category"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "category", id: "category" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.data.movie,
                            "category",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.categories_list.categories, function(
                      item,
                      index
                    ) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: item.id } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.name) +
                              "\n                            "
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("category"),
                          expression: "errors.has('category')"
                        }
                      ],
                      staticClass: " is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("category")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(6),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.movie.overview,
                        expression: "data.movie.overview"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "overview",
                      type: "text",
                      placeholder: "Overview"
                    },
                    domProps: { value: _vm.data.movie.overview },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.data.movie,
                          "overview",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(7),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|decimal|max:10",
                        expression: "'required|decimal|max:10'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.movie.runtime,
                        expression: "data.movie.runtime"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "runtime",
                      type: "text",
                      placeholder: "Runtime"
                    },
                    domProps: { value: _vm.data.movie.runtime },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data.movie, "runtime", $event.target.value)
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
                          value: _vm.errors.has("runtime"),
                          expression: "errors.has('runtime')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.errors.first("runtime")) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|decimal|max:5",
                        expression: "'required|decimal|max:5'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.movie.rate,
                        expression: "data.movie.rate"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "rate", type: "text", placeholder: "Rate" },
                    domProps: { value: _vm.data.movie.rate },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data.movie, "rate", $event.target.value)
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
                          value: _vm.errors.has("rate"),
                          expression: "errors.has('rate')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("rate")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(9),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "url|max:300",
                        expression: "'url|max:300'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.movie.youtube,
                        expression: "data.movie.youtube"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "youtube",
                      type: "text",
                      placeholder: "Trailer"
                    },
                    domProps: { value: _vm.data.movie.youtube },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.data.movie, "youtube", $event.target.value)
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
                          value: _vm.errors.has("youtube"),
                          expression: "errors.has('youtube')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.errors.first("youtube")) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("label", { attrs: { for: "age" } }, [
                    _vm._v("Rating system")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        },
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.movie.age,
                          expression: "data.movie.age"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { name: "age", id: "age" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.data.movie,
                            "age",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", [_vm._v("G")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("PG")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("PG-13")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("R")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("X")])
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
                          value: _vm.errors.has("age"),
                          expression: "errors.has('age')"
                        }
                      ],
                      staticClass: " is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("age")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(10),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
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
                    attrs: { type: "file", id: "poster", name: "poster" },
                    on: {
                      change: function($event) {
                        return _vm.readImage("poster", "posterFileImage")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(11),
                  _vm._v(" "),
                  _vm.data.movie.cloud == "local" ||
                  _vm.data.movie.cloud == null
                    ? _c("img", {
                        attrs: {
                          src: "/storage/posters/300_" + _vm.data.movie.poster,
                          id: "posterFileImage",
                          width: "40%"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.movie.cloud == "aws"
                    ? _c("img", {
                        attrs: {
                          src: _vm.md_poster + _vm.data.movie.poster,
                          alt: _vm.data.movie.poster,
                          width: "300px"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("poster"),
                          expression: "errors.has('poster')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("poster")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _vm._m(12),
                _vm._v(" "),
                _c("div", { staticClass: "col-12" }, [
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
                    attrs: { type: "file", id: "backdrop", name: "backdrop" },
                    on: {
                      change: function($event) {
                        return _vm.readImage("backdrop", "backdropFileImage")
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(13),
                  _vm._v(" "),
                  _vm.data.movie.cloud == "local" ||
                  _vm.data.movie.cloud == null
                    ? _c("img", {
                        attrs: {
                          src:
                            "/storage/backdrops/300_" + _vm.data.movie.backdrop,
                          id: "backdropFileImage",
                          width: "100%"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.movie.cloud == "aws"
                    ? _c("img", {
                        attrs: {
                          src: _vm.md_backdrop + _vm.data.movie.backdrop,
                          alt: _vm.data.movie.backdrop,
                          width: "100%"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("backdrop"),
                          expression: "errors.has('backdrop')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("backdrop")))]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 col-md-6 cast" }, [
              _c("h5", { staticClass: "title p-2" }, [_vm._v("Cast")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "row" },
                [
                  _vm._l(_vm.data.cast, function(item, key) {
                    return _c(
                      "div",
                      {
                        key: key,
                        staticClass: "col-6 col-lg-4 col-xl-3 mt-4 text-center"
                      },
                      [
                        _c("div", { staticClass: "image-cast" }, [
                          _c("div", { staticClass: "delete-cast" }, [
                            _c("i", {
                              staticClass: "fa fa-times-circle",
                              on: {
                                click: function($event) {
                                  return _vm.DELETE_ACTOR(key)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "image" }, [
                            item.cloud == "local"
                              ? _c("img", {
                                  staticClass: "img-rounded",
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
                                  staticClass: "img-rounded",
                                  attrs: {
                                    src: _vm.md_cast + item.image,
                                    alt: item.name,
                                    width: "100%"
                                  }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(item.name))])
                        ])
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm._m(14)
                ],
                2
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "mt-4",
                  attrs: { id: "accordion resolution-videos" }
                },
                [
                  _c("h5", { staticClass: "title p-2" }, [_vm._v("Videos")]),
                  _vm._v(" "),
                  _vm._l(_vm.data.videos, function(item, index) {
                    return _c("div", { key: index, staticClass: "card" }, [
                      item.video_format !== "embed"
                        ? _c(
                            "div",
                            {
                              staticClass: "card-header",
                              attrs: { id: "heading" + index }
                            },
                            [
                              _c("h5", { staticClass: "mb-0" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-link",
                                    attrs: {
                                      "data-toggle": "collapse",
                                      "data-target": "#collapse" + index,
                                      "aria-expanded": "true",
                                      "aria-controls": "collapse" + index
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Resolution "
                                    ),
                                    item.resolution === "320"
                                      ? _c("span", [_vm._v("320P")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.resolution === "480"
                                      ? _c("span", [_vm._v("480P")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.resolution === "720"
                                      ? _c("span", [_vm._v("720P")])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.resolution === "1080"
                                      ? _c("span", [_vm._v("1080P")])
                                      : _vm._e()
                                  ]
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "collapse show",
                          attrs: {
                            id: "collapse" + index,
                            "aria-labelledby": "heading" + index,
                            "data-parent": "#accordion"
                          }
                        },
                        [
                          _c("div", { staticClass: "card-body" }, [
                            _c(
                              "div",
                              { staticClass: "form-group video-player" },
                              [
                                item.video_format !== "embed"
                                  ? _c(
                                      "video",
                                      {
                                        attrs: { width: "100%", controls: "" }
                                      },
                                      [
                                        _c("source", {
                                          attrs: { src: item.video_url }
                                        }),
                                        _vm._v(
                                          "\n                                        Your browser does not support the video tag.\n                                    "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            ),
                            _vm._v(" "),
                            item.video_format !== "embed"
                              ? _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "m-1",
                                      attrs: { for: "link" }
                                    },
                                    [_vm._v("Video Link")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.video_url,
                                        expression: "item.video_url"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "link",
                                      id: "link"
                                    },
                                    domProps: { value: item.video_url },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "video_url",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            item.video_format === "embed"
                              ? _c("div", { staticClass: "form-group" }, [
                                  _c(
                                    "label",
                                    {
                                      staticClass: "m-1",
                                      attrs: { for: "link" }
                                    },
                                    [_vm._v("Embed Code " + _vm._s(index + 1))]
                                  ),
                                  _vm._v(" "),
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: item.embed_code,
                                        expression: "item.embed_code"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "link",
                                      rows: "5",
                                      id: "embed",
                                      placeholder:
                                        "Put your new code for update"
                                    },
                                    domProps: { value: item.embed_code },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          item,
                                          "embed_code",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              : _vm._e()
                          ])
                        ]
                      )
                    ])
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group m-3" }, [
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-md btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.UPDATE(_vm.data.movie.id)
                      }
                    }
                  },
                  [_vm._v("UPDATE")]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.showProgress
              ? _c("div", { staticClass: "upload-modal" }, [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-body p-4" }, [
                          _vm.movieedit
                            ? _c("div", { staticClass: "movieapi" }, [
                                _c("div", { staticClass: "progress mt-2" }, [
                                  _c("div", {
                                    staticClass: "progress-bar",
                                    style: {
                                      width: _vm.percentCompleted + "%",
                                      height: "6px"
                                    },
                                    attrs: {
                                      role: "progressbar",
                                      "aria-valuenow": _vm.percentCompleted,
                                      "aria-valuemin": "0",
                                      "aria-valuemax": "100"
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "is-danger" }, [
                                  _vm._v(_vm._s(_vm.error_message_edit))
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "is-success" }, [
                                  _vm._v(_vm._s(_vm.success_message_edit))
                                ]),
                                _vm._v(" "),
                                _c("hr")
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e()
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "GetActorModalLabel" } },
        [_vm._v("Actors")]
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
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", [_vm._v("No result were found")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [_c("label", [_vm._v("Name")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [_c("label", [_vm._v("Years")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("label", [_vm._v("Genres")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", { attrs: { for: "category" } }, [_vm._v("Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("label", [_vm._v("Overview")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("label", [_vm._v("Runtime")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [_c("label", [_vm._v("Rate")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-2" }, [
      _c("label", [_vm._v("Trailer")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-sm-4" }, [
      _c("label", [_vm._v("Poster")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "posterLabel", for: "poster" } }, [
      _vm._v("Choose a poster\n                            "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-sm-4" }, [
      _c("label", [_vm._v("Backdrop")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "backdropLabel", for: "backdrop" } }, [
      _vm._v("Choose a backdrop\n                            "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-3 col-sm-4 col-12 mt-4 text-center" },
      [
        _c(
          "div",
          {
            staticClass: "add-cast",
            attrs: { "data-toggle": "modal", "data-target": "#GetActorModal" }
          },
          [_c("h3", [_vm._v("ADD")])]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);