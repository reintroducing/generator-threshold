'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    eslint = require('gulp-eslint'),
    handleErrors = require('../utils/handle-errors');

gulp.task('lint', function() {
    return gulp.src([
            config.js + '/**/*.js',
            '!' + config.js + '/libs/**/*.js',
            <% if (useBrowserify) { %>'!' + config.js + '/bundle.js'<% } else { %>'!' + config.js + '/main.js'<% } %>,
            '!' + config.js + '/**/*.min.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('error', handleErrors);
});
