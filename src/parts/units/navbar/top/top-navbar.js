/* =======================================================
 *
 * Template JavaScript
 * top-navbar.js
 *
 * требуется headhesive.min.js в in_footer.js
 *
 * ======================================================= */

// липкое меню
//------------
	// options
	let options = {
		offset: 500
	};
	// create a new instance of Headhesiv.js and pass in....
	let header = new Headhesive('.if-header-main', options);

// кнопка мобильного меню
// код должен быть ниже кода с липким меню
//----------------------------------------
	$('.if-top-navbar__menu-button').click(function (){
		$(".if-top-navbar__menu ul").slideToggle(500);
		return false;
	});

