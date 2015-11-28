/*global require: true*/

'use strict';

var gulp = require('gulp');

gulp.task('default', ['watch', 'css', 'webpack:build', 'start']);

gulp.task('build', ['css', 'webpack:build']);

gulp.task('watch', function () {
  gulp.watch(['public/css/**/*.css'], ['css']);
  gulp.watch(['public/es/**/*.es'], ['webpack:build']);
});
