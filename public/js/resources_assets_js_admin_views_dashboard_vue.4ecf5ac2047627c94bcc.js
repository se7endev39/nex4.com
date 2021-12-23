"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_assets_js_admin_views_dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _charts_users_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/users.js */ "./resources/assets/js/admin/views/charts/users.js");
/* harmony import */ var _charts_regions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts/regions.js */ "./resources/assets/js/admin/views/charts/regions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    "users-day-chart": _charts_users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "users-month-chart": _charts_users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "users-year-chart": _charts_users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "top-day-chart": _charts_users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "top-month-chart": _charts_users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    "top-year-chart": _charts_users_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    'regions': _charts_regions_js__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      show_alert_services: false,
      show_chart: true,
      chart_type: 1,
      users_analysis_active: "day",
      top_analysis_active: "day",
      total: null,
      top_all_time: [],
      activeUserDay: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Active Daily",
          yAxisID: "Active",
          backgroundColor: "rgba(3, 169, 244, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      inactiveUserDay: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Inactive Daily",
          yAxisID: "Active",
          backgroundColor: "rgba(233, 30, 99, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      activeUserMonth: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Active Monthly",
          yAxisID: "Active",
          backgroundColor: "rgba(3, 169, 244, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      inactiveUserMonth: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Inactive Monthly",
          yAxisID: "Active",
          backgroundColor: "rgba(233, 30, 99, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      activeUserYear: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Active Yearly",
          yAxisID: "Active",
          backgroundColor: "rgba(3, 169, 244, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      inactiveUserYear: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Inactive Yearly",
          yAxisID: "Active",
          backgroundColor: "rgba(233, 30, 99, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      topDay: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Top Day",
          yAxisID: "Active",
          backgroundColor: "rgba(233, 30, 99, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      topMonth: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Top Month",
          yAxisID: "Active",
          backgroundColor: "rgba(3, 169, 244, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      topYear: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Top Year",
          yAxisID: "Active",
          backgroundColor: "rgba(233, 30, 99, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      regions: {
        perecent: {},
        all: 0,
        labels: [],
        datasets: [{
          label: "Users",
          yAxisID: "Active",
          backgroundColor: "rgba(233, 30, 99, 0.7)",
          pointBackgroundColor: "#818181",
          borderWidth: 1,
          borderColor: "#818181",
          pointBorderColor: "#fff",
          //Data to be represented on y-axis
          data: []
        }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            id: "Active",
            type: "linear",
            position: "left",
            ticks: {
              beginAtZero: false,
              display: false
            },
            gridLines: {
              display: false
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          zAxes: [{
            ticks: {
              display: false
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/admin/get/dashboard/analysis").then(function (response) {
      if (response.status === 200) {
        // Active and Inactivity User
        // Day
        for (var index = 0; index < response.data.data.users.day.length; index++) {
          if (response.data.data.users.day[index].type === "active") {
            //Active
            _this.activeUserDay.labels.push(response.data.data.users.day[index].hour);

            _this.activeUserDay.datasets[0].data.push(response.data.data.users.day[index].number);
          } else {
            //Inactive
            _this.inactiveUserDay.labels.push(response.data.data.users.day[index].hour);

            _this.inactiveUserDay.datasets[0].data.push(response.data.data.users.day[index].number);
          }
        } //Month


        for (var _index = 0; _index < response.data.data.users.month.length; _index++) {
          if (response.data.data.users.month[_index].type === "active") {
            //Active
            _this.activeUserMonth.labels.push(response.data.data.users.month[_index].month);

            _this.activeUserMonth.datasets[0].data.push(response.data.data.users.month[_index].number);
          } else {
            //Inactive
            _this.inactiveUserMonth.labels.push(response.data.data.users.month[_index].month);

            _this.inactiveUserMonth.datasets[0].data.push(response.data.data.users.month[_index].number);
          }
        } //Year


        for (var _index2 = 0; _index2 < response.data.data.users.year.length; _index2++) {
          if (response.data.data.users.year[_index2].type === "active") {
            //Active
            _this.activeUserYear.labels.push(response.data.data.users.year[_index2].year);

            _this.activeUserYear.datasets[0].data.push(response.data.data.users.year[_index2].number);
          } else {
            //Inactive
            _this.inactiveUserYear.labels.push(response.data.data.users.year[_index2].year);

            _this.inactiveUserYear.datasets[0].data.push(response.data.data.users.year[_index2].number);
          }
        } // Top movie and series
        // Day


        for (var _index3 = 0; _index3 < response.data.data.top.day.length; _index3++) {
          _this.topDay.labels.push(response.data.data.top.day[_index3].name);

          _this.topDay.datasets[0].data.push(response.data.data.top.day[_index3].count);
        } //Month


        for (var _index4 = 0; _index4 < response.data.data.top.month.length; _index4++) {
          _this.topMonth.labels.push(response.data.data.top.month[_index4].name);

          _this.topMonth.datasets[0].data.push(response.data.data.top.month[_index4].count);
        } //Year


        for (var _index5 = 0; _index5 < response.data.data.top.year.length; _index5++) {
          _this.topYear.labels.push(response.data.data.top.year[_index5].name);

          _this.topYear.datasets[0].data.push(response.data.data.top.year[_index5].count);
        } // Regions


        for (var _index6 = 0; _index6 < response.data.data.regions.length; _index6++) {
          _this.regions.labels.push(response.data.data.regions[_index6].country);

          _this.regions.datasets[0].data.push(response.data.data.regions[_index6].number);
        }

        _this.total = response.data.data.count;
        _this.top_all_time = response.data.data.top_all_time;
      }
    });
  },
  methods: {}
});

