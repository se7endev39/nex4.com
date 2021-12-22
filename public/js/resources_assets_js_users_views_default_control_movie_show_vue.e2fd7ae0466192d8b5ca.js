"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_movie_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _collection_new_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/new.vue */ "./resources/assets/js/users/views/default/control/collection/new.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var plyr = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'plyr'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'plyr/dist/plyr.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "movie-show",
  data: function data() {
    return {
      animation: false,
      castShow: null,
      showplyrmodal: false,
      collection: {
        id: null,
        poster: null,
        name: null,
        type: null,
        index: null
      }
    };
  },
  components: {
    "collection-modal": _collection_new_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    "exit-button": _utils_exit_button_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    data: function data(state) {
      return state.movies.show;
    },
    loading: function loading(state) {
      return state.movies.loading;
    },
    showSearchPageEvent: function showSearchPageEvent(state) {
      return state.event.show_search_page;
    }
  }),
  beforeDestroy: function beforeDestroy() {
    this.$store.commit("CLEAR_MOVIE_SHOW_DATA");
  },
  mounted: function mounted() {
    if (this.$auth.isAuthenticated()) {
      this.$store.dispatch("GET_MOVIE_DETAILS", this.$route.params.id);
    } else {
      this.$store.dispatch("GET_GHOST_MOVIE_DETAILS", this.$route.params.id);
    }
  },
  watch: {
    data: function data() {
      // Runtime format
      if (this.data.movie.runtime <= 60) {
        this.data.movie.runtime = this.data.movie.runtime + "m";
      } else if (this.data.movie.runtime >= 60) {
        var minutes = this.data.movie.runtime % 60;
        var hours = Math.floor(this.data.movie.runtime / 60);
        this.data.movie.runtime = hours + "h " + minutes + "m";
      } // Replice special characters


      this.data.movie.genre = this.data.movie.genre.replace(/-/g, ", "); // Set title

      document.title = this.data.movie.name;
    },
    showplyrmodal: function showplyrmodal() {
      // Run plyr to show trailer
      setTimeout(function () {
        plyr.setup(".plyr");
      }, 100);
    },
    showSearchPageEvent: function showSearchPageEvent() {
      if (!this.showSearchPageEvent) {
        this.$store.commit("SHOW_SEARCH_PAGE");
      }
    }
  },
  methods: {
    SIMILAR_SHOW: function SIMILAR_SHOW(id) {
      if (this.$auth.isAuthenticated()) {
        this.$store.dispatch("GET_MOVIE_DETAILS", id);
      } else {
        this.$store.dispatch("GET_GHOST_MOVIE_DETAILS", id);
      }
    },
    // Show modal of collection
    SHOW_COLLECTION_MODAL: function SHOW_COLLECTION_MODAL(id, poster, name, type) {
      if (this.$auth.isAuthenticated()) {
        this.collection.id = id;
        this.collection.poster = poster;
        this.collection.name = name;
        this.collection.type = type;
      } else {
        this.$router.push({
          name: "login"
        });
      }
    },
    // Hide modal of collection
    HIDE_COLLECTION_MODAL_CANCEL: function HIDE_COLLECTION_MODAL_CANCEL() {
      if (this.$auth.isAuthenticated()) {
        this.collection.id = null;
      } else {
        this.$router.push({
          name: "login"
        });
      }
    },
    // Hide modal and update array
    HIDE_COLLECTION_MODAL_SAVE: function HIDE_COLLECTION_MODAL_SAVE() {
      if (this.$auth.isAuthenticated()) {
        this.collection.id = null;
        this.data.movie.is_favorite = true;
      } else {
        this.$router.push({
          name: "login"
        });
      }
    },
    // Delete mvoie or series from data array
    DELETE_FROM_COLLECTION: function DELETE_FROM_COLLECTION(id, type, index) {
      if (this.$auth.isAuthenticated()) {
        this.data.movie.is_favorite = false;
        this.$store.dispatch("DELETE_FROM_COLLECTION", {
          id: id,
          type: type
        });
      } else {
        this.$router.push({
          name: "login"
        });
      }
    },
    // Add new like or delete it
    // Params type1 detected if add or delete
    ADD_NEW_LIKE: function ADD_NEW_LIKE(id, type, type1) {
      if (this.$auth.isAuthenticated()) {
        if (type1 === "add") {
          // Add true to data array
          this.data.movie.is_like = true;
          this.$store.dispatch("ADD_LIKE", {
            id: id,
            type: type
          });
        } else {
          // Add false to data array
          this.data.movie.is_like = false;
          this.$store.dispatch("ADD_LIKE", {
            id: id,
            type: type
          });
        }
      } else {
        this.$router.push({
          name: "login"
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/assets/js/users/views/default/control/movie/show.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/movie/show.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_015819d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=015819d4& */ "./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_015819d4___WEBPACK_IMPORTED_MODULE_0__.render,
  _show_vue_vue_type_template_id_015819d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/movie/show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_015819d4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_015819d4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_015819d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./show.vue?vue&type=template&id=015819d4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=template&id=35af9539&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _vm.loading
      ? _c("div", { staticClass: "spinner-load" }, [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.data.movie != null
      ? _c(
          "div",
          { staticClass: "show_item" },
          [
            _c("collection-modal", {
              attrs: {
                id: _vm.collection.id,
                poster: _vm.collection.poster,
                name: _vm.collection.name,
                type: _vm.collection.type,
                index: _vm.collection.index
              },
              on: {
                hideModalCollectionCancel: _vm.HIDE_COLLECTION_MODAL_CANCEL,
                hideModalCollectionSave: _vm.HIDE_COLLECTION_MODAL_SAVE
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "exit-icon",
                on: {
                  click: function($event) {
                    return _vm.$Helper.back()
                  }
                }
              },
              [_c("exit-button")],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "show_item__body p-md-5" }, [
              _c(
                "div",
                { staticClass: "show_item__header p-4 p-md-5 p-lg-5 p-xl-5" },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "header__collection ml-2" }, [
                      !_vm.data.movie.is_favorite &&
                      _vm.data.movie.cloud == "local"
                        ? _c(
                            "div",
                            {
                              staticClass: "add",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.SHOW_COLLECTION_MODAL(
                                    _vm.data.movie.id,
                                    "/storage/backdrops/600_" +
                                      _vm.data.movie.backdrop,
                                    _vm.data.movie.name,
                                    "movie"
                                  )
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/themes/default/img/infavor.svg",
                                  alt: "favor",
                                  width: "100%"
                                }
                              }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(_vm._s(_vm.$t("show.my_collection")))
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.data.movie.is_favorite &&
                      _vm.data.movie.cloud == "aws"
                        ? _c(
                            "div",
                            {
                              staticClass: "add",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.SHOW_COLLECTION_MODAL(
                                    _vm.data.movie.id,
                                    _vm.md_backdrop + _vm.data.movie.backdrop,
                                    _vm.data.movie.name,
                                    "movie"
                                  )
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/themes/default/img/infavor.svg",
                                  alt: "favor",
                                  width: "100%"
                                }
                              }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(_vm._s(_vm.$t("show.my_collection")))
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.data.movie.is_favorite
                        ? _c(
                            "div",
                            {
                              staticClass: "remove",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.DELETE_FROM_COLLECTION(
                                    _vm.data.movie.id,
                                    "movie"
                                  )
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/themes/default/img/favor.svg",
                                  alt: "favor",
                                  width: "100%"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.DELETE_FROM_COLLECTION(
                                      _vm.item.id,
                                      "movie",
                                      _vm.index
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(_vm._s(_vm.$t("show.my_collection")))
                              ])
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "header__like ml-4" }, [
                      !_vm.data.movie.is_like
                        ? _c(
                            "div",
                            {
                              staticClass: "add",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.ADD_NEW_LIKE(
                                    _vm.data.movie.id,
                                    "movie",
                                    "add"
                                  )
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/themes/default/img/dislike.svg",
                                  alt: "dislike",
                                  width: "100%"
                                }
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(_vm.$t("show.like")))])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.data.movie.is_like
                        ? _c(
                            "div",
                            {
                              staticClass: "remove",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.ADD_NEW_LIKE(
                                    _vm.data.movie.id,
                                    "movie",
                                    "delete"
                                  )
                                }
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src: "/themes/default/img/like.svg",
                                  alt: "like",
                                  width: "100%"
                                }
                              }),
                              _vm._v(" "),
                              _c("p", [_vm._v(_vm._s(_vm.$t("show.like")))])
                            ]
                          )
                        : _vm._e()
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hidden-sm-down body__background-sm-up" },
                [
                  _vm.data.movie.cloud === "local"
                    ? _c("img", {
                        staticClass: "backdrop",
                        attrs: {
                          src:
                            "/storage/backdrops/original_" +
                            _vm.data.movie.backdrop,
                          alt: _vm.data.movie.name,
                          width: "100%"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.movie.cloud === "aws"
                    ? _c("img", {
                        staticClass: "backdrop",
                        attrs: {
                          src: _vm.lg_backdrop + _vm.data.movie.backdrop,
                          alt: _vm.data.movie.name,
                          width: "100%"
                        }
                      })
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hidden-md-up body__background-sm-down" },
                [
                  _vm.data.movie.cloud === "local"
                    ? _c("img", {
                        staticClass: "backdrop",
                        attrs: {
                          src:
                            "/storage/backdrops/original_" +
                            _vm.data.movie.backdrop,
                          alt: _vm.data.movie.name,
                          width: "100%"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.movie.cloud === "aws"
                    ? _c("img", {
                        staticClass: "backdrop",
                        attrs: {
                          src: _vm.lg_backdrop + _vm.data.movie.backdrop,
                          alt: _vm.data.movie.name,
                          width: "100%"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: _vm.data.movie.users_only
                            ? "movie-player"
                            : "ghost-movie-player",
                          params: { id: _vm.data.movie.id }
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "play hidden-md-up" }, [
                        _c(
                          "svg",
                          {
                            staticClass: "play-big-svg",
                            staticStyle: {
                              "enable-background": "new 0 0 294.843 294.843"
                            },
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                              version: "1.1",
                              id: "Capa_1",
                              x: "0px",
                              y: "0px",
                              viewBox: "0 0 294.843 294.843",
                              "xml:space": "preserve",
                              width: "75px"
                            }
                          },
                          [
                            _c("g", [
                              _c("g", [
                                _c("path", {
                                  staticClass: "active-path",
                                  attrs: {
                                    d:
                                      "M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392   c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421   S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421   s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z",
                                    "data-original": "#000000",
                                    "data-old_color": "#ffffff",
                                    fill: "#ffffff"
                                  }
                                }),
                                _vm._v(" "),
                                _c("path", {
                                  staticClass: "active-path",
                                  attrs: {
                                    d:
                                      "M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883   l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333   c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029   C113.877,77.926,111.575,77.902,109.699,78.969z",
                                    "data-original": "#000000",
                                    "data-old_color": "#ffffff",
                                    fill: "#ffffff"
                                  }
                                })
                              ])
                            ])
                          ]
                        )
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 show_item__overview" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-5 col-md-3 col-xl-2 mt-3 poster-sm-down"
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "poster" },
                        [
                          _vm.data.movie.cloud === "local"
                            ? _c("progressive-img", {
                                attrs: {
                                  src:
                                    "/storage/posters/600_" +
                                    _vm.data.movie.poster,
                                  placeholder:
                                    "/themes/default/img/loader-image.png",
                                  alt: _vm.data.movie.name,
                                  width: "100%",
                                  "aspect-ratio": 1.5,
                                  blur: 0
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.data.movie.cloud === "aws"
                            ? _c("progressive-img", {
                                attrs: {
                                  src: _vm.md_poster + _vm.data.movie.poster,
                                  placeholder:
                                    "/themes/default/img/loader-image.png",
                                  alt: _vm.data.movie.name,
                                  width: "100%",
                                  "aspect-ratio": 1.5,
                                  blur: 0
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-md-8 mt-3 content-sm-down" },
                    [
                      _c("div", { staticClass: "__title" }, [
                        _c("div", { staticClass: "col-12 p-0" }, [
                          _c("h5", [
                            _c("strong", [_vm._v(_vm._s(_vm.data.movie.name))]),
                            _vm._v(" "),
                            _c("strong", { staticClass: "age-rating" }, [
                              _vm._v(_vm._s(_vm.data.movie.age))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "year-genre mb-2" }, [
                            _c("p", { staticClass: "genre" }, [
                              _vm._v(_vm._s(_vm.data.movie.genre))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "dot" }, [_vm._v("|")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "year" }, [
                              _vm._v(_vm._s(_vm.data.movie.year))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "dot" }, [_vm._v("|")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "time" }, [
                              _vm._v(_vm._s(_vm.data.movie.runtime))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.data.movie.overview))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "__more-details" }, [
                        _c("div", { staticClass: "col-12 p-0 rate" }, [
                          _c("h1", [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.data.movie.rate) +
                                "\n                  "
                            ),
                            _c("small", [_vm._v("/10")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 p-0 mt-5 hidden-xs-down __btn-control"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "btn-group" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "btn btn-md-up btn-primary btn-play",
                                  attrs: {
                                    to: {
                                      name: _vm.data.movie.users_only
                                        ? "movie-player"
                                        : "ghost-movie-player",
                                      params: { id: _vm.data.movie.id }
                                    },
                                    role: "button"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Watch Movie\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.data.movie.trailer !== null
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-md-up btn-primary btn-trailer ml-4",
                                      on: {
                                        click: function($event) {
                                          _vm.showplyrmodal = true
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Watch Trailer\n                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "col-12 p-0 mt-5 hidden-sm-up __btn-control"
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "btn-group" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-primary btn-play",
                                  attrs: {
                                    to: {
                                      name: _vm.data.movie.users_only
                                        ? "movie-player"
                                        : "ghost-movie-player",
                                      params: { id: _vm.data.movie.id }
                                    },
                                    role: "button"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                  Watch Movie\n                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.data.movie.trailer !== null
                                ? _c(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary btn-trailer ml-4",
                                      on: {
                                        click: function($event) {
                                          _vm.showplyrmodal = true
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  Watch Trailer\n                "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 p-0 mt-5" }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-12 col-md-8 p-1" }, [
                            _vm.data.casts !== null
                              ? _c(
                                  "div",
                                  { staticClass: "__cast" },
                                  [
                                    _c("h3", [
                                      _c("strong", [
                                        _vm._v(_vm._s(_vm.$t("show.cast")))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.data.casts, function(
                                      item,
                                      index
                                    ) {
                                      return _c(
                                        "div",
                                        {
                                          key: index,
                                          staticClass: "block ml-sm-2 m-1"
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                to: {
                                                  name: "cast",
                                                  params: { id: item.id }
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "image",
                                                  on: {
                                                    mouseover: function(
                                                      $event
                                                    ) {
                                                      _vm.castShow = item.id
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm.data.movie.cloud ===
                                                  "local"
                                                    ? _c("img", {
                                                        attrs: {
                                                          src: item.image,
                                                          alt: item.name,
                                                          width: "100%"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.data.movie.cloud === "aws"
                                                    ? _c("img", {
                                                        attrs: {
                                                          src:
                                                            _vm.sm_cast +
                                                            item.image,
                                                          alt: item.name,
                                                          width: "100%"
                                                        }
                                                      })
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _vm.castShow === item.id
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass: "ovarlay"
                                                        },
                                                        [
                                                          _c(
                                                            "p",
                                                            {
                                                              staticClass:
                                                                "noselect"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  item.name
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    })
                                  ],
                                  2
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _vm.data.similar !== null
                            ? _c(
                                "div",
                                {
                                  staticClass: "col-12 col-md-4 hidden-lg-down"
                                },
                                [
                                  _c("div", { staticClass: "similar" }, [
                                    _c("h3", [
                                      _c("strong", [
                                        _vm._v(_vm._s(_vm.$t("show.similar")))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "row" },
                                      _vm._l(_vm.data.similar, function(
                                        item,
                                        index
                                      ) {
                                        return _c(
                                          "div",
                                          {
                                            key: index,
                                            staticClass: "col-6 p-md-3"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "image",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.SIMILAR_SHOW(
                                                      item.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                item.cloud === "local"
                                                  ? _c("progressive-img", {
                                                      attrs: {
                                                        src:
                                                          "/storage/posters/300_" +
                                                          item.poster,
                                                        placeholder:
                                                          "/themes/default/img/loader-image.png",
                                                        alt: item.name,
                                                        width: "100%"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.cloud === "aws"
                                                  ? _c("progressive-img", {
                                                      attrs: {
                                                        src:
                                                          _vm.sm_poster +
                                                          item.poster,
                                                        placeholder:
                                                          "/themes/default/img/loader-image.png",
                                                        alt: item.name,
                                                        width: "100%"
                                                      }
                                                    })
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 trailer",
                  class: { show: _vm.showplyrmodal }
                },
                [
                  _c("div", { staticClass: "exit" }, [
                    _c("img", {
                      attrs: {
                        "data-v-b12df990": "",
                        src: "/themes/default/img/exit-icon.svg",
                        alt: "exit icon",
                        width: "100%"
                      },
                      on: {
                        click: function($event) {
                          _vm.showplyrmodal = false
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "plyr",
                    attrs: {
                      "data-type": "youtube",
                      "data-video-id": _vm.data.movie.trailer
                    }
                  })
                ]
              )
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hidden-md-up phone" }, [
      _c("div", { attrs: { id: "main" } }, [
        _c("span", { staticClass: "spinner" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hidden-sm-down other" }, [
      _c("div", { attrs: { id: "main" } }, [
        _c("span", { staticClass: "spinner" })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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



/***/ })

}]);