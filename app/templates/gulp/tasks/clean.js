'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    del = require('del'),
    gutil = require('gulp-util');

gulp.task('clean', function() {
    del([config.dist], function(err) {
        gutil.log(gutil.colors.magenta(config.dist + ' folder deleted for re-creation of a new build.'));
    });
});