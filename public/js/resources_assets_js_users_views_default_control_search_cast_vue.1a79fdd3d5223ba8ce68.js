"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_search_cast_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _collection_new_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/new.vue */ "./resources/assets/js/users/views/default/control/collection/new.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "cast",
  data: function data() {
    return {
      active_series: null,
      active_movie: null,
      show_item: null,
      collection: {
        id: null,
        poster: null,
        name: null,
        type: null,
        index: null
      }
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)({
    data: function data(state) {
      return state.casts.data;
    },
    loading: function loading(state) {
      return state.casts.loading;
    },
    showSearchPageEvent: function showSearchPageEvent(state) {
      return state.event.show_search_page;
    }
  }),
  components: {
    Carousel: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Slide: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    notfound: _utils_notfound__WEBPACK_IMPORTED_MODULE_2__["default"],
    "collection-modal": _collection_new_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.name = to.params.name;
    next();
  },
  mounted: function mounted() {
    if (this.$auth.isAuthenticated()) {
      this.$store.dispatch("GET_CAST_DETAILS", this.$route.params.id);
    } else {
      this.$store.dispatch("GET_GHOST_CAST_DETAILS", this.$route.params.id);
    }
  },
  methods: {
    // Show modal of collection
    SHOW_COLLECTION_MODAL: function SHOW_COLLECTION_MODAL(id, backdrop, name, type, index) {
      this.collection.id = id;
      this.collection.poster = backdrop;
      this.collection.name = name;
      this.collection.type = type;
      this.collection.index = index;
    },
    // Hide modal of collection
    HIDE_COLLECTION_MODAL_CANCEL: function HIDE_COLLECTION_MODAL_CANCEL() {
      this.collection.id = null;
    },
    // Hide modal and update array
    HIDE_COLLECTION_MODAL_SAVE: function HIDE_COLLECTION_MODAL_SAVE() {
      this.collection.id = null;
      this.data.filmography[this.collection.index].is_favorite = true;
    },
    // Delete mvoie or series from data array
    DELETE_FROM_COLLECTION: function DELETE_FROM_COLLECTION(id, type, index) {
      this.data.filmography[index].is_favorite = false;
      this.$store.dispatch("DELETE_FROM_COLLECTION", {
        id: id,
        type: type
      });
    },
    // Add new like or delete it
    // Params type1 detected if add or delete
    ADD_NEW_LIKE: function ADD_NEW_LIKE(id, type, index, type1) {
      if (type1 === "add") {
        // Add true to data array
        this.data.filmography[index].is_like = true;
        this.$store.dispatch("ADD_LIKE", {
          id: id,
          type: type
        });
      } else {
        // Add false to data array
        this.data.filmography[index].is_like = false;
        this.$store.dispatch("ADD_LIKE", {
          id: id,
          type: type
        });
      }
    },
    ACTIVE_SLELECTED_SERIES: function ACTIVE_SLELECTED_SERIES(id) {
      this.active_movie = null;
      this.active_series = id;
    },
    ACTIVE_SLELECTED_MOVIE: function ACTIVE_SLELECTED_MOVIE(id) {
      this.active_series = null;
      this.active_movie = id;
    },
    GET_MOVIE: function GET_MOVIE(id) {
      this.show_item = id;
      this.$router.push({
        name: "show-movie-cast-page",
        params: {
          id: id
        }
      });
      location.href = "#show-scroll";
    },
    GET_SERIES: function GET_SERIES(id) {
      this.show_item = id;
      this.$router.push({
        name: "show-series-cast-page",
        params: {
          id: id
        }
      });
      location.href = "#show-scroll";
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/search/cast.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/search/cast.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cast_vue_vue_type_template_id_5d1e49c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast.vue?vue&type=template&id=5d1e49c8& */ "./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=template&id=5d1e49c8&");
/* harmony import */ var _cast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cast.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cast_vue_vue_type_template_id_5d1e49c8___WEBPACK_IMPORTED_MODULE_0__.render,
  _cast_vue_vue_type_template_id_5d1e49c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/search/cast.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cast.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=template&id=5d1e49c8&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=template&id=5d1e49c8& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cast_vue_vue_type_template_id_5d1e49c8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cast_vue_vue_type_template_id_5d1e49c8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cast_vue_vue_type_template_id_5d1e49c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cast.vue?vue&type=template&id=5d1e49c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=template&id=5d1e49c8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=template&id=5d1e49c8&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/search/cast.vue?vue&type=template&id=5d1e49c8& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "col-12 cast-page mt-4 p-2 p-sm-2 p-lg-2" },
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
            staticClass: "exit-button",
            on: {
              click: function($event) {
                return _vm.$router.push({ name: "discover" })
              }
            }
          },
          [
            _c(
              "svg",
              {
                staticClass: "sm-exit-svg",
                staticStyle: { "enable-background": "new 0 0 511.999 511.999" },
                attrs: {
                  version: "1.1",
                  width: "100%",
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  x: "0px",
                  y: "0px",
                  viewBox: "0 0 511.999 511.999",
                  "xml:space": "preserve"
                }
              },
              [
                _c("circle", {
                  staticStyle: { fill: "#e21b1b" },
                  attrs: { cx: "255.999", cy: "255.999", r: "255.999" }
                }),
                _vm._v(" "),
                _c("g", [
                  _c("rect", {
                    staticStyle: { fill: "#ffffff" },
                    attrs: {
                      x: "244.002",
                      y: "120.008",
                      transform:
                        "matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)",
                      width: "24",
                      height: "271.988"
                    }
                  }),
                  _vm._v(" "),
                  _c("rect", {
                    staticStyle: { fill: "#ffffff" },
                    attrs: {
                      x: "120.008",
                      y: "244.007",
                      transform:
                        "matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)",
                      width: "271.988",
                      height: "24"
                    }
                  })
                ])
              ]
            )
          ]
        ),
        _vm._v(" "),
        !_vm.loading
          ? _c("div", [
              _c("div", { staticClass: "cast-page__cast" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-8 col-sm-12 hidden-xs-down ipad-up text-center"
                  },
                  [
                    _c("div", { staticClass: "image" }, [
                      _vm.data.cast.cloud === "local"
                        ? _c("img", {
                            attrs: {
                              src: _vm.data.cast.image,
                              alt: _vm.data.cast.name,
                              width: "100%"
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.data.cast.cloud === "aws"
                        ? _c("img", {
                            attrs: {
                              src: _vm.sm_cast + _vm.data.cast.image,
                              alt: _vm.data.cast.name,
                              width: "100%"
                            }
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("h4", { staticClass: "mt-3" }, [
                      _c("strong", [_vm._v(_vm._s(_vm.data.cast.name))])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _vm.data.filmography !== null
                ? _c("div", { staticClass: "col-12 mt-5 film-list" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.data.filmography, function(item, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass:
                              "\n              col-6 col-md-4 col-lg-3 col-xl-1-5 col-xxl-1-5\n              p-2 p-md-4\n              animation\n            "
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
                                          { staticClass: "animation-ani92X" },
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
                                                          ? _c(
                                                              "progressive-img",
                                                              {
                                                                attrs: {
                                                                  src:
                                                                    "/storage/posters/600_" +
                                                                    item.poster,
                                                                  placeholder:
                                                                    "/themes/default/img/loader-image.png",
                                                                  alt:
                                                                    item.name,
                                                                  width: "100%",
                                                                  "aspect-ratio": 1.5,
                                                                  blur: 0
                                                                }
                                                              }
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        item.cloud === "aws"
                                                          ? _c(
                                                              "progressive-img",
                                                              {
                                                                attrs: {
                                                                  src:
                                                                    _vm.md_poster +
                                                                    item.poster,
                                                                  placeholder:
                                                                    "/themes/default/img/loader-image.png",
                                                                  alt:
                                                                    item.name,
                                                                  width: "100%",
                                                                  "aspect-ratio": 1.5,
                                                                  blur: 0
                                                                }
                                                              }
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm.active_movie ===
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
                                                                        !item.is_favorite
                                                                          ? _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "poster__add-collection-icon text-right"
                                                                              },
                                                                              [
                                                                                item.cloud ==
                                                                                "local"
                                                                                  ? _c(
                                                                                      "img",
                                                                                      {
                                                                                        attrs: {
                                                                                          src:
                                                                                            "/themes/default/img/infavor.svg",
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
                                                                                            return _vm.SHOW_COLLECTION_MODAL(
                                                                                              item.id,
                                                                                              "/storage/backdrops/600_" +
                                                                                                item.backdrop,
                                                                                              item.name,
                                                                                              "movie",
                                                                                              index
                                                                                            )
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  : _vm._e(),
                                                                                _vm._v(
                                                                                  " "
                                                                                ),
                                                                                item.cloud ==
                                                                                "aws"
                                                                                  ? _c(
                                                                                      "img",
                                                                                      {
                                                                                        attrs: {
                                                                                          src:
                                                                                            "/themes/default/img/infavor.svg",
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
                                                                                            return _vm.SHOW_COLLECTION_MODAL(
                                                                                              item.id,
                                                                                              _vm.md_backdrop +
                                                                                                item.backdrop,
                                                                                              item.name,
                                                                                              "movie",
                                                                                              index
                                                                                            )
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  : _vm._e()
                                                                              ]
                                                                            )
                                                                          : _vm._e(),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        item.is_favorite
                                                                          ? _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "\n                                  poster__remove-collection-icon\n                                  text-right\n                                "
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
                                                                    ),
                                                                    _vm._v(" "),
                                                                    _c(
                                                                      "div",
                                                                      {
                                                                        staticClass:
                                                                          "mt-1"
                                                                      },
                                                                      [
                                                                        !item.is_like
                                                                          ? _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "poster__add-like-icon text-right"
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "img",
                                                                                  {
                                                                                    attrs: {
                                                                                      src:
                                                                                        "/themes/default/img/dislike.svg",
                                                                                      alt:
                                                                                        "dislike",
                                                                                      width:
                                                                                        "100%"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        $event.preventDefault()
                                                                                        return _vm.ADD_NEW_LIKE(
                                                                                          item.id,
                                                                                          "movie",
                                                                                          index,
                                                                                          "add"
                                                                                        )
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                )
                                                                              ]
                                                                            )
                                                                          : _vm._e(),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        item.is_like
                                                                          ? _c(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "poster__remove-like-icon text-right"
                                                                              },
                                                                              [
                                                                                _c(
                                                                                  "img",
                                                                                  {
                                                                                    attrs: {
                                                                                      src:
                                                                                        "/themes/default/img/like.svg",
                                                                                      alt:
                                                                                        "like",
                                                                                      width:
                                                                                        "100%"
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        $event.preventDefault()
                                                                                        return _vm.ADD_NEW_LIKE(
                                                                                          item.id,
                                                                                          "movie",
                                                                                          index,
                                                                                          "delete"
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
                                                                                name: item.users_only
                                                                                  ? "movie-player"
                                                                                  : "ghost-movie-player",
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
                                                _vm._v(
                                                  " " + _vm._s(item.name) + " "
                                                )
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
                                            _vm.$auth.isAuthenticated() ===
                                              "active"
                                              ? _c(
                                                  "div",
                                                  { staticClass: "progress" },
                                                  [
                                                    _c("div", {
                                                      staticClass:
                                                        "progress-bar",
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
                                          { staticClass: "animation-ani92X" },
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
                                                          ? _c(
                                                              "progressive-img",
                                                              {
                                                                attrs: {
                                                                  src:
                                                                    "/storage/posters/600_" +
                                                                    item.poster,
                                                                  placeholder:
                                                                    "/themes/default/img/loader-image.png",
                                                                  alt:
                                                                    item.name,
                                                                  width: "100%",
                                                                  "aspect-ratio": 1.5,
                                                                  blur: 0
                                                                }
                                                              }
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        item.cloud === "aws"
                                                          ? _c(
                                                              "progressive-img",
                                                              {
                                                                attrs: {
                                                                  src:
                                                                    _vm.md_poster +
                                                                    item.poster,
                                                                  placeholder:
                                                                    "/themes/default/img/loader-image.png",
                                                                  alt:
                                                                    item.name,
                                                                  width: "100%",
                                                                  "aspect-ratio": 1.5,
                                                                  blur: 0
                                                                }
                                                              }
                                                            )
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _c(
                                                          "transition",
                                                          {
                                                            attrs: {
                                                              name: "fade"
                                                            }
                                                          },
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
                                                                            !item.is_favorite
                                                                              ? _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "\n                                    poster__add-collection-icon\n                                    text-right\n                                  "
                                                                                  },
                                                                                  [
                                                                                    item.cloud ==
                                                                                    "local"
                                                                                      ? _c(
                                                                                          "img",
                                                                                          {
                                                                                            attrs: {
                                                                                              src:
                                                                                                "/themes/default/img/infavor.svg",
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
                                                                                                return _vm.SHOW_COLLECTION_MODAL(
                                                                                                  item.id,
                                                                                                  "/storage/backdrops/600_" +
                                                                                                    item.backdrop,
                                                                                                  item.name,
                                                                                                  "series",
                                                                                                  index
                                                                                                )
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        )
                                                                                      : _vm._e(),
                                                                                    _vm._v(
                                                                                      " "
                                                                                    ),
                                                                                    item.cloud ==
                                                                                    "aws"
                                                                                      ? _c(
                                                                                          "img",
                                                                                          {
                                                                                            attrs: {
                                                                                              src:
                                                                                                "/themes/default/img/infavor.svg",
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
                                                                                                return _vm.SHOW_COLLECTION_MODAL(
                                                                                                  item.id,
                                                                                                  _vm.md_backdrop +
                                                                                                    item.backdrop,
                                                                                                  item.name,
                                                                                                  "series",
                                                                                                  index
                                                                                                )
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        )
                                                                                      : _vm._e()
                                                                                  ]
                                                                                )
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            item.is_favorite
                                                                              ? _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "\n                                    poster__remove-collection-icon\n                                    text-right\n                                  "
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
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "mt-1"
                                                                          },
                                                                          [
                                                                            !item.is_like
                                                                              ? _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "poster__add-like-icon text-right"
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "img",
                                                                                      {
                                                                                        attrs: {
                                                                                          src:
                                                                                            "/themes/default/img/dislike.svg",
                                                                                          alt:
                                                                                            "dislike",
                                                                                          width:
                                                                                            "100%"
                                                                                        },
                                                                                        on: {
                                                                                          click: function(
                                                                                            $event
                                                                                          ) {
                                                                                            $event.preventDefault()
                                                                                            return _vm.ADD_NEW_LIKE(
                                                                                              item.id,
                                                                                              "series",
                                                                                              index,
                                                                                              "add"
                                                                                            )
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              : _vm._e(),
                                                                            _vm._v(
                                                                              " "
                                                                            ),
                                                                            item.is_like
                                                                              ? _c(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "poster__remove-like-icon text-right"
                                                                                  },
                                                                                  [
                                                                                    _c(
                                                                                      "img",
                                                                                      {
                                                                                        attrs: {
                                                                                          src:
                                                                                            "/themes/default/img/like.svg",
                                                                                          alt:
                                                                                            "like",
                                                                                          width:
                                                                                            "100%"
                                                                                        },
                                                                                        on: {
                                                                                          click: function(
                                                                                            $event
                                                                                          ) {
                                                                                            $event.preventDefault()
                                                                                            return _vm.ADD_NEW_LIKE(
                                                                                              item.id,
                                                                                              "series",
                                                                                              index,
                                                                                              "delete"
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
                                                                                            name: item.users_only
                                                                                              ? "series-player"
                                                                                              : "ghost-series-player",
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
                                                                                                "new 0 0 294.843"
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
                                                _vm._v(
                                                  " " + _vm._s(item.name) + " "
                                                )
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
                                            _vm.$auth.isAuthenticated() ===
                                              "active"
                                              ? _c(
                                                  "div",
                                                  { staticClass: "progress" },
                                                  [
                                                    _c("div", {
                                                      staticClass:
                                                        "progress-bar",
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
                          _c("strong", [
                            _vm._v(_vm._s(_vm.$t("home.sorry_no_result")))
                          ])
                        ],
                        1
                      )
                    ])
                  ])
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);