/***/ }),

/***/ "./resources/assets/js/admin/views/charts/users.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/admin/views/charts/users.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");
//Importing Line class from the vue-chartjs wrapper
 //Exporting this so it can be used in other components

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__.Line,
  props: ['data', 'options'],
  mounted: function mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./resources/assets/js/admin/views/dashboard.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/admin/views/dashboard.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_497e3931___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=497e3931& */ "./resources/assets/js/admin/views/dashboard.vue?vue&type=template&id=497e3931&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_497e3931___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_497e3931___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/dashboard.vue?vue&type=template&id=497e3931&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/dashboard.vue?vue&type=template&id=497e3931& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_497e3931___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_497e3931___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_497e3931___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=497e3931& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/dashboard.vue?vue&type=template&id=497e3931&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/dashboard.vue?vue&type=template&id=497e3931&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/admin/views/dashboard.vue?vue&type=template&id=497e3931& ***!
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
    _c("div", { staticClass: "dashboard" }, [
      _vm.show_alert_services
        ? _c(
            "div",
            { staticClass: "alert alert-warning", attrs: { role: "alert" } },
            [
              _vm._v(
                "\n            You have some problem, Please check it from here\n        "
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.chart_type === 1
        ? _c("div", { staticClass: "white users-chart" }, [
            _c("h5", { staticClass: "title p-2" }, [_vm._v("Dashboard")]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "button-section mt-3 ml-5" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 1 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 1
                        }
                      }
                    },
                    [_vm._v("Users\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 2 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 2
                        }
                      }
                    },
                    [_vm._v("Top\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 3 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 3
                        }
                      }
                    },
                    [_vm._v("Regions\n                        ")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "div",
                  { staticClass: "button-section float-right mt-3 ml-5" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning ml-1",
                        class: { active: _vm.users_analysis_active === "day" },
                        on: {
                          click: function($event) {
                            _vm.users_analysis_active = "day"
                          }
                        }
                      },
                      [_vm._v("DAY\n                        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning ml-1",
                        class: {
                          active: _vm.users_analysis_active === "month"
                        },
                        on: {
                          click: function($event) {
                            _vm.users_analysis_active = "month"
                          }
                        }
                      },
                      [_vm._v("MONTH\n                        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning ml-1",
                        class: { active: _vm.users_analysis_active === "year" },
                        on: {
                          click: function($event) {
                            _vm.users_analysis_active = "year"
                          }
                        }
                      },
                      [_vm._v("YEAR\n                        ")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _vm.chart_type === 1 && _vm.users_analysis_active == "day"
              ? _c("div", { staticClass: "col-12 row" }, [
                  _c("div", { staticClass: "col-12 col-sm-6 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("Active User")
                        ]),
                        _vm._v(" "),
                        _c("users-day-chart", {
                          attrs: {
                            data: _vm.activeUserDay,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-sm-6 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("Inactive User")
                        ]),
                        _vm._v(" "),
                        _c("users-day-chart", {
                          attrs: {
                            data: _vm.inactiveUserDay,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.chart_type === 1 && _vm.users_analysis_active == "month"
              ? _c("div", { staticClass: "col-12 row" }, [
                  _c("div", { staticClass: "col-12 col-sm-6 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("Active User")
                        ]),
                        _vm._v(" "),
                        _c("users-month-chart", {
                          attrs: {
                            data: _vm.activeUserMonth,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-sm-6 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("Inactive User")
                        ]),
                        _vm._v(" "),
                        _c("users-month-chart", {
                          attrs: {
                            data: _vm.inactiveUserMonth,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.chart_type === 1 && _vm.users_analysis_active == "year"
              ? _c("div", { staticClass: "col-12 row" }, [
                  _c("div", { staticClass: "col-12 col-sm-6 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("Active User")
                        ]),
                        _vm._v(" "),
                        _c("users-year-chart", {
                          attrs: {
                            data: _vm.activeUserYear,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-sm-6 col-lg-6" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("Inactive User")
                        ]),
                        _vm._v(" "),
                        _c("users-year-chart", {
                          attrs: {
                            data: _vm.inactiveUserYear,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.chart_type === 2
        ? _c("div", { staticClass: "white top-chart" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "button-section mt-3 ml-5" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 1 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 1
                        }
                      }
                    },
                    [_vm._v("Users\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 2 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 2
                        }
                      }
                    },
                    [_vm._v("Top\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 3 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 3
                        }
                      }
                    },
                    [_vm._v("Regions\n                        ")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "div",
                  { staticClass: "button-section float-right mt-3 ml-5" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning ml-1",
                        class: { active: _vm.top_analysis_active === "day" },
                        on: {
                          click: function($event) {
                            _vm.top_analysis_active = "day"
                          }
                        }
                      },
                      [_vm._v("DAY\n                        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning ml-1",
                        class: { active: _vm.top_analysis_active === "month" },
                        on: {
                          click: function($event) {
                            _vm.top_analysis_active = "month"
                          }
                        }
                      },
                      [_vm._v("MONTH\n                        ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning ml-1",
                        class: { active: _vm.top_analysis_active === "year" },
                        on: {
                          click: function($event) {
                            _vm.top_analysis_active = "year"
                          }
                        }
                      },
                      [_vm._v("YEAR\n                        ")]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _vm.chart_type === 2 && _vm.top_analysis_active == "day"
              ? _c("div", { staticClass: "col-12 row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("MOST WATCH MOVIES AND EPISODE (Hourly)")
                        ]),
                        _vm._v(" "),
                        _c("top-day-chart", {
                          attrs: {
                            data: _vm.topDay,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.chart_type === 2 && _vm.top_analysis_active == "month"
              ? _c("div", { staticClass: "col-12 row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("MOST WATCH MOVIES AND EPISODE (Monthly)")
                        ]),
                        _vm._v(" "),
                        _c("top-month-chart", {
                          attrs: {
                            data: _vm.topMonth,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.chart_type === 2 && _vm.top_analysis_active == "year"
              ? _c("div", { staticClass: "col-12 row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "div",
                      { staticClass: "col-12 m-2 details" },
                      [
                        _c("span", { staticClass: "header" }, [
                          _vm._v("MOST WATCH MOVIES AND EPISODE (Yearly)")
                        ]),
                        _vm._v(" "),
                        _c("users-year-chart", {
                          attrs: {
                            data: _vm.topYear,
                            options: _vm.options,
                            height: 150
                          }
                        })
                      ],
                      1
                    )
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.chart_type === 3
        ? _c("div", { staticClass: "white col-12 " }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-6" }, [
                _c("div", { staticClass: "button-section mt-3 ml-5" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 1 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 1
                        }
                      }
                    },
                    [_vm._v("Users\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 2 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 2
                        }
                      }
                    },
                    [_vm._v("Top\n                        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-warning ml-1",
                      class: { active: _vm.chart_type === 3 },
                      on: {
                        click: function($event) {
                          _vm.chart_type = 3
                        }
                      }
                    },
                    [_vm._v("Regions\n                        ")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                { staticClass: "col-12 m-2 details" },
                [
                  _c("span", { staticClass: "header" }, [
                    _vm._v("Regions Users")
                  ]),
                  _vm._v(" "),
                  _c("regions", {
                    attrs: {
                      data: _vm.regions,
                      options: _vm.options,
                      height: 150
                    }
                  })
                ],
                1
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.total != null
        ? _c("div", { staticClass: "crms text-center offset-1 p-2" }, [
            _c("div", { staticClass: "col-12 row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-sm-6 col-md-3 col-lg-2 mt-2 m-md-2 white card"
                },
                [
                  _c("div", { staticClass: "details" }, [
                    _c("img", {
                      attrs: {
                        src: "/themes/default/img/admin/report.svg",
                        alt: "report",
                        width: "60px"
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "reports" }, [
                      _vm._v(_vm._s(_vm.total.reports))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header" }, [_vm._v("Reports")])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-sm-6 col-md-3 col-lg-2 mt-2 m-md-2 white card"
                },
                [
                  _c("div", { staticClass: "details" }, [
                    _c("img", {
                      attrs: {
                        src: "/themes/default/img/admin/movie.svg",
                        alt: "report",
                        width: "60px"
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "movies" }, [
                      _vm._v(_vm._s(_vm.total.movies))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header" }, [_vm._v("Movies")])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-sm-6 col-md-3 col-lg-2 mt-2 m-md-2 white card"
                },
                [
                  _c("div", { staticClass: "details" }, [
                    _c("img", {
                      attrs: {
                        src: "/themes/default/img/admin/series.svg",
                        alt: "series",
                        width: "60px"
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "series" }, [
                      _vm._v(_vm._s(_vm.total.series))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header" }, [_vm._v("Series")])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-sm-6 col-md-3 col-lg-2 mt-2 m-md-2 white card"
                },
                [
                  _c("div", { staticClass: "details" }, [
                    _c("img", {
                      attrs: {
                        src: "/themes/default/img/admin/tv.svg",
                        alt: "tv",
                        width: "60px"
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "episode" }, [
                      _vm._v(_vm._s(_vm.total.tvs))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header" }, [
                      _vm._v("Live Streaming")
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 col-sm-6 col-md-3 col-lg-2 mt-2 m-md-2 white card"
                },
                [
                  _c("div", { staticClass: "details" }, [
                    _c("img", {
                      attrs: {
                        src: "/themes/default/img/admin/users.svg",
                        alt: "tv",
                        width: "60px"
                      }
                    }),
                    _vm._v(" "),
                    _c("h4", { staticClass: "users" }, [
                      _vm._v(_vm._s(_vm.total.users))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header" }, [_vm._v("Users")])
                  ])
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 offset-1 top" }, [
        _c("div", { staticClass: "row" }, [
          _vm.top_all_time.users !== []
            ? _c("div", { staticClass: "col-12 col-md-3 white m-2" }, [
                _c("b", { staticClass: "title ml-3" }, [_vm._v("Top users")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-group mt-2" },
                  _vm._l(_vm.top_all_time.users, function(item, index) {
                    return item.name !== null
                      ? _c(
                          "li",
                          {
                            key: index,
                            staticClass:
                              "list-group-item d-flex justify-content-between align-items-center"
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.name) +
                                "\n                            "
                            ),
                            _c("span", { staticClass: "count" }, [
                              _vm._v(_vm._s(item.user_count))
                            ])
                          ]
                        )
                      : _vm._e()
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.top_all_time.movies !== []
            ? _c("div", { staticClass: "col-12 col-md-3 white m-2" }, [
                _c("b", { staticClass: "title ml-3" }, [_vm._v("Top movies")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-group mt-2" },
                  _vm._l(_vm.top_all_time.movies, function(item, index) {
                    return item.m_name !== null
                      ? _c(
                          "li",
                          {
                            key: index,
                            staticClass:
                              "list-group-item d-flex justify-content-between align-items-center"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "analysis-movie",
                                    params: { id: item.m_id }
                                  }
                                }
                              },
                              [_vm._v(" " + _vm._s(item.m_name) + " ")]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "count" }, [
                              _vm._v(_vm._s(item.movie_count))
                            ])
                          ],
                          1
                        )
                      : _vm._e()
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.top_all_time.series !== []
            ? _c("div", { staticClass: "col-12 col-md-4 white m-2" }, [
                _c("b", { staticClass: "title ml-3" }, [_vm._v("Top series")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-group mt-2" },
                  _vm._l(_vm.top_all_time.series, function(item, index) {
                    return item.t_name !== null
                      ? _c(
                          "li",
                          {
                            key: index,
                            staticClass:
                              "list-group-item d-flex justify-content-between align-items-center"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "analysis-series",
                                    params: { id: item.t_id }
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  " " +
                                    _vm._s(item.t_name) +
                                    "                       \n                            (" +
                                    _vm._s(item.name) +
                                    ") "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "count" }, [
                              _vm._v(_vm._s(item.series_count))
                            ])
                          ],
                          1
                        )
                      : _vm._e()
                  }),
                  0
                )
              ])
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);