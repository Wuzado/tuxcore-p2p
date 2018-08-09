'use strict';

var gulp = require('gulp');
var tuxcoreTasks = require('tuxcore-build');

tuxcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
