"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_video-player_ghost_movie-player_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loader */ "./resources/assets/js/users/views/default/control/utils/loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "movie-player",
  components: {
    Carousel: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Slide: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-carousel'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    loader: _utils_loader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      episode_title: "",
      series_title: "",
      url_subtitle: "",
      seasonHide: true,
      active: "",
      activeSeason: "",
      episode_changed: false,
      timeRequest: 20,
      loadPlayerFirst: true,
      loadPlayerChange: false,
      stop_player: false,
      jwPlayer: null,
      EmbedActiveCode: {}
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    data: function data(state) {
      return state.player.movie_data;
    },
    spinner_load: function spinner_load(state) {
      return state.player.player_spinner;
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch("GHOST_LOAD_MOVIE_PLAYER", this.$route.params.id);
  },
  watch: {
    data: function data() {
      var _this = this;

      if (!this.data.embed) {
        // Runtime format
        if (this.data.current_movie.runtime <= 60) {
          this.data.current_movie.runtime = this.data.current_movie.runtime + "m";
        } else if (this.data.current_movie.runtime >= 60) {
          var minutes = this.data.current_movie.runtime % 60;
          var hours = Math.floor(this.data.current_movie.runtime / 60);
          this.data.current_movie.runtime = hours + "h " + minutes + "m";
        } // Replice special characters


        this.data.current_movie.genre = this.data.current_movie.genre.replace(/-/g, ", ");

        if (!this.loadPlayerChange) {
          this.loadPlayerFirst = true;
        } // Mute change on movie


        if (this.jwPlayer !== null) {
          jwplayer().setMute(true);
        }

        setTimeout(function () {
          _this.jwPlayer = jwplayer("movie-player").setup({
            playlist: _this.data.playlist,
            cast: {},
            autostart: true,
            advertising: {
              client: "vast"
            },
            sharing: {
              sites: ["reddit", "facebook", "twitter"]
            }
          }); // Load custom video file on error

          _this.jwPlayer.on("error", function () {
            _this.jwPlayer.load({
              file: "//content.jwplatform.com/videos/7RtXk3vl-52qL9xLP.mp4",
              image: "//content.jwplatform.com/thumbs/7RtXk3vl-480.jpg"
            });

            player.play();
          }); // Check subtitle


          _this.jwPlayer.on("ready", function () {
            jwplayer().setMute(false);
            _this.loadPlayerFirst = false;
            _this.loadPlayerChange = false;
          });
        }, 500);
      } else {
        this.EmbedActiveCode = this.data.playlist[0];
      }
    }
  },
  methods: {
    CHANGE_MOVIE: function CHANGE_MOVIE(id) {
      this.loadPlayerChange = true;
      this.$store.dispatch("GHOST_LOAD_MOVIE_PLAYER", id);
    },
    ChangeEmbed: function ChangeEmbed(item) {
      this.EmbedActiveCode = item;
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

/***/ "./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _movie_player_vue_vue_type_template_id_3ecffd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-player.vue?vue&type=template&id=3ecffd90& */ "./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=template&id=3ecffd90&");
/* harmony import */ var _movie_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-player.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _movie_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _movie_player_vue_vue_type_template_id_3ecffd90___WEBPACK_IMPORTED_MODULE_0__.render,
  _movie_player_vue_vue_type_template_id_3ecffd90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./movie-player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_style_index_0_id_28f0b4cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/loader.vue?vue&type=style&index=0&id=28f0b4cb&scoped=true&lang=css&");


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

/***/ "./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=template&id=3ecffd90&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=template&id=3ecffd90& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_player_vue_vue_type_template_id_3ecffd90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_player_vue_vue_type_template_id_3ecffd90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_movie_player_vue_vue_type_template_id_3ecffd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./movie-player.vue?vue&type=template&id=3ecffd90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=template&id=3ecffd90&");


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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=template&id=3ecffd90&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/ghost/movie-player.vue?vue&type=template&id=3ecffd90& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    _vm.spinner_load
      ? _c("div", { staticClass: "loader" }, [_c("loader")], 1)
      : _vm._e(),
    _vm._v(" "),
    !_vm.spinner_load
      ? _c("div", { staticClass: "wolf-player" }, [
          _c("div", { staticClass: "col-12 col-md-8 offset-md-2 mt-5" }, [
            !_vm.data.embed
              ? _c("div", { staticClass: "jw-player" }, [
                  _c("div", {
                    staticStyle: { position: "relative" },
                    attrs: { id: "movie-player" }
                  }),
                  _vm._v(" "),
                  _vm.loadPlayerFirst
                    ? _c(
                        "div",
                        { staticClass: "firstLoader" },
                        [
                          _c("loader", {
                            staticStyle: {
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.loadPlayerChange
                    ? _c(
                        "div",
                        { staticClass: "changeLoader" },
                        [
                          _c("loader", {
                            staticStyle: {
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.data.embed
              ? _c("div", { staticClass: "emebd-section" }, [
                  _c("div", { staticClass: "embed-provider-list" }, [
                    _c(
                      "div",
                      { staticClass: "row" },
                      _vm._l(_vm.data.playlist, function(item, index) {
                        return _c(
                          "div",
                          {
                            key: index,
                            staticClass: "provider-item col-auto ml-3",
                            class: {
                              active:
                                _vm.EmbedActiveCode.embed_id === item.embed_id
                            },
                            on: {
                              click: function($event) {
                                return _vm.ChangeEmbed(item)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: item.embed_provider_logo,
                                alt: item.embed_provider_name,
                                width: "90"
                              }
                            })
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", {
                    staticClass: "embed-player",
                    domProps: {
                      innerHTML: _vm._s(_vm.EmbedActiveCode.embed_code)
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "episode-details d-inline mt-3" }, [
              _c("div", { staticClass: "episode-name mt-1" }, [
                _c("div", { staticClass: "text" }, [
                  _c("p", [_vm._v(_vm._s(_vm.data.current_movie.name))])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "list-info" }, [
                _c("ul", { staticClass: "list-unstyled" }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.data.current_movie.genre) +
                      "\n\n            "
                  ),
                  _c("li", { staticClass: "split m-3" }, [_vm._v("|")]),
                  _vm._v(" "),
                  _c("li", { staticClass: "movie-genre" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.data.current_movie.year) +
                        "\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "split m-3" }, [_vm._v("|")]),
                  _vm._v(" "),
                  _c("li", { staticClass: "movie-runtime" }, [
                    _vm._v(
                      "\n              " +
                        _vm._s(_vm.data.current_movie.runtime) +
                        "\n            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "overview" }, [
                  _c("p", [_vm._v(_vm._s(_vm.data.current_movie.overview))])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.data.suggestion !== null
              ? _c(
                  "div",
                  { staticClass: "suggestion mb-5" },
                  [
                    _c("h5", [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("show.similar")) +
                          "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "carousel",
                      {
                        staticClass: "list-carousel",
                        attrs: {
                          navigationPrevLabel:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" class="arrow-right-svg"><g><g>\n                                                              <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>\n                                                            </g></g> </svg>',
                          navigationNextLabel:
                            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="100%" class="arrow-left-svg"><g transform="matrix(-1 1.22465e-16 -1.22465e-16 -1 129 129)"><g>\n                                                              <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>\n                                                            </g></g> </svg>',
                          navigationEnabled: true,
                          paginationEnabled: false,
                          autoplay: false,
                          easing: "linear",
                          scrollPerPage: true,
                          perPageCustom: [
                            [220, 1],
                            [520, 2],
                            [768, 3],
                            [1024, 4],
                            [1300, 4]
                          ]
                        }
                      },
                      _vm._l(_vm.data.suggestion, function(item, index) {
                        return _c(
                          "slide",
                          {
                            key: index,
                            staticClass:
                              "col-6 col-md-4 col-lg-2 col-xxl-1-5 m-2 animation"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "movie",
                                staticStyle: { cursor: "pointer" },
                                on: {
                                  click: function($event) {
                                    return _vm.CHANGE_MOVIE(item.id)
                                  }
                                }
                              },
                              [
                                item.cloud === "local"
                                  ? _c("progressive-img", {
                                      attrs: {
                                        src: item.poster,
                                        alt: item.name,
                                        width: "100%",
                                        blur: 1
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.cloud === "aws"
                                  ? _c("progressive-img", {
                                      attrs: {
                                        src: item.poster,
                                        alt: item.name,
                                        width: "100%",
                                        blur: 1
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", { staticClass: "title mt-1" }, [
                                  _c("h6", [
                                    _c("strong", [
                                      _vm._v(" " + _vm._s(item.name) + " ")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("small", { staticClass: "text-muted" }, [
                                    _vm._v(_vm._s(item.genre))
                                  ])
                                ])
                              ],
                              1
                            )
                          ]
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);