'use strict';

let $ = require('gulp-load-plugins')();
let gulp = require('gulp');
let pngquant  = require('imagemin-pngquant');

// Сборка картинок:
module.exports = function (options) {
	return function () {
		return gulp.src(options.src, {since: gulp.lastRun(options.taskName)})
			.pipe($.plumber())
			.pipe($.imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
			}))
			// оставляем в path.relatime только имя файла
			.pipe($.rename(function (path) { path.dirname = '' }))
			.pipe(gulp.dest(options.dst));
	};
};
