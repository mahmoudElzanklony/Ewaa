(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_Pages_profile_notes_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/NavbarComponent */ "./resources/js/components/NavbarComponent.vue");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FooterComponent */ "./resources/js/components/FooterComponent.vue");
/* harmony import */ var _components_ProfileNavComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProfileNavComponent */ "./resources/js/components/ProfileNavComponent.vue");
/* harmony import */ var _components_ListingPostComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ListingPostComponent */ "./resources/js/components/ListingPostComponent.vue");
/* harmony import */ var _mixin_delete_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixin/delete_item */ "./resources/js/mixin/delete_item.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "notes",
  props: ['keywords', 'data'],
  mixins: [_mixin_delete_item__WEBPACK_IMPORTED_MODULE_4__.default],
  data: function data() {
    return {
      item: null
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)({
    'save_note': 'notes/save_note'
  })), {}, {
    update_note: function update_note(e) {
      // update
      this.item = {};
      this.item['id'] = e[0];
      this.item['note'] = e[1]; // show box

      setTimeout(function () {
        $('#show_notes').modal('show');
      }, 100);
    }
  }),
  components: {
    ListingPostComponent: _components_ListingPostComponent__WEBPACK_IMPORTED_MODULE_3__.default,
    ProfileNavComponent: _components_ProfileNavComponent__WEBPACK_IMPORTED_MODULE_2__.default,
    FooterComponent: _components_FooterComponent__WEBPACK_IMPORTED_MODULE_1__.default,
    NavbarComponent: _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "FooterComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ListingPostComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  props: ['id', 'image', 'number_of_images', 'info', 'address', 'price', 'average', 'compound', 'beds', 'baths', 'area', 'fav', 'note'],
  methods: {
    toggle_fav: function toggle_fav() {
      var title = '';

      if ($(event.target).hasClass('ri-heart-fill')) {
        $(event.target).removeClass('ri-heart-fill').addClass('ri-heart-line');
        title = this.switchWord('removed_from_fav_successfully');
        var status = 0;
      } else {
        $(event.target).removeClass('ri-heart-line').addClass('ri-heart-fill');
        title = this.switchWord('added_to_fav_successfully');
        var status = 1;
      }

      axios.post('/user/toggle-fav', {
        status: status,
        id: this.id
      }).then(function (e) {
        Toast.fire({
          icon: 'success',
          title: title
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "NavbarComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  computed: {
    user: function user() {
      return this.$inertia.page.props.user;
    }
  },
  created: function created() {},
  methods: {
    showList: function showList() {
      var arrow = $(event.target).parent().find('span i');

      if (arrow.hasClass('ri-arrow-drop-down-fill')) {
        arrow.removeClass('ri-arrow-drop-down-fill').addClass('ri-arrow-drop-up-fill');
      } else {
        arrow.removeClass('ri-arrow-drop-up-fill').addClass('ri-arrow-drop-down-fill');
      }

      $(event.target).parent().next().fadeToggle();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ProfileNavComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  mounted: function mounted() {
    var url = document.URL;

    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('.profile-nav ul li a')),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var a = _step.value;

        if (url.indexOf(a.getAttribute('href')) >= 0) {
          a.parentElement.className = 'active';
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SwitchLangWord",
  data: function data() {
    return {
      words: {
        // navbar words
        Home: {
          ar: '????????????????',
          en: 'Home',
          tu: ''
        },
        Profile: {
          ar: '?????????? ????????????',
          en: 'profile',
          tu: ''
        },
        Search: {
          ar: '????????',
          en: 'Search',
          tu: ''
        },
        Know: {
          ar: '????????',
          en: 'Know',
          tu: ''
        },
        List: {
          ar: '????????',
          en: 'List',
          tu: ''
        },
        Arabic_Language: {
          ar: '?????????? ??????????????',
          en: 'Arabic Language',
          tu: ''
        },
        English_Language: {
          ar: '?????????? ????????????????????',
          en: 'English Language',
          tu: ''
        },
        Turkish_Language: {
          ar: '?????????? ??????????????',
          en: 'Turkish Language',
          tu: ''
        },
        Help: {
          ar: '????????????',
          en: 'Help',
          tu: ''
        },
        Blue: {
          ar: '????????????',
          en: 'Blue',
          tu: ''
        },
        buildings: {
          ar: '????????????',
          en: 'Buildings',
          tu: ''
        },
        Componds: {
          ar: '????????????????',
          en: 'Componds',
          tu: ''
        },
        Beds: {
          ar: '??????????',
          en: 'Bed',
          tu: ''
        },
        rate_building: {
          ar: '?????????? ??????????',
          en: 'Rate Building',
          tu: ''
        },
        building_prices: {
          ar: '?????????? ????????????????',
          en: 'Rate Building',
          tu: ''
        },
        ask_people_area: {
          ar: '???????? ?????? ????????????',
          en: 'Ask People area',
          tu: ''
        },
        premium_people: {
          ar: '???????? ??????????????',
          en: 'Top Agent',
          tu: ''
        },
        real_state_index: {
          ar: '???????????? ??????????????',
          en: 'real state index',
          tu: ''
        },
        public_advice: {
          ar: '?????????? ????????',
          en: 'public advice',
          tu: ''
        },
        List_your_property: {
          ar: '???????? ???? ??????????',
          en: 'List Your Property',
          tu: ''
        },
        List_Companies_properties: {
          ar: '???????? ???? ???????? ??????????',
          en: 'List Companies properties',
          tu: ''
        },
        sign_in: {
          ar: '?????????? ????????',
          en: 'Sign in',
          tu: ''
        },
        sign_up: {
          ar: '?????????? ????????',
          en: 'Sign up',
          tu: ''
        },
        logout: {
          ar: '?????????? ????????',
          en: 'logout',
          tu: ''
        },
        registered_from_date: {
          ar: '?????? ?????? ?????????? ',
          en: 'registered from date ',
          tu: ''
        },
        activities: {
          ar: '??????????????',
          en: 'my activities',
          tu: ''
        },
        add_ad: {
          ar: '?????? ?????????????? ?? ?????????????? ?? ???????????????? ?????????? ...',
          en: 'place adds , take notes , save favorites and more ...',
          tu: ''
        },
        my_offers: {
          ar: '??????????',
          en: 'my_offers',
          tu: ''
        },
        get_best_offers: {
          ar: '???????? ?????? ???????? ???????? ?????????????? ??????????????  ???? ???????? ???????? ?? ?????? ???????????? ??????????????',
          en: 'Get deals from your favorite brands, all at one place only for Aqarmap customers',
          tu: ''
        },
        // footer words
        ewaa: {
          ar: '?????????? ??????',
          en: 'Ewaa Plus',
          tu: ''
        },
        footer_info: {
          ar: '?????????? ?????????? ???????????? ?????? ?????? ?????????? ???????????????? ???????????? ???????????????? ?????? ???????????? ???????????????? ???????????? ???????????? ???????? ???? ?????? ???????????????? ?????????????? ???? ??????????.',
          en: 'Ewaa services allow you to buy or sell a property while providing essential information to help you take one of life???s biggest financial decisions.',
          tu: ''
        },
        jobs: {
          ar: '??????????',
          en: 'Jobs',
          tu: ''
        },
        contact_us: {
          ar: '?????????? ????????',
          en: 'ContactUs',
          tu: ''
        },
        site_map: {
          ar: '?????????? ????????????',
          en: 'Sitemap',
          tu: ''
        },
        conditions: {
          ar: '??????????????',
          en: 'Terms',
          tu: ''
        },
        searches: {
          ar: '??????????',
          en: 'Market Research',
          tu: ''
        },
        big_photo_upload: {
          ar: '?????????? ???????????? ???????????????? ???????? ???? 2 ????????',
          en: 'size of photo uploaded is more than 2 mega',
          tu: ''
        },
        big_photo_upload_error_preview: {
          ar: '???? ?????????? ???? ?????? ?????????? ???????? ?????????????? ???????? ???? 2 ????????',
          en: 'we cant preview photo uploaded that size is more than 2 mega',
          tu: ''
        },
        you_exceed_number_of_uploaded: {
          ar: '?????? ???????????? ?????? ?????????? ?????????????? ???? ??????????',
          en: 'you exceed number of photos uploaded',
          tu: ''
        },
        added_to_fav: {
          ar: '???? ?????????????? ?????? ?????????????? ??????????',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav: {
          ar: '?????? ?????????????? ???? ?????????????? ??????????',
          en: 'removed from favourite successfully',
          tu: ''
        },
        do_you_need_help: {
          ar: '???? ?????????? ?????? ????????????',
          en: 'Do you need help',
          tu: ''
        },
        to_get_best_results: {
          ar: '???????????? ?????? ?????????? ???????? ?? ???????? ?? ???????? ???? ???? ???????????? ???? ???????? ?????????????? ???????????????? - ???????????????? ???? ???????????? ?????? ???????????? ?????? .',
          en: 'To get faster and more results, we recommend that you contact the largest real estate offices - to help you find what you are looking for.',
          tu: ''
        },
        registered_at_date: {
          ar: '?????? ???? ??????????',
          en: 'Registered at date',
          tu: ''
        },
        properties: {
          ar: '???????????? ??????',
          en: 'Properties',
          tu: ''
        },
        request_contact: {
          ar: '?????? ??????????',
          en: 'Request contact',
          tu: ''
        },
        personal_info: {
          ar: '??????????',
          en: 'My Account',
          tu: ''
        },
        my_listings: {
          ar: '??????????????',
          en: 'My Listings',
          tu: ''
        },
        my_balance: {
          ar: '??????????',
          en: 'Credit',
          tu: ''
        },
        charge_credit: {
          ar: '?????? ????????',
          en: 'charge credit',
          tu: ''
        },
        statistics: {
          ar: '??????????????????',
          en: 'statistics',
          tu: ''
        },
        my_favourite: {
          ar: '??????????????',
          en: 'Favourite',
          tu: ''
        },
        my_notes: {
          ar: '????????????????',
          en: 'My Notes',
          tu: ''
        },
        notifications: {
          ar: '??????????????????',
          en: 'notifications',
          tu: ''
        },
        meter: {
          ar: '??????',
          en: 'Meter',
          tu: ''
        },
        bed: {
          ar: '??????????',
          en: 'beds',
          tu: ''
        },
        baths: {
          ar: '????????',
          en: 'baths',
          tu: ''
        },
        added_to_fav_successfully: {
          ar: '???? ?????????????? ?????? ?????????????? ??????????',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav_successfully: {
          ar: '?????? ?????????????? ???? ?????????????? ??????????',
          en: 'removed from favourite successfully',
          tu: ''
        },
        about_us: {
          ar: '???? ????????????',
          en: 'who us',
          tu: ''
        },
        ask_home: {
          ar: '???????? ????????',
          en: 'request accommodation',
          tu: ''
        },
        please_contact_with_this_number: {
          ar: '?????????? ?????????????? ???? ??????????',
          en: 'please contact with this number',
          tu: ''
        },
        work_daily: {
          ar: '?????????? ?????????? ???? ???? ?????????????? ?????????? ?????? ?????????????? ????????',
          en: 'Business hours are from ten in the morning until eight in the evening',
          tu: ''
        },
        contact_with_us: {
          ar: '?????????? ?????????????? ???????? ??????',
          en: 'you can contact with us',
          tu: ''
        },
        search_inside_the_cities_of_egypt: {
          ar: '???????????? ???? ?????? ??????',
          en: 'Search inside the cities of Egypt',
          tu: ''
        },
        rent: {
          ar: '??????????',
          en: 'Rent',
          tu: ''
        },
        sale: {
          ar: '??????',
          en: 'Sale'
        },
        share_this_link: {
          ar: '???????????? ?????? ????????????',
          en: 'Share this link',
          tu: ''
        },
        close: {
          ar: '??????????',
          en: 'Close',
          tu: ''
        },
        like_answer: {
          ar: '?????? ?????? ?????????? ?????????????? ??????????',
          en: 'like on this answer has done successfully',
          tu: ''
        },
        // dashboard words
        users: {
          ar: '????????????????????',
          en: 'Users',
          tu: ''
        },
        chart: {
          ar: '????????????????????',
          en: 'Chart',
          tu: ''
        },
        packages: {
          ar: '??????????????',
          en: 'Packages',
          tu: ''
        },
        categories: {
          ar: '??????????????',
          en: 'Categories',
          tu: ''
        },
        questions: {
          ar: '??????????????',
          en: 'Questions',
          tu: ''
        },
        countries: {
          ar: '??????????',
          en: 'Countries'
        },
        governments: {
          ar: '??????????????????',
          en: 'Governments'
        },
        cities: {
          ar: '??????????',
          en: 'Cities'
        },
        areas: {
          ar: '??????????????',
          en: 'Areas'
        },
        reports: {
          ar: '????????????????',
          en: 'Reports',
          tu: ''
        },
        client_support: {
          ar: '?????????? ??????????',
          en: 'client support',
          tu: ''
        },
        explore_listings: {
          ar: '???????? ????????????????',
          en: 'Explore Listings',
          tu: ''
        },
        see_statics: {
          ar: '???????? ????????????????????',
          en: 'See Statics',
          tu: ''
        },
        are_you_sure_about_approve: {
          ar: '???? ?????? ?????????? ???? ?????????? ????????????????',
          en: 'Are you sure from approving this request',
          tu: ''
        },
        are_you_sure_about_delete: {
          ar: '???? ?????? ?????????? ???? ?????????? ??????????',
          en: 'Are you sure from delete operation',
          tu: ''
        },
        in_case_you_approved_listing_will_be_at_public: {
          ar: '???? ???????? ???????????????? ?????? ?????????? ?????????? ?????? ?????????? ???????? ???????????? ???? ?????? ??????????',
          en: 'In case you approved this request , the request will be available to any one to see it',
          tu: ''
        },
        in_case_you_delete_you_cant_retrieve_it: {
          ar: '???? ???????? ???????????????? ?????? ?????? ?????????? ???? ???????????? ?????????????? ???????????????? ?????? ????????',
          en: 'In case you delete you cant retrieve data another time',
          tu: ''
        },
        yes_iam_sure: {
          ar: '?????? ?????? ??????????',
          en: 'yes iam sure',
          tu: ''
        },
        cancel: {
          ar: '??????????',
          en: 'Cancel',
          tu: ''
        },
        approved_done: {
          ar: '?????? ????????????????',
          en: 'Approved !',
          tu: ''
        },
        deleted_done: {
          ar: '???? ??????????',
          en: 'Deleted !',
          tu: ''
        },
        approved_done_successfully: {
          ar: '?????? ?????????? ???????????????? ??????????',
          en: 'Approved done successfully',
          tu: ''
        },
        deleted_done_successfully: {
          ar: '?????? ?????????? ?????????? ??????????',
          en: 'Deleted done successfully',
          tu: ''
        },
        add_new_item: {
          ar: '?????????? ???????? ????????',
          en: 'Add new Item',
          tu: ''
        },
        update_new_item: {
          ar: '?????????? ???????????? ',
          en: 'update info of',
          tu: ''
        },
        upload_image: {
          ar: '???????? ????????',
          en: 'upload image',
          tu: ''
        },
        select_question: {
          ar: '???????? ????????????',
          en: 'Select question',
          tu: ''
        },
        // question at dashboard
        ar_question: {
          ar: '???????????? ??????????????',
          en: 'arabic question',
          tu: ''
        },
        en_question: {
          ar: '???????????? ????????????????????',
          en: 'english question',
          tu: ''
        },
        tu_question: {
          ar: '???????????? ??????????????',
          en: 'turkish question',
          tu: ''
        },
        question_type: {
          ar: '?????? ????????????',
          en: 'question type',
          tu: ''
        },
        question_type_text: {
          ar: '????',
          en: 'text',
          tu: ''
        },
        question_type_select: {
          ar: '???????? ???? ??????????',
          en: 'Select from options',
          tu: ''
        },
        question_type_checkbox: {
          ar: '?????? ???? ???? ',
          en: 'yes or no',
          tu: ''
        },
        question_required: {
          ar: '???????? ?????? ?????? ?????????????? ???? ?????? ???????????? ???? ????',
          en: 'required or not required',
          tu: ''
        },
        required: {
          ar: '??????????',
          en: 'required',
          tu: ''
        },
        not_required: {
          ar: '?????? ??????????',
          en: 'not required',
          tu: ''
        },
        question_answers: {
          ar: '???????????? ????????????',
          en: 'question answers',
          tu: ''
        },
        question_answer_ar: {
          ar: '?????????? ???????????? ??????????????',
          en: 'question answer in arabic',
          tu: ''
        },
        question_answer_en: {
          ar: '?????????? ???????????? ????????????????????',
          en: 'question answer in english',
          tu: ''
        },
        question_answer_tu: {
          ar: '?????????? ???????????? ??????????????',
          en: 'question answer in turkish',
          tu: ''
        },
        add_question_answer: {
          ar: '?????? ?????????? ??????????',
          en: 'add question answer',
          tu: ''
        },
        actions: {
          ar: '??????????????',
          en: 'actions',
          tu: ''
        },
        update_status_successfully: {
          ar: '???? ?????????? ???????????? ??????????',
          en: 'Status updated Successfully',
          tu: ''
        },
        select_year: {
          ar: '???????? ??????????',
          en: 'Select year',
          tu: ''
        },
        please_select_type_of_area_you_want_to_be_added: {
          ar: '???? ???????? ???????? ?????? ?????????????? ???????? ?????? ??????????????',
          en: 'Please select type of area you want to be added',
          tu: ''
        },
        area: {
          ar: '??????????',
          en: 'Area',
          tu: ''
        },
        city: {
          ar: '??????????',
          en: 'City',
          tu: ''
        },
        government: {
          ar: '????????????',
          en: 'Government',
          tu: ''
        },
        country: {
          ar: '????????',
          en: 'Country',
          tu: ''
        },
        select_country: {
          ar: '???????? ????????????',
          en: 'Select country',
          tu: ''
        },
        select_government: {
          ar: '???????? ????????????????',
          en: 'Select government',
          tu: ''
        },
        select_city: {
          ar: '???????? ??????????????',
          en: 'Select city',
          tu: ''
        },
        select_area: {
          ar: '???????? ??????????????',
          en: 'Select area',
          tu: ''
        },
        point_price: {
          ar: '?????? ????????????',
          en: 'Point Price',
          tu: ''
        },
        save: {
          ar: '??????',
          en: 'Save',
          tu: ''
        },
        name: {
          ar: '??????????',
          en: 'Name',
          tu: ''
        },
        add_new_question: {
          ar: '?????? ???????? ????????',
          en: 'Add new question',
          tu: ''
        },
        filter: {
          ar: '??????????',
          en: 'Filter',
          tu: ''
        }
      }
    };
  },
  methods: {
    switchWord: function switchWord(word) {
      // find word first
      if (Object.keys(this.words).includes(word)) {
        // yes found it  =======> you passed english
        if (this.$inertia.page.props.lang == "tu") {
          return this.words[word]['en'];
        } else {
          return this.words[word][this.$inertia.page.props.lang];
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#show_notes[data-v-4b9f52bc] {\n  z-index: 99999999999;\n}\n.alert-danger[data-v-4b9f52bc] {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer[data-v-abfbddf2] {\n  background-color: #ff6a15;\n}\nfooter .row > div:first-of-type h1[data-v-abfbddf2] {\n  margin-bottom: 15px;\n  font-size: 40px;\n}\nfooter .row > div:first-of-type h1[data-v-abfbddf2], footer .row > div:first-of-type p[data-v-abfbddf2] {\n  color: white;\n}\nfooter .row > div:last-of-type .info ul[data-v-abfbddf2] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\nfooter .row > div:last-of-type .info ul li a[data-v-abfbddf2] {\n  color: white;\n}\nfooter .row > div:last-of-type .info .downloads[data-v-abfbddf2] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\nfooter .row > div:last-of-type .info .downloads img[data-v-abfbddf2] {\n  height: 60px;\n  max-width: 170px;\n}\nfooter .row > div:last-of-type .info .social[data-v-abfbddf2] {\n  display: flex;\n  align-items: center;\n}\nfooter .row > div:last-of-type .info .social a span[data-v-abfbddf2] {\n  color: white;\n}\n@media (max-width: 900px) {\nfooter h1[data-v-abfbddf2], footer p[data-v-abfbddf2] {\n    text-align: center;\n}\nfooter ul[data-v-abfbddf2] {\n    margin-top: 12px;\n}\nfooter .downloads img[data-v-abfbddf2] {\n    max-width: 95px !important;\n}\nfooter .downloads[data-v-abfbddf2], footer .social[data-v-abfbddf2] {\n    justify-content: center;\n}\n}\n.ar footer .downloads a[data-v-abfbddf2]:first-of-type {\n  margin-left: 10px;\n}\n.ar footer .social a[data-v-abfbddf2] {\n  margin-left: 15px;\n}\n.en footer .downloads a[data-v-abfbddf2]:first-of-type {\n  margin-right: 10px;\n}\n.en footer .social a[data-v-abfbddf2] {\n  margin-right: 15px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".listing-details-info[data-v-210fc084] {\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  overflow: hidden;\n  position: relative;\n}\n.listing-details-info > span[data-v-210fc084] {\n  position: absolute;\n  top: 5px;\n  z-index: 99999999999999990000000000000000;\n  cursor: pointer;\n}\n.listing-details-info > span.fav[data-v-210fc084] {\n  color: #9D0208;\n}\n.listing-details-info > span.edit[data-v-210fc084] {\n  color: #616161;\n}\n.listing-details-info .image[data-v-210fc084] {\n  position: relative;\n}\n.listing-details-info .image img[data-v-210fc084] {\n  width: 100%;\n}\n.listing-details-info .image p[data-v-210fc084] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  background-color: #2624244d;\n  bottom: 0px;\n}\n.listing-details-info .image p span[data-v-210fc084] {\n  color: white;\n}\n.listing-details-info .info_icons p span[data-v-210fc084]:nth-of-type(odd) {\n  color: #c9cacf;\n}\n.listing-details-info a > p[data-v-210fc084] {\n  padding: 4px 8px;\n}\n.listing-details-info a > p:first-of-type strong[data-v-210fc084] {\n  color: #616161;\n}\n.listing-details-info a > p[data-v-210fc084]:nth-of-type(2) {\n  color: #616161;\n}\n.listing-details-info a > p:nth-of-type(3) span[data-v-210fc084] {\n  color: #ff6a15;\n  font-weight: bold;\n}\n.listing-details-info a > p:last-of-type span[data-v-210fc084] {\n  font-weight: bold;\n  color: #ff6a15;\n}\n.ar .listing-details-info > span[data-v-210fc084] {\n  left: 5px;\n}\n.ar .listing-details-info .image p[data-v-210fc084] {\n  right: 0px;\n}\n.ar .listing-details-info .image p span[data-v-210fc084] {\n  margin-left: 5px;\n}\n.en .listing-details-info > span[data-v-210fc084] {\n  right: 5px;\n}\n.en .listing-details-info .image p[data-v-210fc084] {\n  left: 0px;\n}\n.en .listing-details-info .image p span[data-v-210fc084] {\n  margin-right: 5px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ar .navbar-brand[data-v-485090b2] {\n  margin-left: 5%;\n}\n.ar .nav-link > span[data-v-485090b2]:first-of-type {\n  margin-left: 7px;\n}\n.ar .auth-form .user_image img[data-v-485090b2] {\n  margin-left: 10px;\n}\n.ar .auth-form .list ul li p span[data-v-485090b2]:first-of-type {\n  margin-left: 5px;\n}\n.en .navbar-brand[data-v-485090b2] {\n  margin-right: 5%;\n}\n.en .dropdown-menu[data-v-485090b2] {\n  right: 0px;\n  left: unset;\n}\n.en .nav-link > span[data-v-485090b2]:first-of-type {\n  margin-right: 7px;\n}\n.en .auth-form .user_image img[data-v-485090b2] {\n  margin-right: 10px;\n}\n.en .auth-form .list ul li p span[data-v-485090b2]:first-of-type {\n  margin-right: 5px;\n}\nnav[data-v-485090b2] {\n  padding: 0px;\n  box-shadow: 1px 1px 1px 1px #ddd;\n  background-color: white !important;\n}\nnav .navbar-brand img[data-v-485090b2] {\n  height: 50px;\n}\nnav .nav-item > a[data-v-485090b2] {\n  color: #03071E !important;\n}\nnav .navbar-brand[data-v-485090b2] {\n  margin: 0px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #ff6a15;\n  padding: 0px;\n  position: relative;\n  top: -3px;\n}\nnav .navbar-brand[data-v-485090b2]:hover {\n  color: #007e72;\n}\nnav .nav-item[data-v-485090b2] {\n  cursor: pointer;\n}\nnav .dropdown-menu[data-v-485090b2] {\n  padding: 10px;\n}\nnav .dropdown-menu a[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\nnav .dropdown-menu a span[data-v-485090b2]:first-of-type {\n  color: #ff6a15;\n}\nnav .user-info-auth[data-v-485090b2] {\n  max-width: 320px;\n  width: 320px;\n  overflow: hidden;\n}\nnav .user-info-auth .sign-form h2[data-v-485090b2] {\n  margin-bottom: 10px;\n  color: #ff6a15;\n  font-weight: bold;\n}\nnav .user-info-auth .sign-form p[data-v-485090b2] {\n  color: #c9cacf;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .sign-form div[data-v-485090b2]:nth-of-type(2) {\n  background-color: #ff6a15;\n  padding: 15px;\n}\nnav .user-info-auth .sign-form div:nth-of-type(2) p[data-v-485090b2] {\n  color: white;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2] {\n  display: block;\n  text-align: center;\n  color: #ff6a15;\n  padding: 8px;\n  border-radius: 24px;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2]:first-of-type {\n  color: white;\n  background-color: #ff6a15;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2]:nth-of-type(2) {\n  background-color: #e4e5ea40;\n}\nnav .user-info-auth .auth-form .user_image[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\nnav .user-info-auth .auth-form .user_image img[data-v-485090b2] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nnav .user-info-auth .auth-form .user_image div p[data-v-485090b2]:last-of-type {\n  color: #c9cacf;\n  margin-top: 5px;\n}\nnav .user-info-auth .auth-form .list > p[data-v-485090b2] {\n  padding: 0px 10px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .auth-form .list ul li[data-v-485090b2] {\n  padding: 3px 10px;\n}\nnav .user-info-auth .auth-form .list ul li p span[data-v-485090b2] {\n  font-size: 11px;\n}\nnav .user-info-auth .auth-form .list ul li p span[data-v-485090b2]:last-of-type {\n  font-weight: bold;\n}\nnav .user-info-auth .auth-form .list ul li > span[data-v-485090b2] {\n  color: white;\n  padding: 0px 5px;\n  border-radius: 3px;\n  background-color: #ff6a15;\n}\n.nav-link[data-v-485090b2] {\n  color: #03071E;\n}\n.nav-link .box[data-v-485090b2] {\n  position: absolute;\n  top: 0px;\n  display: none;\n}\n.nav-link p[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.nav-link p span[data-v-485090b2]:nth-of-type(2) {\n  margin-right: 7px;\n  margin-left: 7px;\n}\n.dropdown-toggle span[data-v-485090b2]:nth-of-type(2) {\n  margin-right: 7px;\n  margin-left: 7px;\n}\n.dropdown-toggle .user_profile[data-v-485090b2] {\n  text-align: center;\n}\n.dropdown-toggle .user_profile img[data-v-485090b2] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #eee;\n}\n.dropdown-toggle .user_profile span[data-v-485090b2] {\n  background-color: #ff6a15;\n  color: white;\n  padding: 1px 9px;\n  border-radius: 5px;\n  font-size: 10px;\n  display: block;\n  position: relative;\n  text-align: center;\n  top: -8px;\n}\n.dropdown-toggle[data-v-485090b2]::after {\n  display: none;\n}\n@media (min-width: 992px) {\nnav ul:first-of-type .nav-item:nth-of-type(2) div[data-v-485090b2],\nnav ul:first-of-type .nav-item:nth-of-type(3) div[data-v-485090b2] {\n    width: 203px;\n}\n}\n@media (max-width: 992px) {\n.navbar-collapse[data-v-485090b2] {\n    flex-wrap: wrap;\n}\n.navbar-collapse .navbar-nav[data-v-485090b2] {\n    width: 100%;\n}\n.user-info-auth[data-v-485090b2] {\n    width: 320px;\n}\nul.d-flex[data-v-485090b2] {\n    flex-direction: column;\n}\n.ar nav .dropdown-menu[data-v-485090b2] {\n    right: 0px;\n}\n.ar .user-info-auth[data-v-485090b2] {\n    right: 0px;\n}\n.ar .nav-link[data-v-485090b2] {\n    padding-right: 0px;\n}\n.en nav .dropdown-menu[data-v-485090b2] {\n    left: 0px;\n}\n.en .user-info-auth[data-v-485090b2] {\n    left: 0px;\n}\n.en .nav-link[data-v-485090b2] {\n    padding-left: 0px;\n}\n}\n@media (max-width: 767px) {\n.auth-form[data-v-485090b2], .sign-form[data-v-485090b2] {\n    max-height: 400px;\n    overflow: auto;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".profile-nav[data-v-080dc7c8] {\n  border-top: 1px solid #ddd;\n  margin-top: 25px;\n}\n.profile-nav ul li[data-v-080dc7c8] {\n  width: 100%;\n  padding: 5px;\n  transition: 0.5s all;\n}\n.profile-nav ul li a[data-v-080dc7c8] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n.profile-nav ul li[data-v-080dc7c8]:first-of-type {\n  border-right: none !important;\n  border-left: none !important;\n  background-color: #66bb6a;\n}\n.profile-nav ul li:first-of-type span[data-v-080dc7c8] {\n  color: white;\n}\n.profile-nav ul li:not(:first-of-type) a[data-v-080dc7c8]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -5px;\n  width: 0%;\n  height: 2px;\n  background-color: #ff6a15;\n  transition: 0.5s all;\n}\n.profile-nav ul li:not(:first-of-type):hover span[data-v-080dc7c8] {\n  color: #ff6a15;\n}\n.profile-nav ul li:not(:first-of-type) a[data-v-080dc7c8]:hover::before {\n  width: 100%;\n}\n.profile-nav ul li.active[data-v-080dc7c8] {\n  padding: 0px;\n}\n.profile-nav ul li.active a[data-v-080dc7c8] {\n  color: #ff6a15;\n}\n.profile-nav ul li.active a span[data-v-080dc7c8] {\n  color: #ff6a15;\n}\n.profile-nav ul li.active a[data-v-080dc7c8]::before {\n  width: 100%;\n}\n.profile-nav-line[data-v-080dc7c8] {\n  margin: 0px;\n}\n.ar .profile-nav ul li span[data-v-080dc7c8]:first-of-type {\n  margin-left: 4px;\n}\n.ar .profile-nav ul li[data-v-080dc7c8] {\n  border-right: 1px solid #dddddd;\n}\n.en .profile-nav ul li span[data-v-080dc7c8]:first-of-type {\n  margin-right: 4px;\n}\n.en .profile-nav ul li[data-v-080dc7c8] {\n  border-left: 1px solid #dddddd;\n}\n@media (min-width: 768px) and (max-width: 1000px) {\n.profile-nav ul li span[data-v-080dc7c8]:last-of-type {\n    font-size: 11px;\n}\n}\n@media (max-width: 767px) {\n.profile-nav ul li span[data-v-080dc7c8]:last-of-type {\n    display: none;\n}\n.profile-nav ul li[data-v-080dc7c8]:first-of-type {\n    display: none !important;\n}\n.profile-nav ul li:first-of-type span[data-v-080dc7c8]:first-of-type {\n    display: none;\n}\n.profile-nav ul li:first-of-type span[data-v-080dc7c8]:last-of-type {\n    display: block;\n}\n.profile-nav ul li.active a[data-v-080dc7c8]::before {\n    bottom: -5px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/profile/notes.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/profile/notes.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notes_vue_vue_type_template_id_4b9f52bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes.vue?vue&type=template&id=4b9f52bc&scoped=true& */ "./resources/js/Pages/profile/notes.vue?vue&type=template&id=4b9f52bc&scoped=true&");
/* harmony import */ var _notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.vue?vue&type=script&lang=js& */ "./resources/js/Pages/profile/notes.vue?vue&type=script&lang=js&");
/* harmony import */ var _notes_vue_vue_type_style_index_0_id_4b9f52bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true& */ "./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _notes_vue_vue_type_template_id_4b9f52bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _notes_vue_vue_type_template_id_4b9f52bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4b9f52bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/profile/notes.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/FooterComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/FooterComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FooterComponent_vue_vue_type_template_id_abfbddf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true& */ "./resources/js/components/FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true&");
/* harmony import */ var _FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/FooterComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _FooterComponent_vue_vue_type_style_index_0_id_abfbddf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true& */ "./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FooterComponent_vue_vue_type_template_id_abfbddf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _FooterComponent_vue_vue_type_template_id_abfbddf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "abfbddf2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FooterComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListingPostComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/ListingPostComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListingPostComponent_vue_vue_type_template_id_210fc084_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true& */ "./resources/js/components/ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true&");
/* harmony import */ var _ListingPostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListingPostComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ListingPostComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ListingPostComponent_vue_vue_type_style_index_0_id_210fc084_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true& */ "./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ListingPostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListingPostComponent_vue_vue_type_template_id_210fc084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListingPostComponent_vue_vue_type_template_id_210fc084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "210fc084",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListingPostComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& */ "./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&");
/* harmony import */ var _NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& */ "./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "485090b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavbarComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& */ "./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&");
/* harmony import */ var _ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileNavComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& */ "./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "080dc7c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProfileNavComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue":
/*!***********************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& */ "./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&");
/* harmony import */ var _SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwitchLangWord.vue?vue&type=script&lang=js& */ "./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "62c21d50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/mixin/SwitchLangWord.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/profile/notes.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/profile/notes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/FooterComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FooterComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ListingPostComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ListingPostComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListingPostComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchLangWord.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/profile/notes.vue?vue&type=template&id=4b9f52bc&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/profile/notes.vue?vue&type=template&id=4b9f52bc&scoped=true& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_template_id_4b9f52bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_template_id_4b9f52bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_template_id_4b9f52bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notes.vue?vue&type=template&id=4b9f52bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=template&id=4b9f52bc&scoped=true&");


/***/ }),

/***/ "./resources/js/components/FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_template_id_abfbddf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_template_id_abfbddf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_template_id_abfbddf2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_template_id_210fc084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_template_id_210fc084_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_template_id_210fc084_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true&");


/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_template_id_485090b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_template_id_080dc7c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&");


/***/ }),

/***/ "./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwitchLangWord_vue_vue_type_template_id_62c21d50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_4b9f52bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_4b9f52bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_4b9f52bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_4b9f52bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_notes_vue_vue_type_style_index_0_id_4b9f52bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_style_index_0_id_abfbddf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_style_index_0_id_abfbddf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_style_index_0_id_abfbddf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_style_index_0_id_abfbddf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterComponent_vue_vue_type_style_index_0_id_abfbddf2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_style_index_0_id_210fc084_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_style_index_0_id_210fc084_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_style_index_0_id_210fc084_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_style_index_0_id_210fc084_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingPostComponent_vue_vue_type_style_index_0_id_210fc084_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NavbarComponent_vue_vue_type_style_index_0_id_485090b2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileNavComponent_vue_vue_type_style_index_0_id_080dc7c8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=template&id=4b9f52bc&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=template&id=4b9f52bc&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "profile" },
    [
      _c("navbar-component"),
      _vm._v(" "),
      _c("profile-nav-component"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { staticClass: "row pt-4" },
          _vm._l(_vm.data, function (note, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "col-lg-4",
                attrs: { id: note["id"] },
              },
              [
                _c("ListingPostComponent", {
                  attrs: {
                    note: "true",
                    id: note.id,
                    image: note.listing.images[0].image,
                    number_of_images: note.listing.images.length,
                    info: note.listing.info,
                    address: note.listing.address,
                    price: note.listing.price,
                    note: note.note,
                  },
                  on: { write_note: _vm.update_note },
                }),
              ],
              1
            )
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _vm.item != null
        ? _c(
            "div",
            {
              staticClass: "modal fade",
              attrs: {
                id: "show_notes",
                tabindex: "-1",
                role: "dialog",
                "aria-labelledby": "exampleModalLabel",
                "aria-hidden": "true",
              },
            },
            [
              _c(
                "div",
                { staticClass: "modal-dialog", attrs: { role: "document" } },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _c("div", { staticClass: "modal-header" }, [
                      _c(
                        "h5",
                        {
                          staticClass: "modal-title",
                          staticStyle: { "font-size": "16px" },
                          attrs: { id: "show_notes_box" },
                        },
                        [_vm._v(_vm._s(_vm.keywords.note_you_write_it))]
                      ),
                      _vm._v(" "),
                      _vm._m(0),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "form",
                        {
                          attrs: { method: "post" },
                          on: {
                            submit: function ($event) {
                              $event.preventDefault()
                              return _vm.save_note.apply(null, arguments)
                            },
                          },
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", [_vm._v(_vm._s(_vm.keywords.note))]),
                            _vm._v(" "),
                            _vm.item != null
                              ? _c("input", {
                                  attrs: { type: "hidden", name: "id" },
                                  domProps: {
                                    value:
                                      _vm.item != null ? _vm.item["id"] : 0,
                                  },
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "textarea",
                              {
                                staticClass: "form-control",
                                attrs: { name: "note" },
                                domProps: {
                                  value:
                                    _vm.item != null ? _vm.item["note"] : "",
                                },
                              },
                              [_vm._v(_vm._s(_vm.item["note"]))]
                            ),
                            _vm._v(" "),
                            _c("p", { staticClass: "alert alert-danger" }),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("input", {
                              staticClass: "btn btn-primary",
                              attrs: {
                                type: "submit",
                                name: "save",
                                required: "",
                              },
                              domProps: { value: _vm.keywords.save },
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "btn btn-danger",
                              attrs: {
                                type: "button",
                                name: "delete",
                                value: _vm.keywords.delete_note,
                                required: "",
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.delete_item(
                                    "listings_notes",
                                    [_vm.item["id"]],
                                    ".row > div#" + _vm.item["id"],
                                    true
                                  )
                                },
                              },
                            }),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button", "data-dismiss": "modal" },
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.keywords.close) +
                              "\n                    "
                          ),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("footer-component"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("??")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=template&id=abfbddf2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("footer", { staticClass: "p-4 mt-3" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("h1", [_vm._v(_vm._s(_vm.switchWord("ewaa")))]),
          _vm._v(" "),
          _c("p", [_vm._v(_vm._s(_vm.switchWord("footer_info")))]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "info" }, [
            _c("ul", [
              _c(
                "li",
                [
                  _c("inertia-link", { attrs: { href: "#" } }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.switchWord("jobs")) +
                        "\n                            "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("inertia-link", { attrs: { href: "#" } }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.switchWord("contact_us")) +
                        "\n                            "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("inertia-link", { attrs: { href: "#" } }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.switchWord("site_map")) +
                        "\n                            "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("inertia-link", { attrs: { href: "#" } }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.switchWord("conditions")) +
                        "\n                            "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c("inertia-link", { attrs: { href: "#" } }, [
                    _vm._v(
                      "\n                                " +
                        _vm._s(_vm.switchWord("searches")) +
                        "\n                            "
                    ),
                  ]),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "downloads" },
              [
                _c("inertia-link", { attrs: { href: "#" } }, [
                  _c("img", { attrs: { src: "/images/icons/google.svg" } }),
                ]),
                _vm._v(" "),
                _c("inertia-link", { attrs: { href: "#" } }, [
                  _c("img", { attrs: { src: "/images/icons/IOS.svg" } }),
                ]),
                _vm._v(" "),
                _c(
                  "inertia-link",
                  { staticStyle: { display: "none" }, attrs: { href: "#" } },
                  [_c("img", { attrs: { src: "/images/icons/huawei.svg" } })]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "social" },
              [
                _c("inertia-link", { attrs: { href: "#" } }, [
                  _c("span", [_c("i", { staticClass: "ri-facebook-line" })]),
                ]),
                _vm._v(" "),
                _c("inertia-link", { attrs: { href: "#" } }, [
                  _c("span", [_c("i", { staticClass: "ri-twitter-line" })]),
                ]),
                _vm._v(" "),
                _c("inertia-link", { attrs: { href: "#" } }, [
                  _c("span", [_c("i", { staticClass: "ri-instagram-line" })]),
                ]),
                _vm._v(" "),
                _c("inertia-link", { attrs: { href: "#" } }, [
                  _c("span", [_c("i", { staticClass: "ri-youtube-line" })]),
                ]),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=template&id=210fc084&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "listing-details-info" },
    [
      _vm.fav
        ? _c("span", { staticClass: "fav" }, [
            _c("i", {
              staticClass: "ri-heart-fill",
              on: { click: _vm.toggle_fav },
            }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.note
        ? _c("span", { staticClass: "edit" }, [
            _c("i", {
              staticClass: "ri-edit-fill",
              on: {
                click: function ($event) {
                  return _vm.$emit("write_note", [_vm.id, _vm.note])
                },
              },
            }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("inertia-link", { attrs: { href: "#" } }, [
        _c("div", { staticClass: "image" }, [
          _c("img", { attrs: { src: "/images/sales/" + _vm.image } }),
          _vm._v(" "),
          _c("p", [
            _c("span", [_c("i", { staticClass: "ri-image-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.number_of_images))]),
          ]),
        ]),
        _vm._v(" "),
        _c("p", [_c("strong", [_vm._v(_vm._s(_vm.info))])]),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.address))]),
        _vm._v(" "),
        _vm.compound
          ? _c(
              "div",
              { staticClass: "d-flex info_icons justify-content-around" },
              [
                _c("p", { staticClass: "d-flex align-items-center" }, [
                  _c("span", [_c("i", { staticClass: "ri-fullscreen-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v("90 " + _vm._s(_vm.switchWord("meter")))]),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "d-flex align-items-center" }, [
                  _c("span", [_c("i", { staticClass: "ri-hotel-bed-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v("1 " + _vm._s(_vm.switchWord("baths")))]),
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "d-flex align-items-center" }, [
                  _c("span", [_c("i", { staticClass: "ri-hotel-bed-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v("1 " + _vm._s(_vm.switchWord("bath")))]),
                ]),
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("p", [
          _c("span", [_vm._v(_vm._s(_vm.price))]),
          _vm._v(" "),
          _vm.$page.props.lang == "ar"
            ? _c("span", [_vm._v("????????")])
            : _c("span", [_vm._v("EGY")]),
        ]),
        _vm._v(" "),
        _vm.average
          ? _c("p", [
              _vm.$page.props.lang == "ar"
                ? _c("span", [_vm._v("?????????? ?????? ??????????")])
                : _c("span", [_vm._v("Meter average price")]),
            ])
          : _vm._e(),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=template&id=485090b2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "navbar navbar-expand-lg navbar-light bg-light" },
    [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse navbar-collapse  justify-content-between",
            attrs: { id: "navbarSupportedContent" },
          },
          [
            _c("ul", { staticClass: "navbar-nav" }, [
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link dropdown-toggle d-flex align-items-center",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                    },
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.switchWord("Search")))]),
                    _vm._v(" "),
                    _vm._m(3),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu",
                    attrs: { "aria-labelledby": "navbarDropdown" },
                  },
                  [
                    _c(
                      "inertia-link",
                      { attrs: { href: "/search-page-filter" } },
                      [
                        _c("span", [
                          _c("i", { staticClass: "ri-building-line" }),
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.switchWord("buildings"))),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-community-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.switchWord("Componds")))]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-hotel-bed-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.switchWord("Beds")))]),
                    ]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link dropdown-toggle d-flex align-items-center",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                    },
                  },
                  [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(_vm.switchWord("Know")))]),
                    _vm._v(" "),
                    _vm._m(5),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu",
                    attrs: { "aria-labelledby": "navbarDropdown" },
                  },
                  [
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-price-tag-2-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("rate_building"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-community-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("building_prices"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-message-3-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("ask_people_area"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [_c("i", { staticClass: "ri-group-line" })]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("premium_people"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-line-chart-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("real_state_index"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "#" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-lightbulb-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("public_advice"))),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item d-flex align-items-center" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass: "nav-link d-flex align-items-center",
                      attrs: { href: "listing/initialize" },
                    },
                    [
                      _c("span", [
                        _c("i", { staticClass: "ri-home-smile-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.switchWord("List")))]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item d-flex align-items-center" },
                [
                  _c(
                    "inertia-link",
                    { staticClass: "nav-link", attrs: { href: "#" } },
                    [_vm._v(_vm._s(_vm.switchWord("about_us")))]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item d-flex align-items-center" },
                [
                  _c(
                    "inertia-link",
                    { staticClass: "nav-link", attrs: { href: "#" } },
                    [_vm._v(_vm._s(_vm.switchWord("ask_home")))]
                  ),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "d-flex" }, [
              _c(
                "li",
                { staticClass: "nav-item dropdown d-flex align-items-center" },
                [
                  _vm._m(6),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown-menu",
                      attrs: { "aria-labelledby": "navbarDropdown" },
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/lang/ar" },
                        },
                        [_vm._v(_vm._s(_vm.switchWord("Arabic_Language")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/lang/en" },
                        },
                        [_vm._v(_vm._s(_vm.switchWord("English_Language")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "/lang/tu" },
                        },
                        [_vm._v(_vm._s(_vm.switchWord("Turkish_Language")))]
                      ),
                    ]
                  ),
                ]
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item d-flex align-items-center" },
                [
                  _c(
                    "inertia-link",
                    { staticClass: "nav-link", attrs: { href: "#" } },
                    [_c("span", [_vm._v(_vm._s(_vm.switchWord("Help")) + "?")])]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link dropdown-toggle",
                    attrs: {
                      href: "#",
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                    },
                  },
                  [
                    _c("div", { staticClass: "user_profile" }, [
                      _c("img", {
                        attrs: { src: "/images/icons/profile.svg" },
                      }),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(_vm.switchWord("Blue")))]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "dropdown-menu p-0 user-info-auth",
                        attrs: { "aria-labelledby": "navbarDropdown" },
                      },
                      [
                        _vm.user == null
                          ? _c("div", { staticClass: "sign-form" }, [
                              _c(
                                "div",
                                { staticClass: "p-4" },
                                [
                                  _c("h2", [
                                    _vm._v(_vm._s(_vm.switchWord("sign_in"))),
                                  ]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(_vm._s(_vm.switchWord("add_ad"))),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "inertia-link",
                                    {
                                      staticClass: "d-block",
                                      attrs: { href: "/login" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.switchWord("sign_in")) +
                                          "\n                                    "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "inertia-link",
                                    {
                                      staticClass: "d-block",
                                      attrs: { href: "/register" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.switchWord("sign_up")) +
                                          "\n                                    "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "p-4" }, [
                                _c("p", [
                                  _vm._v(_vm._s(_vm.switchWord("my_offers"))),
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    _vm._s(_vm.switchWord("get_best_offers"))
                                  ),
                                ]),
                              ]),
                            ])
                          : _c("div", { staticClass: "auth-form" }, [
                              _c("div", { staticClass: "user_image" }, [
                                _c("img", {
                                  attrs: {
                                    src: "/images/users/" + _vm.user.image,
                                  },
                                }),
                                _vm._v(" "),
                                _c("div", [
                                  _c("p", [_vm._v("example@gmail.com")]),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.switchWord("registered_from_date")
                                      ) +
                                        "\n                                            " +
                                        _vm._s(
                                          new Date(
                                            _vm.user.created_at
                                          ).toLocaleDateString()
                                        ) +
                                        "\n                                        "
                                    ),
                                  ]),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("div", { staticClass: "list" }, [
                                _c(
                                  "p",
                                  [
                                    _c(
                                      "inertia-link",
                                      { attrs: { href: "/profile/edit" } },
                                      [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(
                                              _vm.switchWord("activities")
                                            ) +
                                            "\n                                        "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("ul", [
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(7),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.switchWord("my_favourite")
                                            )
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("4")]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(8),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.switchWord("my_notes"))
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("2")]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(9),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.switchWord("notifications")
                                            )
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("2")]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("hr"),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(10),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.switchWord("my_listings")
                                            )
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span", [_vm._v("2")]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(11),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.switchWord("my_balance"))
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(12),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(
                                              _vm.switchWord("charge_credit")
                                            )
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "li",
                                    {
                                      staticClass:
                                        "d-flex align-items-center justify-content-between",
                                    },
                                    [
                                      _c("p", [
                                        _vm._m(13),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(_vm.switchWord("logout"))
                                          ),
                                        ]),
                                      ]),
                                      _vm._v(" "),
                                      _c("span"),
                                    ]
                                  ),
                                ]),
                              ]),
                            ]),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
      _c("img", { attrs: { src: "/images/logo.png" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
        },
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-search-2-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-arrow-drop-down-fill" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-information-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-arrow-drop-down-fill" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link dropdown-toggle",
        attrs: {
          href: "#",
          id: "navbarDropdown",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false",
        },
      },
      [_c("i", { staticClass: "ri-global-line" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-heart-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-file-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-notification-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-building-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-bank-card-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-wallet-3-line" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-logout-box-line" })])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=template&id=080dc7c8&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "profile-nav" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "ul",
          { staticClass: "d-flex align-items-center justify-content-between" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/edit" } }, [
                  _c("span", [_c("i", { staticClass: "ri-user-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("personal_info")))]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/dashboard" } }, [
                  _c("span", [_c("i", { staticClass: "ri-building-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("my_listings")))]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/statistics" } }, [
                  _c("span", [_c("i", { staticClass: "ri-line-chart-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("statistics")))]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/favourites" } }, [
                  _c("span", [_c("i", { staticClass: "ri-heart-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("my_favourite")))]),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              [
                _c("inertia-link", { attrs: { href: "/profile/notes" } }, [
                  _c("span", [_c("i", { staticClass: "ri-file-list-3-line" })]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(_vm.switchWord("my_notes")))]),
                ]),
              ],
              1
            ),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("hr", { staticClass: "profile-nav-line" }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "li",
      { staticClass: "d-flex align-items-center justify-content-center" },
      [
        _c("span", [_c("i", { staticClass: "ri-file-user-line" })]),
        _vm._v(" "),
        _c("span", [_vm._v("???????? ??????")]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/mixin/SwitchLangWord.vue?vue&type=template&id=62c21d50&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/profile/notes.vue?vue&type=style&index=0&id=4b9f52bc&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("42aa7373", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/FooterComponent.vue?vue&type=style&index=0&id=abfbddf2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("82b25e44", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ListingPostComponent.vue?vue&type=style&index=0&id=210fc084&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c1cb3122", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/NavbarComponent.vue?vue&type=style&index=0&id=485090b2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9801a512", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProfileNavComponent.vue?vue&type=style&index=0&id=080dc7c8&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("705e3938", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);