"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_manga_new-manga-chapter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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


var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
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
    button_loading: function button_loading(state) {
      return state.manga.button_loading;
    },
    spinner_loading: function spinner_loading(state) {
      return state.manga.spinner_loading;
    },
    countUploadData: function countUploadData(state) {
      return state.event.data_count;
    },
    uploadData: function uploadData(state) {
      return state.event.upload_data;
    }
  }),
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

      //  this.disabled_button = true;
      // Check count of upload data
      this.$store.commit("COUNT_UPLOAD_PROGRESS"); // Cloud Type

      this.apiFormData.append("cloud_type", this.cloud_type); // API form data

      var chapters = document.querySelector("#chapters");

      for (var i = 0; i < chapters.files.length; i++) {
        console.log(chapters.files[i]);
        this.apiFormData.append("chapters[]", chapters.files[i]);
      } // Store data


      this.upload_data.api.show = true;
      this.upload_data.id = this.$route.params.id;
      this.$store.commit("SET_PROGRESS_DATA", this.upload_data);
      this.$store.commit("SET_UPLOAD_PROGRESS", this.uploadData[this.countUploadData]);
      this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
        key: this.countUploadData,
        data: this.uploadData[this.countUploadData]
      });
      axios.post("/api/admin/new/manga/chapters/" + this.$route.params.id + "/upload", this.apiFormData).then(function (response) {
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
          }); //  this.$router.back();

        }
      }, function (error) {
        _this2.disabled_button = false;

        if (error.response.status == 422) {
          alertify.logPosition("top right");
          alertify.error(error.response.data.errors);
          alertify.error(error.response.data.message);
        } else {
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
        }
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

/***/ "./resources/assets/js/admin/views/manga/new-manga-chapter.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-chapter.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_manga_chapter_vue_vue_type_template_id_34c28a09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-manga-chapter.vue?vue&type=template&id=34c28a09& */ "./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=template&id=34c28a09&");
/* harmony import */ var _new_manga_chapter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-manga-chapter.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_manga_chapter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_manga_chapter_vue_vue_type_template_id_34c28a09___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_manga_chapter_vue_vue_type_template_id_34c28a09___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/manga/new-manga-chapter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_chapter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-manga-chapter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_chapter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=template&id=34c28a09&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=template&id=34c28a09& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_chapter_vue_vue_type_template_id_34c28a09___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_chapter_vue_vue_type_template_id_34c28a09___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_chapter_vue_vue_type_template_id_34c28a09___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-manga-chapter.vue?vue&type=template&id=34c28a09& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=template&id=34c28a09&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=template&id=34c28a09&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-chapter.vue?vue&type=template&id=34c28a09& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                      name: "chapters-manage",
                      params: { id: this.$route.params.id }
                    }
                  }
                },
                [_vm._v("Manage\n          ")]
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
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12 col-sm-12" }, [
                      _c("input", {
                        staticClass: "inputfile",
                        attrs: {
                          type: "file",
                          id: "chapters",
                          name: "chapters",
                          multiple: ""
                        },
                        on: {
                          change: function($event) {
                            return _vm.infoShow(
                              "chapters",
                              "chapterFileDetails"
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 mt-2" }, [
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
                ])
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
                  "\n                    Re-name the chapter page image by number (1-20) exm\n                    (1.png) and put all images in zip file rename the zip file\n                    to (chpatername number) exm: (gold de roger_512.zip), you\n                    can also upload only number of chapter, the chapter number\n                    is required.\n                    "
                ),
                _c("br")
              ]),
              _vm._v(" "),
              _c("li", [_vm._v("You can upload multi zip file")])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-sm-4" }, [
      _c("label", [_vm._v("Chapter zip file")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "backdropLabel", for: "chapters" } }, [
      _vm._v("Choose a chapters\n                  "),
      _c("br"),
      _vm._v(" "),
      _c("p", { attrs: { id: "chapterFileDetails" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);