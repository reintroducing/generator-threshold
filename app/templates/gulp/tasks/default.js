'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    global.isWatching = true;

    runSequence(<% if (useSprites) { %>
        [
            'sprites'
        ],<% } %><% if (useIconFont) { %>
        [
            'icons'
        ],<% } %>
        'sass',
        'watch',
        'browser-sync',
        cb);
});
