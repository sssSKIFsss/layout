/* =======================================================
 *
 * Template JavaScript
 * popup_seacher.js
 *
 * ======================================================= */

// для старых IE
$('.if-opacity').css({opacity: 0.7});

// Раскрытие popup-окна
// ВНИМАНИЕ!
// .if-top-navbar__search-button - класс кнопки извне,
// при нажатии на которую появится это popup-окно
$(".if-top-navbar__search-button").click(function(){
	$(".if-search-popup").show();
	$(".if-close-btn").show();
	$(".if-opacity").show();
});

// Закрытие popup-окна
$(".if-close-btn").click(function(){
	$(".if-search-popup").hide();
	$(".if-close-btn").hide();
	$(".if-opacity").hide();
});
