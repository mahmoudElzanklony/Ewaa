(self["webpackChunkphpsocket"] = self["webpackChunkphpsocket"] || []).push([["resources_js_Pages_dashboard_statistics_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/dashboard/SideNavbarComponent */ "./resources/js/components/dashboard/SideNavbarComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "statistics",
  props: ['keywords', 'handling_data'],
  data: function data() {
    return {
      statistics_data: {
        users: 'ri-group-line',
        packages: 'ri-shield-check-line',
        subscriptions: 'ri-currency-line',
        listings: 'ri-community-line',
        listings_pending: 'ri-shopping-bag-2-line'
      }
    };
  },
  components: {
    SideNavbarComponent: _components_dashboard_SideNavbarComponent__WEBPACK_IMPORTED_MODULE_0__.default
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".box-info[data-v-2a111587] {\n  box-shadow: 0px 0px 5px 1px #eeeeee;\n  margin-bottom: 20px;\n  padding: 20px;\n  border-radius: 5px;\n}\n.box-info > span[data-v-2a111587] {\n  color: #66bb6a;\n}\n.box-info > span i[data-v-2a111587] {\n  font-size: 40px;\n}\n.box-info div[data-v-2a111587] {\n  width: calc(100% - 45px);\n}\n.box-info div p[data-v-2a111587] {\n  color: #03071E;\n}\n.box-info div p[data-v-2a111587]:first-of-type {\n  font-weight: bold;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
___CSS_LOADER_EXPORT___.push([module.id, ".ar .orange_class[data-v-218a8ca0]:hover, .ar .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .ar li[data-v-218a8ca0]:hover {\n  padding-right: 10px;\n}\n.ar .orange_class[data-v-218a8ca0]::before, .ar .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .ar li[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.ar .side-bar-nav[data-v-218a8ca0] {\n  right: 0px;\n}\n.ar .side-bar-nav > span[data-v-218a8ca0] {\n  right: 5px;\n}\n.ar .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-left: 10px;\n}\n.ar .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  left: 0px;\n}\n.en .orange_class[data-v-218a8ca0]:hover, .en .side-bar-nav ul li[data-v-218a8ca0]:hover, .side-bar-nav ul .en li[data-v-218a8ca0]:hover {\n  padding-left: 10px;\n}\n.en .orange_class[data-v-218a8ca0]::before, .en .side-bar-nav ul li[data-v-218a8ca0]::before, .side-bar-nav ul .en li[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.en .side-bar-nav[data-v-218a8ca0] {\n  left: 0px;\n}\n.en .side-bar-nav > span[data-v-218a8ca0] {\n  left: 5px;\n}\n.en .side-bar-nav ul li a span[data-v-218a8ca0]:first-of-type {\n  margin-right: 10px;\n}\n.en .side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  right: 0px;\n}\n.orange_class[data-v-218a8ca0]::before, .side-bar-nav ul li[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  height: 0px;\n  transition: 0.5s all;\n  background-color: #ff6a15;\n  width: 4px;\n}\n.orange_class[data-v-218a8ca0]:hover::before, .side-bar-nav ul li[data-v-218a8ca0]:hover::before {\n  height: 100%;\n}\n.orange_class:hover span[data-v-218a8ca0], .side-bar-nav ul li:hover span[data-v-218a8ca0] {\n  color: #ff6a15;\n}\n.side-bar-nav[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: fixed;\n  background-color: #eeeeee38;\n  width: 200px;\n  height: 100%;\n  padding: 0px !important;\n}\n.side-bar-nav > span[data-v-218a8ca0] {\n  position: absolute;\n  top: 14px;\n  color: #03071E;\n}\n.side-bar-nav .logo img[data-v-218a8ca0] {\n  padding-top: 10px;\n  width: 115px;\n  display: block;\n  margin: auto;\n}\n.side-bar-nav ul[data-v-218a8ca0] {\n  padding-top: 50px;\n  height: calc(100% - 50px);\n  overflow: auto;\n}\n.side-bar-nav ul li[data-v-218a8ca0] {\n  transition: 0.5s all;\n  position: relative;\n}\n.side-bar-nav ul li a[data-v-218a8ca0] {\n  display: flex;\n  align-items: center;\n  padding: 5px;\n}\n.side-bar-nav ul li a span[data-v-218a8ca0] {\n  color: #03071E;\n}\n.side-bar-nav ul li.active span[data-v-218a8ca0] {\n  color: #ff6a15;\n}\n.side-bar-nav ul li.active[data-v-218a8ca0]::before {\n  content: \"\";\n  position: absolute;\n  transition: 0.5s all;\n  background-color: #ff6a15;\n  width: 4px;\n  height: 100%;\n}\n.side-bar-nav ul li[data-v-218a8ca0]:not(:last-of-type) {\n  border-bottom: 1px solid #eeeeee;\n}\n.side-bar-nav.icons_only[data-v-218a8ca0] {\n  width: 50px;\n}\n.side-bar-nav.icons_only > span[data-v-218a8ca0] {\n  right: 10px;\n}\n.side-bar-nav.icons_only .logo img[data-v-218a8ca0] {\n  display: none;\n}\n.side-bar-nav.icons_only ul li a[data-v-218a8ca0] {\n  align-items: center;\n  justify-content: center;\n}\n.side-bar-nav.icons_only ul li a span[data-v-218a8ca0]:not(:first-of-type) {\n  display: none;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/Pages/dashboard/statistics.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/dashboard/statistics.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _statistics_vue_vue_type_template_id_2a111587_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.vue?vue&type=template&id=2a111587&scoped=true& */ "./resources/js/Pages/dashboard/statistics.vue?vue&type=template&id=2a111587&scoped=true&");
/* harmony import */ var _statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics.vue?vue&type=script&lang=js& */ "./resources/js/Pages/dashboard/statistics.vue?vue&type=script&lang=js&");
/* harmony import */ var _statistics_vue_vue_type_style_index_0_id_2a111587_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true& */ "./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _statistics_vue_vue_type_template_id_2a111587_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _statistics_vue_vue_type_template_id_2a111587_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2a111587",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/dashboard/statistics.vue"
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

/***/ "./resources/js/Pages/dashboard/statistics.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/statistics.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./statistics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/Pages/dashboard/statistics.vue?vue&type=template&id=2a111587&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/statistics.vue?vue&type=template&id=2a111587&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_template_id_2a111587_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_template_id_2a111587_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_template_id_2a111587_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./statistics.vue?vue&type=template&id=2a111587&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=template&id=2a111587&scoped=true&");


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

/***/ "./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_style_index_0_id_2a111587_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_style_index_0_id_2a111587_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_style_index_0_id_2a111587_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_style_index_0_id_2a111587_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_14_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_statistics_vue_vue_type_style_index_0_id_2a111587_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=template&id=2a111587&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=template&id=2a111587&scoped=true& ***!
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
              _vm._m(0),
            ]
          ),
          _vm._v(" "),
          _c("div", [
            _c(
              "div",
              { staticClass: "row" },
              _vm._l(Object.keys(_vm.statistics_data), function (i) {
                return _c(
                  "div",
                  { key: i, staticClass: "col-lg-4 col-md-6 col-12" },
                  [
                    _c("inertia-link", { attrs: { href: "?type=" + i } }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex align-items-center justify-content-between box-info",
                        },
                        [
                          _c("span", [
                            _c("i", { class: _vm.statistics_data[i] }),
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("p", [_vm._v(_vm._s(_vm.keywords[i]))]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v(_vm._s(_vm.handling_data["data"][i])),
                            ]),
                          ]),
                        ]
                      ),
                    ]),
                  ],
                  1
                )
              }),
              0
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "ri-arrow-down-s-line toggle_next" }),
    ])
  },
]
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
        { attrs: { custom: "settings" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/settings" } }, [
            _c("span", [_c("i", { staticClass: "ri-settings-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("settings")))]),
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
        { attrs: { custom: "statistics" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/statistics" } }, [
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
        { attrs: { custom: "packages" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/packages" } }, [
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
        { attrs: { custom: "currencies" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/currencies" } }, [
            _c("span", [_c("i", { staticClass: "ri-currency-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("currencies")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "subscriptions" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/subscriptions" } }, [
            _c("span", [_c("i", { staticClass: "ri-stack-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("subscriptions")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "buildings" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/buildings" } }, [
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
        { attrs: { custom: "pointad" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/pointad" } }, [
            _c("span", [_c("i", { staticClass: "ri-shield-flash-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("ad_points")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "countries" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/map/countries" } }, [
            _c("span", [_c("i", { staticClass: "ri-bank-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("countries")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "governments" } },
        [
          _c(
            "inertia-link",
            { attrs: { href: "/dashboard/map/governments" } },
            [
              _c("span", [_c("i", { staticClass: "ri-government-line" })]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.switchWord("governments")))]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "cities" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/map/cities" } }, [
            _c("span", [_c("i", { staticClass: "ri-community-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("cities")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "areas" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/map/areas" } }, [
            _c("span", [_c("i", { staticClass: "ri-map-pin-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("areas")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "reports" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/reports" } }, [
            _c("span", [_c("i", { staticClass: "ri-file-list-3-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("reports")))]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "li",
        { attrs: { custom: "support" } },
        [
          _c("inertia-link", { attrs: { href: "/dashboard/support" } }, [
            _c("span", [_c("i", { staticClass: "ri-headphone-line" })]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.switchWord("client_support")))]),
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-14[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/dashboard/statistics.vue?vue&type=style&index=0&id=2a111587&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2b36b1ee", content, false, {});
// Hot Module Replacement
if(false) {}

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

/***/ })

}]);