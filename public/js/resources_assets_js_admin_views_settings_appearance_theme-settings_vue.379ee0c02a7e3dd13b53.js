"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_settings_appearance_theme-settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      disabled_button: false
    };
  },
  methods: {
    UPLOAD: function UPLOAD() {
      var _this = this;

      var background = document.querySelector("#background");
      var logo = document.querySelector("#logo");
      var formData = new FormData();

      if (typeof background.files[0] !== "undefined") {
        formData.append("background", background.files[0]);
      }

      if (typeof logo.files[0] !== "undefined") {
        formData.append("logo", logo.files[0]);
      } // Progress


      this.disabled_button = true;
      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        }
      }; // Store data

      this.$validator.validateAll().then(function (result) {
        if (result) {
          axios.post("/api/admin/update/settings/appearance/theme/configuration", formData, progress).then(function (response) {
            if (response.status === 200) {
              alertify.logPosition("top right");
              alertify.success(response.data.message);
            }
          }, function (error) {
            _this.error_message_api = error.response.data.message;
            alertify.logPosition("top right");
            alertify.error(error.response.data.message);
          });
        }
      });
      this.disabled_button = false;
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
    },
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

/***/ "./resources/assets/js/admin/views/settings/appearance/theme-settings.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/settings/appearance/theme-settings.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_settings_vue_vue_type_template_id_0deb2ef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-settings.vue?vue&type=template&id=0deb2ef9& */ "./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=template&id=0deb2ef9&");
/* harmony import */ var _theme_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-settings.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _theme_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _theme_settings_vue_vue_type_template_id_0deb2ef9___WEBPACK_IMPORTED_MODULE_0__.render,
  _theme_settings_vue_vue_type_template_id_0deb2ef9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/settings/appearance/theme-settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_theme_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./theme-settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_theme_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=template&id=0deb2ef9&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=template&id=0deb2ef9& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theme_settings_vue_vue_type_template_id_0deb2ef9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theme_settings_vue_vue_type_template_id_0deb2ef9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_theme_settings_vue_vue_type_template_id_0deb2ef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./theme-settings.vue?vue&type=template&id=0deb2ef9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=template&id=0deb2ef9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=template&id=0deb2ef9&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/settings/appearance/theme-settings.vue?vue&type=template&id=0deb2ef9& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "container" }, [
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
          _c("div", { staticClass: "form-group" }, [
            _vm._m(0),
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
                attrs: { type: "file", id: "background", name: "background" },
                on: {
                  change: function($event) {
                    return _vm.readImage("background", "backgroundFileImage")
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("img", {
                attrs: {
                  src: "/images/background-people.jpg",
                  id: "backgroundFileImage",
                  width: "200"
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
                      value: _vm.errors.has("background"),
                      expression: "errors.has('background')"
                    }
                  ],
                  staticClass: "is-danger"
                },
                [_vm._v(_vm._s(_vm.errors.first("background")))]
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
                    value: "image",
                    expression: "'image'"
                  }
                ],
                staticClass: "inputfile",
                attrs: { type: "file", id: "logo", name: "logo" },
                on: {
                  change: function($event) {
                    return _vm.readImage("logo", "logoFileImage")
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("img", {
                attrs: {
                  src: "/images/logo.png",
                  id: "logoFileImage",
                  width: "200"
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
                      value: _vm.errors.has("logo"),
                      expression: "errors.has('logo')"
                    }
                  ],
                  staticClass: "is-danger"
                },
                [_vm._v(_vm._s(_vm.errors.first("logo")))]
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mt-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "col-12" }, [
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
      _c("label", [_vm._v("Register background")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "posterLabel", for: "background" } }, [
      _vm._v("Choose a background\n              "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [_c("label", [_vm._v("Logo")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "posterLabel", for: "logo" } }, [
      _vm._v("Choose a logo\n              "),
      _c("br")
    ])
  }
]
render._withStripped = true



/***/ })

}]);