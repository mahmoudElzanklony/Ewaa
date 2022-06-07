import $ from 'jquery';

$(document).ready(function (){

    $(window).on('load',function(){
        // PAGE IS FULLY LOADED
        // FADE OUT YOUR OVERLAYING DIV
        //   $('#loading_wrap').fadeOut();
        //  $('.content').fadeIn();
    });

    /*(function (){
        console.log('-----------------|||||||------------------------');
        $.ajaxSetup({
            error : function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(errorThrown);
                if (jqXHR.status == 404) {
                    alert("Element not found.");
                } else {
                    alert("Error: " + textStatus + ": " + errorThrown);
                }
            }
        });
    }())*/


    // hover on categories at navbar
    $('.content').on('click','nav .second_nav .categories p',function (e){
        $(this).next().slideToggle();
        if($(this).find('span:last-of-type i').hasClass('ri-arrow-down-s-line')){
            $(this).find('span:last-of-type i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
        }else{
            $(this).find('span:last-of-type i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
        }
        if($('nav .second_nav .list').hasClass('show')){
            $('nav .second_nav .list').slideUp();
            $('nav .second_nav .list').removeClass('show')
        }
        e.stopPropagation();
    });

    $('.content').on('click',function(){
        $('nav .second_nav ul.list_cats').slideUp();
    })



    $('.content').on('click','nav .second_nav .cats .inner li span i',function(e){
        if($(this).hasClass('ri-arrow-down-s-line')){
            $(this).removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
        }else{
            $(this).removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
        }
        e.stopPropagation();
        $(this).parent().next().slideToggle();
    });



    // $('body').niceScroll();

    // ========================================socket====================================================/

    /*var socket = io.connect('https://'+window.location.host+':8081',  { transports: ['websocket', 'polling', 'flashsocket'] });
    socket.on('new_order',function (data){
        if(data.user == 'admin'){
            if($('nav .second_nav .list ul li').eq(2).find('a').html() == 'الأداره ') {
                var span = $('nav .first_nav .important_icons .nofi span').eq(0);
                span.fadeIn();
                span.html(Number(span.html()) + 1);
            }
        }
    });*/


    $(window).scroll(function (){
        if($(this).scrollTop() > 400){
            $('.up-page').fadeIn();
        } else{
            $('.up-page').fadeOut();
        }
    });

    $('.up-page').click(function (){
        console.log('clicked');
        $('html , body').animate({
            scrollTop:'0px'
        });
    })


    // detect number of files uploaded
    $('.content').on('change','.bk-input-file',function() {
        console.log();
        $(this).find('p').html($(this).find('input')[0].files.length);
    });

    //  user actions (profile - login - logout)
    $('.content').on('click','nav .first_nav .important_icons div:last-of-type',function (e){
        $(this).find('ul').slideToggle();
        e.stopPropagation();
    });

    // click on first navbar icon at mobile
    $('.content').on('click','nav .first_nav .nav_icon',function (){
        $(this).parent().parent().find('>div:not(.logo)').slideToggle(function (){
            if ($(this).is(':visible')) {
                if($(this).hasClass('important_icons'))
                    $(this).css('display', 'flex');
            }
        });
    });

    // click on second navbar icon at mobile
    $('.content').on('click','nav .second_nav .nav_icon',function (){
        $(this).parent().find('.list').slideToggle();
        $(this).parent().find('.list').toggleClass('show');

    });
    // set direction of list products
    //   $('.products .container .slick-slider > div').css('direction','ltr');

    // products page-----------------------------------------------------
    // drop down filter
    $('.content').on('click','form .main-dropdown > p span:last-of-type i , form .main-dropdown > span:last-of-type i',function (){
        if($(this).hasClass('ri-arrow-drop-down-line')){
            $(this).removeClass('ri-arrow-drop-down-line').addClass('ri-arrow-drop-up-line');
        }else{
            $(this).removeClass('ri-arrow-drop-up-line').addClass('ri-arrow-drop-down-line');
        }
        $(this).parent().parent().next().slideToggle();
    });


    // end of products page-------------------------------------------
    // product details switch between data [rates - comments - seller info]
    $('.content').on('click','.other_info ul li',function (){
        $(this).parent().find('.active').removeClass();
        $(this).addClass('active');
        $(this).parent().parent().parent().find('.other_info_data .container > div').fadeOut();
        $(this).parent().parent().parent().find('.other_info_data .container > div').eq($(this).index()).fadeIn();
    });

    // change image of product page
    $('.content').on('click','.product-details .image .images > img',function (){
        $(this).parent().parent().find('>img').attr('src',$(this).attr('src'));
    });

    // adding product button
    /*
    $('.plus').click(function(){
       var input_val = $(this).next().val();
       if(input_val == ""){
           input_val = 0;
       }
       $(this).next().val(parseInt(input_val) + 1) ;
    });
    $('.minus').click(function(){
        var input_val = $(this).prev().val();
        if(input_val == ""){
            input_val = 0;
        }
        if(parseInt(input_val) - 1 > 0) {
            $(this).prev().val(parseInt(input_val) - 1);
        }else{
            $(this).prev().val(0);
        }
    });
    */

    // most questions page slide up and down question content
    $('.content').on('click','.mostquestions .all_questions .question .heading',function (){
        if($(this).find('i').hasClass('ri-arrow-down-s-line')){
            $(this).find('i').removeClass('ri-arrow-down-s-line').addClass('ri-arrow-up-s-line');
        }else{
            $(this).find('i').removeClass('ri-arrow-up-s-line').addClass('ri-arrow-down-s-line');
        }
        $(this).next().slideToggle();
    });



    /*-------------------------------------start of checkout----------------------------*/
    $('.content').on('change','.checkout .payment form .payment-type input',function(){
        if($(this).val() == "visa"){
            $('.checkout .visa input').attr('required','required');
            $('.checkout .visa').fadeIn();
        }else{
            $('.checkout .visa input').removeAttr('required');
            $('.checkout .visa').fadeOut();
        }
    });


    /*--------------------------------------end of checkout-----------------------------*/
    /*--------------------------------------start of profile-----------------------------*/
    $('.content').on('click','.payments_types form .input-icon span',function ($e){
        var actions = [];
        var target = $(this);
        if(window.vm.$page.props.lang == 'ar'){
            actions['delete'] = 'هل انت متأكد من عمليه الحذف';
            actions['cancel'] = 'الغاء';
            actions['ok'] = 'نعم';
            actions['success'] = 'تم المسح بنجاح';
        }else{
            actions['delete'] = 'are you sure from delete';
            actions['cancel'] = 'cancel';
            actions['ok'] = 'ok';
            actions['success'] = 'deleted successfully';

        }

        Swal.fire({
            icon:'error',
            title: actions['delete'],
            showCancelButton: true,
            confirmButtonText: actions['ok'],
            cancelButtonText: actions['cancel'],
            confirmButtonColor: '#03071E',
            cancelButtonColor: '#9D0208',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                target.parent().parent().remove();
                Toast.fire({
                    icon:'success',
                    title:actions['success']
                })
            }
        })


});
    /*--------------------------------------end of profile-----------------------------*/


    /*-------------------------------start of create-product----------------------------------*/

    // product status
    $('.content').on('click','.product_status .dropdown-menu div input[type=radio]',function (){
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $('.product_status button').text($(this).next().html());
    });

    // delete special discount case
    $('.content').on('click','.create-product .special_discount span i',function (){

        if(document.URL.indexOf('editproduct') > 0){
            let actions = {};
            if(window.vm.$page.props.lang == 'ar'){
                actions['delete'] = 'هل انت متأكد من عمليه الحذف';
                actions['cancel'] = 'الغاء';
                actions['ok'] = 'نعم';
                actions['success'] = 'تم مسح المقاس بنجاح';
            }else{
                actions['delete'] = 'are you sure from delete';
                actions['cancel'] = 'cancel';
                actions['ok'] = 'ok';
                actions['success'] = 'size is deleted successfully';

            }
            let ev = this;
            console.log($(this).attr('discount_case_id'));
            if($(this).attr('discount_case_id')){
                let data = {
                    operation:'delete',
                    discount_case_id:$(this).attr('discount_case_id'),
                }

                $.ajax({
                    headers:{
                        'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
                    },
                    url:'/profile/deletespecialdiscountcase',
                    type:'POST',
                    data:data,
                    dataType:'JSON',
                    success:function(data){
                        Toast.fire({
                            icon: 'success',
                            title: actions['success']
                        });
                        $(ev).parent().parent().remove();
                    }
                })

            }else{
                $(this).parent().parent().remove();
            }

        }else {
            $(this).parent().parent().remove();
        }

    });

    // add special discount cases
    $('.content').on('click','.create-product .add_special_discount',function (){
        var actions = [];
        if(window.vm.$page.props.lang == 'ar'){
            actions['min'] = 'اقل قيمه';
            actions['max'] = 'اقصي قيمه';
            actions['discount'] = 'نسبه الخصم';
        }else{
            actions['min'] = 'min pieces';
            actions['max'] = 'max pieces';
            actions['discount'] = 'discount percentage';

        }
        let html_output = '<div class="special_discount mb-2"><span><i class="ri-close-line"></i></span><input name="min_request_order[]" type="number" placeholder="'+actions['min']+'" required><input name="max_request_order[]" type="number" placeholder="'+actions['max']+'" required><input name="discount_request_order[]" type="number" placeholder="'+actions['discount']+'" required></div>';
        $(this).prev().append(html_output);
    });


    // show , hide price of question answer
    $('.content').on('click','.create-product .questions .question .outer .inner button',function(){
        $(this).prev().fadeIn();
    });

    // remove question answer
    $('.content').on('click','.create-product .question div.inner span',function(){
        $(this).parent().remove();
    });

    // delete size
    $('.content').on('click','.outer_sizes .inner_sizes div span',function (){
        if(document.URL.indexOf('editproduct') > 0){
            let actions = {};
            if(window.vm.$page.props.lang == 'ar'){
                actions['delete'] = 'هل انت متأكد من عمليه الحذف';
                actions['cancel'] = 'الغاء';
                actions['ok'] = 'نعم';
                actions['success'] = 'تم مسح المقاس بنجاح';
            }else{
                actions['delete'] = 'are you sure from delete';
                actions['cancel'] = 'cancel';
                actions['ok'] = 'ok';
                actions['success'] = 'size is deleted successfully';

            }
            let ev = this;
            if($(this).attr('color') || $(this).attr('size')){
                let data = {
                    operation:'delete',
                    product_id:$(this).attr('el_id'),
                    color:$(this).attr('color'),
                    size:$(this).attr('size'),
                    type:$(this).attr('type'),
                    id:$(this).attr('id'),
                }

                $.ajax({
                    headers:{
                        'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
                    },
                    url:'/profile/updateproductsize',
                    type:'POST',
                    data:data,
                    dataType:'JSON',
                    success:function(data){
                        Toast.fire({
                            icon: 'success',
                            title: actions['success']
                        });
                        $(ev).parent().remove();
                    }
                })

            }else{
                $(this).parent().remove();
            }

        }else {
            $(this).parent().remove();
        }
    });


    // add new size
    $('.content').on('click','.outer_sizes > button',function (){
        let parent = $(this).parent();
        if(window.vm.$page.props.lang == 'ar'){
            var size = 'المقاس';
        }else{
            var size = 'size;'
        }
        let html_input = '<div><input name="sizes[]" placeholder="'+size+'"><span><i class="ri-close-line"></i></span></div>';
        $(this).prev().append(html_input);
    });

    $('.content').on('change','.sub_cats_product_creation select',function (){
        // check if nex is there is another select
        let output = {};
        let parent_id = $(this).val();
        $.ajax({
            headers:{
                'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
            },
            url:'/categories/getchilren',
            type:'POST',
            data:{parent_id:parent_id},
            dataType:'JSON',
            async:false,
            success:function(data){
                output = data;
            }
        })
        if($(event.target).next().length > 0){
            // i found another select
            $(event.target).nextAll().remove();
        }
        if(Object.keys(output).length > 0) {
            let select = '<select class="form-control" name="main_category_id[]" required><option value="">';
            select += event.target.firstElementChild.text;
            select += '</option>';
            for (let op of Object.keys(output)) {
                select += '<option value="' + output[op]['id'] + '">' + output[op]['name'] + '</option>';
            }
            $(event.target).parent().append(select);
        }
    });

    // detect number of files upload
    $('.content').on('click','.inputs_colors_data .color_field input[type="file"]',function (){
        $(this).parent().find('p').html($(this)[0].files.length);

    });

    // remove color_size field input
    $('.content').on('click','.color_field > span',function (){
        if($(this).attr('color') == undefined || $(this).attr('product_id') == undefined ){
            $(this).parent().remove();
        }else{
            var tar = $(this).parent();
            let color = $(this).attr('color');
            let product_id = $(this).attr('product_id');
            let actions = [];
            if(window.vm.$page.props.lang == 'ar'){
                actions['delete'] = 'هل انت متأكد من عمليه الحذف';
                actions['cancel'] = 'الغاء';
                actions['ok'] = 'نعم';
                actions['success'] = 'تم مسح المقاسات بالصور المخصصه لهذا اللون  بنجاح';
            }else{
                actions['delete'] = 'are you sure from delete';
                actions['cancel'] = 'cancel';
                actions['ok'] = 'ok';
                actions['success'] = 'sizes , photos of product color are deleted successfully';

            }

            Swal.fire({
                icon:'error',
                title: actions['delete'],
                showCancelButton: true,
                confirmButtonText: actions['ok'],
                cancelButtonText: actions['cancel'],
                confirmButtonColor: '#03071E',
                cancelButtonColor: '#9D0208',
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    $.ajax({
                        headers:{
                            'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
                        },
                        url:'/products/deletecolor',
                        type:'POST',
                        data:{color:color,product_id:product_id},
                        dataType:'JSON',
                        success:function(data){
                            Toast.fire({
                                icon: 'success',
                                title: actions['success']
                            });
                            tar.remove();

                        }
                    })

                }
            })

        }

    });



    // price required
    $('.question div.inner input:last-of-type').change(function (){
        if($(this).val().length > 0){
            $(this).parent().parent().find('.inner  input:last-of-type').attr('required','required');
        }else{
            // he remove value from price
            // check if there is any price has value
            var check_price_no = 0;
            for(var input of $(this).parent().parent().find('.inner  input:last-of-type')){
                console.log(input);
                if($(input).val().length > 0){
                    check_price_no++;
                }
            }
            if(check_price_no > 0){
                // found price input
                $(this).parent().parent().find('.inner  input:last-of-type').attr('required','required');
            }else{
                // no found price
                $(this).parent().parent().find('.inner  input:last-of-type').removeAttr('required');
            }
        }
    });
    /*-------------------------------end of create-product----------------------------------*/
    /*-------------------------------start of dashboard----------------------------------*/
    // delete bneksy shipment record
    $('.content').on('click','.bneksy_shipment_info tbody tr td span',function (){
        var parent = $(this).parent().parent();
        Swal.fire({
            icon:'error',
            title: 'هل انت متأكد من عمليه الحذف',
            showCancelButton: true,
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            confirmButtonColor: '#03071E',
            cancelButtonColor: '#9D0208',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                parent.remove();
            }
        })

    });
    /*-------------------------------end of dashboard----------------------------------*/





});
