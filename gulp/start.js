/*global require: true*/

'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , watch: [
    'public/css',
    'public/es',
    'server.js'
  ]
  , ext: 'js css es'
  , env: { 'NODE_ENV': 'development' }
  });
});
