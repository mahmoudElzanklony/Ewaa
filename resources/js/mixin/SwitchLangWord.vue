<template>

</template>

<script>
export default {
    name: "SwitchLangWord",
    data:function (){
      return {
          words:{
              // navbar words
              Home:{
                ar:'الرئيسية',
                en:'Home',
                tu:'',
              },
              Profile:{
                ar:'الملف الشخصي',
                en:'profile',
                tu:'',
              },
              Search:{
                  ar:'أبحث',
                  en:'Search',
                  tu:'',
              },
              Know:{
                  ar:'أعرف',
                  en:'Know',
                  tu:'',
              },
              List:{
                  ar:'أعلن',
                  en:'List',
                  tu:'',
              },
              Arabic_Language:{
                  ar:'اللغة العربية',
                  en:'Arabic Language',
                  tu:'',
              },
              English_Language:{
                  ar:'اللغة الأنجليزية',
                  en:'English Language',
                  tu:'',
              },
              Help:{
                  ar:'مساعدة',
                  en:'Help',
                  tu:'',
              },
              Blue:{
                  ar:'الأزرق',
                  en:'Blue',
                  tu:'',
              },
              buildings:{
                  ar:'عقارات',
                  en:'Buildings',
                  tu:'',
              },
              Componds:{
                  ar:'كومبودات',
                  en:'Componds',
                  tu:'',
              },
              Beds:{
                  ar:'مساكن',
                  en:'Bed',
                  tu:'',
              },
              rate_building:{
                  ar:'تقييم عقاري',
                  en:'Rate Building',
                  tu:'',
              },
              building_prices:{
                  ar:'اسعار العقارات',
                  en:'Rate Building',
                  tu:'',
              },
              ask_people_area:{
                  ar:'أسئل أهل المنطه',
                  en:'Ask People area',
                  tu:'',
              },
              premium_people:{
                  ar:'وساط متميزون',
                  en:'Top Agent',
                  tu:'',
              },
              real_state_index:{
                  ar:'المؤشر العقاري',
                  en:'real state index',
                  tu:'',
              },
              public_advice:{
                  ar:'نصائح عامة',
                  en:'public advice',
                  tu:'',
              },
              List_your_property:{
                  ar:'أعلن عن عقارك',
                  en:'List Your Property',
                  tu:'',
              },
              List_Companies_properties:{
                  ar:'أعلن عن عقار شركتك',
                  en:'List Companies properties',
                  tu:'',
              },
              sign_in:{
                  ar:'تسجيل دخول',
                  en:'Sign in',
                  tu:'',
              },
              sign_up:{
                  ar:'تسجيل حساب',
                  en:'Sign up',
                  tu:'',
              },
              add_ad:{
                  ar:'اضف اعلانات ، ملاحظات ، المفضلات واكثر ...',
                  en:'place adds , take notes , save favorites and more ...',
                  tu:'',
              },
              my_offers:{
                  ar:'عروضي',
                  en:'my_offers',
                  tu:'',
              },
              get_best_offers:{
                  ar:'احصل على أفضل عروض برنداتك المفضلة  من مكان واحد ، فقط لعملاء عقارماب',
                  en:'Get deals from your favorite brands, all at one place only for Aqarmap customers',
                  tu:'',
              },
              // footer words
              ewaa:{
                  ar:'أيواء',
                  en:'Ewaa',
                  tu:'',
              },
              footer_info:{
                  ar:'خدمات أيواء تساعدك على بيع وشراء العقارات بسهولة بالإضافة إلى تزويدك بمعلومات أساسية لإتخاذ واحد من أهم القرارات المالية في حياتك.',
                  en:'Ewaa services allow you to buy or sell a property while providing essential information to help you take one of life’s biggest financial decisions.',
                  tu:'',
              },
              jobs:{
                  ar:'وظائف',
                  en:'Jobs',
                  tu:'',
              },
              contact_us:{
                  ar:'تواصل معنا',
                  en:'ContactUs',
                  tu:'',
              },
              site_map:{
                  ar:'خريطة الموقع',
                  en:'Sitemap',
                  tu:'',
              },
              conditions:{
                  ar:'الاحكام',
                  en:'Terms',
                  tu:'',
              },
              searches:{
                  ar:'أبحاث',
                  en:'Market Research',
                  tu:'',
              },
              big_photo_upload:{
                  ar:'مساحه الصوره المرفوعه اكبر من 2 ميجا',
                  en:'size of photo uploaded is more than 2 mega',
                  tu:'',
              },
              big_photo_upload_error_preview:{
                  ar:'لن نستطع من عرض الصور التي مساحتها اكبر من 2 ميجا',
                  en:'we cant preview photo uploaded that size is more than 2 mega',
                  tu:'',
              },
              you_exceed_number_of_uploaded:{
                  ar:'لقد تجاوزت عدد الصور المسموح به للرفع',
                  en:'you exceed number of photos uploaded',
                  tu:'',
              },
              added_to_fav:{
                  ar:'تم الأضافه الي المفضلة بنجاح',
                  en:'added to favourite successfully',
                  tu:'',
              },
              removed_from_fav:{
                  ar:'تمت الأزالة من المفضلة بنجاح',
                  en:'removed from favourite successfully',
                  tu:'',
              },
              do_you_need_help:{
                  ar:'هل تحتاج الي مساعده',
                  en:'Do you need help',
                  tu:'',
              },
              to_get_best_results:{
                  ar:'للحصول على نتائج اسرع و اكثر ، نرشح لك أن نتواصل مع أكبر المكاتب العقارية - لمساعدتك في العثور على ماتبحث عنه .',
                  en:'To get faster and more results, we recommend that you contact the largest real estate offices - to help you find what you are looking for.',
                  tu:'',
              },
              registered_at_date:{
                  ar:'سجل في تاريخ',
                  en:'Registered at date',
                  tu:'',
              },
              properties:{
                  ar:'عقارات مصر',
                  en:'Properties',
                  tu:'',
              },
              request_contact:{
                  ar:'طلب اتصال',
                  en:'request contact',
                  tu:'',
              }






          }
      }
    },
    methods:{
        switchWord:function (word){
            // find word first
            if(Object.keys(this.words).includes(word)){
                // yes found it  =======> you passed english
                return this.words[word][this.$inertia.page.props.lang];
            }
        },
    }
}
</script>

<style scoped>

</style>
