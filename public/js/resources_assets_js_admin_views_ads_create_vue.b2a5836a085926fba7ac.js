"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_ads_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/ads/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/ads/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      ad_name: '',
      client: '',
      tags: '',
      start_on: '',
      frequency: '',
      start_on_seek: '',
      time_between_ads: '',
      loading: false
    };
  },
  methods: {
    UPLOAD: function UPLOAD() {
      var _this = this;

      var formData = new FormData();
      formData.append("ad_name", this.ad_name);
      formData.append("client", this.client);
      formData.append("start_on", this.start_on);
      formData.append("frequency", this.frequency);
      formData.append("start_on_seek", this.start_on_seek);
      formData.append("time_between_ads", this.time_between_ads);
      formData.append("tags", this.tags); // Progress

      this.loading = true;
      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        }
      }; // Store data

      this.$validator.validateAll().then(function (result) {
        if (result) {
          axios.post("/api/admin/create/ads", formData, progress).then(function (response) {
            if (response.status === 200) {
              _this.loading = false;
              alertify.logPosition('top right');
              alertify.success(response.data.message);

              _this.$router.push({
                name: 'ads-manage'
              });
            }
          }, function (error) {
            _this.error_message_api = error.response.data.message;
            alertify.logPosition('top right');
            alertify.error(error.response.data.message);
            setTimeout(function () {
              _this.loading = false;
            }, 4000);
          });
        }
      });
    },
    SHOW_FILES_INFO: function SHOW_FILES_INFO(idFiles, idDetails) {
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

/***/ "./resources/assets/js/admin/views/ads/create.vue":
/*!********************************************************!*\
  !*** ./resources/assets/js/admin/views/ads/create.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_5e5b8a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=5e5b8a24& */ "./resources/assets/js/admin/views/ads/create.vue?vue&type=template&id=5e5b8a24&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/ads/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_5e5b8a24___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_5e5b8a24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/ads/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/ads/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/ads/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/ads/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/ads/create.vue?vue&type=template&id=5e5b8a24&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/ads/create.vue?vue&type=template&id=5e5b8a24& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5e5b8a24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5e5b8a24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5e5b8a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=5e5b8a24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/ads/create.vue?vue&type=template&id=5e5b8a24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/ads/create.vue?vue&type=template&id=5e5b8a24&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/ads/create.vue?vue&type=template&id=5e5b8a24& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "create-ad" }, [
    _c("div", { staticClass: "k1_manage_table" }, [
      _c("div", { staticClass: "m-2 p-2", attrs: { id: "manage-panel" } }, [
        _c("ul", { staticClass: "nav nav-tabs" }, [
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-md btn-warning",
                  attrs: { role: "button", to: { name: "ads-manage" } }
                },
                [
                  _vm._v(
                    "\n                        Manage\n                    "
                  )
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-md-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|max:50|alpha_spaces",
                      expression: "'required|max:50|alpha_spaces'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ad_name,
                      expression: "ad_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "name", type: "text", placeholder: "Ad name" },
                  domProps: { value: _vm.ad_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.ad_name = $event.target.value
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
              _c("div", { staticClass: "col-12" }, [
                _c("label", { attrs: { for: "ad-client" } }, [
                  _vm._v("Ad client")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.client,
                        expression: "client"
                      },
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { id: "ad-client", name: "ad-client" },
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
                        _vm.client = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "googima" } }, [
                      _vm._v("Google IMA\n                                ")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "vast" } }, [
                      _vm._v("VAST\n                                ")
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
                        value: _vm.errors.has("ad-client"),
                        expression: "errors.has('ad-client')"
                      }
                    ],
                    staticClass: "is-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("ad-client")))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "max:400|url",
                      expression: "'max:400|url'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.tags,
                      expression: "tags"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: "ad-url",
                    type: "text",
                    placeholder: "Ad XML URL"
                  },
                  domProps: { value: _vm.tags },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.tags = $event.target.value
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
                        value: _vm.errors.has("ad-url"),
                        expression: "errors.has('ad-url')"
                      }
                    ],
                    staticClass: "is-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("ad-url")))]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "col-12" }, [
            !_vm.loading
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
                  [_vm._v("Upload")]
                )
              : _c(
                  "button",
                  {
                    staticClass: "btn btn-md btn-warning",
                    attrs: { disabled: "" }
                  },
                  [
                    _c("i", { staticClass: "fa fa-circle-o-notch fa-spin" }),
                    _vm._v("  Loading\n                    ")
                  ]
                )
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
      _c("label", [_vm._v("Ad Name")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Ad XML URL")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);