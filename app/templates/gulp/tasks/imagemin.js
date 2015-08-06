'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    shell = require('gulp-shell');

gulp.task('imagemin', shell.task([
    'imageoptim -d ' + config.dist + '/' + config.img + ' -a<% if (useJPEGmini) { %> -j<% } %> -q'
]));
