'use strict';

var gulp = require('gulp');
var garlicoreTasks = require('garlicore-build');

garlicoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
