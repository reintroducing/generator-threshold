'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    replace = require('gulp-replace'),
    rename = require('gulp-rename');

gulp.task('icons', function() {
    return gulp.src(config.fonts + '/icomoon/style.css')
        .pipe(replace('\'fonts/', '$path-fonts + \'icomoon/fonts/'))
        .pipe(replace(/\.icon-(.+?):[\s\S]*?"(.+)"[\s\S]*?}/g, '\$$icon-$1: "$2";\n.icon-$1:before {\n  content: \$$icon-$1;\n}'))
        .pipe(rename('_icomoon.scss'))
        .pipe(gulp.dest(config.sass + '/vendor'));
});
