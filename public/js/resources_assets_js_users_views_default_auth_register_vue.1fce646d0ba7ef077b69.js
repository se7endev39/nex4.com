"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_auth_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _control_utils_exit_button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../control/utils/exit-button.vue */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'register',
  data: function data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      msgShow: false,
      msg: '',
      button_loading: false
    };
  },
  components: {
    'exit-button': _control_utils_exit_button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    if (this.$Helper.getIntGatewayStatus('int_gateway')) {
      this.$router.push({
        name: 'signup-non-payment'
      });
    }

    if (localStorage.getItem('_plan') === undefined || localStorage.getItem('_plan') === null) {
      this.$router.push({
        name: 'plan'
      });
    }
  },
  methods: {
    NEXT: function NEXT() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.button_loading = true;
          axios.post('/api/v1/create/register', {
            name: _this.name,
            email: _this.email,
            password: _this.password,
            password_confirmation: _this.confirm
          }).then(function (response) {
            if (response.status === 200) {
              // Login
              var data = {
                grant_type: 'password',
                client_id: 2,
                client_secret: _this.$Helper.client_secret(),
                username: _this.email,
                password: _this.password,
                scope: ''
              };
              axios.post('/oauth/token', data).then(function (res) {
                _this.$auth.setToken(res.data.access_token, res.data.expires_in, response.data.username, response.data.email, 'en', 'payment_step');

                _this.button_loading = false;
                window.location.href = '/signup/payment';
              });
            }
          }, function (error) {
            _this.loading = false;
            _this.msgShow = true;
            _this.msg = error.response.data.message;
            _this.button_loading = false;
          });
        }
      });
    },
    EXIT: function EXIT() {
      this.$router.go(-1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    BACK: function BACK() {
      this.$store.commit("SHOW_SERIES_DETAILS_PAGE", false);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.exit-button[data-v-35af9539] {\n    width:20px;\n    transition: 300ms;\n}\n.exit-button[data-v-35af9539]:hover {\n    transform: scale(1.2);\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/register.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/register.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _register_vue_vue_type_template_id_5db0549c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=5db0549c& */ "./resources/assets/js/users/views/default/auth/register.vue?vue&type=template&id=5db0549c&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/auth/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_5db0549c___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_5db0549c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/auth/register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exit-button.vue?vue&type=template&id=35af9539&scoped=true& */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&");
/* harmony import */ var _exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exit-button.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&");
/* harmony import */ var _exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "35af9539",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/control/utils/exit-button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_style_index_0_id_35af9539_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=style&index=0&id=35af9539&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/register.vue?vue&type=template&id=5db0549c&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/register.vue?vue&type=template&id=5db0549c& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5db0549c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5db0549c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_5db0549c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=5db0549c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/register.vue?vue&type=template&id=5db0549c&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true& ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_exit_button_vue_vue_type_template_id_35af9539_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./exit-button.vue?vue&type=template&id=35af9539&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/register.vue?vue&type=template&id=5db0549c&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/register.vue?vue&type=template&id=5db0549c& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "register" }, [
    _c("div", { staticClass: "col-12 signup" }, [
      _c(
        "div",
        { staticClass: "exit-button", on: { click: _vm.EXIT } },
        [_c("exit-button")],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-12 col-md-8 offset-md-2  p-md-4  signup-form" },
        [
          _c("div", { staticClass: "col-8 offset-2" }, [
            _c("div", { staticClass: "steps hidden-xs-down" }, [
              _c("div", { staticClass: "step-1" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.$t("register.choose_plan")))]),
                _vm._v(" "),
                _c("div", { staticClass: "line-1 active-line" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "160",
                        height: "140",
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1"
                      }
                    },
                    [
                      _c("line", {
                        attrs: {
                          x1: "40",
                          x2: "180",
                          y1: "100",
                          y2: "100",
                          stroke: "url(#grecya)",
                          "stroke-width": "3",
                          "stroke-linecap": "round"
                        }
                      })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "step-2" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.$t("register.signup")) + " ")]),
                _vm._v(" "),
                _c("div", { staticClass: "line-2" }, [
                  _c(
                    "svg",
                    {
                      attrs: {
                        width: "160",
                        height: "140",
                        xmlns: "http://www.w3.org/2000/svg",
                        version: "1.1"
                      }
                    },
                    [
                      _c("line", {
                        attrs: {
                          x1: "40",
                          x2: "180",
                          y1: "100",
                          y2: "100",
                          stroke: "url(#grecya)",
                          "stroke-width": "3",
                          "stroke-linecap": "round"
                        }
                      })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "step-3" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("strong", [_vm._v(_vm._s(_vm.$t("register.payment")))])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "title mt-sm-5" }, [
            _c("h3", [_vm._v(_vm._s(_vm.$t("register.steptwo")))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: " col-lg-10 offset-lg-1 " }, [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required|alpha_spaces|min:6|max:24",
                      expression: "'required|alpha_spaces|min:6|max:24'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    input: true,
                    "input-danger": _vm.errors.has("name")
                  },
                  attrs: {
                    type: "name",
                    name: "name",
                    placeholder: _vm.$t("setting.name"),
                    autocomplete: "off"
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
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("name")))]
                )
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
                      value: "required|email|max:50",
                      expression: "'required|email|max:50'"
                    },
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    }
                  ],
                  staticClass: "form-control",
                  class: {
                    input: true,
                    "input-danger": _vm.errors.has("email")
                  },
                  attrs: {
                    type: "email",
                    name: "email",
                    placeholder: _vm.$t("setting.mail"),
                    autocomplete: "off"
                  },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
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
                        value: _vm.errors.has("email"),
                        expression: "errors.has('email')"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("email")))]
                )
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
                    placeholder: _vm.$t("setting.password")
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
                    placeholder: _vm.$t("setting.password_confirm"),
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
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.msgShow,
                        expression: "msgShow"
                      }
                    ],
                    staticClass: "text-danger"
                  },
                  [_vm._v(_vm._s(_vm.msg))]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "col-12" }, [
                _c(
                  "p",
                  [
                    _vm._v(
                      _vm._s(_vm.$t("register.agree_role")) +
                        "\n                            "
                    ),
                    _c(
                      "router-link",
                      {
                        staticStyle: { color: "#3498db" },
                        attrs: { to: { name: "terms" } }
                      },
                      [_vm._v("Terms Of Service")]
                    ),
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.$t("register.and")) +
                        "\n                            "
                    ),
                    _c(
                      "router-link",
                      {
                        staticStyle: { color: "#3498db" },
                        attrs: { to: { name: "privacy" } }
                      },
                      [_vm._v("Privacy Policy")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "col-12 col-md-6 offset-md-3" }, [
                !_vm.button_loading
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        on: { click: _vm.NEXT }
                      },
                      [_vm._v(_vm._s(_vm.$t("register.signup")))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.button_loading
                  ? _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        attrs: { disabled: "" }
                      },
                      [
                        _c("i", { attrs: { id: "btn-progress" } }),
                        _vm._v(
                          "\n                            " +
                            _vm._s(_vm.$t("register.loading")) +
                            "\n                        "
                        )
                      ]
                    )
                  : _vm._e()
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "circle-1 active-circle " }, [
      _c("span", [_vm._v("1")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "circle-2 active-circle" }, [
      _c("span", [_vm._v("2")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "circle-3" }, [_c("span", [_vm._v("3")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/control/utils/exit-button.vue?vue&type=template&id=35af9539&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "exit-button" }, [
      _c("img", {
        attrs: {
          src: "/themes/default/img/exit-icon.svg",
          alt: "exit icon",
          width: "100%"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);