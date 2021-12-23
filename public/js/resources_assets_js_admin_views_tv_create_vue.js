"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_tv_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/tv/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/tv/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
var alertify = __webpack_require__(/*! alertify.js */ "./node_modules/alertify.js/dist/js/alertify.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      name: '',
      external_link: '',
      genre: '',
      showProgress: false,
      percent_details_progress: 0,
      percentChannelUpload: 0,
      details_progress: false,
      video_upload_progress: false,
      upload_status: 'Upload video',
      upload_message: '',
      error_message_api: '',
      success_message_api: '',
      presets: [{
        'Name': 'HLS - 4000Kilorate - 1080P',
        'Resolution': '1080',
        'Container': 'ts'
      }, {
        'Name': 'HLS - 2500Kilorate - 720P',
        'Resolution': '720',
        'Container': 'ts'
      }, {
        'Name': 'HLS - 700Kilorate - 480P',
        'Resolution': '480',
        'Container': 'ts'
      }, {
        'Name': 'HLS - 400Kilorate - 360P',
        'Resolution': '360',
        'Container': 'ts'
      }],
      new_presets: '',
      category: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Listen for the 'NewBlogPost' event in the 'team.1' private channel
    Echo.channel('progress').listen('EventTrigger', function (payload) {
      _this.upload_status = 'FFmpegTranscoding Video';
      _this.percentChannelUpload = payload.progress.progress;
      _this.upload_message = payload.progress.message;
    });
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)({
    categories_list: function categories_list(state) {
      return state.categories.data;
    }
  }),
  created: function created() {
    this.$store.dispatch('GET_CATEGORIES_BY_SORT', 'live');
  },
  methods: {
    CHANNEL_DETAILS: function CHANNEL_DETAILS(name) {
      var _this2 = this;

      var image = document.querySelector("#backdrop");
      var formData = new FormData();
      formData.append("name", this.name);
      formData.append("genre", this.genre);
      formData.append("category", this.category);
      formData.append("image", image.files[0]);
      formData.append("iptv_url", this.external_link); // Progress

      this.showProgress = true;
      this.details_progress = true;
      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        },
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this2.percent_details_progress = Math.round(progressEvent.loaded * 100.0 / progressEvent.total);
        }
      }; // Store data

      this.$validator.validateAll().then(function (result) {
        if (result) {
          axios.post("/api/admin/new/channel/details", formData, progress).then(function (response) {
            if (response.status === 200) {
              _this2.success_message_api = response.data.message;
              _this2.showProgress = false;
              _this2.percent_details_progress = 100;

              _this2.$router.push({
                name: 'tv-manage'
              });
            }
          }, function (error) {
            _this2.error_message_api = error.response.data.message;
            setTimeout(function () {
              _this2.showProgress = false;
            }, 4000);
          });
        }
      });
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

/***/ "./resources/assets/js/admin/views/tv/create.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/admin/views/tv/create.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_8bf50d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=8bf50d74& */ "./resources/assets/js/admin/views/tv/create.vue?vue&type=template&id=8bf50d74&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/tv/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_8bf50d74___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_8bf50d74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/tv/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/tv/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/tv/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/tv/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/tv/create.vue?vue&type=template&id=8bf50d74&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/tv/create.vue?vue&type=template&id=8bf50d74& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8bf50d74___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8bf50d74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_8bf50d74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=8bf50d74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/tv/create.vue?vue&type=template&id=8bf50d74&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/tv/create.vue?vue&type=template&id=8bf50d74&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/tv/create.vue?vue&type=template&id=8bf50d74& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                  attrs: { role: "button", to: { name: "tv-manage" } }
                },
                [_vm._v("Manage")]
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
                  staticClass: "btn btn-md btn-warning",
                  attrs: { role: "button", to: { name: "tv-create" } }
                },
                [_vm._v("Create")]
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
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Channel name" },
                  domProps: { value: _vm.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.name = $event.target.value
                    }
                  }
                })
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
                      value: "required|image",
                      expression: "'required|image'"
                    }
                  ],
                  staticClass: "inputfile",
                  attrs: { type: "file", id: "backdrop", name: "backdrop" },
                  on: {
                    change: function($event) {
                      return _vm.readImage("backdrop", "imageFileImage")
                    }
                  }
                }),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c("img", {
                  staticStyle: { display: "none" },
                  attrs: { src: "", id: "imageFileImage", width: "200" }
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
                    staticClass: " is-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("backdrop")))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
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
                        value: _vm.category,
                        expression: "category"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "category", id: "category" },
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
                        _vm.category = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  _vm._l(_vm.categories_list.categories, function(item, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: item.id } },
                      [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(item.name) +
                            "\n                                "
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
                        value: _vm.errors.has("category"),
                        expression: "errors.has('category')"
                      }
                    ],
                    staticClass: " is-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("category")))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "col-12" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.external_link,
                      expression: "external_link"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "HLS Tv Link" },
                  domProps: { value: _vm.external_link },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.external_link = $event.target.value
                    }
                  }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "col-12" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-md btn-warning",
                on: {
                  click: function($event) {
                    return _vm.CHANNEL_DETAILS()
                  }
                }
              },
              [_vm._v("Upload")]
            )
          ])
        ]),
        _vm._v(" "),
        _vm.showProgress
          ? _c("div", { staticClass: "upload-modal" }, [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-body p-4" }, [
                      _vm.details_progress
                        ? _c("div", { staticClass: "details_progress" }, [
                            _c("div", { staticClass: "progress mt-2" }, [
                              _vm.percent_details_progress !== 100
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "progress-bar",
                                      style: {
                                        width:
                                          _vm.percent_details_progress + "%"
                                      },
                                      attrs: {
                                        role: "progressbar",
                                        "aria-valuenow":
                                          _vm.percent_details_progress,
                                        "aria-valuemin": "0",
                                        "aria-valuemax": "100"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.percent_details_progress)
                                      )
                                    ]
                                  )
                                : _c("div", [
                                    _c("i", { attrs: { id: "btn-progress" } }),
                                    _vm._v(
                                      " Prepare\n                                    "
                                    )
                                  ])
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "is-danger" }, [
                              _vm._v(_vm._s(_vm.error_message_api))
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "is-success" }, [
                              _vm._v(_vm._s(_vm.success_message_api))
                            ]),
                            _vm._v(" "),
                            _c("hr")
                          ])
                        : _vm._e()
                    ])
                  ])
                ]
              )
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
    return _c("div", { staticClass: "col-12" }, [_c("label", [_vm._v("Name")])])
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
    return _c("label", { attrs: { id: "backdropLabel", for: "backdrop" } }, [
      _vm._v("Choose a backdrop\n                                "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", { attrs: { for: "category" } }, [_vm._v("Category")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [
        _vm._v("M3U8 OR RTMP\n                                "),
        _c("small", { staticClass: "form-text text-muted" }, [
          _vm._v("External Link")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);