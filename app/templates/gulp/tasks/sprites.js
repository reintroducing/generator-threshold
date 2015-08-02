'use strict';

var gulp = require('gulp'),
    config = require('../config.json'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream'),

    tmpl = './gulp/utils/spritesmith.template.mustache',
    padding = 5;

gulp.task('sprites', function() {
    var spriteSrc = config.sprites,
        spriteDest = config.img + '/' + config.sprites,
        sassDest = config.sass + '/' + config.sprites,
        retina = gulp.src(spriteSrc + '/source-2x/*.png')
            .pipe(spritesmith({
                imgName: 'sprites@2x.png',
                cssName: '_sprites-2x.scss',
                cssTemplate: tmpl,
                cssOpts: {
                    sprite_type: '2x'
                },
                padding: padding
            })),
        regular = gulp.src(spriteSrc + '/source-1x/*.png')
            .pipe(spritesmith({
                imgName: 'sprites.png',
                cssName: '_sprites-1x.scss',
                cssTemplate: tmpl,
                cssOpts: {
                    sprite_type: '1x'
                },
                padding: padding
            })),

        retinaImgStream = retina.img.pipe(gulp.dest(spriteDest)),
        retinaCSSStream = retina.css.pipe(gulp.dest(sassDest)),
        regularImgStream = regular.img.pipe(gulp.dest(spriteDest)),
        regularCSSStream = regular.css.pipe(gulp.dest(sassDest));

    return merge(
        retinaImgStream,
        retinaCSSStream,
        regularImgStream,
        regularCSSStream
    );
});
