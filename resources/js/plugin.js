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
