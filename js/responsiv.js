$(function (){
    
    nbrFormItem = $('.form_wizard section .form_item').length;
    statusContent = "Step 1 of "+nbrFormItem;
    $('.form_wizard section .wizard_header .status > div').text(statusContent);
    
    nbrStep = 0;
    $('.form_wizard .wizard_footer .nxt_btn').click(function (){
        if(nbrStep < nbrFormItem - 1){
            nbrStep = nbrStep + 1;
        }
        if(nbrStep == nbrFormItem - 1)
        {
            $('.form_wizard .wizard_footer .nxt_btn').hide();
            $('.form_wizard .wizard_footer input[type=submit]').show();
        }
        statusContent = "Step " + (nbrStep + 1) + " of " + nbrFormItem;
        $('.form_wizard section .wizard_header .status > div').text(statusContent);
        
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep - 1).removeClass('item_loding');
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep - 1).addClass('item_check');
        imgSrc = $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep - 1).find('img').attr("src-check"); 
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep - 1).find('img').attr('src',imgSrc);
        
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep).removeClass('item_disable');
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep).addClass('item_loding');
        
        $('.form_wizard section .form_item:visible').fadeOut("slow",function (){
            $('.form_wizard section .form_item').eq(nbrStep).fadeIn("slow")
        });
    });
    
    $('.form_wizard .wizard_footer .pre_btn').click(function (){
        if(nbrStep > 0){
            nbrStep = nbrStep - 1;
            $('.form_wizard .wizard_footer .nxt_btn').show();
            $('.form_wizard .wizard_footer input[type=submit]').hide();
        }
        if(nbrStep == 0)
        {
            $('.form_wizard .wizard_footer .nxt_btn').show();
            $('.form_wizard .wizard_footer input[type=submit]').hide();
        }
        statusContent = "Step " + (nbrStep + 1) + " of " + nbrFormItem;
        $('.form_wizard section .wizard_header .status > div').text(statusContent);
        
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep + 1).removeClass('item_loding');
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep + 1).addClass('item_disable');
        imgSrc = $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep + 1).find('img').attr("src-init"); 
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep + 1).find('img').attr('src',imgSrc);
        
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep).removeClass('item_check');
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep).addClass('item_loding');
        imgSrc = $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep).find('img').attr("src-init"); 
        $('.form_wizard section .wizard_header .steps_header .item').
                eq(nbrStep).find('img').attr('src',imgSrc);
        
        $('.form_wizard section .form_item:visible').fadeOut("slow",function (){
            $('.form_wizard section .form_item').eq(nbrStep).fadeIn("slow")
        });
    });
});