/*
@Name:		Horizontal multilevel menu
@Author:    Muffin Group
@WWW:       www.muffingroup.com
@Version:   1.3
*/

(function($){
	$.fn.extend({
		muffingroup_menu: function(options) {
			var menu = $(this);
			
			var defaults = {
				delay       : 50,
				hoverClass  : 'hover',
				arrows      : true,
				animation   : 'fade',
				addLast		: true
			};
			options = $.extend(defaults, options);
			
			// add class if manu item has sumbenu
			menu.find("li:has(ul)")
				.addClass("submenu")
				.append("<span class='menu-toggle'></span>") // responsive menu toggle
			;	

			// add class if submanu item has another sumbenu
			if(options.arrows) {
				menu.find("li ul li:has(ul) > a").append("<span class='menu-arrow'><i class='icon-chevron-right'></i></span>");
			}

			// hover
			menu.find("li").hover(function() {
				$(this).addClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").fadeIn(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").stop(true,true).slideDown(options.delay);
				}
			}, function(){
				$(this).removeClass(options.hoverClass);
				if (options.animation === "fade") {
					$(this).children("ul").fadeOut(options.delay);
				} else if (options.animation === "toggle") {
					$(this).children("ul").stop(true,true).slideUp(options.delay);
				}
			});
			
			// addLast
			if(options.addLast) {
				
				// add class .last-child to last 3 items
				$("> li:last-child", menu)
					.addClass("last")
					.prev()
						.addClass("last")
						.prev()
							.addClass("last");
				
				// add class .last-item to last sumbenu item 
				$(".submenu ul li:last-child", menu).addClass("last-item");
				
			}
	
		}
	});
})(jQuery);
/*
     FILE ARCHIVED ON 18:59:01 Jan 20, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:52 Apr 25, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  xauthn.identify: 187.017
  exclusion.robots: 187.356
  exclusion.robots.policy: 187.341
  esindex: 0.013
  PetaboxLoader3.datanode: 168.742 (5)
  RedisCDXSource: 0.626
  xauthn.chkprivs: 0.045
  PetaboxLoader3.resolve: 220.115 (4)
  captures_list: 332.457
  LoadShardBlock: 131.061 (3)
  CDXLines.iter: 10.829 (3)
  load_resource: 299.763
*/