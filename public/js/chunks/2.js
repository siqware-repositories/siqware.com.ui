(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/AgrideComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/AgrideComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/extraComponents/agGridStyleOverride.scss */ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//ag-grid


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AgridComponent",
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"]
  },
  data: function data() {
    return {
      selected: [],
      gridApi: null,
      columnDefs: [{
        headerName: 'Make',
        field: 'make',
        checkboxSelection: true
      }, {
        headerName: 'Model',
        field: 'model',
        cellRenderer: function cellRenderer(params) {
          return '<img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="100%" alt="">';
        }
      }, {
        headerName: 'Price',
        field: 'price'
      }],
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true
      },
      rowData: [{
        make: 'Toyota',
        model: 'Celica',
        price: 35000
      }, {
        make: 'Ford',
        model: 'Mondeo',
        price: 32000
      }, {
        make: 'Porsche',
        model: 'Boxter',
        price: 72000
      }]
    };
  },
  methods: {
    onGridReady: function onGridReady(params) {
      this.gridApi = params.api;
    },
    onSelectionChanged: function onSelectionChanged() {
      this.selected = this.gridApi.getSelectedRows();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CommonCode.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/CommonCode.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CommonCode",
  data: function data() {
    return {
      image: 'images/placeholder/placeholder.png',
      //dropzone option
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      }
    };
  },
  methods: {
    //image upload
    successUpload: function successUpload(file, res) {
      this.image = res.path;
    },
    //edit thumb
    editThumb: function editThumb() {
      this.$refs.image3.manuallyAddFile({
        size: 123
      }, this.image);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CurrencyFormatter"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DateRangePicker.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "RangeDatePicker",
  data: function data() {
    return {
      date: "".concat(this.moment().format('YYYY/MM/DD'), "-").concat(this.moment().endOf('month').add(1, 'month').format('YYYY/MM/DD'))
    };
  },
  methods: {
    date_range: function date_range(date) {
      this.date = "".concat(this.moment(date.from).format('YYYY/MM/DD'), "-").concat(this.moment(date.to).format('YYYY/MM/DD'));
      this.$refs.modal.close();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DropZone.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/DropZone.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//dropzone


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DropZone",
  components: {
    'vueDropzone': vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      image: 'images/placeholder/placeholder.png',
      //dropzone option
      dropzoneOptions: {
        url: route('file.upload.thumb'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",
        thumbnailWidth: 150,
        thumbnailHeight: 150
      }
    };
  },
  methods: {
    //image upload
    successUpload: function successUpload(file, res) {
      this.image = res.path;
    },
    //edit thumb
    editThumb: function editThumb() {
      this.$refs.image3.manuallyAddFile({
        size: 123
      }, this.image);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/FormValidation.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/FormValidation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FormValidation",
  data: function data() {
    return {
      input: ''
    };
  },
  methods: {
    //form submit
    //store
    formSubmit: function formSubmit() {
      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.notify({
            time: 4000,
            title: 'ប្រតិបត្តិការជោគជ័យ',
            text: 'ទិន្នន័យបានបន្ថែម',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check',
            position: 'top-center'
          });
        } else {
          self.$vs.notify({
            title: 'ប្រតិបត្តិការបរាជ័យ',
            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-message-square',
            position: 'top-center'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Helper.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Helper.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Moment */ "./resources/js/src/views/helper/Moment.vue");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./resources/js/src/views/helper/Modal.vue");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Select */ "./resources/js/src/views/helper/Select.vue");
/* harmony import */ var _CurrencyFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurrencyFormatter */ "./resources/js/src/views/helper/CurrencyFormatter.vue");
/* harmony import */ var _DateRangePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateRangePicker */ "./resources/js/src/views/helper/DateRangePicker.vue");
/* harmony import */ var _PrintJS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PrintJS */ "./resources/js/src/views/helper/PrintJS.vue");
/* harmony import */ var _FormValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormValidation */ "./resources/js/src/views/helper/FormValidation.vue");
/* harmony import */ var _VuexModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VuexModule */ "./resources/js/src/views/helper/VuexModule.vue");
/* harmony import */ var _DropZone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DropZone */ "./resources/js/src/views/helper/DropZone.vue");
/* harmony import */ var _CommonCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommonCode */ "./resources/js/src/views/helper/CommonCode.vue");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Table */ "./resources/js/src/views/helper/Table.vue");
/* harmony import */ var _AgrideComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AgrideComponent */ "./resources/js/src/views/helper/AgrideComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Helper",
  components: {
    AgridComponent: _AgrideComponent__WEBPACK_IMPORTED_MODULE_11__["default"],
    TableComponent: _Table__WEBPACK_IMPORTED_MODULE_10__["default"],
    CommonCode: _CommonCode__WEBPACK_IMPORTED_MODULE_9__["default"],
    DropZone: _DropZone__WEBPACK_IMPORTED_MODULE_8__["default"],
    VuexModule: _VuexModule__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormValidation: _FormValidation__WEBPACK_IMPORTED_MODULE_6__["default"],
    PrintJs: _PrintJS__WEBPACK_IMPORTED_MODULE_5__["default"],
    RangeDatePicker: _DateRangePicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    CurrencyFormatter: _CurrencyFormatter__WEBPACK_IMPORTED_MODULE_3__["default"],
    VueSelect: _Select__WEBPACK_IMPORTED_MODULE_2__["default"],
    Modal: _Modal__WEBPACK_IMPORTED_MODULE_1__["default"],
    Moment: _Moment__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Modal.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Modal.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Modal",
  data: function data() {
    return {
      data: 'working fine'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Moment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Moment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Moment",
  data: function data() {
    return {
      data: 'working fine'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/PrintJS.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/PrintJS.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PrintJs",
  methods: {
    //print
    _print: function () {
      var _print2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var el, options;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                el = document.querySelector('#printMe');
                options = {
                  type: 'dataURL'
                };
                _context.next = 4;
                return this.$html2canvas(el, options);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _print() {
        return _print2.apply(this, arguments);
      }

      return _print;
    }(),
    printHtml: function () {
      var _printHtml = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var image;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._print();

              case 2:
                image = _context2.sent;
                print_js__WEBPACK_IMPORTED_MODULE_1___default()(image, 'image');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function printHtml() {
        return _printHtml.apply(this, arguments);
      }

      return printHtml;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Select.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Select.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VueSelect",
  data: function data() {
    return {
      selected: null,
      options: [{
        id: 1,
        title: 'Read the Docs',
        icon: 'fa-book',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }, {
        id: 2,
        title: 'View on GitHub',
        icon: 'fa-github',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }, {
        id: 3,
        title: 'View on NPM',
        icon: 'fa-database',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }, {
        id: 4,
        title: 'View Codepen Examples',
        icon: 'fa-pencil',
        url: 'https://codeclimate.com/github/sagalbot/vue-select'
      }]
    };
  },
  computed: {
    new_options: function new_options() {
      return this.options.map(function (x) {
        return {
          id: x.id,
          label_data: "".concat(x.title, "-").concat(x.url)
        };
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Table.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Table.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TableComponent",
  data: function data() {
    return {
      selected: [],
      users: [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org"
      }, {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/VuexModule.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/VuexModule.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VuexModule",
  data: function data() {
    return {
      data: 'working fine'
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n/*=========================================================================================\n    File Name: agGridStyleOverride.scss\n    Description: Override ag-grid table style/SASS vars\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/**\n ****************************\n * Generic Styles\n ****************************\n*/\n\nag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {\n  display: block;\n}\n\n.ag-hidden {\n  display: none !important;\n}\n\n.ag-invisible {\n  visibility: hidden !important;\n}\n\n.ag-faded {\n  opacity: 0.3;\n}\n\n.ag-width-half {\n  display: inline-block;\n  width: 50% !important;\n}\n\n.ag-unselectable {\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n.ag-selectable {\n  -webkit-user-select: text !important;\n     -moz-user-select: text !important;\n      -ms-user-select: text !important;\n          user-select: text !important;\n}\n\n.ag-select-agg-func-popup {\n  position: absolute;\n}\n\n.ag-input-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: normal;\n  position: relative;\n  overflow: hidden;\n}\n\n[dir=ltr] .ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name:  ag-shake-left-to-right-ltr ;\n          animation-name:  ag-shake-left-to-right-ltr ;\n}\n\n[dir=rtl] .ag-shake-left-to-right {\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name:  ag-shake-left-to-right-rtl ;\n          animation-name:  ag-shake-left-to-right-rtl ;\n}\n\n@-webkit-keyframes ag-shake-left-to-right-ltr {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right-ltr {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@-webkit-keyframes ag-shake-left-to-right-rtl {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n@keyframes ag-shake-left-to-right-rtl {\n  from {\n    padding-left: 6px;\n    padding-right: 2px;\n  }\n\n  to {\n    padding-left: 2px;\n    padding-right: 6px;\n  }\n}\n\n.ag-root-wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-root-wrapper.ag-layout-normal {\n  height: 100%;\n}\n\n.ag-root-wrapper .ag-watermark {\n  position: absolute;\n  bottom: 10px;\n  opacity: 0.5;\n  -webkit-transition: opacity 1s ease-out 3s;\n  transition: opacity 1s ease-out 3s;\n}\n\n[dir=ltr] .ag-root-wrapper .ag-watermark {\n  right: 25px;\n}\n\n[dir=rtl] .ag-root-wrapper .ag-watermark {\n  left: 25px;\n}\n\n.ag-root-wrapper .ag-watermark:before {\n  content: \"\";\n  -webkit-filter: invert(50%);\n          filter: invert(50%);\n  display: block;\n  height: 60px;\n  width: 110px;\n}\n\n[dir] .ag-root-wrapper .ag-watermark:before {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\n  background-repeat: no-repeat;\n  background-size: 110px 60px;\n}\n\n.ag-root-wrapper .ag-watermark .ag-watermark-text {\n  opacity: 0.5;\n  font-weight: bold;\n  font-family: Impact;\n  font-size: 19px;\n}\n\n.ag-root-wrapper-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.ag-root-wrapper-body.ag-layout-normal {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  height: 0;\n  min-height: 0;\n}\n\n.ag-root {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[dir] .ag-root {\n  cursor: default;\n}\n\n.ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 0;\n}\n\n.ag-root.ag-layout-normal {\n  height: 100%;\n}\n\n/**\n ****************************\n * Viewports\n ****************************\n*/\n\n.ag-header-viewport,\n.ag-floating-top-viewport,\n.ag-body-viewport,\n.ag-pinned-left-cols-viewport,\n.ag-center-cols-viewport,\n.ag-pinned-right-cols-viewport,\n.ag-floating-bottom-viewport,\n.ag-body-horizontal-scroll-viewport,\n.ag-virtual-list-viewport {\n  position: relative;\n  height: 100%;\n  min-width: 0px;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-body-viewport {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-body-viewport.ag-layout-normal {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll {\n  overflow-y: scroll;\n}\n\n.ag-pinned-left-cols-viewport, .ag-pinned-right-cols-viewport {\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-center-cols-viewport {\n  width: 100%;\n  overflow-x: auto;\n}\n\n.ag-body-horizontal-scroll-viewport {\n  overflow-x: scroll;\n}\n\n.ag-virtual-list-viewport {\n  overflow: auto;\n  width: 100%;\n}\n\n/**\n ****************************\n * Containers\n ****************************\n*/\n\n.ag-header-container,\n.ag-floating-top-container,\n.ag-body-container,\n.ag-pinned-right-cols-container,\n.ag-center-cols-container,\n.ag-pinned-left-cols-container,\n.ag-floating-bottom-container,\n.ag-body-horizontal-scroll-container,\n.ag-full-width-container,\n.ag-floating-bottom-full-width-container,\n.ag-virtual-list-container {\n  position: relative;\n}\n\n.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {\n  height: 100%;\n  white-space: nowrap;\n}\n\n.ag-body-viewport .ag-center-cols-clipper {\n  min-height: 100%;\n}\n\n.ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper, .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container {\n  min-height: 50px;\n}\n\n.ag-body-viewport .ag-center-cols-container {\n  display: block;\n}\n\n.ag-body-viewport.ag-layout-print {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-body-viewport.ag-layout-print .ag-center-cols-clipper {\n  min-width: 100%;\n}\n\n.ag-pinned-right-cols-container {\n  display: block;\n}\n\n.ag-body-horizontal-scroll-container {\n  height: 100%;\n}\n\n.ag-full-width-container,\n.ag-floating-top-full-width-container,\n.ag-floating-bottom-full-width-container {\n  position: absolute;\n  top: 0px;\n  pointer-events: none;\n}\n\n[dir=ltr] .ag-full-width-container, [dir=ltr] .ag-floating-top-full-width-container, [dir=ltr] .ag-floating-bottom-full-width-container {\n  left: 0px;\n}\n\n[dir=rtl] .ag-full-width-container, [dir=rtl] .ag-floating-top-full-width-container, [dir=rtl] .ag-floating-bottom-full-width-container {\n  right: 0px;\n}\n\n.ag-full-width-container {\n  width: 100%;\n}\n\n.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {\n  display: inline-block;\n  overflow: hidden;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-virtual-list-container {\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Scrollers\n ****************************\n*/\n\n.ag-center-cols-clipper {\n  -webkit-box-flex: 1;\n          flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n\n.ag-body-horizontal-scroll {\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n\n.ag-layout-print .ag-body-horizontal-scroll {\n  display: none;\n}\n\n.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {\n  height: 100%;\n  min-width: 0;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n  overflow-x: scroll;\n}\n\n.ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {\n  overflow-x: hidden;\n}\n\n/**\n ****************************\n * Headers\n ****************************\n*/\n\n.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {\n  display: inline-block;\n  overflow: hidden;\n}\n\n[dir] .ag-header .ag-header-cell-sortable, [dir] .ag-pinned-left-header .ag-header-cell-sortable, [dir] .ag-pinned-right-header .ag-header-cell-sortable {\n  cursor: pointer;\n}\n\n.ag-header {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  white-space: nowrap;\n}\n\n.ag-header-icon {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-pinned-left-header {\n  height: 100%;\n}\n\n.ag-pinned-right-header {\n  height: 100%;\n}\n\n.ag-header-row {\n  position: absolute;\n  overflow: hidden;\n}\n\n.ag-header-overlay {\n  display: block;\n  position: absolute;\n}\n\n.ag-header-cell {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  height: 100%;\n  overflow: hidden;\n}\n\n.ag-header-group-cell-label, .ag-header-cell-label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n  -webkit-box-align: center;\n          align-items: center;\n  text-overflow: ellipsis;\n  align-self: stretch;\n}\n\n.ag-header-cell-label .ag-header-cell-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-numeric-header .ag-header-cell-label {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.ag-header-group-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-header-cell-resize {\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  width: 4px;\n}\n\n[dir=ltr] .ag-header-expand-icon {\n  padding-left: 4px;\n}\n\n[dir=rtl] .ag-header-expand-icon {\n  padding-right: 4px;\n}\n\n.ag-header-select-all {\n  display: -webkit-box;\n  display: flex;\n}\n\n/**\n ****************************\n * Columns\n ****************************\n*/\n\n[dir=ltr] .ag-column-moving .ag-cell {\n  -webkit-transition: left 0.2s;\n  transition: left 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-cell {\n  -webkit-transition: right 0.2s;\n  transition: right 0.2s;\n}\n\n[dir=ltr] .ag-column-moving .ag-header-cell {\n  -webkit-transition: left 0.2s;\n  transition: left 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-header-cell {\n  -webkit-transition: right 0.2s;\n  transition: right 0.2s;\n}\n\n[dir=ltr] .ag-column-moving .ag-header-group-cell {\n  -webkit-transition: left 0.2s, width 0.2s;\n  transition: left 0.2s, width 0.2s;\n}\n\n[dir=rtl] .ag-column-moving .ag-header-group-cell {\n  -webkit-transition: right 0.2s, width 0.2s;\n  transition: right 0.2s, width 0.2s;\n}\n\n/**\n ****************************\n * Column Panel\n ****************************\n*/\n\n.ag-column-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-column-select-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  -webkit-box-flex: 4;\n          flex-grow: 4;\n  flex-shrink: 1;\n  flex-basis: 0;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-column-name-filter {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper input {\n  width: 100%;\n}\n\n.ag-column-select-panel .ag-primary-cols-list-panel {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: auto;\n}\n\n.ag-column-drop {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: auto;\n  width: 100%;\n}\n\n.ag-column-drop .ag-column-drop-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-column-drop .ag-column-drop-list .ag-column-drop-cell .ag-column-drop-cell-text {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-drop.ag-column-drop-vertical {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1 1 0;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n.ag-column-drop.ag-column-drop-vertical > div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-list {\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow-x: auto;\n}\n\n.ag-column-drop.ag-column-drop-vertical .ag-column-drop-empty-message {\n  display: block;\n}\n\n.ag-column-drop.ag-column-drop-horizontal {\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n/**\n ****************************\n * Rows\n ****************************\n*/\n\n.ag-row-animation .ag-row {\n  -webkit-transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n  transition: top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s;\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s;\n}\n\n.ag-row-no-animation .ag-row {\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n\n.ag-row {\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-row-position-absolute {\n  position: absolute;\n}\n\n.ag-row-position-relative {\n  position: relative;\n}\n\n.ag-full-width-row {\n  overflow: hidden;\n  pointer-events: all;\n}\n\n.ag-row-inline-editing {\n  z-index: 1;\n}\n\n.ag-row-dragging {\n  z-index: 2;\n}\n\n.ag-stub-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n/**\n ****************************\n * Cells\n ****************************\n*/\n\n.ag-cell {\n  display: inline-block;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-cell-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-cell-wrapper.ag-row-group {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.ag-cell-wrapper .ag-cell-value, .ag-cell-wrapper .ag-group-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-full-width-row.ag-row-group .ag-cell-wrapper {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-cell-with-height {\n  height: 100%;\n}\n\n.ag-group-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-footer-cell-entire-row {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.ag-cell-inline-editing {\n  z-index: 1;\n}\n\n.ag-cell-inline-editing .ag-cell-edit-input, .ag-cell-inline-editing .ag-input-wrapper {\n  height: 100%;\n  width: 100%;\n  line-height: normal;\n}\n\n/**\n ****************************\n * Filters\n ****************************\n*/\n\n.ag-set-filter-item {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-set-filter-item > div, .ag-set-filter-item > span {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-filter .ag-filter-checkbox {\n  pointer-events: none;\n}\n\n.ag-filter .ag-filter-body-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.ag-filter .ag-filter-filter {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n/**\n ****************************\n * Floating Filter\n ****************************\n*/\n\n.ag-floating-filter-full-body .ag-react-container, .ag-floating-filter-body .ag-react-container {\n  height: 100%;\n}\n\n.ag-floating-filter-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-floating-filter-body input {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  max-height: calc(100% - 1px);\n}\n\n[dir] .ag-floating-filter-body input {\n  margin: 0;\n}\n\n.ag-floating-filter-full-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.ag-floating-filter-full-body > div {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-floating-filter-full-body input {\n  width: 100%;\n}\n\n[dir] .ag-floating-filter-full-body input {\n  margin: 0;\n}\n\n.ag-floating-filter-full-body input[type=range] {\n  height: 100%;\n}\n\n.ag-floating-filter {\n  display: inline-block;\n  position: absolute;\n}\n\n.ag-floating-filter-input {\n  width: 100%;\n}\n\n[dir] .ag-floating-filter-input:-moz-read-only {\n  background-color: #eee;\n}\n\n[dir] .ag-floating-filter-input:read-only {\n  background-color: #eee;\n}\n\n.ag-floating-filter-menu {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-floating-filter-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n/**\n ****************************\n * Drag & Drop\n ****************************\n*/\n\n.ag-dnd-ghost {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 10;\n}\n\n[dir] .ag-dnd-ghost {\n  background: #e5e5e5;\n  border: 1px solid black;\n  cursor: move;\n  padding: 3px;\n}\n\n[dir] .ag-dnd-ghost-icon {\n  padding: 2px;\n}\n\n/**\n ****************************\n * Overlay\n ****************************\n*/\n\n.ag-overlay {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n[dir=ltr] .ag-overlay {\n  left: 0;\n}\n\n[dir=rtl] .ag-overlay {\n  right: 0;\n}\n\n.ag-overlay-panel {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  pointer-events: none;\n  width: 100%;\n}\n\n.ag-overlay-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n[dir] .ag-overlay-wrapper {\n  text-align: center;\n}\n\n.ag-overlay-wrapper.ag-overlay-loading-wrapper {\n  pointer-events: all;\n}\n\n[dir] .ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n  padding-top: 30px;\n}\n\n/**\n ****************************\n * Popup\n ****************************\n*/\n\n.ag-popup > div {\n  z-index: 5;\n}\n\n.ag-popup-backdrop {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n[dir=ltr] .ag-popup-backdrop {\n  left: 0;\n}\n\n[dir=rtl] .ag-popup-backdrop {\n  right: 0;\n}\n\n.ag-popup-editor {\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 1;\n}\n\n/**\n ****************************\n * Virtual Lists\n ****************************\n*/\n\n.ag-virtual-list-item {\n  position: absolute;\n  width: 100%;\n}\n\n[dir=ltr] .ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .ag-virtual-list-item span:empty:not(.ag-icon) {\n  border-right: 1px solid transparent;\n}\n\n/**\n ****************************\n * Floating Top and Bottom\n ****************************\n*/\n\n.ag-floating-top {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-pinned-left-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-floating-bottom {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-pinned-left-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n.ag-pinned-right-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px;\n  -webkit-box-flex: 1000;\n          flex-grow: 1000;\n}\n\n/**\n ****************************\n * Dialog\n ****************************\n*/\n\n.ag-dialog, .ag-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-title-bar, .ag-panel .ag-title-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir] .ag-dialog .ag-title-bar, [dir] .ag-panel .ag-title-bar {\n  cursor: default;\n}\n\n.ag-dialog .ag-title-bar .ag-title-bar-title, .ag-panel .ag-title-bar .ag-title-bar-title {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-dialog .ag-title-bar .ag-title-bar-buttons, .ag-panel .ag-title-bar .ag-title-bar-buttons {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-dialog .ag-title-bar .ag-title-bar-buttons .ag-button, [dir] .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  cursor: pointer;\n}\n\n.ag-dialog .ag-panel-content-wrapper, .ag-panel .ag-panel-content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-dialog .ag-panel-content-wrapper > div, .ag-panel .ag-panel-content-wrapper > div {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-dialog {\n  position: absolute;\n}\n\n.ag-dialog .ag-resizer {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topLeft {\n  top: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-topLeft {\n  left: 0;\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-topLeft {\n  right: 0;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-top {\n  top: 0;\n  height: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-top {\n  cursor: ns-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-top {\n  left: 5px;\n  right: 5px;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-top {\n  right: 5px;\n  left: 5px;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-topRight {\n  top: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-topRight {\n  right: 0;\n  cursor: nesw-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-topRight {\n  left: 0;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-right {\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-right {\n  cursor: ew-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-right {\n  right: 0;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-right {\n  left: 0;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  bottom: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  right: 0;\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottomRight {\n  left: 0;\n  cursor: nesw-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottom {\n  bottom: 0;\n  height: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  cursor: ns-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  left: 5px;\n  right: 5px;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottom {\n  right: 5px;\n  left: 5px;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  bottom: 0;\n  height: 5px;\n  width: 5px;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  left: 0;\n  cursor: nesw-resize;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-bottomLeft {\n  right: 0;\n  cursor: nwse-resize;\n}\n\n.ag-dialog .ag-resizer.ag-resizer-left {\n  top: 5px;\n  bottom: 5px;\n  width: 5px;\n}\n\n[dir] .ag-dialog .ag-resizer.ag-resizer-left {\n  cursor: ew-resize;\n}\n\n[dir=ltr] .ag-dialog .ag-resizer.ag-resizer-left {\n  left: 0;\n}\n\n[dir=rtl] .ag-dialog .ag-resizer.ag-resizer-left {\n  right: 0;\n}\n\n.ag-dialog .ag-message-box {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-dialog .ag-message-box .ag-message-box-button-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/**\n ****************************\n * Tooltip\n ****************************\n*/\n\n.ag-tooltip {\n  position: absolute;\n  pointer-events: none;\n  z-index: 99999;\n}\n\n.ag-chart-tooltip {\n  display: table;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  white-space: nowrap;\n  z-index: 99999;\n  font: 12px Verdana, sans-serif;\n  color: black;\n  opacity: 0;\n  -webkit-transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n[dir] .ag-chart-tooltip {\n  background: #f4f4f4;\n  border-radius: 5px;\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9);\n  -webkit-transition-property: opacity, -webkit-transform;\n  transition-property: opacity, -webkit-transform;\n  transition-property: opacity, transform;\n  transition-property: opacity, transform, -webkit-transform;\n}\n\n[dir=ltr] .ag-chart-tooltip {\n  box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), 0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n[dir=rtl] .ag-chart-tooltip {\n  box-shadow: 0 0 1px rgba(3, 3, 3, 0.7), -0.5vh 0.5vh 1vh rgba(3, 3, 3, 0.25);\n}\n\n.ag-chart-tooltip.visible {\n  opacity: 1;\n}\n\n[dir] .ag-chart-tooltip.visible {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.ag-chart-tooltip .title {\n  font-weight: bold;\n  color: white;\n}\n\n[dir] .ag-chart-tooltip .title {\n  padding: 7px;\n  background-color: #888888;\n}\n\n[dir=ltr] .ag-chart-tooltip .title {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n[dir=rtl] .ag-chart-tooltip .title {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.ag-chart-tooltip .content {\n  line-height: 1.7em;\n}\n\n[dir] .ag-chart-tooltip .content {\n  padding: 7px;\n}\n\n/**\n ****************************\n * Animations\n ****************************\n*/\n\n.ag-value-slide-out {\n  opacity: 1;\n}\n\n[dir] .ag-value-slide-out {\n  -webkit-transition-timing-function: linear;\n          transition-timing-function: linear;\n}\n\n[dir=ltr] .ag-value-slide-out {\n  margin-right: 5px;\n  -webkit-transition: opacity 3s, margin-right 3s;\n  transition: opacity 3s, margin-right 3s;\n}\n\n[dir=rtl] .ag-value-slide-out {\n  margin-left: 5px;\n  -webkit-transition: opacity 3s, margin-left 3s;\n  transition: opacity 3s, margin-left 3s;\n}\n\n.ag-value-slide-out-end {\n  opacity: 0;\n}\n\n[dir=ltr] .ag-value-slide-out-end {\n  margin-right: 10px;\n}\n\n[dir=rtl] .ag-value-slide-out-end {\n  margin-left: 10px;\n}\n\n.ag-opacity-zero {\n  opacity: 0 !important;\n}\n\n/**\n ****************************\n * Menu\n ****************************\n*/\n\n.ag-menu {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-menu-column-select-wrapper {\n  height: 265px;\n  overflow: auto;\n  width: 200px;\n}\n\n.ag-menu-list {\n  display: table;\n}\n\n.ag-menu-option, .ag-menu-separator {\n  display: table-row;\n}\n\n.ag-menu-option > span, .ag-menu-separator > span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.ag-menu-option-text {\n  white-space: nowrap;\n}\n\n.ag-menu-column-select-wrapper .ag-column-select-panel {\n  height: 100%;\n}\n\n/**\n ****************************\n * Rich Select\n ****************************\n*/\n\n.ag-rich-select {\n  outline: none;\n}\n\n[dir] .ag-rich-select {\n  cursor: default;\n}\n\n.ag-rich-select .ag-rich-select-value {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-rich-select .ag-rich-select-value > span {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-rich-select .ag-rich-select-value > span.ag-icon {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-rich-select .ag-rich-select-list .ag-virtual-list-item .ag-rich-select-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n  white-space: nowrap;\n}\n\n/**\n ****************************\n * Pagination\n ****************************\n*/\n\n.ag-paging-panel {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.ag-paging-panel .ag-paging-row-summary-panel {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-paging-panel .ag-paging-row-summary-panel span {\n  margin: 0 3px;\n}\n\n.ag-paging-page-summary-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-paging-page-summary-panel .ag-disabled {\n  pointer-events: none;\n}\n\n.ag-paging-page-summary-panel .ag-paging-button {\n  position: relative;\n  overflow: hidden;\n}\n\n.ag-paging-page-summary-panel .ag-paging-button button {\n  position: absolute;\n}\n\n/**\n ****************************\n * Tool Panel\n ****************************\n*/\n\n.ag-tool-panel-wrapper {\n  display: -webkit-box;\n  display: flex;\n  overflow-y: auto;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 200px;\n}\n\n[dir] .ag-tool-panel-wrapper {\n  cursor: default;\n}\n\n.ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  line-height: 1.5;\n}\n\n[dir] .ag-tool-panel-wrapper .ag-filter-toolpanel-header {\n  cursor: pointer;\n}\n\n.ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ag-column-tool-panel-column .ag-column-tool-panel-column,\n.ag-column-tool-panel-column .ag-column-tool-panel-column-group,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column,\n.ag-column-tool-panel-column-group .ag-column-tool-panel-column-group {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ag-column-select-checkbox {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-tool-panel-horizontal-resize {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1;\n}\n\n[dir] .ag-tool-panel-horizontal-resize {\n  cursor: col-resize;\n}\n\n[dir=ltr] .ag-rtl .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(3px);\n          transform: translateX(3px);\n}\n\n[dir=rtl] .ag-rtl .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(-3px);\n          transform: translateX(-3px);\n}\n\n[dir=ltr] .ag-ltr .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(-3px);\n          transform: translateX(-3px);\n}\n\n[dir=rtl] .ag-ltr .ag-tool-panel-horizontal-resize {\n  -webkit-transform: translateX(3px);\n          transform: translateX(3px);\n}\n\n.loading-filter {\n  height: 100%;\n  position: absolute;\n  top: 34px;\n  width: 100%;\n  z-index: 1;\n}\n\n[dir] .loading-filter {\n  background-color: #e6e6e6;\n  padding: 5px;\n}\n\n.ag-details-row {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-details-grid {\n  height: 100%;\n  width: 100%;\n}\n\n.ag-header-group-cell {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  text-overflow: ellipsis;\n}\n\n.ag-cell-label-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.ag-numeric-header .ag-cell-label-container {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n/**\n ****************************\n * Side Bar\n ****************************\n*/\n\n.ag-side-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n.ag-side-bar .ag-side-buttons div button {\n  display: block;\n  white-space: nowrap;\n  outline: none;\n}\n\n[dir] .ag-side-bar .ag-side-buttons div button {\n  cursor: pointer;\n}\n\n.ag-side-bar .ag-side-buttons div button span:not(.ag-icon) {\n  -webkit-writing-mode: tb;\n      -ms-writing-mode: tb;\n          writing-mode: tb;\n  -webkit-writing-mode: vertical-lr;\n      -ms-writing-mode: tb-lr;\n          writing-mode: vertical-lr;\n}\n\n.ag-side-bar .panel-container {\n  width: 180px;\n}\n\n.ag-side-bar.full-width .panel-container {\n  width: 200px;\n}\n\n.ag-rtl .ag-side-bar .ag-side-buttons button span:not(.ag-icon) {\n  -webkit-writing-mode: tb-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n  -webkit-writing-mode: vertical-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: vertical-rl;\n}\n\n/**\n ****************************\n * Status Bar\n ****************************\n*/\n\n.ag-status-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n\n.ag-status-bar .ag-status-panel {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.ag-status-bar-left {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.ag-status-bar-center {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n.ag-status-bar-right {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n/**\n ****************************\n * Widgets\n ****************************\n*/\n\n.ag-group-component {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 100%;\n}\n\n.ag-group-component .ag-group-component-title-bar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-group-component .ag-group-component-toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-group-component .ag-group-component-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.ag-group-component .ag-group-component-container .ag-group-subgroup {\n  display: -webkit-box;\n  display: flex;\n  align-self: stretch;\n}\n\n.ag-group-component .ag-group-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-group-component.ag-disabled .ag-group-component-container {\n  pointer-events: none;\n}\n\n.ag-group-component.ag-collapsed .ag-group-component-toolbar, .ag-group-component.ag-collapsed .ag-group-component-container {\n  display: none;\n}\n\n.ag-toggle-button .ag-input-wrapper .ag-icon {\n  position: absolute;\n  top: -1px;\n}\n\n[dir=ltr] .ag-toggle-button .ag-input-wrapper .ag-icon {\n  -webkit-transition: right 0.3s;\n  transition: right 0.3s;\n}\n\n[dir=rtl] .ag-toggle-button .ag-input-wrapper .ag-icon {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n\n.ag-input-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-input-field input, .ag-input-field select, .ag-input-field textarea {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 100%;\n  min-width: 0;\n}\n\n.ag-range-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-picker-field > .ag-wrapper, .ag-slider > .ag-wrapper, .ag-angle-select > .ag-wrapper {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-picker-field > .ag-wrapper > div, .ag-slider > .ag-wrapper > div, .ag-angle-select > .ag-wrapper > div {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.ag-angle-select {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  display: block;\n  position: relative;\n}\n\n.ag-angle-select .ag-angle-select-field .ag-child-circle {\n  position: absolute;\n}\n\n.ag-picker-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-picker-field > .ag-wrapper > button {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-picker-field > .ag-wrapper > button {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\n\n.ag-color-picker > .ag-wrapper {\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  overflow: hidden;\n}\n\n[dir] .ag-color-picker button {\n  cursor: pointer;\n}\n\n.ag-labeled.ag-label-align-right label {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.ag-labeled.ag-label-align-right > div {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-labeled.ag-label-align-top {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.ag-labeled.ag-label-align-top > div {\n  align-self: stretch;\n}\n\n.ag-color-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[dir] .ag-color-panel {\n  text-align: center;\n}\n\n.ag-color-panel .ag-spectrum-color {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n}\n\n[dir] .ag-color-panel .ag-spectrum-color {\n  cursor: default;\n}\n\n.ag-color-panel .ag-fill {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n\n[dir=ltr] .ag-color-panel .ag-fill {\n  left: 0;\n  right: 0;\n}\n\n[dir=rtl] .ag-color-panel .ag-fill {\n  right: 0;\n  left: 0;\n}\n\n[dir] .ag-color-panel .ag-spectrum-val {\n  cursor: pointer;\n}\n\n.ag-color-panel .ag-spectrum-dragger {\n  position: absolute;\n  pointer-events: none;\n}\n\n[dir] .ag-color-panel .ag-spectrum-dragger {\n  cursor: pointer;\n}\n\n[dir] .ag-color-panel .ag-spectrum-hue {\n  cursor: default;\n}\n\n[dir=ltr] .ag-color-panel .ag-spectrum-hue {\n  background: -webkit-gradient(linear, right top, left top, color-stop(3%, #ff0000), color-stop(17%, #ffff00), color-stop(33%, #00ff00), color-stop(50%, #00ffff), color-stop(67%, #0000ff), color-stop(83%, #ff00ff), to(#ff0000));\n  background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n[dir=rtl] .ag-color-panel .ag-spectrum-hue {\n  background: -webkit-gradient(linear, left top, right top, color-stop(3%, #ff0000), color-stop(17%, #ffff00), color-stop(33%, #00ff00), color-stop(50%, #00ffff), color-stop(67%, #0000ff), color-stop(83%, #ff00ff), to(#ff0000));\n  background: linear-gradient(to right, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n[dir] .ag-color-panel .ag-spectrum-alpha {\n  cursor: default;\n}\n\n.ag-color-panel .ag-spectrum-hue-background {\n  width: 100%;\n  height: 100%;\n}\n\n.ag-color-panel .ag-spectrum-alpha-background {\n  width: 100%;\n  height: 100%;\n}\n\n[dir=ltr] .ag-color-panel .ag-spectrum-alpha-background {\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(black));\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);\n}\n\n[dir=rtl] .ag-color-panel .ag-spectrum-alpha-background {\n  background-image: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0)), to(black));\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), black);\n}\n\n[dir] .ag-color-panel .ag-hue-alpha {\n  cursor: pointer;\n}\n\n.ag-color-panel .ag-spectrum-slider {\n  position: absolute;\n  pointer-events: none;\n}\n\n.ag-color-panel .ag-spectrum-text-value {\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n[dir] .ag-color-panel .ag-spectrum-text-value {\n  text-align: center;\n}\n\n.ag-color-panel .ag-spectrum-text-value:focus {\n  outline: none;\n  outline-offset: 0;\n}\n\n.ag-color-panel .ag-recent-colors {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-color-panel .ag-recent-colors > div {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-ltr .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-rtl .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-ltr .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-rtl .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-ltr {\n  direction: ltr;\n}\n\n[dir=rtl] .ag-ltr {\n  direction: rtl;\n}\n\n.ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n[dir=ltr] .ag-ltr .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=rtl] .ag-ltr .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=ltr] .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=rtl] .ag-ltr .ag-pinned-right-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=ltr] .ag-rtl {\n  direction: rtl;\n}\n\n[dir=rtl] .ag-rtl {\n  direction: ltr;\n}\n\n.ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n}\n\n[dir=ltr] .ag-rtl .ag-header-cell-resize {\n  left: -4px;\n}\n\n[dir=rtl] .ag-rtl .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=ltr] .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  right: -4px;\n}\n\n[dir=rtl] .ag-rtl .ag-pinned-left-header .ag-header-cell-resize {\n  left: -4px;\n}\n\n@media print {\n  .ag-body-viewport {\n    display: block;\n  }\n\n  .ag-row {\n    page-break-inside: avoid;\n  }\n}\n\n.ag-body .ag-pinned-left-cols-viewport, .ag-body .ag-body-viewport, .ag-body .ag-pinned-right-cols-viewport {\n  -webkit-overflow-scrolling: touch;\n}\n\n.ag-chart {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.ag-chart .ag-chart-components-wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-canvas-wrapper canvas {\n  display: block;\n}\n\n.ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  position: absolute;\n  top: 10px;\n  width: 24px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n[dir=ltr] .ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  right: 20px;\n}\n\n[dir=rtl] .ag-chart .ag-chart-components-wrapper .ag-chart-menu {\n  left: 20px;\n}\n\n.ag-chart:not(.ag-has-menu):hover .ag-chart-menu {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.ag-chart .ag-chart-docked-container {\n  position: relative;\n  width: 0;\n  min-width: 0;\n  -webkit-transition: min-width 0.4s;\n  transition: min-width 0.4s;\n}\n\n[dir=ltr] .ag-chart .ag-chart-docked-container .ag-panel {\n  border-width: 0 0 0 1px;\n}\n\n[dir=rtl] .ag-chart .ag-chart-docked-container .ag-panel {\n  border-width: 0 1px 0 0;\n}\n\n.ag-chart-tabbed-menu > div {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-header {\n  -webkit-box-flex: 0;\n          flex: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-tab-header {\n  cursor: default;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-tab-body > div {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper {\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  overflow: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  height: 30px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  height: 100%;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  opacity: 0.2;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  opacity: 1;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn {\n  position: relative;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  left: 0;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, [dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button {\n  right: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  position: absolute;\n  top: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  left: 0;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper {\n  right: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-group-component-container .ag-chart-mini-thumbnail {\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  -webkit-transition-timing-function: ease-in-out;\n          transition-timing-function: ease-in-out;\n}\n\n[dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir=ltr] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  -webkit-transition: left 0.3s;\n  transition: left 0.3s;\n}\n\n[dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating, [dir=rtl] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper.ag-animating {\n  -webkit-transition: right 0.3s;\n  transition: right 0.3s;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  cursor: pointer;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-charts-container .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail canvas {\n  display: block;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper, .ag-chart-tabbed-menu .ag-chart-format-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.ag-chart-tabbed-menu .ag-chart-data-wrapper > div, .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-data-wrapper > div, [dir] .ag-chart-tabbed-menu .ag-chart-format-wrapper > div {\n  margin: 0;\n  padding-bottom: 2px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-data-wrapper > div:not(:first-child), [dir] .ag-chart-tabbed-menu .ag-chart-format-wrapper > div:not(:first-child) {\n  margin-top: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-format-wrapper {\n  overflow-x: hidden;\n}\n\n.ag-chart-tabbed-menu .ag-chart-format-wrapper .ag-group-component .ag-group-subgroup {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.ag-chart .ag-chart-canvas-wrapper.ag-chart-empty > canvas {\n  visibility: hidden;\n}\n\n.ag-chart .ag-chart-canvas-wrapper.ag-chart-empty .ag-chart-empty-text {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ag-chart .ag-chart-empty-text {\n  display: none;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.ag-chart .ag-chart-menu {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.ag-chart .ag-chart-menu > span {\n  opacity: 0.5;\n  line-height: 24px;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n\n[dir] .ag-chart .ag-chart-menu > span {\n  margin: 2px 0;\n  cursor: pointer;\n}\n\n[dir] .ag-chart .ag-chart-menu > span:hover {\n  border-radius: 5px;\n}\n\n.ag-chart .ag-chart-docked-container {\n  min-width: 0;\n  width: 0;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-tab-body {\n  padding: 0;\n}\n\n.ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar {\n  padding: 0 10px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector {\n  padding: 0 10px;\n}\n\n[dir] .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  cursor: pointer;\n}\n\n@font-face {\n  font-family: \"agGridMaterial\";\n\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBlYAAAC8AAAAYGNtYXAXVtK8AAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZuX9LmgAAAF4AAASrGhlYWQVtyBHAAAUJAAAADZoaGVhB4kD+wAAFFwAAAAkaG10eN4AJ0kAABSAAAAA6GxvY2GGnoHMAAAVaAAAAHZtYXhwAEQAWQAAFeAAAAAgbmFtZVm8q3EAABYAAAABqnBvc3QAAwAAAAAXrAAAACAAAwP3AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpNQPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6TX//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAQAAawMAAxUACwAAASEVCQEVITUhNychAwD+AAEV/usCAP7V1tYBKwMVVf8A/wBVgNXVAAAAAAQAOf/5A8cDhwAIAA8AFwAfAAABMzUzJwczFTEHIzUHFzUzJScVIxUzFTcFIxUjFzcjNQGrqnLHx3I5csfHcgJVx3Jyx/6OqnLHx3ICTnLHx3I5csfHclXHcqpyx45yx8dyAAABAKsAawNVAxUACQAAExc3ETMRFzcJAas87lbuPP6r/qsBwDzu/fkCB+89AVX+qwACAFUAFQOrA2sAHAAoAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxMHJwcnNyc3FzcXBwIAWE5OdCEiIiF0Tk5YWE5OdCEiIiF0Tk5Y1TyZmTyZmTyZmTyZA2siIXROTlhYTk50ISIiIXROTlhYTk50ISL9vDyZmTyZmTyZmTyZAAAAAwDVAJUDKwLrAAQACQANAAATMxEjETczESMREzMRI9WAgO94eO94eAI3/l4BorT9qgJW/qr/AAACAIAAQAOAA0AADwAWAAABISIGFREUFjMhMjY1ETQmASc3FwEXAQMr/aojMjIjAlYjMjL+XdY8mgFEPP6AA0AyI/2qIzIyIwJWIzL9q9U8mQFEPP6AAAAAAgCAAEADgANAAA8AEwAAASEiBhURFBYzITI2NRE0JgMhNSEDK/2qIzIyIwJWIzIyef5WAaoDQDIj/aojMjIjAlYjMv5VVgAAAgCAAEADgANAAAMAEwAAAREhESUhIgYVERQWMyEyNjURNCYDK/2qAlb9qiMyMiMCViMyMgLr/aoCVlUyI/2qIzIyIwJWIzIAAwBzAEgDjQM4AAYACgAWAAAJAQcXCQIhNxchBTAGFRQWMzI2NTQmAv3+VTxm/vcBRQFF/e/MzP5oAkxVMiMjMlUBjQGrPGb+9/67AUXNzUBrKiMyMiMqawAAAAACAKsAawFVAxUAAwAHAAAlIxEzNRUjNQFVqqqqawH/q1dXAAAJAKsAawNVAxUAAwAIAAwAEAAVABkAHgAiACYAABMzNSMBMzUjFSEzNSM1MzUjBTM1IxUBFTM1BTM1IxUBMzUjETM1I6uqqgEAqqr/AKqqqqoBAKqqAQCq/laqqgEAqqqqqgJrqv1WqqqqVqqqqqoBqqqqqqqq/wCq/laqAAAAAAEBYgDAAp4CwAAGAAABJwkBNyc3Ap48/wABADzDwwKEPP8A/wA8xMQAAAAAAwBr/+sDlQOVAAgAGQAdAAABISIGFREzESEXISIGFREUFjMhMjY1ETQmIxEhESECwP4AIzJVAgCA/iskMjIkAdUjMjIj/isB1QOVMiP9qwJVVTIk/asjMjIjAlUkMv1VAlUAAAEA1QCVAysC6wAMAAABJwcnBxcHFzcXNyc3Ays87+887+887+887+8Crzzv7zzv7zzv7zzv7wAABQBVABUDqwNrACUAMgA/AEsAUQAAAT4BNTQmIyIGFRQWMzI2NxcHLgEjIgYVFBYzMjY1NCYnNwEzNQEHIiY1NDYzMhYVFAYjESImNTQ2MzIWFRQGIwEiJjU0NjMyFhUUBgkBFwE1IwGbCAhkR0dkZEcTIxBlZRAjE0dkZEdHZAgIZQErgP3wmyMyMiMjMjIjIzIyIyMyMiMBAAkMDAkJDAwBIv8AVQErgAJ6ECMTR2RkR0dkCAhlZQgIZEdHZGRHEyMQZf7VKwIPDzEkJDExJCQx/gAxJCQxMSQkMQFADAkJDAwJCQwBlf8AVQEqKwAABwCXAL8DaQLBAAwAEAAdACEALQA6AD4AABMiBhUUFjMyNjU0JiMFNSEVAyIGFRQWMzI2NTQmIwUhNSEFMhYVFAYjIiY1NDY3MhYVFAYjIiY1NDYzBSE1IcISGRkSEhkZEgKn/dd+EhkZEhIZGRIB0v6sAVT+Lg0TEw0NExMNEhkZEhIZGRICp/3XAikBFRkSERoaERIZVVZWASsZEhIZGRISGVVVCxMNDRMTDQ0T4RoREhkZEhEaVlUAAAABAKsAawNVAxUACQAAAScHESMRJwcJAQNVPO5W7jwBVQFVAcA87gIH/fnvPf6rAVUAAAAAAQFiAMACngLAAAYAAAEHFwcXCQEBnjzDwzwBAP8AAsA8xMQ8AQABAAAAAAABAJMAxwNtArkARwAAAS4BIyIGByc+ATMyFx4BFxYXDgEHJz4BNyMOAQcnIxcOASMiJicjHgEzMjY3Fw4BIyInLgEnJic+ATcXDgEHMyc+ATMyFhczAqMKXD0iPRZPK2M2Pjk5XyQlFRhYOU8SGAVEBA0IK1BGBAkFIjUJRApcPhMjEEghRyY+OTlfJCUVEz4oXgUGAoYpDSQVIjQJRAHdOk8aF08ZHBMSQi4tNz5lIU8SLRoMFQkqRgEBKR86UAgISA0OExJCLi03MFQgXgoUCyoNECgfAAADAJMAxwNtArkAHAApADUAAAEiBw4BBwYHFhceARcWMzI3PgE3NjcmJy4BJyYjESImNTQ2MzIWFRQGIxEiBhUUFjMyNjU0JgIAPjk5XyQlFRUlJF85OT4+OTlfJCUVFSUkXzk5PkVhYUVFYWFFKTs7KSk7OwK5ExJCLi03Ny0uQhITExJCLi03Ny0uQhIT/mFhRUVhYUVFYQEKOykpOzspKTsAAAMAgADAA4ACwAAEAAgADAAAJTM1IxUBFSE1ASE1IQGrqqr+1QMA/YACAP4AwFVVAgBVVf7VVgAAAgD3AMADCQLAAAUACgAAJSc3JwkBATMRIxEDCcTEPP8AAQD+KlZW/MTEPP8A/wACAP4AAgAAAAACAKsBQANVAkAAAwAIAAABIRUhBSE1IRUDVf1WAqr9VgKq/VYCQFWrVVUAAAYAjgCkA3IC3AAHAAwAEwAXABsAIQAAASEUBisBNTElFSE1IScyFhUhNSEBIzUzNSM1MycjNDYzFQJVAR1DL6sBHf7jAR1yL0P+AAGO/uRycnJy5HJDLwEVL0Jx5HJy40Ivcf3IcXJyci9CcQAAAAACAJMAxwNtArkAHAApAAABIgcOAQcGBxYXHgEXFjMyNz4BNzY3JicuAScmIxEiJjU0NjMyFhUUBiMCAD45OV8kJRUVJSRfOTk+Pjk5XyQlFRUlJF85OT5FYWFFRWFhRQK5ExJCLi03Ny0uQhITExJCLi03Ny0uQhIT/mFhRUVhYUVFYQACAPcAwAMJAsAABgAKAAATFwcXCQEHJTMRI/fExDwBAP8APAG8VlYChMTEPAEAAQA8PP4AAAAAAAEAqwBrA1UDFQAJAAABITcnCQE3JyE1A1X9+e89/qsBVTzuAgcB6+48/qv+qzzuVgAAAAACAOQApAMcAtwAHAAmAAABNxcHMxUjHgEXBycVIzUHJzcjNTMnNx4BFzUzFQczNzUnIwcVHgECOWhQaJOTGjQaUGhyaFBok5NoUBo0GnJoXkNDXkMRIQJJaFBocho0GlBok5NoUGhyaFAaNBqTk/tDXkNDXhEhAAABAIAC6wOAA0AAAwAAEyEVIYADAP0AA0BVAAAAAwCAAMADgALAAAMABwALAAA3ITUhNSE1ITUVITWAAwD9AAMA/QADAMBVgFbVVVUAAQEAAEADAACVAAMAACUhFSEBAAIA/gCVVQAAAAEA1QGVAysB6wAEAAATIRUhNdUCVv2qAetWVgABAWIAwAKeAsAABgAAAQcXBxcJAQGePMPDPAEA/wACwDzExDwBAAEAAAAAAAMAgADAA4ACwAADAAcACwAANyE1IREVITUBITUhgAIA/gADAP0AAwD9AMBVAatVVf7VVgADAFUAFQOrA2sAHAArADoAAAEiBw4BBwYVFBceARcWMzI3PgE3NjU0Jy4BJyYjATQ3PgE3NjMyFhcBLgE1ASImJwEeARUUBw4BBwYjAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlj+qxobXT4+RztrK/4iIiYBVTtrKwHeIiYaG10+PkcDayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv5VRz4+XRsaJiL+IitrO/6rJiIB3itrO0c+Pl0bGgAAAAADAID/6wOAA5UAGAAkACwAAAEjLgEjIgYHIyIGFREUFjMhMjY1ETQmIzEhMhYVFAYjIiY1NDYBIREzFSE1MwMrsw1BKipBDbMjMjIjAlYjMjIj/tUSGRkSEhkZAT39qlYBqlYDQCUwMCUyI/1VIzIyIwKrIzIZEhEZGRESGf0AAquAgAACAK0AbwNTAxEABQASAAAlByc3HgETAQcnBxcHJzcXNyc3AWOOKI4KFMYBNB8e9z5Y9lg9ex4e/Y4ojgoUAgr+zB4eez1Y9lg+9x4fAAAAAAkAOf/5A8cDhwAPABMAFwAgACQALgAyADYAOgAABSEiJjURNDYzITIWFREUBgEjFTMBIREhJQcXByc3HgEXJyMVMyUHJwcnNx4BFzEBIxUzJSMVMzcjFTMDVf1WL0NDLwKqL0ND/dGqqgIA/jkBx/7cQkIpaWkKFQrcqqoB+ChBQihqGjUa/giqqgEd5OTjqqoHQy8Cqi9DQy/9Vi9DARyqAY7+crNCQShpagoUCturMShBQShpGjUaAZaqqqqqqgAAAAABANUAlQMrAusACwAAASERIxEhNSERMxEhAyv/AFb/AAEAVgEAAZX/AAEAVgEA/wAAAAAAAQFiAMACngLAAAYAAAEnCQE3JzcCnjz/AAEAPMPDAoQ8/wD/ADzExAAAAAACAFUAFQOrA2sAHAA5AAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAgBYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGxoaG10+PkdHPj5dGxoaG10+PkcDayIhdE5OWFhOTnQhIiIhdE5OWFhOTnQhIv0AGhtdPj5HRz4+XRsaGhtdPj5HRz4+XRsaAAMAVQAVA6sDawAcADkAVgAAASIHDgEHBhUUFx4BFxYzMjc+ATc2NTQnLgEnJiM1IgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmIxEiJy4BJyY1NDc+ATc2MzIXHgEXFhUUBw4BBwYjAgAsJyc6ERAQETonJywsJyc6ERAQETonJyxYTk50ISIiIXROTlhYTk50ISIiIXROTlhHPj5dGxoaG10+PkdHPj5dGxoaG10+PkcClRAROicnLCwnJzoREBAROicnLCwnJzoRENYiIXROTlhYTk50ISIiIXROTlhYTk50ISL9ABobXT4+R0c+Pl0bGhobXT4+R0c+Pl0bGgABAKsAawNVAxUACQAAAQcXIRUhBxcJAQIAPO79+QIH7jwBVf6rAxU87lbuPAFVAVUAAAAAAgCAAEADgANAAA4AGQAAAREhESMRFBYzITI2NREjBTcXByc3FxEzETEDK/2qVTIjAlYjMlX/AG481dU8blYBwP7VASv+1SMyMiMBKx1uPNXVPG4Bnf5jAAEBKwFVAtUCKwADAAABFzchASvV1f5WAivW1gABAZUA6wJrApUAAwAAAQcXEQJr1tYCldXVAaoAAQGVAOsCawKVAAMAACU3JxEBldbW69XV/lYAAAEBKwFVAtUCKwADAAABNxchASvV1f5WAVXW1gABAIkAogN3At4ABgAAAScHFwEnAQF3sjzuAgA8/jwBG7I97gIAPP49AAAAAAEBYgDAAp4CwAAGAAABBxcHFwkBAZ48w8M8AQD/AALAPMTEPAEAAQAAAAAAAQDVAZUDKwHrAAQAABMhFSE11QJW/aoB61ZWAAEBAAEiAwACXgAFAAABBycHCQECxMTEPAEAAQACXsPDPP8AAQAAAAADAFUA6wOrApUAGgAeADkAABM0NjsBNSMiBw4BBwYVFBceARcWOwE1IyImNRchNSElIxUzMhYVFAYrARUzMjc+ATc2NTQnLgEnJiOmTjeqqiwnJzoREREROicnLKqqN06vAVb+qgGAqqo3Tk43qqosJyc6ERERETonJywBwDdNURAROicnLCwnJzoREFFNNytWqlFNNzdNURAROicnLCwnJzoREAAAAAADAFUAQAOrA0AAFAAYADgAAAEjFTMyFhUUBgcXPgE1NCcuAScmIwcjFzMBFw4BFRQXHgEXFjsBNSMiJjU0NjcXIxUzFxUzFzcBBwLVqqo3TjgrPjRCERE6JycsKl5WCP2qhTpLERE6Jycsqqo3TkUxWB91YUmsNf03NwKVUU03LkYLPhplPiwnJzoREKpWAXWFGGpDLCcnOhEQUU03M0sFWFZhSas2Aso2AAAAAQAAAAEAAG2khpdfDzz1AAsEAAAAAADZaG3lAAAAANlobeUAAP/rA8cDlQAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADxwABAAAAAAAAAAAAAAAAAAAAOgQAAAAAAAAAAAAAAAIAAAAEAAEABAAAOQQAAKsEAABVBAAA1QQAAIAEAACABAAAgAQAAHMEAACrBAAAqwQAAWIEAABrBAAA1QQAAFUEAACXBAAAqwQAAWIEAACTBAAAkwQAAIAEAAD3BAAAqwQAAI4EAACTBAAA9wQAAKsEAADkBAAAgAQAAIAEAAEABAAA1QQAAWIEAACABAAAVQQAAIAEAACtBAAAOQQAANUEAAFiBAAAVQQAAFUEAACrBAAAgAQAASsEAAGVBAABlQQAASsEAACJBAABYgQAANUEAAEABAAAVQQAAFUAAAAAAAoAFAAeADoAbACEAMgA5AEQATQBWAGGAZgB2AHuAiACPAK0AxIDLANCA64EAAQcBDgETgSGBMgE5AT+BToFSAVgBW4FfAWSBawGDAZOBnYG2AbyBwgHYAfgB/oIJgg0CEIIUAheCHQIigiYCKwJAAlWAAAAAQAAADoAVwAJAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAoAAAABAAAAAAACAAcAewABAAAAAAADAAoAPwABAAAAAAAEAAoAkAABAAAAAAAFAAsAHgABAAAAAAAGAAoAXQABAAAAAAAKABoArgADAAEECQABABQACgADAAEECQACAA4AggADAAEECQADABQASQADAAEECQAEABQAmgADAAEECQAFABYAKQADAAEECQAGABQAZwADAAEECQAKADQAyEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbFZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbEFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbFJlZ3VsYXIAUgBlAGcAdQBsAGEAckFnTWF0ZXJpYWwAQQBnAE0AYQB0AGUAcgBpAGEAbEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");\n\n  font-weight: normal;\n\n  font-style: normal;\n}\n\n.ag-theme-material {\n  -webkit-font-smoothing: antialiased;\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-weight: inherit;\n  font-size: inherit;\n  line-height: normal;\n}\n\n[dir] .ag-theme-material {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-tab-header .ag-tab.ag-tab-selected {\n  border-bottom: 2px solid #7367F0;\n}\n\n[dir] .ag-theme-material label {\n  margin-bottom: 0;\n}\n\n.ag-theme-material * {\n  box-sizing: border-box;\n}\n\n.ag-theme-material *:focus, .ag-theme-material * *:before, .ag-theme-material * *:after {\n  outline: none;\n  box-sizing: border-box;\n}\n\n.ag-theme-material .ag-tab {\n  box-sizing: content-box;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-right: 10px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-1 {\n  padding-left: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-right: 20px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-2 {\n  padding-left: 20px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-right: 30px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-3 {\n  padding-left: 30px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-right: 40px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-4 {\n  padding-left: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-right: 50px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-5 {\n  padding-left: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-right: 60px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-6 {\n  padding-left: 60px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-right: 70px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-7 {\n  padding-left: 70px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-right: 80px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-8 {\n  padding-left: 80px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-right: 90px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-9 {\n  padding-left: 90px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-right: 100px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-10 {\n  padding-left: 100px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-right: 110px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-11 {\n  padding-left: 110px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-right: 120px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-12 {\n  padding-left: 120px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-right: 130px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-13 {\n  padding-left: 130px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-right: 140px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-14 {\n  padding-left: 140px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-right: 150px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-15 {\n  padding-left: 150px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-right: 160px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-16 {\n  padding-left: 160px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-right: 170px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-17 {\n  padding-left: 170px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-right: 180px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-18 {\n  padding-left: 180px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-right: 190px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-19 {\n  padding-left: 190px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-right: 200px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-20 {\n  padding-left: 200px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-right: 210px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-21 {\n  padding-left: 210px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-right: 220px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-22 {\n  padding-left: 220px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-right: 230px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-23 {\n  padding-left: 230px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-right: 240px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-24 {\n  padding-left: 240px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-right: 250px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-25 {\n  padding-left: 250px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-right: 260px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-26 {\n  padding-left: 260px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-right: 270px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-27 {\n  padding-left: 270px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-right: 280px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-28 {\n  padding-left: 280px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-right: 290px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-29 {\n  padding-left: 290px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-right: 300px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-30 {\n  padding-left: 300px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-right: 310px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-31 {\n  padding-left: 310px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-right: 320px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-32 {\n  padding-left: 320px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-right: 330px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-33 {\n  padding-left: 330px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-right: 340px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-34 {\n  padding-left: 340px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-right: 350px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-35 {\n  padding-left: 350px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-right: 360px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-36 {\n  padding-left: 360px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-right: 370px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-37 {\n  padding-left: 370px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-right: 380px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-38 {\n  padding-left: 380px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-right: 390px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-39 {\n  padding-left: 390px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-right: 400px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-40 {\n  padding-left: 400px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-right: 410px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-41 {\n  padding-left: 410px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-right: 420px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-42 {\n  padding-left: 420px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-right: 430px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-43 {\n  padding-left: 430px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-right: 440px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-44 {\n  padding-left: 440px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-right: 450px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-45 {\n  padding-left: 450px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-right: 460px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-46 {\n  padding-left: 460px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-right: 470px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-47 {\n  padding-left: 470px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-right: 480px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-48 {\n  padding-left: 480px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-toolpanel-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-right: 490px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-indent-49 {\n  padding-left: 490px;\n}\n\n.ag-theme-material .ag-cell .ag-icon {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ag-theme-material .ag-checkbox, .ag-theme-material .ag-radio-button, .ag-theme-material .ag-toggle-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir] .ag-theme-material .ag-checkbox, [dir] .ag-theme-material .ag-radio-button, [dir] .ag-theme-material .ag-toggle-button {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-checkbox label, [dir] .ag-theme-material .ag-radio-button label, [dir] .ag-theme-material .ag-toggle-button label {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-checkbox label:empty, [dir] .ag-theme-material .ag-radio-button label:empty, [dir] .ag-theme-material .ag-toggle-button label:empty {\n  margin: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-checkbox:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-radio-button:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-checkbox:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-radio-button:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-cell {\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-ltr .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-right: 42px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-row-group-leaf-indent {\n  margin-left: 42px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell {\n  border-left: 1px solid transparent;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell {\n  border-right: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=ltr] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-first-right-pinned:not(.ag-cell-range-left), [dir=rtl] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=ltr] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-last-left-pinned:not(.ag-cell-range-right), [dir=rtl] .ag-theme-material .ag-rtl .ag-root:not(.ag-has-focus) .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right) {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-value-change-delta {\n  padding-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-value-change-delta {\n  padding-left: 2px;\n}\n\n.ag-theme-material .ag-value-change-delta-up {\n  color: #43a047;\n}\n\n.ag-theme-material .ag-value-change-delta-down {\n  color: #e53935;\n}\n\n.ag-theme-material .ag-value-change-value {\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n\n[dir] .ag-theme-material .ag-value-change-value {\n  background-color: transparent;\n  border-radius: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-value-change-value {\n  padding-left: 1px;\n  padding-right: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-value-change-value {\n  padding-right: 1px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-value-change-value-highlight {\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n\n[dir] .ag-theme-material .ag-value-change-value-highlight {\n  background-color: #00acc1;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]),\n.ag-theme-material .ag-input-wrapper input[type=text],\n.ag-theme-material .ag-input-wrapper input[type=number],\n.ag-theme-material .ag-input-wrapper input[type=tel],\n.ag-theme-material .ag-input-wrapper input[type=date],\n.ag-theme-material .ag-input-wrapper input[type=datetime-local] {\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]), [dir] .ag-theme-material .ag-input-wrapper input[type=text], [dir] .ag-theme-material .ag-input-wrapper input[type=number], [dir] .ag-theme-material .ag-input-wrapper input[type=tel], [dir] .ag-theme-material .ag-input-wrapper input[type=date], [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local] {\n  background: transparent;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):focus,\n.ag-theme-material .ag-input-wrapper input[type=text]:focus,\n.ag-theme-material .ag-input-wrapper input[type=number]:focus,\n.ag-theme-material .ag-input-wrapper input[type=tel]:focus,\n.ag-theme-material .ag-input-wrapper input[type=date]:focus,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]:focus {\n  outline: none;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]):focus, [dir] .ag-theme-material .ag-input-wrapper input[type=text]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=number]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=tel]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=date]:focus, [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local]:focus {\n  border-bottom: 2px solid #7367F0;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-webkit-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-moz-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]:-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=text]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=number]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=tel]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=date]::-ms-input-placeholder, .ag-theme-material .ag-input-wrapper input[type=datetime-local]::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type])::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=text]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=number]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=tel]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=date]::placeholder,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input:not([type]):disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=text]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=number]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=tel]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=date]:disabled, [dir] .ag-theme-material .ag-input-wrapper input[type=datetime-local]:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper input:not([type]):disabled,\n.ag-theme-material .ag-input-wrapper input[type=text]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=number]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=tel]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=date]:disabled,\n.ag-theme-material .ag-input-wrapper input[type=datetime-local]:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper input[type=date] {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper input[type=range] {\n  padding: 0;\n}\n\n.ag-theme-material .ag-input-wrapper textarea {\n  color: rgba(0, 0, 0, 0.87);\n  font-family: inherit;\n  font-size: inherit;\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea {\n  background: transparent;\n  padding-bottom: 8px;\n  border-width: 0;\n  border-bottom: 2px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper textarea:focus {\n  outline: none;\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea:focus {\n  border-bottom: 2px solid #7367F0;\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-input-wrapper textarea::placeholder {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n[dir] .ag-theme-material .ag-input-wrapper textarea:disabled {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-input-wrapper textarea:disabled {\n  color: rgba(0, 0, 0, 0.38);\n}\n\n.ag-theme-material .ag-header {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-pinned-right-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-pinned-right-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-pinned-left-header {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-pinned-left-header {\n  border-left: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-header-row {\n  height: 56px;\n}\n\n[dir] .ag-theme-material .ag-header-row {\n  border: none;\n}\n\n.ag-theme-material .ag-row {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-row {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n[dir] .ag-theme-material .ag-row:not(.ag-row-first) {\n  border-width: 1px 0 0;\n}\n\n[dir] .ag-theme-material .ag-row.ag-row-last {\n  border-bottom-width: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-left-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-left-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-left-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-right-spacer {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-right-spacer {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-left: none;\n}\n\n[dir=rtl] .ag-theme-material .ag-horizontal-right-spacer.ag-scroller-corner {\n  border-right: none;\n}\n\n[dir] .ag-theme-material .ag-row-hover {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-numeric-cell {\n  text-align: right;\n}\n\n[dir=rtl] .ag-theme-material .ag-numeric-cell {\n  text-align: left;\n}\n\n.ag-theme-material .ag-header-cell-label .ag-header-icon {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-cell-label .ag-header-icon {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-header-cell, [dir] .ag-theme-material .ag-header-group-cell {\n  border-style: solid;\n  border-color: #e2e2e2;\n  border-width: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-cell, [dir=ltr] .ag-theme-material .ag-header-group-cell {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-cell, [dir=rtl] .ag-theme-material .ag-header-group-cell {\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n[dir] .ag-theme-material .ag-header-cell.ag-header-cell-moving, [dir] .ag-theme-material .ag-header-group-cell.ag-header-cell-moving {\n  background-color: #f2f2f2;\n}\n\n[dir] .ag-theme-material .ag-header-cell:not(.ag-header-group-cell-no-group), [dir] .ag-theme-material .ag-header-group-cell:not(.ag-header-group-cell-no-group) {\n  border-top-width: 1px;\n}\n\n[dir] .ag-theme-material .ag-header-row:first-child .ag-header-cell, [dir] .ag-theme-material .ag-header-row:first-child .ag-header-group-cell {\n  border-top-width: 0;\n}\n\n[dir] .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell:hover, [dir] .ag-theme-material .ag-header-group-cell:not(.ag-column-resizing) + .ag-header-group-cell.ag-column-resizing, [dir] .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell:hover, [dir] .ag-theme-material .ag-header-cell:not(.ag-column-resizing) + .ag-header-cell.ag-column-resizing, [dir] .ag-theme-material .ag-header-group-cell:first-of-type:hover, [dir] .ag-theme-material .ag-header-group-cell:first-of-type.ag-column-resizing, [dir] .ag-theme-material .ag-header-cell:first-of-type:hover, [dir] .ag-theme-material .ag-header-cell:first-of-type.ag-column-resizing {\n  background-color: #f2f2f2;\n}\n\n[dir] .ag-theme-material .ag-header-cell-resize {\n  cursor: col-resize;\n}\n\n[dir=ltr] .ag-theme-material .ag-header-select-all {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-header-select-all {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-cell {\n  line-height: 46px;\n}\n\n[dir] .ag-theme-material .ag-cell {\n  border: 1px solid transparent;\n}\n\n[dir=ltr] .ag-theme-material .ag-cell {\n  padding-left: 24px;\n  padding-right: 24px;\n  padding-left: 23px;\n  padding-right: 23px;\n}\n\n[dir=rtl] .ag-theme-material .ag-cell {\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-right: 23px;\n  padding-left: 23px;\n}\n\n.ag-theme-material .ag-row-drag {\n  min-width: 42px;\n}\n\n[dir] .ag-theme-material .ag-row-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n[dir] .ag-theme-material .ag-row-dragging, [dir] .ag-theme-material .ag-row-dragging .ag-row-drag {\n  cursor: move;\n}\n\n[dir] .ag-theme-material .ag-column-drag {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ag-theme-material .ag-row-dragging {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n.ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n.ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  outline: initial;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), [dir] .ag-theme-material .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, [dir] .ag-theme-material .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, [dir] .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), [dir] .ag-theme-material .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, [dir] .ag-theme-material .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle {\n  border: 1px solid #7367F0;\n}\n\n.ag-theme-material .ag-header-cell-resize {\n  width: 16px;\n}\n\n[dir] .ag-theme-material .ag-menu {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  padding: 0;\n}\n\n.ag-theme-material .ag-menu .ag-menu-list {\n  width: 100%;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-list {\n  cursor: default;\n  margin-bottom: 8px;\n  margin-top: 8px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-option-active {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-disabled {\n  opacity: 0.5;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-text {\n  margin-right: 8px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-icon {\n  min-width: 34px;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-icon {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-menu .ag-menu-option-shortcut {\n  padding-right: 16px;\n}\n\n.ag-theme-material .ag-menu .ag-menu-separator {\n  height: 16px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-separator > span {\n  background-image: url(\"data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'16px'%20viewBox%3D'0%200%201%2016px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'8px'%20x2%3D'1'%20y2%3D'8px'%20stroke-width%3D'1'%20stroke%3D'%23E2E2E2'%2F%3E%3C%2Fsvg%3E\");\n}\n\n.ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  width: 34px;\n}\n\n[dir] .ag-theme-material .ag-menu .ag-menu-option-popup-pointer {\n  text-align: center;\n}\n\n.ag-theme-material.ag-dnd-ghost {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  height: 56px !important;\n  line-height: 56px;\n}\n\n[dir] .ag-theme-material.ag-dnd-ghost {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  border: 1px solid #e2e2e2;\n  margin: 0;\n  padding: 0 16px;\n  -webkit-transform: translateY(16px);\n          transform: translateY(16px);\n}\n\n.ag-theme-material.ag-dnd-ghost span,\n.ag-theme-material.ag-dnd-ghost div {\n  height: 100%;\n}\n\n[dir] .ag-theme-material.ag-dnd-ghost span, [dir] .ag-theme-material.ag-dnd-ghost div {\n  margin: 0;\n  padding: 0;\n}\n\n.ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material.ag-dnd-ghost .ag-dnd-ghost-icon {\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-tab-header {\n  min-width: 220px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n[dir] .ag-theme-material .ag-tab-header {\n  background: #eee;\n}\n\n.ag-theme-material .ag-tab-header .ag-tab {\n  display: -webkit-box;\n  display: flex;\n  height: 32px;\n  -webkit-box-flex: 0;\n          flex: none;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n[dir] .ag-theme-material .ag-tab-header .ag-tab {\n  border-bottom: 2px solid transparent;\n}\n\n[dir] .ag-theme-material .ag-tab-body {\n  padding: 4px 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:first-child > span {\n  padding-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > span {\n  padding-bottom: 0;\n}\n\n[dir] .ag-theme-material .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer {\n  background-position-y: 0;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-select, [dir] .ag-theme-material .ag-filter .ag-filter-body {\n  margin-bottom: 8px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-body {\n  margin-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-filter-filter {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-filter-filter {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-select {\n  margin: 8px;\n}\n\n.ag-theme-material .ag-filter input[type=radio] {\n  width: 12px;\n  height: 17px;\n  vertical-align: top;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 3px 0 6px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter input[type=radio] {\n  margin: 0 6px 0 3px;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter input[type=text], [dir=ltr] .ag-theme-material .ag-filter input[type=date] {\n  padding-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter input[type=text], [dir=rtl] .ag-theme-material .ag-filter input[type=date] {\n  padding-right: 8px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-list {\n  height: 240px;\n}\n\n.ag-theme-material .ag-filter .ag-set-filter-item {\n  height: 40px;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-set-filter-item > div, [dir=ltr] .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-left: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-set-filter-item > div, [dir=rtl] .ag-theme-material .ag-filter .ag-set-filter-item > span {\n  margin-right: 5px;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-header-container {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 4px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-apply-panel {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  line-height: 1.5;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  color: #7367F0;\n  font-family: inherit;\n  font-size: inherit;\n  text-transform: uppercase;\n}\n\n[dir] .ag-theme-material .ag-filter .ag-filter-apply-panel button {\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-filter .ag-filter-apply-panel button + button {\n  margin-right: 16px;\n}\n\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group,\n.ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column {\n  height: 32px;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, [dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, [dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel {\n  border-top: 1px solid #e2e2e2;\n  padding-top: 8px;\n}\n\n[dir] .ag-theme-material .ag-column-select-panel .ag-primary-cols-list-panel > div {\n  cursor: pointer;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 34px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-right: 34px;\n}\n\n.ag-theme-material .ag-primary-cols-header-panel {\n  height: 56px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir] .ag-theme-material .ag-primary-cols-header-panel {\n  border-top: 1px solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-primary-cols-header-panel > div {\n  cursor: pointer;\n  margin: 0 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-primary-cols-header-panel .ag-filter-body {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel {\n  width: 100%;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance {\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 600;\n  -webkit-box-flex: 1;\n          flex: auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: nowrap;\n  display: -webkit-box;\n  display: flex;\n  flex-flow: column nowrap;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header {\n  padding: 0 5px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header > div {\n  margin: auto 0;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-body-wrapper {\n  padding-top: 5px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border: 1px solid #e2e2e2;\n  padding: 8px 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border-left: 0;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air {\n  border-right: 0;\n  border-left: 0;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel {\n  height: 56px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: none;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-select-panel {\n  border-bottom: 1px solid #e2e2e2;\n  padding-bottom: 7px;\n  padding-top: 0;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 8px 0;\n  padding-bottom: 16px;\n}\n\n.ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 34px;\n  padding-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-right: 34px;\n  padding-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-list {\n  cursor: default;\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div:first-child > span:first-child {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop > div:first-child > span:first-child {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-tool-panel-wrapper .ag-column-drop:last-child {\n  border-bottom: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-left: 0;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-numeric-header .ag-header-cell-label .ag-header-icon {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.ag-theme-material .ag-paging-panel {\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n}\n\n[dir] .ag-theme-material .ag-paging-panel {\n  border-top: 1px solid #e2e2e2;\n  padding: 0 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-paging-panel > span {\n  margin-left: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-paging-panel > span {\n  margin-right: 32px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-icon {\n  width: 18px;\n  height: 18px;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  cursor: pointer;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  right: 0;\n  left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button button {\n  left: 0;\n  right: 0;\n}\n\n.ag-theme-material .ag-paging-page-summary-panel .ag-paging-button.ag-disabled .ag-icon {\n  color: rgba(0, 0, 0, 0.38);\n  opacity: 0.38;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel .ag-paging-button.ag-disabled button {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-paging-page-summary-panel span {\n  margin: 0 8px;\n}\n\n[dir] .ag-theme-material .ag-row-selected {\n  background-color: #eee;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell), [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell) {\n  border: 1px solid transparent;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top, [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {\n  border-top-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-right-color: #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n  border-left-color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom, [dir] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n  border-bottom-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, [dir=ltr] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-left-color: #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, [dir=rtl] .ag-theme-material .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n  border-right-color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {\n  background-color: rgba(0, 88, 255, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n  background-color: rgba(0, 255, 132, 0.1);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-1:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.2);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-2:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.3);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-3:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.4);\n}\n\n[dir] .ag-theme-material .ag-cell-range-selected-4:not(.ag-cell-focus) {\n  background-color: rgba(122, 134, 203, 0.5);\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-top, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-top {\n  border-top: 1px dashed #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-top.ag-cell.ag-cell-range-selected, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-top.ag-cell.ag-cell-range-selected {\n  border-top: 1px dashed #afafaf;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-right, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-right: 1px dashed #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-right, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-right {\n  border-left: 1px dashed #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-bottom, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-bottom {\n  border-bottom: 1px dashed #7367F0;\n}\n\n[dir] .ag-theme-material .ag-ltr .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected, [dir] .ag-theme-material .ag-rtl .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected {\n  border-bottom: 1px dashed #afafaf;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-left, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-left: 1px dashed #7367F0;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-left, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-left {\n  border-right: 1px dashed #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-left: 1px dashed #afafaf;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected {\n  border-right: 1px dashed #afafaf;\n}\n\n.ag-theme-material .ag-range-handle, .ag-theme-material .ag-fill-handle {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  bottom: -1px;\n}\n\n[dir] .ag-theme-material .ag-range-handle, [dir] .ag-theme-material .ag-fill-handle {\n  background-color: #7367F0;\n}\n\n[dir=ltr] .ag-theme-material .ag-range-handle, [dir=ltr] .ag-theme-material .ag-fill-handle {\n  right: -1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-range-handle, [dir=rtl] .ag-theme-material .ag-fill-handle {\n  left: -1px;\n}\n\n[dir] .ag-theme-material .ag-fill-handle {\n  cursor: cell;\n}\n\n[dir=ltr] .ag-theme-material .ag-range-handle {\n  cursor: nwse-resize;\n}\n\n[dir=rtl] .ag-theme-material .ag-range-handle {\n  cursor: nesw-resize;\n}\n\n.ag-theme-material .ag-cell.ag-cell-inline-editing {\n  height: 72px;\n}\n\n[dir] .ag-theme-material .ag-cell.ag-cell-inline-editing {\n  padding: 24px;\n}\n\n[dir] .ag-theme-material .ag-cell.ag-cell-inline-editing {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n}\n\n[dir] .ag-theme-material .ag-popup-editor {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background-color: #fafafa;\n  padding: 0;\n}\n\n.ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  height: auto;\n}\n\n[dir] .ag-theme-material .ag-popup-editor .ag-large-textarea textarea {\n  padding: 24px;\n}\n\n.ag-theme-material .ag-virtual-list-container .ag-virtual-list-item {\n  height: 40px;\n}\n\n[dir] .ag-theme-material .ag-rich-select {\n  background-color: #fafafa;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-list {\n  width: 200px;\n  height: 312px;\n}\n\n.ag-theme-material .ag-rich-select .ag-rich-select-value {\n  height: 48px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 8px 0 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rich-select .ag-rich-select-value {\n  padding: 0 24px 0 8px;\n}\n\n.ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-virtual-list-item {\n  cursor: default;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-virtual-list-item:hover {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rich-select .ag-rich-select-row {\n  padding-right: 24px;\n}\n\n[dir] .ag-theme-material .ag-rich-select .ag-rich-select-row-selected {\n  background-color: #eee;\n}\n\n[dir=ltr] .ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-ltr .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n.ag-theme-material .ag-floating-filter-button button {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 18px;\n  width: 18px;\n}\n\n[dir] .ag-theme-material .ag-floating-filter-button button {\n  background: transparent;\n  border: 0;\n  padding: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox {\n  margin-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-child-count {\n  margin-left: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-child-count {\n  margin-right: 2px;\n}\n\n.ag-theme-material .ag-selection-checkbox span {\n  position: relative;\n}\n\n.ag-theme-material .ag-column-drop-horizontal {\n  height: 48px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-horizontal {\n  background-color: #eee;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-horizontal {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-horizontal .ag-icon-group, [dir=ltr] .ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-horizontal .ag-icon-group, [dir=rtl] .ag-theme-material .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-small-left,\n.ag-theme-material .ag-column-drop-horizontal .ag-icon-small-right {\n  opacity: 0.54;\n}\n\n[dir] .ag-theme-material .ag-column-drop-horizontal .ag-icon-small-left, [dir] .ag-theme-material .ag-column-drop-horizontal .ag-icon-small-right {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-horizontal .ag-column-drop-empty-message {\n  opacity: 0.38;\n}\n\n.ag-theme-material .ag-column-drop-cell {\n  min-height: 32px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell {\n  background: #e2e2e2;\n  border-radius: 32px;\n  padding: 0 4px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-text {\n  margin: 0 8px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  min-width: 32px;\n  opacity: 0.54;\n}\n\n[dir] .ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button {\n  margin: 0 4px;\n}\n\n.ag-theme-material .ag-column-drop-cell .ag-column-drop-cell-button:hover {\n  opacity: 0.87;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-cell .ag-column-drag {\n  margin-right: 16px;\n}\n\n[dir] .ag-theme-material .ag-column-drop-vertical .ag-column-drop-cell {\n  margin-top: 8px;\n}\n\n.ag-theme-material .ag-select-agg-func-popup {\n  height: 140px;\n}\n\n[dir] .ag-theme-material .ag-select-agg-func-popup {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n  background: #fff;\n  padding: 0;\n}\n\n.ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  line-height: 40px;\n}\n\n[dir] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  cursor: default;\n}\n\n[dir=ltr] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  padding-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-select-agg-func-popup .ag-virtual-list-item {\n  padding-right: 16px;\n}\n\n.ag-theme-material .ag-set-filter-list,\n.ag-theme-material .ag-menu-column-select-wrapper {\n  width: auto;\n}\n\n[dir] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-column-drop-vertical > .ag-column-drop-cell {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-cell-data-changed {\n  background-color: #00acc1 !important;\n}\n\n.ag-theme-material .ag-cell-data-changed-animation {\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n\n[dir] .ag-theme-material .ag-cell-data-changed-animation {\n  background-color: transparent;\n}\n\n[dir] .ag-theme-material .ag-stub-cell {\n  padding-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell {\n  padding-right: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name:  spin-ltr ;\n          animation-name:  spin-ltr ;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell .ag-loading-icon {\n  -webkit-animation-name:  spin-rtl ;\n          animation-name:  spin-rtl ;\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes spin-ltr {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes spin-ltr {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes spin-rtl {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n@keyframes spin-rtl {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n  }\n}\n\n[dir] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-top: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-left: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-stub-cell .ag-loading-text {\n  margin-right: 8px;\n}\n\n[dir] .ag-theme-material .ag-floating-top {\n  border-bottom: 1px solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-floating-bottom {\n  border-top: 1px solid #e2e2e2;\n}\n\n.ag-theme-material .ag-status-bar {\n  color: rgba(0, 0, 0, 0.38);\n  font-weight: 600;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: 1.5;\n}\n\n[dir] .ag-theme-material .ag-status-bar {\n  background: #fff;\n  border: 1px solid #e2e2e2;\n  border-top-width: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-status-bar {\n  padding-right: 32px;\n  padding-left: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-status-bar {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n\n.ag-theme-material .ag-name-value-value {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n[dir] .ag-theme-material .ag-status-bar-center {\n  text-align: center;\n}\n\n[dir] .ag-theme-material .ag-name-value {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n[dir=ltr] .ag-theme-material .ag-name-value {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-name-value {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-details-row {\n  padding: 40px;\n}\n\n[dir] .ag-theme-material .ag-overlay-loading-wrapper {\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n[dir] .ag-theme-material .ag-overlay-loading-center {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  padding: 8px;\n}\n\n.ag-theme-material .ag-side-bar {\n  position: relative;\n}\n\n[dir] .ag-theme-material .ag-side-bar {\n  background-color: #fafafa;\n  border: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar {\n  border-left-width: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar {\n  border-right-width: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons {\n  width: 22px;\n  position: relative;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons {\n  padding-top: 32px;\n  background: #fff;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  color: rgba(0, 0, 0, 0.87);\n  width: 100%;\n  min-height: 144px;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background: transparent;\n  border: 0;\n  padding: 16px 0 16px 0;\n  margin: 0;\n  border-width: 1px 0 1px 0;\n  border-style: solid;\n  border-color: transparent;\n  background-position-y: center;\n  background-position-x: center;\n  background-repeat: no-repeat;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n  border-color: #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  margin-left: -1px;\n  padding-left: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  margin-right: -1px;\n  padding-right: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-column-drop {\n  min-height: 50px;\n}\n\n[dir=ltr] .ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-primary-cols-filter-wrapper {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-group-component {\n  background-color: #fdfdfd;\n  padding: 0px;\n  border: 0 solid #efefef;\n  border-top-width: 1px;\n}\n\n.ag-theme-material .ag-group-component.ag-disabled > .ag-group-component-label .ag-group-component-title, .ag-theme-material .ag-group-component.ag-disabled > .ag-group-component-container {\n  opacity: 0.5;\n}\n\n.ag-theme-material .ag-group-component .ag-group-component-title-bar {\n  height: 18px;\n  font-size: inherit;\n  font-family: inherit;\n  height: 26px;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-component-title-bar {\n  background-color: #f0f0f0;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component:not(.ag-collapsible) > div {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component:not(.ag-collapsible) > div {\n  margin-right: 0;\n}\n\n[dir] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  padding: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar {\n  margin-right: 0;\n}\n\n.ag-theme-material .ag-group-component:not(.ag-collapsible) > .ag-group-component-title-bar .ag-column-group-icons {\n  display: none;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-component-toolbar {\n  background-color: #f7f7f7;\n  padding: 8px;\n  border: 0 solid #e2e2e2;\n}\n\n[dir] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  padding: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-group-component > .ag-group-component-container {\n  margin-right: 16px;\n}\n\n[dir] .ag-theme-material .ag-group-component .ag-group-item {\n  margin: 4px 0;\n}\n\n.ag-theme-material .ag-group-component .ag-group-item .ag-group-component-title-bar {\n  height: 18px;\n}\n\n.ag-theme-material .ag-labeled label {\n  white-space: nowrap;\n}\n\n[dir=ltr] .ag-theme-material .ag-labeled label {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-labeled label {\n  margin-left: 8px;\n}\n\n[dir] .ag-theme-material .ag-labeled.ag-label-align-top label {\n  margin-bottom: 4px;\n}\n\n[dir=ltr] .ag-theme-material .ag-slider > .ag-wrapper > div:not(:first-of-type), [dir=ltr] .ag-theme-material .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {\n  margin-left: 16px;\n}\n\n[dir=rtl] .ag-theme-material .ag-slider > .ag-wrapper > div:not(:first-of-type), [dir=rtl] .ag-theme-material .ag-angle-select > .ag-wrapper > div:not(:first-of-type) {\n  margin-right: 16px;\n}\n\n.ag-theme-material .ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  width: 24px;\n  height: 24px;\n}\n\n[dir] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-parent-circle {\n  border-radius: 12px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.9);\n  background-color: #ffffff;\n}\n\n.ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  top: 4px;\n  width: 6px;\n  height: 6px;\n}\n\n[dir] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  margin-top: -4px;\n  border-radius: 3px;\n  background-color: #4c4c4c;\n}\n\n[dir=ltr] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  left: 12px;\n  margin-left: -3px;\n}\n\n[dir=rtl] .ag-theme-material .ag-angle-select .ag-angle-select-field .ag-child-circle {\n  right: 12px;\n  margin-right: -3px;\n}\n\n.ag-theme-material .ag-toggle-button .ag-input-wrapper {\n  height: 18px;\n  width: 40px;\n}\n\n[dir] .ag-theme-material .ag-toggle-button .ag-input-wrapper {\n  background-color: #fff;\n  border: 1px solid #333;\n  border-radius: 500rem;\n}\n\n.ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  width: 18px;\n  height: 18px;\n}\n\n[dir] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  border: 1px solid #333;\n  border-radius: 500rem;\n}\n\n[dir=ltr] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  right: calc(100% - 18px);\n}\n\n[dir=rtl] .ag-theme-material .ag-toggle-button .ag-input-wrapper .ag-icon {\n  left: calc(100% - 18px);\n}\n\n[dir] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper {\n  background-color: #ff4081;\n}\n\n[dir] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  background: #fff;\n}\n\n[dir=ltr] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  right: -1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-toggle-button.ag-selected .ag-input-wrapper .ag-icon {\n  left: -1px;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-color-picker > .ag-wrapper > div {\n  width: 18px;\n  height: 18px;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper button {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-color-picker > .ag-wrapper button:hover {\n  background-color: #fafafa;\n}\n\n[dir] .ag-theme-material .ag-dialog.ag-color-dialog {\n  border-radius: 5px;\n}\n\n[dir] .ag-theme-material .ag-color-panel {\n  padding: 8px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-color {\n  background-color: red;\n  border-radius: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-tools {\n  padding: 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-spectrum-sat {\n  background-image: -webkit-gradient(linear, left top, right top, from(white), to(rgba(204, 154, 129, 0)));\n  background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0));\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-spectrum-sat {\n  background-image: -webkit-gradient(linear, right top, left top, from(white), to(rgba(204, 154, 129, 0)));\n  background-image: linear-gradient(to left, white, rgba(204, 154, 129, 0));\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-val {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(black), to(rgba(204, 154, 129, 0)));\n  background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0));\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-dragger {\n  height: 12px;\n  width: 12px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-dragger {\n  border-radius: 12px;\n  border: 1px solid white;\n  background: black;\n  box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24);\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-hue-background {\n  border-radius: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-alpha-background {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-color-panel .ag-hue-alpha {\n  height: 11px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-hue-alpha {\n  margin-bottom: 10px;\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-slider {\n  width: 13px;\n  height: 13px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-slider {\n  margin-top: -12px;\n  border-radius: 13px;\n  background-color: #f8f8f8;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n\n.ag-theme-material .ag-color-panel .ag-spectrum-text-value {\n  font-weight: bold;\n  line-height: 20px;\n  color: #333;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-spectrum-text-value:focus {\n  border: 1px solid #0d77e4;\n  padding: 2px;\n}\n\n[dir] .ag-theme-material .ag-color-panel .ag-recent-colors > div {\n  margin: 0 3px;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-recent-colors > div:first-child {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-recent-colors > div:first-child {\n  margin-right: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-color-panel .ag-recent-colors > div:last-child {\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-color-panel .ag-recent-colors > div:last-child {\n  margin-left: 0;\n}\n\n[dir=ltr] .ag-theme-material.ag-popup > div:not(.ag-tooltip-custom) {\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n[dir=rtl] .ag-theme-material.ag-popup > div:not(.ag-tooltip-custom) {\n  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);\n}\n\n[dir] .ag-theme-material .ag-panel {\n  background-color: #fff;\n  border: 1px solid #e2e2e2;\n}\n\n.ag-dragging-range-handle .ag-theme-material .ag-panel.ag-dialog, .ag-dragging-fill-handle .ag-theme-material .ag-panel.ag-dialog {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar {\n  color: rgba(0, 0, 0, 0.54);\n  height: 56px;\n  font-size: inherit;\n  font-weight: 600;\n  font-family: inherit;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar {\n  background-color: #fff;\n  border-bottom: 1px solid #fcfcfc;\n  padding: 5px 10px;\n}\n\n[dir=ltr] .ag-theme-material .ag-panel .ag-title-bar {\n  padding-left: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-panel .ag-title-bar {\n  padding-right: 24px;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  height: 20px;\n  width: 20px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button {\n  border-radius: 5px;\n}\n\n.ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button .ag-icon {\n  line-height: 20px;\n  font-size: 20px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:hover, [dir] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button.ag-has-popup {\n  background-color: #e6e6e6;\n}\n\n[dir=ltr] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:not(:last-child) {\n  margin-right: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-panel .ag-title-bar .ag-title-bar-buttons .ag-button:not(:last-child) {\n  margin-left: 5px;\n}\n\n.ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar {\n  height: 30px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar {\n  background-color: #fff;\n  padding: 2px;\n}\n\n[dir] .ag-theme-material .ag-panel .ag-message-box .ag-message-box-button-bar button {\n  border-radius: 2px;\n}\n\n.ag-theme-material .ag-tooltip {\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n}\n\n[dir] .ag-theme-material .ag-tooltip {\n  background-color: #535353;\n  border-radius: 2px;\n  padding: 5px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #ebebeb;\n}\n\n.ag-theme-material .ag-tooltip.ag-tooltip-hiding {\n  opacity: 0;\n}\n\n[dir] .ag-theme-material .ag-chart .ag-chart-menu {\n  border-radius: 5px;\n  background: #fff;\n}\n\n[dir] .ag-theme-material .ag-chart .ag-chart-menu > span:hover {\n  background-color: #e6e6e6;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-group-component-container {\n  margin-right: 0;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail {\n  border: 1px solid #e2e2e2;\n  border-radius: 5px;\n  margin: 5px;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(2n+2):not(:last-child) {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(2n+2):not(:last-child) {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n+1) {\n  margin-left: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n+1) {\n  margin-right: 2px;\n}\n\n[dir=ltr] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n) {\n  margin-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail:nth-child(3n) {\n  margin-left: 2px;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail.ag-selected {\n  border-color: #7367F0;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item {\n  color: rgba(0, 0, 0, 0.87);\n  font-size: inherit-2;\n}\n\n.ag-theme-material .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected {\n  color: #7367F0;\n}\n\n[dir] .ag-theme-material .ag-chart-tabbed-menu .ag-chart-format .ag-chart-format-wrapper .ag-group-item {\n  margin: 9.6px 0;\n}\n\n.ag-theme-material .ag-icon {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \"agGridMaterial\";\n  speak: none;\n  font-size: 18px;\n  color: #333;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.ag-theme-material .ag-icon-aggregation:before {\n  content: \"\\E900\";\n}\n\n.ag-theme-material .ag-icon-arrows:before {\n  content: \"\\E901\";\n}\n\n.ag-theme-material .ag-icon-asc:before {\n  content: \"\\E902\";\n}\n\n.ag-theme-material .ag-icon-cancel:before {\n  content: \"\\E903\";\n}\n\n.ag-theme-material .ag-icon-chart:before {\n  content: \"\\E904\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-color-picker:before {\n  content: \"\\E908\";\n}\n\n.ag-theme-material .ag-icon-column:before {\n  content: \"\\E909\";\n}\n\n.ag-theme-material .ag-icon-columns:before {\n  content: \"\\E90A\";\n}\n\n.ag-theme-material .ag-icon-contracted:before {\n  content: \"\\E90B\";\n}\n\n.ag-theme-material .ag-icon-copy:before {\n  content: \"\\E90C\";\n}\n\n.ag-theme-material .ag-icon-cross:before {\n  content: \"\\E90D\";\n}\n\n.ag-theme-material .ag-icon-cut:before {\n  content: \"\\E90E\";\n}\n\n.ag-theme-material .ag-icon-data:before {\n  content: \"\\E90F\";\n}\n\n.ag-theme-material .ag-icon-desc:before {\n  content: \"\\E910\";\n}\n\n.ag-theme-material .ag-icon-expanded:before {\n  content: \"\\E911\";\n}\n\n.ag-theme-material .ag-icon-eye-slash:before {\n  content: \"\\E912\";\n}\n\n.ag-theme-material .ag-icon-eye:before {\n  content: \"\\E913\";\n}\n\n.ag-theme-material .ag-icon-filter:before {\n  content: \"\\E914\";\n}\n\n.ag-theme-material .ag-icon-first:before {\n  content: \"\\E915\";\n}\n\n.ag-theme-material .ag-icon-grip:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-icon-group:before {\n  content: \"\\E917\";\n}\n\n.ag-theme-material .ag-icon-indeterminate:before {\n  content: \"\\E918\";\n}\n\n.ag-theme-material .ag-icon-last:before {\n  content: \"\\E919\";\n}\n\n.ag-theme-material .ag-icon-left:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-linked:before {\n  content: \"\\E934\";\n}\n\n.ag-theme-material .ag-icon-loading:before {\n  content: \"\\E91B\";\n}\n\n.ag-theme-material .ag-icon-maximize:before {\n  content: \"\\E91C\";\n}\n\n.ag-theme-material .ag-icon-menu:before {\n  content: \"\\E91D\";\n}\n\n.ag-theme-material .ag-icon-minimize:before {\n  content: \"\\E91E\";\n}\n\n.ag-theme-material .ag-icon-minus:before {\n  content: \"\\E91F\";\n}\n\n.ag-theme-material .ag-icon-next:before {\n  content: \"\\E920\";\n}\n\n.ag-theme-material .ag-icon-none:before {\n  content: \"\\E921\";\n}\n\n.ag-theme-material .ag-icon-not-allowed:before {\n  content: \"\\E922\";\n}\n\n.ag-theme-material .ag-icon-paste:before {\n  content: \"\\E923\";\n}\n\n.ag-theme-material .ag-icon-pin:before {\n  content: \"\\E924\";\n}\n\n.ag-theme-material .ag-icon-pivot:before {\n  content: \"\\E925\";\n}\n\n.ag-theme-material .ag-icon-plus:before {\n  content: \"\\E926\";\n}\n\n.ag-theme-material .ag-icon-previous:before {\n  content: \"\\E927\";\n}\n\n.ag-theme-material .ag-icon-radio-button-off:before {\n  content: \"\\E928\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on:before {\n  content: \"\\E929\";\n}\n\n.ag-theme-material .ag-icon-right:before {\n  content: \"\\E92A\";\n}\n\n.ag-theme-material .ag-icon-save:before {\n  content: \"\\E92B\";\n}\n\n.ag-theme-material .ag-icon-small-down:before {\n  content: \"\\E92C\";\n}\n\n.ag-theme-material .ag-icon-small-left:before {\n  content: \"\\E92D\";\n}\n\n.ag-theme-material .ag-icon-small-right:before {\n  content: \"\\E92E\";\n}\n\n.ag-theme-material .ag-icon-small-up:before {\n  content: \"\\E92F\";\n}\n\n.ag-theme-material .ag-icon-tick:before {\n  content: \"\\E930\";\n}\n\n.ag-theme-material .ag-icon-tree-closed:before {\n  content: \"\\E931\";\n}\n\n.ag-theme-material .ag-icon-tree-indeterminate:before {\n  content: \"\\E932\";\n}\n\n.ag-theme-material .ag-icon-tree-open:before {\n  content: \"\\E933\";\n}\n\n.ag-theme-material .ag-icon-unlinked:before {\n  content: \"\\E935\";\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-unchecked {\n  line-height: 18px;\n}\n\n[dir] .ag-theme-material .ag-icon-checkbox-checked, [dir] .ag-theme-material .ag-icon-checkbox-indeterminate, [dir] .ag-theme-material .ag-icon-checkbox-unchecked {\n  background-color: transparent;\n  border-radius: 3px;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  opacity: 0.38;\n}\n\n[dir] .ag-theme-material .ag-icon-checkbox-checked-readonly, [dir] .ag-theme-material .ag-icon-checkbox-indeterminate-readonly, [dir] .ag-theme-material .ag-icon-checkbox-unchecked-readonly {\n  cursor: default;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked-readonly:before {\n  content: \"\\E905\";\n}\n\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly:before {\n  content: \"\\E906\";\n}\n\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly:before {\n  content: \"\\E907\";\n}\n\n.ag-theme-material .ag-icon-row-drag:before {\n  content: \"\\E916\";\n}\n\n.ag-theme-material .ag-right-arrow:before {\n  content: \"\\E91A\";\n}\n\n.ag-theme-material .ag-icon-radio-button-on {\n  color: #ff4081;\n}\n\n.ag-theme-material .ag-right-arrow:before {\n  content: \"\\E92A\";\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl {\n  text-align: right;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl {\n  text-align: left;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: left;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-numeric-cell {\n  text-align: right;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-checkbox:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-rtl .ag-radio-button:not(.ag-label-align-left) label, [dir=ltr] .ag-theme-material .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-right: 8px;\n  margin-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-checkbox:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-rtl .ag-radio-button:not(.ag-label-align-left) label, [dir=rtl] .ag-theme-material .ag-rtl .ag-toggle-button:not(.ag-label-align-left) label {\n  margin-left: 8px;\n  margin-right: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select {\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-left: 8px;\n  padding-right: 32px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message {\n  padding-right: 8px;\n  padding-left: 32px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons {\n  margin-right: 8px;\n  margin-left: 8px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-left: 0;\n  margin-right: 34px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent {\n  margin-right: 0;\n  margin-left: 34px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-header-select-all {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n.ag-theme-material .ag-rtl .ag-selection-checkbox,\n.ag-theme-material .ag-rtl .ag-group-checkbox,\n.ag-theme-material .ag-rtl .ag-group-expanded,\n.ag-theme-material .ag-rtl .ag-group-contracted {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty) {\n  margin-left: 24px;\n  margin-right: initial;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox, [dir=ltr] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-right: 24px;\n  margin-left: initial;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-checkbox + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-expanded + .ag-group-checkbox, [dir=rtl] .ag-theme-material .ag-rtl .ag-group-contracted + .ag-group-checkbox {\n  margin-left: 24px;\n  margin-right: initial;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-left: unset;\n  margin-right: 2px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-group-child-count {\n  margin-right: unset;\n  margin-left: 2px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal {\n  padding-left: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group, [dir=ltr] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-left: 24px;\n  margin-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-group, [dir=rtl] .ag-theme-material .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot {\n  margin-right: 24px;\n  margin-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-right: 24px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-floating-filter-button {\n  margin-left: 24px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-set-filter-item > div, [dir=ltr] .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-set-filter-item > div, [dir=rtl] .ag-theme-material .ag-rtl .ag-set-filter-item > span {\n  margin-right: 0;\n  margin-left: 5px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-header .ag-header-cell-resize::after {\n  border-right: 1px solid #e2e2e2;\n  border-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-left: 1px solid #e2e2e2;\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar .ag-panel-container {\n  border-right: 1px solid #e2e2e2;\n  border-left: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-left: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar.full-width .ag-panel-container {\n  border-right: 0;\n}\n\n.ag-theme-material .sass-variables::after {\n  content: '{ \"autoSizePadding\": \"24px\", \"headerHeight\": \"56px\", \"groupPaddingSize\": \"42px\", \"footerPaddingAddition\": \"32px\", \"virtualItemHeight\": \"40px\", \"aggFuncPopupHeight\": \"140px\", \"checkboxIndentWidth\": \"26px\", \"leafNodePadding\": \"24px\", \"rowHeight\": \"48px\", \"gridSize\": \"8px\", \"iconSize\": \"18px\" }';\n  display: none;\n}\n\n.ag-theme-material .ag-icon-checkbox-checked,\n.ag-theme-material .ag-icon-checkbox-checked-readonly,\n.ag-theme-material .ag-icon-checkbox-unchecked,\n.ag-theme-material .ag-icon-checkbox-unchecked-readonly,\n.ag-theme-material .ag-icon-checkbox-indeterminate,\n.ag-theme-material .ag-icon-checkbox-indeterminate-readonly,\n.ag-theme-material .ag-icon-radio-button-on,\n.ag-theme-material .ag-icon-radio-button-off {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  line-height: 24px;\n}\n\n.ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {\n  -webkit-transition: background-color 0.5s;\n  transition: background-color 0.5s;\n}\n\n[dir] .ag-theme-material .ag-cell-highlight {\n  background-color: #fce4ec !important;\n}\n\n.ag-theme-material .ag-cell-highlight-animation {\n  -webkit-transition: background-color 1s;\n  transition: background-color 1s;\n}\n\n.ag-theme-material .ag-menu-option {\n  height: 38px;\n}\n\n[dir] .ag-theme-material .ag-side-bar {\n  border-bottom: 0;\n  border-top: 0;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar {\n  border-right: 0;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar {\n  border-left: 0;\n}\n\n.ag-theme-material .ag-side-bar .ag-side-buttons button {\n  color: rgba(0, 0, 0, 0.54);\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 600;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons button {\n  border: 0;\n  background: transparent;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-side-button button {\n  background-color: transparent;\n  border-width: 0;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  background-color: #fafafa;\n}\n\n[dir=ltr] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 2px solid #7367F0;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-right: 2px solid #7367F0;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n[dir] .ag-theme-material .ag-side-bar .ag-filter-toolpanel-body {\n  background-color: #fff;\n}\n\n[dir] .ag-theme-material .ag-status-bar {\n  border-top-width: 1px;\n}\n\n[dir=ltr] .ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-left: 0;\n  margin-left: 0;\n  padding-left: 0;\n  border-right: 2px solid #7367F0;\n  margin-right: -2px;\n  padding-right: 1px;\n}\n\n[dir=rtl] .ag-theme-material .ag-rtl .ag-side-bar .ag-side-buttons .ag-selected button {\n  border-right: 0;\n  margin-right: 0;\n  padding-right: 0;\n  border-left: 2px solid #7367F0;\n  margin-left: -2px;\n  padding-left: 1px;\n}\n\n.ag-theme-material .ag-group-expanded .ag-icon-contracted:empty:before {\n  content: \"\\E933\";\n}\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n\n.ag-grid-table {\n  color: inherit !important;\n  height: calc(var(--vh, 1vh) * 100 - 30rem);\n}\n\n@media screen and (max-height: 800px) {\n  .ag-grid-table {\n    height: 620px;\n  }\n}\n\n.ag-grid-table .ag-header-cell .ag-cell-label-container .ag-header-icon.ag-filter-icon {\n  display: none;\n}\n\n[dir] .ag-grid-table .ag-filter-select {\n  padding: 0.3rem;\n  background: transparent;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.ag-grid-table .ag-filter-filter {\n  height: 25px !important;\n}\n\n[dir] .ag-grid-table .ag-filter-filter {\n  padding-bottom: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 10px;\n  margin-bottom: 14px !important;\n}\n\n[dir=ltr] .ag-grid-table .ag-filter-filter {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n[dir=rtl] .ag-grid-table .ag-filter-filter {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n[dir] .ag-grid-table .ag-input-text-wrapper input {\n  padding-bottom: 0 !important;\n}\n\n.ag-grid-table .ag-floating-filter-body {\n  height: unset;\n}\n\n.ag-grid-table .ag-cell-inline-editing {\n  height: 62px !important;\n}\n\n[dir] .ag-grid-table .ag-cell-inline-editting, [dir] .ag-grid-table .ag-popup-editor {\n  padding-bottom: 12px;\n}\n\n@media screen and (max-width: 614px) {\n  .ag-grid-table .ag-grid-table-actions-right {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n  }\n}\n\n@media screen and (max-width: 614px) and (min-width: 443px) {\n  .ag-grid-table .ag-grid-table-actions-left {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n}\n\n.ag-grid-table .ag-horizontal-left-spacer, .ag-grid-table .ag-horizontal-right-spacer {\n  overflow-x: auto;\n}\n\n.ag-grid-table .ag-icon-checkbox-checked,\n.ag-grid-table .ag-icon-checkbox-indeterminate {\n  font-size: 22px;\n  color: rgba(var(--vs-primary), 1) !important;\n}\n\n.ag-grid-table .ag-icon-checkbox-unchecked {\n  color: #b8c2cc !important;\n  font-size: 22px;\n}\n\n.ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dir] .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #dae1e7;\n  border-radius: 20px;\n}\n\n[dir] .ag-grid-table ::-webkit-scrollbar-track {\n  background: #f8f8f8;\n  border-radius: 20px;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material {\n  background: transparent;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  color: #fff;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header {\n  background: transparent;\n  border-bottom-color: #414561;\n}\n\n[dir=ltr] .theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-right-color: #414561 !important;\n}\n\n[dir=rtl] .theme-dark .ag-grid-table.ag-theme-material .ag-cell-last-left-pinned {\n  border-left-color: #414561 !important;\n}\n\n.theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-floating-filter-input {\n  border-bottom-color: #414561;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row-hover, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-cell:hover {\n  background-color: #262c49;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row-selected {\n  background: #262c49;\n}\n\n[dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-cell, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-header-group-cell, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-row, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-pinned-left-header, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-left-spacer, [dir] .theme-dark .ag-grid-table.ag-theme-material .ag-horizontal-right-spacer {\n  border-color: #414561;\n}\n\n.theme-dark .ag-grid-table .ag-icon-checkbox-unchecked,\n.theme-dark .ag-grid-table .ag-icon-filter,\n.theme-dark .ag-grid-table .ag-icon-asc,\n.theme-dark .ag-grid-table .ag-icon-desc {\n  color: #c2c6dc !important;\n}\n\n[dir] .theme-dark .ag-grid-table .ag-filter-body-wrapper {\n  background-color: #262c49;\n}\n\n.theme-dark .ag-grid-table .ag-filter-select {\n  color: #c2c6dc;\n}\n\n[dir] .theme-dark .ag-grid-table .ag-filter-select {\n  border-color: #414561;\n}\n\n[dir] .theme-dark .ag-grid-table option {\n  background-color: #10163a;\n}\n\n.theme-dark .ag-grid-table ::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n[dir] .theme-dark .ag-grid-table ::-webkit-scrollbar-thumb {\n  background: #7367F0;\n  border-radius: 20px;\n}\n\n[dir] .theme-dark .ag-grid-table ::-webkit-scrollbar-track {\n  background: #262c49;\n  border-radius: 20px;\n}\n\n.ag-grid-cell-chip {\n  top: 50%;\n  line-height: 1;\n}\n\n[dir] .ag-grid-cell-chip {\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/AgrideComponent.vue?vue&type=template&id=107436f0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/AgrideComponent.vue?vue&type=template&id=107436f0& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "AGrid Component", "code-toggler": "" }
    },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c(
              "div",
              { staticClass: "flex btn-group" },
              [
                _c(
                  "vs-button",
                  {
                    attrs: {
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-plus-square"
                    }
                  },
                  [_vm._v("Add")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      disabled: _vm.selected.length !== 1,
                      color: "warning",
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-edit"
                    }
                  },
                  [_vm._v("Edit")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      disabled: _vm.selected.length <= 0,
                      color: "danger",
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-trash-2"
                    }
                  },
                  [_vm._v("Delete")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      disabled: _vm.selected.length <= 0,
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-check-square"
                    },
                    on: {
                      click: function($event) {
                        return _vm.gridApi.deselectAll()
                      }
                    }
                  },
                  [_vm._v("Clear")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      disabled: _vm.selected.length <= 0,
                      color: "success",
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-download-cloud"
                    },
                    on: {
                      click: function($event) {
                        return _vm.gridApi.exportDataAsCsv({
                          onlySelected: true
                        })
                      }
                    }
                  },
                  [_vm._v("Export")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("ag-grid-vue", {
              staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
              attrs: {
                columnDefs: _vm.columnDefs,
                defaultColDef: _vm.defaultColDef,
                rowSelection: "multiple",
                pagination: true,
                paginationPageSize: 100,
                animateRows: true,
                rowData: _vm.rowData
              },
              on: {
                "grid-ready": _vm.onGridReady,
                "selection-changed": _vm.onSelectionChanged
              }
            })
          ],
          1
        ),
        _vm._v("\n        " + _vm._s(_vm.selected) + "\n    ")
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <div class="flex btn-group">\n        <vs-button type="relief" icon-pack="feather" icon="icon-plus-square">Add</vs-button>\n        <vs-button :disabled="selected.length!==1" color="warning" type="relief" icon-pack="feather" icon="icon-edit">Edit</vs-button>\n        <vs-button :disabled="selected.length<=0" color="danger" type="relief" icon-pack="feather" icon="icon-trash-2">Delete</vs-button>\n        <vs-button :disabled="selected.length<=0" @click="gridApi.deselectAll()" type="relief" icon-pack="feather" icon="icon-check-square">Clear</vs-button>\n        <vs-button :disabled="selected.length<=0" color="success" @click="gridApi.exportDataAsCsv({onlySelected: true})" type="relief" icon-pack="feather" icon="icon-download-cloud">Export</vs-button>\n        </div>\n        <ag-grid-vue class="ag-theme-material w-100 my-4 ag-grid-table"\n        :columnDefs="columnDefs"\n        :defaultColDef="defaultColDef"\n        rowSelection="multiple"\n        @grid-ready="onGridReady"\n        @selection-changed="onSelectionChanged"\n        :pagination="true"\n        :paginationPageSize="100"\n        :animateRows="true"\n        :rowData="rowData">\n        </ag-grid-vue>\n        <script>\n        //ag-grid\n        import {AgGridVue} from "ag-grid-vue";\n        import \'@sass/vuexy/extraComponents/agGridStyleOverride.scss\'\n        export default {\n        name: "AgridComponent",\n        components:{\n        AgGridVue\n        },\n        data() {\n        return {\n        selected: [],\n        gridApi: null,\n        columnDefs: [\n        {headerName: \'Make\', field: \'make\', checkboxSelection: true},\n        {\n        headerName: \'Model\',\n        field: \'model\',\n        cellRenderer:function (params) {\n        return \'<img src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png" width="100%" alt="">\';\n        }\n        },\n        {headerName: \'Price\', field: \'price\'}\n        ],\n        defaultColDef: {\n        sortable: true,\n        resizable: true,\n        filter: true,\n        },\n        rowData: [\n        {make: \'Toyota\', model: \'Celica\', price: 35000},\n        {make: \'Ford\', model: \'Mondeo\', price: 32000},\n        {make: \'Porsche\', model: \'Boxter\', price: 72000}\n        ]\n        }\n        },\n        methods: {\n        onGridReady(params) {\n        this.gridApi = params.api;\n        },\n        onSelectionChanged() {\n        this.selected = this.gridApi.getSelectedRows();\n        }\n        }\n        }\n        </script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CommonCode.vue?vue&type=template&id=fdc97502&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/CommonCode.vue?vue&type=template&id=fdc97502&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Common Code", "code-toggler": "" }
    },
    [
      _c("h4", { staticClass: "text-primary" }, [
        _vm._v("Please toggle to see code")
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n        <script>\n            //map promise\n            async destroyProduct(){\n                let self = this;\n                self.$vs.loading();\n                const promises = self.selected.map(async function (data) {\n                    await self.$store.dispatch('destroyProduct', data.id);\n                });\n                await Promise.all(promises).then(function () {\n                    self.$vs.notify({\n                        time: 4000,\n                        title: 'ប្រតិបត្តិការជោគជ័យ',\n                        text: 'ទិន្នន័យបានលុប',\n                        color: 'success',\n                        iconPack: 'feather',\n                        icon: 'icon-check',\n                        position: 'top-center'\n                    });\n                    self.selected = [];\n                    self.$vs.loading.close();\n                })\n            }\n        //Reduce sum function\n            total_income() {\n                return this.data.items.reduce(function (total, item) {\n                    return total + parseFloat(item.balance)\n                }, 0)\n            }\n        //for loop\n        for (const [index, el] of item.invoice_detail.entries()) {\n            if (el.inventory_type === 'bundle'){\n                total += parseFloat(item.amount);\n                break;\n            }\n            if (el.inventory_type !=='purchase_only') {\n                total += parseFloat(el.amount)\n            }\n        }\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Currency Formatter", "code-toggler": "" }
    },
    [
      _vm._v("\n    " + _vm._s(_vm.formatter.format(1200)) + "\n    "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n        <script>\n            this.formatter.format(1200)\n            //usd\n            Vue.prototype.formatter = new Intl.NumberFormat('km-KH', {\n                style: 'currency',\n                currency: 'USD',\n            });\n            //Khmer Riel\n            Vue.prototype.formatter = new Intl.NumberFormat('km-KH', {\n                style: 'currency',\n                currency: 'kmr',\n            });\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Date Range Picker", "code-toggler": "" }
    },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vs-input", {
              staticClass: "w-full",
              attrs: {
                "icon-pack": "feather",
                icon: "icon-calendar",
                placeholder: "Search"
              },
              on: {
                click: function($event) {
                  return _vm.$refs.modal.open()
                }
              },
              model: {
                value: _vm.date,
                callback: function($$v) {
                  _vm.date = $$v
                },
                expression: "date"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "sweet-modal",
        { ref: "modal", attrs: { title: "Chose a date", blocking: true } },
        [_c("date-range-picker", { on: { update: _vm.date_range } })],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <div class="vx-row">\n            <div class="vx-col w-full">\n                <vs-input @click="$refs.modal.open()" icon-pack="feather" icon="icon-calendar" placeholder="Search" v-model="date" class="w-full" />\n            </div>\n        </div>\n        <sweet-modal ref="modal" title="Chose a date" :blocking="true">\n        <date-range-picker @update="date_range"/>\n        </sweet-modal>\n        <script>\n        export default {\n            name: "RangeDatePicker",\n            data(){\n                return{\n                    date:`${this.moment().format(\'YYYY/MM/DD\')}-${this.moment().endOf(\'month\').add(1,\'month\').format(\'YYYY/MM/DD\')}`,\n                }\n            },\n            methods: {\n                date_range(date) {\n                    this.date = `${this.moment(date.from).format(\'YYYY/MM/DD\')}-${this.moment(date.to).format(\'YYYY/MM/DD\')}`;\n                    this.$refs.modal.close();\n                }\n            }\n        }\n        </script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DropZone.vue?vue&type=template&id=7ef2d482&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/DropZone.vue?vue&type=template&id=7ef2d482&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Dropzone", "code-toggler": "" }
    },
    [
      _c("h4", [_vm._v("Full")]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vue-dropzone", {
              ref: "image",
              staticClass: "p-1",
              attrs: {
                duplicateCheck: true,
                id: "dropzone",
                options: _vm.dropzoneOptions
              },
              on: { "vdropzone-success": _vm.successUpload }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("Max Content")]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vue-dropzone", {
              ref: "image2",
              staticClass: "max-content p-1",
              attrs: {
                duplicateCheck: true,
                id: "dropzone2",
                options: _vm.dropzoneOptions
              },
              on: { "vdropzone-success": _vm.successUpload }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v("Max Content for edit")]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c("vue-dropzone", {
              ref: "image3",
              staticClass: "max-content p-1",
              attrs: {
                duplicateCheck: true,
                id: "dropzone3",
                options: _vm.dropzoneOptions
              },
              on: {
                "vdropzone-success": _vm.successUpload,
                "vdropzone-mounted": _vm.editThumb
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <h4>Full</h4>\n        <div class="vx-row">\n            <div class="vx-col w-full">\n                <vue-dropzone class="p-1" :duplicateCheck="true" ref="image"\n                @vdropzone-success="successUpload" id="dropzone"\n                :options="dropzoneOptions"></vue-dropzone>\n            </div>\n        </div>\n        <h4>Max Content</h4>\n            <div class="vx-row">\n                <div class="vx-col w-full">\n                <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image2"\n                @vdropzone-success="successUpload" id="dropzone2"\n                :options="dropzoneOptions"></vue-dropzone>\n            </div>\n        </div>\n        <h4>Max Content for edit</h4>\n        <div class="vx-row">\n            <div class="vx-col w-full">\n                <vue-dropzone class="max-content p-1" :duplicateCheck="true" ref="image3"\n                @vdropzone-success="successUpload" id="dropzone3"\n                :options="dropzoneOptions"\n                @vdropzone-mounted="editThumb"\n            ></vue-dropzone>\n            </div>\n        </div>\n        <script>\n            export default {\n                name: "DropZone",\n                data(){\n                    return{\n                        image:\'images/placeholder/placeholder.png\',\n                        //dropzone option\n                        dropzoneOptions: {\n                            url: route(\'file.upload.thumb\'),\n                            maxFiles: 1,\n                            addRemoveLinks: true,\n                            dictDefaultMessage: "ដាក់រូបភាពទំនិញបើមាន",\n                            thumbnailWidth: 150,\n                            thumbnailHeight: 150,\n                        }\n                }\n            },\n            methods:{\n                //image upload\n                    successUpload(file, res) {\n                    this.image = (res.path)\n                },\n                //edit thumb\n                editThumb(){\n                    this.$refs.image3.manuallyAddFile({size:123}, this.image);\n                },\n            }\n        }\n        </script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/FormValidation.vue?vue&type=template&id=1726ad38&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/FormValidation.vue?vue&type=template&id=1726ad38&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Form Validation", "code-toggler": "" }
    },
    [
      _c("div", { attrs: { id: "printMe" } }, [
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col md:w-1/3 w-full" },
            [
              _c(
                "vx-input-group",
                { staticClass: "mb-base" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: { placeholder: "Input", name: "input" },
                    model: {
                      value: _vm.input,
                      callback: function($$v) {
                        _vm.input = $$v
                      },
                      expression: "input"
                    }
                  }),
                  _vm._v(" "),
                  _c("template", { slot: "append" }, [
                    _c(
                      "div",
                      { staticClass: "append-text btn-addon" },
                      [
                        _c("vs-button", { on: { click: _vm.formSubmit } }, [
                          _vm._v("Button")
                        ])
                      ],
                      1
                    )
                  ])
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("input"),
                      expression: "errors.has('input')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("input")))]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <!-- Append Button -->\n            <vx-input-group class="mb-base">\n            <vs-input v-validate="\'required\'" placeholder="Input" name="input" v-model="input" class="w-full" />\n            <template slot="append">\n            <div class="append-text btn-addon">\n            <vs-button @click="formSubmit">Button</vs-button>\n            </div>\n            </template>\n            </vx-input-group>\n        <!-- /Append Button -->\n        <span class="text-danger text-sm" v-show="errors.has(\'input\')">' +
            _vm._s("{{ errors.first('input') }}") +
            "</span>\n       <script>\n        formSubmit() {\n            let self = this;\n                this.$validator.validateAll().then(result => {\n                    if (result) {\n                        self.$vs.loading();\n                        self.$store.dispatch('formSubmit', {name:self.brand}).then(function (data) {\n                        if (data) {\n                            self.$vs.notify({\n                            time: 4000,\n                            title: 'ប្រតិបត្តិការជោគជ័យ',\n                            text: 'ទិន្នន័យបានបន្ថែម',\n                            color: 'success',\n                            iconPack: 'feather',\n                            icon: 'icon-check',\n                            position: 'top-center'\n                        });\n                    self.resetField();\n                    } else {\n                        self.$vs.notify({\n                            title: 'ប្រតិបត្តិការបរាជ័យ',\n                            text: 'ទិន្នន័យមិនបានបន្ថែម',\n                            color: 'danger',\n                            iconPack: 'feather',\n                            icon: 'icon-message-square',\n                            position: 'top-center'\n                        });\n                    }\n                    self.$vs.loading.close();\n                    });\n                    } else {\n                        self.$vs.notify({\n                            title: 'ប្រតិបត្តិការបរាជ័យ',\n                            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',\n                            color: 'danger',\n                            iconPack: 'feather',\n                            icon: 'icon-message-square',\n                            position: 'top-center'\n                        })\n                }\n            });\n        },\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Helper.vue?vue&type=template&id=014afb35&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Helper.vue?vue&type=template&id=014afb35&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("moment"),
      _vm._v(" "),
      _c("modal"),
      _vm._v(" "),
      _c("vue-select"),
      _vm._v(" "),
      _c("currency-formatter"),
      _vm._v(" "),
      _c("range-date-picker"),
      _vm._v(" "),
      _c("print-js"),
      _vm._v(" "),
      _c("form-validation"),
      _vm._v(" "),
      _c("vuex-module"),
      _vm._v(" "),
      _c("drop-zone"),
      _vm._v(" "),
      _c("common-code"),
      _vm._v(" "),
      _c("table-component"),
      _vm._v(" "),
      _c("agrid-component")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Modal.vue?vue&type=template&id=129e94f6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Modal.vue?vue&type=template&id=129e94f6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Modal and TinyMCE", "code-toggler": "" }
    },
    [
      _c(
        "vs-button",
        {
          on: {
            click: function($event) {
              return _vm.$refs.modal.open()
            }
          }
        },
        [_vm._v("Open")]
      ),
      _vm._v(" "),
      _c(
        "sweet-modal",
        {
          ref: "modal",
          attrs: {
            title: "TinyMCE",
            blocking: true,
            width: !_vm.mobilecheck() ? "50%" : ""
          }
        },
        [
          _c("tinymce", {
            attrs: { id: "d1" },
            model: {
              value: _vm.data,
              callback: function($$v) {
                _vm.data = $$v
              },
              expression: "data"
            }
          }),
          _vm._v(" "),
          _c("vs-button", { attrs: { slot: "button" }, slot: "button" }, [
            _vm._v("That's fine!")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <vs-button @click="$refs.modal.open()">Open</vs-button>\n            <sweet-modal ref="modal" title="TinyMCE" :blocking="true" :width="!mobilecheck()?\'50%\':\'\'">\n            <tinymce id="d1" v-model="data"></tinymce>\n            <vs-button slot="button">That\'s fine!</vs-button>\n        </sweet-modal>\n        //TinyMCE Code\n        <script>\n            export default {\n                data() {\n                    return {\n                    content: this.value,\n                    editor: null,\n                    cTinyMce: null,\n                    checkerTimeout: null,\n                    isTyping: false\n                    };\n                },\n                mounted() {\n                    this.init();\n                },\n            }\n        </script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Moment.vue?vue&type=template&id=7a4a16f2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Moment.vue?vue&type=template&id=7a4a16f2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "MomentJs", "code-toggler": "" }
    },
    [
      _c("h4", [_vm._v("Calendar")]),
      _vm._v("\n    " + _vm._s(_vm.moment().calendar()) + "\n    "),
      _c("br"),
      _vm._v(" "),
      _c("h4", [_vm._v("Format")]),
      _vm._v("\n    " + _vm._s(_vm.moment().format("YYYY-MM-DD")) + "\n    "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n        <script>\n            this.moment().format('MMMM Do YYYY, h:mm:ss a'); // December 19th 2019, 4:01:46 pm\n            this.moment().format('dddd');                    // Thursday\n            this.moment().format(\"MMM Do YY\");               // Dec 19th 19\n            this.moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019\n            this.moment().format();                          // 2019-12-19T16:01:46+07:00\n            // undefined\n            this.moment().subtract(10, 'days').calendar(); // 12/09/2019\n            this.moment().subtract(6, 'days').calendar();  // Last Friday at 4:00 PM\n            this.moment().subtract(3, 'days').calendar();  // Last Monday at 4:00 PM\n            this.moment().subtract(1, 'days').calendar();  // Yesterday at 4:00 PM\n            this.moment().calendar();                      // Today at 4:00 PM\n            this.moment().add(1, 'days').calendar();       // Tomorrow at 4:00 PM\n            this.moment().add(3, 'days').calendar();       // Sunday at 4:00 PM\n            this.moment().add(10, 'days').calendar();\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/PrintJS.vue?vue&type=template&id=fced2b82&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/PrintJS.vue?vue&type=template&id=fced2b82&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { staticClass: "mb-base", attrs: { title: "PrintJs", "code-toggler": "" } },
    [
      _c("div", { attrs: { id: "printMe" } }, [
        _c("p", [
          _c("span", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam blanditiis consequuntur debitis delectus dicta dolorum est facere harum, illum iusto laudantium libero, natus nisi odio quo, ratione repudiandae voluptatibus."
            )
          ]),
          _c("span", [
            _vm._v(
              "Architecto asperiores, atque aut consectetur culpa cupiditate dignissimos dolore doloribus ducimus eius eveniet fugiat illo illum incidunt iusto numquam possimus praesentium qui repellendus reprehenderit similique, sit veniam voluptas voluptatem, voluptatum!"
            )
          ]),
          _c("span", [
            _vm._v(
              "Ab aliquam autem distinctio dolor doloribus ducimus ea eveniet, expedita illo maxime nihil nisi nobis quae quasi qui reiciendis rem sunt voluptatum! Alias assumenda distinctio labore, quis repellat tempore voluptates?"
            )
          ]),
          _c("span", [
            _vm._v(
              "A accusantium aperiam beatae blanditiis consequatur culpa, delectus deleniti ducimus eaque error explicabo facere impedit inventore laudantium minus mollitia officia optio perferendis quo similique tenetur totam ut vel velit voluptatum."
            )
          ]),
          _c("span", [
            _vm._v(
              "Amet dicta dignissimos, dolor, dolorem dolorum est facilis harum impedit incidunt inventore ipsam iure labore laudantium magni minima mollitia quam quidem quod reprehenderit sequi sit, tempora tenetur veritatis! Facere, sequi."
            )
          ]),
          _c("span", [
            _vm._v(
              "A beatae commodi consequatur exercitationem molestiae rem sed soluta velit voluptate. Amet aperiam commodi consequatur, culpa deleniti doloremque doloribus maxime numquam repellendus sit temporibus voluptatum. Alias dolorem odit suscipit veritatis."
            )
          ]),
          _c("span", [
            _vm._v(
              "Alias delectus esse laudantium perspiciatis placeat reiciendis repudiandae rerum! Dolorum ea eaque, eius fuga hic, impedit ipsa laborum, laudantium libero magni maiores minima placeat possimus provident quae quasi qui quisquam."
            )
          ]),
          _c("span", [
            _vm._v(
              "A architecto dolore ducimus enim ex expedita, ipsum magni molestias necessitatibus nemo nesciunt nulla quam rerum ullam veniam! Enim excepturi expedita facere fuga illum iste libero nam odit officia voluptas?"
            )
          ]),
          _c("span", [
            _vm._v(
              "A adipisci animi aperiam corporis dolorem earum eligendi enim id illo illum magni natus odio, officia officiis perspiciatis recusandae, repellat similique sit? Accusantium beatae consequuntur dolorem eligendi pariatur quidem similique!"
            )
          ]),
          _c("span", [
            _vm._v(
              "Aut consectetur corporis dolore doloribus enim eos esse et fuga, fugit id, impedit laboriosam laudantium molestias nobis odit officia officiis perspiciatis quam quis rem rerum sint vel velit veniam voluptatem."
            )
          ]),
          _c("span", [
            _vm._v(
              "A autem eaque et quo tenetur. Consequuntur dignissimos eligendi fugiat impedit ipsa iure laborum libero magni non nulla numquam praesentium quas quia reiciendis repellendus sequi sit, temporibus tenetur, unde voluptates!"
            )
          ]),
          _c("span", [
            _vm._v(
              "Ea eveniet ipsum libero necessitatibus quas quod quos suscipit vero, voluptate voluptatum. Assumenda fugiat iste reiciendis. A ipsa odit repellat. Architecto asperiores eligendi magni necessitatibus nihil odit repellendus suscipit, velit."
            )
          ]),
          _c("span", [
            _vm._v(
              "Beatae blanditiis est excepturi numquam obcaecati provident quam suscipit veritatis. Aliquam at distinctio exercitationem harum nobis nulla optio perferendis possimus quo, ratione sunt tempora tempore temporibus ullam ut velit veniam?"
            )
          ]),
          _c("span", [
            _vm._v(
              "Accusamus animi architecto beatae consequuntur debitis deleniti dignissimos dolorum eaque eius laudantium maiores molestiae nam necessitatibus, nesciunt non perspiciatis tenetur unde vero. Ad animi aut, est hic minus officiis quaerat."
            )
          ]),
          _c("span", [
            _vm._v(
              "Amet asperiores assumenda aut delectus, dicta dolor dolore eaque enim fugiat fugit illum, ipsum iste libero minima molestiae nisi nostrum odio pariatur perspiciatis placeat, quia ratione soluta tempora ullam ut!"
            )
          ]),
          _c("span", [
            _vm._v(
              "Autem deserunt doloribus, ducimus eaque enim facere fuga, laboriosam libero nulla numquam obcaecati odit optio sint ullam voluptas voluptatem voluptatibus. Aliquid dolorem eius, hic in ipsam nesciunt nihil optio perferendis!"
            )
          ]),
          _c("span", [
            _vm._v(
              "Adipisci, architecto cum, deleniti dolore enim, harum incidunt molestiae natus nulla numquam possimus quia quidem quis sapiente sit? Blanditiis corporis delectus dolore eligendi ipsam iste natus nemo nihil, officia velit?"
            )
          ]),
          _c("span", [
            _vm._v(
              "At commodi consequatur porro reprehenderit sequi? Ad laboriosam maxime provident sequi soluta velit voluptas. A accusantium ad cum eaque eos ex exercitationem facere facilis iusto possimus quos sunt unde, vel?"
            )
          ]),
          _c("span", [
            _vm._v(
              "Et exercitationem expedita harum inventore molestiae. Accusamus ad alias, at commodi distinctio eos exercitationem incidunt laborum modi non odit possimus, praesentium provident quas qui quia repellendus sequi sint unde voluptates."
            )
          ]),
          _c("span", [
            _vm._v(
              "Aliquid consequatur eveniet ex expedita minus nihil vero vitae. Adipisci architecto asperiores fugiat laudantium modi nesciunt quaerat sequi voluptatibus. Aperiam eligendi itaque, laboriosam molestiae nam quasi quibusdam quis quod veritatis!"
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("vs-button", { on: { click: _vm.printHtml } }, [_vm._v("Print")]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n        <script>\n        import printJS from 'print-js'\n            export default {\n                name: \"PrintJs\",\n                methods:{\n                    //print\n                    async _print() {\n                    const el = document.querySelector('#printMe');\n                    const options = {\n                        type: 'dataURL'\n                    };\n                    return await this.$html2canvas(el, options);\n            },\n            async printHtml() {\n                    let image = await this._print();\n                    printJS(image, 'image')\n                },\n            }\n        }\n            this.moment().format('MMMM Do YYYY, h:mm:ss a'); // December 19th 2019, 4:01:46 pm\n            this.moment().format('dddd');                    // Thursday\n            this.moment().format(\"MMM Do YY\");               // Dec 19th 19\n            this.moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019\n            this.moment().format();                          // 2019-12-19T16:01:46+07:00\n            // undefined\n            this.moment().subtract(10, 'days').calendar(); // 12/09/2019\n            this.moment().subtract(6, 'days').calendar();  // Last Friday at 4:00 PM\n            this.moment().subtract(3, 'days').calendar();  // Last Monday at 4:00 PM\n            this.moment().subtract(1, 'days').calendar();  // Yesterday at 4:00 PM\n            this.moment().calendar();                      // Today at 4:00 PM\n            this.moment().add(1, 'days').calendar();       // Tomorrow at 4:00 PM\n            this.moment().add(3, 'days').calendar();       // Sunday at 4:00 PM\n            this.moment().add(10, 'days').calendar();\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Select.vue?vue&type=template&id=3740c983&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Select.vue?vue&type=template&id=3740c983&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Vue Select", "code-toggler": "" }
    },
    [
      _c("v-select", {
        attrs: {
          clearable: false,
          placeholder: "Please select a value",
          options: _vm.new_options,
          label: "label_data"
        },
        scopedSlots: _vm._u([
          {
            key: "option",
            fn: function(option) {
              return [
                _vm._v(
                  "\n            " + _vm._s(option.label_data) + "\n        "
                )
              ]
            }
          }
        ]),
        model: {
          value: _vm.selected,
          callback: function($$v) {
            _vm.selected = $$v
          },
          expression: "selected"
        }
      }),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <v-select :clearable="false" v-model="selected" placeholder="Please select a value" :options="new_options" label="label_data">\n            <template v-slot:option="option">\n                ' +
            _vm._s("{{ option.label_data }}") +
            "\n            </template>\n        </v-select>\n\n        <script>\n            export default {\n                name: \"VueSelect\",\n                data(){\n                    return{\n                        selected:null,\n                        options: [\n                            {\n                                id:1,\n                                title: 'Read the Docs',\n                                icon: 'fa-book',\n                                url: 'https://codeclimate.com/github/sagalbot/vue-select'\n                            },\n                            {\n                                id:2,\n                                title: 'View on GitHub',\n                                icon: 'fa-github',\n                                url: 'https://codeclimate.com/github/sagalbot/vue-select'\n                            },\n                        ]\n                    }\n                },\n                computed:{\n                    new_options(){\n                        return this.options.map(function (x){\n                            return {\n                                id:x.id,\n                                label_data:`${x.title}-${x.url}`\n                            }\n                        });\n                    }\n                }\n            }\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Table.vue?vue&type=template&id=1ac35d97&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/Table.vue?vue&type=template&id=1ac35d97&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Table and AGrid", "code-toggler": "" }
    },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c(
              "div",
              { staticClass: "flex btn-group" },
              [
                _c(
                  "vs-button",
                  {
                    attrs: {
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-plus-square"
                    }
                  },
                  [_vm._v("បន្ថែម")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      color: "warning",
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-edit"
                    }
                  },
                  [_vm._v("កែប្រែ")]
                ),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      color: "danger",
                      type: "relief",
                      "icon-pack": "feather",
                      icon: "icon-trash-2"
                    }
                  },
                  [_vm._v("លុប")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-table",
              {
                attrs: {
                  multiple: "",
                  pagination: "",
                  "max-items": "3",
                  search: "",
                  data: _vm.users
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(item, index) {
                        return _c(
                          "vs-tr",
                          { key: index, attrs: { data: item } },
                          [
                            _c("vs-td", { attrs: { data: item.email } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.email) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: item.username } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.username) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: item.id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.website) +
                                  "\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: item.id } }, [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(item.id) +
                                  "\n                        "
                              )
                            ])
                          ],
                          1
                        )
                      })
                    }
                  }
                ]),
                model: {
                  value: _vm.selected,
                  callback: function($$v) {
                    _vm.selected = $$v
                  },
                  expression: "selected"
                }
              },
              [
                _c(
                  "template",
                  { slot: "thead" },
                  [
                    _c("vs-th", { attrs: { "sort-key": "email" } }, [
                      _vm._v("Email")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "username" } }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "website" } }, [
                      _vm._v("Website")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "id" } }, [
                      _vm._v("Nro")
                    ])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          '\n        <vs-table multiple v-model="selected" pagination max-items="3" search :data="users">\n\n            <template slot="thead">\n                <vs-th sort-key="email">Email</vs-th>\n                <vs-th sort-key="username">Name</vs-th>\n                <vs-th sort-key="website">Website</vs-th>\n                <vs-th sort-key="id">Nro</vs-th>\n            </template>\n\n            <template slot-scope="{data}">\n                <vs-tr :data="item" :key="index" v-for="(item, index) in data">\n\n                    <vs-td :data="item.email">\n                    ' +
            _vm._s("{{ item.email }}") +
            '\n                    </vs-td>\n\n                    <vs-td :data="item.username">\n                    ' +
            _vm._s("{{ item.username }}") +
            '\n                    </vs-td>\n\n                    <vs-td :data="item.id">\n                    ' +
            _vm._s("{{ item.website }}") +
            '\n                    </vs-td>\n\n                    <vs-td :data="item.id">\n                    ' +
            _vm._s("{{ item.id }}") +
            '\n                    </vs-td>\n\n                </vs-tr>\n            </template>\n        </vs-table>\n        <script>\n        export default {\n            name: "Table",\n                data() {\n                return {\n                selected: [],\n                    users: [\n                        {\n                            "id": 1,\n                            "name": "Leanne Graham",\n                            "username": "Bret",\n                            "email": "Sincere@april.biz",\n                            "website": "hildegard.org",\n                        },\n                        {\n                            "id": 2,\n                            "name": "Ervin Howell",\n                            "username": "Antonette",\n                            "email": "Shanna@melissa.tv",\n                            "website": "anastasia.net",\n                        },\n                    ]\n                }\n            }\n        }\n        </script>\n    '
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/helper/VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    {
      staticClass: "mb-base",
      attrs: { title: "Vuex Module", "code-toggler": "" }
    },
    [
      _c("h4", [_vm._v("Vuex Module Code")]),
      _vm._v(" "),
      _c("template", { slot: "codeContainer" }, [
        _vm._v(
          "\n        <script>\n        //in store.js\n        import invoice from './modules/invoice'\n        export default new Vuex.Store({\n            getters,\n            mutations,\n            state,\n            actions,\n            modules: {\n                invoice,\n            }\n        })\n        //in module\n        import axios from  'axios'\n        const state = {\n            invoice:[],\n            purchase_details:[]\n        };\n        const getters = {\n            all_invoice:function (state) {\n                return state.invoice\n            },\n        };\n        const actions = {\n            async fetchPurchaseDetail({commit}){\n                try {\n                    const res = await axios.get(route('purchase-detail.index'));\n                    commit('SET_PURCHASE_DETAIL',res.data)\n                }catch (e) {\n                    return false\n                }\n            },\n            async fetchInvoice({commit}){\n                try {\n                    const res = await axios.get(route('invoice.index'));\n                    commit('SET_INVOICE',res.data)\n                }catch (e) {\n                    return false\n                }\n            },\n            async storeInvoice({commit},data){\n                try {\n                    const res = await axios.post(route('invoice.store'),data);\n                    commit('STORE_INVOICE',res.data);\n                    return true\n                }catch (e) {\n                    return false\n                }\n            },\n            async updateInvoicePayment({},data){\n                try {\n                    await axios.post(route('invoice.payment',data.id),data);\n                    return true\n                }catch (e) {\n                    return false\n                }\n            },\n            async editInvoice({commit},id){\n                try {\n                    const res = await axios.get(route('invoice.edit',id));\n                    return res.data\n                }catch (e) {\n                    return false\n                }\n            },\n            async destroyInvoice({commit},id){\n                try {\n                    await axios.delete(route('invoice.destroy',id));\n                    commit('DESTROY_INVOICE',id);\n                    return true\n                }catch (e) {\n                    return false\n                }\n            },\n            async updateInvoice({commit},data){\n                try {\n                    const res = await axios.put(route('invoice.update',data.id),data);\n                    commit('UPDATE_INVOICE',res.data);\n                    return true\n                }catch (e) {\n                    return false\n                }\n            },\n        };\n        const mutations = {\n            STORE_INVOICE:function (state,data) {\n                state.invoice.unshift(data)\n            },\n            SET_INVOICE:function (state,data) {\n                state.invoice = data\n            },\n            SET_PURCHASE_DETAIL:function (state,data) {\n                state.purchase_details = data\n            },\n            DESTROY_INVOICE:function (state,id) {\n                return state.invoice = state.invoice.filter(function (invoice,index) {\n                    return invoice.id !== id\n                })\n            },\n            UPDATE_INVOICE:function (state,data) {\n                let index = state.invoice.findIndex(function (x) {\n                    return parseInt(x.id) === parseInt(data.id)\n                });\n                state.invoice.splice(index,1,data);\n            }\n        };\n        export default {\n            state,\n            getters,\n            actions,\n            mutations,\n        }\n        </script>\n    "
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/helper/AgrideComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/helper/AgrideComponent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AgrideComponent_vue_vue_type_template_id_107436f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgrideComponent.vue?vue&type=template&id=107436f0& */ "./resources/js/src/views/helper/AgrideComponent.vue?vue&type=template&id=107436f0&");
/* harmony import */ var _AgrideComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgrideComponent.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/AgrideComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AgrideComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AgrideComponent_vue_vue_type_template_id_107436f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AgrideComponent_vue_vue_type_template_id_107436f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/AgrideComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/AgrideComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/helper/AgrideComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgrideComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AgrideComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/AgrideComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgrideComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/AgrideComponent.vue?vue&type=template&id=107436f0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/helper/AgrideComponent.vue?vue&type=template&id=107436f0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgrideComponent_vue_vue_type_template_id_107436f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AgrideComponent.vue?vue&type=template&id=107436f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/AgrideComponent.vue?vue&type=template&id=107436f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgrideComponent_vue_vue_type_template_id_107436f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgrideComponent_vue_vue_type_template_id_107436f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/CommonCode.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/helper/CommonCode.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonCode_vue_vue_type_template_id_fdc97502_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonCode.vue?vue&type=template&id=fdc97502&scoped=true& */ "./resources/js/src/views/helper/CommonCode.vue?vue&type=template&id=fdc97502&scoped=true&");
/* harmony import */ var _CommonCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommonCode.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/CommonCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommonCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommonCode_vue_vue_type_template_id_fdc97502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommonCode_vue_vue_type_template_id_fdc97502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fdc97502",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/CommonCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/CommonCode.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/helper/CommonCode.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CommonCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CommonCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/CommonCode.vue?vue&type=template&id=fdc97502&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/helper/CommonCode.vue?vue&type=template&id=fdc97502&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCode_vue_vue_type_template_id_fdc97502_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CommonCode.vue?vue&type=template&id=fdc97502&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CommonCode.vue?vue&type=template&id=fdc97502&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCode_vue_vue_type_template_id_fdc97502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonCode_vue_vue_type_template_id_fdc97502_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/CurrencyFormatter.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/helper/CurrencyFormatter.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CurrencyFormatter_vue_vue_type_template_id_0061d682_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true& */ "./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true&");
/* harmony import */ var _CurrencyFormatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyFormatter.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CurrencyFormatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CurrencyFormatter_vue_vue_type_template_id_0061d682_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CurrencyFormatter_vue_vue_type_template_id_0061d682_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0061d682",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/CurrencyFormatter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyFormatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CurrencyFormatter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyFormatter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyFormatter_vue_vue_type_template_id_0061d682_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/CurrencyFormatter.vue?vue&type=template&id=0061d682&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyFormatter_vue_vue_type_template_id_0061d682_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CurrencyFormatter_vue_vue_type_template_id_0061d682_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/DateRangePicker.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/helper/DateRangePicker.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateRangePicker_vue_vue_type_template_id_316eb6b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true& */ "./resources/js/src/views/helper/DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true&");
/* harmony import */ var _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateRangePicker.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateRangePicker_vue_vue_type_template_id_316eb6b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateRangePicker_vue_vue_type_template_id_316eb6b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "316eb6b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/DateRangePicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/DateRangePicker.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/helper/DateRangePicker.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DateRangePicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/helper/DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_316eb6b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DateRangePicker.vue?vue&type=template&id=316eb6b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_316eb6b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateRangePicker_vue_vue_type_template_id_316eb6b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/DropZone.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/helper/DropZone.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropZone_vue_vue_type_template_id_7ef2d482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropZone.vue?vue&type=template&id=7ef2d482&scoped=true& */ "./resources/js/src/views/helper/DropZone.vue?vue&type=template&id=7ef2d482&scoped=true&");
/* harmony import */ var _DropZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropZone.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/DropZone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropZone_vue_vue_type_template_id_7ef2d482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropZone_vue_vue_type_template_id_7ef2d482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7ef2d482",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/DropZone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/DropZone.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/helper/DropZone.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropZone.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DropZone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/DropZone.vue?vue&type=template&id=7ef2d482&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/DropZone.vue?vue&type=template&id=7ef2d482&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropZone_vue_vue_type_template_id_7ef2d482_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DropZone.vue?vue&type=template&id=7ef2d482&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/DropZone.vue?vue&type=template&id=7ef2d482&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropZone_vue_vue_type_template_id_7ef2d482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropZone_vue_vue_type_template_id_7ef2d482_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/FormValidation.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/helper/FormValidation.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidation_vue_vue_type_template_id_1726ad38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidation.vue?vue&type=template&id=1726ad38&scoped=true& */ "./resources/js/src/views/helper/FormValidation.vue?vue&type=template&id=1726ad38&scoped=true&");
/* harmony import */ var _FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidation.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/FormValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormValidation_vue_vue_type_template_id_1726ad38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormValidation_vue_vue_type_template_id_1726ad38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1726ad38",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/FormValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/FormValidation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/helper/FormValidation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/FormValidation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/FormValidation.vue?vue&type=template&id=1726ad38&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/helper/FormValidation.vue?vue&type=template&id=1726ad38&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_1726ad38_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormValidation.vue?vue&type=template&id=1726ad38&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/FormValidation.vue?vue&type=template&id=1726ad38&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_1726ad38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_1726ad38_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/Helper.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/helper/Helper.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helper_vue_vue_type_template_id_014afb35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helper.vue?vue&type=template&id=014afb35&scoped=true& */ "./resources/js/src/views/helper/Helper.vue?vue&type=template&id=014afb35&scoped=true&");
/* harmony import */ var _Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helper.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/Helper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Helper_vue_vue_type_template_id_014afb35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Helper_vue_vue_type_template_id_014afb35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "014afb35",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/Helper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/Helper.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/helper/Helper.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Helper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Helper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/Helper.vue?vue&type=template&id=014afb35&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/Helper.vue?vue&type=template&id=014afb35&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_template_id_014afb35_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Helper.vue?vue&type=template&id=014afb35&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Helper.vue?vue&type=template&id=014afb35&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_template_id_014afb35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helper_vue_vue_type_template_id_014afb35_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/Modal.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/helper/Modal.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_129e94f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=129e94f6&scoped=true& */ "./resources/js/src/views/helper/Modal.vue?vue&type=template&id=129e94f6&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_129e94f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_129e94f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "129e94f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/Modal.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/helper/Modal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/Modal.vue?vue&type=template&id=129e94f6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/Modal.vue?vue&type=template&id=129e94f6&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_129e94f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=129e94f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Modal.vue?vue&type=template&id=129e94f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_129e94f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_129e94f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/Moment.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/helper/Moment.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Moment_vue_vue_type_template_id_7a4a16f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Moment.vue?vue&type=template&id=7a4a16f2&scoped=true& */ "./resources/js/src/views/helper/Moment.vue?vue&type=template&id=7a4a16f2&scoped=true&");
/* harmony import */ var _Moment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Moment.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/Moment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Moment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Moment_vue_vue_type_template_id_7a4a16f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Moment_vue_vue_type_template_id_7a4a16f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a4a16f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/Moment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/Moment.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/helper/Moment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Moment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Moment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Moment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Moment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/Moment.vue?vue&type=template&id=7a4a16f2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/Moment.vue?vue&type=template&id=7a4a16f2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Moment_vue_vue_type_template_id_7a4a16f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Moment.vue?vue&type=template&id=7a4a16f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Moment.vue?vue&type=template&id=7a4a16f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Moment_vue_vue_type_template_id_7a4a16f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Moment_vue_vue_type_template_id_7a4a16f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/PrintJS.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/helper/PrintJS.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrintJS_vue_vue_type_template_id_fced2b82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintJS.vue?vue&type=template&id=fced2b82&scoped=true& */ "./resources/js/src/views/helper/PrintJS.vue?vue&type=template&id=fced2b82&scoped=true&");
/* harmony import */ var _PrintJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintJS.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/PrintJS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrintJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintJS_vue_vue_type_template_id_fced2b82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrintJS_vue_vue_type_template_id_fced2b82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fced2b82",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/PrintJS.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/PrintJS.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/helper/PrintJS.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintJS.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/PrintJS.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintJS_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/PrintJS.vue?vue&type=template&id=fced2b82&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/PrintJS.vue?vue&type=template&id=fced2b82&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintJS_vue_vue_type_template_id_fced2b82_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrintJS.vue?vue&type=template&id=fced2b82&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/PrintJS.vue?vue&type=template&id=fced2b82&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintJS_vue_vue_type_template_id_fced2b82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintJS_vue_vue_type_template_id_fced2b82_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/Select.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/helper/Select.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select_vue_vue_type_template_id_3740c983_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=3740c983&scoped=true& */ "./resources/js/src/views/helper/Select.vue?vue&type=template&id=3740c983&scoped=true&");
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select_vue_vue_type_template_id_3740c983_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select_vue_vue_type_template_id_3740c983_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3740c983",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/Select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/Select.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/helper/Select.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/Select.vue?vue&type=template&id=3740c983&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/Select.vue?vue&type=template&id=3740c983&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_3740c983_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=template&id=3740c983&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Select.vue?vue&type=template&id=3740c983&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_3740c983_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_3740c983_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/Table.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/helper/Table.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_1ac35d97_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=1ac35d97&scoped=true& */ "./resources/js/src/views/helper/Table.vue?vue&type=template&id=1ac35d97&scoped=true&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_1ac35d97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_1ac35d97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ac35d97",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/Table.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/helper/Table.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/Table.vue?vue&type=template&id=1ac35d97&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/helper/Table.vue?vue&type=template&id=1ac35d97&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_1ac35d97_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=1ac35d97&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/Table.vue?vue&type=template&id=1ac35d97&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_1ac35d97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_1ac35d97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/helper/VuexModule.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/helper/VuexModule.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VuexModule_vue_vue_type_template_id_54ff7e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true& */ "./resources/js/src/views/helper/VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true&");
/* harmony import */ var _VuexModule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VuexModule.vue?vue&type=script&lang=js& */ "./resources/js/src/views/helper/VuexModule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VuexModule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VuexModule_vue_vue_type_template_id_54ff7e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VuexModule_vue_vue_type_template_id_54ff7e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54ff7e76",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/helper/VuexModule.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/helper/VuexModule.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/helper/VuexModule.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuexModule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuexModule.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/VuexModule.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuexModule_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/helper/VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/helper/VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuexModule_vue_vue_type_template_id_54ff7e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/helper/VuexModule.vue?vue&type=template&id=54ff7e76&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuexModule_vue_vue_type_template_id_54ff7e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VuexModule_vue_vue_type_template_id_54ff7e76_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss":
/*!***********************************************************************!*\
  !*** ./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!./agGridStyleOverride.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);