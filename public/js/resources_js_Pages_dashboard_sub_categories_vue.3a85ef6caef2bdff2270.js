(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_Pages_dashboard_sub_categories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/sub_categories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/sub_categories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/dashboard/SideNavbarComponent */ "./resources/js/components/dashboard/SideNavbarComponent.vue");
/* harmony import */ var _components_DeleteItemComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/DeleteItemComponent */ "./resources/js/components/DeleteItemComponent.vue");
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "sub_categories",
  props: ['keywords', 'handling_data'],
  mixins: [_components_DeleteItemComponent__WEBPACK_IMPORTED_MODULE_1__.default, _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_2__.default],
  data: function data() {
    return {
      modal_data: [],
      question_selection: null
    };
  },
  methods: {
    add_another_question: function add_another_question() {
      var output = '';

      var _iterator = _createForOfIteratorHelper($('.old_questions .inner >  div:first-of-type select option')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          output += '<option value="' + option.value + '">' + option.textContent + '</option>';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var select = '<div class="form-group"><select name="questions[]" class="form-control" required>' + output + '</select><span ><i class="ri-close-line delete-icon-input"></i></span></div>';
      $(event.target).prev().append(select);
    }
  },
  created: function created() {
    this.modal_data = Object.keys(this.handling_data['data_model']);
    this.modal_data.pop();
  },
  components: {
    SideNavbarComponent: _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteItemComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteItemComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  name: "DeleteItemComponent",
  methods: {
    deleteRecord: function deleteRecord(id) {
      var _this = this;

      Swal.fire({
        title: this.switchWord('are_you_sure_about_delete'),
        text: this.switchWord('in_case_you_delete_you_cant_retrieve_it'),
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#ff6a15',
        cancelButtonColor: '#aaa',
        confirmButtonText: this.switchWord('yes_iam_sure'),
        cancelButtonText: this.switchWord('cancel')
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire(_this.switchWord('deleted_done'), _this.switchWord('deleted_done_successfully'), 'success');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/SwitchLangWord */ "./resources/js/mixin/SwitchLangWord.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SideNavbarComponent",
  mixins: [_mixin_SwitchLangWord__WEBPACK_IMPORTED_MODULE_0__.default],
  mounted: function mounted() {
    var active_li = document.URL.split('/')[document.URL.split('/').length - 1];
    $('ul').find('li[custom="' + active_li + '"]').addClass('active');
  },
  methods: {
    toggleSideNav: function toggleSideNav() {
      $(event.target).parent().parent().toggleClass('icons_only');

      if ($(event.target).parent().parent().hasClass('icons_only')) {
        $('.dashboard .content').css('width', $(document).innerWidth() - 50);
      } else {
        $('.dashboard .content').css('width', $(document).innerWidth() - 200);
      }
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
        search_inside_the_cities_of_egypt: {
          ar: 'عقارات في مدن مصر',
          en: 'Search inside the cities of Egypt',
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
        reports: {
          ar: 'التقارير',
          en: 'Reports',
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
        upload_image: {
          ar: 'أرفع صورة',
          en: 'upload image',
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
        question_type_checkbox: {
          ar: 'نعم او لا ',
          en: 'yes or no',
          tu: ''
        },
        question_required: {
          ar: 'نوع حقل الادخال من حيث اجباري ام لا',
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".ar .orange_class[data-v-218a8ca0]:hover, .ar .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .ar li[data-v-218a8ca0]:hover {\n  padding-right: 10px;\n}\n.ar .orange_class[data-v-218a8ca0]::before, .ar .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .ar li[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.ar .side-bar-nav[data-v-218a8ca0] {\n  right: 0px;\n}\n.ar .side-bar-nav > span[data-v-218a8ca0] {\n  right: 5px;\n}\n.ar .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-left: 10px;\n}\n.ar .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.en .orange_class[data-v-218a8ca0]:hover, .en .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .en li[data-v-218a8ca0]:hover {\n  padding-left: 10px;\n}\n.en .orange_class[data-v-218a8ca0]::before, .en .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .en li[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.en .side-bar-nav[data-v-218a8ca0] {\n  left: 0px;\n}\n.en .side-bar-nav > span[data-v-218a8ca0] {\n  left: 5px;\n}\n.en .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-right: 10px;\n}\n.en .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.orange_class[data-v-218a8ca0]::before, .side-bar-nav ul li[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  transition: 0.5s all;\n  background-color: #ff6a15;\n  width: 4px;\n}\n.orange_class[data-v-218a8ca0]:hover::before, .side-bar-nav ul li[data-v-218a8ca0]:hover::before {\n  height: 100%;\n}\n.orange_class:hover span[data-v-218a8ca0], .side-bar-nav ul li:hover span[data-v-218a8ca0] {\n  color: #ff6a15;\n}\n.side-bar-nav[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: fixed;\n  background-color: #eeeeee38;\n  width: 200px;\n  height: 100%;\n  padding: 0px !important;\n}\n.side-bar-nav > span[data-v-218a8ca0] {\n  position: absolute;\n  top: 14px;\n  color: #03071E;\n}\n.side-bar-nav .logo img[data-v-218a8ca0] {\n  padding-top: 10px;\n  width: 115px;\n  display: block;\n  margin: auto;\n}\n.side-bar-nav ul[data-v-218a8ca0] {\n  padding-top: 50px;\n}\n.side-bar-nav ul li[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: relative;\n}\n.side-bar-nav ul li a[data-v-218a8ca0] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n.side-bar-nav ul li a span[data-v-218a8ca0] {\n  color: #03071E;\n}\n.side-bar-nav ul li.active span[data-v-218a8ca0] {\n  color: #ff6a15;\n}\n.side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  transition: 0.5s all;\n  background-color: #ff6a15;\n  width: 4px;\n  height: 100%;\n}\n.side-bar-nav ul li[data-v-218a8ca0]:not(:last-of-type) {\n  border-bottom: 1px solid #eeeeee;\n}\n.side-bar-nav.icons_only[data-v-218a8ca0] {\n  width: 50px;\n}\n.side-bar-nav.icons_only > span[data-v-218a8ca0] {\n  right: 10px;\n}\n.side-bar-nav.icons_only .logo img[data-v-218a8ca0] {\n  display: none;\n}\n.side-bar-nav.icons_only ul li a[data-v-218a8ca0] {\n  align-items: center;\n  justify-content: center;\n}\n.side-bar-nav.icons_only ul li a span[data-v-218a8ca0]:not(:first-of-type) {\n  display: none;\n}", ""]);
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

/***/ "./resources/js/Pages/dashboard/sub_categories.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Pages/dashboard/sub_categories.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sub_categories_vue_vue_type_template_id_b4233042_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub_categories.vue?vue&type=template&id=b4233042&scoped=true& */ "./resources/js/Pages/dashboard/sub_categories.vue?vue&type=template&id=b4233042&scoped=true&");
/* harmony import */ var _sub_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub_categories.vue?vue&type=script&lang=js& */ "./resources/js/Pages/dashboard/sub_categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _sub_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _sub_categories_vue_vue_type_template_id_b4233042_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _sub_categories_vue_vue_type_template_id_b4233042_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b4233042",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/dashboard/sub_categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DeleteItemComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/DeleteItemComponent.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteItemComponent_vue_vue_type_template_id_418ca5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true& */ "./resources/js/components/DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true&");
/* harmony import */ var _DeleteItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteItemComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/DeleteItemComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DeleteItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DeleteItemComponent_vue_vue_type_template_id_418ca5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeleteItemComponent_vue_vue_type_template_id_418ca5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "418ca5a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DeleteItemComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&");
/* harmony import */ var _SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "218a8ca0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/SideNavbarComponent.vue"
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

/***/ "./resources/js/Pages/dashboard/sub_categories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/sub_categories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sub_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sub_categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/sub_categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sub_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/DeleteItemComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/DeleteItemComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteItemComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteItemComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteItemComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Pages/dashboard/sub_categories.vue?vue&type=template&id=b4233042&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/sub_categories.vue?vue&type=template&id=b4233042&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sub_categories_vue_vue_type_template_id_b4233042_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sub_categories_vue_vue_type_template_id_b4233042_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sub_categories_vue_vue_type_template_id_b4233042_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sub_categories.vue?vue&type=template&id=b4233042&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/sub_categories.vue?vue&type=template&id=b4233042&scoped=true&");


/***/ }),

/***/ "./resources/js/components/DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteItemComponent_vue_vue_type_template_id_418ca5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteItemComponent_vue_vue_type_template_id_418ca5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteItemComponent_vue_vue_type_template_id_418ca5a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true&");


/***/ }),

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_template_id_218a8ca0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&");


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

/***/ "./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNavbarComponent_vue_vue_type_style_index_0_id_218a8ca0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/sub_categories.vue?vue&type=template&id=b4233042&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/sub_categories.vue?vue&type=template&id=b4233042&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "dashboard" },
    [
      _c("side-navbar-component"),
      _vm._v(" "),
      _c("div", { staticClass: "content users table-data-page" }, [
        _c("div", { staticClass: "container mt-4 mb-4" }, [
          _c(
            "p",
            {
              staticClass:
                "d-flex mb-3 align-items-center justify-content-between main-title-toggle",
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.keywords.main_title))]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn black-btn btn-outline-primary",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#update_box",
                  },
                },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.switchWord("add_new_item")) +
                      "\n                "
                  ),
                ]
              ),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "overflow-auto" }, [
            _c(
              "table",
              {
                staticClass:
                  "myTable table text-center table-bordered table-striped table-hover",
              },
              [
                _c("thead", [
                  _c(
                    "tr",
                    _vm._l(_vm.handling_data["table_head_keys"], function (i) {
                      return _c("td", { key: i }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(i) +
                            "\n                        "
                        ),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(15, function (i) {
                    return _c("tr", { key: i }, [
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("td", [_vm._v("العقارات")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Listings")]),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c("td", [_vm._v("وصف القسم")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("category info")]),
                      _vm._v(" "),
                      _c("td"),
                      _vm._v(" "),
                      _c(
                        "td",
                        _vm._l(6, function (i) {
                          return _c(
                            "inertia-link",
                            {
                              key: i,
                              staticClass: "table-item-span",
                              attrs: { href: "#" },
                            },
                            [
                              _vm._v(
                                "\n                                اسم العقار\n                                "
                              ),
                              _c("span", [
                                _c("i", {
                                  staticClass: "ri-close-line",
                                  on: {
                                    click: function ($event) {
                                      return _vm.deleteRecord(2)
                                    },
                                  },
                                }),
                              ]),
                            ]
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "actions" }, [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c("span", [
                          _c("i", {
                            staticClass: "ri-close-line",
                            on: {
                              click: function ($event) {
                                return _vm.deleteRecord(10)
                              },
                            },
                          }),
                        ]),
                      ]),
                    ])
                  }),
                  0
                ),
              ]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "update_box",
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
                      attrs: { id: "update_box_data" },
                    },
                    [_vm._v(_vm._s(_vm.switchWord("add_new_item")))]
                  ),
                  _vm._v(" "),
                  _vm._m(2),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "form",
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm._l(_vm.modal_data, function (input) {
                        return _c(
                          "div",
                          { key: input, staticClass: "form-group" },
                          [
                            _c("label", [
                              _vm._v(
                                _vm._s(_vm.handling_data["data_model"][input])
                              ),
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control",
                              attrs: { name: input, required: "" },
                            }),
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "form-group d-flex align-items-center justify-content-between radio-buttons",
                        },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question_selection,
                                    expression: "question_selection",
                                  },
                                ],
                                attrs: {
                                  type: "radio",
                                  name: "question_selection",
                                  value: "old",
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question_selection,
                                    "old"
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    _vm.question_selection = "old"
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  _vm._s(_vm.keywords.select_from_questions)
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between",
                            },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question_selection,
                                    expression: "question_selection",
                                  },
                                ],
                                attrs: {
                                  type: "radio",
                                  name: "question_selection",
                                  value: "new",
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question_selection,
                                    "new"
                                  ),
                                },
                                on: {
                                  change: function ($event) {
                                    _vm.question_selection = "new"
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(_vm.keywords.add_new_question)),
                              ]),
                            ]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _vm.question_selection == "old"
                        ? _c("div", { staticClass: "old_questions mb-2" }, [
                            _c("div", { staticClass: "inner" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "select",
                                  {
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "questions[]",
                                      required: "",
                                    },
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v(
                                        _vm._s(_vm.keywords.select_question)
                                      ),
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(6, function (i, index) {
                                      return _c(
                                        "option",
                                        { key: index, domProps: { value: i } },
                                        [
                                          _vm._v(
                                            "\n                                            " +
                                              _vm._s(i) +
                                              "\n                                        "
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
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-outline-primary",
                                attrs: { type: "button" },
                                on: { click: _vm.add_another_question },
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.keywords.add_another_question) +
                                    "\n                            "
                                ),
                              ]
                            ),
                          ])
                        : _c("div", { staticClass: "new_questions mb-2" }, [
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  name: "ar_question",
                                  placeholder: _vm.switchWord("ar_question"),
                                  required: "",
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  name: "en_question",
                                  placeholder: _vm.switchWord("en_question"),
                                  required: "",
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  name: "tu_question",
                                  placeholder: _vm.switchWord("tu_question"),
                                  required: "",
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  name: "ar_question",
                                  placeholder: _vm.switchWord("ar_question"),
                                  required: "",
                                },
                              }),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "question_type",
                                    required: "",
                                  },
                                },
                                _vm._l(
                                  [
                                    {
                                      question_type: "",
                                      question_type_text: "text",
                                      question_type_select: "select",
                                      question_type_checkbox: "checkbox",
                                    },
                                  ],
                                  function (i, index) {
                                    return _c("option", { key: index })
                                  }
                                ),
                                0
                              ),
                            ]),
                          ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "drag-drop-files" }, [
                          _c("input", {
                            staticClass: "preview-image",
                            attrs: {
                              type: "file",
                              name: "image",
                              accept: "image/*",
                              selector: ".modal-dialog img.box-image",
                            },
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.switchWord("upload_image"))),
                              ]),
                              _vm._v(" "),
                              _vm._m(4),
                            ]
                          ),
                        ]),
                      ]),
                    ],
                    2
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
                          _vm._s(_vm.switchWord("close")) +
                          "\n                    "
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("img", { attrs: { src: "/images/categories/one.png" } }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", {
        staticClass: "ri-edit-line",
        attrs: { "data-toggle": "modal", "data-target": "#update_box" },
      }),
    ])
  },
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
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("img", {
        staticClass: "box-image",
        attrs: { src: "/images/users/default.png" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "ri-add-line" })])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DeleteItemComponent.vue?vue&type=template&id=418ca5a4&scoped=true& ***!
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=template&id=218a8ca0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("nav", { staticClass: "side-bar-nav" }, [
    _c("span", { staticClass: "cursor-pointer" }, [
      _vm.$page.props.lang == "ar"
        ? _c("i", {
            staticClass: "ri-menu-3-line",
            on: { click: _vm.toggleSideNav },
          })
        : _c("i", {
            staticClass: "ri-menu-2-line",
            on: { click: _vm.toggleSideNav },
          }),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "logo" },
      [
        _c("inertia-link", { attrs: { href: "/" } }, [
          _c("img", { attrs: { src: "/images/logo.png" } }),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c("ul", [
      _c(
        "li",
        { attrs: { custom: "dashboard" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard" } }, [
            _c("span", [_c("i", { staticClass: "ri-home-2-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("Home")))]),
            _vm._v(" "),
            _c("span"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "notifications" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/notifications" } }, [
            _c("span", [_c("i", { staticClass: "ri-notification-2-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("notifications")))]),
            _vm._v(" "),
            _c("span"),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "users" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/users" } }, [
            _c("span", [_c("i", { staticClass: "ri-group-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("users")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "categories" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/categories" } }, [
            _c("span", [_c("i", { staticClass: "ri-list-check" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("categories")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "questions" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/questions" } }, [
            _c("span", [_c("i", { staticClass: "ri-question-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("questions")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        [
          _c("inertia-link", { attrs: { href: "#" } }, [
            _c("span", [_c("i", { staticClass: "ri-line-chart-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("chart")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        [
          _c("inertia-link", { attrs: { href: "#" } }, [
            _c("span", [_c("i", { staticClass: "ri-inbox-fill" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("packages")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        [
          _c("inertia-link", { attrs: { href: "#" } }, [
            _c("span", [_c("i", { staticClass: "ri-building-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("buildings")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        [
          _c("inertia-link", { attrs: { href: "#" } }, [
            _c("span", [_c("i", { staticClass: "ri-file-list-3-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("reports")))]),
          ]),
        ],
        1
      ),
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/dashboard/SideNavbarComponent.vue?vue&type=style&index=0&id=218a8ca0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("de938f0a", content, false, {});
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