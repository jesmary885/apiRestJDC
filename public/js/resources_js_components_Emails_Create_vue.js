"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Emails_Create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Emails/Create.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Emails/Create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      email: {
        content: "",
        title: "",
        user_id: "",
        file: null
      },
      q: '',
      ent: [],
      selects: [],
      message: '',
      errors: [],
      users: [],
      include: ''
    };
  },
  mounted: function mounted() {
    this.listUsers();
  },
  watch: {
    q: function q(value) {
      var _this = this;

      this.axios.post('/api/emails', {
        q: value
      }).then(function (response) {
        _this.ent = response.data.ent;
        console.log(_this.selects);
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        console.log(error);
      });
    }
  },
  methods: {
    listUsers: function listUsers() {
      var _this2 = this;

      this.axios.post('/api/emails').then(function (response) {
        _this2.users = response.data.users;
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;
        console.log(error);
      });
    },
    create: function create() {
      var _this3 = this;

      //pass file
      var formData = new FormData();
      formData.append("content", this.email.content);
      formData.append("file", this.email.file);
      formData.append("title", this.email.title);
      formData.append("user_id", this.email.user_id);
      formData.append("send", "true");
      var json = JSON.stringify({
        entities: this.selects
      });
      formData.append('formData', json);
      this.axios.post('/api/emails', formData).then(function (response) {
        _this3.message = response.data.message;

        if (!_this3.message) {
          _this3.$router.push({
            name: "emails"
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addSelect: function addSelect(e) {
      var _this4 = this;

      var exists;
      this.selects.forEach(function (element) {
        if (element.id == e.id) {
          _this4.exists = 1;
        }
      });

      if (this.exists != 1) {
        this.selects.push(e);
      }
    },
    select_file: function select_file(e) {
      this.email.file = e.target.files[0];
    },
    remove: function remove(e) {
      var position = this.selects.indexOf(e);
      this.selects.splice(position, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Emails/Create.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Emails/Create.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_9d36d10e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=9d36d10e& */ "./resources/js/components/Emails/Create.vue?vue&type=template&id=9d36d10e&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Emails/Create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_9d36d10e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_9d36d10e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Emails/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Emails/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Emails/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Emails/Create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Emails/Create.vue?vue&type=template&id=9d36d10e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Emails/Create.vue?vue&type=template&id=9d36d10e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9d36d10e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9d36d10e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_9d36d10e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=9d36d10e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Emails/Create.vue?vue&type=template&id=9d36d10e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Emails/Create.vue?vue&type=template&id=9d36d10e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Emails/Create.vue?vue&type=template&id=9d36d10e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.message
      ? _c("div", { staticClass: "text-center p-2" }, [
          _c(
            "span",
            { staticClass: "text-gray-800 bg-gray-200 text-semibold" },
            [_vm._v(_vm._s(_vm.message))]
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "grid lg:grid-cols-3 gap-6" }, [
      _c("aside", { staticClass: "lg:col-span-2" }, [
        _c("div", { staticClass: "card w-full pt-0 mt-2" }, [
          _c("hr", { staticClass: "m-0 p-0" }),
          _vm._v(" "),
          _c("div", { staticClass: "card-body w-full m-0" }, [
            _c("div", { staticClass: " w-full" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.q,
                    expression: "q",
                  },
                ],
                staticClass:
                  "px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                attrs: { type: "text", placeholder: "Destinatarios" },
                domProps: { value: _vm.q },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.q = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "bg-white rounded-lg shadow-lg" }, [
              _vm.ent
                ? _c(
                    "div",
                    _vm._l(_vm.ent, function (e) {
                      return _c(
                        "div",
                        { key: e.id, staticClass: "px-4 py-3 space-y-1" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "ml-4 text-gray-700 cursor-pointer",
                              on: {
                                click: function ($event) {
                                  return _vm.addSelect(e)
                                },
                              },
                            },
                            [
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "text-lg font-semibold leading-5",
                                },
                                [_vm._v(_vm._s(e.name))]
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v("Email: " + _vm._s(e.email))]),
                            ]
                          ),
                        ]
                      )
                    }),
                    0
                  )
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    return _vm.create.apply(null, arguments)
                  },
                },
              },
              [
                _c("div", { staticClass: "w-full" }, [
                  _c("div", { staticClass: "w-full mt-2" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.email.user_id,
                            expression: "email.user_id",
                          },
                        ],
                        staticClass:
                          "block w-full bg-gray-100 border border-gray-200 text-gray-400 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                        attrs: { required: "" },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.email,
                              "user_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "", selected: "" } }, [
                          _vm._v("Remitente"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.users, function (user) {
                          return _c(
                            "option",
                            { key: user.id, domProps: { value: user.id } },
                            [_vm._v(_vm._s(user.name))]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.user_id
                      ? _c("span", { staticClass: "w-full text-red-500" }, [
                          _vm._v(_vm._s(_vm.errors.user_id)),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full mr-2 mt-2" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email.title,
                          expression: "email.title",
                        },
                      ],
                      staticClass:
                        "px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                      attrs: { type: "text", placeholder: "Asunto " },
                      domProps: { value: _vm.email.title },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.email, "title", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full" }, [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email.content,
                          expression: "email.content",
                        },
                      ],
                      staticClass:
                        "mt-2 resize-none rounded-md outline-none w-full px-2 appearance-none block bg-gray-100 text-gray-700 border border-gray-200 py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                      attrs: {
                        cols: "80",
                        rows: "2",
                        required: "",
                        placeholder: "Contenido",
                      },
                      domProps: { value: _vm.email.content },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.email, "content", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("span", { staticClass: "w-full text-red-500" }, [
                          _vm._v(_vm._s(_vm.errors.content)),
                        ])
                      : _vm._e(),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "w-full flex mr-2 mt-2" }, [
                    _c("input", {
                      staticClass:
                        "px-2 appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                      attrs: {
                        type: "file",
                        placeholder: "file ",
                        accept: "application/pdf",
                      },
                      on: { change: _vm.select_file },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "mb-0 pb-0" }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "py-12" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { to: { name: "emails" } },
                      },
                      [
                        _c("i", { staticClass: "fas fa-undo-alt" }),
                        _vm._v(" Regresar "),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card mt-2 lg:col-span-1" },
        [
          _c(
            "p",
            {
              staticClass:
                "text-md font-semibold text-gray-600 text-center p-2",
            },
            [_vm._v("Destinatarios seleccionados")]
          ),
          _vm._v(" "),
          _c("hr", { staticClass: "mb-2" }),
          _vm._v(" "),
          _vm._l(_vm.selects, function (select) {
            return _c(
              "div",
              {
                key: select.id,
                staticClass: "px-4 py-1 space-y-1 text-center",
              },
              [
                _c("div", { staticClass: "flex ml-4 text-gray-700" }, [
                  _c(
                    "p",
                    { staticClass: "font-semibold text-sm leading-5 mr-2" },
                    [_vm._v(_vm._s(select.name))]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v("Email: " + _vm._s(select.email)),
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      on: {
                        click: function ($event) {
                          return _vm.remove(select)
                        },
                      },
                    },
                    [
                      _c("i", {
                        staticClass:
                          "fas fa-times text-sm ml-2 text-red-600 cursor-pointer",
                      }),
                    ]
                  ),
                ]),
              ]
            )
          }),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c(
        "h1",
        { staticClass: "py-2 text-lg text-gray-600 ml-4 mt-1 font-semibold" },
        [_c("i", { staticClass: "fas fa-user-tie" }), _vm._v(" Nuevo email")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "btn btn-primary" }, [
      _c("i", { staticClass: "fas fa-file-download" }),
      _vm._v(" Enviar\r\n                            "),
    ])
  },
]
render._withStripped = true



/***/ })

}]);