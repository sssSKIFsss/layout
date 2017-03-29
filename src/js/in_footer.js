/* =======================================================
 *
 * Template script
 * in_footer.js
 * Подключается в footer.html
 *
 * ======================================================= */

// комментируемый код для проверки корректности path при подключении файлов
/*
 $(".container").html
 ('<a href="../../bower_lib/superfish/js/superfish.min.js"></a>');
 */

// VENDORS -------------------------------------------------------------------

	//= ../../bower_lib/jquery/js/jquery.min.js
	//= ../../bower_lib/bootstrap/js/bootstrap.js
	//= ../../bower_lib/Headhesive.js/js/headhesive.min.js

/*
//	//= ../../bower_lib/owl-carousel/js/owl.carousel.js
//	//= ../../bower_lib/jquery-mousewheel/js/jquery.mousewheel.min.js
//	//= ../../bower_lib/fancybox/js/jquery.fancybox.js
//	//= ../../bower_lib/jquery-waypoints/js/jquery.waypoints.min.js
//	//= ../../bower_lib/jquery.scrollTo/js/jquery.scrollTo.min.js
//	//= ../../bower_lib/kbw-countdown/js/jquery.plugin.js
//	//= ../../bower_lib/kbw-countdown/js/jquery.countdown.js
//	//= ../../bower_lib/kbw-countdown/js/jquery.countdown-ru.js
*/
// PARTIALS ------------------------------------------------------------------

$(document).ready(function() {
  'use strict';

	//= ../parts/units/navbar/top/top-navbar.js
	//= ../parts/units/popup/search_form/popup_searcher.js
});

//  //Таймер обратного отсчета
//  //Документация: http://keith-wood.name/countdown.html
//  //<div class="countdown" date-time="2015-01-07"></div>
//
//  let cd = $(".countdown");
//  let austDay = new Date(cd.attr("date-time"));
//  cd.countdown({until: austDay, format: 'yowdHMS'});
//
//  //Попап менеджер FancyBox
//  //Документация: http://fancybox.net/howto
//  //<a class="fancybox"><img src="image.jpg" /></a>
//  //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
//  $(".fancybox").fancybox();
//
//  //Навигация по Landing Page
//  //$(".top_mnu") - это верхняя панель со ссылками.
//  //Ссылки вида <a href="#contacts">Контакты</a>
//  $(".top_mnu").navigation();
//
//  //Добавляет классы дочерним блокам .block для анимации
//  //Документация: http://imakewebthings.com/jquery-waypoints/
//  $(".block").waypoint(function(direction) {
// 	 if (direction === "down") {
// 		 $(".class").addClass("active");
// 	 } else if (direction === "up") {
// 		 $(".class").removeClass("deactive");
// 	 }
//  }, {offset: 100});
//
//  //Плавный скролл до блока .div по клику на .scroll
//  //Документация: https://github.com/flesler/jquery.scrollTo
//  $("a.scroll").click(function() {
// 	 $.scrollTo($(".div"), 800, {
// 		 offset: -90
// 	 });
//  });
//
//  //Каруселька
//  //Документация: http://owlgraphic.com/owlcarousel/
//  let owl = $(".carousel");
//  owl.owlCarousel({
// 	 items : 4
//  });
//  owl.on("mousewheel", ".owl-wrapper", function (e) {
// 	 if (e.deltaY > 0) {
// 		 owl.trigger("owl.prev");
// 	 } else {
// 		 owl.trigger("owl.next");
// 	 }
// 	 e.preventDefault();
//  });
//  $(".next_button").click(function(){
// 	 owl.trigger("owl.next");
//  });
//  $(".prev_button").click(function(){
// 	 owl.trigger("owl.prev");
//  });
//
//  //Кнопка "Наверх"
//  //Документация:
//  //http://api.jquery.com/scrolltop/
//  //http://api.jquery.com/animate/
//  $("#top").click(function () {
// 	 $("body, html").animate({
// 		 scrollTop: 0
// 	 }, 800);
// 	 return false;
//  });
//
//  //Аякс отправка форм
//  //Документация: http://api.jquery.com/jquery.ajax/
//  $("form").submit(function() {
// 	 $.ajax({
// 		 type: "GET",
// 		 url: "mail.php",
// 		 data: $("form").serialize()
// 	 }).done(function() {
// 		 alert("Спасибо за заявку!");
// 		 setTimeout(function() {
// 			 $.fancybox.close();
// 		 }, 1000);
// 	 });
// 	 return false;
//  });

//;(function () {
//	'use strict';

// // iPad and iPod detection
// var isiPad = function(){
// 	return (navigator.platform.indexOf("iPad") != -1);
// };
//
// var isiPhone = function(){
// 	return (
// 		(navigator.platform.indexOf("iPhone") != -1) ||
// 		(navigator.platform.indexOf("iPod") != -1)
// 	);
// };
//
// // Parallax
// var parallax = function() {
// 	$(window).stellar();
// };

// // Burger Menu
// var burgerMenu = function() {
// 	$('body').on('click', '.js-fh5co-nav-toggle', function(event){
// 		event.preventDefault();
// 		if ( $('#navbar').is(':visible') ) {
// 			$(this).removeClass('active');
// 		} else {
// 			$(this).addClass('active');
// 		}
// 	});
// };
//
// var goToTop = function() {
// 	$('.js-gotop').on('click', function(event){
// 		event.preventDefault();
// 		$('html, body').animate({
// 			scrollTop: $('html').offset().top
// 		}, 500);
// 		return false;
// 	});
// };

