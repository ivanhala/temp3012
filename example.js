jQuery(document).on( 'wbk_on_form_rendered', function(){
    const text_to_show = 'Unable to selext 2 pleces';
    if( jQuery('#wbk-book-quantity').find('option').length == 1 ){
        jQuery('.custom-field2').replaceWith('<span>' + text_to_show + '</span>');  
      	jQuery("label[for='custom-field2']").remove();
    }
    jQuery('.wbk-checkbox-label').click( function(){
        var checkbox_field = jQuery(this).siblings('.wbk-checkbox-custom');
      	if( checkbox_field.attr('name') == 'custom-field2[]' ){
             if( checkbox_field.prop('checked') ){
                  jQuery('#wbk-book-quantity').val(2); 
             } else {
                  jQuery('#wbk-book-quantity').val(1);                
             } 
        }
    });
  
});
