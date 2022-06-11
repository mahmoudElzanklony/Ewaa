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

});
