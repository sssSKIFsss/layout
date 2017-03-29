'use strict';

let gulp = require('gulp');
// автоподключение плагинов gulp-
let $ = require('gulp-load-plugins')();

// копируем файлы:
module.exports = function (options) {
	return function () {
		return gulp.src(options.src)
		// оставляем в path.relatime только имя файла
		.pipe($.rename(function (path) { path.dirname = '' }))
		.pipe(gulp.dest(options.dst));
	};
};