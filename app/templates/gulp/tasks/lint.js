'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    eslint = require('gulp-eslint'),
    friendlyFormatter = require('eslint-friendly-formatter'),
    handleErrors = require('../utils/handle-errors');

gulp.task('lint', function() {
    return gulp.src([
            config.js + '/**/*.{js,jsx}',
            '!' + config.js + '/libs/**/*.{js,jsx}',
            <% if (useBrowserify) { %>'!' + config.js + '/bundle.js'<% } else { %>'!' + config.js + '/main.js'<% } %>,
            '!' + config.js + '/**/*.min.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format(friendlyFormatter))
        .pipe(eslint.failAfterError())
        .on('error', handleErrors);
});
