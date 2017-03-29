// gulp                  - development version
// NODE_ENV=release gulp - release version
// set NODE_ENV=release && gulp - для windows

'use strict';

//VARIABLES ------------------------------------------------------------------
const gulp = require('gulp');

// js объект в который пропишем все нужные нам пути,
// чтобы при необходимости легко в одном месте их редактировать:
const path = {
	build: { // пути, куда складывать готовые после сборки файлы
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		images: 'build/img/',
		photos: 'build/photos/',
		fonts: 'build/fonts/',
	},
	src: { // Пути откуда брать исходники
		htaccess: ['.htaccess', 'src/favicon.ico'],
		html: 'src/*.html',
		js: ['src/js/in_head.js', 'src/js/in_footer.js',],
		style: 'src/style/style.scss',
	 	images: ['src/img/*.{png,jpg,gif}', 'bower_lib/**/img/*.{png,jpg,gif}'],
		photos: 'src/photos/*.{png,jpg,gif}',
		svg_sprite: 'src/img/sprites/svg/*.svg',
		fonts: 'bower_lib/fonts/**/font/*.{otf,eot,svg,ttf,woff,woff2}'
	},
	tmp: { // Место хранения временных файлов
		style: 'tmp/style/'
	},
	manifest: {
		html_path: 'manifest/html_url.json',
		css_path: 'manifest/css_url.json',
		css_hash: 'manifest/css_hash.json',
		js_path: 'manifest/js_url.json',
		js_hash: 'manifest/js_hash.json'
	},
	watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
		html: ['src/*.html','src/parts/**/*.html'],
		js: ['src/js/*.js','src/js/**/*.js','src/parts/**/*.js'],
		style: ['src/style/style.scss','src/style/**/*.scss','src/parts/**/*.scss','tmp/style/*.scss'],
		images: 'src/img/*.{png,jpg,gif}',
		photos: 'src/photos/*.{png,jpg,gif}',
		svg_images: 'src/img/svg/*.svg'
	}
};

// вызов тасков через require из task-файлов
function lazyRequireTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function(callback) {
		let task = require(path).call(this,options);
		return task(callback);
	});
}

// TASKS ---------------------------------------------------------------------

// Очистка папки build
lazyRequireTask('clean','./gulp_tasks/clean',{
	src: path.build.html,
	tmp: path.tmp.style,
	css_hash: path.manifest.css_hash,
	js_hash: path.manifest.js_hash
});

// Веб сервер
lazyRequireTask('server','./gulp_tasks/server',{
	src: path.build.html + '**/*.*'
});

// Перенос htaccess и favicon:
lazyRequireTask('htaccess:copy', './gulp_tasks/copy', {
	src: path.src.htaccess,
	dst: path.build.html
});

// Перенос шрифтов:
lazyRequireTask('fonts:copy', './gulp_tasks/copy', {
	src: path.src.fonts,
	dst: path.build.fonts
});

// Сборка html:
lazyRequireTask('html:build', './gulp_tasks/html', {
	src: path.src.html,
	dst: path.build.html
});

// Сборка css:
lazyRequireTask('css:build', './gulp_tasks/css', {
	src: path.src.style,
	dst: path.build.css,
	sprite_dst: path.build.images
});

// Сборка js:
lazyRequireTask('js:build', './gulp_tasks/js', {
	src: path.src.js,
	dst: path.build.js
});

// Перенос картинок:
lazyRequireTask('images:build', './gulp_tasks/images', {
	src: path.src.images,
	dst: path.build.images
});

// Перенос фото:
lazyRequireTask('photos:build', './gulp_tasks/images', {
	src: path.src.photos,
	dst: path.build.photos
});

// Сборка спрайта svg. Сборка jpg и png выполняется в css:
lazyRequireTask('svg_sprite:build', './gulp_tasks/svg_sprite', {
	src: path.src.svg_sprite,
	dst: path.build.images,
	tmp: path.tmp.style
});

// Таск, объединяющий все вышеприведенные:
gulp.task('build', gulp.series(
	'clean',
	'svg_sprite:build', // обязательно перед css:build
	gulp.parallel(
		'htaccess:copy',
		'fonts:copy',
		'images:build',
		'photos:build',
		'js:build',
		'css:build'
	),
	'html:build' // зависит от хеш-сумм js и css файлов при продакшене
));

// Таск-watcher:
gulp.task('watch', function(){
	gulp.watch(path.watch.html, gulp.series('html:build'));
	gulp.watch(path.watch.style, gulp.series('css:build'));
	gulp.watch(path.watch.js, gulp.series('js:build'));
	gulp.watch(path.watch.images, gulp.series('images:build'));
	gulp.watch(path.watch.photos, gulp.series('photos:build'));
	gulp.watch(path.watch.svg_images, gulp.series('svg_sprite:build'));
});

// Итоговый таск - Development
gulp.task('default', gulp.series('build', gulp.parallel('server', 'watch')));

/*
	// отслеживание работы gulp через плагин gulp-debug

	const debug = require('gulp-debug');
	gulp.task('html:build', function () {
		return gulp.src(path.src.html) //Выберем файлы по нужному пути
			.pipe(debug({title: 'src'})) // дебажим src
			.pipe(rigger())
			.pipe(debug({title: 'rigger'})) // дебажим rigger
			.pipe(gulp.dest(path.build.html)); //Выплюнем их в папку build
	});
*/

/*
// вывод на консоль содержимого потока в виде файлов

	gulp.task('html:build', function () {
		return gulp.src(path.src.html)
			.on('data', function(file){
				console.log({
					// main components
					contents: file.contents,
					path:     file.path,
					cwd:      file.cwd,
					base:     file.base,
					// component helpers
					relatime: file.relative,
					dirname:  file.dirname,
					stem:     file.stem,
					extname:  file.extname
				});
			})
			.pipe(gulp.dest(path.build.html)); //Выплюнем их в папку build
	});
*/
