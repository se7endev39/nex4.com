"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_movies_new-movie-custom_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      age: null,
      overview: "",
      runtime: "",
      rate: "",
      youtube: "",
      id: "",
      video_link: [],
      embed: "",
      embedCodeList: [],
      presets: [{
        'Name': 'HLS - 16000Kilorate - 4K',
        'Resolution': '4k',
        'Container': 'ts'
      }, {
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
        'Name': 'HLS - 400Kilorate - 320P',
        'Resolution': '320',
        'Container': 'ts'
      }, {
        'Name': 'Generic - 4K',
        'Resolution': '4k',
        'Container': 'mp4'
      }, {
        'Name': 'Generic - 1080P',
        'Resolution': '1080',
        'Container': 'mp4'
      }, {
        'Name': 'Generic - 720P',
        'Resolution': '720',
        'Container': 'mp4'
      }, {
        'Name': 'Generic - 480P',
        'Resolution': '480',
        'Container': 'mp4'
      }, {
        'Name': 'Generic - 320P',
        'Resolution': '320',
        'Container': 'mp4'
      }],
      new_presets: [],
      count: "",
      //Cast
      cast1: "",
      cast2: "",
      cast3: "",
      cast4: "",
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
      cloud_type: false,
      category: null
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
    },
    categories_list: function categories_list(state) {
      return state.categories.data;
    },
    ListProduction: function ListProduction(state) {
      return state.productions.ListProduction;
    }
  }),
  created: function created() {
    this.$store.dispatch('GET_CATEGORIES_BY_SORT', 'movie');
    this.$store.dispatch("LIST_PRODUCTION");
    this.$store.dispatch("GET_ALL_GENRES");
  },
  mounted: function mounted() {
    var _this = this;

    // Listen for the 'NewBlogPost' event in the 'team.1' private channel
    Echo.channel('progress').listen('EventTrigger', function (payload) {
      if (payload.progress.progress < 2) {
        _this.$store.commit('UPDATE_PROGRESS_DATA', {
          key: _this.countUploadData,
          id: payload.progress.tmdb_id,
          parameter: 'message',
          object: 'upload',
          value: payload.progress.message
        });

        _this.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
          key: _this.countUploadData,
          data: _this.uploadData[_this.countUploadData]
        });
      }

      _this.$store.commit('UPDATE_PROGRESS_DATA', {
        key: _this.countUploadData,
        id: payload.progress.tmdb_id,
        parameter: 'progress',
        object: 'upload',
        value: payload.progress.progress
      });

      _this.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
        key: _this.countUploadData,
        data: _this.uploadData[_this.countUploadData]
      });
    });
  },
  methods: {
    MOVIE_UPLOAD: function MOVIE_UPLOAD() {
      var _this2 = this;

      var cast1 = document.querySelector("#cast1");
      var cast2 = document.querySelector("#cast2");
      var cast3 = document.querySelector("#cast3");
      var cast4 = document.querySelector("#cast4");
      var poster = document.querySelector("#poster");
      var backdrop = document.querySelector("#backdrop"); // Cast

      this.apiFormData.append("image1", cast1.files[0]);
      this.apiFormData.append("image2", cast2.files[0]);
      this.apiFormData.append("image3", cast3.files[0]);
      this.apiFormData.append("image4", cast4.files[0]);
      this.apiFormData.append("cast1", this.cast1);
      this.apiFormData.append("cast2", this.cast2);
      this.apiFormData.append("cast3", this.cast3);
      this.apiFormData.append("cast4", this.cast4); // Details

      this.apiFormData.append("name", this.name);
      this.apiFormData.append("year", this.year);
      this.apiFormData.append("genres", this.genres);
      this.apiFormData.append("overview", this.overview);
      this.apiFormData.append("runtime", this.runtime);
      this.apiFormData.append("rate", this.rate);
      this.apiFormData.append("youtube", this.youtube);
      this.apiFormData.append("poster", poster.files[0]);
      this.apiFormData.append("backdrop", backdrop.files[0]);
      this.apiFormData.append("age", this.age);
      this.apiFormData.append("category", this.category); // Cloud Type

      this.apiFormData.append("cloud_type", this.cloud_type); // Check count of upload data

      this.$store.commit('COUNT_UPLOAD_PROGRESS'); // Upload video form data

      if (this.upload_type_is == 'transcoding') {
        var video = document.querySelector("#video");
        this.uploadFormData.append("video", video.files[0]);
        this.uploadFormData.append("resolution", JSON.stringify(this.new_presets));
      } else if (this.upload_type_is == 'externalUrl') {
        if (this.video_link.length > 0) {
          this.uploadFormData.append("video_link", JSON.stringify(this.video_link));
        } else {
          this.uploadFormData.append("video_link", "empty");
        }
      } else {
        this.uploadFormData.append("embed_code", JSON.stringify(this.embedCodeList));
      }

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // disable button
          _this2.disabled_button = true;
          _this2.upload_data.api.show = true;
          _this2.upload_data.id = _this2.name;

          _this2.$store.commit('SET_PROGRESS_DATA', _this2.upload_data);

          _this2.$store.commit('SET_UPLOAD_PROGRESS', _this2.uploadData[_this2.countUploadData]);

          _this2.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
            key: _this2.countUploadData,
            data: _this2.uploadData[_this2.countUploadData]
          });

          axios.post("/api/admin/new/movie/customupload", _this2.apiFormData).then(function (response) {
            if (response.status === 200) {
              _this2.$store.commit('UPDATE_PROGRESS_DATA', {
                key: _this2.countUploadData,
                parameter: 'progress',
                object: 'api',
                value: 100
              });

              _this2.$store.commit('UPDATE_PROGRESS_DATA', {
                key: _this2.countUploadData,
                parameter: 'success_message',
                object: 'api',
                value: response.data.message
              });

              _this2.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
                key: _this2.countUploadData,
                data: _this2.uploadData[_this2.countUploadData]
              });

              _this2.MOVIEVIDEO_S3(response.data.id);

              _this2.$router.push({
                name: "movies-manage"
              });
            }
          }, function (error) {
            _this2.$store.commit('UPDATE_PROGRESS_DATA', {
              key: _this2.countUploadData,
              parameter: 'error_message',
              object: 'api',
              value: error.response.data.message
            });

            _this2.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
              key: _this2.countUploadData,
              data: _this2.uploadData[_this2.countUploadData]
            });

            _this2.disabled_button = false;
          });
        }
      });
    },
    MOVIEVIDEO_S3: function MOVIEVIDEO_S3(id) {
      var _this3 = this;

      this.uploadFormData.append("id", id);
      this.uploadFormData.append("tmdb_id", this.name); // Cloud Type

      this.uploadFormData.append("cloud_type", this.cloud_type);
      this.upload_data.upload.show = true;
      this.$store.commit('UPDATE_PROGRESS_DATA', {
        key: this.countUploadData,
        parameter: 'show',
        object: 'upload',
        value: true
      }); // Progress

      var progress = {
        headers: {
          "content-type": "multipart/form-data"
        },
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this3.upload_data.upload.progress = Math.round(progressEvent.loaded * 100.0 / progressEvent.total);

          _this3.$store.commit('UPDATE_PROGRESS_DATA', {
            key: _this3.countUploadData,
            parameter: 'progress',
            object: 'upload',
            value: _this3.upload_data.upload.progress
          });

          _this3.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
            key: _this3.countUploadData,
            data: _this3.uploadData[_this3.countUploadData]
          });
        }
      }; // Store data

      axios.post("/api/admin/new/movie/movievideo", this.uploadFormData, progress).then(function (response) {
        if (response.status === 200) {
          _this3.$store.commit('UPDATE_PROGRESS_DATA', {
            key: _this3.countUploadData,
            parameter: 'success_message',
            object: 'upload',
            value: response.data.message
          });

          _this3.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
            key: _this3.countUploadData,
            data: _this3.uploadData[_this3.countUploadData]
          });

          alertify.logPosition("top right");
          alertify.success("Successful upload");
          setTimeout(function () {
            _this3.showProgress = false;
          }, 500);
        }
      }, function (error) {
        _this3.$store.commit('UPDATE_PROGRESS_DATA', {
          key: _this3.countUploadData,
          parameter: 'error_message',
          object: 'upload',
          value: error.response.data.message
        });

        _this3.$store.commit('UPDATE_UPLOAD_PROGRESS_DATA', {
          key: _this3.countUploadData,
          data: _this3.uploadData[_this3.countUploadData]
        });
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

/***/ "./resources/assets/js/admin/views/movies/new-movie-custom.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/new-movie-custom.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_movie_custom_vue_vue_type_template_id_f60c0d38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-movie-custom.vue?vue&type=template&id=f60c0d38& */ "./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=template&id=f60c0d38&");
/* harmony import */ var _new_movie_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-movie-custom.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _new_movie_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _new_movie_custom_vue_vue_type_template_id_f60c0d38___WEBPACK_IMPORTED_MODULE_0__.render,
  _new_movie_custom_vue_vue_type_template_id_f60c0d38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/movies/new-movie-custom.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_movie_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-movie-custom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_new_movie_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=template&id=f60c0d38&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=template&id=f60c0d38& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_movie_custom_vue_vue_type_template_id_f60c0d38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_movie_custom_vue_vue_type_template_id_f60c0d38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_new_movie_custom_vue_vue_type_template_id_f60c0d38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./new-movie-custom.vue?vue&type=template&id=f60c0d38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=template&id=f60c0d38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=template&id=f60c0d38&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/movies/new-movie-custom.vue?vue&type=template&id=f60c0d38& ***!
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
      _c("div", { staticClass: "title p-2" }, [_vm._v("Movie Custom Upload")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-lg-6" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._m(0),
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
                            staticClass: " is-danger"
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
                            staticClass: " is-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("year")))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _vm.name === false
                          ? _c(
                              "div",
                              { staticClass: "form-control-feedback" },
                              [_vm._v("Name of movie.")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("label", { attrs: { for: "genres" } }, [
                          _vm._v("Genres")
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
                                value: _vm.genres,
                                expression: "genres"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              multiple: "",
                              name: "genres",
                              id: "genres"
                            },
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
                                  "\n                                        " +
                                    _vm._s(item.name) +
                                    "\n                                    "
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
                          staticClass: " is-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("genres")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("label", { attrs: { for: "genres" } }, [
                          _vm._v("Rating system")
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
                                value: _vm.age,
                                expression: "age"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { name: "age", id: "age" },
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
                                _vm.age = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              }
                            }
                          },
                          [
                            _c("option", [_vm._v("G")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("PG")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("PG-13")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("R")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("X")])
                          ]
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
                              value: _vm.errors.has("age"),
                              expression: "errors.has('age')"
                            }
                          ],
                          staticClass: " is-danger"
                        },
                        [_vm._v(_vm._s(_vm.errors.first("age")))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-12" }, [
                        _c("textarea", {
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
                            staticClass: " is-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("overview")) +
                                "\n                        "
                            )
                          ]
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
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|decimal|max:3",
                              expression: "'required|decimal|max:3'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.runtime,
                              expression: "runtime"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "runtime",
                            type: "text",
                            placeholder: "Runtime"
                          },
                          domProps: { value: _vm.runtime },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.runtime = $event.target.value
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
                                value: _vm.errors.has("runtime"),
                                expression: "errors.has('runtime')"
                              }
                            ],
                            staticClass: " is-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("runtime")) +
                                "\n                        "
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
                            staticClass: " is-danger"
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
                              value: "url|max:300",
                              expression: "'url|max:300'"
                            },
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.youtube,
                              expression: "youtube"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "youtube",
                            type: "text",
                            placeholder: "Trailer"
                          },
                          domProps: { value: _vm.youtube },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.youtube = $event.target.value
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
                                value: _vm.errors.has("youtube"),
                                expression: "errors.has('youtube')"
                              }
                            ],
                            staticClass: " is-danger"
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.errors.first("youtube")) +
                                "\n                        "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(7),
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
                          _vm._l(_vm.categories_list.categories, function(
                            item,
                            index
                          ) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: item.id } },
                              [
                                _vm._v(
                                  "\n                                        " +
                                    _vm._s(item.name) +
                                    "\n                                    "
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
                      _vm._m(8),
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
                          attrs: { type: "file", id: "poster", name: "poster" },
                          on: {
                            change: function($event) {
                              return _vm.readImage("poster", "posterFileImage")
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
                            id: "posterFileImage",
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
                                value: _vm.errors.has("poster"),
                                expression: "errors.has('poster')"
                              }
                            ],
                            staticClass: " is-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("poster")))]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(10),
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
                        _vm._m(11),
                        _vm._v(" "),
                        _c("img", {
                          staticStyle: { display: "none" },
                          attrs: {
                            src: "",
                            id: "backdropFileImage",
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
                      _c("div", { staticClass: "col-12" }, [
                        _c("label", { attrs: { for: "upload" } }, [
                          _vm._v("Choose way of upload")
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
                            attrs: { name: "upload_type_is", id: "upload" },
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
                              _vm._v(" Upload External Link")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "embedCode" } }, [
                              _vm._v(" Upload Using Embed Code")
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
                                value: _vm.errors.has("upload_type_is"),
                                expression: "errors.has('upload_type_is')"
                              }
                            ],
                            staticClass: " is-danger"
                          },
                          [_vm._v(_vm._s(_vm.errors.first("upload_type_is")))]
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
                              expression: "upload_type_is == 'transcoding' "
                            }
                          ],
                          staticClass: "transcoding-section"
                        },
                        [
                          _vm.upload_type_is == "transcoding"
                            ? _c("div", { staticClass: "form-group" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("label", [_vm._v("Movie")])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-12" }, [
                                  _c("input", {
                                    staticClass: "inputfile",
                                    attrs: { type: "file", id: "video" },
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
                                        "Choose a movie video\n                                            "
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
                                  _c("label", [
                                    _vm._v(
                                      "Movie\n                                            "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "form-text text-muted" },
                                      [_vm._v("Select Presets")]
                                    )
                                  ])
                                ]),
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
                                            "\n                                                " +
                                              _vm._s(item.Name) +
                                              "\n                                            "
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
                                      staticClass: " is-danger"
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
                          _vm.upload_type_is == "externalUrl"
                            ? _c("div", { staticClass: "form-group" }, [
                                _c("div", { staticClass: "col-12" }, [
                                  _c("label", [
                                    _vm._v(
                                      "Movie\n                                            "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "form-text text-muted" },
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
                                      placeholder: "320P Movie"
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
                                      "Movie\n                                            "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "form-text text-muted" },
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
                                      placeholder: "480P Movie"
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
                                      "Movie\n                                            "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "form-text text-muted" },
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
                                      placeholder: "720P Movie"
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
                                      "Movie\n                                            "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "form-text text-muted" },
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
                                      placeholder: "1080P Movie"
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
                                      "Movie\n                                            "
                                    ),
                                    _c(
                                      "small",
                                      { staticClass: "form-text text-muted" },
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
                                      placeholder: "4k Movie"
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
                                    _vm._v(
                                      " Add\n                                        "
                                    )
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
                                              "\n                                                    " +
                                                _vm._s(item1.name) +
                                                "\n                                                "
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
                                          "Movie\n                                                "
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
                    ])
                  ],
                  1
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6" }, [
            _vm.cloud_type
              ? _c("div", [
                  _c(
                    "form",
                    { staticClass: "cover__form", attrs: { id: "form" } },
                    [
                      _vm._m(12),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(13),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "max:50",
                                expression: "'max:50'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cast1,
                                expression: "cast1"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "name1",
                              type: "text",
                              placeholder: "Name"
                            },
                            domProps: { value: _vm.cast1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.cast1 = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("name1"),
                                  expression: "errors.has('name1')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("name4")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
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
                            attrs: { type: "file", id: "cast1", name: "cast4" },
                            on: {
                              change: function($event) {
                                return _vm.readImage("cast1", "cast1FileImage")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(14),
                          _vm._v(" "),
                          _c("img", {
                            staticStyle: { display: "none" },
                            attrs: {
                              src: "",
                              id: "cast1FileImage",
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
                                  value: _vm.errors.has("cast1"),
                                  expression: "errors.has('cast1')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("cast1")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(15),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "max:50",
                                expression: "'max:50'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cast2,
                                expression: "cast2"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "name2",
                              type: "text",
                              placeholder: "Name"
                            },
                            domProps: { value: _vm.cast2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.cast2 = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("name2"),
                                  expression: "errors.has('name2')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("name2")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
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
                            attrs: { type: "file", id: "cast2", name: "cast2" },
                            on: {
                              change: function($event) {
                                return _vm.readImage("cast2", "cast2FileImage")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(16),
                          _vm._v(" "),
                          _c("img", {
                            staticStyle: { display: "none" },
                            attrs: {
                              src: "",
                              id: "cast2FileImage",
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
                                  value: _vm.errors.has("cast2"),
                                  expression: "errors.has('cast2')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("cast2")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(17),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "max:50",
                                expression: "'max:50'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cast3,
                                expression: "cast3"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "name3",
                              type: "text",
                              placeholder: "Name"
                            },
                            domProps: { value: _vm.cast3 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.cast3 = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("name3"),
                                  expression: "errors.has('name3')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("name3")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
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
                            attrs: { type: "file", id: "cast3", name: "cast3" },
                            on: {
                              change: function($event) {
                                return _vm.readImage("cast3", "cast3FileImage")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(18),
                          _vm._v(" "),
                          _c("img", {
                            staticStyle: { display: "none" },
                            attrs: {
                              src: "",
                              id: "cast3FileImage",
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
                                  value: _vm.errors.has("cast3"),
                                  expression: "errors.has('cast3')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("cast3")))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(19),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-12" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "max:50",
                                expression: "'max:50'"
                              },
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.cast4,
                                expression: "cast4"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "name4",
                              type: "text",
                              placeholder: "Name"
                            },
                            domProps: { value: _vm.cast4 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.cast4 = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("name4"),
                                  expression: "errors.has('name4')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("name4")) +
                                  "\n                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
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
                            attrs: { type: "file", id: "cast4", name: "cast4" },
                            on: {
                              change: function($event) {
                                return _vm.readImage("cast4", "cast4FileImage")
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._m(20),
                          _vm._v(" "),
                          _c("img", {
                            staticStyle: { display: "none" },
                            attrs: {
                              src: "",
                              id: "cast4FileImage",
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
                                  value: _vm.errors.has("cast4"),
                                  expression: "errors.has('cast4')"
                                }
                              ],
                              staticClass: " is-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("cast4")))]
                          )
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.cloud_type
            ? _c("div", [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", { staticClass: "col-12" }, [
                      !_vm.disabled_button
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-warning",
                              on: {
                                click: function($event) {
                                  return _vm.MOVIE_UPLOAD(_vm.name)
                                }
                              }
                            },
                            [_vm._v("Upload\n                                ")]
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
                                "Loading\n                                "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
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
      _c("label", [_vm._v("Overview")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [
        _vm._v("Runtime\n                                    "),
        _c("small", [_vm._v("(In minutes)")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [
        _vm._v("Rate\n                                    "),
        _c("small", [_vm._v("(From 1 to 10)")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [
        _vm._v("Trailer\n                                    "),
        _c("small", [_vm._v("(Youtube)")])
      ])
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
      _c("label", [_vm._v("Poster")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "posterLabel", for: "poster" } }, [
      _vm._v("Choose a poster\n                                    "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Backdrop")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "backdropLabel", for: "backdrop" } }, [
      _vm._v("Choose a backdrop\n                                    "),
      _c("br")
    ])
  },
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
            _c("strong", [_vm._v("If you upload ! ")]),
            _vm._v(
              " Required to add name and image\n                                    "
            )
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
      _c("label", [_vm._v("Cast (1)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "cast1Label", for: "cast1" } }, [
      _vm._v("Choose a image\n                                        "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Cast (2)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "cast2Label", for: "cast2" } }, [
      _vm._v("Choose a image\n                                        "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Cast (3)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "cast3Label", for: "cast3" } }, [
      _vm._v("Choose a image\n                                        "),
      _c("br")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("label", [_vm._v("Cast (4)")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { id: "cast4Label", for: "cast4" } }, [
      _vm._v("Choose a image\n                                        "),
      _c("br")
    ])
  }
]
render._withStripped = true



/***/ })

}]);