/*global require: true*/

'use strict';

var gulp = require('gulp');

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var cssnext = require('cssnext')({
      messages: {
        // if you want only messages in CSS
        browser: false,

        // if you want only messages in console
        console: true
      }
    });
    var customMedia = require('postcss-custom-media');

    return gulp.src('public/css/**/*.css')
        .pipe( postcss([
          require('autoprefixer'),
          require('postcss-import'),
          customMedia(),
          require('postcss-nested'),
          require('cssnano'),
          cssnext
        ], {
          map: true
        }) )
        .pipe( gulp.dest('public/dist/css/') );
});
