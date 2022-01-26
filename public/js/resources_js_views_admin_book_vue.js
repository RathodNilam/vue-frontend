"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_book_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/globalfunctions */ "./resources/js/helpers/globalfunctions.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import {Loading,SwalClose,SuccessPopup,ErrorMessage,ErrorPopup} from "../globalfunctions";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        id: '',
        sr_no: '',
        question_name: '',
        question_des: ''
      },
      editform: {
        id: '',
        sr_no: '',
        question_name: '',
        question_des: ''
      },
      items: {},
      message: ''
    };
  },
  created: function created() {
    this.fetchbookquestionlist();
  },
  methods: {
    /*
    |-----------------------------------------------------------
    |   @
    |   Method for add BookQuestion List
    |------------------------------------------------------------
    */
    submit: function submit(event) {
      var _this = this;

      (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.Loading)();
      return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/addbookquestion", this.form).then(function (response) {
        console.log(response.data);
        _this.form = response.data;
        (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.SwalClose)();
        $('#AddModal').modal('hide');
        $('#AddModal').on('hidden.bs.modal', function (e) {
          $(this).find("input,textarea,select").val('').html('').end();
        }); // Loading()

        if (response.data) {
          (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.SuccessPopup)(response.data.message); // $('#AddModal').trigger('reset');  

          _this.fetchbookquestionlist();
        } else {
          (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.ErrorPopup)(error.response);
        }
      })["catch"](function (err) {
        alert(err);
      });
    },

    /*
    |-----------------------------------------------------------
    |   @
    |   Method for fetch BookQuestion List
    |------------------------------------------------------------
    */
    fetchbookquestionlist: function fetchbookquestionlist() {
      var _this2 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      // Loading()
      return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/getBookQuestionList?page=" + page).then(function (response) {
        console.log(response.data);
        _this2.items = response.data; // SwalClose()
      })["catch"](function (err) {
        alert(err);
      });
    },
    DateFormat: _helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.DateFormat,
    //  fetchbookquestionlist:function(page = 1){
    //   return axios.get('getBookQuestionList?page=' + page)
    //     .then(response => {
    //       this.items = response.data;
    //         //console.log(this.items);
    //   });
    // },

    /*
    |-----------------------------------------------------------
    |   @
    |   Method for edit BookQuestion List
    |------------------------------------------------------------
    */
    editbutton: function editbutton(index) {
      var _this3 = this;

      console.log(index);
      /*var data=new FormData();  
      data.set('id', index);*/

      return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/editBookQuestionList/" + index).then(function (response) {
        console.log(response.data);
        _this3.editform.id = response.data.id;
        _this3.editform.sr_no = response.data.sr_no;
        _this3.editform.question_name = response.data.question_name;
        _this3.editform.question_des = response.data.question_des; //this.items=response.data;
      })["catch"](function (err) {
        alert(err);
      });
    },

    /*
    |-----------------------------------------------------------
    |   @
    |   Method for update BookQuestion List
    |------------------------------------------------------------
    */
    Update: function Update() {
      var _this4 = this;

      (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.Loading)();
      return axios__WEBPACK_IMPORTED_MODULE_0___default().post("/updateBookQuestionList", this.editform).then(function (response) {
        console.log(response.data); // this.editform=response.data;

        (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.SwalClose)();

        if (response.data) {
          (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.UpdatePopup)(response.data.message);

          _this4.fetchbookquestionlist();
        } else {
          (0,_helpers_globalfunctions__WEBPACK_IMPORTED_MODULE_1__.ErrorPopup)(error.response);
        }

        $('#editModal').modal('hide');
        console.log('success');
      })["catch"](function (err) {
        alert(err);
      });
    },

    /*
    |-----------------------------------------------------------
    |   @
    |   Method for delete BookQuestion List
    |------------------------------------------------------------
    */
    deletebutton: function deletebutton(index) {
      var _this5 = this;

      // console.log(index);
      //   return axios.get("/deleteBookQuestionList/"+index)
      //   .then(response => {
      //     console.log(response.data)
      //     let i = this.items.map(data => data.id).indexOf(id);
      //     this.items.splice(i, 1)
      //     if(response)
      //     {
      //         DeletedPopup(response.message)
      //         this.fetchbookquestionlist()
      //     }
      //     else
      //     {
      //         ErrorPopup(error.response)
      //     }
      //   }).catch(error => {
      //     console.log(error);
      //   });
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        buttonsStyling: true
      }).then(function (response) {
        if (response.value === true) {
          axios__WEBPACK_IMPORTED_MODULE_0___default().get('/deleteBookQuestionList/' + index);

          _this5.fetchbookquestionlist();
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/globalfunctions.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/globalfunctions.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading),
/* harmony export */   "SwalClose": () => (/* binding */ SwalClose),
/* harmony export */   "SuccessPopup": () => (/* binding */ SuccessPopup),
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage),
/* harmony export */   "ErrorPopup": () => (/* binding */ ErrorPopup),
/* harmony export */   "UpdatePopup": () => (/* binding */ UpdatePopup),
/* harmony export */   "DeletedPopup": () => (/* binding */ DeletedPopup),
/* harmony export */   "BackendURL": () => (/* binding */ BackendURL),
/* harmony export */   "DateFormat": () => (/* binding */ DateFormat)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
//import Swal from 'sweetalert2';

 //import VueSweetalert2 from 'vue-sweetalert2';
// loading

function Loading() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
    title: 'Please Wait !',
    html: 'request sending...',
    allowOutsideClick: false,
    didOpen: function didOpen() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
    }
  });
} // swal close

