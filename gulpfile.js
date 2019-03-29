const gulp = require('gulp'),
	cssScss = require('gulp-css-scss'),
	browserSync = require('browser-sync').create(),
	uglifycss = require('gulp-uglifycss');

function style() {
	return gulp.src('./css/**/*.css')
		.pipe(cssScss())
		.pipe(gulp.dest('sass'))
		.pipe(browserSync.stream());
}
function watch(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./css/**/*.css', style);
	gulp.watch('./*.html').on('change', browserSync.reload);

}
gulp.task('uglifycss', function(){
	gulp.src('css/*.css')
		.pipe(uglifycss())
		.pipe(gulp.dest('css/cssmin'));
});

exports.style = style;
exports.watch = watch;