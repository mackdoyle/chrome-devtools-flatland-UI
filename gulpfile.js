/* global require */
"use strict";
var gulp = require('gulp');
var lr = require('gulp-livereload');
var sass = require('gulp-sass');
var bump = require('gulp-bump');
var zip = require('gulp-zip');
var runSequence = require('run-sequence');

gulp.task('default', ['watch']);
gulp.task('pubmajor', function(callback) {
  runSequence('bump', 'compress', callback);
});
gulp.task('pubminor', function(callback) {
  runSequence('bump', 'compress', callback);
});
gulp.task('pub', function(callback) {
  runSequence('bump', 'compress', callback);
});

gulp.task('sass', function() {
  gulp.src('./scss/flatland.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./'))
    .pipe(lr());
});

gulp.task('watch', function() {
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('major', function() {
  gulp.src('./*.json')
    .pipe(bump({ type: 'major'}))
    .pipe(gulp.dest('./'));
});

gulp.task('bump', function() {

  var task = gulp.env._[0];
  var type = task === 'pubmajor' ?
    'major' : task === 'pubminor' ?
    'minor' : 'patch';
  return gulp.src('./*.json')
    .pipe(bump({ type: type }))
    .pipe(gulp.dest('./'));
});

gulp.task('compress', function() {
  return gulp.src(['flatland.css', 'devtools.js', 'devtools.html', 'icons/**', '_locales/**', 'manifest.json'])
    .pipe(zip('devtools-flatland.zip'))
    .pipe(gulp.dest('./'))
});
