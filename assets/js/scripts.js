/* ---------------------------------------------------------------------------
 * jQuery(document).ready
 * --------------------------------------------------------------------------- */
jQuery(document).ready(function() {

	/* ---------------------------------------------------------------------------
	 * Add classes first/last
	 * --------------------------------------------------------------------------- */
	jQuery(".Recent_comments li:last-child, .Recent_posts li:last-child, .Twitter li:last-child, #Footer .container .column:last-child, .pricing-box .plan-inside ul li:last-child").addClass("last");
	jQuery(".commentlist li li .comment-body:last-child").addClass("last");
	jQuery(".commentlist li .comment-body:last-child").addClass("lastBorder");
	jQuery(".widget ul.menu li:last-child, .widget_links ul li:last-child, .widget_meta ul li:last-child").addClass("last");

	
	/* ---------------------------------------------------------------------------
	 * Responsive menu
	 * --------------------------------------------------------------------------- */
	jQuery('.responsive-menu-toggle').click(function(){
		jQuery(this).toggleClass('active');
		jQuery('#Header #menu').stop(true,true).slideToggle(200);
	});
	
	
	/* ---------------------------------------------------------------------------
	 * Main menu
	 * --------------------------------------------------------------------------- */
	jQuery("#menu > ul").muffingroup_menu({
		delay		: 100,
		animation	: 'toggle'
	});
	
	
	/* ---------------------------------------------------------------------------
	 * IE placeholder fix
	 * --------------------------------------------------------------------------- */
	jQuery("[placeholder]").each(function(){
		if( jQuery(this).val() === "" && jQuery(this).attr("placeholder") !== "" ){
			jQuery(this).val(jQuery(this).attr("placeholder"));
			jQuery(this).focus(function(){
				if(jQuery(this).val() === jQuery(this).attr("placeholder")) { jQuery(this).val(""); }
			});
			jQuery(this).blur(function(){
				if( jQuery(this).val() === "" ) { jQuery(this).val(jQuery(this).attr("placeholder")); }
			});
		}
	});


    /* ---------------------------------------------------------------------------
	 * Ajax contact form
	 * --------------------------------------------------------------------------- */
    function mfn_contact_validate(){
		var error = false;
		jQuery('.contact_form input.required, .contact_form textarea.required').removeClass('inp_error');
		
		jQuery('.contact_form input.required, .contact_form textarea.required').each(function() {
			if ( (! this.value) || ( this.value === this.defaultValue ) || ( this.value === jQuery(this).attr('placeholder') ) ) {
				jQuery(this).addClass('inp_error');
				error = true;
			}
		});

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( ! emailReg.test(jQuery('.contact_form #Email').val()) )
		{
			jQuery('.contact_form #Email').addClass('inp_error');
			error = true;
		}
			
		if( error ){
			return false;
		}
		return true;
	}
	
	function mfn_contact_processJson(data){
		if( data.status && data.status === 'ok' ){
			jQuery('.contact_form .alert_success').show();
		} else {
			jQuery('.contact_form .alert_error').show();
		}
	}
	
	jQuery('#json_contact_form').ajaxForm({ 
        dataType:		'json', 
		beforeSubmit:	mfn_contact_validate,
        success:		mfn_contact_processJson 
    }); 


});


