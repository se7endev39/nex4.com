"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_settings_appearance_themes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "theme",
  data: function data() {
    return {
      data: {},
      button_loading: false,
      delete_loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("api/admin/settings/theme").then(function (res) {
      _this.data = res.data;
    }, function (error) {
      alertify.logPosition("top right");
      alertify.error("Error no data");
    });
  },
  methods: {
    UPLOAD: function UPLOAD() {
      var _this2 = this;

      alertify.logPosition("top right");
      alertify.log("It will take some time");
      var formData = new FormData();
      var zip = document.getElementById("theme-zip").files[0];
      formData.append("theme-zip", zip);
      this.$validator.validateAll().then(function (result) {
        axios.post("api/admin/settings/theme/upload", formData).then(function (res) {
          if (res.data.status === "success") {
            alertify.logPosition("top right");
            alertify.success("Successful upload");

            _this2.data.push(res.data[0]);
          } else {
            alertify.logPosition("top right");
            alertify.error(res.data.message);
          }
        }, function (error) {
          alertify.logPosition("top right");
          alertify.error("There is error in back-end");
          _this2.button_loading = false;
        });
      });
    },
    SET: function SET(id) {
      var _this3 = this;

      this.button_loading = id;
      axios.post("api/admin/settings/theme/set", {
        id: id
      }).then(function (res) {
        if (res.data.status === "success") {
          alertify.logPosition("top right");
          alertify.success("Successful change");
          _this3.data = res.data[0];
          _this3.button_loading = false;
        } else {
          alertify.logPosition("top right");
          alertify.error(res.data.message);
          _this3.button_loading = false;
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error("There is error in back-end");
        _this3.button_loading = false;
      });
    },
    DELETE: function DELETE(id, key) {
      var _this4 = this;

      this.delete_loading = id;
      axios["delete"]("api/admin/settings/theme/delete/" + id).then(function (res) {
        if (res.data.status === "success") {
          alertify.logPosition("top right");
          alertify.success("Successful delete");

          _this4.data.splice(key, 1);

          _this4.delete_loading = false;
        } else {
          alertify.logPosition("top right");
          alertify.error(res.data.message);
          _this4.delete_loading = false;
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error("There is error in back-end");
        _this4.delete_loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/admin/views/settings/appearance/themes.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/admin/views/settings/appearance/themes.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _themes_vue_vue_type_template_id_5960479c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes.vue?vue&type=template&id=5960479c& */ "./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=template&id=5960479c&");
/* harmony import */ var _themes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _themes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _themes_vue_vue_type_template_id_5960479c___WEBPACK_IMPORTED_MODULE_0__.render,
  _themes_vue_vue_type_template_id_5960479c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/settings/appearance/themes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_themes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./themes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_themes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=template&id=5960479c&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=template&id=5960479c& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_themes_vue_vue_type_template_id_5960479c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_themes_vue_vue_type_template_id_5960479c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_themes_vue_vue_type_template_id_5960479c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./themes.vue?vue&type=template&id=5960479c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=template&id=5960479c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=template&id=5960479c&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/themes.vue?vue&type=template&id=5960479c& ***!
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
  return _c("div", { staticClass: "k1_manage_table" }, [
    _c("div", { staticClass: "container theme" }, [
      _c("div", { staticClass: "col-12 my-3 p-2" }, [
        _c("h5", { staticClass: "title p-2" }, [_vm._v("Theme Manage")]),
        _vm._v(" "),
        _c("div", { staticClass: "m-2", attrs: { id: "manage-panel" } }, [
          _c("ul", { staticClass: "nav nav-tabs" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-link btn btn-sm btn-warning",
                    attrs: { role: "button", to: { name: "themes" } }
                  },
                  [_vm._v("Themes")]
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
                    staticClass: "nav-link btn btn-sm btn-warning",
                    attrs: { role: "button", to: { name: "footer" } }
                  },
                  [_vm._v("Footer")]
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
                    staticClass: "nav-link btn btn-sm btn-warning",
                    attrs: { role: "button", to: { name: "theme-settings" } }
                  },
                  [_vm._v("Theme Configuration")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            { staticClass: "row" },
            [
              _vm._l(_vm.data, function(item, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "col-12 col-sm-4 col-lg-4 theme-box"
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: item.thumbnail,
                        alt: item.name,
                        width: "100%"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "title" }, [
                      _c("b", { staticClass: "p-1" }, [
                        _vm._v(_vm._s(item.name))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "control mt-1" }, [
                      _c("div", { staticClass: "group-btn" }, [
                        !_vm.button_loading && item.status === 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-warning",
                                on: {
                                  click: function($event) {
                                    return _vm.SET(item.id)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Set\n                "
                                )
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-success",
                                attrs: { disabled: "" }
                              },
                              [
                                _vm._v(
                                  "\n                  Active\n                "
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _vm.button_loading === item.id
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-warning",
                                attrs: { disabled: "" }
                              },
                              [
                                _c("i", { attrs: { id: "btn-progress" } }),
                                _vm._v(" Loading\n                ")
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.button_loading &&
                        item.name !== "default" &&
                        item.status !== 1
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.DELETE(item.id, index)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                  Delete\n                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.delete_loading === item.id
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-md btn-danger",
                                attrs: { disabled: "" }
                              },
                              [
                                _c("i", { attrs: { id: "btn-progress" } }),
                                _vm._v(" Loading\n                ")
                              ]
                            )
                          : _vm._e()
                      ])
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-sm-4 col-lg-4" }, [
                _c("div", { staticClass: "col-12 add-theme-box" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value:
                          "mimes: application/zip, application/octet-stream",
                        expression:
                          "\n                  'mimes: application/zip, application/octet-stream'\n                "
                      }
                    ],
                    staticClass: "inputfile",
                    attrs: { type: "file", name: "theme-zip", id: "theme-zip" },
                    on: { change: _vm.UPLOAD }
                  }),
                  _vm._v(" "),
                  _vm._m(0)
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("theme-zip"),
                        expression: "errors.has('theme-zip')"
                      }
                    ],
                    staticClass: "is-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("theme-zip")))]
                )
              ])
            ],
            2
          )
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
    return _c("label", { attrs: { for: "theme-zip" } }, [
      _c("i", {
        staticClass: "fa fa-plus-circle fa-5x",
        attrs: { "aria-hidden": "true" }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);