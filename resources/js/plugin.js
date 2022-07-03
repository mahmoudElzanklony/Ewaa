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


});
