"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_users_views_default_auth_payment_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'braintree-web-drop-in'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      coupon: "",
      show: true,
      finish: false,
      show_plan: false,
      button_disabled: false,
      plan_message: "",
      error: null,
      complete: false,
      number: false,
      expiry: false,
      cvc: false,
      // info
      email: "",
      name: "",
      trail_end: "",
      plan: null,
      button_loading: false
    };
  },
  computed: (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)({
    planList: function planList(state) {
      return state.home.plan;
    }
  }),
  watch: {
    plan: function plan() {
      if (this.button_disabled && this.plan_message !== "" && this.plan !== null) {
        this.button_disabled = false;
        this.plan_message = "";
      }
    }
  },
  created: function created() {
    var _this = this;

    if (localStorage.getItem("_plan") !== null) {
      this.plan = localStorage.getItem("_plan");
    } else {}

    this.$store.dispatch("GET_HOME_PLAN"); // Check Users Status

    if (this.$auth.isAuthenticated() == "payment_step") {
      axios.get("/api/v1/get/check/user").then(function (response) {
        if (response.data.status !== "payment_step") {
          _this.$router.push({
            name: "home"
          });
        } else {
          _this.show = true;

          if (localStorage.getItem("_plan") == null) {
            _this.button_disabled = true;
            _this.plan_message = "You should choose plan";
          }
        }
      })["catch"](function (error) {
        if (error.response.status === 401) {
          _this.$auth.destroyToken();
        }
      });
    } else {
      this.$router.push({
        name: "home"
      });
    }
  },
  mounted: function mounted() {
    var vm = this;
    Object(function webpackMissingModule() { var e = new Error("Cannot find module 'braintree-web-drop-in'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      // Insert your tokenization key here
      authorization: this.$Helper.sandbox_key(),
      container: '#dropin-container',
      paypal: {
        flow: 'vault',
        buttonStyle: {
          color: 'blue',
          shape: 'rect',
          size: 'medium'
        }
      },
      card: {
        overrides: {
          styles: {
            //      backgroundColor: '#000000',
            input: {
              color: '#ffffff',
              'font-size': '18px',
              'font-weight': 'bold'
            },
            '.number': {
              'font-family': 'monospace' // Custom web fonts are not supported. Only use system installed fonts.

            },
            '.invalid': {
              color: '#F44336'
            },
            ':focus': {
              color: '#ffffff'
            }
          }
        }
      }
    }, function (createErr, instance) {
      vm.$refs.submit.addEventListener('click', function () {
        // Run load button
        vm.button_loading = true;
        instance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
          if (requestPaymentMethodErr) {
            vm.error = requestPaymentMethodErr.message;
            vm.button_loading = false;
            return;
          } else {
            // Send request
            vm.error = '';
            console.log(payload);
            vm.PAY(payload.nonce, payload.details.cardType, payload.details.lastFour, payload.type);
          }
        });
      });
    });
  },
  methods: {
    PAY: function PAY(token, cardType, lastFour, type) {
      var _this2 = this;

      axios.post("/api/v1/register/payment", {
        token: token,
        plan: this.plan,
        card_type: cardType,
        last_four: lastFour,
        type: type
      }).then(function (res) {
        if (res.data.status === "success") {
          _this2.show = false;
          _this2.button_loading = false;
          _this2.email = res.data.email;
          _this2.name = res.data.name;
          _this2.trail_end = res.data.trail_end;
          _this2.card_number = res.data.card_number;
          _this2.card_brand = res.data.card_brand;
          _this2.finish = true;
          localStorage.removeItem("_plan");

          _this2.$auth.setUpdate(null, null, null, "confirm_step");
        }
      }, function (error) {
        if (error.response.status === 500) {
          _this2.error = error.response.data.message;
          _this2.button_loading = false;
        } else {
          _this2.button_loading = false;
        }
      });
    },
    LOG_OUT: function LOG_OUT() {
      this.$store.dispatch("LOGOUT_AUTH");
    },
    GO_HOME: function GO_HOME() {
      this.$router.go("/");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.braintree-option[data-v-745858c7] {\n    background-color: #03A9F4;\n    border-color: transparent;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_745858c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_745858c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_745858c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/payment.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/payment.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_vue_vue_type_template_id_745858c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.vue?vue&type=template&id=745858c7&scoped=true& */ "./resources/assets/js/users/views/default/auth/payment.vue?vue&type=template&id=745858c7&scoped=true&");
/* harmony import */ var _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.vue?vue&type=script&lang=js& */ "./resources/assets/js/users/views/default/auth/payment.vue?vue&type=script&lang=js&");
/* harmony import */ var _payment_vue_vue_type_style_index_0_id_745858c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css& */ "./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _payment_vue_vue_type_template_id_745858c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_vue_vue_type_template_id_745858c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "745858c7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/users/views/default/auth/payment.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/payment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/payment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_style_index_0_id_745858c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=style&index=0&id=745858c7&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/assets/js/users/views/default/auth/payment.vue?vue&type=template&id=745858c7&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/users/views/default/auth/payment.vue?vue&type=template&id=745858c7&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_745858c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_745858c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_vue_vue_type_template_id_745858c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment.vue?vue&type=template&id=745858c7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=template&id=745858c7&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=template&id=745858c7&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/users/views/default/auth/payment.vue?vue&type=template&id=745858c7&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    _vm.show
      ? _c("div", [
          _c("div", { staticClass: "float-right" }, [
            _c(
              "h2",
              {
                staticStyle: {
                  color: "#F44336",
                  cursor: "pointer",
                  position: "fixed",
                  top: "0",
                  right: "10px",
                  "z-index": "2"
                },
                on: {
                  click: function($event) {
                    return _vm.$auth.destroyToken()
                  }
                }
              },
              [_c("strong", [_vm._v(_vm._s(_vm.$t("nav.logout")))])]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 payment" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-12 col-md-8 col-lg-8 offset-md-2 p-4 payment-form"
              },
              [
                _c("div", { staticClass: "col-8 offset-2" }, [
                  _c("div", { staticClass: "steps hidden-xs-down" }, [
                    _c("div", { staticClass: "step-1" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("strong", [
                        _vm._v(_vm._s(_vm.$t("register.choose_plan")))
                      ]),
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
                      _c("strong", [
                        _vm._v(_vm._s(_vm.$t("register.signup")) + " ")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "line-2 active-line" }, [
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
                  _c("h3", [_vm._v(_vm._s(_vm.$t("register.payment_message")))])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "mb-5" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-secondary",
                      on: {
                        click: function($event) {
                          _vm.show_plan = !_vm.show_plan
                        }
                      }
                    },
                    [_vm._v("Change Plan")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-danger mt-2" }, [
                    _vm._v(_vm._s(_vm.plan_message))
                  ])
                ]),
                _vm._v(" "),
                _c("transition", { attrs: { name: "fade" } }, [
                  _vm.show_plan
                    ? _c(
                        "div",
                        { staticClass: "plan-form payment-plan-form " },
                        [
                          _c("h3", [_vm._v("Change plan")]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-12 text-center" }, [
                            _c(
                              "div",
                              { staticClass: "row m-2" },
                              _vm._l(_vm.planList, function(item, index) {
                                return _c(
                                  "div",
                                  {
                                    key: index,
                                    staticClass:
                                      "col-12 col-sm-6 col mt-3 text-center",
                                    on: {
                                      click: function($event) {
                                        _vm.plan = item.plan_id
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "card-plan",
                                        class: {
                                          active_plan: _vm.plan === item.plan_id
                                        }
                                      },
                                      [
                                        _c("h3", [
                                          _vm._v(_vm._s(item.plan_name))
                                        ]),
                                        _vm._v(" "),
                                        _c("h1", [
                                          _vm._v(
                                            "$" +
                                              _vm._s(item.plan_amount) +
                                              "\n                                            "
                                          ),
                                          _c("small", [_vm._v("/mo")])
                                        ]),
                                        _vm._v(" "),
                                        item.plan_trial !== null
                                          ? _c("i", [
                                              _vm._v(
                                                _vm._s(item.plan_trial) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.$t("register.day_free")
                                                  )
                                              )
                                            ])
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("hr")
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: " col-lg-10 offset-lg-1 " }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("small", [
                    _vm._v(_vm._s(_vm.$t("register.cancel_anytime")))
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("small", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.error))
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-12 col-xl-6 offset-xl-3 mt-5" },
                    [
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !_vm.button_loading && !_vm.button_disabled,
                              expression: "!button_loading && !button_disabled"
                            }
                          ],
                          ref: "submit",
                          staticClass: "btn btn-warning mt-4 pay-with-stripe"
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.$t("register.start_membership")) +
                              "\n                        "
                          )
                        ]
                      ),
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
                                " " +
                                  _vm._s(_vm.$t("register.loading")) +
                                  "\n                        "
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ])
              ],
              1
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.finish
      ? _c("div", [
          _c("div", { staticClass: "col-12 payment" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-12 col-md-8 col-lg-8 offset-md-2 p-4 payment-form"
              },
              [
                _c("h3", [
                  _vm._v(
                    _vm._s(_vm.$t("register.welcome_to")) +
                      " " +
                      _vm._s(_vm.$t("app_name"))
                  )
                ]),
                _vm._v(" "),
                _c("h5", [
                  _vm._v(
                    _vm._s(_vm.$t("register.your")) +
                      " " +
                      _vm._s(_vm.$t("app_name")) +
                      " " +
                      _vm._s(_vm.$t("register.message_one"))
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(_vm.$t("register.cancel_before")) +
                      " " +
                      _vm._s(_vm.trail_end) +
                      " " +
                      _vm._s(_vm.$t("register.message_two")) +
                      "."
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("h4", [_vm._v(_vm._s(_vm.$t("register.account_details")))]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _vm._v(
                      _vm._s(_vm.$t("setting.name")) + ": " + _vm._s(_vm.name)
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      _vm._s(_vm.$t("setting.mail")) + ": " + _vm._s(_vm.email)
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(
                      _vm._s(_vm.$t("register.payment_info")) +
                        ": ***********" +
                        _vm._s(_vm.card_number)
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-12 col-xl-6 offset-xl-3 mt-5" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-warning",
                      on: { click: _vm.GO_HOME }
                    },
                    [_vm._v(_vm._s(_vm.$t("register.finish")))]
                  )
                ])
              ]
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
    return _c("div", { staticClass: "circle-3 active-circle" }, [
      _c("span", [_vm._v("3")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "dropin-wrapper" } }, [
      _c("div", { attrs: { id: "checkout-message" } }),
      _vm._v(" "),
      _c("div", { attrs: { id: "dropin-container" } })
    ])
  }
]
render._withStripped = true



/***/ })

}]);