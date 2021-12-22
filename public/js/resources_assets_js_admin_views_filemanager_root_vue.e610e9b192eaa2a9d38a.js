"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_filemanager_root_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/filemanager/root.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/filemanager/root.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "file-manager",
  data: function data() {
    return {
      data: [],
      link: ["/"],
      info_data: null,
      // Create folder
      show_new_folder: false,
      folder_name: "",
      // Rename Folder
      show_rename_folder: false,
      rename_folder: "",
      // Rename File
      show_rename_file: false,
      rename_file: "",
      // Upload Files
      show_upload_progress: false,
      percentFileUpload: 0,
      spinner_loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.spinner_loading = true;
    axios.post("/api/admin/get/filemanager/folder", {
      link: '/'
    }).then(function (response) {
      if (response.status === 200) {
        _this.data = response.data.data;
        _this.spinner_loading = false;
      }
    });
  },
  methods: {
    GET_INSIDE_FOLDER: function GET_INSIDE_FOLDER(link, name) {
      var _this2 = this;

      this.spinner_loading = true;
      axios.post("/api/admin/get/filemanager/folder", {
        link: link
      }).then(function (response) {
        if (response.status === 200) {
          _this2.data = response.data.data;

          _this2.link.push(name);

          _this2.spinner_loading = false;
        }
      });
    },
    GO_TO_DIR: function GO_TO_DIR(link) {
      var _this3 = this;

      this.spinner_loading = true;

      if (link !== this.link.slice(-1).pop()) {
        this.link.length = this.link.indexOf(link);
        axios.post("/api/admin/get/filemanager/folder", {
          link: link
        }).then(function (response) {
          if (response.status === 200) {
            _this3.data = response.data.data;
            if (link === "/") _this3.link = ["/"];else _this3.link.push(link);
            _this3.spinner_loading = false;
          }
        });
      }
    },
    DELETE_FOLDER_A_FILE: function DELETE_FOLDER_A_FILE(path, index, type) {
      var _this4 = this;

      axios.post("/api/admin/delete/filemanager", {
        path: path,
        type: type
      }).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);

          _this4.data.files.splice(index, 1);
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error("Error in delete");
      });
    },
    DOWNLOAD_FILE: function DOWNLOAD_FILE(path) {
      axios.post("/api/admin/download/filemanager", {
        path: path
      }).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error("Error in delete");
      });
    },
    GET_FILE_INFO: function GET_FILE_INFO(path, name) {
      var _this5 = this;

      axios.post("/api/admin/get/filemanager/info", {
        path: path,
        name: name
      }).then(function (response) {
        if (response.status === 200) {
          _this5.info_data = [];
          _this5.info_data = response.data.data;
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error(error.response.data.message);
      });
    },
    CREATE_NEW_FOLDER: function CREATE_NEW_FOLDER() {
      var _this6 = this;

      var path = this.link.join("") + "/" + this.folder_name;
      axios.post("/api/admin/create/filemanager/folder", {
        path: path
      }).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);
          if (_this6.data.folder === null) _this6.data.folder = [];

          _this6.data.folder.push({
            'path': path,
            'name': path.substring(1)
          });

          _this6.show_new_folder = false;
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error(error.response.data.message);
      });
    },
    DELETE_FOLDER: function DELETE_FOLDER(path, index) {
      var _this7 = this;

      axios.post("/api/admin/delete/filemanager/folder", {
        path: path
      }).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);

          _this7.data.folder.splice(index, 1);
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error(error.response.data.message);
      });
    },
    RENAME_FOLDER: function RENAME_FOLDER(old_name, index) {
      var _this8 = this;

      var new_name = this.link.join("") + "/" + this.rename_folder;
      axios.post("/api/admin/rename/filemanager/any", {
        old_name: old_name,
        new_name: new_name
      }).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);
          _this8.data.folder[index] = _this8.rename_folder;
          _this8.show_rename_folder = false;
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error(error.response.data.message);
      });
    },
    RENAME_FILE: function RENAME_FILE(old_name, index) {
      var _this9 = this;

      var new_name = this.link.join("") + "/" + this.rename_file;
      axios.post("/api/admin/rename/filemanager/any", {
        old_name: old_name,
        new_name: new_name
      }).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);
          _this9.data.files[index].name = _this9.rename_file;
          _this9.show_rename_file = false;
        }
      }, function (error) {
        alertify.logPosition("top right");
        alertify.error(error.response.data.message);
      });
    },
    UPLOAD_FILES: function UPLOAD_FILES() {
      var _this10 = this;

      var formData = new FormData();
      var files = document.getElementById("file-upload");

      for (var i = 0; i < files.files.length; i++) {
        formData.append("files[]", files.files[i]);
      }

      if (this.link.join("") === "/") {
        formData.append("path", "/");
      } else {
        formData.append("path", this.link.join(""));
      } // Progress


      this.show_upload_progress = true;
      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        },
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this10.percentFileUpload = Math.round(progressEvent.loaded * 100.0 / progressEvent.total);
        }
      };
      axios.post("/api/admin/upload/filemanager/files", formData, progress).then(function (response) {
        if (response.status === 200) {
          alertify.logPosition("top right");
          alertify.success(response.data.message);
          _this10.show_upload_progress = false;

          _this10.GET_INSIDE_FOLDER(_this10.link.join(''));
        }
      }, function (error) {
        _this10.show_upload_progress = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/admin/views/filemanager/root.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/admin/views/filemanager/root.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_vue_vue_type_template_id_9069a31a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.vue?vue&type=template&id=9069a31a& */ "./resources/assets/js/admin/views/filemanager/root.vue?vue&type=template&id=9069a31a&");
/* harmony import */ var _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/filemanager/root.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _root_vue_vue_type_template_id_9069a31a___WEBPACK_IMPORTED_MODULE_0__.render,
  _root_vue_vue_type_template_id_9069a31a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/filemanager/root.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/filemanager/root.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/filemanager/root.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./root.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/filemanager/root.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/filemanager/root.vue?vue&type=template&id=9069a31a&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/filemanager/root.vue?vue&type=template&id=9069a31a& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_9069a31a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_9069a31a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_root_vue_vue_type_template_id_9069a31a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./root.vue?vue&type=template&id=9069a31a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/filemanager/root.vue?vue&type=template&id=9069a31a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/filemanager/root.vue?vue&type=template&id=9069a31a&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/filemanager/root.vue?vue&type=template&id=9069a31a& ***!
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
    _vm.spinner_loading
      ? _c("div", { staticClass: "spinner-load" }, [_c("Loader")], 1)
      : _vm._e(),
    _vm._v(" "),
    !_vm.spinner_loading
      ? _c("div", { staticClass: "k1_manage_table file-manager" }, [
          _c("h5", { staticClass: "title p-2" }, [_vm._v("File Manager")]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 row" }, [
            _c("div", { staticClass: "col-12 col-md-6" }, [
              _c("div", { staticClass: "group-btn" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-warning",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        _vm.show_new_folder = true
                      }
                    }
                  },
                  [_vm._v("Create New Folder")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "upload-file btn btn-sm btn-warning" },
                  [
                    _vm._v(
                      "\r\n                        Upload File\r\n                        "
                    ),
                    _c("input", {
                      attrs: {
                        type: "file",
                        id: "file-upload",
                        name: "file-upload",
                        multiple: ""
                      },
                      on: { change: _vm.UPLOAD_FILES }
                    })
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.show_new_folder
              ? _c("div", { staticClass: "col-12 col-md-6 m-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.folder_name,
                          expression: "folder_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", placeholder: "Folder Name" },
                      domProps: { value: _vm.folder_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.folder_name = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "group-btn" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-success",
                        attrs: { type: "button" },
                        on: { click: _vm.CREATE_NEW_FOLDER }
                      },
                      [_vm._v("Submit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.show_new_folder = false
                            _vm.folder_name = ""
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.show_upload_progress
            ? _c(
                "div",
                {
                  staticClass: "progress mt-2",
                  staticStyle: { height: "15px" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: _vm.percentFileUpload + "%" },
                      attrs: {
                        "aria-valuenow": "0",
                        "aria-valuemin": _vm.percentFileUpload,
                        "aria-valuemax": "100"
                      }
                    },
                    [_vm._v(_vm._s(_vm.percentFileUpload) + "%")]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "GetFileInfoModal",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "GetFileInfoLabel",
                "aria-hidden": "true"
              }
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm.info_data !== null
                      ? _c("div", { staticClass: "modal-body" }, [
                          _vm.info_data.m_id !== null &&
                          _vm.info_data.m_id !== undefined
                            ? _c("div", { staticClass: "col-12 m-3" }, [
                                _c("h4", [
                                  _vm._v(_vm._s(_vm.info_data.m_name))
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v(_vm._s(_vm.info_data.m_desc))]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("h6", { staticClass: "mt-3" }, [
                                  _vm._v("Images")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-md-6" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/posters/300_" +
                                            _vm.info_data.m_poster,
                                          width: "100%"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-md-6" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/backdrops/300_" +
                                            _vm.info_data.m_backdrop,
                                          width: "100%"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h6", { staticClass: "mt-3" }, [
                                  _vm._v("Videos")
                                ]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c(
                                  "video",
                                  { attrs: { width: "100%", controls: "" } },
                                  [
                                    _c("source", {
                                      attrs: {
                                        src: _vm.info_data.video_url,
                                        type: "video/mp4"
                                      }
                                    }),
                                    _vm._v(
                                      " Your browser does not support the video tag.\r\n              "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.info_data.t_id !== null &&
                          _vm.info_data.t_id !== undefined
                            ? _c("div", { staticClass: "col-12 m-3" }, [
                                _c("h4", [
                                  _vm._v(_vm._s(_vm.info_data.t_name))
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v(_vm._s(_vm.info_data.t_desc))]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("h6", { staticClass: "mt-3" }, [
                                  _vm._v("Images")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-md-6" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/posters/300_" +
                                            _vm.info_data.t_poster,
                                          width: "100%"
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-md-6" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/backdrops/300_" +
                                            _vm.info_data.t_backdrop,
                                          width: "100%"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("h6", { staticClass: "mt-3" }, [
                                  _vm._v("Videos")
                                ]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c(
                                  "video",
                                  { attrs: { width: "100%", controls: "" } },
                                  [
                                    _c("source", {
                                      attrs: {
                                        src: _vm.info_data.video_url,
                                        type: "video/mp4"
                                      }
                                    }),
                                    _vm._v(
                                      " Your browser does not support the video tag.\r\n              "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.info_data.id !== null &&
                          _vm.info_data.id !== undefined
                            ? _c("div", { staticClass: "col-12 m-3" }, [
                                _c("h4", [_vm._v(_vm._s(_vm.info_data.name))]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("h6", { staticClass: "mt-3" }, [
                                  _vm._v("Images")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-md-6" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/storage/posters/" +
                                            _vm.info_data.image,
                                          width: "100%"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _vm.info_data.video_url
                                  ? _c("div", { attrs: { clas: "col-12" } }, [
                                      _c("h6", { staticClass: "mt-3" }, [
                                        _vm._v("Videos")
                                      ]),
                                      _vm._v(" "),
                                      _c("hr"),
                                      _vm._v(" "),
                                      _c(
                                        "video",
                                        {
                                          attrs: { width: "100%", controls: "" }
                                        },
                                        [
                                          _c("source", {
                                            attrs: {
                                              src: _vm.info_data.video_url,
                                              type: "application/x-mpegURL"
                                            }
                                          }),
                                          _vm._v(
                                            " Your browser does not support the video tag.\r\n                "
                                          )
                                        ]
                                      )
                                    ])
                                  : _vm._e()
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.info_data.c_id !== null &&
                          _vm.info_data.c_id !== undefined
                            ? _c("div", { staticClass: "col-12 m-3" }, [
                                _c("h4", [
                                  _vm._v(_vm._s(_vm.info_data.c_name))
                                ]),
                                _vm._v(" "),
                                _c("hr"),
                                _vm._v(" "),
                                _c("h6", { staticClass: "mt-3" }, [
                                  _vm._v("Images")
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "row" }, [
                                  _c(
                                    "div",
                                    { staticClass: "col-12 col-md-6" },
                                    [
                                      _c("img", {
                                        attrs: {
                                          src: _vm.info_data.c_image,
                                          width: "100%"
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ])
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "h6",
            { staticClass: "link-dir p-2" },
            _vm._l(_vm.link, function(item, index) {
              return _c(
                "span",
                {
                  key: index,
                  on: {
                    click: function($event) {
                      return _vm.GO_TO_DIR(item)
                    }
                  }
                },
                [_vm._v(_vm._s(item))]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              { staticClass: "row" },
              [
                _vm._l(_vm.data.folder, function(item, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      staticClass: "col-4 col-md-2 text-center folder"
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-folder fa-5x",
                        on: {
                          click: function($event) {
                            return _vm.GET_INSIDE_FOLDER(item.path, item.name)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _vm.show_rename_folder !== index
                        ? _c("small", [_vm._v(_vm._s(item.name))])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.show_rename_folder === index
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.rename_folder,
                                expression: "rename_folder"
                              }
                            ],
                            staticClass: "form-control form-control-sm mt-2",
                            attrs: { type: "text", placeholder: "Folder Name" },
                            domProps: { value: _vm.rename_folder },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.rename_folder = $event.target.value
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.show_rename_folder !== index
                        ? _c("div", { staticClass: "control" }, [
                            _c("i", {
                              staticClass: "fa fa-trash",
                              on: {
                                click: function($event) {
                                  return _vm.DELETE_FOLDER(item.path, index)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              staticClass: "fa fa-edit",
                              on: {
                                click: function($event) {
                                  _vm.show_rename_folder = index
                                }
                              }
                            })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.show_rename_folder === index
                        ? _c("div", { staticClass: "group-btn mt-2" }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-outline-success",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.RENAME_FOLDER(item.path, index)
                                  }
                                }
                              },
                              [_vm._v("Submit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-outline-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    _vm.show_rename_folder = false
                                    _vm.rename_folder = ""
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            )
                          ])
                        : _vm._e()
                    ]
                  )
                }),
                _vm._v(" "),
                _vm.data.files !== null
                  ? _c("div", { staticClass: "col-12 text-center folder" }, [
                      _c("table", { staticClass: "table table-sm" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.data.files, function(item, index) {
                            return _c("tr", { key: index }, [
                              (_vm.show_rename_file !== index &&
                                item.mime === "jpg") ||
                              item.mime === "jpeg" ||
                              item.mime === "png"
                                ? _c(
                                    "td",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.show_rename_file = index
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-image fa-1x"
                                      }),
                                      _vm._v(
                                        "\r\n                                                                    " +
                                          _vm._s(item.name) +
                                          "\r\n                                                                "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              (_vm.show_rename_file !== index &&
                                item.mime === "mp4") ||
                              item.mime === "m3u8"
                                ? _c(
                                    "td",
                                    {
                                      on: {
                                        click: function($event) {
                                          _vm.show_rename_file = index
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-video fa-1x"
                                      }),
                                      _vm._v(
                                        "\r\n                                                                    " +
                                          _vm._s(item.name) +
                                          "\r\n                                                                "
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.show_rename_file === index
                                ? _c("td", [
                                    _c("form", { staticClass: "form-inline" }, [
                                      _c(
                                        "div",
                                        { staticClass: "form-group mb-2" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.rename_file,
                                                expression: "rename_file"
                                              }
                                            ],
                                            staticClass:
                                              "form-control form-control-sm mt-2",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Folder Name"
                                            },
                                            domProps: {
                                              value: _vm.rename_file
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.rename_file =
                                                  $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "form-group ml-2" },
                                        [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-sm btn-outline-success",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  return _vm.RENAME_FILE(
                                                    item.path,
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Submit")]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(item.size / 1000) + " KB")
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.date))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  {
                                    staticClass: "control-btn",
                                    on: {
                                      click: function($event) {
                                        return _vm.DELETE_FOLDER_A_FILE(
                                          item.path,
                                          index,
                                          "file"
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "control-btn" }, [
                                  _c(
                                    "a",
                                    {
                                      staticStyle: { color: "#03A9F4" },
                                      attrs: { href: "/storage/" + item.path }
                                    },
                                    [_vm._v("Download")]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "control-btn",
                                    attrs: {
                                      "data-toggle": "modal",
                                      "data-target": "#GetFileInfoModal"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.GET_FILE_INFO(
                                          item.path,
                                          item.name
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("Info")]
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    ])
                  : _vm._e()
              ],
              2
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "GetFileInfoLabel" } },
        [_vm._v("File Information")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Size")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Control")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);