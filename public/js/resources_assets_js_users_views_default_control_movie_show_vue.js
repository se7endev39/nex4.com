(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_control_movie_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["id", "poster", "name", "type", "index"],
  data: function data() {
    return {
      show: null,
      new_collection: null,
      already_collection: null,
      already_name: null,
      message: null,
      disable_button: false,
      showBoxAnimation: false
    };
  },
  watch: {
    already_collection: function already_collection() {
      if (this.already_collection !== null && this.already_collection !== "") {
        this.disable_button = true;
      } else {
        this.disable_button = false;
      }
    },
    new_collection: function new_collection() {
      if (this.new_collection !== null && this.new_collection !== "") {
        this.disable_button = true;
      } else {
        if (this.already_collection === null || this.already_collection === "") {
          this.disable_button = false;
        }
      }
    },
    id: function id(val) {
      if (val !== null) {
        this.show = true;
        this.$store.dispatch("GET_ALL_COLLECTION");
      } else {
        this.show = false;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.new_collection = null;
    this.already_collection = null;
    this.already_name = null;
    setTimeout(function () {
      _this.showBoxAnimation = true;
    }, 1000);
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    collections: function collections(state) {
      return state.collections.collections;
    }
  }),
  methods: {
    CANCEL: function CANCEL() {
      this.$emit("hideModalCollectionCancel", null);
    },
    SAVE: function SAVE() {
      this.$store.dispatch("ADD_NEW_TO_COLLECTION", {
        id: this.id,
        already_collection: this.already_collection,
        new_collection: this.new_collection,
        type: this.type
      });
      this.$emit("hideModalCollectionSave", null);
      this.already_collection = null;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _collection_new_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/new.vue */ "./resources/assets/js/users/views/default/control/collection/new.vue");
/* harmony import */ var _utils_exit_button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/exit-button.vue */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/src/js/plyr.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__webpack_require__(/*! plyr/dist/plyr.css */ "./node_modules/plyr/dist/plyr.css");

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
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapState)({
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
      plyr__WEBPACK_IMPORTED_MODULE_2___default().setup(".plyr");
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/plyr/dist/plyr.css":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/plyr/dist/plyr.css ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".plyr input[type=range]:focus,.plyr:focus{outline:0}.plyr .plyr__video-embed iframe,.plyr__tooltip{pointer-events:none}@-webkit-keyframes plyr-progress{to{background-position:25px 0}}@keyframes plyr-progress{to{background-position:25px 0}}.plyr{position:relative;max-width:100%;min-width:200px;font-family:Avenir,'Avenir Next','Helvetica Neue','Segoe UI',Helvetica,Arial,sans-serif;direction:ltr}.plyr,.plyr *,.plyr ::after,.plyr ::before{box-sizing:border-box}.plyr a,.plyr button,.plyr input,.plyr label{touch-action:manipulation}.plyr audio,.plyr video{width:100%;height:auto;vertical-align:middle;border-radius:inherit}.plyr input[type=range]{display:block;height:20px;width:100%;margin:0;padding:0;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;border:none;background:0 0}.plyr input[type=range]::-webkit-slider-runnable-track{height:8px;background:0 0;border:0;border-radius:4px;-webkit-user-select:none;user-select:none}.plyr input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-4px;position:relative;height:16px;width:16px;background:#fff;border:2px solid transparent;border-radius:100%;-webkit-transition:background .2s ease,border .2s ease,transform .2s ease;transition:background .2s ease,border .2s ease,transform .2s ease;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(0,0,0,.15);box-sizing:border-box}.plyr input[type=range]::-moz-range-track{height:8px;background:0 0;border:0;border-radius:4px;-moz-user-select:none;user-select:none}.plyr input[type=range]::-moz-range-thumb{position:relative;height:16px;width:16px;background:#fff;border:2px solid transparent;border-radius:100%;-moz-transition:background .2s ease,border .2s ease,transform .2s ease;transition:background .2s ease,border .2s ease,transform .2s ease;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(0,0,0,.15);box-sizing:border-box}.plyr input[type=range]::-ms-track{height:8px;background:0 0;border:0;color:transparent}.plyr input[type=range]::-ms-fill-upper{height:8px;background:0 0;border:0;border-radius:4px;-ms-user-select:none;user-select:none}.plyr input[type=range]::-ms-fill-lower{height:8px;border:0;border-radius:4px;-ms-user-select:none;user-select:none;background:#3498db}.plyr input[type=range]::-ms-thumb{position:relative;height:16px;width:16px;background:#fff;border:2px solid transparent;border-radius:100%;-ms-transition:background .2s ease,border .2s ease,transform .2s ease;transition:background .2s ease,border .2s ease,transform .2s ease;box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(0,0,0,.15);box-sizing:border-box;margin-top:0}.plyr input[type=range]::-ms-tooltip{display:none}.plyr input[type=range]::-moz-focus-outer{border:0}.plyr input[type=range].tab-focus:focus{outline-offset:3px}.plyr input[type=range]:active::-webkit-slider-thumb{background:#3498db;border-color:#fff;transform:scale(1.25)}.plyr input[type=range]:active::-moz-range-thumb{background:#3498db;border-color:#fff;transform:scale(1.25)}.plyr input[type=range]:active::-ms-thumb{background:#3498db;border-color:#fff;transform:scale(1.25)}.plyr--video input[type=range].tab-focus:focus{outline:rgba(255,255,255,.5) dotted 1px}.plyr--audio input[type=range].tab-focus:focus{outline:rgba(86,93,100,.5) dotted 1px}.plyr__sr-only{clip:rect(1px,1px,1px,1px);overflow:hidden;position:absolute!important;padding:0!important;border:0!important;height:1px!important;width:1px!important}.plyr__video-wrapper{position:relative;background:#000;border-radius:inherit}.plyr__video-embed{padding-bottom:56.25%;height:0;border-radius:inherit;overflow:hidden;z-index:0}.plyr__video-embed iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.plyr__video-embed>div{position:relative;padding-bottom:200%;transform:translateY(-35.95%)}.plyr video::-webkit-media-text-track-container{display:none}.plyr__captions{display:none;position:absolute;bottom:0;left:0;width:100%;padding:20px;transform:translateY(-40px);transition:transform .3s ease;color:#fff;font-size:16px;text-align:center;font-weight:400}.plyr__captions span{border-radius:2px;padding:3px 10px;background:rgba(0,0,0,.7);-webkit-box-decoration-break:clone;box-decoration-break:clone;line-height:150%}.plyr__captions span:empty{display:none}@media (min-width:768px){.plyr__captions{font-size:24px}}.plyr--captions-active .plyr__captions{display:block}.plyr--hide-controls .plyr__captions{transform:translateY(-15px)}@media (min-width:1024px){.plyr--fullscreen-active .plyr__captions{font-size:32px}}.plyr ::-webkit-media-controls{display:none}.plyr__controls{display:flex;align-items:center;line-height:1;text-align:center}.plyr__controls .plyr__progress,.plyr__controls .plyr__time,.plyr__controls>button{margin-left:5px}.plyr__controls .plyr__progress:first-child,.plyr__controls .plyr__time:first-child,.plyr__controls>button:first-child{margin-left:0}.plyr__controls .plyr__volume{margin-left:5px}.plyr__controls [data-plyr=pause]{margin-left:0}.plyr__controls button{position:relative;display:inline-block;flex-shrink:0;overflow:visible;vertical-align:middle;padding:7px;border:0;background:0 0;border-radius:3px;cursor:pointer;transition:background .3s ease,color .3s ease,opacity .3s ease;color:inherit}.plyr__controls button svg{width:18px;height:18px;display:block;fill:currentColor}.plyr__controls button:focus{outline:0}.plyr__controls .icon--captions-on,.plyr__controls .icon--exit-fullscreen,.plyr__controls .icon--muted{display:none}@media (min-width:480px){.plyr__controls .plyr__progress,.plyr__controls .plyr__time,.plyr__controls>button{margin-left:10px}}.plyr--hide-controls .plyr__controls{opacity:0;pointer-events:none}.plyr--video .plyr__controls{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:50px 10px 10px;background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.5));border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;color:#fff;transition:opacity .3s ease}.plyr--video .plyr__controls button.tab-focus:focus,.plyr--video .plyr__controls button:hover{background:#3498db;color:#fff}.plyr--audio .plyr__controls{padding:10px;border-radius:inherit;background:#fff;border:1px solid #dbe3e8;color:#565D64}.plyr--audio .plyr__controls button.tab-focus:focus,.plyr--audio .plyr__controls button:hover,.plyr__play-large{background:#3498db;color:#fff}.plyr__play-large{display:none;position:absolute;z-index:1;top:50%;left:50%;transform:translate(-50%,-50%);padding:10px;border:4px solid currentColor;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.15);transition:all .3s ease}.plyr__play-large svg{position:relative;left:2px;width:20px;height:20px;display:block;fill:currentColor}.plyr__play-large:focus{outline:rgba(255,255,255,.5) dotted 1px}.plyr .plyr__play-large{display:inline-block}.plyr--audio .plyr__play-large,.plyr--playing .plyr__controls [data-plyr=play],.plyr__controls [data-plyr=pause]{display:none}.plyr--playing .plyr__play-large{opacity:0;visibility:hidden}.plyr--playing .plyr__controls [data-plyr=pause]{display:inline-block}.plyr--captions-active .plyr__controls .icon--captions-on,.plyr--fullscreen-active .icon--exit-fullscreen,.plyr--muted .plyr__controls .icon--muted{display:block}.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr--captions-active .plyr__controls .icon--captions-on+svg,.plyr--fullscreen-active .icon--exit-fullscreen+svg,.plyr--muted .plyr__controls .icon--muted+svg{display:none}.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen]{display:inline-block}.plyr__tooltip{position:absolute;z-index:2;bottom:100%;margin-bottom:10px;padding:5px 7.5px;opacity:0;background:rgba(0,0,0,.7);border-radius:3px;color:#fff;font-size:14px;line-height:1.3;transform:translate(-50%,10px) scale(.8);transform-origin:50% 100%;transition:transform .2s .1s ease,opacity .2s .1s ease}.plyr__tooltip::before{content:\"\";position:absolute;width:0;height:0;left:50%;transform:translateX(-50%);bottom:-4px;border-right:4px solid transparent;border-top:4px solid rgba(0,0,0,.7);border-left:4px solid transparent;z-index:2}.plyr button.tab-focus:focus .plyr__tooltip,.plyr button:hover .plyr__tooltip,.plyr__tooltip--visible{opacity:1;transform:translate(-50%,0) scale(1)}.plyr button:hover .plyr__tooltip{z-index:3}.plyr__controls button:first-child .plyr__tooltip{left:0;transform:translate(0,10px) scale(.8);transform-origin:0 100%}.plyr__controls button:first-child .plyr__tooltip::before{left:16px}.plyr__controls button:last-child .plyr__tooltip{right:0;transform:translate(0,10px) scale(.8);transform-origin:100% 100%}.plyr__controls button:last-child .plyr__tooltip::before{left:auto;right:16px;transform:translateX(50%)}.plyr__controls button:first-child .plyr__tooltip--visible,.plyr__controls button:first-child.tab-focus:focus .plyr__tooltip,.plyr__controls button:first-child:hover .plyr__tooltip,.plyr__controls button:last-child .plyr__tooltip--visible,.plyr__controls button:last-child.tab-focus:focus .plyr__tooltip,.plyr__controls button:last-child:hover .plyr__tooltip{transform:translate(0,0) scale(1)}.plyr__progress{position:relative;display:none;flex:1}.plyr__progress input[type=range]{position:relative;z-index:2}.plyr__progress input[type=range]::-webkit-slider-runnable-track{background:0 0}.plyr__progress input[type=range]::-moz-range-track{background:0 0}.plyr__progress input[type=range]::-ms-fill-upper{background:0 0}.plyr__progress .plyr__tooltip{left:0}.plyr .plyr__progress{display:inline-block}.plyr__progress--buffer,.plyr__progress--played,.plyr__volume--display{position:absolute;left:0;top:50%;width:100%;height:8px;margin:-4px 0 0;padding:0;vertical-align:top;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border-radius:100px}.plyr__progress--buffer::-webkit-progress-bar,.plyr__progress--played::-webkit-progress-bar,.plyr__volume--display::-webkit-progress-bar{background:0 0}.plyr__progress--buffer::-webkit-progress-value,.plyr__progress--played::-webkit-progress-value,.plyr__volume--display::-webkit-progress-value{background:currentColor;border-radius:100px;min-width:8px}.plyr__progress--buffer::-moz-progress-bar,.plyr__progress--played::-moz-progress-bar,.plyr__volume--display::-moz-progress-bar{background:currentColor;border-radius:100px;min-width:8px}.plyr__progress--buffer::-ms-fill,.plyr__progress--played::-ms-fill,.plyr__volume--display::-ms-fill{border-radius:100px}.plyr__progress--played,.plyr__volume--display{z-index:1;color:#3498db;background:0 0;transition:none}.plyr__progress--played::-webkit-progress-value,.plyr__volume--display::-webkit-progress-value{min-width:8px;max-width:99%;border-top-right-radius:0;border-bottom-right-radius:0;-webkit-transition:none;transition:none}.plyr__progress--played::-moz-progress-bar,.plyr__volume--display::-moz-progress-bar{min-width:8px;max-width:99%;border-top-right-radius:0;border-bottom-right-radius:0;-moz-transition:none;transition:none}.plyr__progress--played::-ms-fill,.plyr__volume--display::-ms-fill{display:none}.plyr__progress--buffer::-webkit-progress-value{-webkit-transition:width .2s ease;transition:width .2s ease}.plyr__progress--buffer::-moz-progress-bar{-moz-transition:width .2s ease;transition:width .2s ease}.plyr__progress--buffer::-ms-fill{-ms-transition:width .2s ease;transition:width .2s ease}.plyr--video .plyr__progress--buffer,.plyr--video .plyr__volume--display{background:rgba(255,255,255,.25)}.plyr--video .plyr__progress--buffer{color:rgba(255,255,255,.25)}.plyr--audio .plyr__progress--buffer,.plyr--audio .plyr__volume--display{background:rgba(198,214,219,.66)}.plyr--audio .plyr__progress--buffer{color:rgba(198,214,219,.66)}.plyr--loading .plyr__progress--buffer{-webkit-animation:plyr-progress 1s linear infinite;animation:plyr-progress 1s linear infinite;background-size:25px 25px;background-repeat:repeat-x;background-image:linear-gradient(-45deg,rgba(0,0,0,.15) 25%,transparent 25%,transparent 50%,rgba(0,0,0,.15) 50%,rgba(0,0,0,.15) 75%,transparent 75%,transparent);color:transparent}.plyr--video.plyr--loading .plyr__progress--buffer{background-color:rgba(255,255,255,.25)}.plyr--audio.plyr--loading .plyr__progress--buffer{background-color:rgba(198,214,219,.66)}.plyr__time{display:inline-block;vertical-align:middle;font-size:14px}.plyr__time+.plyr__time{display:none}@media (min-width:768px){.plyr__time+.plyr__time{display:inline-block}}.plyr__time+.plyr__time::before{content:\"\\2044\";margin-right:10px}.plyr__volume{display:none}.plyr .plyr__volume{flex:1;position:relative}.plyr .plyr__volume input[type=range]{position:relative;z-index:2}@media (min-width:480px){.plyr .plyr__volume{display:block;max-width:60px}}@media (min-width:768px){.plyr .plyr__volume{max-width:100px}}.plyr--is-ios .plyr__volume,.plyr--is-ios [data-plyr=mute]{display:none!important}.plyr--fullscreen-active{height:100%;width:100%;background:#000;border-radius:0!important}.plyr--fullscreen-active video{height:100%}.plyr--fullscreen-active .plyr__video-wrapper{height:100%;width:100%}.plyr--fullscreen-active .plyr__video-embed{overflow:visible}.plyr--fullscreen-active.plyr--vimeo .plyr__video-wrapper{height:0;top:50%;transform:translateY(-50%)}.plyr--fullscreen-fallback.plyr--fullscreen-active{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000000}", ""]);
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

/***/ "./node_modules/plyr/src/js/plyr.js":
/*!******************************************!*\
  !*** ./node_modules/plyr/src/js/plyr.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// ==========================================================================
// Plyr
// plyr.js v2.0.16
// https://github.com/sampotts/plyr
// License: The MIT License (MIT)
// ==========================================================================
// Credits: http://paypal.github.io/accessible-html5-video-player/
// ==========================================================================

(function(root, factory) {
    "use strict";
    /*global define,module*/

    if ( true && typeof module.exports === "object") {
        // Node, CommonJS-like
        module.exports = factory(root, document);
    } else if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return factory(root, document);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof window !== "undefined" ? window : this, function(window, document) {
    "use strict";

    // Globals
    var fullscreen,
        scroll = { x: 0, y: 0 },
        // Default config
        defaults = {
            enabled: true,
            debug: false,
            autoplay: false,
            loop: false,
            seekTime: 10,
            volume: 10,
            volumeMin: 0,
            volumeMax: 10,
            volumeStep: 1,
            duration: null,
            displayDuration: true,
            loadSprite: true,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/2.0.16/plyr.svg",
            blankUrl: "https://cdn.plyr.io/static/blank.mp4",
            clickToPlay: true,
            hideControls: true,
            showPosterOnEnd: false,
            disableContextMenu: true,
            keyboardShorcuts: {
                focused: true,
                global: false
            },
            tooltips: {
                controls: false,
                seek: true
            },
            selectors: {
                html5: "video, audio",
                embed: "[data-type]",
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    seek: '[data-plyr="seek"]',
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    forward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    fullscreen: '[data-plyr="fullscreen"]'
                },
                volume: {
                    input: '[data-plyr="volume"]',
                    display: ".plyr__volume--display"
                },
                progress: {
                    container: ".plyr__progress",
                    buffer: ".plyr__progress--buffer",
                    played: ".plyr__progress--played"
                },
                captions: ".plyr__captions",
                currentTime: ".plyr__time--current",
                duration: ".plyr__time--duration"
            },
            classes: {
                setup: "plyr--setup",
                ready: "plyr--ready",
                videoWrapper: "plyr__video-wrapper",
                embedWrapper: "plyr__video-embed",
                type: "plyr--{0}",
                stopped: "plyr--stopped",
                playing: "plyr--playing",
                muted: "plyr--muted",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback",
                    active: "plyr--fullscreen-active"
                },
                tabFocus: "tab-focus"
            },
            captions: {
                defaultActive: false
            },
            fullscreen: {
                enabled: true,
                fallback: true,
                allowAudio: false
            },
            storage: {
                enabled: true,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime} secs",
                play: "Play",
                pause: "Pause",
                forward: "Forward {seektime} secs",
                played: "played",
                buffered: "buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                toggleMute: "Toggle Mute",
                toggleCaptions: "Toggle Captions",
                toggleFullscreen: "Toggle Fullscreen",
                frameTitle: "Player for {title}"
            },
            types: {
                embed: ["youtube", "vimeo", "soundcloud"],
                html5: ["video", "audio"]
            },
            // URLs
            urls: {
                vimeo: {
                    api: "https://player.vimeo.com/api/player.js"
                },
                youtube: {
                    api: "https://www.youtube.com/iframe_api"
                },
                soundcloud: {
                    api: "https://w.soundcloud.com/player/api.js"
                }
            },
            // Custom control listeners
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                forward: null,
                mute: null,
                volume: null,
                captions: null,
                fullscreen: null
            },
            // Events to watch on HTML5 media elements
            events: [
                "ready",
                "ended",
                "progress",
                "stalled",
                "playing",
                "waiting",
                "canplay",
                "canplaythrough",
                "loadstart",
                "loadeddata",
                "loadedmetadata",
                "timeupdate",
                "volumechange",
                "play",
                "pause",
                "error",
                "seeking",
                "seeked",
                "emptied"
            ],
            // Logging
            logPrefix: "[Plyr]"
        };

    // Credits: http://paypal.github.io/accessible-html5-video-player/
    // Unfortunately, due to mixed support, UA sniffing is required
    function _browserSniff() {
        var ua = navigator.userAgent,
            name = navigator.appName,
            fullVersion = "" + parseFloat(navigator.appVersion),
            majorVersion = parseInt(navigator.appVersion, 10),
            nameOffset,
            verOffset,
            ix,
            isIE = false,
            isFirefox = false,
            isChrome = false,
            isSafari = false;

        if (navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1) {
            // MSIE 11
            isIE = true;
            name = "IE";
            fullVersion = "11";
        } else if ((verOffset = ua.indexOf("MSIE")) !== -1) {
            // MSIE
            isIE = true;
            name = "IE";
            fullVersion = ua.substring(verOffset + 5);
        } else if ((verOffset = ua.indexOf("Chrome")) !== -1) {
            // Chrome
            isChrome = true;
            name = "Chrome";
            fullVersion = ua.substring(verOffset + 7);
        } else if ((verOffset = ua.indexOf("Safari")) !== -1) {
            // Safari
            isSafari = true;
            name = "Safari";
            fullVersion = ua.substring(verOffset + 7);
            if ((verOffset = ua.indexOf("Version")) !== -1) {
                fullVersion = ua.substring(verOffset + 8);
            }
        } else if ((verOffset = ua.indexOf("Firefox")) !== -1) {
            // Firefox
            isFirefox = true;
            name = "Firefox";
            fullVersion = ua.substring(verOffset + 8);
        } else if ((nameOffset = ua.lastIndexOf(" ") + 1) < (verOffset = ua.lastIndexOf("/"))) {
            // In most other browsers, 'name/version' is at the end of userAgent
            name = ua.substring(nameOffset, verOffset);
            fullVersion = ua.substring(verOffset + 1);

            if (name.toLowerCase() === name.toUpperCase()) {
                name = navigator.appName;
            }
        }

        // Trim the fullVersion string at semicolon/space if present
        if ((ix = fullVersion.indexOf(";")) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }
        if ((ix = fullVersion.indexOf(" ")) !== -1) {
            fullVersion = fullVersion.substring(0, ix);
        }

        // Get major version
        majorVersion = parseInt("" + fullVersion, 10);
        if (isNaN(majorVersion)) {
            fullVersion = "" + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // Return data
        return {
            name: name,
            version: majorVersion,
            isIE: isIE,
            isFirefox: isFirefox,
            isChrome: isChrome,
            isSafari: isSafari,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
            isTouch: "ontouchstart" in document.documentElement
        };
    }

    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplyr.com/test/h5mt.html
    function _supportMime(plyr, mimeType) {
        var media = plyr.media;

        if (plyr.type === "video") {
            // Check type
            switch (mimeType) {
                case "video/webm":
                    return !!(
                        media.canPlayType && media.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "")
                    );
                case "video/mp4":
                    return !!(
                        media.canPlayType &&
                        media.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "")
                    );
                case "video/ogg":
                    return !!(media.canPlayType && media.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""));
            }
        } else if (plyr.type === "audio") {
            // Check type
            switch (mimeType) {
                case "audio/mpeg":
                    return !!(media.canPlayType && media.canPlayType("audio/mpeg;").replace(/no/, ""));
                case "audio/ogg":
                    return !!(media.canPlayType && media.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
                case "audio/wav":
                    return !!(media.canPlayType && media.canPlayType('audio/wav; codecs="1"').replace(/no/, ""));
            }
        }

        // If we got this far, we're stuffed
        return false;
    }

    // Inject a script
    function _injectScript(source) {
        if (document.querySelectorAll('script[src="' + source + '"]').length) {
            return;
        }

        var tag = document.createElement("script");
        tag.src = source;
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Element exists in an array
    function _inArray(haystack, needle) {
        return Array.prototype.indexOf && haystack.indexOf(needle) !== -1;
    }

    // Replace all
    function _replaceAll(string, find, replace) {
        return string.replace(new RegExp(find.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), replace);
    }

    // Wrap an element
    function _wrap(elements, wrapper) {
        // Convert `elements` to an array, if necessary.
        if (!elements.length) {
            elements = [elements];
        }

        // Loops backwards to prevent having to clone the wrapper on the
        // first element (see `child` below).
        for (var i = elements.length - 1; i >= 0; i--) {
            var child = i > 0 ? wrapper.cloneNode(true) : wrapper;
            var element = elements[i];

            // Cache the current parent and sibling.
            var parent = element.parentNode;
            var sibling = element.nextSibling;

            // Wrap the element (is automatically removed from its current
            // parent).
            child.appendChild(element);

            // If the element had a sibling, insert the wrapper before
            // the sibling to maintain the HTML structure; otherwise, just
            // append it to the parent.
            if (sibling) {
                parent.insertBefore(child, sibling);
            } else {
                parent.appendChild(child);
            }

            return child;
        }
    }

    // Unwrap an element
    // http://plainjs.com/javascript/manipulation/unwrap-a-dom-element-35/
    /*function _unwrap(wrapper) {
        // Get the element's parent node
        var parent = wrapper.parentNode;

        // Move all children out of the element
        while (wrapper.firstChild) {
            parent.insertBefore(wrapper.firstChild, wrapper);
        }

        // Remove the empty element
        parent.removeChild(wrapper);
    }*/

    // Remove an element
    function _remove(element) {
        if (!element) {
            return;
        }
        element.parentNode.removeChild(element);
    }

    // Prepend child
    function _prependChild(parent, element) {
        parent.insertBefore(element, parent.firstChild);
    }

    // Set attributes
    function _setAttributes(element, attributes) {
        for (var key in attributes) {
            element.setAttribute(key, _is.boolean(attributes[key]) && attributes[key] ? "" : attributes[key]);
        }
    }

    // Insert a HTML element
    function _insertElement(type, parent, attributes) {
        // Create a new <element>
        var element = document.createElement(type);

        // Set all passed attributes
        _setAttributes(element, attributes);

        // Inject the new element
        _prependChild(parent, element);
    }

    // Get a classname from selector
    function _getClassname(selector) {
        return selector.replace(".", "");
    }

    // Toggle class on an element
    function _toggleClass(element, className, state) {
        if (element) {
            if (element.classList) {
                element.classList[state ? "add" : "remove"](className);
            } else {
                var name = (" " + element.className + " ").replace(/\s+/g, " ").replace(" " + className + " ", "");
                element.className = name + (state ? " " + className : "");
            }
        }
    }

    // Has class name
    function _hasClass(element, className) {
        if (element) {
            if (element.classList) {
                return element.classList.contains(className);
            } else {
                return new RegExp("(\\s|^)" + className + "(\\s|$)").test(element.className);
            }
        }
        return false;
    }

    // Element matches selector
    function _matches(element, selector) {
        var p = Element.prototype;

        var f =
            p.matches ||
            p.webkitMatchesSelector ||
            p.mozMatchesSelector ||
            p.msMatchesSelector ||
            function(s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };

        return f.call(element, selector);
    }

    // Bind along with custom handler
    function _proxyListener(element, eventName, userListener, defaultListener, useCapture) {
        _on(
            element,
            eventName,
            function(event) {
                if (userListener) {
                    userListener.apply(element, [event]);
                }
                defaultListener.apply(element, [event]);
            },
            useCapture
        );
    }

    // Toggle event listener
    function _toggleListener(element, events, callback, toggle, useCapture) {
        var eventList = events.split(" ");

        // Whether the listener is a capturing listener or not
        // Default to false
        if (!_is.boolean(useCapture)) {
            useCapture = false;
        }

        // If a nodelist is passed, call itself on each node
        if (element instanceof NodeList) {
            for (var x = 0; x < element.length; x++) {
                if (element[x] instanceof Node) {
                    _toggleListener(element[x], arguments[1], arguments[2], arguments[3]);
                }
            }
            return;
        }

        // If a single node is passed, bind the event listener
        for (var i = 0; i < eventList.length; i++) {
            element[toggle ? "addEventListener" : "removeEventListener"](eventList[i], callback, useCapture);
        }
    }

    // Bind event
    function _on(element, events, callback, useCapture) {
        if (element) {
            _toggleListener(element, events, callback, true, useCapture);
        }
    }

    // Unbind event
    /*function _off(element, events, callback, useCapture) {
        if (element) {
            _toggleListener(element, events, callback, false, useCapture);
        }
    }*/

    // Trigger event
    function _event(element, type, bubbles, properties) {
        // Bail if no element
        if (!element || !type) {
            return;
        }

        // Default bubbles to false
        if (!_is.boolean(bubbles)) {
            bubbles = false;
        }

        // Create and dispatch the event
        var event = new CustomEvent(type, {
            bubbles: bubbles,
            detail: properties
        });

        // Dispatch the event
        element.dispatchEvent(event);
    }

    // Toggle aria-pressed state on a toggle button
    // http://www.ssbbartgroup.com/blog/how-not-to-misuse-aria-states-properties-and-roles
    function _toggleState(target, state) {
        // Bail if no target
        if (!target) {
            return;
        }

        // Get state
        state = _is.boolean(state) ? state : !target.getAttribute("aria-pressed");

        // Set the attribute on target
        target.setAttribute("aria-pressed", state);

        return state;
    }

    // Get percentage
    function _getPercentage(current, max) {
        if (current === 0 || max === 0 || isNaN(current) || isNaN(max)) {
            return 0;
        }
        return (current / max * 100).toFixed(2);
    }

    // Deep extend/merge destination object with N more objects
    // http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    // Removed call to arguments.callee (used explicit function name instead)
    function _extend() {
        // Get arguments
        var objects = arguments;

        // Bail if nothing to merge
        if (!objects.length) {
            return;
        }

        // Return first if specified but nothing to merge
        if (objects.length === 1) {
            return objects[0];
        }

        // First object is the destination
        var destination = Array.prototype.shift.call(objects),
            length = objects.length;

        // Loop through all objects to merge
        for (var i = 0; i < length; i++) {
            var source = objects[i];

            for (var property in source) {
                if (source[property] && source[property].constructor && source[property].constructor === Object) {
                    destination[property] = destination[property] || {};
                    _extend(destination[property], source[property]);
                } else {
                    destination[property] = source[property];
                }
            }
        }

        return destination;
    }

    // Check variable types
    var _is = {
        object: function(input) {
            return input !== null && typeof input === "object";
        },
        array: function(input) {
            return input !== null && (typeof input === "object" && input.constructor === Array);
        },
        number: function(input) {
            return (
                input !== null &&
                ((typeof input === "number" && !isNaN(input - 0)) ||
                    (typeof input === "object" && input.constructor === Number))
            );
        },
        string: function(input) {
            return (
                input !== null &&
                (typeof input === "string" || (typeof input === "object" && input.constructor === String))
            );
        },
        boolean: function(input) {
            return input !== null && typeof input === "boolean";
        },
        nodeList: function(input) {
            return input !== null && input instanceof NodeList;
        },
        htmlElement: function(input) {
            return input !== null && input instanceof HTMLElement;
        },
        function: function(input) {
            return input !== null && typeof input === "function";
        },
        undefined: function(input) {
            return input !== null && typeof input === "undefined";
        }
    };

    // Parse YouTube ID from url
    function _parseYouTubeId(url) {
        var regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return url.match(regex) ? RegExp.$2 : url;
    }

    // Parse Vimeo ID from url
    function _parseVimeoId(url) {
        var regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
        return url.match(regex) ? RegExp.$2 : url;
    }

    // Fullscreen API
    function _fullscreen() {
        var fullscreen = {
                supportsFullScreen: false,
                isFullScreen: function() {
                    return false;
                },
                requestFullScreen: function() {},
                cancelFullScreen: function() {},
                fullScreenEventName: "",
                element: null,
                prefix: ""
            },
            browserPrefixes = "webkit o moz ms khtml".split(" ");

        // Check for native support
        if (!_is.undefined(document.cancelFullScreen)) {
            fullscreen.supportsFullScreen = true;
        } else {
            // Check for fullscreen support by vendor prefix
            for (var i = 0, il = browserPrefixes.length; i < il; i++) {
                fullscreen.prefix = browserPrefixes[i];

                if (!_is.undefined(document[fullscreen.prefix + "CancelFullScreen"])) {
                    fullscreen.supportsFullScreen = true;
                    break;
                } else if (!_is.undefined(document.msExitFullscreen) && document.msFullscreenEnabled) {
                    // Special case for MS (when isn't it?)
                    fullscreen.prefix = "ms";
                    fullscreen.supportsFullScreen = true;
                    break;
                }
            }
        }

        // Update methods to do something useful
        if (fullscreen.supportsFullScreen) {
            // Yet again Microsoft awesomeness,
            // Sometimes the prefix is 'ms', sometimes 'MS' to keep you on your toes
            fullscreen.fullScreenEventName =
                fullscreen.prefix === "ms" ? "MSFullscreenChange" : fullscreen.prefix + "fullscreenchange";

            fullscreen.isFullScreen = function(element) {
                if (_is.undefined(element)) {
                    element = document.body;
                }
                switch (this.prefix) {
                    case "":
                        return document.fullscreenElement === element;
                    case "moz":
                        return document.mozFullScreenElement === element;
                    default:
                        return document[this.prefix + "FullscreenElement"] === element;
                }
            };
            fullscreen.requestFullScreen = function(element) {
                if (_is.undefined(element)) {
                    element = document.body;
                }
                return this.prefix === ""
                    ? element.requestFullScreen()
                    : element[this.prefix + (this.prefix === "ms" ? "RequestFullscreen" : "RequestFullScreen")]();
            };
            fullscreen.cancelFullScreen = function() {
                return this.prefix === ""
                    ? document.cancelFullScreen()
                    : document[this.prefix + (this.prefix === "ms" ? "ExitFullscreen" : "CancelFullScreen")]();
            };
            fullscreen.element = function() {
                return this.prefix === "" ? document.fullscreenElement : document[this.prefix + "FullscreenElement"];
            };
        }

        return fullscreen;
    }

    // Local storage
    var _storage = {
        supported: (function() {
            // Try to use it (it might be disabled, e.g. user is in private/porn mode)
            // see: https://github.com/sampotts/plyr/issues/131
            try {
                // Add test item
                window.localStorage.setItem("___test", "OK");

                // Get the test item
                var result = window.localStorage.getItem("___test");

                // Clean up
                window.localStorage.removeItem("___test");

                // Check if value matches
                return result === "OK";
            } catch (e) {
                return false;
            }

            return false;
        })()
    };

    // Player instance
    function Plyr(media, config) {
        var plyr = this,
            timers = {},
            api;

        // Set media
        plyr.media = media;
        var original = media.cloneNode(true);

        // Trigger events, with plyr instance passed
        function _triggerEvent(element, type, bubbles, properties) {
            _event(
                element,
                type,
                bubbles,
                _extend({}, properties, {
                    plyr: api
                })
            );
        }

        // Debugging
        function _console(type, args) {
            if (config.debug && window.console) {
                args = Array.prototype.slice.call(args);

                if (_is.string(config.logPrefix) && config.logPrefix.length) {
                    args.unshift(config.logPrefix);
                }

                console[type].apply(console, args);
            }
        }
        var _log = function() {
                _console("log", arguments);
            },
            _warn = function() {
                _console("warn", arguments);
            };

        // Log config options
        _log("Config", config);

        // Get icon URL
        function _getIconUrl() {
            return {
                url: config.iconUrl,
                absolute: config.iconUrl.indexOf("http") === 0 || plyr.browser.isIE
            };
        }

        // Build the default HTML
        function _buildControls() {
            // Create html array
            var html = [],
                iconUrl = _getIconUrl(),
                iconPath = (!iconUrl.absolute ? iconUrl.url : "") + "#" + config.iconPrefix;

            // Larger overlaid play button
            if (_inArray(config.controls, "play-large")) {
                html.push(
                    '<button type="button" data-plyr="play" class="plyr__play-large">',
                    '<svg><use xlink:href="' + iconPath + '-play" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.play + "</span>",
                    "</button>"
                );
            }

            html.push('<div class="plyr__controls">');

            // Restart button
            if (_inArray(config.controls, "restart")) {
                html.push(
                    '<button type="button" data-plyr="restart">',
                    '<svg><use xlink:href="' + iconPath + '-restart" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.restart + "</span>",
                    "</button>"
                );
            }

            // Rewind button
            if (_inArray(config.controls, "rewind")) {
                html.push(
                    '<button type="button" data-plyr="rewind">',
                    '<svg><use xlink:href="' + iconPath + '-rewind" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.rewind + "</span>",
                    "</button>"
                );
            }

            // Play Pause button
            // TODO: This should be a toggle button really?
            if (_inArray(config.controls, "play")) {
                html.push(
                    '<button type="button" data-plyr="play">',
                    '<svg><use xlink:href="' + iconPath + '-play" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.play + "</span>",
                    "</button>",
                    '<button type="button" data-plyr="pause">',
                    '<svg><use xlink:href="' + iconPath + '-pause" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.pause + "</span>",
                    "</button>"
                );
            }

            // Fast forward button
            if (_inArray(config.controls, "fast-forward")) {
                html.push(
                    '<button type="button" data-plyr="fast-forward">',
                    '<svg><use xlink:href="' + iconPath + '-fast-forward" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.forward + "</span>",
                    "</button>"
                );
            }

            // Progress
            if (_inArray(config.controls, "progress")) {
                // Create progress
                html.push(
                    '<span class="plyr__progress">',
                    '<label for="seek{id}" class="plyr__sr-only">Seek</label>',
                    '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">',
                    '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>',
                    '<progress class="plyr__progress--buffer" max="100" value="0">',
                    "<span>0</span>% " + config.i18n.buffered,
                    "</progress>"
                );

                // Seek tooltip
                if (config.tooltips.seek) {
                    html.push('<span class="plyr__tooltip">00:00</span>');
                }

                // Close
                html.push("</span>");
            }

            // Media current time display
            if (_inArray(config.controls, "current-time")) {
                html.push(
                    '<span class="plyr__time">',
                    '<span class="plyr__sr-only">' + config.i18n.currentTime + "</span>",
                    '<span class="plyr__time--current">00:00</span>',
                    "</span>"
                );
            }

            // Media duration display
            if (_inArray(config.controls, "duration")) {
                html.push(
                    '<span class="plyr__time">',
                    '<span class="plyr__sr-only">' + config.i18n.duration + "</span>",
                    '<span class="plyr__time--duration">00:00</span>',
                    "</span>"
                );
            }

            // Toggle mute button
            if (_inArray(config.controls, "mute")) {
                html.push(
                    '<button type="button" data-plyr="mute">',
                    '<svg class="icon--muted"><use xlink:href="' + iconPath + '-muted" /></svg>',
                    '<svg><use xlink:href="' + iconPath + '-volume" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.toggleMute + "</span>",
                    "</button>"
                );
            }

            // Volume range control
            if (_inArray(config.controls, "volume")) {
                html.push(
                    '<span class="plyr__volume">',
                    '<label for="volume{id}" class="plyr__sr-only">' + config.i18n.volume + "</label>",
                    '<input id="volume{id}" class="plyr__volume--input" type="range" min="' +
                        config.volumeMin +
                        '" max="' +
                        config.volumeMax +
                        '" value="' +
                        config.volume +
                        '" data-plyr="volume">',
                    '<progress class="plyr__volume--display" max="' +
                        config.volumeMax +
                        '" value="' +
                        config.volumeMin +
                        '" role="presentation"></progress>',
                    "</span>"
                );
            }

            // Toggle captions button
            if (_inArray(config.controls, "captions")) {
                html.push(
                    '<button type="button" data-plyr="captions">',
                    '<svg class="icon--captions-on"><use xlink:href="' + iconPath + '-captions-on" /></svg>',
                    '<svg><use xlink:href="' + iconPath + '-captions-off" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.toggleCaptions + "</span>",
                    "</button>"
                );
            }

            // Toggle fullscreen button
            if (_inArray(config.controls, "fullscreen")) {
                html.push(
                    '<button type="button" data-plyr="fullscreen">',
                    '<svg class="icon--exit-fullscreen"><use xlink:href="' + iconPath + '-exit-fullscreen" /></svg>',
                    '<svg><use xlink:href="' + iconPath + '-enter-fullscreen" /></svg>',
                    '<span class="plyr__sr-only">' + config.i18n.toggleFullscreen + "</span>",
                    "</button>"
                );
            }

            // Close everything
            html.push("</div>");

            return html.join("");
        }

        // Setup fullscreen
        function _setupFullscreen() {
            if (!plyr.supported.full) {
                return;
            }

            if ((plyr.type !== "audio" || config.fullscreen.allowAudio) && config.fullscreen.enabled) {
                // Check for native support
                var nativeSupport = fullscreen.supportsFullScreen;

                if (nativeSupport || (config.fullscreen.fallback && !_inFrame())) {
                    _log((nativeSupport ? "Native" : "Fallback") + " fullscreen enabled");

                    // Add styling hook
                    if (!nativeSupport) {
                        _toggleClass(plyr.container, config.classes.fullscreen.fallback, true);
                    }

                    // Add styling hook
                    _toggleClass(plyr.container, config.classes.fullscreen.enabled, true);
                } else {
                    _log("Fullscreen not supported and fallback disabled");
                }

                // Toggle state
                if (plyr.buttons && plyr.buttons.fullscreen) {
                    _toggleState(plyr.buttons.fullscreen, false);
                }

                // Setup focus trap
                _focusTrap();
            }
        }

        // Setup captions
        function _setupCaptions() {
            // Bail if not HTML5 video
            if (plyr.type !== "video") {
                return;
            }

            // Inject the container
            if (!_getElement(config.selectors.captions)) {
                plyr.videoContainer.insertAdjacentHTML(
                    "afterbegin",
                    '<div class="' + _getClassname(config.selectors.captions) + '"></div>'
                );
            }

            // Determine if HTML5 textTracks is supported
            plyr.usingTextTracks = false;
            if (plyr.media.textTracks) {
                plyr.usingTextTracks = true;
            }

            // Get URL of caption file if exists
            var captionSrc = "",
                kind,
                children = plyr.media.childNodes;

            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeName.toLowerCase() === "track") {
                    kind = children[i].kind;
                    if (kind === "captions" || kind === "subtitles") {
                        captionSrc = children[i].getAttribute("src");
                    }
                }
            }

            // Record if caption file exists or not
            plyr.captionExists = true;
            if (captionSrc === "") {
                plyr.captionExists = false;
                _log("No caption track found");
            } else {
                _log("Caption track found; URI: " + captionSrc);
            }

            // If no caption file exists, hide container for caption text
            if (!plyr.captionExists) {
                _toggleClass(plyr.container, config.classes.captions.enabled);
            } else {
                // Turn off native caption rendering to avoid double captions
                // This doesn't seem to work in Safari 7+, so the <track> elements are removed from the dom below
                var tracks = plyr.media.textTracks;
                for (var x = 0; x < tracks.length; x++) {
                    tracks[x].mode = "hidden";
                }

                // Enable UI
                _showCaptions(plyr);

                // Disable unsupported browsers than report false positive
                // Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1033144
                if (
                    (plyr.browser.isIE && plyr.browser.version >= 10) ||
                    (plyr.browser.isFirefox && plyr.browser.version >= 31)
                ) {
                    // Debugging
                    _log("Detected browser with known TextTrack issues - using manual fallback");

                    // Set to false so skips to 'manual' captioning
                    plyr.usingTextTracks = false;
                }

                // Rendering caption tracks
                // Native support required - http://caniuse.com/webvtt
                if (plyr.usingTextTracks) {
                    _log("TextTracks supported");

                    for (var y = 0; y < tracks.length; y++) {
                        var track = tracks[y];

                        if (track.kind === "captions" || track.kind === "subtitles") {
                            _on(track, "cuechange", function() {
                                // Display a cue, if there is one
                                if (this.activeCues[0] && "text" in this.activeCues[0]) {
                                    _setCaption(this.activeCues[0].getCueAsHTML());
                                } else {
                                    _setCaption();
                                }
                            });
                        }
                    }
                } else {
                    // Caption tracks not natively supported
                    _log("TextTracks not supported so rendering captions manually");

                    // Render captions from array at appropriate time
                    plyr.currentCaption = "";
                    plyr.captions = [];

                    if (captionSrc !== "") {
                        // Create XMLHttpRequest Object
                        var xhr = new XMLHttpRequest();

                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4) {
                                if (xhr.status === 200) {
                                    var captions = [],
                                        caption,
                                        req = xhr.responseText;

                                    //According to webvtt spec, line terminator consists of one of the following
                                    // CRLF (U+000D U+000A), LF (U+000A) or CR (U+000D)
                                    var lineSeparator = "\r\n";
                                    if (req.indexOf(lineSeparator + lineSeparator) === -1) {
                                        if (req.indexOf("\r\r") !== -1) {
                                            lineSeparator = "\r";
                                        } else {
                                            lineSeparator = "\n";
                                        }
                                    }

                                    captions = req.split(lineSeparator + lineSeparator);

                                    for (var r = 0; r < captions.length; r++) {
                                        caption = captions[r];
                                        plyr.captions[r] = [];

                                        // Get the parts of the captions
                                        var parts = caption.split(lineSeparator),
                                            index = 0;

                                        // Incase caption numbers are added
                                        if (parts[index].indexOf(":") === -1) {
                                            index = 1;
                                        }

                                        plyr.captions[r] = [parts[index], parts[index + 1]];
                                    }

                                    // Remove first element ('VTT')
                                    plyr.captions.shift();

                                    _log("Successfully loaded the caption file via AJAX");
                                } else {
                                    _warn(config.logPrefix + "There was a problem loading the caption file via AJAX");
                                }
                            }
                        };

                        xhr.open("get", captionSrc, true);

                        xhr.send();
                    }
                }
            }
        }

        // Set the current caption
        function _setCaption(caption) {
            /* jshint unused:false */
            var container = _getElement(config.selectors.captions),
                content = document.createElement("span");

            // Empty the container
            container.innerHTML = "";

            // Default to empty
            if (_is.undefined(caption)) {
                caption = "";
            }

            // Set the span content
            if (_is.string(caption)) {
                content.innerHTML = caption.trim();
            } else {
                content.appendChild(caption);
            }

            // Set new caption text
            container.appendChild(content);

            // Force redraw (for Safari)
            var redraw = container.offsetHeight;
        }

        // Captions functions
        // Seek the manual caption time and update UI
        function _seekManualCaptions(time) {
            // Utilities for caption time codes
            function _timecodeCommon(tc, pos) {
                var tcpair = [];
                tcpair = tc.split(" --> ");
                for (var i = 0; i < tcpair.length; i++) {
                    // WebVTT allows for extra meta data after the timestamp line
                    // So get rid of this if it exists
                    tcpair[i] = tcpair[i].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                }
                return _subTcSecs(tcpair[pos]);
            }
            function _timecodeMin(tc) {
                return _timecodeCommon(tc, 0);
            }
            function _timecodeMax(tc) {
                return _timecodeCommon(tc, 1);
            }
            function _subTcSecs(tc) {
                if (tc === null || tc === undefined) {
                    return 0;
                } else {
                    var tc1 = [],
                        tc2 = [],
                        seconds;
                    tc1 = tc.split(",");
                    tc2 = tc1[0].split(":");
                    seconds = Math.floor(tc2[0] * 60 * 60) + Math.floor(tc2[1] * 60) + Math.floor(tc2[2]);
                    return seconds;
                }
            }

            // If it's not video, or we're using textTracks, bail.
            if (plyr.usingTextTracks || plyr.type !== "video" || !plyr.supported.full) {
                return;
            }

            // Reset subcount
            plyr.subcount = 0;

            // Check time is a number, if not use currentTime
            // IE has a bug where currentTime doesn't go to 0
            // https://twitter.com/Sam_Potts/status/573715746506731521
            time = _is.number(time) ? time : plyr.media.currentTime;

            // If there's no subs available, bail
            if (!plyr.captions[plyr.subcount]) {
                return;
            }

            while (_timecodeMax(plyr.captions[plyr.subcount][0]) < time.toFixed(1)) {
                plyr.subcount++;
                if (plyr.subcount > plyr.captions.length - 1) {
                    plyr.subcount = plyr.captions.length - 1;
                    break;
                }
            }

            // Check if the next caption is in the current time range
            if (
                plyr.media.currentTime.toFixed(1) >= _timecodeMin(plyr.captions[plyr.subcount][0]) &&
                plyr.media.currentTime.toFixed(1) <= _timecodeMax(plyr.captions[plyr.subcount][0])
            ) {
                plyr.currentCaption = plyr.captions[plyr.subcount][1];

                // Render the caption
                _setCaption(plyr.currentCaption);
            } else {
                _setCaption();
            }
        }

        // Display captions container and button (for initialization)
        function _showCaptions() {
            // If there's no caption toggle, bail
            if (!plyr.buttons.captions) {
                return;
            }

            _toggleClass(plyr.container, config.classes.captions.enabled, true);

            // Try to load the value from storage
            var active = plyr.storage.captionsEnabled;

            // Otherwise fall back to the default config
            if (!_is.boolean(active)) {
                active = config.captions.defaultActive;
            }

            if (active) {
                _toggleClass(plyr.container, config.classes.captions.active, true);
                _toggleState(plyr.buttons.captions, true);
            }
        }

        // Find all elements
        function _getElements(selector) {
            return plyr.container.querySelectorAll(selector);
        }

        // Find a single element
        function _getElement(selector) {
            return _getElements(selector)[0];
        }

        // Determine if we're in an iframe
        function _inFrame() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }

        // Trap focus inside container
        function _focusTrap() {
            var tabbables = _getElements("input:not([disabled]), button:not([disabled])"),
                first = tabbables[0],
                last = tabbables[tabbables.length - 1];

            function _checkFocus(event) {
                // If it is TAB
                if (event.which === 9 && plyr.isFullscreen) {
                    if (event.target === last && !event.shiftKey) {
                        // Move focus to first element that can be tabbed if Shift isn't used
                        event.preventDefault();
                        first.focus();
                    } else if (event.target === first && event.shiftKey) {
                        // Move focus to last element that can be tabbed if Shift is used
                        event.preventDefault();
                        last.focus();
                    }
                }
            }

            // Bind the handler
            _on(plyr.container, "keydown", _checkFocus);
        }

        // Add elements to HTML5 media (source, tracks, etc)
        function _insertChildElements(type, attributes) {
            if (_is.string(attributes)) {
                _insertElement(type, plyr.media, { src: attributes });
            } else if (attributes.constructor === Array) {
                for (var i = attributes.length - 1; i >= 0; i--) {
                    _insertElement(type, plyr.media, attributes[i]);
                }
            }
        }

        // Insert controls
        function _injectControls() {
            // Sprite
            if (config.loadSprite) {
                var iconUrl = _getIconUrl();

                // Only load external sprite using AJAX
                if (iconUrl.absolute) {
                    _log("AJAX loading absolute SVG sprite" + (plyr.browser.isIE ? " (due to IE)" : ""));
                    loadSprite(iconUrl.url, "sprite-plyr");
                } else {
                    _log("Sprite will be used as external resource directly");
                }
            }

            // Make a copy of the html
            var html = config.html;

            // Insert custom video controls
            _log("Injecting custom controls");

            // If no controls are specified, create default
            if (!html) {
                html = _buildControls();
            }

            // Replace seek time instances
            html = _replaceAll(html, "{seektime}", config.seekTime);

            // Replace all id references with random numbers
            html = _replaceAll(html, "{id}", Math.floor(Math.random() * 10000));

            // Controls container
            var target;

            // Inject to custom location
            if (_is.string(config.selectors.controls.container)) {
                target = document.querySelector(config.selectors.controls.container);
            }

            // Inject into the container by default
            if (!_is.htmlElement(target)) {
                target = plyr.container;
            }

            // Inject controls HTML
            target.insertAdjacentHTML("beforeend", html);

            // Setup tooltips
            if (config.tooltips.controls) {
                var labels = _getElements(
                    [config.selectors.controls.wrapper, " ", config.selectors.labels, " .", config.classes.hidden].join(
                        ""
                    )
                );

                for (var i = labels.length - 1; i >= 0; i--) {
                    var label = labels[i];

                    _toggleClass(label, config.classes.hidden, false);
                    _toggleClass(label, config.classes.tooltip, true);
                }
            }
        }

        // Find the UI controls and store references
        function _findElements() {
            try {
                plyr.controls = _getElement(config.selectors.controls.wrapper);

                // Buttons
                plyr.buttons = {};
                plyr.buttons.seek = _getElement(config.selectors.buttons.seek);
                plyr.buttons.play = _getElements(config.selectors.buttons.play);
                plyr.buttons.pause = _getElement(config.selectors.buttons.pause);
                plyr.buttons.restart = _getElement(config.selectors.buttons.restart);
                plyr.buttons.rewind = _getElement(config.selectors.buttons.rewind);
                plyr.buttons.forward = _getElement(config.selectors.buttons.forward);
                plyr.buttons.fullscreen = _getElement(config.selectors.buttons.fullscreen);

                // Inputs
                plyr.buttons.mute = _getElement(config.selectors.buttons.mute);
                plyr.buttons.captions = _getElement(config.selectors.buttons.captions);

                // Progress
                plyr.progress = {};
                plyr.progress.container = _getElement(config.selectors.progress.container);

                // Progress - Buffering
                plyr.progress.buffer = {};
                plyr.progress.buffer.bar = _getElement(config.selectors.progress.buffer);
                plyr.progress.buffer.text =
                    plyr.progress.buffer.bar && plyr.progress.buffer.bar.getElementsByTagName("span")[0];

                // Progress - Played
                plyr.progress.played = _getElement(config.selectors.progress.played);

                // Seek tooltip
                plyr.progress.tooltip =
                    plyr.progress.container && plyr.progress.container.querySelector("." + config.classes.tooltip);

                // Volume
                plyr.volume = {};
                plyr.volume.input = _getElement(config.selectors.volume.input);
                plyr.volume.display = _getElement(config.selectors.volume.display);

                // Timing
                plyr.duration = _getElement(config.selectors.duration);
                plyr.currentTime = _getElement(config.selectors.currentTime);
                plyr.seekTime = _getElements(config.selectors.seekTime);

                return true;
            } catch (e) {
                _warn("It looks like there is a problem with your controls HTML");

                // Restore native video controls
                _toggleNativeControls(true);

                return false;
            }
        }

        // Toggle style hook
        function _toggleStyleHook() {
            _toggleClass(plyr.container, config.selectors.container.replace(".", ""), plyr.supported.full);
        }

        // Toggle native controls
        function _toggleNativeControls(toggle) {
            if (toggle && _inArray(config.types.html5, plyr.type)) {
                plyr.media.setAttribute("controls", "");
            } else {
                plyr.media.removeAttribute("controls");
            }
        }

        // Setup aria attribute for play and iframe title
        function _setTitle(iframe) {
            // Find the current text
            var label = config.i18n.play;

            // If there's a media title set, use that for the label
            if (_is.string(config.title) && config.title.length) {
                label += ", " + config.title;

                // Set container label
                plyr.container.setAttribute("aria-label", config.title);
            }

            // If there's a play button, set label
            if (plyr.supported.full && plyr.buttons.play) {
                for (var i = plyr.buttons.play.length - 1; i >= 0; i--) {
                    plyr.buttons.play[i].setAttribute("aria-label", label);
                }
            }

            // Set iframe title
            // https://github.com/sampotts/plyr/issues/124
            if (_is.htmlElement(iframe)) {
                iframe.setAttribute("title", config.i18n.frameTitle.replace("{title}", config.title));
            }
        }

        // Setup localStorage
        function _setupStorage() {
            var value = null;
            plyr.storage = {};

            // Bail if we don't have localStorage support or it's disabled
            if (!_storage.supported || !config.storage.enabled) {
                return;
            }

            // Clean up old volume
            // https://github.com/sampotts/plyr/issues/171
            window.localStorage.removeItem("plyr-volume");

            // load value from the current key
            value = window.localStorage.getItem(config.storage.key);

            if (!value) {
                // Key wasn't set (or had been cleared), move along
                return;
            } else if (/^\d+(\.\d+)?$/.test(value)) {
                // If value is a number, it's probably volume from an older
                // version of plyr. See: https://github.com/sampotts/plyr/pull/313
                // Update the key to be JSON
                _updateStorage({ volume: parseFloat(value) });
            } else {
                // Assume it's JSON from this or a later version of plyr
                plyr.storage = JSON.parse(value);
            }
        }

        // Save a value back to local storage
        function _updateStorage(value) {
            // Bail if we don't have localStorage support or it's disabled
            if (!_storage.supported || !config.storage.enabled) {
                return;
            }

            // Update the working copy of the values
            _extend(plyr.storage, value);

            // Update storage
            window.localStorage.setItem(config.storage.key, JSON.stringify(plyr.storage));
        }

        // Setup media
        function _setupMedia() {
            // If there's no media, bail
            if (!plyr.media) {
                _warn("No media element found!");
                return;
            }

            if (plyr.supported.full) {
                // Add type class
                _toggleClass(plyr.container, config.classes.type.replace("{0}", plyr.type), true);

                // Add video class for embeds
                // This will require changes if audio embeds are added
                if (_inArray(config.types.embed, plyr.type)) {
                    _toggleClass(plyr.container, config.classes.type.replace("{0}", "video"), true);
                }

                // If there's no autoplay attribute, assume the video is stopped and add state class
                _toggleClass(plyr.container, config.classes.stopped, config.autoplay);

                // Add iOS class
                _toggleClass(plyr.container, config.classes.isIos, plyr.browser.isIos);

                // Add touch class
                _toggleClass(plyr.container, config.classes.isTouch, plyr.browser.isTouch);

                // Inject the player wrapper
                if (plyr.type === "video") {
                    // Create the wrapper div
                    var wrapper = document.createElement("div");
                    wrapper.setAttribute("class", config.classes.videoWrapper);

                    // Wrap the video in a container
                    _wrap(plyr.media, wrapper);

                    // Cache the container
                    plyr.videoContainer = wrapper;
                }
            }

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                _setupEmbed();
            }
        }

        // Setup YouTube/Vimeo
        function _setupEmbed() {
            var container = document.createElement("div"),
                mediaId,
                id = plyr.type + "-" + Math.floor(Math.random() * 10000);

            // Parse IDs from URLs if supplied
            switch (plyr.type) {
                case "youtube":
                    mediaId = _parseYouTubeId(plyr.embedId);
                    break;

                case "vimeo":
                    mediaId = _parseVimeoId(plyr.embedId);
                    break;

                default:
                    mediaId = plyr.embedId;
            }

            // Remove old containers
            var containers = _getElements('[id^="' + plyr.type + '-"]');
            for (var i = containers.length - 1; i >= 0; i--) {
                _remove(containers[i]);
            }

            // Add embed class for responsive
            _toggleClass(plyr.media, config.classes.videoWrapper, true);
            _toggleClass(plyr.media, config.classes.embedWrapper, true);

            if (plyr.type === "youtube") {
                // Create the YouTube container
                plyr.media.appendChild(container);

                // Set ID
                container.setAttribute("id", id);

                // Setup API
                if (_is.object(window.YT)) {
                    _youTubeReady(mediaId, container);
                } else {
                    // Load the API
                    _injectScript(config.urls.youtube.api);

                    // Setup callback for the API
                    window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [];

                    // Add to queue
                    window.onYouTubeReadyCallbacks.push(function() {
                        _youTubeReady(mediaId, container);
                    });

                    // Set callback to process queue
                    window.onYouTubeIframeAPIReady = function() {
                        window.onYouTubeReadyCallbacks.forEach(function(callback) {
                            callback();
                        });
                    };
                }
            } else if (plyr.type === "vimeo") {
                // Vimeo needs an extra div to hide controls on desktop (which has full support)
                if (plyr.supported.full) {
                    plyr.media.appendChild(container);
                } else {
                    container = plyr.media;
                }

                // Set ID
                container.setAttribute("id", id);

                // Load the API if not already
                if (!_is.object(window.Vimeo)) {
                    _injectScript(config.urls.vimeo.api);

                    // Wait for fragaloop load
                    var vimeoTimer = window.setInterval(function() {
                        if (_is.object(window.Vimeo)) {
                            window.clearInterval(vimeoTimer);
                            _vimeoReady(mediaId, container);
                        }
                    }, 50);
                } else {
                    _vimeoReady(mediaId, container);
                }
            } else if (plyr.type === "soundcloud") {
                // TODO: Currently unsupported and undocumented
                // Inject the iframe
                var soundCloud = document.createElement("iframe");

                // Watch for iframe load
                soundCloud.loaded = false;
                _on(soundCloud, "load", function() {
                    soundCloud.loaded = true;
                });

                _setAttributes(soundCloud, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + mediaId,
                    id: id
                });

                container.appendChild(soundCloud);
                plyr.media.appendChild(container);

                // Load the API if not already
                if (!window.SC) {
                    _injectScript(config.urls.soundcloud.api);
                }

                // Wait for SC load
                var soundCloudTimer = window.setInterval(function() {
                    if (window.SC && soundCloud.loaded) {
                        window.clearInterval(soundCloudTimer);
                        _soundcloudReady.call(soundCloud);
                    }
                }, 50);
            }
        }

        // When embeds are ready
        function _embedReady() {
            // Setup the UI and call ready if full support
            if (plyr.supported.full) {
                _setupInterface();
                _ready();
            }

            // Set title
            _setTitle(_getElement("iframe"));
        }

        // Handle YouTube API ready
        function _youTubeReady(videoId, container) {
            // Setup instance
            // https://developers.google.com/youtube/iframe_api_reference
            plyr.embed = new window.YT.Player(container.id, {
                videoId: videoId,
                playerVars: {
                    autoplay: config.autoplay ? 1 : 0,
                    controls: plyr.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: config.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*" // https://code.google.com/p/gdata-issues/issues/detail?id=5788#c45
                },
                events: {
                    onError: function(event) {
                        _triggerEvent(plyr.container, "error", true, {
                            code: event.data,
                            embed: event.target
                        });
                    },
                    onReady: function(event) {
                        // Get the instance
                        var instance = event.target;

                        // Create a faux HTML5 API using the YouTube API
                        plyr.media.play = function() {
                            instance.playVideo();
                            plyr.media.paused = false;
                        };
                        plyr.media.pause = function() {
                            instance.pauseVideo();
                            plyr.media.paused = true;
                        };
                        plyr.media.stop = function() {
                            instance.stopVideo();
                            plyr.media.paused = true;
                        };
                        plyr.media.duration = instance.getDuration();
                        plyr.media.paused = true;
                        plyr.media.currentTime = 0;
                        plyr.media.muted = instance.isMuted();

                        // Set title
                        config.title = instance.getVideoData().title;

                        // Set the tabindex
                        if (plyr.supported.full) {
                            plyr.media.querySelector("iframe").setAttribute("tabindex", "-1");
                        }

                        // Update UI
                        _embedReady();

                        // Trigger timeupdate
                        _triggerEvent(plyr.media, "timeupdate");

                        // Trigger timeupdate
                        _triggerEvent(plyr.media, "durationchange");

                        // Reset timer
                        window.clearInterval(timers.buffering);

                        // Setup buffering
                        timers.buffering = window.setInterval(function() {
                            // Get loaded % from YouTube
                            plyr.media.buffered = instance.getVideoLoadedFraction();

                            // Trigger progress only when we actually buffer something
                            if (plyr.media.lastBuffered === null || plyr.media.lastBuffered < plyr.media.buffered) {
                                _triggerEvent(plyr.media, "progress");
                            }

                            // Set last buffer point
                            plyr.media.lastBuffered = plyr.media.buffered;

                            // Bail if we're at 100%
                            if (plyr.media.buffered === 1) {
                                window.clearInterval(timers.buffering);

                                // Trigger event
                                _triggerEvent(plyr.media, "canplaythrough");
                            }
                        }, 200);
                    },
                    onStateChange: function(event) {
                        // Get the instance
                        var instance = event.target;

                        // Reset timer
                        window.clearInterval(timers.playing);

                        // Handle events
                        // -1   Unstarted
                        // 0    Ended
                        // 1    Playing
                        // 2    Paused
                        // 3    Buffering
                        // 5    Video cued
                        switch (event.data) {
                            case 0:
                                plyr.media.paused = true;
                                _triggerEvent(plyr.media, "ended");
                                break;

                            case 1:
                                plyr.media.paused = false;

                                // If we were seeking, fire seeked event
                                if (plyr.media.seeking) {
                                    _triggerEvent(plyr.media, "seeked");
                                }

                                plyr.media.seeking = false;
                                _triggerEvent(plyr.media, "play");
                                _triggerEvent(plyr.media, "playing");

                                // Poll to get playback progress
                                timers.playing = window.setInterval(function() {
                                    // Set the current time
                                    plyr.media.currentTime = instance.getCurrentTime();

                                    // Trigger timeupdate
                                    _triggerEvent(plyr.media, "timeupdate");
                                }, 100);

                                // Check duration again due to YouTube bug
                                // https://github.com/sampotts/plyr/issues/374
                                // https://code.google.com/p/gdata-issues/issues/detail?id=8690
                                if (plyr.media.duration !== instance.getDuration()) {
                                    plyr.media.duration = instance.getDuration();
                                    _triggerEvent(plyr.media, "durationchange");
                                }

                                break;

                            case 2:
                                plyr.media.paused = true;
                                _triggerEvent(plyr.media, "pause");
                                break;
                        }

                        _triggerEvent(plyr.container, "statechange", false, {
                            code: event.data
                        });
                    }
                }
            });
        }

        // Vimeo ready
        function _vimeoReady(mediaId, container) {
            // Setup instance
            // https://github.com/vimeo/player.js
            plyr.embed = new window.Vimeo.Player(container, {
                id: parseInt(mediaId),
                loop: config.loop,
                autoplay: config.autoplay,
                byline: false,
                portrait: false,
                title: false
            });

            // Create a faux HTML5 API using the Vimeo API
            plyr.media.play = function() {
                plyr.embed.play();
                plyr.media.paused = false;
            };
            plyr.media.pause = function() {
                plyr.embed.pause();
                plyr.media.paused = true;
            };
            plyr.media.stop = function() {
                plyr.embed.stop();
                plyr.media.paused = true;
            };

            plyr.media.paused = true;
            plyr.media.currentTime = 0;

            // Update UI
            _embedReady();

            plyr.embed.getCurrentTime().then(function(value) {
                plyr.media.currentTime = value;

                // Trigger timeupdate
                _triggerEvent(plyr.media, "timeupdate");
            });

            plyr.embed.getDuration().then(function(value) {
                plyr.media.duration = value;

                // Trigger timeupdate
                _triggerEvent(plyr.media, "durationchange");
            });

            // TODO: Captions
            /*if (config.captions.defaultActive) {
                plyr.embed.enableTextTrack('en');
            }*/

            plyr.embed.on("loaded", function() {
                // Fix keyboard focus issues
                // https://github.com/sampotts/plyr/issues/317
                if (_is.htmlElement(plyr.embed.element) && plyr.supported.full) {
                    plyr.embed.element.setAttribute("tabindex", "-1");
                }
            });

            plyr.embed.on("play", function() {
                plyr.media.paused = false;
                _triggerEvent(plyr.media, "play");
                _triggerEvent(plyr.media, "playing");
            });

            plyr.embed.on("pause", function() {
                plyr.media.paused = true;
                _triggerEvent(plyr.media, "pause");
            });

            plyr.embed.on("timeupdate", function(data) {
                plyr.media.seeking = false;
                plyr.media.currentTime = data.seconds;
                _triggerEvent(plyr.media, "timeupdate");
            });

            plyr.embed.on("progress", function(data) {
                plyr.media.buffered = data.percent;
                _triggerEvent(plyr.media, "progress");

                if (parseInt(data.percent) === 1) {
                    // Trigger event
                    _triggerEvent(plyr.media, "canplaythrough");
                }
            });

            plyr.embed.on("seeked", function() {
                plyr.media.seeking = false;
                _triggerEvent(plyr.media, "seeked");
                _triggerEvent(plyr.media, "play");
            });

            plyr.embed.on("ended", function() {
                plyr.media.paused = true;
                _triggerEvent(plyr.media, "ended");
            });
        }

        // Soundcloud ready
        function _soundcloudReady() {
            /* jshint validthis: true */
            plyr.embed = window.SC.Widget(this);

            // Setup on ready
            plyr.embed.bind(window.SC.Widget.Events.READY, function() {
                // Create a faux HTML5 API using the Soundcloud API
                plyr.media.play = function() {
                    plyr.embed.play();
                    plyr.media.paused = false;
                };
                plyr.media.pause = function() {
                    plyr.embed.pause();
                    plyr.media.paused = true;
                };
                plyr.media.stop = function() {
                    plyr.embed.seekTo(0);
                    plyr.embed.pause();
                    plyr.media.paused = true;
                };

                plyr.media.paused = true;
                plyr.media.currentTime = 0;

                plyr.embed.getDuration(function(value) {
                    plyr.media.duration = value / 1000;

                    // Update UI
                    _embedReady();
                });

                plyr.embed.getPosition(function(value) {
                    plyr.media.currentTime = value;

                    // Trigger timeupdate
                    _triggerEvent(plyr.media, "timeupdate");
                });

                plyr.embed.bind(window.SC.Widget.Events.PLAY, function() {
                    plyr.media.paused = false;
                    _triggerEvent(plyr.media, "play");
                    _triggerEvent(plyr.media, "playing");
                });

                plyr.embed.bind(window.SC.Widget.Events.PAUSE, function() {
                    plyr.media.paused = true;
                    _triggerEvent(plyr.media, "pause");
                });

                plyr.embed.bind(window.SC.Widget.Events.PLAY_PROGRESS, function(data) {
                    plyr.media.seeking = false;
                    plyr.media.currentTime = data.currentPosition / 1000;
                    _triggerEvent(plyr.media, "timeupdate");
                });

                plyr.embed.bind(window.SC.Widget.Events.LOAD_PROGRESS, function(data) {
                    plyr.media.buffered = data.loadProgress;
                    _triggerEvent(plyr.media, "progress");

                    if (parseInt(data.loadProgress) === 1) {
                        // Trigger event
                        _triggerEvent(plyr.media, "canplaythrough");
                    }
                });

                plyr.embed.bind(window.SC.Widget.Events.FINISH, function() {
                    plyr.media.paused = true;
                    _triggerEvent(plyr.media, "ended");
                });
            });
        }

        // Play media
        function _play() {
            if ("play" in plyr.media) {
                plyr.media.play();
            }
        }

        // Pause media
        function _pause() {
            if ("pause" in plyr.media) {
                plyr.media.pause();
            }
        }

        // Toggle playback
        function _togglePlay(toggle) {
            // True toggle
            if (!_is.boolean(toggle)) {
                toggle = plyr.media.paused;
            }

            if (toggle) {
                _play();
            } else {
                _pause();
            }

            return toggle;
        }

        // Rewind
        function _rewind(seekTime) {
            // Use default if needed
            if (!_is.number(seekTime)) {
                seekTime = config.seekTime;
            }
            _seek(plyr.media.currentTime - seekTime);
        }

        // Fast forward
        function _forward(seekTime) {
            // Use default if needed
            if (!_is.number(seekTime)) {
                seekTime = config.seekTime;
            }
            _seek(plyr.media.currentTime + seekTime);
        }

        // Seek to time
        // The input parameter can be an event or a number
        function _seek(input) {
            var targetTime = 0,
                paused = plyr.media.paused,
                duration = _getDuration();

            if (_is.number(input)) {
                targetTime = input;
            } else if (_is.object(input) && _inArray(["input", "change"], input.type)) {
                // It's the seek slider
                // Seek to the selected time
                targetTime = input.target.value / input.target.max * duration;
            }

            // Normalise targetTime
            if (targetTime < 0) {
                targetTime = 0;
            } else if (targetTime > duration) {
                targetTime = duration;
            }

            // Update seek range and progress
            _updateSeekDisplay(targetTime);

            // Set the current time
            // Try/catch incase the media isn't set and we're calling seek() from source() and IE moans
            try {
                plyr.media.currentTime = targetTime.toFixed(4);
            } catch (e) {}

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                switch (plyr.type) {
                    case "youtube":
                        plyr.embed.seekTo(targetTime);
                        break;

                    case "vimeo":
                        // Round to nearest second for vimeo
                        plyr.embed.setCurrentTime(targetTime.toFixed(0));
                        break;

                    case "soundcloud":
                        plyr.embed.seekTo(targetTime * 1000);
                        break;
                }

                if (paused) {
                    _pause();
                }

                // Trigger timeupdate
                _triggerEvent(plyr.media, "timeupdate");

                // Set seeking flag
                plyr.media.seeking = true;

                // Trigger seeking
                _triggerEvent(plyr.media, "seeking");
            }

            // Logging
            _log("Seeking to " + plyr.media.currentTime + " seconds");

            // Special handling for 'manual' captions
            _seekManualCaptions(targetTime);
        }

        // Get the duration (or custom if set)
        function _getDuration() {
            // It should be a number, but parse it just incase
            var duration = parseInt(config.duration),
                // True duration
                mediaDuration = 0;

            // Only if duration available
            if (plyr.media.duration !== null && !isNaN(plyr.media.duration)) {
                mediaDuration = plyr.media.duration;
            }

            // If custom duration is funky, use regular duration
            return isNaN(duration) ? mediaDuration : duration;
        }

        // Check playing state
        function _checkPlaying() {
            _toggleClass(plyr.container, config.classes.playing, !plyr.media.paused);

            _toggleClass(plyr.container, config.classes.stopped, plyr.media.paused);

            _toggleControls(plyr.media.paused);
        }

        // Save scroll position
        function _saveScrollPosition() {
            scroll = {
                x: window.pageXOffset || 0,
                y: window.pageYOffset || 0
            };
        }

        // Restore scroll position
        function _restoreScrollPosition() {
            window.scrollTo(scroll.x, scroll.y);
        }

        // Toggle fullscreen
        function _toggleFullscreen(event) {
            // Check for native support
            var nativeSupport = fullscreen.supportsFullScreen;

            if (nativeSupport) {
                // If it's a fullscreen change event, update the UI
                if (event && event.type === fullscreen.fullScreenEventName) {
                    plyr.isFullscreen = fullscreen.isFullScreen(plyr.container);
                } else {
                    // Else it's a user request to enter or exit
                    if (!fullscreen.isFullScreen(plyr.container)) {
                        // Save scroll position
                        _saveScrollPosition();

                        // Request full screen
                        fullscreen.requestFullScreen(plyr.container);
                    } else {
                        // Bail from fullscreen
                        fullscreen.cancelFullScreen();
                    }

                    // Check if we're actually full screen (it could fail)
                    plyr.isFullscreen = fullscreen.isFullScreen(plyr.container);

                    return;
                }
            } else {
                // Otherwise, it's a simple toggle
                plyr.isFullscreen = !plyr.isFullscreen;

                // Bind/unbind escape key
                document.body.style.overflow = plyr.isFullscreen ? "hidden" : "";
            }

            // Set class hook
            _toggleClass(plyr.container, config.classes.fullscreen.active, plyr.isFullscreen);

            // Trap focus
            _focusTrap(plyr.isFullscreen);

            // Set button state
            if (plyr.buttons && plyr.buttons.fullscreen) {
                _toggleState(plyr.buttons.fullscreen, plyr.isFullscreen);
            }

            // Trigger an event
            _triggerEvent(plyr.container, plyr.isFullscreen ? "enterfullscreen" : "exitfullscreen", true);

            // Restore scroll position
            if (!plyr.isFullscreen && nativeSupport) {
                _restoreScrollPosition();
            }
        }

        // Mute
        function _toggleMute(muted) {
            // If the method is called without parameter, toggle based on current value
            if (!_is.boolean(muted)) {
                muted = !plyr.media.muted;
            }

            // Set button state
            _toggleState(plyr.buttons.mute, muted);

            // Set mute on the player
            plyr.media.muted = muted;

            // If volume is 0 after unmuting, set to default
            if (plyr.media.volume === 0) {
                _setVolume(config.volume);
            }

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                // YouTube
                switch (plyr.type) {
                    case "youtube":
                        plyr.embed[plyr.media.muted ? "mute" : "unMute"]();
                        break;

                    case "vimeo":
                    case "soundcloud":
                        plyr.embed.setVolume(plyr.media.muted ? 0 : parseFloat(config.volume / config.volumeMax));
                        break;
                }

                // Trigger volumechange for embeds
                _triggerEvent(plyr.media, "volumechange");
            }
        }

        // Set volume
        function _setVolume(volume) {
            var max = config.volumeMax,
                min = config.volumeMin;

            // Load volume from storage if no value specified
            if (_is.undefined(volume)) {
                volume = plyr.storage.volume;
            }

            // Use config if all else fails
            if (volume === null || isNaN(volume)) {
                volume = config.volume;
            }

            // Maximum is volumeMax
            if (volume > max) {
                volume = max;
            }
            // Minimum is volumeMin
            if (volume < min) {
                volume = min;
            }

            // Set the player volume
            plyr.media.volume = parseFloat(volume / max);

            // Set the display
            if (plyr.volume.display) {
                plyr.volume.display.value = volume;
            }

            // Embeds
            if (_inArray(config.types.embed, plyr.type)) {
                switch (plyr.type) {
                    case "youtube":
                        plyr.embed.setVolume(plyr.media.volume * 100);
                        break;

                    case "vimeo":
                    case "soundcloud":
                        plyr.embed.setVolume(plyr.media.volume);
                        break;
                }

                // Trigger volumechange for embeds
                _triggerEvent(plyr.media, "volumechange");
            }

            // Toggle muted state
            if (volume === 0) {
                plyr.media.muted = true;
            } else if (plyr.media.muted && volume > 0) {
                _toggleMute();
            }
        }

        // Increase volume
        function _increaseVolume(step) {
            var volume = plyr.media.muted ? 0 : plyr.media.volume * config.volumeMax;

            if (!_is.number(step)) {
                step = config.volumeStep;
            }

            _setVolume(volume + step);
        }

        // Decrease volume
        function _decreaseVolume(step) {
            var volume = plyr.media.muted ? 0 : plyr.media.volume * config.volumeMax;

            if (!_is.number(step)) {
                step = config.volumeStep;
            }

            _setVolume(volume - step);
        }

        // Update volume UI and storage
        function _updateVolume() {
            // Get the current volume
            var volume = plyr.media.muted ? 0 : plyr.media.volume * config.volumeMax;

            // Update the <input type="range"> if present
            if (plyr.supported.full) {
                if (plyr.volume.input) {
                    plyr.volume.input.value = volume;
                }
                if (plyr.volume.display) {
                    plyr.volume.display.value = volume;
                }
            }

            // Update the volume in storage
            _updateStorage({ volume: volume });

            // Toggle class if muted
            _toggleClass(plyr.container, config.classes.muted, volume === 0);

            // Update checkbox for mute state
            if (plyr.supported.full && plyr.buttons.mute) {
                _toggleState(plyr.buttons.mute, volume === 0);
            }
        }

        // Toggle captions
        function _toggleCaptions(show) {
            // If there's no full support, or there's no caption toggle
            if (!plyr.supported.full || !plyr.buttons.captions) {
                return;
            }

            // If the method is called without parameter, toggle based on current value
            if (!_is.boolean(show)) {
                show = plyr.container.className.indexOf(config.classes.captions.active) === -1;
            }

            // Set global
            plyr.captionsEnabled = show;

            // Toggle state
            _toggleState(plyr.buttons.captions, plyr.captionsEnabled);

            // Add class hook
            _toggleClass(plyr.container, config.classes.captions.active, plyr.captionsEnabled);

            // Trigger an event
            _triggerEvent(plyr.container, plyr.captionsEnabled ? "captionsenabled" : "captionsdisabled", true);

            // Save captions state to localStorage
            _updateStorage({ captionsEnabled: plyr.captionsEnabled });
        }

        // Check if media is loading
        function _checkLoading(event) {
            var loading = event.type === "waiting";

            // Clear timer
            clearTimeout(timers.loading);

            // Timer to prevent flicker when seeking
            timers.loading = setTimeout(function() {
                // Toggle container class hook
                _toggleClass(plyr.container, config.classes.loading, loading);

                // Show controls if loading, hide if done
                _toggleControls(loading);
            }, loading ? 250 : 0);
        }

        // Update <progress> elements
        function _updateProgress(event) {
            if (!plyr.supported.full) {
                return;
            }

            var progress = plyr.progress.played,
                value = 0,
                duration = _getDuration();

            if (event) {
                switch (event.type) {
                    // Video playing
                    case "timeupdate":
                    case "seeking":
                        if (plyr.controls.pressed) {
                            return;
                        }

                        value = _getPercentage(plyr.media.currentTime, duration);

                        // Set seek range value only if it's a 'natural' time event
                        if (event.type === "timeupdate" && plyr.buttons.seek) {
                            plyr.buttons.seek.value = value;
                        }

                        break;

                    // Check buffer status
                    case "playing":
                    case "progress":
                        progress = plyr.progress.buffer;
                        value = (function() {
                            var buffered = plyr.media.buffered;

                            if (buffered && buffered.length) {
                                // HTML5
                                return _getPercentage(buffered.end(0), duration);
                            } else if (_is.number(buffered)) {
                                // YouTube returns between 0 and 1
                                return buffered * 100;
                            }

                            return 0;
                        })();

                        break;
                }
            }

            // Set values
            _setProgress(progress, value);
        }

        // Set <progress> value
        function _setProgress(progress, value) {
            if (!plyr.supported.full) {
                return;
            }

            // Default to 0
            if (_is.undefined(value)) {
                value = 0;
            }
            // Default to buffer or bail
            if (_is.undefined(progress)) {
                if (plyr.progress && plyr.progress.buffer) {
                    progress = plyr.progress.buffer;
                } else {
                    return;
                }
            }

            // One progress element passed
            if (_is.htmlElement(progress)) {
                progress.value = value;
            } else if (progress) {
                // Object of progress + text element
                if (progress.bar) {
                    progress.bar.value = value;
                }
                if (progress.text) {
                    progress.text.innerHTML = value;
                }
            }
        }

        // Update the displayed time
        function _updateTimeDisplay(time, element) {
            // Bail if there's no duration display
            if (!element) {
                return;
            }

            // Fallback to 0
            if (isNaN(time)) {
                time = 0;
            }

            plyr.secs = parseInt(time % 60);
            plyr.mins = parseInt((time / 60) % 60);
            plyr.hours = parseInt((time / 60 / 60) % 60);

            // Do we need to display hours?
            var displayHours = parseInt((_getDuration() / 60 / 60) % 60) > 0;

            // Ensure it's two digits. For example, 03 rather than 3.
            plyr.secs = ("0" + plyr.secs).slice(-2);
            plyr.mins = ("0" + plyr.mins).slice(-2);

            // Render
            element.innerHTML = (displayHours ? plyr.hours + ":" : "") + plyr.mins + ":" + plyr.secs;
        }

        // Show the duration on metadataloaded
        function _displayDuration() {
            if (!plyr.supported.full) {
                return;
            }

            // Determine duration
            var duration = _getDuration() || 0;

            // If there's only one time display, display duration there
            if (!plyr.duration && config.displayDuration && plyr.media.paused) {
                _updateTimeDisplay(duration, plyr.currentTime);
            }

            // If there's a duration element, update content
            if (plyr.duration) {
                _updateTimeDisplay(duration, plyr.duration);
            }

            // Update the tooltip (if visible)
            _updateSeekTooltip();
        }

        // Handle time change event
        function _timeUpdate(event) {
            // Duration
            _updateTimeDisplay(plyr.media.currentTime, plyr.currentTime);

            // Ignore updates while seeking
            if (event && event.type === "timeupdate" && plyr.media.seeking) {
                return;
            }

            // Playing progress
            _updateProgress(event);
        }

        // Update seek range and progress
        function _updateSeekDisplay(time) {
            // Default to 0
            if (!_is.number(time)) {
                time = 0;
            }

            var duration = _getDuration(),
                value = _getPercentage(time, duration);

            // Update progress
            if (plyr.progress && plyr.progress.played) {
                plyr.progress.played.value = value;
            }

            // Update seek range input
            if (plyr.buttons && plyr.buttons.seek) {
                plyr.buttons.seek.value = value;
            }
        }

        // Update hover tooltip for seeking
        function _updateSeekTooltip(event) {
            var duration = _getDuration();

            // Bail if setting not true
            if (!config.tooltips.seek || !plyr.progress.container || duration === 0) {
                return;
            }

            // Calculate percentage
            var clientRect = plyr.progress.container.getBoundingClientRect(),
                percent = 0,
                visible = config.classes.tooltip + "--visible";

            // Determine percentage, if already visible
            if (!event) {
                if (_hasClass(plyr.progress.tooltip, visible)) {
                    percent = plyr.progress.tooltip.style.left.replace("%", "");
                } else {
                    return;
                }
            } else {
                percent = 100 / clientRect.width * (event.pageX - clientRect.left);
            }

            // Set bounds
            if (percent < 0) {
                percent = 0;
            } else if (percent > 100) {
                percent = 100;
            }

            // Display the time a click would seek to
            _updateTimeDisplay(duration / 100 * percent, plyr.progress.tooltip);

            // Set position
            plyr.progress.tooltip.style.left = percent + "%";

            // Show/hide the tooltip
            // If the event is a moues in/out and percentage is inside bounds
            if (event && _inArray(["mouseenter", "mouseleave"], event.type)) {
                _toggleClass(plyr.progress.tooltip, visible, event.type === "mouseenter");
            }
        }

        // Show the player controls in fullscreen mode
        function _toggleControls(toggle) {
            // Don't hide if config says not to, it's audio, or not ready or loading
            if (!config.hideControls || plyr.type === "audio") {
                return;
            }

            var delay = 0,
                isEnterFullscreen = false,
                show = toggle,
                loading = _hasClass(plyr.container, config.classes.loading);

            // Default to false if no boolean
            if (!_is.boolean(toggle)) {
                if (toggle && toggle.type) {
                    // Is the enter fullscreen event
                    isEnterFullscreen = toggle.type === "enterfullscreen";

                    // Whether to show controls
                    show = _inArray(["mousemove", "touchstart", "mouseenter", "focus"], toggle.type);

                    // Delay hiding on move events
                    if (_inArray(["mousemove", "touchmove"], toggle.type)) {
                        delay = 2000;
                    }

                    // Delay a little more for keyboard users
                    if (toggle.type === "focus") {
                        delay = 3000;
                    }
                } else {
                    show = _hasClass(plyr.container, config.classes.hideControls);
                }
            }

            // Clear timer every movement
            window.clearTimeout(timers.hover);

            // If the mouse is not over the controls, set a timeout to hide them
            if (show || plyr.media.paused || loading) {
                _toggleClass(plyr.container, config.classes.hideControls, false);

                // Always show controls when paused or if touch
                if (plyr.media.paused || loading) {
                    return;
                }

                // Delay for hiding on touch
                if (plyr.browser.isTouch) {
                    delay = 3000;
                }
            }

            // If toggle is false or if we're playing (regardless of toggle),
            // then set the timer to hide the controls
            if (!show || !plyr.media.paused) {
                timers.hover = window.setTimeout(function() {
                    // If the mouse is over the controls (and not entering fullscreen), bail
                    if ((plyr.controls.pressed || plyr.controls.hover) && !isEnterFullscreen) {
                        return;
                    }

                    _toggleClass(plyr.container, config.classes.hideControls, true);
                }, delay);
            }
        }

        // Add common function to retrieve media source
        function _source(source) {
            // If not null or undefined, parse it
            if (!_is.undefined(source)) {
                _updateSource(source);
                return;
            }

            // Return the current source
            var url;
            switch (plyr.type) {
                case "youtube":
                    url = plyr.embed.getVideoUrl();
                    break;

                case "vimeo":
                    plyr.embed.getVideoUrl.then(function(value) {
                        url = value;
                    });
                    break;

                case "soundcloud":
                    plyr.embed.getCurrentSound(function(object) {
                        url = object.permalink_url;
                    });
                    break;

                default:
                    url = plyr.media.currentSrc;
                    break;
            }

            return url || "";
        }

        // Update source
        // Sources are not checked for support so be careful
        function _updateSource(source) {
            if (!_is.object(source) || !("sources" in source) || !source.sources.length) {
                _warn("Invalid source format");
                return;
            }

            // Remove ready class hook
            _toggleClass(plyr.container, config.classes.ready, false);

            // Pause playback
            _pause();

            // Update seek range and progress
            _updateSeekDisplay();

            // Reset buffer progress
            _setProgress();

            // Cancel current network requests
            _cancelRequests();

            // Setup new source
            function setup() {
                // Remove embed object
                plyr.embed = null;

                // Remove the old media
                _remove(plyr.media);

                // Remove video container
                if (plyr.type === "video" && plyr.videoContainer) {
                    _remove(plyr.videoContainer);
                }

                // Reset class name
                if (plyr.container) {
                    plyr.container.removeAttribute("class");
                }

                // Set the type
                if ("type" in source) {
                    plyr.type = source.type;

                    // Get child type for video (it might be an embed)
                    if (plyr.type === "video") {
                        var firstSource = source.sources[0];

                        if ("type" in firstSource && _inArray(config.types.embed, firstSource.type)) {
                            plyr.type = firstSource.type;
                        }
                    }
                }

                // Check for support
                plyr.supported = supported(plyr.type);

                // Create new markup
                switch (plyr.type) {
                    case "video":
                        plyr.media = document.createElement("video");
                        break;

                    case "audio":
                        plyr.media = document.createElement("audio");
                        break;

                    case "youtube":
                    case "vimeo":
                    case "soundcloud":
                        plyr.media = document.createElement("div");
                        plyr.embedId = source.sources[0].src;
                        break;
                }

                // Inject the new element
                _prependChild(plyr.container, plyr.media);

                // Autoplay the new source?
                if (_is.boolean(source.autoplay)) {
                    config.autoplay = source.autoplay;
                }

                // Set attributes for audio and video
                if (_inArray(config.types.html5, plyr.type)) {
                    if (config.crossorigin) {
                        plyr.media.setAttribute("crossorigin", "");
                    }
                    if (config.autoplay) {
                        plyr.media.setAttribute("autoplay", "");
                    }
                    if ("poster" in source) {
                        plyr.media.setAttribute("poster", source.poster);
                    }
                    if (config.loop) {
                        plyr.media.setAttribute("loop", "");
                    }
                }

                // Restore class hooks
                _toggleClass(plyr.container, config.classes.fullscreen.active, plyr.isFullscreen);
                _toggleClass(plyr.container, config.classes.captions.active, plyr.captionsEnabled);
                _toggleStyleHook();

                // Set new sources for html5
                if (_inArray(config.types.html5, plyr.type)) {
                    _insertChildElements("source", source.sources);
                }

                // Set up from scratch
                _setupMedia();

                // HTML5 stuff
                if (_inArray(config.types.html5, plyr.type)) {
                    // Setup captions
                    if ("tracks" in source) {
                        _insertChildElements("track", source.tracks);
                    }

                    // Load HTML5 sources
                    plyr.media.load();
                }

                // If HTML5 or embed but not fully supported, setupInterface and call ready now
                if (
                    _inArray(config.types.html5, plyr.type) ||
                    (_inArray(config.types.embed, plyr.type) && !plyr.supported.full)
                ) {
                    // Setup interface
                    _setupInterface();

                    // Call ready
                    _ready();
                }

                // Set aria title and iframe title
                config.title = source.title;
                _setTitle();
            }

            // Destroy instance adn wait for callback
            // Vimeo throws a wobbly if you don't wait
            _destroy(setup, false);
        }

        // Update poster
        function _updatePoster(source) {
            if (plyr.type === "video") {
                plyr.media.setAttribute("poster", source);
            }
        }

        // Listen for control events
        function _controlListeners() {
            // IE doesn't support input event, so we fallback to change
            var inputEvent = plyr.browser.isIE ? "change" : "input";

            // Click play/pause helper
            function togglePlay() {
                var play = _togglePlay();

                // Determine which buttons
                var trigger = plyr.buttons[play ? "play" : "pause"],
                    target = plyr.buttons[play ? "pause" : "play"];

                // Get the last play button to account for the large play button
                if (target && target.length > 1) {
                    target = target[target.length - 1];
                } else {
                    target = target[0];
                }

                // Setup focus and tab focus
                if (target) {
                    var hadTabFocus = _hasClass(trigger, config.classes.tabFocus);

                    setTimeout(function() {
                        target.focus();

                        if (hadTabFocus) {
                            _toggleClass(trigger, config.classes.tabFocus, false);
                            _toggleClass(target, config.classes.tabFocus, true);
                        }
                    }, 100);
                }
            }

            // Get the focused element
            function getFocusElement() {
                var focused = document.activeElement;

                if (!focused || focused === document.body) {
                    focused = null;
                } else {
                    focused = document.querySelector(":focus");
                }

                return focused;
            }

            // Get the key code for an event
            function getKeyCode(event) {
                return event.keyCode ? event.keyCode : event.which;
            }

            // Detect tab focus
            function checkTabFocus(focused) {
                for (var button in plyr.buttons) {
                    var element = plyr.buttons[button];

                    if (_is.nodeList(element)) {
                        for (var i = 0; i < element.length; i++) {
                            _toggleClass(element[i], config.classes.tabFocus, element[i] === focused);
                        }
                    } else {
                        _toggleClass(element, config.classes.tabFocus, element === focused);
                    }
                }
            }

            // Keyboard shortcuts
            if (config.keyboardShorcuts.focused) {
                var last = null;

                // Handle global presses
                if (config.keyboardShorcuts.global) {
                    _on(window, "keydown keyup", function(event) {
                        var code = getKeyCode(event),
                            focused = getFocusElement(),
                            allowed = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67],
                            count = get().length;

                        // Only handle global key press if there's only one player
                        // and the key is in the allowed keys
                        // and if the focused element is not editable (e.g. text input)
                        // and any that accept key input http://webaim.org/techniques/keyboard/
                        if (
                            count === 1 &&
                            _inArray(allowed, code) &&
                            (!_is.htmlElement(focused) || !_matches(focused, config.selectors.editable))
                        ) {
                            handleKey(event);
                        }
                    });
                }

                // Handle presses on focused
                _on(plyr.container, "keydown keyup", handleKey);
            }

            function handleKey(event) {
                var code = getKeyCode(event),
                    pressed = event.type === "keydown",
                    held = pressed && code === last;

                // If the event is bubbled from the media element
                // Firefox doesn't get the keycode for whatever reason
                if (!_is.number(code)) {
                    return;
                }

                // Seek by the number keys
                function seekByKey() {
                    // Get current duration
                    var duration = plyr.media.duration;

                    // Bail if we have no duration set
                    if (!_is.number(duration)) {
                        return;
                    }

                    // Divide the max duration into 10th's and times by the number value
                    _seek(duration / 10 * (code - 48));
                }

                // Handle the key on keydown
                // Reset on keyup
                if (pressed) {
                    // Which keycodes should we prevent default
                    var preventDefault = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];

                    // If the code is found prevent default (e.g. prevent scrolling for arrows)
                    if (_inArray(preventDefault, code)) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    switch (code) {
                        // 0-9
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            if (!held) {
                                seekByKey();
                            }
                            break;
                        // Space and K key
                        case 32:
                        case 75:
                            if (!held) {
                                _togglePlay();
                            }
                            break;
                        // Arrow up
                        case 38:
                            _increaseVolume();
                            break;
                        // Arrow down
                        case 40:
                            _decreaseVolume();
                            break;
                        // M key
                        case 77:
                            if (!held) {
                                _toggleMute();
                            }
                            break;
                        // Arrow forward
                        case 39:
                            _forward();
                            break;
                        // Arrow back
                        case 37:
                            _rewind();
                            break;
                        // F key
                        case 70:
                            _toggleFullscreen();
                            break;
                        // C key
                        case 67:
                            if (!held) {
                                _toggleCaptions();
                            }
                            break;
                    }

                    // Escape is handle natively when in full screen
                    // So we only need to worry about non native
                    if (!fullscreen.supportsFullScreen && plyr.isFullscreen && code === 27) {
                        _toggleFullscreen();
                    }

                    // Store last code for next cycle
                    last = code;
                } else {
                    last = null;
                }
            }

            // Focus/tab management
            _on(window, "keyup", function(event) {
                var code = getKeyCode(event),
                    focused = getFocusElement();

                if (code === 9) {
                    checkTabFocus(focused);
                }
            });
            _on(document.body, "click", function() {
                _toggleClass(_getElement("." + config.classes.tabFocus), config.classes.tabFocus, false);
            });
            for (var button in plyr.buttons) {
                var element = plyr.buttons[button];

                _on(element, "blur", function() {
                    _toggleClass(element, "tab-focus", false);
                });
            }

            // Play
            _proxyListener(plyr.buttons.play, "click", config.listeners.play, togglePlay);

            // Pause
            _proxyListener(plyr.buttons.pause, "click", config.listeners.pause, togglePlay);

            // Restart
            _proxyListener(plyr.buttons.restart, "click", config.listeners.restart, _seek);

            // Rewind
            _proxyListener(plyr.buttons.rewind, "click", config.listeners.rewind, _rewind);

            // Fast forward
            _proxyListener(plyr.buttons.forward, "click", config.listeners.forward, _forward);

            // Seek
            _proxyListener(plyr.buttons.seek, inputEvent, config.listeners.seek, _seek);

            // Set volume
            _proxyListener(plyr.volume.input, inputEvent, config.listeners.volume, function() {
                _setVolume(plyr.volume.input.value);
            });

            // Mute
            _proxyListener(plyr.buttons.mute, "click", config.listeners.mute, _toggleMute);

            // Fullscreen
            _proxyListener(plyr.buttons.fullscreen, "click", config.listeners.fullscreen, _toggleFullscreen);

            // Handle user exiting fullscreen by escaping etc
            if (fullscreen.supportsFullScreen) {
                _on(document, fullscreen.fullScreenEventName, _toggleFullscreen);
            }

            // Captions
            _proxyListener(plyr.buttons.captions, "click", config.listeners.captions, _toggleCaptions);

            // Seek tooltip
            _on(plyr.progress.container, "mouseenter mouseleave mousemove", _updateSeekTooltip);

            // Toggle controls visibility based on mouse movement
            if (config.hideControls) {
                // Toggle controls on mouse events and entering fullscreen
                _on(
                    plyr.container,
                    "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen",
                    _toggleControls
                );

                // Watch for cursor over controls so they don't hide when trying to interact
                _on(plyr.controls, "mouseenter mouseleave", function(event) {
                    plyr.controls.hover = event.type === "mouseenter";
                });

                // Watch for cursor over controls so they don't hide when trying to interact
                _on(plyr.controls, "mousedown mouseup touchstart touchend touchcancel", function(event) {
                    plyr.controls.pressed = _inArray(["mousedown", "touchstart"], event.type);
                });

                // Focus in/out on controls
                _on(plyr.controls, "focus blur", _toggleControls, true);
            }

            // Adjust volume on scroll
            _on(plyr.volume.input, "wheel", function(event) {
                event.preventDefault();

                // Detect "natural" scroll - suppored on OS X Safari only
                // Other browsers on OS X will be inverted until support improves
                var inverted = event.webkitDirectionInvertedFromDevice,
                    step = config.volumeStep / 5;

                // Scroll down (or up on natural) to decrease
                if (event.deltaY < 0 || event.deltaX > 0) {
                    if (inverted) {
                        _decreaseVolume(step);
                    } else {
                        _increaseVolume(step);
                    }
                }

                // Scroll up (or down on natural) to increase
                if (event.deltaY > 0 || event.deltaX < 0) {
                    if (inverted) {
                        _increaseVolume(step);
                    } else {
                        _decreaseVolume(step);
                    }
                }
            });
        }

        // Listen for media events
        function _mediaListeners() {
            // Time change on media
            _on(plyr.media, "timeupdate seeking", _timeUpdate);

            // Update manual captions
            _on(plyr.media, "timeupdate", _seekManualCaptions);

            // Display duration
            _on(plyr.media, "durationchange loadedmetadata", _displayDuration);

            // Handle the media finishing
            _on(plyr.media, "ended", function() {
                // Show poster on end
                if (plyr.type === "video" && config.showPosterOnEnd) {
                    // Clear
                    if (plyr.type === "video") {
                        _setCaption();
                    }

                    // Restart
                    _seek();

                    // Re-load media
                    plyr.media.load();
                }
            });

            // Check for buffer progress
            _on(plyr.media, "progress playing", _updateProgress);

            // Handle native mute
            _on(plyr.media, "volumechange", _updateVolume);

            // Handle native play/pause
            _on(plyr.media, "play pause ended", _checkPlaying);

            // Loading
            _on(plyr.media, "waiting canplay seeked", _checkLoading);

            // Click video
            if (config.clickToPlay && plyr.type !== "audio") {
                // Re-fetch the wrapper
                var wrapper = _getElement("." + config.classes.videoWrapper);

                // Bail if there's no wrapper (this should never happen)
                if (!wrapper) {
                    return;
                }

                // Set cursor
                wrapper.style.cursor = "pointer";

                // On click play, pause ore restart
                _on(wrapper, "click", function() {
                    // Touch devices will just show controls (if we're hiding controls)
                    if (config.hideControls && plyr.browser.isTouch && !plyr.media.paused) {
                        return;
                    }

                    if (plyr.media.paused) {
                        _play();
                    } else if (plyr.media.ended) {
                        _seek();
                        _play();
                    } else {
                        _pause();
                    }
                });
            }

            // Disable right click
            if (config.disableContextMenu) {
                _on(plyr.media, "contextmenu", function(event) {
                    event.preventDefault();
                });
            }

            // Proxy events to container
            // Bubble up key events for Edge
            _on(plyr.media, config.events.concat(["keyup", "keydown"]).join(" "), function(event) {
                _triggerEvent(plyr.container, event.type, true);
            });
        }

        // Cancel current network requests
        // See https://github.com/sampotts/plyr/issues/174
        function _cancelRequests() {
            if (!_inArray(config.types.html5, plyr.type)) {
                return;
            }

            // Remove child sources
            var sources = plyr.media.querySelectorAll("source");
            for (var i = 0; i < sources.length; i++) {
                _remove(sources[i]);
            }

            // Set blank video src attribute
            // This is to prevent a MEDIA_ERR_SRC_NOT_SUPPORTED error
            // Info: http://stackoverflow.com/questions/32231579/how-to-properly-dispose-of-an-html5-video-and-close-socket-or-connection
            plyr.media.setAttribute("src", config.blankUrl);

            // Load the new empty source
            // This will cancel existing requests
            // See https://github.com/sampotts/plyr/issues/174
            plyr.media.load();

            // Debugging
            _log("Cancelled network requests");
        }

        // Destroy an instance
        // Event listeners are removed when elements are removed
        // http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
        function _destroy(callback, restore) {
            // Bail if the element is not initialized
            if (!plyr.init) {
                return null;
            }

            // Type specific stuff
            switch (plyr.type) {
                case "youtube":
                    // Clear timers
                    window.clearInterval(timers.buffering);
                    window.clearInterval(timers.playing);

                    // Destroy YouTube API
                    plyr.embed.destroy();

                    // Clean up
                    cleanUp();

                    break;

                case "vimeo":
                    // Destroy Vimeo API
                    // then clean up (wait, to prevent postmessage errors)
                    plyr.embed.unload().then(cleanUp);

                    // Vimeo does not always return
                    timers.cleanUp = window.setTimeout(cleanUp, 200);

                    break;

                case "video":
                case "audio":
                    // Restore native video controls
                    _toggleNativeControls(true);

                    // Clean up
                    cleanUp();

                    break;
            }

            function cleanUp() {
                clearTimeout(timers.cleanUp);

                // Default to restore original element
                if (!_is.boolean(restore)) {
                    restore = true;
                }

                // Callback
                if (_is.function(callback)) {
                    callback.call(original);
                }

                // Bail if we don't need to restore the original element
                if (!restore) {
                    return;
                }

                // Remove init flag
                plyr.init = false;

                // Replace the container with the original element provided
                plyr.container.parentNode.replaceChild(original, plyr.container);

                // Allow overflow (set on fullscreen)
                document.body.style.overflow = "";

                // Event
                _triggerEvent(original, "destroyed", true);
            }
        }

        // Setup a player
        function _init() {
            // Bail if the element is initialized
            if (plyr.init) {
                return null;
            }

            // Setup the fullscreen api
            fullscreen = _fullscreen();

            // Sniff out the browser
            plyr.browser = _browserSniff();

            // Bail if nothing to setup
            if (!_is.htmlElement(plyr.media)) {
                return;
            }

            // Load saved settings from localStorage
            _setupStorage();

            // Set media type based on tag or data attribute
            // Supported: video, audio, vimeo, youtube
            var tagName = media.tagName.toLowerCase();
            if (tagName === "div") {
                plyr.type = media.getAttribute("data-type");
                plyr.embedId = media.getAttribute("data-video-id");

                // Clean up
                media.removeAttribute("data-type");
                media.removeAttribute("data-video-id");
            } else {
                plyr.type = tagName;
                config.crossorigin = media.getAttribute("crossorigin") !== null;
                config.autoplay = config.autoplay || media.getAttribute("autoplay") !== null;
                config.loop = config.loop || media.getAttribute("loop") !== null;
            }

            // Check for support
            plyr.supported = supported(plyr.type);

            // If no native support, bail
            if (!plyr.supported.basic) {
                return;
            }

            // Wrap media
            plyr.container = _wrap(media, document.createElement("div"));

            // Allow focus to be captured
            plyr.container.setAttribute("tabindex", 0);

            // Add style hook
            _toggleStyleHook();

            // Debug info
            _log("" + plyr.browser.name + " " + plyr.browser.version);

            // Setup media
            _setupMedia();

            // Setup interface
            // If embed but not fully supported, setupInterface (to avoid flash of controls) and call ready now
            if (
                _inArray(config.types.html5, plyr.type) ||
                (_inArray(config.types.embed, plyr.type) && !plyr.supported.full)
            ) {
                // Setup UI
                _setupInterface();

                // Call ready
                _ready();

                // Set title on button and frame
                _setTitle();
            }

            // Successful setup
            plyr.init = true;
        }

        // Setup the UI
        function _setupInterface() {
            // Don't setup interface if no support
            if (!plyr.supported.full) {
                _warn("Basic support only", plyr.type);

                // Remove controls
                _remove(_getElement(config.selectors.controls.wrapper));

                // Remove large play
                _remove(_getElement(config.selectors.buttons.play));

                // Restore native controls
                _toggleNativeControls(true);

                // Bail
                return;
            }

            // Inject custom controls if not present
            var controlsMissing = !_getElements(config.selectors.controls.wrapper).length;
            if (controlsMissing) {
                // Inject custom controls
                _injectControls();
            }

            // Find the elements
            if (!_findElements()) {
                return;
            }

            // If the controls are injected, re-bind listeners for controls
            if (controlsMissing) {
                _controlListeners();
            }

            // Media element listeners
            _mediaListeners();

            // Remove native controls
            _toggleNativeControls();

            // Setup fullscreen
            _setupFullscreen();

            // Captions
            _setupCaptions();

            // Set volume
            _setVolume();
            _updateVolume();

            // Reset time display
            _timeUpdate();

            // Update the UI
            _checkPlaying();
        }

        api = {
            getOriginal: function() {
                return original;
            },
            getContainer: function() {
                return plyr.container;
            },
            getEmbed: function() {
                return plyr.embed;
            },
            getMedia: function() {
                return plyr.media;
            },
            getType: function() {
                return plyr.type;
            },
            getDuration: _getDuration,
            getCurrentTime: function() {
                return plyr.media.currentTime;
            },
            getVolume: function() {
                return plyr.media.volume;
            },
            isMuted: function() {
                return plyr.media.muted;
            },
            isReady: function() {
                return _hasClass(plyr.container, config.classes.ready);
            },
            isLoading: function() {
                return _hasClass(plyr.container, config.classes.loading);
            },
            isPaused: function() {
                return plyr.media.paused;
            },
            on: function(event, callback) {
                _on(plyr.container, event, callback);
                return this;
            },
            play: _play,
            pause: _pause,
            stop: function() {
                _pause();
                _seek();
            },
            restart: _seek,
            rewind: _rewind,
            forward: _forward,
            seek: _seek,
            source: _source,
            poster: _updatePoster,
            setVolume: _setVolume,
            togglePlay: _togglePlay,
            toggleMute: _toggleMute,
            toggleCaptions: _toggleCaptions,
            toggleFullscreen: _toggleFullscreen,
            toggleControls: _toggleControls,
            isFullscreen: function() {
                return plyr.isFullscreen || false;
            },
            support: function(mimeType) {
                return _supportMime(plyr, mimeType);
            },
            destroy: _destroy
        };

        // Everything done
        function _ready() {
            // Ready event at end of execution stack
            window.setTimeout(function() {
                _triggerEvent(plyr.media, "ready");
            }, 0);

            // Set class hook on media element
            _toggleClass(plyr.media, defaults.classes.setup, true);

            // Set container class for ready
            _toggleClass(plyr.container, config.classes.ready, true);

            // Store a refernce to instance
            plyr.media.plyr = api;

            // Autoplay
            if (config.autoplay) {
                _play();
            }
        }

        // Initialize instance
        _init();

        // If init failed, return null
        if (!plyr.init) {
            return null;
        }

        return api;
    }

    // Load a sprite
    function loadSprite(url, id) {
        var x = new XMLHttpRequest();

        // If the id is set and sprite exists, bail
        if (_is.string(id) && _is.htmlElement(document.querySelector("#" + id))) {
            return;
        }

        // Create placeholder (to prevent loading twice)
        var container = document.createElement("div");
        container.setAttribute("hidden", "");
        if (_is.string(id)) {
            container.setAttribute("id", id);
        }
        document.body.insertBefore(container, document.body.childNodes[0]);

        // Check for CORS support
        if ("withCredentials" in x) {
            x.open("GET", url, true);
        } else {
            return;
        }

        // Inject hidden div with sprite on load
        x.onload = function() {
            container.innerHTML = x.responseText;
        };

        x.send();
    }

    // Check for support
    function supported(type) {
        var browser = _browserSniff(),
            isOldIE = browser.isIE && browser.version <= 9,
            isIos = browser.isIos,
            isIphone = browser.isIphone,
            audioSupport = !!document.createElement("audio").canPlayType,
            videoSupport = !!document.createElement("video").canPlayType,
            basic = false,
            full = false;

        switch (type) {
            case "video":
                basic = videoSupport;
                full = basic && (!isOldIE && !isIphone);
                break;

            case "audio":
                basic = audioSupport;
                full = basic && !isOldIE;
                break;

            // Vimeo does not seem to be supported on iOS via API
            // Issue raised https://github.com/vimeo/player.js/issues/87
            case "vimeo":
                basic = true;
                full = !isOldIE && !isIos;
                break;

            case "youtube":
                basic = true;
                full = !isOldIE && !isIos;

                // YouTube seems to work on iOS 10+ on iPad
                if (isIos && !isIphone && browser.version >= 10) {
                    full = true;
                }

                break;

            case "soundcloud":
                basic = true;
                full = !isOldIE && !isIphone;
                break;

            default:
                basic = audioSupport && videoSupport;
                full = basic && !isOldIE;
        }

        return {
            basic: basic,
            full: full
        };
    }

    // Setup function
    function setup(targets, options) {
        // Get the players
        var players = [],
            instances = [],
            selector = [defaults.selectors.html5, defaults.selectors.embed].join(",");

        // Select the elements
        if (_is.string(targets)) {
            // String selector passed
            targets = document.querySelectorAll(targets);
        } else if (_is.htmlElement(targets)) {
            // Single HTMLElement passed
            targets = [targets];
        } else if (!_is.nodeList(targets) && !_is.array(targets) && !_is.string(targets)) {
            // No selector passed, possibly options as first argument
            // If options are the first argument
            if (_is.undefined(options) && _is.object(targets)) {
                options = targets;
            }

            // Use default selector
            targets = document.querySelectorAll(selector);
        }

        // Convert NodeList to array
        if (_is.nodeList(targets)) {
            targets = Array.prototype.slice.call(targets);
        }

        // Bail if disabled or no basic support
        // You may want to disable certain UAs etc
        if (!supported().basic || !targets.length) {
            return false;
        }

        // Add to container list
        function add(target, media) {
            if (!_hasClass(media, defaults.classes.hook)) {
                players.push({
                    // Always wrap in a <div> for styling
                    //container:  _wrap(media, document.createElement('div')),
                    // Could be a container or the media itself
                    target: target,
                    // This should be the <video>, <audio> or <div> (YouTube/Vimeo)
                    media: media
                });
            }
        }

        // Check if the targets have multiple media elements
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];

            // Get children
            var children = target.querySelectorAll(selector);

            // If there's more than one media element child, wrap them
            if (children.length) {
                for (var x = 0; x < children.length; x++) {
                    add(target, children[x]);
                }
            } else if (_matches(target, selector)) {
                // Target is media element
                add(target, target);
            }
        }

        // Create a player instance for each element
        players.forEach(function(player) {
            var element = player.target,
                media = player.media,
                match = false;

            // The target element can also be the media element
            if (media === element) {
                match = true;
            }

            // Setup a player instance and add to the element
            // Create instance-specific config
            var data = {};

            // Try parsing data attribute config
            try {
                data = JSON.parse(element.getAttribute("data-plyr"));
            } catch (e) {}

            var config = _extend({}, defaults, options, data);

            // Bail if not enabled
            if (!config.enabled) {
                return null;
            }

            // Create new instance
            var instance = new Plyr(media, config);

            // Go to next if setup failed
            if (!_is.object(instance)) {
                return;
            }

            // Listen for events if debugging
            if (config.debug) {
                var events = config.events.concat([
                    "setup",
                    "statechange",
                    "enterfullscreen",
                    "exitfullscreen",
                    "captionsenabled",
                    "captionsdisabled"
                ]);

                _on(instance.getContainer(), events.join(" "), function(event) {
                    console.log([config.logPrefix, "event:", event.type].join(" "), event.detail.plyr);
                });
            }

            // Callback
            _event(instance.getContainer(), "setup", true, {
                plyr: instance
            });

            // Add to return array even if it's already setup
            instances.push(instance);
        });

        return instances;
    }

    // Get all instances within a provided container
    function get(container) {
        if (_is.string(container)) {
            // Get selector if string passed
            container = document.querySelector(container);
        } else if (_is.undefined(container)) {
            // Use body by default to get all on page
            container = document.body;
        }

        // If we have a HTML element
        if (_is.htmlElement(container)) {
            var elements = container.querySelectorAll("." + defaults.classes.setup),
                instances = [];

            Array.prototype.slice.call(elements).forEach(function(element) {
                if (_is.object(element.plyr)) {
                    instances.push(element.plyr);
                }
            });

            return instances;
        }

        return [];
    }

    return {
        setup: setup,
        supported: supported,
        loadSprite: loadSprite,
        get: get
    };
});

