"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_video-player_series-player_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-carousel */ "./node_modules/vue-carousel/dist/vue-carousel.min.js");
/* harmony import */ var vue_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_carousel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/loader */ "./resources/assets/js/users/views/default/control/utils/loader.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "series-player",
  components: {
    Carousel: vue_carousel__WEBPACK_IMPORTED_MODULE_0__.Carousel,
    Slide: vue_carousel__WEBPACK_IMPORTED_MODULE_0__.Slide,
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
      report_problem_type: null,
      report_details: null,
      report_button: false,
      episode_changed: false,
      timeRequest: 20,
      show_report: false,
      loadPlayerFirst: true,
      loadPlayerChange: false,
      stop_player: false,
      season_number_dropdown: null,
      jwPlayer: null,
      EmbedActiveCode: {},
      HideLeft: 0,
      HideRight: 1
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapState)({
    data: function data(state) {
      return state.player.series_data;
    },
    spinner_load: function spinner_load(state) {
      return state.player.player_spinner;
    },
    season_playlist_active: function season_playlist_active(state) {
      return state.player.season_playlist_active;
    }
  }),
  mounted: function mounted() {
    if (this.$route.params.episode_id !== undefined && this.$route.params.series_id !== undefined) {
      if (this.$auth.isAuthenticated()) {
        this.$store.dispatch("LOAD_SERIES_PLAYER", {
          episode_id: this.$route.params.episode_id,
          series_id: this.$route.params.series_id
        });
      }
    } else if (this.$route.params.series_id !== undefined) {
      // Run video
      if (this.$auth.isAuthenticated()) {
        this.$store.dispatch("LOAD_SERIES_PLAYER", {
          series_id: this.$route.params.series_id
        });
      }
    } else {
      this.$route.push('404');
    }
  },
  watch: {
    data: function data() {
      var _this = this;

      // dropdown season number
      this.season_number_dropdown = this.data.current_episode.season_number;

      if (!this.data.embed) {
        this.loadPlayer = true; // Mute change on episode

        if (this.jwPlayer !== null) {
          jwplayer().setMute(true);
        }

        if (!this.loadPlayerChange) {
          this.loadPlayerFirst = true;
        }

        setTimeout(function () {
          _this.jwPlayer = jwplayer("tvshow-player").setup({
            "playlist": _this.data.playlist,
            "cast": {},
            "autostart": true,
            "advertising": {
              "client": "vast"
            },
            "sharing": {
              "sites": ["reddit", "facebook", "twitter"]
            }
          }); // Load custom video file on error

          _this.jwPlayer.on('error', function () {
            _this.jwPlayer.load({
              file: "//content.jwplatform.com/videos/7RtXk3vl-52qL9xLP.mp4",
              image: "//content.jwplatform.com/thumbs/7RtXk3vl-480.jpg"
            });
          });

          if (_this.episode_changed) {
            jwplayer().playlistItem(0);
          }

          if (_this.$auth.isAuthenticated()) {
            _this.jwPlayer.once('play', function () {
              if (_this.data.current_episode.current_time != null) {
                _this.jwPlayer.seek(_this.data.current_episode.current_time);
              }
            });

            _this.jwPlayer.on('time', function (e) {
              if (jwplayer().getPosition().toFixed() == _this.timeRequest) {
                _this.timeRequest = _this.timeRequest + 20;
                axios.post('/api/v1/create/watch/series/recently', {
                  current_time: jwplayer().getPosition().toFixed(),
                  duration_time: jwplayer().getDuration().toFixed(),
                  episode_id: _this.data.current_episode.id,
                  series_id: _this.data.current_episode.series_id
                });
              }
            }); // Check subtitle


            if (localStorage.getItem('caption') !== "" && localStorage.getItem('caption') != "undefined") {
              var parsedCaption = JSON.parse(localStorage.getItem('caption'));
              jwplayer().setCaptions(parsedCaption);
            } // OnSeek


            _this.jwPlayer.on('seek', function () {
              setTimeout(function () {
                _this.timeRequest = parseInt(jwplayer().getPosition().toFixed()) + 20;
              }, 200);
            });
          } // Check subtitle


          _this.jwPlayer.on('ready', function () {
            _this.loadPlayerFirst = false;
            _this.loadPlayerChange = false;
            jwplayer().setMute(false);

            if (localStorage.getItem('caption') !== "" && localStorage.getItem('caption') != "undefined") {
              var _parsedCaption = JSON.parse(localStorage.getItem('caption'));

              jwplayer().setCaptions(_parsedCaption);
            }
          });
        }, 500);
      } else {
        this.EmbedActiveCode = this.data.playlist[0];
      }
    },
    show_report: function show_report(value) {
      if (value) {
        jwplayer().setMute(true);
      } else {
        jwplayer().setMute(false);
      }
    }
  },
  methods: {
    CHANGE_SERIES: function CHANGE_SERIES(episode_id) {
      if (this.$auth.isAuthenticated()) {
        this.$store.dispatch("LOAD_SERIES_PLAYER", {
          episode_id: episode_id
        });
      }
    },
    SEND_REPORT: function SEND_REPORT() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this2.report_button = true;
          axios.post("/api/v1/create/report/series", {
            type: _this2.report_problem_type,
            details: _this2.report_details,
            episode_id: _this2.data.current_episode.id,
            series_id: _this2.data.current_episode.series_id
          }).then(function (res) {
            if (res.data.status === "success") {
              _this2.report_button = false;

              _this2.$store.commit("CLOSE_REPORT");

              jwplayer().setMute(true);
              alertify.logPosition("top right");
              alertify.success("Successful Send, our team will check it soon");
            }
          }, function (error) {//
          });
        }
      });
    },
    // When Colse video re-play video
    CLOSE_REPORT: function CLOSE_REPORT() {
      jwplayer().setMute(false);
      this.$store.commit('CLOSE_REPORT');
    },
    CHANGE_EPISODE: function CHANGE_EPISODE(episode_id, series_id) {
      this.episode_changed = true;
      this.loadPlayerChange = true;

      if (this.$auth.isAuthenticated()) {
        this.$store.dispatch("LOAD_SERIES_PLAYER", {
          episode_id: episode_id,
          series_id: series_id
        });
      }
    },
    FORMAT_DATE: function FORMAT_DATE(date) {
      var date = new Date(date.replace(/-/g, '/'));
      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();
      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    },
    GET_SEASON: function GET_SEASON(season_number) {
      var _this3 = this;

      axios.post('/api/v1/get/series/season', {
        series_id: this.data.current_episode.series_id,
        season_number: season_number
      }).then(function (response) {
        if (response.status == 200) {
          _this3.data.current_season = response.data.data;
        }
      }, function (error) {
        console.log('error in request');
      });
    },
    ChangeEmbed: function ChangeEmbed(item) {
      this.EmbedActiveCode = item;
    },
    scrollTo: function scrollTo(element, scrollPixels, duration) {
      var scrollPos = element.scrollLeft; // Condition to check if scrolling is required

      if (!((scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
        var scroll = function scroll(timestamp) {
          //Calculate the timeelapsed
          var timeElapsed = timestamp - startTime; //Calculate progress

          var progress = Math.min(timeElapsed / duration, 1); //Set the scrolleft

          element.scrollLeft = scrollPos + scrollPixels * progress; //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit

          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }; //Call requestAnimationFrame on scroll function first time


        // Get the start timestamp
        var startTime = "now" in window.performance ? performance.now() : new Date().getTime();
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft: function swipeLeft() {
      var content = this.$refs.app_episode_slider;
      this.scrollTo(content, -content.offsetWidth, 500);
      var container = document.querySelector('.item-app-slider');

      if (container.scrollLeft === 0 || container.scrollLeft <= window.innerWidth) {
        this.HideLeft = false;
        this.$store.commit('HIDE_SIDEBAR', true);
      }
    },
    swipeRight: function swipeRight() {
      var content = this.$refs.app_episode_slider;
      this.scrollTo(content, content.offsetWidth, 800);
      var container = document.querySelector('.item-app-slider');

      if (container.scrollLeft >= 0) {
        this.HideLeft = true;
        this.$store.commit('HIDE_SIDEBAR', false);
      }
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

/***/ "./resources/assets/js/users/views/default/control/video-player/series-player.vue":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/video-player/series-player.vue ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _series_player_vue_vue_type_template_id_70eb9f75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./series-player.vue?vue&type=template&id=70eb9f75& */ "./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=template&id=70eb9f75&");
/* harmony import */ var _series_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./series-player.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _series_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _series_player_vue_vue_type_template_id_70eb9f75___WEBPACK_IMPORTED_MODULE_0__.render,
  _series_player_vue_vue_type_template_id_70eb9f75___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/video-player/series-player.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_series_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./series-player.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_series_player_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=template&id=70eb9f75&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=template&id=70eb9f75& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_series_player_vue_vue_type_template_id_70eb9f75___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_series_player_vue_vue_type_template_id_70eb9f75___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_series_player_vue_vue_type_template_id_70eb9f75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./series-player.vue?vue&type=template&id=70eb9f75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=template&id=70eb9f75&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=template&id=70eb9f75&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/video-player/series-player.vue?vue&type=template&id=70eb9f75& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
          _vm.show_report
            ? _c("div", { staticClass: "report-modal" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-3",
                    attrs: { id: "modal" }
                  },
                  [
                    _c("div", { staticClass: "header" }, [
                      _c(
                        "span",
                        {
                          attrs: { id: "close" },
                          on: {
                            click: function($event) {
                              _vm.show_report = false
                            }
                          }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass: "sm-exit-svg",
                              staticStyle: {
                                "enable-background": "new 0 0 511.999 511.999"
                              },
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
                                staticStyle: { fill: "#E21B1B" },
                                attrs: {
                                  cx: "255.999",
                                  cy: "255.999",
                                  r: "255.999"
                                }
                              }),
                              _vm._v(" "),
                              _c("g", [
                                _c("rect", {
                                  staticStyle: { fill: "#FFFFFF" },
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
                                  staticStyle: { fill: "#FFFFFF" },
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
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "body" }, [
                      _c("h1", [
                        _vm._v(
                          _vm._s(_vm.$t("report.what_happening")) +
                            "\n                        "
                        ),
                        _c("b", { staticStyle: { color: "dodgerblue" } }, [
                          _vm._v("?")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
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
                                value: _vm.report_problem_type,
                                expression: "report_problem_type"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              name: "radio_group_1",
                              type: "radio",
                              value: "1"
                            },
                            domProps: {
                              checked: _vm._q(_vm.report_problem_type, "1")
                            },
                            on: {
                              change: function($event) {
                                _vm.report_problem_type = "1"
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "custom-control-indicator"
                          }),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.$t("report.labeling_problem")))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.report_problem_type,
                                expression: "report_problem_type"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              name: "radio_group_1",
                              type: "radio",
                              value: "2"
                            },
                            domProps: {
                              checked: _vm._q(_vm.report_problem_type, "2")
                            },
                            on: {
                              change: function($event) {
                                _vm.report_problem_type = "2"
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "custom-control-indicator"
                          }),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.$t("report.video_problem")))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.report_problem_type,
                                expression: "report_problem_type"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              name: "radio_group_1",
                              type: "radio",
                              value: "3"
                            },
                            domProps: {
                              checked: _vm._q(_vm.report_problem_type, "3")
                            },
                            on: {
                              change: function($event) {
                                _vm.report_problem_type = "3"
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "custom-control-indicator"
                          }),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.$t("report.sound_problem")))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-check" }, [
                        _c("label", { staticClass: "form-check-label" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.report_problem_type,
                                expression: "report_problem_type"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              name: "radio_group_1",
                              type: "radio",
                              value: "4"
                            },
                            domProps: {
                              checked: _vm._q(_vm.report_problem_type, "4")
                            },
                            on: {
                              change: function($event) {
                                _vm.report_problem_type = "4"
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "custom-control-indicator"
                          }),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(_vm._s(_vm.$t("report.caption_problem")))
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("radio_group_1"),
                              expression: "errors.has('radio_group_1')"
                            }
                          ],
                          staticClass: "help is-danger"
                        },
                        [_vm._v("Please Choose The Problem")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "textarea-details" }, [
                        _c("h3", [
                          _vm._v(_vm._s(_vm.$t("report.more_details")))
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.report_details,
                              expression: "report_details"
                            }
                          ],
                          attrs: {
                            placeholder: _vm.$t("report.more_details"),
                            cols: "40",
                            rows: "6"
                          },
                          domProps: { value: _vm.report_details },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.report_details = $event.target.value
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-2" }, [
                        !_vm.report_button
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-warning",
                                on: { click: _vm.SEND_REPORT }
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(_vm.$t("report.send")) +
                                    "\n                        "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.report_button
                          ? _c("button", { staticClass: "btn btn-warning" }, [
                              _c("i", { attrs: { id: "btn-progress" } }),
                              _vm._v(" Loading\n                        ")
                            ])
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-8 offset-md-2 mt-5" }, [
            !_vm.data.embed
              ? _c("div", { staticClass: "jw-player" }, [
                  _c("div", {
                    staticStyle: { position: "relative" },
                    attrs: { id: "tvshow-player" }
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
            !_vm.spinner_load
              ? _c("div", { staticClass: "episode-details d-inline mt-3" }, [
                  _c("div", { staticClass: "episode-name mt-1" }, [
                    _c("div", { staticClass: "text d-inline" }, [
                      _c("p", [
                        _vm._v(" " + _vm._s(_vm.data.current_episode.name))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.$auth.isAuthenticated()
                      ? _c(
                          "div",
                          {
                            staticClass: "report",
                            on: {
                              click: function($event) {
                                _vm.show_report = true
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticStyle: {
                                  "enable-background": "new 0 0 486.463 486.463"
                                },
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                  version: "1.1",
                                  x: "0px",
                                  y: "0px",
                                  viewBox: "0 0 486.463 486.463",
                                  "xml:space": "preserve",
                                  width: "20px"
                                }
                              },
                              [
                                _c("g", [
                                  _c("g", [
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M243.225,333.382c-13.6,0-25,11.4-25,25s11.4,25,25,25c13.1,0,25-11.4,24.4-24.4    C268.225,344.682,256.925,333.382,243.225,333.382z",
                                        fill: "#a0a0a0"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M474.625,421.982c15.7-27.1,15.8-59.4,0.2-86.4l-156.6-271.2c-15.5-27.3-43.5-43.5-74.9-43.5s-59.4,16.3-74.9,43.4    l-156.8,271.5c-15.6,27.3-15.5,59.8,0.3,86.9c15.6,26.8,43.5,42.9,74.7,42.9h312.8    C430.725,465.582,458.825,449.282,474.625,421.982z M440.625,402.382c-8.7,15-24.1,23.9-41.3,23.9h-312.8    c-17,0-32.3-8.7-40.8-23.4c-8.6-14.9-8.7-32.7-0.1-47.7l156.8-271.4c8.5-14.9,23.7-23.7,40.9-23.7c17.1,0,32.4,8.9,40.9,23.8    l156.7,271.4C449.325,369.882,449.225,387.482,440.625,402.382z",
                                        fill: "#a0a0a0"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M237.025,157.882c-11.9,3.4-19.3,14.2-19.3,27.3c0.6,7.9,1.1,15.9,1.7,23.8c1.7,30.1,3.4,59.6,5.1,89.7    c0.6,10.2,8.5,17.6,18.7,17.6c10.2,0,18.2-7.9,18.7-18.2c0-6.2,0-11.9,0.6-18.2c1.1-19.3,2.3-38.6,3.4-57.9    c0.6-12.5,1.7-25,2.3-37.5c0-4.5-0.6-8.5-2.3-12.5C260.825,160.782,248.925,155.082,237.025,157.882z",
                                        fill: "#a0a0a0"
                                      }
                                    })
                                  ])
                                ])
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "list-info" }, [
                    _c("ul", { staticClass: "list-unstyled" }, [
                      _c("li", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.data.series.name) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", { staticClass: "split m-3" }, [_vm._v("|")]),
                      _vm._v(" "),
                      _c("li", { staticClass: "episode-number" }, [
                        _vm._v(
                          "\n                            S" +
                            _vm._s(_vm.data.current_episode.season_number) +
                            " E" +
                            _vm._s(_vm.data.current_episode.episode_number) +
                            "\n                        "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "overview" }, [
                      _c("p", [
                        _vm._v(" " + _vm._s(_vm.data.current_episode.overview))
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "episode-list mb-5" }, [
              !_vm.spinner_load
                ? _c("div", { staticClass: "dropdown m-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        attrs: {
                          "data-toggle": "dropdown",
                          id: "dropdownSettings",
                          "aria-haspopup": "true",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("show.season")) +
                            "\n                        " +
                            _vm._s(_vm.season_number_dropdown) +
                            "\n                    "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "dropdown-menu",
                        attrs: { "aria-labelledby": "dropdownSettings" }
                      },
                      [
                        _vm._l(_vm.data.seasons, function(item, index) {
                          return _vm.data.current_episode.season_number ===
                            item.season_number
                            ? _c(
                                "a",
                                {
                                  key: index,
                                  staticClass: "dropdown-item",
                                  on: {
                                    click: function($event) {
                                      _vm.GET_SEASON(item.season_number)
                                      _vm.season_number_dropdown =
                                        item.season_number
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("show.season")) +
                                      "\n                            " +
                                      _vm._s(item.season_number)
                                  )
                                ]
                              )
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.data.seasons, function(item, index) {
                          return _vm.data.current_episode.season_number !=
                            item.season_number
                            ? _c(
                                "a",
                                {
                                  key: index,
                                  staticClass: "dropdown-item",
                                  on: {
                                    click: function($event) {
                                      _vm.GET_SEASON(item.season_number)
                                      _vm.season_number_dropdown =
                                        item.season_number
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    _vm._s(_vm.$t("show.season")) +
                                      "\n                            " +
                                      _vm._s(item.season_number)
                                  )
                                ]
                              )
                            : _vm._e()
                        })
                      ],
                      2
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "app-slider" }, [
                _c(
                  "div",
                  { ref: "app_episode_slider", staticClass: "item-app-slider" },
                  _vm._l(_vm.data.current_season, function(item, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass:
                          "col-6 col-md-4 col-lg-3 col-xl-3 m-2 animation "
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "episode",
                            staticStyle: { cursor: "pointer" },
                            on: {
                              click: function($event) {
                                return _vm.CHANGE_EPISODE(
                                  item.id,
                                  item.series_id
                                )
                              }
                            }
                          },
                          [
                            item.cloud === "local"
                              ? _c("progressive-img", {
                                  attrs: {
                                    src: item.backdrop,
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
                                    src: item.backdrop,
                                    alt: item.name,
                                    width: "100%",
                                    blur: 1
                                  }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "title mt-1" }, [
                              _c("p", [
                                _c("strong", [
                                  _vm._v(
                                    "E " +
                                      _vm._s(item.episode_number) +
                                      " | " +
                                      _vm._s(_vm.FORMAT_DATE(item.created_at))
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(item.name))
                              ])
                            ])
                          ],
                          1
                        )
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "c-app-channel-grid-content__slider-arrow d-none d-md-block"
                  },
                  [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.HideRight,
                            expression: "HideRight"
                          }
                        ],
                        staticClass: "slider-arrow-right",
                        attrs: { role: "button" },
                        on: { click: _vm.swipeRight }
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              viewBox: "0 0 120 120",
                              xmlns: "http://www.w3.org/2000/svg"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "square",
                                stroke: "#fff",
                                "stroke-width": "8",
                                d: "M40 16l43 44m0 0l-43 44"
                              }
                            })
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.HideLeft,
                            expression: "HideLeft"
                          }
                        ],
                        staticClass: "slider-arrow-left",
                        attrs: { role: "button" },
                        on: { click: _vm.swipeLeft }
                      },
                      [
                        _c(
                          "svg",
                          {
                            attrs: {
                              viewBox: "0 0 120 120",
                              xmlns: "http://www.w3.org/2000/svg"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "square",
                                stroke: "#fff",
                                "stroke-width": "8",
                                d: "M40 16l43 44m0 0l-43 44",
                                transform: "translate(120, 0) scale(-1, 1)"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);