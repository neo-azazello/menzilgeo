(function ($) {
  // USE STRICT
  "use strict";
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 900,
    outDuration: 900,
    linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'page-loader',
    loadingInner: '<div class="page-loader__spin"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
      window.location.href = url;
    }
  });


})(jQuery);

(jQuery);
(function ($) {
  // Use Strict
  "use strict";
  try {
    var progressbarSimple = $('.js-progressbar-simple');
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on('load', function () {

        that.waypoint(function () {
          if (!executed) {
            executed = true;
            /*progress bar*/
            that.progressbar({
              update: function (current_percentage, $this) {
                $this.find('.js-value').html(current_percentage + '%');
              }
            });
          }
        }, {
          offset: 'bottom-in-view'
        });

      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Scroll Bar
  try {
    var jscr1 = $('.js-scrollbar1');
    if (jscr1[0]) {
      const ps1 = new PerfectScrollbar('.js-scrollbar1');
    }

    var jscr2 = $('.js-scrollbar2');
    if (jscr2[0]) {
      const ps2 = new PerfectScrollbar('.js-scrollbar2');

    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Select 2
  try {

    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
      });
    });

  } catch (error) {
    console.log(error);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown 
  try {
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        } else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
  // Right Sidebar
  var right_sidebar = $('.js-right-sidebar');
  var sidebar_btn = $('.js-sidebar-btn');

  sidebar_btn.on('click', function (e) {
    e.preventDefault();
    for (var i = 0; i < menu.length; i++) {
      menu[i].classList.remove("show-dropdown");
    }
    sub_menu_is_showed = -1;
    right_sidebar.toggleClass("show-sidebar");
  });

  $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
    event.stopPropagation();
  });

  $("body,html").on("click", function () {
    right_sidebar.removeClass("show-sidebar");

  });


  // Sublist Sidebar
  try {
    var arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      that.on('click', function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      });
    });

  } catch (error) {
    console.log(error);
  }


  try {
    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $('.js-list-load');
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find('.js-load-item').hide();
        var load_btn = that.find('.js-load-btn');
        load_btn.on('click', function (e) {
          $(this).text("Loading...").delay(1500).queue(function (next) {
            $(this).hide();
            that.find(".js-load-item").fadeToggle("slow", 'swing');
          });
          e.preventDefault();
        });
      })

    }
  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {

    $('[data-toggle="tooltip"]').tooltip();

  } catch (error) {
    console.log(error);
  }

  // Chatbox
  try {
    var inbox_wrap = $('.js-inbox');
    var message = $('.au-message__item');
    message.each(function () {
      var that = $(this);

      that.on('click', function () {
        $(this).parent().parent().parent().toggleClass('show-chat-box');
      });
    });


  } catch (error) {
    console.log(error);
  }

})(jQuery);


$(document).ready(function () {

  $('#editprofile').click(function () {
    $('input').prop('disabled', false);
    $('textarea').prop('disabled', false);
    $('select').prop('disabled', false);
    $('#postimage').prop('disabled', false);
    $('.editprofile').css("display", "none");
    $('#updateprofile').prop('disabled', false);
    $('.editcancel').css("display", "inline-block");
    $('.browse-photo').css("display", "inherit");
    $('#english').summernote('enable');
    $('#azeri').summernote('enable');
    $('#russian').summernote('enable');
  });
});

$(document).ready(function () {

  $('#editcancel').click(function () {
    $('input').prop('disabled', true);
    $('textarea').prop('disabled', true);
    $('select').prop('disabled', true);
    $('#postimage').prop('disabled', true);
    $('.editcancel').css("display", "none");
    $('.browse-photo').css("display", "none");
    $('#updateprofile').prop('disabled', true);
    $('.editprofile').css("display", "inline-block");
    $('#english').summernote('disable');
    $('#azeri').summernote('disable');
    $('#russian').summernote('disable');

  });
});


$(document).ready(function () {

  $('#editcontact').click(function () {
    $('.contactform input').prop('disabled', false);

    $('.editcontact').css("display", "none");
    $('.editcontactcancel').css("display", "inline-block");

    $('#updatecontact').prop('disabled', false);
  });
});


$(document).ready(function () {

  $('#editcontactcancel').click(function () {
    $('.contactform input').prop('disabled', true);

    $('.editcontactcancel').css("display", "none");
    $('.editcontact').css("display", "inline-block");

    $('#updatecontact').prop('disabled', true);
  });
});


/// Address Form
$(document).ready(function () {

  $('#editaddress').click(function () {
    $('.address input').prop('disabled', false);

    $('.editaddress').css("display", "none");
    $('.editaddresscancel').css("display", "inline-block");

    $('#updateaddress').prop('disabled', false);
  });
});

$(document).ready(function () {

  $('#editaddresscancel').click(function () {
    $('.address input').prop('disabled', true);

    $('.editaddresscancel').css("display", "none");
    $('.editaddress').css("display", "inline-block");

    $('#updateaddress').prop('disabled', true);
  });
});

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function (e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});

//Submits Form when User's Photo is selected
$(document).ready(function () {
  $('#file-upload').on('change', function () {
    if (this.selectedIndex !== 0) {
      document.getElementById("form").submit();
    }
  });
});

function updateImageStatus(pagetype) {
  $.get('../admin/imagestatus?pagetype=' + pagetype, function (data) {

  });

  return false;

}

function updateSlide(pageid) {
  $.get('../admin/addtoslider?pageid=' + pageid, function (data) {

  });

  return false;

}


//Loading Education modal for editing - ok
function editImage(posttype, imageid) {

  $.get('../admin/loadimage/?posttype=' + posttype + "&imageid=" + imageid,

    function (data) {
      $("#modalImageEdit").remove();
      $('#modalEdit').fadeIn("slow", function () {
        $(this).append(data);
        $("#modalImageEdit").modal();
      });

    });

  return false;

}

$('#confirm-delete').on('show.bs.modal', function (e) {
  $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
});

$(document).ready(function () {
  $('.sendButton').attr('disabled', true);
  $('#message').keyup(function () {
    if ($(this).val().length != 0)
      $('.sendButton').attr('disabled', false);
    else
      $('.sendButton').attr('disabled', true);
  })
});


$("#add").click(function () {
  
  var oldval = $(".form-check-input").last().val();

  $(".pricerow")
    .last()
    .clone()
    .appendTo($("#buildyourform"))
    .find("input");

  $('.form-check-input').last().val(function (i, oldval) {
    return ++oldval;
  });

  return false;
});