function SwalClose() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
}
function SuccessPopup(message) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Success', message, 'success');
}
function ErrorMessage(message) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Error!', message, 'error');
}
function ErrorPopup(value) {
  if (value.data.message) {
    if (value.data.errors) {
      var responseVal = value.data;
      var errorString = '';

      for (var key in responseVal.errors) {
        errorString += responseVal.errors[key] + "<br/>";
      }

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(value.data.message, errorString, "error");
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error!", value.data.message, "error");
    }
  } else {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Error!", "Internal Server error", "error");
  }
}
function UpdatePopup(message) {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Updated!', message, 'success');
}
function DeletedPopup() {
  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Removed!', 'Item has been removed successfully!.', 'success');
}
/* gloable link for erp */

function BackendURL() {
  return "http://127.0.0.1:8000";
}
function DateFormat(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format('YYYY-MM-DD');
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.addnewbutton{\nmargin-left: -11px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./book.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/views/admin/book.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/book.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _book_vue_vue_type_template_id_22073768___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.vue?vue&type=template&id=22073768& */ "./resources/js/views/admin/book.vue?vue&type=template&id=22073768&");
/* harmony import */ var _book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/book.vue?vue&type=script&lang=js&");
/* harmony import */ var _book_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _book_vue_vue_type_template_id_22073768___WEBPACK_IMPORTED_MODULE_0__.render,
  _book_vue_vue_type_template_id_22073768___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/book.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/book.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/book.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./book.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./book.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/book.vue?vue&type=template&id=22073768&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/book.vue?vue&type=template&id=22073768& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_template_id_22073768___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_template_id_22073768___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_book_vue_vue_type_template_id_22073768___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./book.vue?vue&type=template&id=22073768& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=template&id=22073768&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=template&id=22073768&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/book.vue?vue&type=template&id=22073768& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "addmodal",
        staticClass: "modal fade",
        attrs: { id: "AddModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-12 col-sm-12 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "questionlabel",
                              attrs: { for: "question_name" }
                            },
                            [_vm._v("Question Name")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.question_name,
                                expression: "form.question_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "question_name" },
                            domProps: { value: _vm.form.question_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "question_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "question_des" } }, [
                            _vm._v("Question Description")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.question_des,
                                expression: "form.question_des"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "question_des" },
                            domProps: { value: _vm.form.question_des },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "question_des",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        ref: "addmodal",
        staticClass: "modal fade",
        attrs: { id: "editModal", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.Update.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-md-12 col-sm-12 col-xs-12" },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editform.id,
                                expression: "editform.id"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "hidden", id: "id" },
                            domProps: { value: _vm.editform.id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.editform,
                                  "id",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "sr_no" } }, [
                            _vm._v("Sr No")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editform.sr_no,
                                expression: "editform.sr_no"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "sr_no", disabled: "" },
                            domProps: { value: _vm.editform.sr_no },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.editform,
                                  "sr_no",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass: "questionlabel",
                              attrs: { for: "question_name" }
                            },
                            [_vm._v("Question Name")]
                          ),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editform.question_name,
                                expression: "editform.question_name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "question_name" },
                            domProps: { value: _vm.editform.question_name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.editform,
                                  "question_name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "question_des" } }, [
                            _vm._v("Question Description")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.editform.question_des,
                                expression: "editform.question_des"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "question_des" },
                            domProps: { value: _vm.editform.question_des },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.editform,
                                  "question_des",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ])
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm._m(4)
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid" }, [
      _vm._m(5),
      _vm._v(" "),
      _c("div", { staticClass: "table-responsive" }, [
        _c(
          "table",
          { staticClass: "table table-striped table-bordered table-hover" },
          [
            _vm._m(6),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.items.data, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(item.sr_no))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.question_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.question_des))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.DateFormat(item.created_at)))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-sm btn-primary",
                        attrs: { href: "#editModal", "data-toggle": "modal" },
                        on: {
                          click: function($event) {
                            return _vm.editbutton(item.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.deletebutton(item.id)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-trash" })]
                    )
                  ])
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-12" },
          [
            _c("pagination", {
              staticClass: "pagination",
              attrs: { data: _vm.items, align: "center" },
              on: { "pagination-change-page": _vm.fetchbookquestionlist }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12 title" }, [
          _c("h5", { staticClass: "text-center" }, [
            _c("strong", [_vm._v("Book Questions")])
          ]),
          _c("br")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Add Book Question")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n           submit\n           ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [_vm._v("Edit Book Question")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("\n           Update\n           ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8 mb-2" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-primary addnewbutton",
          attrs: {
            href: "#AddModal",
            "data-toggle": "modal",
            id: "addmodal",
            "data-dismiss": "modal"
          }
        },
        [_c("i", { staticClass: "fa fa-plus" }, [_vm._v(" Add")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("th", { staticStyle: { width: "8%" } }, [_vm._v("Que No")]),
      _vm._v(" "),
      _c("th", [_vm._v("Question Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Question Description")]),
      _vm._v(" "),
      _c("th", [_vm._v("Created At")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "8%" } }, [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);