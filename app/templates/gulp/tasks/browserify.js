'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    _ = require('lodash'),
    gulpif = require('gulp-if'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    handleErrors = require('../utils/handle-errors'),
    bundleLogger = require('../utils/bundle-logger');

var browserifyConfig = [
        {
            entries: config.dev + config.js + '/app.js',
            dest: config.js,
            outputName: 'bundle.js'
        }
    ];

var browserifyTask = function(config, callback) {
    var bundleQueue = config.length,
        browserifyThis = function(bundleConfig) {
            if (global.isWatching) {
                _.extend(bundleConfig, watchify.args, {debug: true});
            }

            var b = browserify(bundleConfig),
                bundle = function() {
                    bundleLogger.start(bundleConfig.outputName);

                    return b.bundle()
                        .on('error', handleErrors)
                        .pipe(source(bundleConfig.outputName))
                        .pipe(buffer())
                        .pipe(gulpif(!global.isWatching, uglify()))
                        .pipe(gulp.dest(bundleConfig.dest))
                        .on('end', reportFinished)
                        .pipe(gulpif(global.isWatching, browserSync.reload({stream: true})));
                };

            if (global.isWatching) {
                b = watchify(b);
                b.on('update', bundle);
                bundleLogger.watch(bundleConfig.outputName);
            }

            var reportFinished = function() {
                bundleLogger.end(bundleConfig.outputName);

                if (bundleQueue) {
                    bundleQueue--;

                    if (bundleQueue === 0) {
                        callback();
                    }
                }
            };

            return bundle();
        };

    config.forEach(browserifyThis);
};

gulp.task('browserify', function(cb) {
    browserifyTask(browserifyConfig, cb);
});