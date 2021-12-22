"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_movies_movies-manage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      query: "",
      show_subtitle_modal: false,
      percentSubtitleUpload: 0,
      subtitle_video: false,
      subtitle_movie_id: null,
      error_message_subtitle: "",
      success_message_subtitle: "",
      disable_button: false,
      multi_select: [],
      showGroupButton: false
    };
  },
  components: {
    Loader: _components_loader__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    data: function data(state) {
      return state.movies.data;
    },
    data_search: function data_search(state) {
      return state.movies.data_search;
    },
    button_loading: function button_loading(state) {
      return state.movies.button_loading;
    },
    spinner_loading: function spinner_loading(state) {
      return state.movies.spinner_loading;
    },
    subtitles: function subtitles(state) {
      return state.subtitles.data;
    },
    subtitle_spinner_loading: function subtitle_spinner_loading(state) {
      return state.subtitles.spinner_loading;
    }
  }),
  watch: {
    multi_select: function multi_select() {
      if (this.multi_select.length > 0) {
        this.showGroupButton = true;
      } else {
        this.showGroupButton = false;
        document.getElementById("select-all").checked = false;
      }
    }
  },
  created: function created() {
    this.$store.commit("CLEAN_SEARCH_MOVIES");
    this.$store.dispatch("GET_MOVIES");
  },
  methods: {
    DELETE: function DELETE(id, key) {
      var _this = this;

      swal({
        title: "Are you sure to delete ?",
        icon: "warning",
        text: "All videos and subtitles will removed!",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          for (var i = 0; i < _this.multi_select.length; i++) {
            document.getElementById(_this.multi_select[i].id).checked = false;
          }

          _this.$store.dispatch("DELETE_MOVIE", _this.multi_select);

          _this.multi_select = [];
        }
      });
    },
    PAGINATION: function PAGINATION(path_url) {
      this.$store.dispatch("GET_MOVIES_PAGINATION", path_url);
    },
    SEARCH: function SEARCH() {
      if (this.query.length > 0) {
        this.$store.dispatch("GET_MOVIE_SEARCH", this.query);
      } else {
        this.data_search.movies = null;
      }
    },
    ADD_TO_TOP: function ADD_TO_TOP(id, key) {
      this.$store.dispatch("ADD_MOVIE_TO_TOP", {
        id: id,
        key: key
      });
    },
    GET_SUBTITLE: function GET_SUBTITLE(id, key) {
      this.show_subtitle_modal = true;
      this.subtitle_movie_id = id;
      this.$store.dispatch("GET_MOVIE_SUBTITLES", id);
    },
    UPLOAD_SUBTITLE: function UPLOAD_SUBTITLE(id) {
      var _this2 = this;

      var formData = new FormData();
      var sub = document.getElementById("subtitle").files.length;

      for (var x = 0; x < sub; x++) {
        formData.append("subtitleUpload[]", document.getElementById("subtitle").files[x]);
      }

      formData.append("id", this.subtitle_movie_id); // Progress

      this.subtitle_video = true;
      this.disable_button = true;
      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        },
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this2.percentSubtitleUpload = Math.round(progressEvent.loaded * 100.0 / progressEvent.total);
        }
      };
      axios.post("/api/admin/new/movie/moviesubtitle", formData, progress).then(function (response) {
        if (response.status === 200) {
          _this2.success_message_subtitle = response.data.message;

          if (_this2.subtitles.subtitles != null) {
            _this2.subtitles.subtitles.push(response.data.data);
          } else {
            _this2.subtitles.subtitles = [];
            _this2.subtitles.subtitles[0] = response.data.data;
          }

          setTimeout(function () {
            _this2.subtitle_video = false;
            _this2.disable_button = false;
          }, 500);
        }
      }, function (error) {
        _this2.disable_button = false;
        _this2.error_message_subtitle = error.response.data.message;
        setTimeout(function () {
          _this2.subtitle_video = false;
        }, 1500);
      });
    },
    DELETE_SUBTITLE: function DELETE_SUBTITLE(id, key) {
      var _this3 = this;

      swal({
        title: "Are you sure to delete ?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          _this3.$store.dispatch("DELETE_SUBTITLE", {
            id: id,
            key: key
          });
        }
      });
    },
    AVAILABLE_IT: function AVAILABLE_IT(id, index) {
      var _this4 = this;

      for (var i = 0; i < this.multi_select.length; i++) {
        document.getElementById(this.multi_select[i].id).checked = false;
      }

      axios.post("/api/admin/update/movie/available", {
        list: this.multi_select
      }).then(function (response) {
        if (response.status === 200) {
          for (var _i = 0; _i < response.data.list.length; _i++) {
            _this4.data.movies.data[response.data.list[_i].key].show = response.data.list[_i].show;
          }

          _this4.multi_select = [];
        }
      }, function (error) {
        _this4.multi_select = [];
      });
    },
    USERS_ONLY: function USERS_ONLY(vai) {
      var _this5 = this;

      for (var i = 0; i < this.multi_select.length; i++) {
        document.getElementById(this.multi_select[i].id).checked = false;
      }

      axios.post("/api/admin/update/movie/users-only", {
        list: this.multi_select,
        users_only: vai
      }).then(function (response) {
        if (response.status === 200) {
          for (var _i2 = 0; _i2 < response.data.list.length; _i2++) {
            _this5.data.movies.data[response.data.list[_i2].key].m_users_only = vai;
          }

          _this5.multi_select = [];
        }
      }, function (error) {
        _this5.multi_select = [];
      });
    },
    SHOW_FILES_INFO: function SHOW_FILES_INFO(idFiles, idDetails) {
      var x = document.getElementById(idFiles);
      var txt = "";

      if ("files" in x) {
        for (var i = 0; i < x.files.length; i++) {
          txt += "<br><strong>" + (i + 1) + ". file</strong><br>";
          var file = x.files[i];

          if ("name" in file) {
            txt += "name: " + file.name + "<br>";
          }

          if ("size" in file) {
            if (file.size < 1048576) txt += "size:" + (file.size / 1024).toFixed(3) + "KB<br>";
          }
        }
      }

      document.getElementById(idDetails).innerHTML = txt;
    },
    ADD_TO_MULITSELECT: function ADD_TO_MULITSELECT(item, key) {
      if (this.multi_select.length > 0) {
        for (var i = 0; i < this.multi_select.length; i++) {
          if (this.multi_select[i].id == item) {
            this.multi_select.splice(i, 1);
            return;
          }
        }

        this.multi_select.push({
          id: item,
          key: key
        });
      } else {
        this.multi_select.push({
          id: item,
          key: key
        });
      }
    },
    ADD_ALL_TO_MULITSELECT: function ADD_ALL_TO_MULITSELECT() {
      if (this.multi_select.length > 0) {
        for (var i = 0; i < this.multi_select.length; i++) {
          document.getElementById(this.multi_select[i].id).checked = false;
        }

        this.multi_select = [];
      } else {
        for (var _i3 = 0; _i3 < this.data.movies.data.length; _i3++) {
          this.multi_select.push({
            id: this.data.movies.data[_i3].id,
            key: _i3
          });
          document.getElementById(this.data.movies.data[_i3].id).checked = true;
        }
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

/***/ "./resources/assets/js/admin/views/movies/movies-manage.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/movies-manage.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movies_manage_vue_vue_type_template_id_73639154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-manage.vue?vue&type=template&id=73639154& */ "./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=template&id=73639154&");
/* harmony import */ var _movies_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-manage.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _movies_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _movies_manage_vue_vue_type_template_id_73639154___WEBPACK_IMPORTED_MODULE_0__.render,
  _movies_manage_vue_vue_type_template_id_73639154___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/movies/movies-manage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movies_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./movies-manage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movies_manage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=template&id=73639154&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=template&id=73639154& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movies_manage_vue_vue_type_template_id_73639154___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movies_manage_vue_vue_type_template_id_73639154___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movies_manage_vue_vue_type_template_id_73639154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./movies-manage.vue?vue&type=template&id=73639154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=template&id=73639154&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=template&id=73639154&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/movies-manage.vue?vue&type=template&id=73639154& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("h5", { staticClass: "title p-2" }, [_vm._v("Movies")]),
      _vm._v(" "),
      _c("div", { staticClass: "m-2", attrs: { id: "manage-panel" } }, [
        _vm.showGroupButton
          ? _c("div", { staticClass: "float-left mt-3" }, [
              _c("div", { staticClass: "button-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.AVAILABLE_IT()
                      }
                    }
                  },
                  [_vm._v("\n            Available / Unavailable\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.DELETE()
                      }
                    }
                  },
                  [_vm._v("\n            Delete\n          ")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "button-group mt-2" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.USERS_ONLY(1)
                      }
                    }
                  },
                  [_vm._v("\n            Users only\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-warning",
                    on: {
                      click: function($event) {
                        return _vm.USERS_ONLY(0)
                      }
                    }
                  },
                  [_vm._v("\n            For all\n          ")]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("ul", { staticClass: "nav nav-tabs" }, [
          _c("li", { staticClass: "col col-md-4 offset-md-8" }, [
            _c("div", { attrs: { id: "search" } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.query,
                    expression: "query"
                  }
                ],
                staticClass: "form-control mr-sm-2",
                attrs: { type: "text", placeholder: "Search" },
                domProps: { value: _vm.query },
                on: {
                  keyup: _vm.SEARCH,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.query = $event.target.value
                  }
                }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.spinner_loading
        ? _c("div", { staticClass: "spinner-load" }, [_c("Loader")], 1)
        : _vm._e(),
      _vm._v(" "),
      !_vm.spinner_loading
        ? _c("div", [
            _c("div", { staticClass: "subtitles-modal" }, [
              _c(
                "div",
                {
                  staticClass: "modal fade",
                  attrs: {
                    id: "GetSubtitleModal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "GetSubtitleModalLabel",
                    "aria-hidden": "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _vm.subtitle_spinner_loading
                            ? _c(
                                "div",
                                { staticClass: "spinner-load" },
                                [_c("Loader")],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12" }, [
                            _c("input", {
                              staticClass: "inputfile",
                              attrs: {
                                type: "file",
                                id: "subtitle",
                                name: "subtitle",
                                multiple: "",
                                size: "10"
                              },
                              on: {
                                change: function($event) {
                                  return _vm.SHOW_FILES_INFO(
                                    "subtitle",
                                    "subtitleFileDetails"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(1)
                          ]),
                          _vm._v(" "),
                          _vm.subtitle_video
                            ? _c(
                                "div",
                                { staticClass: "subtitle-progress mt-1 p-4" },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "svg ml-3" }, [
                                      _c(
                                        "svg",
                                        {
                                          staticStyle: {
                                            "enable-background":
                                              "new 0 0 384 384"
                                          },
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "xmlns:xlink":
                                              "http://www.w3.org/1999/xlink",
                                            version: "1.1",
                                            id: "Capa_1",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "0 0 384 384",
                                            "xml:space": "preserve",
                                            width: "50px"
                                          }
                                        },
                                        [
                                          _c("g", [
                                            _c("g", [
                                              _c("g", [
                                                _c("path", {
                                                  staticClass: "active-path",
                                                  attrs: {
                                                    d:
                                                      "M341.333,21.333H42.667C19.093,21.333,0,40.427,0,64v256c0,23.573,19.093,42.667,42.667,42.667h298.667    C364.907,362.667,384,343.573,384,320V64C384,40.427,364.907,21.333,341.333,21.333z M170.667,170.667h-32V160H96v64h42.667    v-10.667h32v21.333c0,11.733-9.493,21.333-21.333,21.333h-64C73.493,256,64,246.4,64,234.667v-85.333    C64,137.6,73.493,128,85.333,128h64c11.84,0,21.333,9.6,21.333,21.333V170.667z M320,170.667h-32V160h-42.667v64H288v-10.667h32    v21.333C320,246.4,310.507,256,298.667,256h-64c-11.84,0-21.333-9.6-21.333-21.333v-85.333c0-11.733,9.493-21.333,21.333-21.333    h64c11.84,0,21.333,9.6,21.333,21.333V170.667z",
                                                    "data-original": "#000000",
                                                    "data-old_color": "#00A6F9",
                                                    fill: "#00A6F9"
                                                  }
                                                })
                                              ])
                                            ])
                                          ])
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _vm._m(2)
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "progress" }, [
                                    _vm.percentSubtitleUpload !== 100
                                      ? _c("div", {
                                          staticClass: "progress-bar",
                                          style: {
                                            width:
                                              _vm.percentSubtitleUpload + "%",
                                            height: "6px"
                                          },
                                          attrs: {
                                            role: "progressbar",
                                            "aria-valuenow":
                                              _vm.percentSubtitleUpload,
                                            "aria-valuemin": "0",
                                            "aria-valuemax": "100"
                                          }
                                        })
                                      : _c("div", [
                                          _c("i", {
                                            attrs: { id: "btn-progress" }
                                          }),
                                          _vm._v(" Prepare")
                                        ])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "is-danger" }, [
                                    _vm._v(_vm._s(_vm.error_message_subtitle))
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "is-success" }, [
                                    _vm._v(_vm._s(_vm.success_message_subtitle))
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("hr"),
                          _vm._v(" "),
                          _vm.subtitles.subtitles !== null
                            ? _c("div", { staticClass: "table-responsive" }, [
                                _c(
                                  "div",
                                  { staticClass: "table table-hover" },
                                  [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      _vm._l(_vm.subtitles.subtitles, function(
                                        item,
                                        index
                                      ) {
                                        return _c("tr", { key: index }, [
                                          _c("td", [_vm._v(_vm._s(item.name))]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.language))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _vm._v(_vm._s(item.created_at))
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "btn-group",
                                                attrs: { role: "group" }
                                              },
                                              [
                                                !_vm.button_loading
                                                  ? _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-danger btn-sm mr-2",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.DELETE_SUBTITLE(
                                                              item.id,
                                                              index
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                              Delete\n                            "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.button_loading === item.id
                                                  ? _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-sm btn-danger btn-sm mr-2",
                                                        attrs: { disabled: "" }
                                                      },
                                                      [
                                                        _c("i", {
                                                          attrs: {
                                                            id: "btn-progress"
                                                          }
                                                        }),
                                                        _vm._v(
                                                          " Loading\n                            "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          ])
                                        ])
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            : _c("div", { staticClass: "text-center" }, [
                                _c("h4", [_vm._v("There is no subtitles")])
                              ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-warning",
                              class: { disabled: _vm.disable_button },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.UPLOAD_SUBTITLE()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                  Upload Subtitle\n                "
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _vm.data.movies === null
              ? _c("div", { staticClass: "text-center" }, [
                  _c("h4", [_vm._v("No result were found")])
                ])
              : _c("div", [
                  Object.keys(_vm.data_search).length > 0 &&
                  _vm.data_search.movies !== null
                    ? _c("div", { staticClass: "mt-2" }, [
                        _c("div", { staticClass: "table table-hover" }, [
                          _c("thead", [
                            _c(
                              "th",
                              { staticStyle: { "text-align": "center" } },
                              [
                                _c("input", {
                                  attrs: { type: "checkbox", id: "select-all" },
                                  on: {
                                    click: function($event) {
                                      return _vm.ADD_ALL_TO_MULITSELECT()
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("th", [_vm._v("Cover")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Year")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Cloud")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Category")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Watch")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Created date")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Updated date")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Control")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.data_search.movies, function(
                              item,
                              index
                            ) {
                              return _c("tr", { key: index }, [
                                _c(
                                  "td",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox", id: item.id },
                                      on: {
                                        click: function($event) {
                                          return _vm.ADD_TO_MULITSELECT(
                                            item.id,
                                            index
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                item.m_cloud == "local"
                                  ? _c("td", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/posters/300_" +
                                            item.poster,
                                          alt: item.m_name,
                                          width: "40"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.m_cloud == "aws"
                                  ? _c("td", [
                                      _c("img", {
                                        attrs: {
                                          src: _vm.md_poster + item.poster,
                                          alt: item.m_name,
                                          width: "40"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.m_name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.m_year))]),
                                _vm._v(" "),
                                item.m_cloud == "local"
                                  ? _c("td", [_vm._v("Local Server")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.m_cloud == "aws"
                                  ? _c("td", [_vm._v("AWS S3")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 0
                                  ? _c("td", [_vm._v("Unavailable")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 1
                                  ? _c("td", [_vm._v("Available")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 2
                                  ? _c("td", [_vm._v("Progress")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 3
                                  ? _c("td", [_vm._v("Encoding error")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.m_category))]),
                                _vm._v(" "),
                                item.m_users_only
                                  ? _c("td", [_vm._v("Users")])
                                  : _c("td", [_vm._v("All")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.created_at))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.updated_at))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "btn-group",
                                      attrs: { role: "group" }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            to: {
                                              name: "analysis-movie",
                                              params: { id: item.id }
                                            },
                                            role: "button"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Analysis\n                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      item.movie_id !== item.id
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-warning btn-sm mr-2",
                                              attrs: { id: item.id },
                                              on: {
                                                click: function($event) {
                                                  return _vm.ADD_TO_TOP(
                                                    item.id,
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Top\n                    "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            "data-toggle": "modal",
                                            "data-target": "#GetSubtitleModal"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.GET_SUBTITLE(
                                                item.id,
                                                index
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      Get Subtitles\n                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            to: {
                                              name: "movie_edit",
                                              params: { id: item.id }
                                            },
                                            role: "button"
                                          }
                                        },
                                        [_vm._v("Edit\n                    ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            role: "buttton",
                                            to: {
                                              name: "movie-ads",
                                              params: { id: item.id }
                                            }
                                          }
                                        },
                                        [_vm._v("Ads")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data_search.movies === null ||
                  Object.keys(_vm.data_search).length === 0
                    ? _c("div", { staticClass: "table-responsive mt-2" }, [
                        _c("div", { staticClass: "table table-hover" }, [
                          _c("thead", [
                            _c(
                              "th",
                              { staticStyle: { "text-align": "center" } },
                              [
                                _c("input", {
                                  attrs: { type: "checkbox", id: "select-all" },
                                  on: {
                                    click: function($event) {
                                      return _vm.ADD_ALL_TO_MULITSELECT()
                                    }
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("th", [_vm._v("Cover")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Year")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Cloud")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Category")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Watch")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Created date")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Updated date")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Control")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.data.movies.data, function(item, index) {
                              return _c("tr", { key: index }, [
                                _c(
                                  "td",
                                  { staticStyle: { "text-align": "center" } },
                                  [
                                    _c("input", {
                                      attrs: { type: "checkbox", id: item.id },
                                      on: {
                                        click: function($event) {
                                          return _vm.ADD_TO_MULITSELECT(
                                            item.id,
                                            index
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                item.m_cloud == "local"
                                  ? _c("td", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/posters/300_" +
                                            item.poster,
                                          alt: item.name,
                                          width: "40"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.m_cloud == "aws"
                                  ? _c("td", [
                                      _c("img", {
                                        attrs: {
                                          src: _vm.md_poster + item.poster,
                                          alt: item.name,
                                          width: "40"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.year))]),
                                _vm._v(" "),
                                item.m_cloud == "local"
                                  ? _c("td", [_vm._v("Local Server")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.m_cloud == "aws"
                                  ? _c("td", [_vm._v("AWS S3")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 0
                                  ? _c("td", [_vm._v("Unavailable")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 1
                                  ? _c("td", [_vm._v("Available")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 2
                                  ? _c("td", [_vm._v("Progress")])
                                  : _vm._e(),
                                _vm._v(" "),
                                item.show === 3
                                  ? _c("td", [_vm._v("Encoding error")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.category))]),
                                _vm._v(" "),
                                item.m_users_only
                                  ? _c("td", [_vm._v("Users")])
                                  : _c("td", [_vm._v("All")]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.created_at))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(item.updated_at))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "btn-group",
                                      attrs: { role: "group" }
                                    },
                                    [
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            to: {
                                              name: "analysis-movie",
                                              params: { id: item.id }
                                            },
                                            role: "button"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "Analysis\n                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      item.movie_id !== item.id
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-warning btn-sm mr-2",
                                              attrs: { id: item.id },
                                              on: {
                                                click: function($event) {
                                                  return _vm.ADD_TO_TOP(
                                                    item.id,
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      Top\n                    "
                                              )
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            "data-toggle": "modal",
                                            "data-target": "#GetSubtitleModal"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.GET_SUBTITLE(
                                                item.id,
                                                index
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      Get Subtitles\n                    "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            to: {
                                              name: "movie_edit",
                                              params: { id: item.id }
                                            },
                                            role: "button"
                                          }
                                        },
                                        [_vm._v("Edit\n                    ")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass:
                                            "btn btn-sm btn-warning btn-sm mr-2",
                                          attrs: {
                                            role: "button",
                                            to: {
                                              name: "movie-ads",
                                              params: { id: item.id }
                                            }
                                          }
                                        },
                                        [_vm._v("Ads")]
                                      )
                                    ],
                                    1
                                  )
                                ])
                              ])
                            }),
                            0
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data_search.movies === null ||
                  Object.keys(_vm.data_search).length === 0
                    ? _c(
                        "nav",
                        {
                          staticClass: "m-4 p-1",
                          attrs: { "aria-label": "pagination" }
                        },
                        [
                          _c("ul", { staticClass: "pagination" }, [
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
                                          "/api/admin/get/movies"
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
                                    _vm.data.movies.prev_page_url === null
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
                                          _vm.data.movies.prev_page_url
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
                                  _vm._s(_vm.data.movies.current_page) +
                                    "/" +
                                    _vm._s(_vm.data.movies.last_page)
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
                                    _vm.data.movies.next_page_url === null
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
                                          _vm.data.movies.next_page_url
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
                                          "/api/admin/get/movies?page=" +
                                            _vm.data.movies.last_page
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
          ])
        : _vm._e()
    ])
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
        { staticClass: "modal-title", attrs: { id: "GetSubtitleModalLabel" } },
        [_vm._v("\n                  Subtitles\n                ")]
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
    return _c("label", { attrs: { id: "subtitleLabel", for: "subtitle" } }, [
      _vm._v("Add New Subtitles\n                    "),
      _c("br"),
      _vm._v(" "),
      _c("small", [
        _vm._v(
          "The name most be of the same language exm:\n                      English.srt"
        )
      ]),
      _vm._v(" "),
      _c("p", { attrs: { id: "subtitleFileDetails" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h6", [_c("strong", [_vm._v("Upload and convert srt ")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Language")]),
      _vm._v(" "),
      _c("th", [_vm._v("Created date")]),
      _vm._v(" "),
      _c("th", [_vm._v("Control")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);