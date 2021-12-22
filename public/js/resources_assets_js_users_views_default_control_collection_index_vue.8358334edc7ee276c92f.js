"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_collection_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/loader */ "./resources/assets/js/users/views/default/control/utils/loader.vue");
/* harmony import */ var _utils_notfound__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/notfound */ "./resources/assets/js/users/views/default/control/utils/notfound.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "collection",
  components: {
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_0__.Carousel,
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_0__.Slide,
    loader: _utils_loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    notfound: _utils_notfound__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      active: null,
      active_movie: null,
      active_series: null,
      show_item: null,
      root_index_show: null,
      inputName: false,
      newCollectionName: '',
      showSlideUpAnimation: false
    };
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.name = to.params.name;
    next();
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch("GET_COLLECTION", this.$route.params.id);
    setTimeout(function () {
      _this.showSlideUpAnimation = true;
    }, 100);
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)({
    data: function data(state) {
      return state.collections.data;
    },
    loading: function loading(state) {
      return state.collections.collection_loading;
    }
  }),
  watch: {
    '$route.params.id': function $routeParamsId(id) {
      if (this.$route.name != 'show-movie-collection-page' && this.$route.name != 'show-series-collection-page') {
        this.$store.dispatch("GET_COLLECTION", id);
      }
    },
    data: function data() {
      this.newCollectionName = this.data.collection.name;
    }
  },
  methods: {
    // Delete mvoie or series from data array
    DELETE_FROM_COLLECTION: function DELETE_FROM_COLLECTION(id, type, index, rootindex) {
      this.data.data.splice(index, 1);
      this.$store.dispatch('DELETE_FROM_COLLECTION', {
        id: id,
        type: type
      });
    },
    EditCollection: function EditCollection() {
      this.data.collection.name = this.newCollectionName;
      this.inputName = false;
      this.$store.dispatch('EDIT_COLLECTION', {
        id: this.$route.params.id,
        name: this.newCollectionName
      });
    },
    DeleteCollection: function DeleteCollection() {
      this.$store.dispatch('DELETE_COLLECTION', this.$route.params.id);
    },
    ACTIVE_SLELECTED_MOVIE: function ACTIVE_SLELECTED_MOVIE(id) {
      this.active_movie = id;
    },
    ACTIVE_SLELECTED_SERIES: function ACTIVE_SLELECTED_SERIES(id) {
      this.active_series = id;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\nsvg[data-v-28f0b4cb]{\n    width: 100px;\n    height: 100px;\n    margin: 20px;\n    display:inline-block;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_28f0b4cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_28f0b4cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_28f0b4cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/collection/index.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/collection/index.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_2bc7d2bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2bc7d2bb& */ "./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=template&id=2bc7d2bb&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2bc7d2bb___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_2bc7d2bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/collection/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/loader.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/loader.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_vue_vue_type_template_id_28f0b4cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.vue?vue&type=template&id=28f0b4cb&scoped=true& */ "./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=template&id=28f0b4cb&scoped=true&");
/* harmony import */ var _loader_vue_vue_type_style_index_0_id_28f0b4cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& */ "./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _loader_vue_vue_type_template_id_28f0b4cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _loader_vue_vue_type_template_id_28f0b4cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "28f0b4cb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/utils/loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_28f0b4cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=template&id=2bc7d2bb&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=template&id=2bc7d2bb& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bc7d2bb___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bc7d2bb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2bc7d2bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=2bc7d2bb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=template&id=2bc7d2bb&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=template&id=28f0b4cb&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=template&id=28f0b4cb&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_28f0b4cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_28f0b4cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_28f0b4cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=28f0b4cb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=template&id=28f0b4cb&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=template&id=2bc7d2bb&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/index.vue?vue&type=template&id=2bc7d2bb& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "xjkax" }, [
    _c("div", { staticClass: "col-12 collection-page p-2 p-sm-2 p-lg-2" }, [
      _vm.loading
        ? _c("div", { staticClass: "loader" }, [_c("loader")], 1)
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "colleciton-details mt-4" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "title col-12 col-sm-4 float-left" }, [
              !_vm.inputName
                ? _c(
                    "h4",
                    {
                      on: {
                        click: function($event) {
                          _vm.inputName = true
                        }
                      }
                    },
                    [_c("strong", [_vm._v(_vm._s(_vm.data.collection.name))])]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.inputName
                ? _c("div", { staticClass: "edit" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newCollectionName,
                          expression: "newCollectionName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "New name" },
                      domProps: { value: _vm.newCollectionName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.newCollectionName = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning mt-2",
                        on: { click: _vm.EditCollection }
                      },
                      [_vm._v("Edit")]
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "delete col-4 float-right text-right" }, [
              _c("div", { on: { click: _vm.DeleteCollection } }, [
                _c(
                  "svg",
                  {
                    staticClass: "delete-svg",
                    staticStyle: {
                      "enable-background": "new 0 0 408.483 408.483"
                    },
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      version: "1.1",
                      x: "0px",
                      y: "0px",
                      width: "100%",
                      viewBox: "0 0 408.483 408.483",
                      "xml:space": "preserve"
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
                                "M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316    H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293    c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329    c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355    c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356    c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z",
                              "data-original": "#000000",
                              "data-old_color": "#000000",
                              fill: "#E21B1B"
                            }
                          }),
                          _vm._v(" "),
                          _c("path", {
                            staticClass: "active-path",
                            attrs: {
                              d:
                                "M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916    c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z",
                              "data-original": "#000000",
                              "data-old_color": "#000000",
                              fill: "#E21B1B"
                            }
                          })
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.data.data !== null
        ? _c("div", { staticClass: "col-12 mt-5 film-list" }, [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.data.data, function(item, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass:
                      "col-6 col-md-4 col-lg-3 col-xl-1-5 col-xxl-1-5 p-2 p-md-4 animation"
                  },
                  [
                    item.type === "movie"
                      ? _c(
                          "div",
                          [
                            _c(
                              "transition",
                              { attrs: { name: "slide-down-fade" } },
                              [
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.showSlideUpAnimation,
                                        expression: "showSlideUpAnimation"
                                      }
                                    ],
                                    staticClass: "animation-ani92X"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "poster",
                                        on: {
                                          mouseover: function($event) {
                                            return _vm.ACTIVE_SLELECTED_MOVIE(
                                              item.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "show-movie",
                                                params: { id: item.id }
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "poster__backdrop-image"
                                              },
                                              [
                                                item.cloud === "local"
                                                  ? _c("progressive-img", {
                                                      attrs: {
                                                        src:
                                                          "/storage/posters/600_" +
                                                          item.poster,
                                                        placeholder:
                                                          "/themes/default/img/loader-image.png",
                                                        alt: item.name,
                                                        width: "100%",
                                                        "aspect-ratio": 1.5,
                                                        blur: 0
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.cloud === "aws"
                                                  ? _c("progressive-img", {
                                                      attrs: {
                                                        src:
                                                          _vm.md_poster +
                                                          item.poster,
                                                        placeholder:
                                                          "/themes/default/img/loader-image.png",
                                                        alt: item.name,
                                                        width: "100%",
                                                        "aspect-ratio": 1.5,
                                                        blur: 0
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.active_movie === item.id
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "poster__backdrop_overlay-info"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "header pull-right"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "mt-0"
                                                              },
                                                              [
                                                                item.is_favorite
                                                                  ? _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "poster__remove-collection-icon text-right"
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "img",
                                                                          {
                                                                            attrs: {
                                                                              src:
                                                                                "/themes/default/img/favor.svg",
                                                                              alt:
                                                                                "favor",
                                                                              width:
                                                                                "100%"
                                                                            },
                                                                            on: {
                                                                              click: function(
                                                                                $event
                                                                              ) {
                                                                                $event.preventDefault()
                                                                                return _vm.DELETE_FROM_COLLECTION(
                                                                                  item.id,
                                                                                  "movie",
                                                                                  index
                                                                                )
                                                                              }
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  : _vm._e()
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "body text-center"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "play"
                                                              },
                                                              [
                                                                _c(
                                                                  "router-link",
                                                                  {
                                                                    attrs: {
                                                                      to: {
                                                                        name:
                                                                          "movie-player",
                                                                        params: {
                                                                          id:
                                                                            item.id
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "svg",
                                                                      {
                                                                        staticClass:
                                                                          "play-svg",
                                                                        staticStyle: {
                                                                          "enable-background":
                                                                            "new 0 0 294.843 294.843"
                                                                        },
                                                                        attrs: {
                                                                          xmlns:
                                                                            "http://www.w3.org/2000/svg",
                                                                          "xmlns:xlink":
                                                                            "http://www.w3.org/1999/xlink",
                                                                          version:
                                                                            "1.1",
                                                                          id:
                                                                            "Capa_1",
                                                                          x:
                                                                            "0px",
                                                                          y:
                                                                            "0px",
                                                                          viewBox:
                                                                            "0 0 294.843 294.843",
                                                                          "xml:space":
                                                                            "preserve",
                                                                          width:
                                                                            "100%"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "g",
                                                                          [
                                                                            _c(
                                                                              "g",
                                                                              [
                                                                                _c(
                                                                                  "path",
                                                                                  {
                                                                                    staticClass:
                                                                                      "active-path",
                                                                                    attrs: {
                                                                                      d:
                                                                                        "M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392   c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421   S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421   s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z",
                                                                                      "data-original":
                                                                                        "#000000",
                                                                                      "data-old_color":
                                                                                        "#ffffff",
                                                                                      fill:
                                                                                        "#ffffff"
                                                                                    }
                                                                                  }
                                                                                ),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                _c(
                                                                                  "path",
                                                                                  {
                                                                                    staticClass:
                                                                                      "active-path",
                                                                                    attrs: {
                                                                                      d:
                                                                                        "M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883   l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333   c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029   C113.877,77.926,111.575,77.902,109.699,78.969z",
                                                                                      "data-original":
                                                                                        "#000000",
                                                                                      "data-old_color":
                                                                                        "#ffffff",
                                                                                      fill:
                                                                                        "#ffffff"
                                                                                    }
                                                                                  }
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("b", [
                                        _vm._v(" " + _vm._s(item.name) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v(_vm._s(item.genre))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    item.current_time !== null &&
                                    _vm.$auth.isAuthenticated() === "active"
                                      ? _c("div", { staticClass: "progress" }, [
                                          _c("div", {
                                            staticClass: "progress-bar",
                                            style: {
                                              width:
                                                (item.current_time /
                                                  item.duration_time) *
                                                  100 +
                                                "%"
                                            },
                                            attrs: {
                                              role: "progressbar",
                                              "aria-valuenow":
                                                (item.current_time /
                                                  item.duration_time) *
                                                100,
                                              "aria-valuemin": "0",
                                              "aria-valuemax": "100"
                                            }
                                          })
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    item.type === "series"
                      ? _c(
                          "div",
                          [
                            _c(
                              "transition",
                              { attrs: { name: "slide-down-fade" } },
                              [
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.showSlideUpAnimation,
                                        expression: "showSlideUpAnimation"
                                      }
                                    ],
                                    staticClass: "animation-ani92X"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "poster",
                                        on: {
                                          mouseover: function($event) {
                                            return _vm.ACTIVE_SLELECTED_SERIES(
                                              item.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "show-series",
                                                params: { id: item.id }
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "poster__backdrop-image"
                                              },
                                              [
                                                item.cloud === "local"
                                                  ? _c("progressive-img", {
                                                      attrs: {
                                                        src:
                                                          "/storage/posters/600_" +
                                                          item.poster,
                                                        placeholder:
                                                          "/themes/default/img/loader-image.png",
                                                        alt: item.name,
                                                        width: "100%",
                                                        "aspect-ratio": 1.5,
                                                        blur: 0
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                item.cloud === "aws"
                                                  ? _c("progressive-img", {
                                                      attrs: {
                                                        src:
                                                          _vm.md_poster +
                                                          item.poster,
                                                        placeholder:
                                                          "/themes/default/img/loader-image.png",
                                                        alt: item.name,
                                                        width: "100%",
                                                        "aspect-ratio": 1.5,
                                                        blur: 0
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "transition",
                                                  { attrs: { name: "fade" } },
                                                  [
                                                    _vm.active_series ===
                                                    item.id
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "poster__backdrop_overlay-info"
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "header pull-right"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "mt-0"
                                                                  },
                                                                  [
                                                                    item.is_favorite
                                                                      ? _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "poster__remove-collection-icon text-right"
                                                                          },
                                                                          [
                                                                            _c(
                                                                              "img",
                                                                              {
                                                                                attrs: {
                                                                                  src:
                                                                                    "/themes/default/img/favor.svg",
                                                                                  alt:
                                                                                    "favor",
                                                                                  width:
                                                                                    "100%"
                                                                                },
                                                                                on: {
                                                                                  click: function(
                                                                                    $event
                                                                                  ) {
                                                                                    $event.preventDefault()
                                                                                    return _vm.DELETE_FROM_COLLECTION(
                                                                                      item.id,
                                                                                      "series",
                                                                                      index
                                                                                    )
                                                                                  }
                                                                                }
                                                                              }
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "body text-center"
                                                              },
                                                              [
                                                                _c(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "play"
                                                                  },
                                                                  [
                                                                    item.already_episode !==
                                                                      0 &&
                                                                    item.already_episode !==
                                                                      null
                                                                      ? _c(
                                                                          "div",
                                                                          [
                                                                            _c(
                                                                              "router-link",
                                                                              {
                                                                                attrs: {
                                                                                  to: {
                                                                                    name:
                                                                                      "series-player",
                                                                                    params: {
                                                                                      series_id:
                                                                                        item.id
                                                                                    }
                                                                                  }
                                                                                }
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "svg",
                                                                                  {
                                                                                    staticClass:
                                                                                      "play-svg",
                                                                                    staticStyle: {
                                                                                      "enable-background":
                                                                                        "new 0 0 294.843 294.843"
                                                                                    },
                                                                                    attrs: {
                                                                                      xmlns:
                                                                                        "http://www.w3.org/2000/svg",
                                                                                      "xmlns:xlink":
                                                                                        "http://www.w3.org/1999/xlink",
                                                                                      version:
                                                                                        "1.1",
                                                                                      id:
                                                                                        "Capa_1",
                                                                                      x:
                                                                                        "0px",
                                                                                      y:
                                                                                        "0px",
                                                                                      viewBox:
                                                                                        "0 0 294.843 294.843",
                                                                                      "xml:space":
                                                                                        "preserve",
                                                                                      width:
                                                                                        "100%"
                                                                                    }
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "g",
                                                                                      [
                                                                                        _c(
                                                                                          "g",
                                                                                          [
                                                                                            _c(
                                                                                              "path",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "active-path",
                                                                                                attrs: {
                                                                                                  d:
                                                                                                    "M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392   c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421   S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421   s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z",
                                                                                                  "data-original":
                                                                                                    "#000000",
                                                                                                  "data-old_color":
                                                                                                    "#ffffff",
                                                                                                  fill:
                                                                                                    "#ffffff"
                                                                                                }
                                                                                              }
                                                                                            ),
                                                                                            _vm._v(
                                                                                              " "
                                                                                            ),
                                                                                            _c(
                                                                                              "path",
                                                                                              {
                                                                                                staticClass:
                                                                                                  "active-path",
                                                                                                attrs: {
                                                                                                  d:
                                                                                                    "M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883   l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333   c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029   C113.877,77.926,111.575,77.902,109.699,78.969z",
                                                                                                  "data-original":
                                                                                                    "#000000",
                                                                                                  "data-old_color":
                                                                                                    "#ffffff",
                                                                                                  fill:
                                                                                                    "#ffffff"
                                                                                                }
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        )
                                                                                      ]
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            )
                                                                          ],
                                                                          1
                                                                        )
                                                                      : _c(
                                                                          "div",
                                                                          [
                                                                            _c(
                                                                              "h3",
                                                                              [
                                                                                _c(
                                                                                  "strong",
                                                                                  [
                                                                                    _vm._v(
                                                                                      _vm._s(
                                                                                        _vm.$t(
                                                                                          "show.soon"
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ]
                                                                            )
                                                                          ]
                                                                        )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "mt-2" }, [
                                      _c("b", [
                                        _vm._v(" " + _vm._s(item.name) + " ")
                                      ]),
                                      _vm._v(" "),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c(
                                        "small",
                                        { staticClass: "text-muted" },
                                        [_vm._v(_vm._s(item.genre))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    item.current_time !== null &&
                                    _vm.$auth.isAuthenticated() === "active"
                                      ? _c("div", { staticClass: "progress" }, [
                                          _c("div", {
                                            staticClass: "progress-bar",
                                            style: {
                                              width:
                                                (item.current_time /
                                                  item.duration_time) *
                                                  100 +
                                                "%"
                                            },
                                            attrs: {
                                              role: "progressbar",
                                              "aria-valuenow":
                                                (item.current_time /
                                                  item.duration_time) *
                                                100,
                                              "aria-valuemin": "0",
                                              "aria-valuemax": "100"
                                            }
                                          })
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              }),
              0
            )
          ])
        : _c("div", [
            _c("div", { staticClass: "mt-5 text-center notfound" }, [
              _c(
                "h4",
                [
                  _c("notfound"),
                  _vm._v(" "),
                  _c("strong", [_vm._v(_vm._s(_vm.$t("home.sorry_no_result")))])
                ],
                1
              )
            ])
          ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=template&id=28f0b4cb&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=template&id=28f0b4cb&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
              fill: "#fff",
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