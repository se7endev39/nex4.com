"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_series_new-series-episode_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: "",
      video_link: [],
      embed: "",
      embedCodeList: [],
      presets: [{
        Name: "HLS - 16000Kilorate - 4K",
        Resolution: "4k",
        Container: "ts"
      }, {
        Name: "HLS - 4000Kilorate - 1080P",
        Resolution: "1080",
        Container: "ts"
      }, {
        Name: "HLS - 2500Kilorate - 720P",
        Resolution: "720",
        Container: "ts"
      }, {
        Name: "HLS - 700Kilorate - 480P",
        Resolution: "480",
        Container: "ts"
      }, {
        Name: "HLS - 400Kilorate - 320P",
        Resolution: "320",
        Container: "ts"
      }, {
        Name: "Generic - 4K",
        Resolution: "4k",
        Container: "mp4"
      }, {
        Name: "Generic - 1080P",
        Resolution: "1080",
        Container: "mp4"
      }, {
        Name: "Generic - 720P",
        Resolution: "720",
        Container: "mp4"
      }, {
        Name: "Generic - 480P",
        Resolution: "480",
        Container: "mp4"
      }, {
        Name: "Generic - 320P",
        Resolution: "320",
        Container: "mp4"
      }],
      new_presets: [],
      age: null,
      episode_name: "",
      season: "",
      episode: [],
      listSession: [],
      listEpiosde: [],
      upload_type_is: false,
      disabled_button: false,
      upload_data: {
        id: null,
        api: {
          show: false,
          progress: 0,
          success_message: null,
          error_message: null
        },
        upload: {
          show: false,
          progress: 0,
          success_message: null,
          error_message: null,
          message: null
        },
        subtitle: {
          progress: 0,
          success_message: null,
          error_message: null
        }
      },
      uploadFormData: new FormData(),
      apiFormData: new FormData(),
      cloud_type: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    data: function data(state) {
      return state.series.data;
    },
    data_search: function data_search(state) {
      return state.series.data_search;
    },
    button_loading: function button_loading(state) {
      return state.series.button_loading;
    },
    spinner_loading: function spinner_loading(state) {
      return state.series.spinner_loading;
    },
    countUploadData: function countUploadData(state) {
      return state.event.data_count;
    },
    uploadData: function uploadData(state) {
      return state.event.upload_data;
    },
    ListProduction: function ListProduction(state) {
      return state.productions.ListProduction;
    }
  }),
  created: function created() {
    this.$store.dispatch("LIST_PRODUCTION");

    for (var i = 1; i < 50; i++) {
      this.listSession.push(i);
    }

    for (var i = 1; i < 2000; i++) {
      this.listEpiosde.push(i);
    }
  },
  mounted: function mounted() {
    var _this = this;

    // Listen for the 'NewBlogPost' event in the 'team.1' private channel
    Echo.channel("progress").listen("EventTrigger", function (payload) {
      if (payload.progress.progress < 2) {
        _this.$store.commit("UPDATE_PROGRESS_DATA", {
          key: _this.countUploadData,
          id: payload.progress.tmdb_id,
          parameter: "message",
          object: "upload",
          value: payload.progress.message
        });

        _this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
          key: _this.countUploadData,
          data: _this.uploadData[_this.countUploadData]
        });
      }

      _this.$store.commit("UPDATE_PROGRESS_DATA", {
        key: _this.countUploadData,
        id: payload.progress.tmdb_id,
        parameter: "progress",
        object: "upload",
        value: payload.progress.progress
      });

      _this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
        key: _this.countUploadData,
        data: _this.uploadData[_this.countUploadData]
      });
    });
  },
  methods: {
    MOVIEDB_API: function MOVIEDB_API() {
      var _this2 = this;

      this.apiFormData.append("season_number", this.season);
      this.apiFormData.append("episode_number", JSON.stringify(this.episode));
      this.apiFormData.append("series_id", this.$route.params.id); // Cloud Type

      this.apiFormData.append("cloud_type", this.cloud_type); // Check count of upload data

      this.$store.commit("COUNT_UPLOAD_PROGRESS"); // Upload video form data

      if (this.upload_type_is == "transcoding") {
        var video = document.querySelector("#video");

        for (var i = 0; i < video.files.length; i++) {
          this.uploadFormData.append("video[]", video.files[i]);
        }

        this.uploadFormData.append("resolution", JSON.stringify(this.new_presets));
      } else if (this.upload_type_is == "externalUrl") {
        if (this.video_link.length > 0) {
          this.uploadFormData.append("video_link", JSON.stringify(this.video_link));
        } else {
          this.uploadFormData.append("video_link", "empty");
        }
      } else {
        this.uploadFormData.append("embed_code", JSON.stringify(this.embedCodeList));
      } // Store data


      this.$validator.validateAll().then(function (result) {
        if (result) {
          //  this.disabled_button = true;
          _this2.upload_data.api.show = true;
          _this2.upload_data.id = _this2.$route.params.id;

          _this2.$store.commit("SET_PROGRESS_DATA", _this2.upload_data);

          _this2.$store.commit("SET_UPLOAD_PROGRESS", _this2.uploadData[_this2.countUploadData]);

          _this2.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
            key: _this2.countUploadData,
            data: _this2.uploadData[_this2.countUploadData]
          });

          axios.post("/api/admin/new/series/episode/details", _this2.apiFormData).then(function (response) {
            if (response.status === 200) {
              _this2.$store.commit("UPDATE_PROGRESS_DATA", {
                key: _this2.countUploadData,
                parameter: "success_message",
                object: "api",
                value: response.data.message
              });

              _this2.$store.commit("UPDATE_PROGRESS_DATA", {
                key: _this2.countUploadData,
                parameter: "progress",
                object: "api",
                value: 100
              });

              _this2.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
                key: _this2.countUploadData,
                data: _this2.uploadData[_this2.countUploadData]
              });

              _this2.MOVIEVIDEO_S3({
                id: response.data.id,
                series_name: response.data.series_name
              }); //                                        this.$router.back()

            }
          }, function (error) {
            _this2.disabled_button = false;

            _this2.$store.commit("UPDATE_PROGRESS_DATA", {
              key: _this2.countUploadData,
              parameter: "error_message",
              object: "api",
              value: error.response.data.message
            });

            _this2.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
              key: _this2.countUploadData,
              data: _this2.uploadData[_this2.countUploadData]
            });
          });
        }
      });
    },
    MOVIEVIDEO_S3: function MOVIEVIDEO_S3(data) {
      var _this3 = this;

      this.uploadFormData.append("id", JSON.stringify(data.id));
      this.uploadFormData.append("series_name", data.series_name);
      this.uploadFormData.append("series_id", this.$route.params.id);
      this.uploadFormData.append("tmdb_id", this.$route.params.id);
      this.upload_data.upload.show = true; // Cloud Type

      this.uploadFormData.append("cloud_type", this.cloud_type);
      this.$store.commit("UPDATE_PROGRESS_DATA", {
        key: this.countUploadData,
        parameter: "show",
        object: "upload",
        value: true
      });
      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        },
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this3.upload_data.upload.progress = Math.round(progressEvent.loaded * 100.0 / progressEvent.total);

          _this3.$store.commit("UPDATE_PROGRESS_DATA", {
            key: _this3.countUploadData,
            parameter: "progress",
            object: "upload",
            value: _this3.upload_data.upload.progress
          });

          _this3.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
            key: _this3.countUploadData,
            data: _this3.uploadData[_this3.countUploadData]
          });
        }
      }; // Store data

      axios.post("/api/admin/new/series/episode/video", this.uploadFormData, progress).then(function (response) {
        if (response.status === 200) {
          _this3.$store.commit("UPDATE_PROGRESS_DATA", {
            key: _this3.countUploadData,
            parameter: "success_message",
            object: "upload",
            value: response.data.message
          });

          _this3.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
            key: _this3.countUploadData,
            data: _this3.uploadData[_this3.countUploadData]
          });

          alertify.logPosition("top right");
          alertify.success("Successful upload");
        }
      }, function (error) {
        _this3.disabled_button = false;

        _this3.$store.commit("UPDATE_PROGRESS_DATA", {
          key: _this3.countUploadData,
          parameter: "error_message",
          object: "upload",
          value: error.response.data.message
        });

        _this3.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
          key: _this3.countUploadData,
          data: _this3.uploadData[_this3.countUploadData]
        });
      });
    },
    // Show file name and size
    infoShow: function infoShow(idFiles, idDetails) {
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
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/admin/views/series/new-series-episode.vue":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/admin/views/series/new-series-episode.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_series_episode_vue_vue_type_template_id_39fd1ca7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-series-episode.vue?vue&type=template&id=39fd1ca7& */ "./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=template&id=39fd1ca7&");
/* harmony import */ var _new_series_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-series-episode.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_series_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_series_episode_vue_vue_type_template_id_39fd1ca7___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_series_episode_vue_vue_type_template_id_39fd1ca7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/series/new-series-episode.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_series_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-series-episode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_series_episode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=template&id=39fd1ca7&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=template&id=39fd1ca7& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_series_episode_vue_vue_type_template_id_39fd1ca7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_series_episode_vue_vue_type_template_id_39fd1ca7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_series_episode_vue_vue_type_template_id_39fd1ca7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-series-episode.vue?vue&type=template&id=39fd1ca7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=template&id=39fd1ca7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=template&id=39fd1ca7&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/series/new-series-episode.vue?vue&type=template&id=39fd1ca7& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "m-2 p-3", attrs: { id: "manage-panel" } }, [
        _c("ul", { staticClass: "nav nav-tabs" }, [
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-md btn-warning",
                  attrs: {
                    role: "button",
                    to: {
                      name: "series_manage_id",
                      params: { id: this.$route.params.id }
                    }
                  }
                },
                [_vm._v("Manage\n          ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-md btn-warning ml-1",
                  attrs: {
                    role: "button",
                    to: {
                      name: "new_series_episode",
                      params: { id: this.$route.params.id }
                    }
                  }
                },
                [_vm._v("Episode API\n          ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-md btn-warning ml-1",
                  attrs: {
                    role: "button",
                    to: {
                      name: "new_series_episode_custome",
                      params: { id: this.$route.params.id }
                    }
                  }
                },
                [_vm._v("\n            Episode custom\n          ")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-lg-6" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 cloud-upload" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    {
                      staticClass: "col-12 col-sm-6 image",
                      on: {
                        click: function($event) {
                          _vm.cloud_type = "local"
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "local-cloud-logo",
                          class: { active: _vm.cloud_type === "local" }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: "/themes/default/img/local-cloud.svg",
                              alt: "local-cloud",
                              width: "90px"
                            }
                          })
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-12 col-sm-6 image",
                      on: {
                        click: function($event) {
                          _vm.cloud_type = "aws"
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "aws-cloud-logo",
                          class: { active: _vm.cloud_type === "aws" }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: "/themes/default/img/aws-cloud.svg",
                              alt: "aws-cloud",
                              width: "120px"
                            }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.cloud_type
              ? _c(
                  "div",
                  [
                    _c("div", { staticClass: "col-12 col-sm-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "Session" } }, [
                          _vm._v("Session")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.season,
                                expression: "season"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "Session" },
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
                                _vm.season = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.listSession, function(list, index) {
                            return _c("option", { key: index }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(list) +
                                  "\n                  "
                              )
                            ])
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-sm-12" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "Episode" } }, [
                          _vm._v("Episode")
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.episode,
                                expression: "episode"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "Episode", multiple: "" },
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
                                _vm.episode = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          _vm._l(_vm.listEpiosde, function(list, index) {
                            return _c("option", { key: index }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(list) +
                                  "\n                  "
                              )
                            ])
                          }),
                          0
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("label", [_vm._v("Choose way of upload")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(
                            "If you upload External Link, choose 1 episode"
                          )
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
                                value: _vm.upload_type_is,
                                expression: "upload_type_is"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "upload_type", id: "upload_type" },
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
                                _vm.upload_type_is = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "transcoding" } }, [
                              _vm._v("Upload & Transcoding")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "externalUrl" } }, [
                              _vm._v("Upload External Link")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "embedCode" } }, [
                              _vm._v("Upload Using Embed Code")
                            ])
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
                                value: _vm.errors.has("upload_type"),
                                expression: "errors.has('upload_type')"
                              }
                            ],
                            staticClass: "is-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("upload_type")))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "menu-popover" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.upload_type_is == "transcoding",
                              expression: "upload_type_is == 'transcoding'"
                            }
                          ],
                          staticClass: "transcoding-section"
                        },
                        [
                          _vm.upload_type_is == "transcoding"
                            ? _c("div", { staticClass: "form-group" }, [
                                _c("div", { staticClass: "col-12 col-sm-2" }, [
                                  _c("label", [_vm._v("Episode")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12" }, [
                                  _c("input", {
                                    staticClass: "inputfile",
                                    attrs: {
                                      type: "file",
                                      id: "video",
                                      multiple: ""
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.infoShow(
                                          "video",
                                          "videoFileDetails"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "label",
                                    {
                                      attrs: { id: "videoLabel", for: "video" }
                                    },
                                    [
                                      _vm._v(
                                        "Choose a Episode video\n                      "
                                      ),
                                      _c("br"),
                                      _vm._v(" "),
                                      _c("p", {
                                        attrs: { id: "videoFileDetails" }
                                      })
                                    ]
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.upload_type_is == "transcoding"
                            ? _c("div", { staticClass: "form-group" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("label", { attrs: { for: "presets" } }, [
                                    _vm._v("Select Presets")
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
                                          value: _vm.new_presets,
                                          expression: "new_presets"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      staticStyle: { height: "200px" },
                                      attrs: { multiple: "", id: "presets" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.new_presets = $event.target
                                            .multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        }
                                      }
                                    },
                                    _vm._l(_vm.presets, function(item, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: item }
                                        },
                                        [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(item.Name) +
                                              "\n                      "
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
                                          value: _vm.errors.has("presets"),
                                          expression: "errors.has('presets')"
                                        }
                                      ],
                                      staticClass: "is-danger"
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("presets"))
                                      )
                                    ]
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "menu-popover" } }, [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.upload_type_is == "externalUrl",
                              expression: "upload_type_is == 'externalUrl'"
                            }
                          ],
                          staticClass: "external-link"
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.upload_type_is == "externalUrl",
                                  expression: "upload_type_is == 'externalUrl'"
                                }
                              ],
                              staticClass: "external-link"
                            },
                            [
                              _vm.upload_type_is == "externalUrl"
                                ? _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("label", [
                                        _vm._v(
                                          "Episode\n                        "
                                        ),
                                        _c(
                                          "small",
                                          {
                                            staticClass: "form-text text-muted"
                                          },
                                          [_vm._v("External Link (360p)")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.video_link[0],
                                            expression: "video_link[0]"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "320P Episode"
                                        },
                                        domProps: { value: _vm.video_link[0] },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.video_link,
                                              0,
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.upload_type_is == "externalUrl"
                                ? _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("label", [
                                        _vm._v(
                                          "Episode\n                        "
                                        ),
                                        _c(
                                          "small",
                                          {
                                            staticClass: "form-text text-muted"
                                          },
                                          [_vm._v("External Link (480p)")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.video_link[1],
                                            expression: "video_link[1]"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "480P Episode"
                                        },
                                        domProps: { value: _vm.video_link[1] },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.video_link,
                                              1,
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.upload_type_is == "externalUrl"
                                ? _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("label", [
                                        _vm._v(
                                          "Episode\n                        "
                                        ),
                                        _c(
                                          "small",
                                          {
                                            staticClass: "form-text text-muted"
                                          },
                                          [_vm._v("External Link (720p)")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.video_link[2],
                                            expression: "video_link[2]"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "720P Episode"
                                        },
                                        domProps: { value: _vm.video_link[2] },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.video_link,
                                              2,
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.upload_type_is == "externalUrl"
                                ? _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("label", [
                                        _vm._v(
                                          "Episode\n                        "
                                        ),
                                        _c(
                                          "small",
                                          {
                                            staticClass: "form-text text-muted"
                                          },
                                          [_vm._v("External Link (1080p)")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.video_link[3],
                                            expression: "video_link[3]"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "1080P Episode"
                                        },
                                        domProps: { value: _vm.video_link[3] },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.video_link,
                                              3,
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.upload_type_is == "externalUrl"
                                ? _c("div", { staticClass: "form-group" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("label", [
                                        _vm._v(
                                          "Episode\n                        "
                                        ),
                                        _c(
                                          "small",
                                          {
                                            staticClass: "form-text text-muted"
                                          },
                                          [_vm._v("External Link (4k)")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.video_link[4],
                                            expression: "video_link[4]"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          placeholder: "4k Episode"
                                        },
                                        domProps: { value: _vm.video_link[4] },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.video_link,
                                              4,
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ])
                                  ])
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("transition", { attrs: { name: "menu-popover" } }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.upload_type_is === "embedCode",
                                expression: "upload_type_is === 'embedCode'"
                              }
                            ],
                            staticClass: "embed-code"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "add float-right mb-3 mt-3" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-warning",
                                    on: {
                                      click: function($event) {
                                        return _vm.embedCodeList.push({
                                          embed_provider: "",
                                          embed_code: ""
                                        })
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fa fa-plus" }),
                                    _vm._v(" Add\n                    ")
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.embedCodeList, function(item, index) {
                              return _c(
                                "div",
                                { key: index, staticClass: "embed-list" },
                                [
                                  _c("hr"),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "production" } },
                                      [_vm._v("Embed Provider")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: item.embed_provider,
                                            expression: "item.embed_provider"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        attrs: {
                                          name: "productions",
                                          id: "production"
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              item,
                                              "embed_provider",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      _vm._l(_vm.ListProduction, function(
                                        item1,
                                        index1
                                      ) {
                                        return _c(
                                          "option",
                                          {
                                            key: index1,
                                            domProps: { value: item1.id }
                                          },
                                          [
                                            _vm._v(
                                              "\n                          " +
                                                _vm._s(item1.name) +
                                                "\n                        "
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
                                            value: _vm.errors.has("production"),
                                            expression:
                                              "errors.has('production')"
                                          }
                                        ],
                                        staticClass: "c-danger-text"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("production"))
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      { attrs: { for: "embed-code" } },
                                      [
                                        _vm._v(
                                          "Movie\n                        "
                                        ),
                                        _c(
                                          "small",
                                          {
                                            staticClass: "form-text text-muted"
                                          },
                                          [_vm._v("Embed Code")]
                                        )
                                      ]
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
                                        id: "embed-code",
                                        placeholder: "Embed code"
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
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-sm-6 mt-2" }, [
                      _c("div", { staticClass: "form-group" }, [
                        !_vm.disabled_button
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-warning",
                                on: {
                                  click: function($event) {
                                    return _vm.MOVIEDB_API()
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Upload\n                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.disabled_button
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-warning",
                                attrs: { disabled: "" }
                              },
                              [
                                _vm._v(
                                  "\n                  Loading\n                "
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ])
                  ],
                  1
                )
              : _vm._e()
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "div",
          { staticClass: "alert alert-info", attrs: { role: "alert" } },
          [
            _c("strong", [_vm._v("Important ! ")]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("ol", [
              _c("li", [
                _vm._v(
                  "\n                    Re-name the video to same episode number and you can\n                    upload multiple episode in same time. "
                ),
                _c("br")
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "\n                    You can upload one episode through External Link\n                    Re-stream.\n                  "
                )
              ])
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Choose Cloud ")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);