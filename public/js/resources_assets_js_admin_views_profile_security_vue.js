"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_profile_security_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/profile/security.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/profile/security.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      password: "",
      confirm: "",
      success: ""
    };
  },
  methods: {
    changePassword: function changePassword() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          axios.post("api/admin/profile/password", {
            password: _this.password,
            password_confirmation: _this.confirm
          }).then(function (res) {
            if (res.data.status === "success") {
              _this.success = true;

              _this.$auth.destroyToken();

              _this.$router.push({
                name: "login"
              });
            }
          }, function (error) {
            alertify.logPosition("top right");
            alertify.error("There is error in back-end");
          });
        }
      });
    },
    LOGOUT: function LOGOUT() {
      axios.post("admin/logout").then(function (res) {
        localStorage.removeItem('_a');
        location.reload();
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/admin/views/profile/security.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/admin/views/profile/security.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _security_vue_vue_type_template_id_6139f24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.vue?vue&type=template&id=6139f24e& */ "./resources/assets/js/admin/views/profile/security.vue?vue&type=template&id=6139f24e&");
/* harmony import */ var _security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./security.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/profile/security.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _security_vue_vue_type_template_id_6139f24e___WEBPACK_IMPORTED_MODULE_0__.render,
  _security_vue_vue_type_template_id_6139f24e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/profile/security.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/profile/security.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/profile/security.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./security.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/profile/security.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/profile/security.vue?vue&type=template&id=6139f24e&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/profile/security.vue?vue&type=template&id=6139f24e& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_template_id_6139f24e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_template_id_6139f24e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_security_vue_vue_type_template_id_6139f24e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./security.vue?vue&type=template&id=6139f24e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/profile/security.vue?vue&type=template&id=6139f24e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/profile/security.vue?vue&type=template&id=6139f24e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/profile/security.vue?vue&type=template&id=6139f24e& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "container my-5" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-sm-3 col-lg-3" }, [
            _c(
              "div",
              { staticClass: "list-group" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: { to: { name: "profile" } }
                  },
                  [
                    _vm._v(
                      "\n                            Profile\n                        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "list-group-item list-group-item-action",
                    attrs: { to: { name: "security" }, exact: "" }
                  },
                  [
                    _vm._v(
                      "\n                            Security\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "b",
              {
                staticClass: "is-danger",
                staticStyle: { cursor: "pointer", "margin-left": "21px" },
                on: { click: _vm.LOGOUT }
              },
              [_vm._v("Logout")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-12 col-sm-6 col-lg-4 mt-5",
              attrs: { id: "profile-setting" }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "min:8|required",
                        expression: "'min:8|required'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.password,
                        expression: "password"
                      }
                    ],
                    ref: "passwordRef",
                    staticClass: "form-control",
                    class: {
                      input: true,
                      "input-danger": _vm.errors.has("password")
                    },
                    attrs: {
                      type: "password",
                      name: "password",
                      placeholder: "Password"
                    },
                    domProps: { value: _vm.password },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.password = $event.target.value
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "min:8|required|confirmed:passwordRef",
                        expression: "'min:8|required|confirmed:passwordRef'"
                      },
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.confirm,
                        expression: "confirm"
                      }
                    ],
                    staticClass: "form-control",
                    class: {
                      input: true,
                      "input-danger": _vm.errors.has("password")
                    },
                    attrs: {
                      type: "password",
                      name: "password_confirmation",
                      placeholder: "Confirm password",
                      "data-vv-as": "password"
                    },
                    domProps: { value: _vm.confirm },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.confirm = $event.target.value
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
                          value: _vm.errors.has("password_confirmation"),
                          expression: "errors.has('password_confirmation')"
                        }
                      ],
                      staticClass: "text-danger"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("password_confirmation")))]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm.success
                ? _c("div", { staticClass: "form-group" }, [_vm._m(0)])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning",
                      on: { click: _vm.changePassword }
                    },
                    [_vm._v("Update")]
                  )
                ])
              ])
            ]
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
    return _c("div", { staticClass: "col-12" }, [
      _c("span", { staticClass: "is-success" }, [_vm._v("Successful change.")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);