"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_manga_new-manga-custom_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: "",
      year: "",
      genres: [],
      overview: "",
      runtime: "",
      rate: "",
      count: "",
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
      apiFormData: new FormData(),
      cloud_type: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    countUploadData: function countUploadData(state) {
      return state.event.data_count;
    },
    genre_list: function genre_list(state) {
      return state.genres.data;
    },
    uploadData: function uploadData(state) {
      return state.event.upload_data;
    }
  }),
  created: function created() {
    this.$store.dispatch("GET_ALL_GENRES");
  },
  methods: {
    SERIES_CUSTOM: function SERIES_CUSTOM() {
      var _this = this;

      var poster = document.querySelector("#poster");
      var backdrop = document.querySelector("#backdrop");
      this.apiFormData.append("name", this.name);
      this.apiFormData.append("year", this.year);
      this.apiFormData.append("genres", this.genres);
      this.apiFormData.append("overview", this.overview);
      this.apiFormData.append("rate", this.rate);

      if (typeof backdrop.files[0] !== "undefined") {
        this.apiFormData.append("backdrop", backdrop.files[0]);
      }

      if (typeof poster.files[0] !== "undefined") {
        this.apiFormData.append("poster", poster.files[0]);
      } // Cloud Type


      this.apiFormData.append("cloud_type", this.cloud_type); // Check count of upload data

      this.$store.commit("COUNT_UPLOAD_PROGRESS");
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.disabled_button = true;
          _this.upload_data.api.show = true;
          _this.upload_data.id = _this.name;

          _this.$store.commit("SET_PROGRESS_DATA", _this.upload_data);

          _this.$store.commit("SET_UPLOAD_PROGRESS", _this.uploadData[_this.countUploadData]);

          _this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
            key: _this.countUploadData,
            data: _this.uploadData[_this.countUploadData]
          });

          axios.post("/api/admin/new/manga/custom-upload", _this.apiFormData).then(function (response) {
            if (response.status === 200) {
              _this.$store.commit("UPDATE_PROGRESS_DATA", {
                key: _this.countUploadData,
                parameter: "success_message",
                object: "api",
                value: response.data.message
              });

              _this.$store.commit("UPDATE_PROGRESS_DATA", {
                key: _this.countUploadData,
                parameter: "progress",
                object: "api",
                value: 100
              });

              _this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
                key: _this.countUploadData,
                data: _this.uploadData[_this.countUploadData]
              });

              setTimeout(function () {
                _this.$router.push({
                  name: "manga-manage"
                });

                alertify.logPosition("top right");
                alertify.success("Successful upload");
              }, 1500);
            }
          }, function (error) {
            _this.disabled_button = false;

            _this.$store.commit("UPDATE_PROGRESS_DATA", {
              key: _this.countUploadData,
              parameter: "error_message",
              object: "api",
              value: error.response.data.message
            });

            _this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
              key: _this.countUploadData,
              data: _this.uploadData[_this.countUploadData]
            });
          });
        }
      });
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

