$(function() {
	// hero image
	function fullscreen() {
		$('#hero').css({
			width: $(window).width(),
			height: $(window).height()
		});
	}

	fullscreen();

	// in the case of a window resize
	$(window).resize(function() {
		fullscreen();
	});

	// dropdown menu
	$( '.dropdown' ).hover(	function(){
		$(this).children('.drop-menu').slideToggle(200);
	});

	// smooth scrolling
	$('a.down').click(function() {
	  $('html, body').animate({
	    scrollTop: $('#scroll-here').offset().top
	  }, 1500);
	});

	// language switcher
	$('.switcher').click(function() {
		if ($(this).attr('id') == 'eng') {
			$('#lang h1').text("Why Study Languages?");
		} else if ($(this).attr('id') == 'fre') {
			$('#lang h1').text("Pourquoi les Langues d'Étude?");
		} else if ($(this).attr('id') == 'ger') {
			$('#lang h1').text("Warum Studiert Sprachen?");
		} else {
			$('#lang h1').text("Mengapa Studi Bahasa?");
		}
	});

	// image radius
	$('.photo').hover(function() {
			$(this).toggleClass('round');
		}
	);

	// hide images
	$('#tog-book').click(function() {
		$('#book').fadeToggle(500);
	});

	// about courses accordion
	$('#accordion').accordion({
		animate: 400,
		collapsible: true,
		heightStyle: "content",
		active: false
	});

	// about faculty staff tabs
	$('#tabs').tabs({
		heightStyle: "content",
		collapsible: true,
		hide: {effect: "slideUp", duration: 1000},
		show: {effect: "slideDown", duration: 1000}
	});

	// sortable tabs
	var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });

	//resize images
	$('#resize').click(function() {
		$('#tabs img').animate({
			width: "300px",
			opacity: 0.5
		}, 500);
		$(this).remove();
	});

	// equipment animations
	$('#animate-equip').click(function() {
		$('#equip')
			.animate({
				"font-size": "20px"
			}, 500)
			.animate({
				"width": "700px"
			}, 500)
			.animate({
				"left": "15%"
			}, 500)
			.fadeTo(500, 0.2, function() {
				$(this).slideUp();
				$('#animate-equip').remove();
		});
	});

	// funky events animation
	$('#funkify').click(function() {
		$('#funky p:odd').toggleClass('brown');
		$('#funky p:even').toggleClass('green')
		$('#funky li:odd').toggleClass('brown');
		$('#funky li:even').toggleClass('green');
	});

	// increase text size
	$('#increase-font').click(function() {
		$('#contact').animate({
			"fontSize": "+=2px"
		}, 200);
	});

	// decrease text size
	$('#decrease-font').click(function() {
		$('#contact').animate({
			"fontSize": "-=2px"
		}, 200);
	});

	// tooltip
	$(document).tooltip();

	// buttonset
	$('#gender').buttonset();

	// datepicker
	$('#date').datepicker({
		showAnim: "slideDown",
		showOtherMonths: true,
		selectOtherMonths: true,
		changeMonth: true,
		changeYear: true
	});

	// autocomplete
	var availableCourses = [
		"EAP",
		"ESL",
		"TIS",
		"Spanish",
		"Chinese",
		"Korean",
		"Japanese",
		"Hindi",
		"Italian",
		"French",
		"German",
		"Indonesian"
	];

	$("#course").autocomplete({
		source: availableCourses
	});

	// show more info
	$('#more-info').click(function() {
		$('#more').slideToggle();
	});
});
