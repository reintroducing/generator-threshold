'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(cb) {
    runSequence(
        [
            'clean'
        ],<% if (useSprites) { %>
        [
            'sprites'
        ],<% } %><% if (useIconFont) { %>
        [
            'icons'
        ],<% } %>
        [
            'sass',
            <% if (useBrowserify) { %>'browserify'<% } else { %>'lint'<% } %>
        ],
        'usemin',
        'copy',
        cb);
});