// // Page Nav
// var clickMenu = function() {
// 	$('#navbar a:not([class="external"])').click(function(event){
// 		var section = $(this).data('nav-section'),
// 			navbar = $('#navbar');
// 		if ( $('[data-section="' + section + '"]').length ) {
// 			$('html, body').animate({
// 				scrollTop: $('[data-section="' + section + '"]').offset().top
// 			}, 500);
// 		}
// 		if ( navbar.is(':visible')) {
// 			navbar.removeClass('in');
// 			navbar.attr('aria-expanded', 'false');
// 			$('.js-fh5co-nav-toggle').removeClass('active');
// 		}
// 		event.preventDefault();
// 		return false;
// 	});
// };

// // Reflect scrolling in navigation
// var navActive = function(section) {
// 	var $el = $('#navbar > ul');
// 	$el.find('li').removeClass('active');
// 	$el.each(function(){
// 		$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
// 	});
// };
//
// var navigationSection = function() {
// 	var $section = $('section[data-section]');
// 	$section.waypoint(function(direction) {
// 		if (direction === 'down') {
// 			navActive($(this.element).data('section'));
// 		}
// 	}, {
// 		offset: '150px'
// 	});
// 	$section.waypoint(function(direction) {
// 		if (direction === 'up') {
// 			navActive($(this.element).data('section'));
// 		}
// 	}, {
// 		offset: function() { return -$(this.element).height() + 155; }
// 	});
// };

// // Window Scroll
// var windowScroll = function() {
// 	var lastScrollTop = 0;
// 	$(window).scroll(function(event){
// 		var header = $('#fh5co-header'),
// 			scrlTop = $(this).scrollTop();
// 		if(!header.hasClass("if-navbar-fixed-top")) {
// 			if ( scrlTop > 500 && scrlTop <= 2000 ) {
// 				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
// 			} else if ( scrlTop <= 500) {
// 				if ( header.hasClass('navbar-fixed-top') ) {
// 					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
// 					setTimeout(function(){
// 						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
// 					}, 100 );
// 				}
// 			}
// 		}
// 	});
// };

// // HomeAnimations
// var homeAnimate = function() {
// 	if ( $('#fh5co-home').length > 0 ) {
// 		$('#fh5co-home').waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				setTimeout(function() {
// 					$('#fh5co-home .to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // IntroAnimations
// var introAnimate = function() {
// 	if ( $('#fh5co-intro').length > 0 ) {
// 		$('#fh5co-intro').waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				setTimeout(function() {
// 					$('#fh5co-intro .to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInRight animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 1000);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };
//

// // WorkAnimations
// var workAnimate = function() {
// 	if ( $('#fh5co-work').length > 0 ) {
// 		$('#fh5co-work').waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				setTimeout(function() {
// 					$('#fh5co-work .to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // TestimonialAnimations
// var testimonialAnimate = function() {
// 	var testimonial = $('#fh5co-testimonials');
// 	if ( testimonial.length > 0 ) {
// 		testimonial.waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				var sec = testimonial.find('.to-animate').length,
// 					sec = parseInt((sec * 200) - 400);
// 				setTimeout(function() {
// 					testimonial.find('.to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				setTimeout(function() {
// 					testimonial.find('.to-animate-2').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInDown animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, sec);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // TestimonialAnimations
// var servicesAnimate = function() {
// 	var services = $('#fh5co-services');
// 	if ( services.length > 0 ) {
// 		services.waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				var sec = services.find('.to-animate').length,
// 					sec = parseInt((sec * 200) + 400);
// 				setTimeout(function() {
// 					services.find('.to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				setTimeout(function() {
// 					services.find('.to-animate-2').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('bounceIn animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, sec);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // AboutAnimations
// var aboutAnimate = function() {
// 	var about = $('#fh5co-about');
// 	if ( about.length > 0 ) {
// 		about.waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				setTimeout(function() {
// 					about.find('.to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // CounterAnimations
// var countersAnimate = function() {
// 	var counters = $('#fh5co-counters');
// 	if ( counters.length > 0 ) {
// 		counters.waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				var sec = counters.find('.to-animate').length,
// 					sec = parseInt((sec * 200) + 400);
// 				setTimeout(function() {
// 					counters.find('.to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				setTimeout(function() {
// 					counters.find('.js-counter').countTo({
// 						formatter: function (value, options) {
// 							return value.toFixed(options.decimals);
// 						},
// 					});
// 				}, 400);
// 				setTimeout(function() {
// 					counters.find('.to-animate-2').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('bounceIn animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, sec);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // CounterAnimations
// var contactAnimate = function() {
// 	var contact = $('#fh5co-contact');
// 	if ( contact.length > 0 ) {
// 		contact.waypoint( function( direction ) {
// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
// 				setTimeout(function() {
// 					contact.find('.to-animate').each(function( k ) {
// 						var el = $(this);
// 						setTimeout ( function () {
// 							el.addClass('fadeInUp animated');
// 						},  k * 200, 'easeInOutExpo' );
// 					});
// 				}, 200);
// 				$(this.element).addClass('animated');
// 			}
// 		} , { offset: '80%' } );
// 	}
// };

// // Document on load.
// $(function(){
// 	parallax();
// 	burgerMenu();
// 	clickMenu();
// 	windowScroll();
// 	navigationSection();
// 	goToTop();
//
// 	// Animations
// 	homeAnimate();
// 	introAnimate();
// 	workAnimate();
// 	testimonialAnimate();
// 	servicesAnimate();
// 	aboutAnimate();
// 	countersAnimate();
// 	contactAnimate();
// });

//}());
