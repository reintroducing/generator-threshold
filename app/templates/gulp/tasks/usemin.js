'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    usemin = require('gulp-usemin'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify');

gulp.task('usemin', function() {
    gulp.src(config.dev + 'index.html')
        .pipe(usemin({
            css: [minifyCSS()],
            js: [uglify()]
        }))
        .pipe(gulp.dest(config.dist));
});