/***/ "./resources/assets/js/admin/views/manga/new-manga-custom.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-custom.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_manga_custom_vue_vue_type_template_id_bb33e136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-manga-custom.vue?vue&type=template&id=bb33e136& */ "./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=template&id=bb33e136&");
/* harmony import */ var _new_manga_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-manga-custom.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_manga_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_manga_custom_vue_vue_type_template_id_bb33e136___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_manga_custom_vue_vue_type_template_id_bb33e136___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/manga/new-manga-custom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-manga-custom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=template&id=bb33e136&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=template&id=bb33e136& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_custom_vue_vue_type_template_id_bb33e136___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_custom_vue_vue_type_template_id_bb33e136___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_custom_vue_vue_type_template_id_bb33e136___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-manga-custom.vue?vue&type=template&id=bb33e136& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=template&id=bb33e136&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=template&id=bb33e136&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-custom.vue?vue&type=template&id=bb33e136& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "title p-2" }, [_vm._v("Series Custom Upload")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "form-group" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-md-8 cloud-upload" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-12 col-md-6 image",
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
                  staticClass: "col-12 col-md-6 image",
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-lg-6" }, [
            _vm.cloud_type
              ? _c("div", [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(1),
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
                            value: _vm.name,
                            expression: "name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "name",
                          type: "text",
                          placeholder: "Name"
                        },
                        domProps: { value: _vm.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.name = $event.target.value
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
                    _vm._m(2),
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
                            value: _vm.year,
                            expression: "year"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "year",
                          type: "text",
                          placeholder: "Years"
                        },
                        domProps: { value: _vm.year },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.year = $event.target.value
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
                    _vm._m(3),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _vm.name === false
                        ? _c("div", { staticClass: "form-control-feedback" }, [
                            _vm._v(
                              "\n                  Manga name\n                "
                            )
                          ])
                        : _vm._e(),
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
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(item.name) +
                                  "\n                  "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("genres"),
                            expression: "errors.has('genres')"
                          }
                        ],
                        staticClass: "is-danger"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("genres")))]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:2000",
                            expression: "'required|max:2000'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.overview,
                            expression: "overview"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "overview",
                          type: "text",
                          placeholder: "Overview"
                        },
                        domProps: { value: _vm.overview },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.overview = $event.target.value
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
                              value: _vm.errors.has("overview"),
                              expression: "errors.has('overview')"
                            }
                          ],
                          staticClass: "is-danger"
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.errors.first("overview")) +
                              "\n                "
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(5),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|decimal:1|max:3",
                            expression: "'required|decimal:1|max:3'"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.rate,
                            expression: "rate"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          name: "rate",
                          type: "text",
                          placeholder: "Rate"
                        },
                        domProps: { value: _vm.rate },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.rate = $event.target.value
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
                    _vm._m(6),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "image|required",
                            expression: "'image|required'"
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
                      _vm._m(7),
                      _vm._v(" "),
                      _c("img", {
                        staticStyle: { display: "none" },
                        attrs: { src: "", id: "posterFileImage", width: "40%" }
                      }),
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
                        [
                          _vm._v(
                            _vm._s(_vm.errors.first("poster")) +
                              "\n                "
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
                            value: "image",
                            expression: "'image'"
                          }
                        ],
                        staticClass: "inputfile",
                        attrs: {
                          type: "file",
                          id: "backdrop",
                          name: "backdrop"
                        },
                        on: {
                          change: function($event) {
                            return _vm.readImage(
                              "backdrop",
                              "backdropFileImage"
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(9),
                      _vm._v(" "),
                      _c("img", {
                        staticStyle: { display: "none" },
                        attrs: {
                          src: "",
                          id: "backdropFileImage",
                          width: "100%"
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
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.cloud_type
            ? _c("div", { staticClass: "col-12" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("div", { staticClass: "col-12" }, [
                    !_vm.disabled_button
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-md btn-warning",
                            on: {
                              click: function($event) {
                                return _vm.SERIES_CUSTOM()
                              }
                            }
                          },
                          [_vm._v("\n                Upload\n              ")]
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
                          [_vm._v("\n                Loading\n              ")]
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
}
var staticRenderFns = [
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
    return _c("div", { staticClass: "col-12" }, [_c("label", [_vm._v("Name")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Years")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Genres")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Overview")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [
        _vm._v("Rate\n                  "),
        _c("small", [_vm._v("(From 1 - 10)")])
      ])
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
      _vm._v("Choose a poster\n                  "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-sm-4" }, [
      _c("label", [_vm._v("Backdrop (optional)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "backdropLabel", for: "backdrop" } }, [
      _vm._v("Choose a backdrop\n                  "),
      _c("br")
    ])
  }
]
render._withStripped = true



/***/ })

}]);