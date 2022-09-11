(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_Pages_questions_ask_neighbors_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/NavbarComponent */ "./resources/js/components/NavbarComponent.vue");
/* harmony import */ var _components_FooterComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FooterComponent */ "./resources/js/components/FooterComponent.vue");
/* harmony import */ var _components_SaleRentComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SaleRentComponent */ "./resources/js/components/SaleRentComponent.vue");
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ask_neighbors",
  props: ['keywords', 'cities', 'categories', 'questions', 'requested_data', 'cities_listings', 'country'],
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_3__.default],
  components: {
    SaleRentComponent: _components_SaleRentComponent__WEBPACK_IMPORTED_MODULE_2__.default,
    FooterComponent: _components_FooterComponent__WEBPACK_IMPORTED_MODULE_1__.default,
    NavbarComponent: _components_NavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      question_type: '',
      current_url: document.URL,
      links: [],
      has_parameter: document.URL.indexOf('?') > 0 ? true : false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)({
    'map_data': 'countries_govenrn_cities_areas/get_items_data',
    'questions_info_data': 'discussions_questions/get_data'
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)({
    'inilaize_cities': 'countries_govenrn_cities_areas/inialize_items',
    'inilaize_questions': 'discussions_questions/inialize_items'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)({
    'get_next_map_type': 'countries_govenrn_cities_areas/get_next_map_type_from_previous_value',
    'add_question': 'discussions_questions/save_question'
  })), {}, {
    update_area: function update_area() {
      var data = {
        name: 'areas',
        where: 'city_id',
        value: event.target.value
      };
      this.get_next_map_type(data);
    },
    get_active_question_type: function get_active_question_type() {
      // get question type
      if (document.URL.indexOf('has_answers') > 0) {
        this.question_type = 0;
      } else if (document.URL.indexOf('has_not_answers') > 0) {
        this.question_type = 1;
      } else {
        this.question_type = 2;
      }

      $('.questions_types li').removeClass('active');
      $('.questions_types li').eq(this.question_type).addClass('active');
    },
    change_question_type: function change_question_type() {
      var type = event.target.getAttribute('value_type');

      if (this.current_url.indexOf('?') > 0) {
        // check if question_type is at url
        if (this.current_url.indexOf('question_type') > 0) {
          var split_url = document.URL.split('question_type=');
          var split_second_url = split_url[1].split('&');
          var output = split_url[0] + 'question_type=' + type;

          if (split_second_url[1] != undefined) {
            output += '&' + split_second_url[1];
          }

          this.$inertia.visit(output);
        } else {
          // not found
          this.$inertia.visit(this.current_url + '&question_type=' + type);
        }
      } else {
        // this is first parameter request
        this.$inertia.visit(this.current_url + '?question_type=' + type);
      }
    }
  }),
  created: function created() {
    // inilaize questions
    this.inilaize_questions(this.questions); // inilzie cities

    this.inilaize_cities({
      name: 'cities',
      value: this.cities
    }); // check if i has city_id from url ==> go and get areas

    if (this.requested_data != null && this.requested_data.hasOwnProperty('city_id')) {
      console.log('areas......');
      var data = {
        name: 'areas',
        where: 'city_id',
        value: this.requested_data['city_id']
      };
      this.get_next_map_type(data);
    } // check links


    this.links = this.questions_info_data.links;

    if (this.links.length >= 3) {
      this.links.pop();
      this.links.shift();
    } // remove page from url


    if (document.URL.indexOf('&page') > 0) {
      this.current_url = document.URL.substring(0, document.URL.indexOf('&page'));
    } else {
      this.current_url = document.URL;
    }
  },
  mounted: function mounted() {
    this.get_active_question_type();
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({
    user: function user() {
      return this.$inertia.page.props.user;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    'get_parent_categories_data': 'categories/get_parent_categories_data'
  })),
  created: function created() {
    if (sessionStorage.getItem('parents_categories') == null) {
      this.get_parent_cats();
    } else {
      this.inialize_parent_categories_items(JSON.parse(sessionStorage.getItem('parents_categories')));
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function (e) {
      if (_this.get_parent_categories_data != null && _this.get_parent_categories_data.length > 0) {
        sessionStorage.setItem('parents_categories', JSON.stringify(_this.get_parent_categories_data));
      }
    }, 2000);
  },
  methods: _objectSpread(_objectSpread({
    showList: function showList() {
      var arrow = $(event.target).parent().find('span i');

      if (arrow.hasClass('ri-arrow-drop-down-fill')) {
        arrow.removeClass('ri-arrow-drop-down-fill').addClass('ri-arrow-drop-up-fill');
      } else {
        arrow.removeClass('ri-arrow-drop-up-fill').addClass('ri-arrow-drop-down-fill');
      }

      $(event.target).parent().next().fadeToggle();
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    'get_parent_cats': 'categories/get_parent_categories'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapMutations)({
    'inialize_parent_categories_items': 'categories/inialize_parent_categories_items'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SaleRentComponent",
  props: ['data', 'country'],
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  computed: {
    rent_data: function rent_data() {
      return this.data.filter(function (e) {
        return e['rent_or_sale'] == 'rent';
      });
    },
    sale_data: function sale_data() {
      return this.data.filter(function (e) {
        return e['rent_or_sale'] == 'sale';
      });
    }
  },
  methods: {
    switch_city: function switch_city() {
      $(event.target).parent().find('.active').removeClass('active');
      $(event.target).addClass('active');
      $(event.target).parent().parent().find('>div').hide();
      $(event.target).parent().parent().find('>div').eq($(event.target).index() - 3).fadeIn();
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
          ar: 'الرئيسية',
          en: 'Home',
          tu: ''
        },
        Profile: {
          ar: 'الملف الشخصي',
          en: 'profile',
          tu: ''
        },
        Search: {
          ar: 'أبحث',
          en: 'Search',
          tu: ''
        },
        Know: {
          ar: 'أعرف',
          en: 'Know',
          tu: ''
        },
        List: {
          ar: 'أعلن',
          en: 'List',
          tu: ''
        },
        Arabic_Language: {
          ar: 'اللغة العربية',
          en: 'Arabic Language',
          tu: ''
        },
        English_Language: {
          ar: 'اللغة الأنجليزية',
          en: 'English Language',
          tu: ''
        },
        Turkish_Language: {
          ar: 'اللغة التركية',
          en: 'Turkish Language',
          tu: ''
        },
        Help: {
          ar: 'مساعدة',
          en: 'Help',
          tu: ''
        },
        Blue: {
          ar: 'الأزرق',
          en: 'Blue',
          tu: ''
        },
        buildings: {
          ar: 'عقارات',
          en: 'Buildings',
          tu: ''
        },
        interests: {
          ar: 'الاهتمامات',
          en: 'Interests',
          tu: ''
        },
        ad_points: {
          ar: 'نقاط الاعلان',
          en: 'Ad Points',
          tu: ''
        },
        Componds: {
          ar: 'كومبودات',
          en: 'Componds',
          tu: ''
        },
        Beds: {
          ar: 'مساكن',
          en: 'Bed',
          tu: ''
        },
        rate_building: {
          ar: 'تقييم عقاري',
          en: 'Rate Building',
          tu: ''
        },
        building_prices: {
          ar: 'اسعار العقارات',
          en: 'Rate Building',
          tu: ''
        },
        ask_people_area: {
          ar: 'أسئل أهل المنطه',
          en: 'Ask People area',
          tu: ''
        },
        premium_people: {
          ar: 'وساط متميزون',
          en: 'Top Agent',
          tu: ''
        },
        real_state_index: {
          ar: 'المؤشر العقاري',
          en: 'real state index',
          tu: ''
        },
        public_advice: {
          ar: 'نصائح عامة',
          en: 'public advice',
          tu: ''
        },
        List_your_property: {
          ar: 'أعلن عن عقارك',
          en: 'List Your Property',
          tu: ''
        },
        List_Companies_properties: {
          ar: 'أعلن عن عقار شركتك',
          en: 'List Companies properties',
          tu: ''
        },
        sign_in: {
          ar: 'تسجيل دخول',
          en: 'Sign in',
          tu: ''
        },
        sign_up: {
          ar: 'تسجيل حساب',
          en: 'Sign up',
          tu: ''
        },
        logout: {
          ar: 'تسجيل خروج',
          en: 'logout',
          tu: ''
        },
        registered_from_date: {
          ar: 'سجل منذ تاريخ ',
          en: 'registered from date ',
          tu: ''
        },
        activities: {
          ar: 'نشاطاتي',
          en: 'my activities',
          tu: ''
        },
        add_ad: {
          ar: 'اضف اعلانات ، ملاحظات ، المفضلات واكثر ...',
          en: 'place adds , take notes , save favorites and more ...',
          tu: ''
        },
        my_offers: {
          ar: 'عروضي',
          en: 'my_offers',
          tu: ''
        },
        get_best_offers: {
          ar: 'احصل على أفضل عروض برنداتك المفضلة  من مكان واحد ، فقط لعملاء عقارماب',
          en: 'Get deals from your favorite brands, all at one place only for Aqarmap customers',
          tu: ''
        },
        // footer words
        ewaa: {
          ar: 'إيواء بلس',
          en: 'Ewaa Plus',
          tu: ''
        },
        footer_info: {
          ar: 'خدمات أيواء تساعدك على بيع وشراء العقارات بسهولة بالإضافة إلى تزويدك بمعلومات أساسية لإتخاذ واحد من أهم القرارات المالية في حياتك.',
          en: 'Ewaa services allow you to buy or sell a property while providing essential information to help you take one of life’s biggest financial decisions.',
          tu: ''
        },
        jobs: {
          ar: 'وظائف',
          en: 'Jobs',
          tu: ''
        },
        contact_us: {
          ar: 'تواصل معنا',
          en: 'ContactUs',
          tu: ''
        },
        site_map: {
          ar: 'خريطة الموقع',
          en: 'Sitemap',
          tu: ''
        },
        conditions: {
          ar: 'الاحكام',
          en: 'Terms',
          tu: ''
        },
        searches: {
          ar: 'أبحاث',
          en: 'Market Research',
          tu: ''
        },
        big_photo_upload: {
          ar: 'مساحه الصوره المرفوعه اكبر من 2 ميجا',
          en: 'size of photo uploaded is more than 2 mega',
          tu: ''
        },
        upload_good_image: {
          ar: 'ارفع صورة صحيحة',
          en: 'Upload good image',
          tu: ''
        },
        big_photo_upload_error_preview: {
          ar: 'لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا',
          en: 'we cant preview photo uploaded that size is more than 2 mega',
          tu: ''
        },
        you_exceed_number_of_uploaded: {
          ar: 'لقد تجاوزت عدد الصور المسموح به للرفع',
          en: 'you exceed number of photos uploaded',
          tu: ''
        },
        added_to_fav: {
          ar: 'تم الأضافه الي المفضلة بنجاح',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav: {
          ar: 'تمت الأزالة من المفضلة بنجاح',
          en: 'removed from favourite successfully',
          tu: ''
        },
        do_you_need_help: {
          ar: 'هل تحتاج الي مساعده',
          en: 'Do you need help',
          tu: ''
        },
        to_get_best_results: {
          ar: 'للحصول على نتائج اسرع و اكثر ، نرشح لك أن نتواصل مع أكبر المكاتب العقارية - لمساعدتك في العثور على ماتبحث عنه .',
          en: 'To get faster and more results, we recommend that you contact the largest real estate offices - to help you find what you are looking for.',
          tu: ''
        },
        registered_at_date: {
          ar: 'سجل في تاريخ',
          en: 'Registered at date',
          tu: ''
        },
        ads: {
          ar: 'اعلانات',
          en: 'Ads',
          tu: ''
        },
        properties: {
          ar: 'عقارات مصر',
          en: 'Properties',
          tu: ''
        },
        request_contact: {
          ar: 'طلب اتصال',
          en: 'Request contact',
          tu: ''
        },
        personal_info: {
          ar: 'حسابي',
          en: 'My Account',
          tu: ''
        },
        my_listings: {
          ar: 'عقاراتي',
          en: 'My Listings',
          tu: ''
        },
        select_status: {
          ar: 'اختر الحالة',
          en: 'Select Status',
          tu: ''
        },
        live_listings: {
          ar: 'نشطة',
          en: 'Live',
          tu: ''
        },
        rejected_listings: {
          ar: 'مرفوضة',
          en: 'Rejected',
          tu: ''
        },
        reject: {
          ar: 'رفض',
          en: 'reject',
          tu: ''
        },
        accept: {
          ar: 'موافقة',
          en: 'Accept',
          tu: ''
        },
        expired_listings: {
          ar: 'منتهية',
          en: 'Expired',
          tu: ''
        },
        pending_listings: {
          ar: 'معلقة',
          en: 'Pending',
          tu: ''
        },
        payment_done: {
          ar: 'تم الدفع',
          en: 'payment done',
          tu: ''
        },
        cash: {
          ar: 'كاش',
          en: 'cash',
          tu: ''
        },
        installment: {
          ar: 'تقسيط',
          en: 'installment',
          tu: ''
        },
        one_payment: {
          ar: 'دفعة واحدة',
          en: 'one payment',
          tu: ''
        },
        two_payments: {
          ar: 'دفعتان',
          en: 'two payments',
          tu: ''
        },
        three_payments: {
          ar: 'ثلاث دفعات',
          en: 'three payments',
          tu: ''
        },
        four_payments: {
          ar: 'أربع دفعات',
          en: 'four payments',
          tu: ''
        },
        pending: {
          ar: 'معلقة',
          en: 'pending',
          tu: ''
        },
        my_balance: {
          ar: 'رصيدي',
          en: 'Credit',
          tu: ''
        },
        charge_credit: {
          ar: 'شحن رصيد',
          en: 'charge credit',
          tu: ''
        },
        statistics: {
          ar: 'احصائياتي',
          en: 'statistics',
          tu: ''
        },
        my_favourite: {
          ar: 'المفضلة',
          en: 'Favourite',
          tu: ''
        },
        my_notes: {
          ar: 'ملاحظاتي',
          en: 'My Notes',
          tu: ''
        },
        notifications: {
          ar: 'الأشعارات',
          en: 'notifications',
          tu: ''
        },
        settings: {
          ar: 'الاعدادت',
          en: 'settings',
          tu: ''
        },
        meter: {
          ar: 'متر',
          en: 'Meter',
          tu: ''
        },
        bed: {
          ar: 'سراير',
          en: 'beds',
          tu: ''
        },
        baths: {
          ar: 'حمام',
          en: 'baths',
          tu: ''
        },
        added_to_fav_successfully: {
          ar: 'تم الأضافة الي المفضلة بنجاح',
          en: 'added to favourite successfully',
          tu: ''
        },
        removed_from_fav_successfully: {
          ar: 'تمت الأزالة من المفضلة بنجاح',
          en: 'removed from favourite successfully',
          tu: ''
        },
        about_us: {
          ar: 'عن المنصة',
          en: 'who us',
          tu: ''
        },
        ask_home: {
          ar: 'اطلب مسكن',
          en: 'request accommodation',
          tu: ''
        },
        please_contact_with_this_number: {
          ar: 'برجاء التواصل مع الرقم',
          en: 'please contact with this number',
          tu: ''
        },
        work_daily: {
          ar: 'ساعات العمل هي من العاشره صباحا الي الثامنة مساء',
          en: 'Business hours are from ten in the morning until eight in the evening',
          tu: ''
        },
        contact_with_us: {
          ar: 'يمكنك التواصل معنا هنا',
          en: 'you can contact with us',
          tu: ''
        },
        search_inside_the_cities: {
          ar: 'عقارات خاصة بالمدن',
          en: 'Search inside the cities',
          tu: ''
        },
        rent: {
          ar: 'تأجير',
          en: 'Rent',
          tu: ''
        },
        sale: {
          ar: 'بيع',
          en: 'Sale'
        },
        share_this_link: {
          ar: 'مشاركة هذا الرابط',
          en: 'Share this link',
          tu: ''
        },
        close: {
          ar: 'اغلاق',
          en: 'Close',
          tu: ''
        },
        like_answer: {
          ar: 'لقد تمت عملية الاعجاب بنجاح',
          en: 'like on this answer has done successfully',
          tu: ''
        },
        // dashboard words
        dashboard: {
          ar: 'الادارة',
          en: 'dashboard',
          tu: ''
        },
        users: {
          ar: 'المستخدمين',
          en: 'Users',
          tu: ''
        },
        chart: {
          ar: 'الإحصائيات',
          en: 'Chart',
          tu: ''
        },
        packages: {
          ar: 'الباقات',
          en: 'Packages',
          tu: ''
        },
        currencies: {
          ar: 'العملات',
          en: 'Currencies',
          tu: ''
        },
        used_currency: {
          ar: 'العملة المستخدمة',
          en: 'Used Currency',
          tu: ''
        },
        subscriptions: {
          ar: 'الاشتراكات',
          en: 'Subscriptions',
          tu: ''
        },
        categories: {
          ar: 'الأقسام',
          en: 'Categories',
          tu: ''
        },
        questions: {
          ar: 'الأسئلة',
          en: 'Questions',
          tu: ''
        },
        countries: {
          ar: 'الدول',
          en: 'Countries'
        },
        governments: {
          ar: 'المحافظات',
          en: 'Governments'
        },
        cities: {
          ar: 'المدن',
          en: 'Cities'
        },
        areas: {
          ar: 'المناطق',
          en: 'Areas'
        },
        reports: {
          ar: 'التقارير',
          en: 'Reports',
          tu: ''
        },
        client_support: {
          ar: 'الدعم الفني',
          en: 'client support',
          tu: ''
        },
        explore_listings: {
          ar: 'تصفح العقارات',
          en: 'Explore Listings',
          tu: ''
        },
        see_statics: {
          ar: 'رؤيه الاحصائيات',
          en: 'See Statics',
          tu: ''
        },
        are_you_sure_about_approve: {
          ar: 'هل انت متأكد من عملية الموافقة',
          en: 'Are you sure from approving this request',
          tu: ''
        },
        are_you_sure_about_delete: {
          ar: 'هل انت متأكد من عملية المسح',
          en: 'Are you sure from delete operation',
          tu: ''
        },
        in_case_you_approved_listing_will_be_at_public: {
          ar: 'في حالة الموافقة علي الطلب سيصبح هذا الطلب متاح يستطيع اي شخص رؤيتة',
          en: 'In case you approved this request , the request will be available to any one to see it',
          tu: ''
        },
        in_case_you_delete_you_cant_retrieve_it: {
          ar: 'في حالة الموافقة علي طلب المسح لن تستطيع استرجاع البيانات مرة اخري',
          en: 'In case you delete you cant retrieve data another time',
          tu: ''
        },
        yes_iam_sure: {
          ar: 'نعم انا متأكد',
          en: 'yes iam sure',
          tu: ''
        },
        cancel: {
          ar: 'إلغاء',
          en: 'Cancel',
          tu: ''
        },
        approved_done: {
          ar: 'تمت الموافقة',
          en: 'Approved !',
          tu: ''
        },
        deleted_done: {
          ar: 'تم المسح',
          en: 'Deleted !',
          tu: ''
        },
        approved_done_successfully: {
          ar: 'تمت عملية الموافقة بنجاح',
          en: 'Approved done successfully',
          tu: ''
        },
        deleted_done_successfully: {
          ar: 'تمت عملية المسح بنجاح',
          en: 'Deleted done successfully',
          tu: ''
        },
        add_new_item: {
          ar: 'إضافة عنصر جديد',
          en: 'Add new Item',
          tu: ''
        },
        update_new_item: {
          ar: 'تعديل بيانات ',
          en: 'update info of',
          tu: ''
        },
        upload_image: {
          ar: 'أرفع صورة',
          en: 'upload image',
          tu: ''
        },
        upload_images: {
          ar: 'أرفع الصور',
          en: 'upload images',
          tu: ''
        },
        select_question: {
          ar: 'اختر السؤال',
          en: 'Select question',
          tu: ''
        },
        // question at dashboard
        ar_question: {
          ar: 'السؤال بالعربي',
          en: 'arabic question',
          tu: ''
        },
        en_question: {
          ar: 'السؤال بالانجليزي',
          en: 'english question',
          tu: ''
        },
        tu_question: {
          ar: 'السؤال بالتركي',
          en: 'turkish question',
          tu: ''
        },
        question_type: {
          ar: 'نوع السؤال',
          en: 'question type',
          tu: ''
        },
        question_type_text: {
          ar: 'نص',
          en: 'text',
          tu: ''
        },
        question_type_select: {
          ar: 'اختر من متعدد',
          en: 'Select from options',
          tu: ''
        },
        question_type_radio: {
          ar: 'نعم او لا ',
          en: 'yes or no',
          tu: ''
        },
        question_required: {
          ar: 'اختر نوع حقل الادخال من حيث إجباري ام لا',
          en: 'required or not required',
          tu: ''
        },
        required: {
          ar: 'مطلوب',
          en: 'required',
          tu: ''
        },
        not_required: {
          ar: 'غير مطلوب',
          en: 'not required',
          tu: ''
        },
        cover_appearance: {
          ar: 'ظهور السؤال في كافر الاعلان',
          en: 'show question at cover of ad',
          tu: ''
        },
        appearance: {
          ar: 'عملية الظهور',
          en: 'appearance',
          tu: ''
        },
        question_answers: {
          ar: 'اجابات السؤال',
          en: 'question answers',
          tu: ''
        },
        question_answer_ar: {
          ar: 'اجابة السؤال بالعربي',
          en: 'question answer in arabic',
          tu: ''
        },
        question_answer_en: {
          ar: 'اجابة السؤال بالأنجليزي',
          en: 'question answer in english',
          tu: ''
        },
        question_answer_tu: {
          ar: 'اجابة السؤال بالتركي',
          en: 'question answer in turkish',
          tu: ''
        },
        add_question_answer: {
          ar: 'اضف اجابة جديدة',
          en: 'add question answer',
          tu: ''
        },
        actions: {
          ar: 'الأوامر',
          en: 'actions',
          tu: ''
        },
        update_status_successfully: {
          ar: 'تم تحديث الحالة بنجاح',
          en: 'Status updated Successfully',
          tu: ''
        },
        select_year: {
          ar: 'أختر السنة',
          en: 'Select year',
          tu: ''
        },
        please_select_type_of_area_you_want_to_be_added: {
          ar: 'من فضلك اختر نوع المنطقة التي تود اضافتها',
          en: 'Please select type of area you want to be added',
          tu: ''
        },
        area: {
          ar: 'منطقة',
          en: 'Area',
          tu: ''
        },
        city: {
          ar: 'مدينة',
          en: 'City',
          tu: ''
        },
        government: {
          ar: 'محافظة',
          en: 'Government',
          tu: ''
        },
        country: {
          ar: 'دولة',
          en: 'Country',
          tu: ''
        },
        select_country: {
          ar: 'اختر الدولة',
          en: 'Select country',
          tu: ''
        },
        select_government: {
          ar: 'اختر المحافظة',
          en: 'Select government',
          tu: ''
        },
        select_city: {
          ar: 'اختر المدينة',
          en: 'Select city',
          tu: ''
        },
        select_area: {
          ar: 'اختر المنطقة',
          en: 'Select area',
          tu: ''
        },
        select_currency: {
          ar: 'اختر العملة',
          en: 'Select Currency',
          tu: ''
        },
        is_visible: {
          ar: 'هل متاحة',
          en: 'Is Visible',
          tu: ''
        },
        visible: {
          ar: 'متاح',
          en: 'visible',
          tu: ''
        },
        not_visible: {
          ar: 'غير متاح',
          en: 'not visible',
          tu: ''
        },
        point_price: {
          ar: 'سعر النقطة',
          en: 'Point Price',
          tu: ''
        },
        coutry_selected: {
          ar: 'أختر الدولة التي تود انشاء سعر خاص بها',
          en: 'Select country that you want to make special price',
          tu: ''
        },
        save: {
          ar: 'حفظ',
          en: 'Save',
          tu: ''
        },
        name: {
          ar: 'الأسم',
          en: 'Name',
          tu: ''
        },
        add_new_question: {
          ar: 'أضف سؤال جديد',
          en: 'Add new question',
          tu: ''
        },
        filter: {
          ar: 'فلترة',
          en: 'Filter',
          tu: ''
        },
        related_to: {
          ar: 'تابعة ل',
          en: 'Related to',
          tu: ''
        },
        block: {
          ar: 'محظور',
          en: 'Block',
          tu: ''
        },
        auto_publish: {
          ar: 'النشر التلقائي',
          en: 'Auto Publish',
          tu: ''
        },
        yes: {
          ar: 'نعم',
          en: 'Yes',
          tu: ''
        },
        no: {
          ar: 'لا',
          en: 'No',
          tu: ''
        },
        leave_password: {
          ar: 'أترك كلمة المرور فارغة في حالة عدم رغبتك في التعديل عليها',
          en: '',
          tu: ''
        },
        press_here: {
          ar: 'أضغط هنا',
          en: 'Press Here',
          tu: ''
        },
        select_best_choice: {
          ar: 'أختر ما يناسبك',
          en: 'Select best choice',
          tu: ''
        },
        "in": {
          ar: 'في',
          en: 'in',
          tu: ''
        },
        "for": {
          ar: 'ل',
          en: 'for ',
          tu: ''
        },
        currency: {
          ar: 'دولار',
          en: 'dollar',
          tu: ''
        },
        you_should_login: {
          ar: 'من فضلك سجل دخول اولا',
          en: 'You should login first',
          tu: ''
        },
        seller_phone: {
          ar: 'رقم تليفون المعلن',
          en: 'Phone Seller',
          tu: ''
        },
        reactions_questions: {
          ar: 'عدد الاجابات لهذا السؤال هي ',
          en: 'number of answers for this question is',
          tu: ''
        },
        press_here_to_show_my_discussions: {
          ar: 'اضغط هنا لعرض جميع نقاشاتي',
          en: 'press here to show all my discussions',
          tu: ''
        },
        note_that_min_number_of_points_for_this_package_is: {
          ar: 'انتبة اقل عدد نقاط مسموح به لهذه الباقة هو ',
          en: 'note that min number of points for this package is ',
          tu: ''
        },
        and_max_number_of_points_for_this_package_is: {
          ar: 'واقصي عدد للنقاط هو ',
          en: 'And max number of points is '
        },
        no_points: {
          ar: 'عدد النقاط ',
          en: 'number of points ',
          tu: ''
        },
        buy: {
          ar: 'شراء',
          en: 'buy',
          tu: ''
        },
        no_points_isnt_correct: {
          ar: 'عدد النقاط غير صحيح',
          en: 'number of points isnt correct'
        },
        if_currency_is_default_or_not: {
          ar: 'اختر هل العملة هي العملة الافتراضية ام لا',
          en: 'select if this currency is default or not'
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ask_your_neighbors > p[data-v-182e8380] {\n  color: #c9cacf;\n}\n.questions_types[data-v-182e8380] {\n  border-bottom: 1px solid #dddddd;\n  padding-bottom: 5px;\n}\n.questions_types li[data-v-182e8380] {\n  position: relative;\n  transition: 0.5s all;\n}\n.questions_types li a[data-v-182e8380] {\n  color: #616161;\n}\n.questions_types li[data-v-182e8380]::before {\n  content: \"\";\n  width: 0px;\n  height: 2px;\n  background-color: #ff6a15;\n  position: absolute;\n  bottom: -6.5px;\n  transition: 0.5s all;\n}\n.questions_types li[data-v-182e8380]:hover::before {\n  width: 100%;\n}\n.questions_types li:hover a[data-v-182e8380] {\n  color: #ff6a15;\n}\n.questions_types li.active a[data-v-182e8380] {\n  color: #ff6a15;\n}\n.questions_types li.active[data-v-182e8380]::before {\n  width: 100%;\n}\n.questions .question[data-v-182e8380] {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 10px;\n}\n.questions .question p[data-v-182e8380] {\n  color: #616161;\n  margin-bottom: 5px;\n}\n.pages[data-v-182e8380] {\n  margin: 25px auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.pages a[data-v-182e8380] {\n  margin-left: 8px;\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  display: inline-flex;\n  border: 1px solid #ddd;\n  justify-content: center;\n  align-items: center;\n  transition: 0.5s all;\n}\n.pages a[data-v-182e8380]:hover {\n  background-color: #ff6a15;\n  color: white;\n}\n.pages a.active[data-v-182e8380] {\n  background-color: #ff6a15;\n  color: white;\n}", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".ar .navbar-brand[data-v-485090b2] {\n  margin-left: 5%;\n}\n.ar .dropdown-menu img[data-v-485090b2] {\n  margin-left: 5px;\n}\n.ar .user_profile span[data-v-485090b2] {\n  left: 0px;\n}\n.ar .nav-link > span[data-v-485090b2]:first-of-type {\n  margin-left: 7px;\n}\n.ar .auth-form .user_image img[data-v-485090b2] {\n  margin-left: 10px;\n}\n.ar .auth-form .user_image div > p[data-v-485090b2]:first-of-type {\n  font-size: 14px;\n}\n.ar .auth-form .list ul li p span[data-v-485090b2]:first-of-type {\n  margin-left: 5px;\n}\n.en .navbar-brand[data-v-485090b2] {\n  margin-right: 5%;\n}\n.en .user_profile span[data-v-485090b2] {\n  right: 0px;\n}\n.en .dropdown-menu[data-v-485090b2] {\n  right: 0px;\n  left: unset;\n}\n.en .dropdown-menu img[data-v-485090b2] {\n  margin-right: 5px;\n}\n.en .nav-link > span[data-v-485090b2]:first-of-type {\n  margin-right: 7px;\n}\n.en .auth-form .user_image img[data-v-485090b2] {\n  margin-right: 10px;\n}\n.en .auth-form .list ul li p span[data-v-485090b2]:first-of-type {\n  margin-right: 5px;\n}\nnav[data-v-485090b2] {\n  padding: 0px;\n  box-shadow: 1px 1px 1px 1px #ddd;\n  background-color: white !important;\n}\nnav .navbar-brand img[data-v-485090b2] {\n  height: 50px;\n}\nnav .nav-item > a[data-v-485090b2] {\n  color: #03071E !important;\n}\nnav .navbar-brand[data-v-485090b2] {\n  margin: 0px;\n  font-size: 30px;\n  font-weight: bold;\n  color: #ff6a15;\n  padding: 0px;\n  position: relative;\n  top: -3px;\n}\nnav .navbar-brand[data-v-485090b2]:hover {\n  color: #007e72;\n}\nnav .nav-item[data-v-485090b2] {\n  cursor: pointer;\n}\nnav .dropdown-menu[data-v-485090b2] {\n  padding: 10px;\n}\nnav .dropdown-menu a[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  color: #03071E;\n}\nnav .dropdown-menu a img[data-v-485090b2] {\n  height: 30px;\n}\nnav .dropdown-menu a span:first-of-type i[data-v-485090b2] {\n  color: #ff6a15;\n}\nnav .user-info-auth[data-v-485090b2] {\n  max-width: 320px;\n  width: 320px;\n  overflow: hidden;\n}\nnav .user-info-auth .sign-form h2[data-v-485090b2] {\n  margin-bottom: 10px;\n  color: #ff6a15;\n  font-weight: bold;\n}\nnav .user-info-auth .sign-form p[data-v-485090b2] {\n  color: #c9cacf;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .sign-form div[data-v-485090b2]:nth-of-type(2) {\n  background-color: #ff6a15;\n  padding: 15px;\n}\nnav .user-info-auth .sign-form div:nth-of-type(2) p[data-v-485090b2] {\n  color: white;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2] {\n  display: block;\n  text-align: center;\n  color: #ff6a15;\n  padding: 8px;\n  border-radius: 24px;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2]:first-of-type {\n  color: white;\n  background-color: #ff6a15;\n}\nnav .user-info-auth .sign-form a[data-v-485090b2]:nth-of-type(2) {\n  background-color: #e4e5ea40;\n}\nnav .user-info-auth .auth-form .user_image[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n}\nnav .user-info-auth .auth-form .user_image img[data-v-485090b2] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nnav .user-info-auth .auth-form .user_image div p[data-v-485090b2]:last-of-type {\n  color: #c9cacf;\n  margin-top: 5px;\n}\nnav .user-info-auth .auth-form .list > p[data-v-485090b2] {\n  padding: 0px 10px;\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\nnav .user-info-auth .auth-form .list ul li[data-v-485090b2] {\n  padding: 3px 10px;\n}\nnav .user-info-auth .auth-form .list ul li p span[data-v-485090b2] {\n  font-size: 11px;\n}\nnav .user-info-auth .auth-form .list ul li p span[data-v-485090b2]:last-of-type {\n  font-weight: bold;\n}\nnav .user-info-auth .auth-form .list ul li p a[data-v-485090b2] {\n  margin-bottom: 0px;\n  color: #03071E;\n}\nnav .user-info-auth .auth-form .list ul li > span[data-v-485090b2] {\n  color: white;\n  padding: 0px 5px;\n  border-radius: 3px;\n  background-color: #ff6a15;\n}\n.nav-link[data-v-485090b2] {\n  color: #03071E;\n}\n.nav-link .box[data-v-485090b2] {\n  position: absolute;\n  top: 0px;\n  display: none;\n}\n.nav-link p[data-v-485090b2] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.nav-link p span[data-v-485090b2]:nth-of-type(2) {\n  margin-right: 7px;\n  margin-left: 7px;\n}\n.dropdown-toggle span[data-v-485090b2]:nth-of-type(2) {\n  margin-right: 7px;\n  margin-left: 7px;\n}\n.dropdown-toggle .user_profile[data-v-485090b2] {\n  text-align: center;\n}\n.dropdown-toggle .user_profile img[data-v-485090b2] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1px solid #eee;\n}\n.dropdown-toggle .user_profile span[data-v-485090b2] {\n  background-color: #ff6a15;\n  color: white;\n  font-size: 10px;\n  display: block;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  width: 10px;\n  height: 10px;\n  border-radius: 50px;\n  padding: 0;\n}\n.dropdown-toggle[data-v-485090b2]::after {\n  display: none;\n}\n@media (min-width: 992px) {\nnav ul:first-of-type .nav-item:nth-of-type(2) div[data-v-485090b2],\nnav ul:first-of-type .nav-item:nth-of-type(3) div[data-v-485090b2] {\n    width: 203px;\n}\n}\n@media (max-width: 992px) {\n.navbar-collapse[data-v-485090b2] {\n    flex-wrap: wrap;\n}\n.navbar-collapse .navbar-nav[data-v-485090b2] {\n    width: 100%;\n}\n.user-info-auth[data-v-485090b2] {\n    width: 320px;\n}\nul.d-flex[data-v-485090b2] {\n    flex-direction: column;\n}\n.ar nav .dropdown-menu[data-v-485090b2] {\n    right: 0px;\n}\n.ar .user-info-auth[data-v-485090b2] {\n    right: 0px;\n}\n.ar .nav-link[data-v-485090b2] {\n    padding-right: 0px;\n}\n.en nav .dropdown-menu[data-v-485090b2] {\n    left: 0px;\n}\n.en .user-info-auth[data-v-485090b2] {\n    left: 0px;\n}\n.en .nav-link[data-v-485090b2] {\n    padding-left: 0px;\n}\n}\n@media (max-width: 767px) {\n.auth-form[data-v-485090b2], .sign-form[data-v-485090b2] {\n    max-height: 400px;\n    overflow: auto;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".sale_rent p[data-v-010ef362] {\n  display: flex;\n  margin-bottom: 20px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.sale_rent p span[data-v-010ef362]:first-of-type {\n  color: #ff6a15;\n}\n.sale_rent p span[data-v-010ef362]:not(:first-of-type) {\n  margin-right: 10px;\n  color: #616161;\n}\n.sale_rent p span[data-v-010ef362]:nth-of-type(4), .sale_rent p span[data-v-010ef362]:nth-of-type(5) {\n  padding: 6px 25px;\n  border-radius: 25px;\n  cursor: pointer;\n  transition: 0.5s all;\n}\n.sale_rent p span[data-v-010ef362]:nth-of-type(4):hover, .sale_rent p span[data-v-010ef362]:nth-of-type(5):hover {\n  background-color: #ff6a15;\n  color: white;\n}\n.sale_rent p span.active[data-v-010ef362] {\n  background-color: #ff6a15;\n  color: white;\n}\n.sale_rent .container > div[data-v-010ef362] {\n  display: none;\n  transition: 0.5s all;\n}\n.sale_rent .container > div a span[data-v-010ef362] {\n  color: #616161;\n  margin-left: 2px;\n}\n.sale_rent .container > div[data-v-010ef362]:first-of-type {\n  display: block;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/js/Pages/questions/ask_neighbors.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/questions/ask_neighbors.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ask_neighbors_vue_vue_type_template_id_182e8380_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true& */ "./resources/js/Pages/questions/ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true&");
/* harmony import */ var _ask_neighbors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ask_neighbors.vue?vue&type=script&lang=js& */ "./resources/js/Pages/questions/ask_neighbors.vue?vue&type=script&lang=js&");
/* harmony import */ var _ask_neighbors_vue_vue_type_style_index_0_id_182e8380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true& */ "./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ask_neighbors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ask_neighbors_vue_vue_type_template_id_182e8380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ask_neighbors_vue_vue_type_template_id_182e8380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "182e8380",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/questions/ask_neighbors.vue"
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

/***/ "./resources/js/components/SaleRentComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/SaleRentComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SaleRentComponent_vue_vue_type_template_id_010ef362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true& */ "./resources/js/components/SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true&");
/* harmony import */ var _SaleRentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleRentComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SaleRentComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _SaleRentComponent_vue_vue_type_style_index_0_id_010ef362_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true& */ "./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SaleRentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SaleRentComponent_vue_vue_type_template_id_010ef362_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SaleRentComponent_vue_vue_type_template_id_010ef362_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "010ef362",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SaleRentComponent.vue"
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

/***/ "./resources/js/Pages/questions/ask_neighbors.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/questions/ask_neighbors.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ask_neighbors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/SaleRentComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SaleRentComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SaleRentComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Pages/questions/ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/questions/ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_template_id_182e8380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_template_id_182e8380_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_template_id_182e8380_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true&");


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

/***/ "./resources/js/components/SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_template_id_010ef362_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_template_id_010ef362_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_template_id_010ef362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true&");


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

/***/ "./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_style_index_0_id_182e8380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_style_index_0_id_182e8380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_style_index_0_id_182e8380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_style_index_0_id_182e8380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ask_neighbors_vue_vue_type_style_index_0_id_182e8380_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
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

/***/ "./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_style_index_0_id_010ef362_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_style_index_0_id_010ef362_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_style_index_0_id_010ef362_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_style_index_0_id_010ef362_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRentComponent_vue_vue_type_style_index_0_id_010ef362_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=template&id=182e8380&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ask_neighbors" },
    [
      _c("navbar-component"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mb-4 mt-4" },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                class:
                  _vm.$page.props.user == null
                    ? "col-md-12"
                    : "col-md-6" + " col-12",
              },
              [
                _c(
                  "h2",
                  { staticClass: "d-flex align-items-center mb-4 main-title" },
                  [
                    _vm.$page.props.lang == "ar"
                      ? _c("span", [
                          _c("i", { staticClass: "ri-arrow-left-s-fill" }),
                        ])
                      : _c("span", [
                          _c("i", { staticClass: "ri-arrow-right-s-fill" }),
                        ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(_vm._s(_vm.keywords.the_most_discussed_questions)),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("form", { staticClass: "mb-2" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "city_id" },
                            on: { change: _vm.update_area },
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v(_vm._s(_vm.keywords.city)),
                            ]),
                            _vm._v(" "),
                            _vm._l(
                              _vm.map_data("city_id"),
                              function (c, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: {
                                      value: c["id"],
                                      selected:
                                        _vm.requested_data != null &&
                                        _vm.requested_data.hasOwnProperty(
                                          "city_id"
                                        ) &&
                                        _vm.requested_data["city_id"] ==
                                          c["id"],
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(
                                          c[_vm.$page.props.lang + "_name"]
                                        ) +
                                        "\n                                    "
                                    ),
                                  ]
                                )
                              }
                            ),
                          ],
                          2
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "area_id" },
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v(_vm._s(_vm.keywords.neighbour)),
                            ]),
                            _vm._v(" "),
                            _vm._l(
                              _vm.map_data("area_id"),
                              function (c, index) {
                                return _c(
                                  "option",
                                  {
                                    key: index,
                                    domProps: {
                                      value: c["id"],
                                      selected:
                                        _vm.requested_data != null &&
                                        _vm.requested_data.hasOwnProperty(
                                          "area_id"
                                        ) &&
                                        _vm.requested_data["area_id"] ==
                                          c["id"],
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(c["name"]) +
                                        "\n                                    "
                                    ),
                                  ]
                                )
                              }
                            ),
                          ],
                          2
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            staticClass: "form-control",
                            attrs: { name: "category_id" },
                          },
                          [
                            _c("option", { attrs: { value: "all" } }, [
                              _vm._v(_vm._s(_vm.keywords.all_categories)),
                            ]),
                            _vm._v(" "),
                            _vm._l(_vm.categories, function (c, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: {
                                    value: c["id"],
                                    selected:
                                      _vm.requested_data != null &&
                                      _vm.requested_data.hasOwnProperty(
                                        "category_id"
                                      ) &&
                                      _vm.requested_data["category_id"] ==
                                        c["id"],
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                        " +
                                      _vm._s(c["name"]) +
                                      "\n                                    "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                      _c("input", {
                        staticClass: "btn btn-primary w-100",
                        attrs: { type: "submit" },
                        domProps: { value: _vm.switchWord("filter") },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "questions_types d-flex align-items-center justify-content-between",
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "active" },
                      [
                        _c(
                          "inertia-link",
                          {
                            attrs: { href: "", value_type: "has_answers" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.change_question_type.apply(
                                  null,
                                  arguments
                                )
                              },
                            },
                          },
                          [_vm._v(_vm._s(_vm.keywords.the_most_discussed))]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "inertia-link",
                          {
                            attrs: { href: "", value_type: "has_not_answers" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.change_question_type.apply(
                                  null,
                                  arguments
                                )
                              },
                            },
                          },
                          [_vm._v(_vm._s(_vm.keywords.unanswered))]
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "inertia-link",
                          {
                            attrs: { href: "", value_type: "all" },
                            on: {
                              click: function ($event) {
                                $event.preventDefault()
                                return _vm.change_question_type.apply(
                                  null,
                                  arguments
                                )
                              },
                            },
                          },
                          [_vm._v(_vm._s(_vm.keywords.all_questions))]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "questions" },
                  [
                    _vm._l(_vm.questions_info_data.data, function (i, index) {
                      return _c(
                        "div",
                        { key: index, staticClass: "question p-2" },
                        [
                          _c("p", [_vm._v(_vm._s(i["question"]))]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between",
                            },
                            [
                              _c(
                                "p",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href:
                                          "/ask-neighbours?question_type=all&area_id=" +
                                          i["area"]["id"],
                                      },
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            i["area"][
                                              _vm.$page.props.lang + "_name"
                                            ]
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", [_vm._v(_vm._s(_vm.keywords.in))]),
                                  _vm._v(" "),
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href:
                                          "/ask-neighbours?question_type=all&city_id=" +
                                          i["area"]["city"]["id"],
                                      },
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(
                                            i["area"]["city"][
                                              _vm.$page.props.lang + "_name"
                                            ]
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                [
                                  _c(
                                    "inertia-link",
                                    {
                                      attrs: {
                                        href:
                                          "/ask-neighbours/" +
                                          i["id"] +
                                          "/answers",
                                      },
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(i["answers_count"]) +
                                            " " +
                                            _vm._s(_vm.keywords.answers)
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "pages text-center mt-4 mb-2" },
                      _vm._l(_vm.links, function (i, index) {
                        return _c(
                          "inertia-link",
                          {
                            key: index,
                            class:
                              index + 1 == _vm.questions_info_data.current_page
                                ? "active"
                                : "",
                            attrs: {
                              href: _vm.current_url + "&page=" + (index + 1),
                            },
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(index + 1) +
                                "\n                        "
                            ),
                          ]
                        )
                      }),
                      1
                    ),
                  ],
                  2
                ),
              ]
            ),
            _vm._v(" "),
            _vm.$page.props.user != null
              ? _c(
                  "div",
                  { staticClass: "col-md-6 col-12 ask_your_neighbors" },
                  [
                    _c(
                      "h2",
                      {
                        staticClass:
                          "d-flex align-items-center mb-2 main-title",
                      },
                      [
                        _vm.$page.props.lang == "ar"
                          ? _c("span", [
                              _c("i", { staticClass: "ri-arrow-left-s-fill" }),
                            ])
                          : _c("span", [
                              _c("i", { staticClass: "ri-arrow-right-s-fill" }),
                            ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.keywords.ask_your_neighbors)),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-2" }, [
                      _vm._v(
                        _vm._s(
                          _vm.keywords
                            .write_your_question_and_get_answers_from_the_community
                        )
                      ),
                    ]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: { method: "post" },
                        on: {
                          submit: function ($event) {
                            $event.preventDefault()
                            return _vm.add_question.apply(null, arguments)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "mb-4 row" }, [
                          _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: { name: "city_id", required: "" },
                                  on: { change: _vm.update_area },
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v(_vm._s(_vm.keywords.city)),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.map_data("city_id"),
                                    function (c, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: c["id"] },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                c[
                                                  _vm.$page.props.lang + "_name"
                                                ]
                                              ) +
                                              "\n                                    "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: { name: "area_id", required: "" },
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v(_vm._s(_vm.keywords.neighbour)),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(
                                    _vm.map_data("area_id"),
                                    function (c, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: c["id"] },
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(c["name"]) +
                                              "\n                                    "
                                          ),
                                        ]
                                      )
                                    }
                                  ),
                                ],
                                2
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-4 col-sm-6" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: { name: "category_id" },
                                },
                                [
                                  _c("option", { attrs: { value: "" } }, [
                                    _vm._v(_vm._s(_vm.keywords.all_categories)),
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.categories, function (c, index) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: c["id"] },
                                      },
                                      [
                                        _vm._v(
                                          "\n                                        " +
                                            _vm._s(c["name"]) +
                                            "\n                                    "
                                        ),
                                      ]
                                    )
                                  }),
                                ],
                                2
                              ),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-12 mt-2" }, [
                            _c("textarea", {
                              staticClass: "form-control mb-2",
                              attrs: {
                                name: "question",
                                placeholder:
                                  _vm.keywords
                                    .ask_a_question_and_get_answers_from_neighbors,
                              },
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" },
                              domProps: { value: _vm.keywords.add_question },
                            }),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c(
                          "p",
                          [
                            _c(
                              "inertia-link",
                              {
                                attrs: {
                                  href:
                                    "/ask-neighbours?question_type=all&user_id=" +
                                    _vm.$page.props.user.id,
                                },
                              },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(
                                      _vm.switchWord(
                                        "press_here_to_show_my_discussions"
                                      )
                                    ) +
                                    "\n                        "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]
                )
              : _vm._e(),
          ]),
          _vm._v(" "),
          _c("sale-rent-component", {
            attrs: { data: _vm.cities_listings, country: _vm.country },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c("footer-component"),
    ],
    1
  )
}
var staticRenderFns = []
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
                  _vm._l(_vm.get_parent_categories_data, function (cat, index) {
                    return _c(
                      "inertia-link",
                      {
                        key: index,
                        attrs: {
                          href: "/search-page-filter?cat_id=" + cat["id"],
                          title: cat["info"],
                        },
                      },
                      [
                        _c("img", {
                          attrs: { src: "/images/categories/" + cat["image"] },
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(cat["name"]))]),
                      ]
                    )
                  }),
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
                     false
                      ? 0
                      : _vm._e(),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "/neighborhood" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-community-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("building_prices"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("inertia-link", { attrs: { href: "/ask-neighbours" } }, [
                      _c("span", [
                        _c("i", { staticClass: "ri-message-3-line" }),
                      ]),
                      _vm._v(" "),
                      _c("span", [
                        _vm._v(_vm._s(_vm.switchWord("ask_people_area"))),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "inertia-link",
                      { attrs: { href: "/credit/charge/package" } },
                      [
                        _c("span", [
                          _c("i", { staticClass: "ri-vip-diamond-line" }),
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v(_vm._s(_vm.switchWord("packages"))),
                        ]),
                      ]
                    ),
                    _vm._v(" "),
                     false
                      ? 0
                      : _vm._e(),
                    _vm._v(" "),
                     false
                      ? 0
                      : _vm._e(),
                    _vm._v(" "),
                     false
                      ? 0
                      : _vm._e(),
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
                      attrs: { href: "/listing/initialize" },
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
              _vm.$page.props.user != null && _vm.$page.props.user.role_id == 5
                ? _c(
                    "li",
                    { staticClass: "nav-item d-flex align-items-center" },
                    [
                      _c(
                        "inertia-link",
                        {
                          staticClass: "nav-link",
                          attrs: { href: "/dashboard" },
                        },
                        [_vm._v(_vm._s(_vm.switchWord("dashboard")))]
                      ),
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item d-flex align-items-center" },
                [
                  _c(
                    "inertia-link",
                    {
                      staticClass: "nav-link",
                      attrs: { href: "/ads?type=rent" },
                    },
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
                       false
                        ? 0
                        : _vm._e(),
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
                      role: "button",
                      "data-toggle": "dropdown",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "user_profile position-relative" },
                      [
                        _c("img", {
                          attrs: { src: "/images/icons/profile.svg" },
                        }),
                        _vm._v(" "),
                        _vm.$page.props.numberofnotifications > 0
                          ? _c("span")
                          : _vm._e(),
                      ]
                    ),
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
                                  _c("p", [_vm._v(_vm._s(_vm.user.email))]),
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
                                            _vm._s(_vm.switchWord("Profile")) +
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: "/profile/favourites",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord(
                                                        "my_favourite"
                                                      )
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm.$page.props.fav > 0
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(_vm.$page.props.fav) +
                                                "\n                                            "
                                            ),
                                          ])
                                        : _vm._e(),
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: "/profile/notes",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord("my_notes")
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm.$page.props.notes > 0
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(_vm.$page.props.notes) +
                                                "\n                                            "
                                            ),
                                          ])
                                        : _vm._e(),
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: "/notifications",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord(
                                                        "notifications"
                                                      )
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      _vm._v(" "),
                                      _vm.$page.props.numberofnotifications > 0
                                        ? _c("span", [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.$page.props
                                                    .numberofnotifications
                                                ) +
                                                "\n                                            "
                                            ),
                                          ])
                                        : _vm._e(),
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: "/profile/dashboard",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord(
                                                        "my_listings"
                                                      )
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                      _vm._v(" "),
                                       false
                                        ? 0
                                        : _vm._e(),
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: "/merchant/balance",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord(
                                                        "my_balance"
                                                      )
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              {
                                                attrs: {
                                                  href: "/credit/charge/package",
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord(
                                                        "charge_credit"
                                                      )
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
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
                                        _c(
                                          "span",
                                          [
                                            _c(
                                              "inertia-link",
                                              { attrs: { href: "/logout" } },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(
                                                      _vm.switchWord("logout")
                                                    ) +
                                                    "\n                                                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=template&id=010ef362&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sale_rent" }, [
    _c("div", { staticClass: "container" }, [
      _c("p", [
        _vm.$page.props.lang == "ar"
          ? _c("span", [_c("i", { staticClass: "ri-arrow-left-s-fill" })])
          : _c("span", [_c("i", { staticClass: "ri-arrow-left-s-fill" })]),
        _vm._v(" "),
        _c("span", [
          _vm._v(
            "\n                " +
              _vm._s(_vm.switchWord("search_inside_the_cities")) +
              "\n                "
          ),
          _vm.country != ""
            ? _c("strong", [
                _vm._v(
                  " " +
                    _vm._s(_vm.switchWord("in")) +
                    " " +
                    _vm._s(_vm.country["name"])
                ),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "d-block w-100 mb-2" }),
        _vm._v(" "),
        _c("span", { staticClass: "active", on: { click: _vm.switch_city } }, [
          _vm._v(_vm._s(_vm.switchWord("rent"))),
        ]),
        _vm._v(" "),
        _c("span", { on: { click: _vm.switch_city } }, [
          _vm._v(_vm._s(_vm.switchWord("sale"))),
        ]),
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.rent_data, function (i, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "col-lg-3 col-md-4 col-sm-6 col-6 mb-2",
              },
              [
                _c("inertia-link", { attrs: { href: "" } }, [
                  _c("span", [_vm._v(_vm._s(i["city_name"]))]),
                  _vm._v(" "),
                  _c("span", [_vm._v("(" + _vm._s(i["total_listings"]) + ")")]),
                ]),
              ],
              1
            )
          }),
          0
        ),
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.sale_data, function (i, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "col-lg-3 col-md-4 col-sm-6 col-6 mb-2",
              },
              [
                _c("inertia-link", { attrs: { href: "" } }, [
                  _c("span", [_vm._v(_vm._s(i["city_name"]))]),
                  _vm._v(" "),
                  _c("span", [_vm._v("(" + _vm._s(i["total_listings"]) + ")")]),
                ]),
              ],
              1
            )
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = []
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

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/questions/ask_neighbors.vue?vue&type=style&index=0&id=182e8380&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1150424b", content, false, {});
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SaleRentComponent.vue?vue&type=style&index=0&id=010ef362&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("73c32084", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

}]);