// Custom event polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
(function() {
    if (typeof window.CustomEvent === "function") {
        return;
    }

    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();


/***/ }),

/***/ "./node_modules/plyr/dist/plyr.css":
/*!*****************************************!*\
  !*** ./node_modules/plyr/dist/plyr.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_plyr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./plyr.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/plyr/dist/plyr.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_plyr_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_plyr_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/assets/js/users/views/default/control/collection/new.vue":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/collection/new.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_vue_vue_type_template_id_e271c66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.vue?vue&type=template&id=e271c66e& */ "./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=template&id=e271c66e&");
/* harmony import */ var _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_vue_vue_type_template_id_e271c66e___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_vue_vue_type_template_id_e271c66e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/collection/new.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/movie/show.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/movie/show.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=template&id=e271c66e&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=template&id=e271c66e& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_e271c66e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_e271c66e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_template_id_e271c66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new.vue?vue&type=template&id=e271c66e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=template&id=e271c66e&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=template&id=35af9539&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=template&id=e271c66e&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/collection/new.vue?vue&type=template&id=e271c66e& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _vm.show
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showBoxAnimation,
                    expression: "showBoxAnimation"
                  }
                ],
                staticClass:
                  "col-12 col-sm-6 col-md-8 col-lg-5 col-xl-4 collection-box"
              },
              [
                _c("div", { staticClass: "collection-content p-md-0 p-lg-0" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "exit-icon", on: { click: _vm.CANCEL } },
                      [
                        _c("img", {
                          attrs: {
                            src: "/themes/default/img/exit-icon.svg",
                            alt: "exit icon"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 image" }, [
                      _c("img", {
                        attrs: { src: _vm.poster, alt: _vm.name, width: "100%" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "gradient" }),
                      _vm._v(" "),
                      _c("h3", { staticClass: "title" }, [
                        _c("strong", [_vm._v(_vm._s(_vm.name))])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 control" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _vm.collections.length > 0
                          ? _c(
                              "div",
                              { staticClass: "collection-list" },
                              [
                                _c(
                                  "label",
                                  { staticClass: "text-muted ml-1" },
                                  [_vm._v("My Collection")]
                                ),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _vm._l(_vm.collections, function(item, index) {
                                  return _c(
                                    "button",
                                    {
                                      key: index,
                                      staticClass:
                                        "btn btn-outline-secondary ml-1",
                                      class: {
                                        active:
                                          _vm.already_collection === item.id
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.already_collection = item.id
                                        }
                                      }
                                    },
                                    [_vm._v(_vm._s(item.name) + " ")]
                                  )
                                })
                              ],
                              2
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12 mt-4" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.new_collection,
                              expression: "new_collection"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "New Collection"
                          },
                          domProps: { value: _vm.new_collection },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.new_collection = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.message))
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "footer col-12 mb-3 mt-2 mt-sm-4 mt-md-4cancel-save"
                        },
                        [
                          !_vm.disable_button
                            ? _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-outline-secondary ml-1 ",
                                  attrs: { type: "button", disabled: "" }
                                },
                                [_vm._v("Save")]
                              )
                            : _c(
                                "button",
                                {
                                  staticClass: "btn btn-outline-secondary ml-1",
                                  attrs: { type: "button" },
                                  on: { click: _vm.SAVE }
                                },
                                [_vm._v("Save")]
                              )
                        ]
                      )
                    ])
                  ])
                ])
              ]
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/movie/show.vue?vue&type=template&id=015819d4& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
                          name: _vm.$auth.isAuthenticated()
                            ? "movie-player"
                            : _vm.data.movie.users_only
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
                                      name: _vm.$auth.isAuthenticated()
                                        ? "movie-player"
                                        : _vm.data.movie.users_only
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
                                      name: _vm.$auth.isAuthenticated()
                                        ? "movie-player"
                                        : _vm.data.movie.users_only
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