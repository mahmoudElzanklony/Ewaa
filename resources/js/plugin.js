import $ from 'jquery';

$(document).ready(function (){


    /*--------------------------start of public actions at all pages -------------------------------*/
    // border radius input first
    $('.content').on('click','.special_radio_container .special_radio',function (){
       $(this).parent().parent().find('.active').removeClass('active');
       $(this).find('input').addClass('active');
    });
    // border radius input last
    $('.content').on('click','.input-radius-radio',function (){
       if($(this).find('input').attr('type') == 'radio'){
           $(this).parent().find('.active').removeClass('active');
           $(this).addClass('active');
       }else{
           $(this).find('input').toggleClass('active');
       }
    });


    // toggle next
    $('.content').on('click','.toggle_next',function(){
       $(this).parent().parent().next().slideToggle();
       if($(this).hasClass('ri-arrow-down-s-line')){
           $(this).removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line')
       }else{
           $(this).removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line')
       }
    });


    // preview image at box
    $('.content').on('change','.preview-image',function (){
        var file_data = event.target.files[0];
        var allowed_extensions = ['png','jpg','jpeg','gif'];
        if(allowed_extensions.includes(file_data.type.split('/')[1])){
            console.log(document.querySelector($(this).attr('selector')));
            document.querySelector($(this).attr('selector')).src = URL.createObjectURL(file_data);
        }else{
            // its not an image
            if(window.vm.$inertia.page.props.lang == 'ar'){
                var msg = 'لقد قمت بتحميل ملف ليس صورة من فضلك حاول مرة اخري';
            }else{
                var msg = 'You uploaded a file not an image please try again';
            }
            Toast.fire({
                icon:'error',
                title:msg,
            })
        }
    });


    // delete input
    $('.content').on('click','.delete-icon-input',function(){
        var target = $(this);
        if(window.vm.$inertia.page.props.lang == 'ar'){
            var msg = 'هل أنت متأكد من عملية المسح';
            var confirm = 'نعم أنا متأكد';
            var cancel = 'إلغاء';
            var done = 'تمت عمليه المسح بنجاح';
        }else{
            var msg = 'are you sure from delete operation';
            var confirm = 'yes';
            var cancel = 'cancel';
            var done = 'delete done';

        }
        Swal.fire({
            title: msg,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#ff6a15',
            cancelButtonColor: '#aaa',
            confirmButtonText: confirm,
            cancelButtonText:cancel,
        }).then((result) => {
            if (result.isConfirmed) {
                target.parent().parent().remove();
                Toast.fire({
                    icon:'success',
                    title:done
                })
            }
        })
    });

    /*--------------------------end of public actions at all pages -------------------------------*/


    /*----------------------------start of compound details page----------------------------------*/
    $('.content').on('click','.more-info .small_images img',function (){
       $(this).parent().prev().find('img').attr('src',$(this).attr('src'));
    });
    /*----------------------------end of compound details page----------------------------------*/



    /*--------------------------start of compound -------------------------------*/
    $('.content').on('click','.filters form div p span i',function (){
        if($(this).hasClass('ri-add-line')){
            $(this).removeClass('ri-add-line').addClass('ri-subtract-fill');
        }else{
            $(this).removeClass('ri-subtract-line').addClass('ri-add-fill');
        }
        $(this).parent().parent().next().slideToggle();
    })
    /*--------------------------end of compound-------------------------------*/
    /*--------------------------start of dashboard-------------------------------*/
    $('.content').on('change','.specific_areas select[name="area_type"]',function(){
        var output = '';
        var select_country = '';
        var select_government = '';
        var select_city = '';
        var select_area = '';
        if(window.vm.$inertia.page.props.lang == 'ar'){
            select_country = 'اختر الدولة';
            select_government = 'اختر المحافظة';
            select_city = 'اختر المدينة';
            select_area = 'اختر المنطقة';
        }else{
            select_country = 'Select country';
            select_government = 'Select government';
            select_city = 'Select city';
            select_area = 'Select area';
        }


        if(this.value == 'country'){
            output = option_selection('col-12','country_id',select_country,[]);
        }else if(this.value == 'government'){
            output = option_selection('col-6','country_id',select_country,[]) + option_selection('col-6','government_id',select_government,[]);


        }else if(this.value == 'city'){
            output = option_selection('col-4','country_id',select_country,[]) + option_selection('col-4','government_id',select_government,[]) + option_selection('col-4','city_id',select_city,[]);
        }else{
            output = option_selection('col-3','country_id',select_country,[]) + option_selection('col-3','government_id',select_government,[]) + option_selection('col-3','city_id',select_city,[]) + option_selection('col-3','area_id',select_area,[]);
        }
        $('.specific_areas .row').html(output);
    });

    function option_selection(col_number,select_name,first_option,other_options = []){
        var output = '<div class="'+col_number+'"><div class="form-group"><select class="form-control" name="'+select_name+'"><option value="">'+first_option+'</option>';
        if(other_options.length > 0){
            for(let option of other_options){
                output += '<option value="'+option['value']+'">'+option['id']+'</option>';
            }
        }
        output += '</select></div></div>';
        return output;
    }



    // add new answer
    /*$('.content').on('click','.answers > button',function (){
        var row = document.createElement('div');
        row.className = 'row';
       //$(event.target).prev().find('.row:first-of-type').find('input').val('');
        row.innerHTML = $(event.target).prev().find('.row:first-of-type')[0].innerHTML+'<span><i class="ri-close-line delete-icon-input"></i></span>';
        console.log(row);
        /!*for(let input of row){
            input.value = '';
        }*!/
        $('.answers .inner').append(row);
    });*/


    // change question type
    /*$('.content').on('change','.new_questions select[name="type"]',function (){
        console.log(this);
        var output = ''
        var words = {
            question_answer_ar:{
                ar:'اجابة السؤال بالعربي',
                en:'question answer in arabic',
                tu:'',
            },
            question_answer_en:{
                ar:'اجابة السؤال بالأنجليزي',
                en:'question answer in english',
                tu:'',
            },
            question_answer_tu:{
                ar:'اجابة السؤال بالتركي',
                en:'question answer in turkish',
                tu:'',
            },
        }
       if(this.value == 'select'){
            for(let question of ['question_answer_ar',
                'question_answer_en','question_answer_tu']){
                var required_status = question.split('question_answer_')[1] != 'tu' ? 'required':'';
                output += '<div class="col-4"><input class="form-control mb-2" name="'+question.split('question_answer_')[1]+'_answers[]" '+required_status+'  placeholder="'+words[question][window.vm.$inertia.page.props.lang]+'"></div>';
            }
           $(this).parent().parent().next().fadeIn();
           $(this).parent().parent().next().find('.inner .row').append(output);
       }else{
           $(this).parent().parent().next().find('.inner').html('<div class="row"></div>');
           $(this).parent().parent().next().hide();
       }

    });*/


    // add new question box
    $('.content').on('click','.add_new_question_box',function (){
        var content = $(event.target).prev().find('>div:first-of-type > div');
        var output = '<div class="new_questions mb-2 row flex-wrap"><div>'+content.html()+'</div><div class="answers"></div><span><i class="ri-close-line delete-icon-input"></i></span></div>';
        $(event.target).prev().append(output);
    });
    // add new country
    /*$('.content').on('click','.add_new_country',function (){
        var country_selected = '';
        if(window.vm.$inertia.page.props.lang == 'ar'){
            country_selected = 'أختر الدولة التي تود انشاء سعر خاص بها';
        }else{
            country_selected = 'Select country you want to add specific price for it';
        }

            var output = '<div class="area-inputs"><div class="form-group"><select name="country_id" class="form-control w-75" required><option value="">'+country_selected+'</option>';

        output += '</select></div><span><i class="ri-close-line delete-icon-input"></i></span></div>';
        $(event.target).prev().append(output);
    });*/


    /*--------------------------end of dashboard-------------------------------*/


});
