"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_manga_new-manga-api_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      id: "",
      series_api: false,
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
    uploadData: function uploadData(state) {
      return state.event.upload_data;
    }
  }),
  methods: {
    UPLOAD: function UPLOAD(id) {
      var _this = this;

      // Check count of upload data
      this.$store.commit("COUNT_UPLOAD_PROGRESS");
      this.apiFormData.append("id", this.id); // Cloud Type

      this.apiFormData.append("cloud_type", this.cloud_type); // Store data

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.disabled_button = true;
          _this.upload_data.api.show = true;
          _this.upload_data.id = _this.id;

          _this.$store.commit("SET_PROGRESS_DATA", _this.upload_data);

          _this.$store.commit("SET_UPLOAD_PROGRESS", _this.uploadData[_this.countUploadData]);

          _this.$store.commit("UPDATE_UPLOAD_PROGRESS_DATA", {
            key: _this.countUploadData,
            data: _this.uploadData[_this.countUploadData]
          });

          axios.post("/api/admin/new/manga/manga-api", _this.apiFormData).then(function (response) {
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
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-api.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-api.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_manga_api_vue_vue_type_template_id_2a084b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-manga-api.vue?vue&type=template&id=2a084b56& */ "./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=template&id=2a084b56&");
/* harmony import */ var _new_manga_api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-manga-api.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_manga_api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_manga_api_vue_vue_type_template_id_2a084b56___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_manga_api_vue_vue_type_template_id_2a084b56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/manga/new-manga-api.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-manga-api.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_api_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=template&id=2a084b56&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=template&id=2a084b56& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_api_vue_vue_type_template_id_2a084b56___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_api_vue_vue_type_template_id_2a084b56___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_manga_api_vue_vue_type_template_id_2a084b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-manga-api.vue?vue&type=template&id=2a084b56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=template&id=2a084b56&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=template&id=2a084b56&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/manga/new-manga-api.vue?vue&type=template&id=2a084b56& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "new-series-api" }, [
    _c("div", { staticClass: "k1_manage_table" }, [
      _c("div", { staticClass: "title p-2" }, [_vm._v("Series API Upload")]),
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
        _vm.cloud_type
          ? _c("div", [
              _c("div", { staticClass: "form-group" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-sm-8 col-lg-4" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.id,
                        expression: "id"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|numeric",
                        expression: "'required|numeric'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      name: "id",
                      type: "text",
                      placeholder: "Moviedb id"
                    },
                    domProps: { value: _vm.id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.id = $event.target.value
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
                          value: _vm.errors.has("id"),
                          expression: "errors.has('id')"
                        }
                      ],
                      staticClass: "is-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("id")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "col-6" }, [
                  !_vm.disabled_button
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-md btn-warning",
                          on: {
                            click: function($event) {
                              return _vm.UPLOAD()
                            }
                          }
                        },
                        [_vm._v("\n              Upload\n            ")]
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
                        [_vm._v("\n              Loading\n            ")]
                      )
                    : _vm._e()
                ])
              ])
            ])
          : _vm._e()
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
    return _c("div", { staticClass: "col-12 col-lg-12" }, [
      _c("label", [_vm._v("ID")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);