// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require twitter/bootstrap

$(function() { 

	$('.selectpicker').selectpicker();

  // Fix input element click problem
  $('.dropdown-menu input').click(function(e) {
    e.stopPropagation();
  });
  $('.dropdown-menu a').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var id = $(this).parent().parent().attr("id");       
    var value = $(this).parent().find('a')[0].innerText;
    if ($(this).parent().parent().attr("id")=="salary-menu") {  
      $(this).parent().parent().children().children().each(function () {
				if ($(this).children(0).hasClass('icon-check-empty')==false) {
					$(this).children(0).toggleClass('icon-check-empty');
				}
			})                
      $(this.children[0]).removeClass('icon-check-empty');
      $(this.children[0]).addClass('icon-check');
			$("#"+id.substring(0,id.length-4)+"tags").html("");
			$("#"+id.substring(0,id.length-4)+"tags").append('<span class="label label-success"><i class="icon-tag"></i> '+value+'</span>');
    }
    else{
      if ( $(this.children[0]).hasClass('icon-check-empty')) { 
				$("#"+id.substring(0,id.length-4)+"tags").append('<span class="label label-success"><i class="icon-tag"></i> '+value+'</span>');
			}
			else {
				$("#"+id.substring(0,id.length-4)+"tags").find(":contains('"+value+"')").remove();			
			}
      $(this.children[0]).toggleClass('icon-check-empty icon-check');
		}
  });



  $('.dropdown-menu .plus-btn').click(function(e) {
    e.stopPropagation();
    e.preventDefault();
    var value = $(this).parent().find('input').val();
    var id = $(this).parent().parent().attr("id");
    var newItem = $('<li><a href=""><i class="icon-check-empty"></i> '+value+'</a></li>')
    newItem.children(0).click(function(e) {
    e.stopPropagation();
    e.preventDefault();
	  if ( $(this.children[0]).hasClass('icon-check-empty')) { 
				$("#"+id.substring(0,id.length-4)+"tags").append('<span class="label label-success"><i class="icon-tag"></i> '+value+'</span>');
		}
		else {
			$("#"+id.substring(0,id.length-4)+"tags").find(":contains('"+value+"')").remove();			
		}
    $(this.children[0]).toggleClass('icon-check-empty icon-check');
    });
    $("#"+id+" .divider").before(newItem);
    
  });
});
