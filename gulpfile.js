// Requires
var gulp = require('gulp');

// Include plugins
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var cleanCSS     = require('gulp-clean-css');
var minifyJs     = require('gulp-minify');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('./src/mdl-expansion.scss')
        .pipe(sass({
            includePaths: [
                './node_modules'
            ],
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer())
        .pipe(rename('mdl-expansion.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('mdl-expansion.min.css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
    gulp.src('./src/mdl-expansion.js')
        .pipe(minifyJs({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('./dist/'));
});

// Watcher
gulp.task('watch', function() {
    gulp.watch(['src/*.scss'], ['sass']);
    gulp.watch(['src/*.js'], ['js']);
});

gulp.task('default', ['sass', 'js']);
